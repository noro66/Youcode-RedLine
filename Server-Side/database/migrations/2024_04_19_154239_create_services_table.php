<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('short_title');
            $table->text('desc');
            $table->text('cover_image');
            $table->text('short_desc');
            $table->integer('price');
            $table->unsignedInteger('total_stars');
            $table->unsignedTinyInteger('star_number');
            $table->unsignedTinyInteger('delivery_time');
            $table->unsignedTinyInteger('revision_time');
            $table->foreignId('seller_id')->constrained('sellers')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('service_category_id')->constrained('service_categories')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
