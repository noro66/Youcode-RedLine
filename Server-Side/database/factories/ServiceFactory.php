<?php

namespace Database\Factories;

use App\Models\Seller;
use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Service>
 */

class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'short_title' => $this->faker->words(3, true),
            'desc' => $this->faker->paragraph(),
            'cover_image' => $this->faker->imageUrl(),
            'short_desc' => $this->faker->sentence(),
            'price' => $this->faker->numberBetween(10, 1000),
            'sales' => $this->faker->numberBetween(0, 100),
            'total_stars' => $this->faker->numberBetween(0, 5),
            'star_number' => $this->faker->numberBetween(0, 5),
            'delivery_time' => $this->faker->numberBetween(1, 7),
            'revision_time' => $this->faker->numberBetween(0, 3),
            'seller_id' => function () {
                return Seller::factory()->create()->id;
            },
            'service_category_id' => function () {
                return ServiceCategory::factory()->create()->id;
            },
        ];
    }
}
