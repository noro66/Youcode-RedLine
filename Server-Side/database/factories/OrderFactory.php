<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Order;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition()
    {

        $service = Service::inRandomOrder()->first();

        return [
            'image' => $service->cover_image,
            'title' => $service->title,
            'price' => $this->faker->randomNumber(2),
            'is_completed' => $this->faker->boolean(),
            'payment_intent' => $this->faker->uuid,
            'service_id' => $service->id,
//            'client_id' => Client::inRandomOrder()->first()->id,
            'client_id' => Client::factory()->create()->id,
        ];
    }
}
