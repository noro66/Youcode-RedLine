<?php

namespace App\Http\Controllers;

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
}
