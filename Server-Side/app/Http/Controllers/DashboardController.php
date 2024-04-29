<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'is_admin']);
    }

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

    public function servicestoApprove(): \Illuminate\Http\JsonResponse
    {
        return response()->json(Service::all()->where('is_approved', false));
    }
    public function statistics()
    {
        $totaleUsers = DB::table('users')->count();
        $clients = DB::table('users')->where('type', '=', 'client')->count();
        $sellers = DB::table('users')->where('type','=',  'seller')->count();
        $services =  DB::table('services')->count();
        $orders = DB::table('orders')->count();
        $totalSales = Service::sum('sales');

        return response()->json([
            'totalUsers' => $totaleUsers,
            'clients' => $clients,
            'sellers' => $sellers,
            'services' => $services,
            'orders' => $orders,
            'totalSales' => $totalSales
        ]);

    }
}
