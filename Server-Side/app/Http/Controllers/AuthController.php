<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\Client;
use App\Models\Seller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * @throws ValidationException
     */
    public function register(UserRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $credentials = $request->validated();
            $credentials['img'] = $request->hasFile('img')
                ? $request->file('img')->store('userImages', 'public')
                : 'testImage';

            $user = User::create([
                'username' => $credentials['username'],
                'email' => $credentials['email'],
                'img' => $credentials['img'],
                'password' => Hash::make($credentials['password']),
                'type' => $credentials['type']
            ]);

            if ($user->type === 'seller') {
                $validator = Validator::make($credentials, [
                    'phone' => 'required|unique:sellers,phone',
                    'description' => 'required|string',
                ]);

                if ($validator->fails()) {
                    $user->delete();
                    return response()->json([
                        'status' => false,
                        'message' => $validator->errors()->first(),
                    ], 422);
                }
                $user->isSeller = true;
                $user->save();
                $user->seller()->create([
                    'phone' => $credentials['phone'],
                    'description' => $credentials['description'],
                ]);
            } elseif ($user->type === 'client') {
                $user->client()->create();
            }

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
            ]);
        } catch (\Illuminate\Validation\ValidationException $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->validator->errors()->first(),
            ], 422);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage(),
            ], 500);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        if ($request->isMethod('GET')) {
            return \response()->json([
                'success' => false,
                'message' => 'you have to log in first to access to this page',
            ]);
        }
        $credentials = request(['email', 'password']);

        if (!auth()->attempt($credentials)) {
            return response()->json(['success' => false, 'error' => 'User Not Found'], 401);
        }
        $user = Auth::user();

        $isSeller = $user->isSeller;
        $userType = $user->type;
        $userId = $user->id;

        $token = auth()->claims([
            'is_seller' => $isSeller,
            'user_type' => $userType,
            'user_id' => $userId
        ])->attempt($credentials);
        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        Cookie::forget('jwt_token');
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh(): \Illuminate\Http\JsonResponse
    {

        $user = Auth::user();

        $isSeller = $user->isSeller;
        $userType = $user->type;
        $userId = $user->id;

        $token = auth()->claims([
            'is_seller' => $isSeller,
            'user_type' => $userType,
            'user_id' => $userId
        ])->refresh();
        return $this->respondWithToken($token);
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken(string $token): \Illuminate\Http\JsonResponse
    {
        Cookie::queue(Cookie::forget('jwt_token'));
        $response = response()->json([
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
        $response->cookie('jwt_token', $token);
        return $response;
    }
}
