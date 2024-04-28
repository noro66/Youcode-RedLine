<?php

namespace App\Policies;

use App\Models\Order;
use App\Models\User;

class OrderPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function destroyOrder(User $user, Order $order)
    {
        if ($client = $user->client){
           return $client->orders()->where('id', $order->id)->exists();
        }
        return false;
    }

    public function acceptOrder(User $user, Order $order): bool
    {

        if ($user->seller){
            $services = $user->seller->services;
            // Iterate over each service to check if any orders match the condition
            foreach ($services as $service) {
                if ($service->orders()->where('id', $order->id)->where('status', '!=', false)->doesntExist()) {
                    return true;
                }
            }
        }
        return false;
    }
    public function completeOrder(User $user, Order $order): bool
    {
        if ($user->client && !$order->is_completed) {
            return $user->client->orders()->where('id','=', $order->id)->exists();
        }
        return false;
    }
}
