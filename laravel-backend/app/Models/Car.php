<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = [
        'name',
        'year',
        'price',
        'mileage',
        'transmission',
        'image',
        'description'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
