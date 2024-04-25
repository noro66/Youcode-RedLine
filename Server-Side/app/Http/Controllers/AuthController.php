<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\Client;
use App\Models\Seller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
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
        $this->middleware('auth:api')->except(['login', 'register']);
    }

    /**
     * @throws ValidationException
     */
    public function register(UserRequest $request): JsonResponse
    {
        try {
            $credentials = $request->validated();
            $imgPath = $request->file('img')->store('userImages', 'public');
            $user = User::create([
                'username' => $credentials['username'],
                'email' => $credentials['email'],
                'img' => $imgPath,
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
     * @return JsonResponse
     * @throws ValidationException
     */
    public function login(Request $request): JsonResponse
    {
        if ($request->isMethod('GET')) {
            return \response()->json([
                'success' => false,
                'message' => 'you have to log in first to access to this page',
            ]);
        }
        $credentials = Validator::make(request()->only('email', 'password'), [
            'email' => 'required|email',
            'password' => 'required',
        ])->validated();

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $expirationTime = Carbon::now()->addDays(12);

        config()->set('jwt.ttl', 60*24*7);
        $user = Auth::user();
        $token = auth()->claims([
            'user' => auth()->user(),
        ])->attempt($credentials, ['exp' => $expirationTime->timestamp]);
        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return JsonResponse
     */
    public function me(): JsonResponse
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh(): JsonResponse
    {
        $token = auth()->claims([
            'user' => auth()->user(),
        ])->refresh();
        return $this->respondWithToken($token);
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken(string $token): JsonResponse
    {
       return response()->json([
            'success' => true,
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);

    }
}
