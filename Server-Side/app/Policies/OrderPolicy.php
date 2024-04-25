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
}
