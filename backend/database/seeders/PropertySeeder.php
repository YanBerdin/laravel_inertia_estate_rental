<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PropertySeeder extends Seeder
{

    protected $faker;

    public function __construct()
    {
        $this->faker = \Faker\Factory::create();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 50; $i++) {
            DB::table('properties')->insert([
                'title' => $this->faker->words(3, true),
                'description' => implode(" ", $this->faker->paragraphs(3)),
                'price' => $this->faker->numberBetween(50_000, 500_000),
                'size' => $this->faker->numberBetween(10, 500),
                'rooms' => $this->faker->numberBetween(1, 4),
                'bedrooms' => $this->faker->numberBetween(1, 2),
                'floor' => $this->faker->numberBetween(1, 30),
                'postalCode' => $this->faker->postcode,
                'city' => $this->faker->city,
                'parking' => $this->faker->boolean,
            ]);
        }
    }
}
