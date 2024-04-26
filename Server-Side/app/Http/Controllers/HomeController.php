<?php

namespace App\Http\Controllers;

use App\Models\ServiceCategory;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(request $request)
    {
        if ($request->has('limit')){
        $categories = ServiceCategory::query()->with('services')->limit(10)->get();
        }else{
            $categories = ServiceCategory::query()->with('services')->get();
        }
        return response()->json([
            'limit' => $request->input('limit'),
            'count' => count($categories),
            'categories' => $categories
        ]);
    }
}
