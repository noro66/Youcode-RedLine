<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function users(): \Illuminate\Http\JsonResponse
    {
        return response()->json(User::paginate(12));
    }

    public function toggleRestrict(User $user): \Illuminate\Http\JsonResponse
    {
        $user->is_restricted = !$user->is_restricted;
        $user->save();
        return response()->json($user);
    }

    public function aproveService(Service $service): \Illuminate\Http\JsonResponse
    {
        $service->is_approved = true;
        $service->save();
        return response()->json($service);
    }

    public function servicestoApprove()
    {
        return response()->json(Service::all()->where('is_approved', false));
    }
}
