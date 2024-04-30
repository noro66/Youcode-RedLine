<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServiceRequest;
use App\Models\Feature;
use App\Models\Image;
use App\Models\Service;
use App\Models\ServiceCategory;
use App\Repositories\Services\ServicesService;
use http\Env\Response;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{
    public function __construct(){
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index(Request $request): JsonResponse
    {

        $serviceQuery = Service::with('images', 'seller', 'service_category', 'user', 'reviews');

        if (request()->has('search')){
            $serviceQuery->where('title', 'like', '%'.request('search').'%');
        }
        if (request()->has('category')) {
            $serviceQuery->where('service_category_id', request()->input('category'));
            $category = ServiceCategory::find(request()->input('category'));
        }

        $min = request()->has('min') ? request()->input('min') : null;
        $max = request()->has('max') ? request()->input('max') : null;

        if ($min !== null) {
            $serviceQuery->where('price', '>=', $min);
        }

        if ($max !== null) {
            $serviceQuery->where('price', '<=', $max);
        }
        $sort = request()->input('sort');

        if ($sort === 'latest') {
            $serviceQuery->latest();
        } elseif ($sort === 'sales') {
            $serviceQuery->orderBy('sales', 'desc');
        }

        $services = $serviceQuery->get();

        return response()->json([
            'category' => $category ?? 'None',
            'count' => $services->count(),
            'services' => $services,
        ]);

    }

//    public function store(StoreServiceRequest $request): JsonResponse
//    {
//        $serviceForm = $request->validated();
//
//        $service = Service::create($serviceForm);
//        return response()->json([
//            'service' => $service,
//        ]);
//    }
    /**
     * @throws AuthorizationException
     */
    public function store(StoreServiceRequest $request): JsonResponse
    {
        if (Auth::user()->isSeller) {
//        return \response()->json(['isSeller' => Auth::user()->isSeller]);
            $data = $request->validated();
            $imgPath = $request->file('cover_image')->store('coverImages', 'public');
            $data['seller_id'] = Auth::user()->seller->id;
            $data['cover_image'] = $imgPath;
            $service = Service::create($data);
            if ($request->hasFile('images')) {
                $images = $request->file('images');
                foreach ($images as $image) {
                    $imgPath = $image->store('serviceImages', 'public');
                    Image::create([
                        'image_url' => $imgPath,
                        'service_id' => $service->id,
                    ]);
                }
            }
            if($request->has('features')){
                $features = $request->input('features');
                foreach ($features as $feature) {
                    Feature::create([
                        'service_id' => $service->id,
                        'name' => $feature,
                    ]);
                }
            }
            return response()->json([
                'success' => true,
                'service' => $service,
            ], 201);
        }else{
            return \response()->json(['you dont Have permission to create a service']);
        }
    }
    public function show(Service $service): JsonResponse
    {
        return response()->json([
            'service' => $service->load('images', 'seller', 'service_category', 'reviews', 'features', 'orders')
        ]);
    }

    /**
     * @throws AuthorizationException
     */
    public function destroy(Service $service): JsonResponse
    {
        $this->authorize('delete', $service);
        return response()->json([
            'success' => $service->delete()
        ]);
    }

    public function myServices(): JsonResponse
    {
        $seller = Auth::user()->seller;
        if ($seller) {
            $services = Service::where('seller_id', $seller->id)->get();
            return response()->json([
                'services' => $services,
            ]);
        }

        return response()->json([
            'message' => 'User is not a seller.',
        ], 403);
    }


}
