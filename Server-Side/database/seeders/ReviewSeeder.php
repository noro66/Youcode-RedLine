<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Review;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
//        Review::factory()->count(50)->create();
        $services = Service::all();
        $clients = Client::all();

        foreach ($services as $service) {
            for ($i = 0; $i < 3; $i++) {
                $randomClient = $clients->random();
                Review::factory()->create([
                    'service_id' => $service->id,
                    'client_id' => $randomClient->id,
                ]);
            }
        }
    }
}
