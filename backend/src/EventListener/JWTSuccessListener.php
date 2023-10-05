<?php

namespace App\EventListener;

use App\Entity\User;
use App\Entity\UserConnection;
use Doctrine\ORM\EntityManager;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\HttpFoundation\RequestStack;

class JWTSuccessListener
{
    public function __construct(
        private EntityManager $em
    ){}

    /**
     * @param AuthenticationSuccessEvent $event
     *
     * @return void
     */
    public function onJWTSuccess(AuthenticationSuccessEvent $event)
    {
        /**
         * @var User $user
         */
        $user = $event->getUser();

        $userConnection = new UserConnection();
        $userConnection->setConnectedAt(new \DateTimeImmutable());
        $userConnection->setUser($user);

        $this->em->persist($userConnection);
        $this->em->flush();
    }
    
}