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

    public function index(): JsonResponse
    {
        return response()->json([
            'count' => Service::all()->count(),
            'services' => Service::with('images', 'seller', 'service_category', 'user')->get()
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
