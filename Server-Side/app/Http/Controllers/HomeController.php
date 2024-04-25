<?php

namespace App\Http\Controllers;

use App\Models\ServiceCategory;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $categories = ServiceCategory::query()->limit(10)->with('services')->get();
        return response()->json([
            'categories' => $categories
        ]);
    }
}
