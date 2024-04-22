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
    protected ServicesService $serviceRepository;

    public function __construct(ServicesService $serviceRepository) {
        $this->middleware('auth:api')->except(['index', 'show']);
        $this->serviceRepository = $serviceRepository;
    }

    /**
     * @throws AuthorizationException
     */
    public function store(StoreServiceRequest $request): JsonResponse
    {
        $this->authorize('create', Auth::user());
        $imgPath = $request->file('cover_image')->store('coverImages', 'public');

        $data = $request->only(['title',
            'short_title',
            'desc',
            'short_desc',
            'price',
            'sales',
            'star_number',
            'delivery_time',
            'revision_time',
            'service_category_id',
            ]);
        $data['seller_id'] = Auth::id();
        $data['cover_image'] = $imgPath;
        $service = $this->serviceRepository->create($data);
        if ($request->hasFile('images')) {
            $images = $request->file('images');
            foreach ($images as $image) {
                $imgPath = $image->store('coverImages', 'public');
                Image::create([
                    'image_url' => $imgPath,
                    'service_id' => $service->id,
                ]);
            }
        }
        return response()->json($service, 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $data = $request->only(['name', 'description', 'price']);
        $service = $this->serviceRepository->update($id, $data);
        return response()->json($service, 200);
    }

    public function destroy($id): JsonResponse
    {
        $service = $this->serviceRepository->delete($id);
        return response()->json($service, 200);
    }
}
