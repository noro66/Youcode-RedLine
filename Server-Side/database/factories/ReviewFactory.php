<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Review>
 */
class ReviewFactory extends Factory
{
    protected $model = Review::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'star' => $this->faker->numberBetween(1, 5),
            'description' => $this->faker->paragraph,
            'service_id' => function () {
                return Service::factory()->create()->id;
            },
            'client_id' => function () {
                return Client::factory()->create()->id;
            },
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => now(),
        ];
    }
}
