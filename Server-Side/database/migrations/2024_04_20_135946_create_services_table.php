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
            $table->integer('sales')->default(0);
            $table->unsignedInteger('total_stars')->default(1);
            $table->unsignedTinyInteger('star_number')->default(1);
            $table->unsignedTinyInteger('delivery_time')->default(1);
            $table->unsignedTinyInteger('revision_time')->default(1);
            $table->foreignId('seller_id')->constrained('sellers')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('service_category_id')->constrained('service_categories')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
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
