<?php

namespace App\DataFixtures;

use App\Entity\UserConnection;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;

class UserConnectionFixtures extends Fixture implements DependentFixtureInterface
{
    protected $faker;

    public function load(ObjectManager $manager): void
    {
        $this->faker = Factory::create();

        // pour tous nos 4 users
        $identifiant = 1;
        for($i=1; $i<5; $i++) {

            $nombreDeConnections = rand(2, 10);
            
            for($k=0; $k<$nombreDeConnections; $k++) {

                $userConnection = new UserConnection();

                // Pour avoir toujours les mêmes identifiants à chaque execution des fixtures :
                $userConnection->setId($identifiant);
                $metadata = $manager->getClassMetadata(get_class($userConnection));
                $metadata->setIdGenerator(new \Doctrine\ORM\Id\AssignedGenerator());
                $metadata->setIdGeneratorType(\Doctrine\ORM\Mapping\ClassMetadata::GENERATOR_TYPE_NONE);

                // pour convertir les DateTimeMutable générées par le faker à la DateTimeImmutable demandée par notre objet
                $dateTimeMutable = $this->faker->dateTimeBetween($startDate = '-5 years', $endDate = 'now', $timezone = null);
                $dateTimeImmutable = DateTimeImmutable::createFromMutable($dateTimeMutable);
                
                $userConnection->setConnectedAt($dateTimeImmutable);
                $userConnection->setUser($this->getReference('user_'.$i));
                $userConnection->setIp($this->faker->ipv4());
                $manager->persist($userConnection);

                $identifiant++;
            }
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }

}
