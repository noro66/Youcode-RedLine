<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AuthorizationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function check(Request $request): \Illuminate\Http\JsonResponse
    {
        $action = $request->action;
        $subject = $request->subject;

        if (Gate::allows($action, $subject)) {
            return response()->json(['can' => true]);
        }

        return response()->json(['can' => false]);
    }
}
