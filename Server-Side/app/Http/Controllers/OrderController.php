<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Models\Service;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Support\Facades\Auth;


class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {
        $orders = Order::all();
        return response()->json([
            'orders' => $orders,
        ]);

    }

    public function show(Order $order)
    {
        return response()->json([
            'order' => $order,
        ]);
    }

    public function myOrders(): \Illuminate\Http\JsonResponse
    {
        $orders = Auth::user()->client->orders;
        return response()->json([
            'order' => $orders,
        ]);
    }

    /**
     * @throws AuthorizationException
     */
    public function store(OrderRequest $request)
    {
        $service = Service::findOrFail($request->input('service_id'));
        $this->authorize('OrderService', $service);
        $order = $service->orders()->create([
            'payment_intent' => $request->input('payment_intent'),
            'client_id' => Auth::user()->client->id,
            'price' => $service->price,
            'image' => $service->cover_image,
            'title' => uniqid('-', true). '='. $request->input('title'),

        ]);
        return response()->json([
            'success' => true,
            'message' => 'Order created!',
            'order' => $order
        ]);
    }


}
