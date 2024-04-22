<?php

namespace App\Providers;

use App\Repositories\Interfaces\ServiceInterface;
use App\Repositories\Services\ServicesService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(ServiceInterface::class, ServicesService::class);
    }

    /**ServicesService implements ServiceInterface
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
