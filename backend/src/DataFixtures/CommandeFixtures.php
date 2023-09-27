<?php

namespace App\DataFixtures;

use App\Entity\Commande;
use App\Entity\CommandeProduct;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;

class CommandeFixtures extends Fixture implements DependentFixtureInterface
{
    protected $faker;

    public function load(ObjectManager $manager): void
    {
        $this->faker = Factory::create();

        // Products index array
        for($i=1; $i<26; $i++) {
            $productIndexArray[$i] = $i;
        }

        // One commande per our 4 users
        $identifiantCommandeProduct = 1;
        for($i=1; $i<5; $i++) {
            $commande = new Commande();

            // Pour avoir toujours les mêmes identifiants à chaque execution des fixtures :
            $commande->setId($i);
            $metadata = $manager->getClassMetadata(get_class($commande));
            $metadata->setIdGenerator(new \Doctrine\ORM\Id\AssignedGenerator());
            $metadata->setIdGeneratorType(\Doctrine\ORM\Mapping\ClassMetadata::GENERATOR_TYPE_NONE);

            $commande->setCreatedAt($this->faker->dateTimeBetween($startDate = '-5 years', $endDate = 'now', $timezone = null));
            $commande->setUser($this->getReference('user_'.$i));
            $manager->persist($commande);
            
            // The random product number in each commande
            $nombreDeProcuctDansLaCommande = rand(2, 5);

            // Selected random products 
            $selectedProducts = array_rand($productIndexArray, $nombreDeProcuctDansLaCommande);

            for($k=0; $k<$nombreDeProcuctDansLaCommande; $k++) {
                $commandeProduct = new CommandeProduct();

                // Pour avoir toujours les mêmes identifiants à chaque execution des fixtures :
                $commandeProduct->setId($identifiantCommandeProduct);
                $metadata = $manager->getClassMetadata(get_class($commandeProduct));
                $metadata->setIdGenerator(new \Doctrine\ORM\Id\AssignedGenerator());
                $metadata->setIdGeneratorType(\Doctrine\ORM\Mapping\ClassMetadata::GENERATOR_TYPE_NONE);

                $commandeProduct->setQuantity(rand(1, 3));
                $commandeProduct->setCommande($commande);
                $commandeProduct->setProduct($this->getReference('product_'.$selectedProducts[$k]));
                $manager->persist($commandeProduct);

                $identifiantCommandeProduct++;
            }
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
            ProductFixtures::class,
        ];
    }
}
