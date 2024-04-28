<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;

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

    public function service_category(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(ServiceCategory::class);
    }

    public function seller(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
         return $this->belongsTo(Seller::class)->with('user');

    }
    public function images(): HasMany
    {
        return $this->hasMany(Image::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\HasOneThrough
    {
        return $this->hasOneThrough(User::class, Seller::class, 'user_id', 'id', 'seller_id', 'id');
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'service_id')->with('client');
    }

    public function getSellerWithLastDelivery(): Model|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Builder|array|null
    {
        return $this->seller()->with( 'lastDelivery')->get();
    }

    public function features(): HasMany
    {
        return $this->hasMany(Feature::class);
    }

    public function orderedBy(User $user)
    {
        return  $this->orders->contains('client_id', $user->client->id);
    }
    public function reviewedBy(User $user)
    {
        return $this->reviews->contains('client_id', $user->client->id);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class)->with( 'client');
    }
}
