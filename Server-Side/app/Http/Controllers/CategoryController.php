<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = ServiceCategory::latest()->get();
        return response()->json($categories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $validator = $request->validated();

        $category = new ServiceCategory();
        $category->title = $request->title;
        $category->description = $request->description;

        $imagePath = $request->file('image')->store('categories', 'public');
        $category->image = $imagePath;

        $category->save();

        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(ServiceCategory $category): \Illuminate\Http\JsonResponse
    {
        return response()->json($category);
    }


    public function update(CategoryRequest $request, ServiceCategory $category): \Illuminate\Http\JsonResponse
    {

        // Validate the request
        $validator = $request->validated();

        // Update category properties
        $category->title = $request->input('title');
        $category->description = $request->input('description');

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('categories', 'public');
            $category->image = $imagePath;
        }

        // Save the category changes
        $category->save();

        // Return a JSON response with the updated category
        return response()->json([
            'success' => true,
            'message' => 'Category updated successfully',
            'ctegory' => $category
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): \Illuminate\Http\JsonResponse
    {
        $category = ServiceCategory::findOrFail($id);
        $category->delete();
        return response()->json(null, 204);
    }
}
