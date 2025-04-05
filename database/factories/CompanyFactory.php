<?php

namespace Database\Factories;
use App\Models\User;
use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    protected $model = Company::class;
    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'inn' => $this->faker->regexify('[0-9]{12}'), // random 12 digit INN
            'adress_registration' => $this->faker->address(),
            'user_id' => User::factory(), // Creates a related user using the UserFactory
        ];
    }
}
