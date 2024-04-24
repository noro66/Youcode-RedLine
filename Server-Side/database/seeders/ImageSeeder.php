<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    protected string $model = Image::class;

    public function run(): void
    {
        Image::factory(600)->create();
//        $services = Service::all();
//        foreach ($services as $service) {
//           for ($i = 0; $i < 3; $i++) {
//                Image::factory()->create([
//                    'service_id' => $service->id,
//                ]);
//            }
//        }
    }

}
