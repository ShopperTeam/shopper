<?php

namespace App\DataFixtures;

use App\Entity\User;
use DateTime;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{

    public function __construct(
        private UserPasswordHasherInterface $passwordHasher
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        $this->loadUsers($manager);
    }

    private function loadUsers(ObjectManager $manager): void
    {
        $k = 1;
        $identifiant = 1;
        foreach ($this->getUserData() as [$password, $email, $firstname, $lastname, $phone, $roles]) {
            $user = new User();

            // Pour avoir toujours les mêmes identifiants à chaque execution des fixtures :
            $user->setId($identifiant);
            $metadata = $manager->getClassMetadata(get_class($user));
            $metadata->setIdGenerator(new \Doctrine\ORM\Id\AssignedGenerator());
            $metadata->setIdGeneratorType(\Doctrine\ORM\Mapping\ClassMetadata::GENERATOR_TYPE_NONE);

            $user->setPassword($this->passwordHasher->hashPassword($user, $password));
            $user->setEmail($email);
            $user->setRoles($roles);
            $user->setFirstname($firstname);
            $user->setLastname($lastname);
            $user->setPhone($phone);

            if (in_array('ROLE_USER', $roles)) {
                $this->addReference('user_' . $k, $user);
                $k++;
            }

            $manager->persist($user);
            $identifiant++;
        }

        $manager->flush();
    }


    private function getUserData(): array
    {
        return [
            // $userData = [$password, $email, $roles];
            ['pass', 'user1@site.com', 'foo', 'bar', '061234567', ['ROLE_USER']],
            ['pass', 'user2@site.com', 'goo', 'car', '071234567', ['ROLE_USER']],
            ['pass', 'user3@site.com', 'hoo', 'dar', '051234986', ['ROLE_USER']],
            ['pass', 'user4@site.com', 'joo', 'far', '021234505', ['ROLE_USER']],
            ['pass', 'admin1@site.com', 'koo', 'gar', '011934524', ['ROLE_ADMIN']],
            ['pass', 'admin2@site.com', 'loo', 'har', '066234543', ['ROLE_ADMIN']],
        ];
    }
}
