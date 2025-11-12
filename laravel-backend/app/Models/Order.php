<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'car_id',
        'message'
    ];

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
