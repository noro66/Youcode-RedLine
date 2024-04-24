<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    public function index(): \Illuminate\Http\JsonResponse
    {
        $reviews = Review::all();
        return response()->json([
            'reviews' => $reviews,
        ]);

    }

    public function show(Review $review): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'review' => $review,
        ]);
    }

    public function myReviews(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'review' => Auth::user()->client->reviews->all()->where('client_id', '=',  Auth::user()->client->id),
            ]);
    }

    /**
     * Store a newly created resource in storage.
     * @throws AuthorizationException
     */
    public function store(ReviewRequest $request)
    {
        $service = Service::findOrFail($request->input('service_id'));
        if ($service){
            $this->authorize('createReview', $service);
            $reviewFrom = $request->validated();
            $review = Review::create([
                'service_id' => $reviewFrom['service_id'],
                'star' => $reviewFrom['star'],
                'description' => $reviewFrom['description'],
                'client_id' => Auth::user()->client->id,
            ]);
            return response()->json([
                'message' => 'Review created',
                'review' => $review,
                ]);
        }
    }


    /**
     * Update the specified resource in storage.
     * @throws AuthorizationException
     */
    public function update(ReviewRequest $request, Review $review): \Illuminate\Http\JsonResponse
    {
        $service = Service::findOrFail($request->input('service_id'));
        $this->authorize('updateReview', $service);
        $reviewFrom = $request->validated();
         $review->update($reviewFrom);
         return response()->json([
             'review' => $review,
         ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        $delted = Auth::user()->client()->detach($review);
        if ($delted){
            $review->delete();
            return response()->json([
                'success' => true,
                'message' => 'Review deleted',
                'review' => $review,
            ]);
        }
    }
}
