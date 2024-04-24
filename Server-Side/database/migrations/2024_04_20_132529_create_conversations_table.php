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
        Schema::create('conversations',  function (Blueprint $table) {
            $table->id();
            $table->string('last_message')->nullable();
            $table->foreignId('client_id')->constrained('clients')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('seller_id')->constrained('sellers')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->boolean('readBy_seller')->default(false);
            $table->boolean('readBy_client')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('convirsations');
    }
};
