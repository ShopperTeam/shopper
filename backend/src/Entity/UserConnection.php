<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\UserConnectionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserConnectionRepository::class)]
#[
    ApiResource(
        operations: [
            new GetCollection(normalizationContext: ['groups' => ['read:UserConnection:collection']])
        ]
    ),
    ApiFilter(SearchFilter::class, properties: ['user' => 'exact']),
]
class UserConnection
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:User:collection', 'read:UserConnection:collection', 'read:User:item'])]
    private ?int $id = null;
    
    #[ORM\Column]
    #[Groups(['read:User:collection', 'read:UserConnection:collection', 'read:User:item'])]
    private ?\DateTimeImmutable $connectedAt = null;
    
    #[ORM\ManyToOne(inversedBy: 'userConnections')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['read:User:collection', 'read:UserConnection:collection'])]
    private ?User $user = null;
    
    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['read:User:collection', 'read:UserConnection:collection', 'read:User:item'])]
    private ?string $ip = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getConnectedAt(): ?\DateTimeImmutable
    {
        return $this->connectedAt;
    }

    public function setConnectedAt(\DateTimeImmutable $connectedAt): static
    {
        $this->connectedAt = $connectedAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getIp(): ?string
    {
        return $this->ip;
    }

    public function setIp(?string $ip): static
    {
        $this->ip = $ip;

        return $this;
    }
}
