<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorizationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('categories/{category}/update', [CategoryController::class, 'update']);

Route::middleware(['auth:api'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], static function () {
    Route::match(['get','post'],'login', [AuthController::class, 'login'])->name('login');
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

Route::get('myServices', [ServiceController::class, 'myServices']);
Route::resource('services', ServiceController::class);

Route::put('review/update/{review}', [ReviewController::class, 'update']);

//Route::get('serviceReview/{service}', [ReviewController::class, 'serviceReview']);
Route::get('myReviews', [ReviewController::class, 'myReviews']);
Route::get('userCanReview/{service}', [ReviewController::class, 'userCanReview']);
Route::resource('review', ReviewController::class);


Route::resource('order', OrderController::class);
Route::get('myOrders', [OrderController::class, 'myOrders']);
Route::get('userCanOrder/{service}', [OrderController::class, 'userCanOrder']);
Route::post('accept/{order}', [OrderController::class, 'accept']);
Route::post('completed/{order}', [OrderController::class, 'completed']);

Route::get('home', [HomeController::class, 'index']);
Route::get('profile', [AuthController::class, 'profile']);


Route::get('users', [DashboardController::class, 'users']);
Route::get('statistics', [DashboardController::class, 'statistics']);
Route::post('aproveService/{service}', [DashboardController::class, 'aproveService']);
Route::post('users/{user}/toggle-restrict', [DashboardController::class, 'toggleRestrict']);
Route::get('servicestoApprove', [DashboardController::class, 'servicestoApprove']);
    Route::resource('categories', CategoryController::class);
