<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cars = [
            [
                'name' => 'Tesla Model 3',
                'year' => 2023,
                'price' => 45000,
                'mileage' => 5000,
                'transmission' => 'Automatic',
                'image' => 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500',
                'description' => 'Electric sedan with autopilot features'
            ],
            [
                'name' => 'BMW 3 Series',
                'year' => 2022,
                'price' => 42000,
                'mileage' => 12000,
                'transmission' => 'Automatic',
                'image' => 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500',
                'description' => 'Luxury sports sedan'
            ],
            [
                'name' => 'Mercedes-Benz C-Class',
                'year' => 2023,
                'price' => 48000,
                'mileage' => 8000,
                'transmission' => 'Automatic',
                'image' => 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500',
                'description' => 'Premium comfort and performance'
            ],
            [
                'name' => 'Audi A4',
                'year' => 2022,
                'price' => 40000,
                'mileage' => 15000,
                'transmission' => 'Automatic',
                'image' => 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500',
                'description' => 'Sophisticated design and technology'
            ],
            [
                'name' => 'Toyota Camry',
                'year' => 2023,
                'price' => 28000,
                'mileage' => 3000,
                'transmission' => 'Automatic',
                'image' => 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500',
                'description' => 'Reliable and fuel-efficient'
            ],
            [
                'name' => 'Honda Accord',
                'year' => 2022,
                'price' => 26000,
                'mileage' => 10000,
                'transmission' => 'Automatic',
                'image' => 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500',
                'description' => 'Spacious and comfortable sedan'
            ]
        ];

        foreach ($cars as $car) {
            \App\Models\Car::create($car);
        }
    }
}
