<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServiceRequest;
use App\Models\Image;
use App\Models\Service;
use App\Repositories\Services\ServicesService;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ServiceController extends Controller
{
    public function __construct(){
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index(Request $request): JsonResponse
    {

        $serviceQuery = Service::with('images', 'seller', 'service_category', 'user');

        if (request()->has('category')) {
            $serviceQuery->where('service_category_id', request()->input('category'));
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
            'count' => Service::count(),
            'services' => $services,
        ]);

    }

//    public function store(StoreServiceRequest $request): JsonResponse
//    {
//
//    }
    public function show(Service $service): JsonResponse
    {
        return response()->json([
            'service' => $service->load('images', 'seller', 'service_category')
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


}
