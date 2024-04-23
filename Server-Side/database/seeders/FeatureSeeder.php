<?php

namespace Database\Seeders;

use App\Models\Feature;
use Database\Factories\FeatureFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      Feature::factory()->count(100)->create();
    }
}
