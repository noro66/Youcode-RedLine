<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Client;
use App\Models\Feature;
use App\Models\Image;
use App\Models\Seller;
use Carbon\Traits\Date;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $user =  \App\Models\User::factory()->create([
             'username' => 'Nouaamane',
             'email' => 'Mogy@gmail.com',
             'password' => bcrypt('password'),
             'isSeller' => false,
             'is_admin' => true,
             'type' => 'client'
         ]);
        \App\Models\Admin::create([
            'user_id' => $user->id,
            ]);
        Image::factory()->count(100)->create();
        Feature::factory()->count(100)->create();
//        Client::factory()->count(10)->create();
//        Seller::factory()->count(10)->create();
    }
}
