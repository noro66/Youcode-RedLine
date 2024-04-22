<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'short_title',
        'desc',
        'cover_image',
        'short_desc',
        'price',
        'sales',
        'total_stars',
        'star_number',
        'delivery_time',
        'revision_time',
        'seller_id',
        'service_category_id'
    ];
}
