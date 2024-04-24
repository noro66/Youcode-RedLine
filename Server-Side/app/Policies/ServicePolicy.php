<?php

namespace App\Policies;

use App\Models\Service;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Carbon;

class ServicePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    public function createReview(User $user, Service $service): bool
    {
        return !$user->isSeller && $service->orderedBy($user) && !$service->reviewedBy($user);
    }

    public function updateReview(User $user, Service $service): bool
    {
        return !$user->isSeller && $service->orderedBy($user) && $service->reviewedBy($user);
    }
    /**
     * Determine whether the user can view the model.
     */
    public function OrderService(User $user, Service $service): bool
    {
        if (!$user->isSeller ) {
            if ($service->orderedBy($user)){
                $order = $service->orders->where('client_id', $user->client->id)->first();
                if ($order) {
                    $creationDate = Carbon::parse($order->updated_at);
                    $DayFromNow = Carbon::now()->addDay(1);
                    return !$order->is_completed && $creationDate->greaterThan($DayFromNow);
                }
            }
            return  true;
        }

        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->isSeller;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Service $service): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Service $service): bool
    {
        if ($user->seller){
            return $user->seller->id === $service->seller_id;
        }
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Service $service): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Service $service): bool
    {
        //
    }
}
