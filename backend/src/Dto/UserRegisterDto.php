<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Constraints\PasswordStrength;

class UserRegisterDto
{
    public function __construct(
        #[Assert\NotBlank]
        #[Assert\Length(min: 1, max: 100)]
        #[Assert\Email]
        public readonly string $email,

        #[Assert\PasswordStrength([
            'minScore' => PasswordStrength::STRENGTH_WEAK, // Weak password required
        ])]
        public readonly string $password,

        #[Assert\Length(
            min: 2,
            max: 50,
            minMessage: 'Your first name must be at least {{ limit }} characters long',
            maxMessage: 'Your first name cannot be longer than {{ limit }} characters',
        )]
        #[Assert\Regex(
            pattern: '/\d/',
            match: false,
            message: 'Your first name cannot contain a number',
        )]
        public readonly string $firstname,

        #[Assert\Length(
            min: 2,
            max: 50,
            minMessage: 'Your last name must be at least {{ limit }} characters long',
            maxMessage: 'Your last name cannot be longer than {{ limit }} characters',
        )]
        #[Assert\Regex(
            pattern: '/\d/',
            match: false,
            message: 'Your last name cannot contain a number',
        )]
        public readonly string $lastname,

        #[Assert\Length(
            min: 4,
            max: 15,
            minMessage: 'Your last name must be at least {{ limit }} characters long',
            maxMessage: 'Your last name cannot be longer than {{ limit }} characters',
        )]
        #[Assert\Regex('/^\d+$/')] // Only numbers are accepted.
        public readonly string $phone,

    ) {
    }
}
