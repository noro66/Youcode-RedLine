<?php

namespace App\Providers;

use App\Repositories\Interfaces\ServiceInterface;
use App\Repositories\Services\ServicesService;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**ServicesService implements ServiceInterface
     * Bootstrap any application services.
     */
    public function boot(): void
    {
       Validator::extend('not_passed',  function ($attribute, $value) {
            return strtotime($value) >= strtotime(date('Y-m-d'));
        });
    }
}
