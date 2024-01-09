<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\RangeFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ApiResource(
    operations: [
        new Get(normalizationContext: ['groups' => ['read:Product:item']]),
        new GetCollection(normalizationContext: ['groups' => ['read:Product:collection']]),
        new Put(),
        new Delete(),
        new Post(),
        new Patch(),
        new Get(
            normalizationContext: ['groups' => ['read:Product:item:public']],
            name: 'public_product',
            uriTemplate: 'public_products/{id}',
        ),
        new GetCollection(
            normalizationContext: ['groups' => ['read:Product:collection:public']],
            name: 'public_products',
            uriTemplate: 'public_products',
        ),
    ]
)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups([
        'read:Product:item',
        'read:Product:item:public',
        'read:Product:collection', 
        'read:Product:collection:public',
        ])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups([
        'read:Product:item',
        'read:Product:item:public',
        'read:Product:collection', 
        'read:Product:collection:public',
        ])]
    #[ApiFilter(SearchFilter::class, strategy: 'partial')]
    private ?string $name = null;

    #[Groups([
        'read:Product:item',
        'read:Product:item:public',
        ])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups([
        'read:Product:item',
        'read:Product:item:public',
        'read:Product:collection', 
        'read:Product:collection:public',
        ])]
    #[ApiFilter(RangeFilter::class)]
    private ?float $price = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups([
        'read:Product:item',
        'read:Product:item:public',
        'read:Product:collection', 
        'read:Product:collection:public',
        ])]
    private ?string $photo = null;

    #[ORM\Column(nullable: true)]
    #[Groups([
        'read:Product:item',
        'read:Product:item:public',
        'read:Product:collection', 
        'read:Product:collection:public',
        ])]
    #[ApiFilter(BooleanFilter::class)]
    private ?bool $featured = null;

    #[ORM\Column(nullable: true)]
    #[Groups([
        'read:Product:item',
        'read:Product:item:public',
        'read:Product:collection', 
        'read:Product:collection:public',
        ])]
    private ?int $stock = null;

    #[ORM\OneToMany(mappedBy: 'product', targetEntity: Avis::class, orphanRemoval: true)]
    private Collection $avis;

    public function __construct()
    {
        $this->avis = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function isFeatured(): ?bool
    {
        return $this->featured;
    }

    public function setFeatured(?bool $featured): self
    {
        $this->featured = $featured;

        return $this;
    }

    /**
     * @return Collection<int, Avis>
     */
    public function getAvis(): Collection
    {
        return $this->avis;
    }

    public function addAvi(Avis $avi): static
    {
        if (!$this->avis->contains($avi)) {
            $this->avis->add($avi);
            $avi->setProduct($this);
        }

        return $this;
    }

    public function removeAvi(Avis $avi): static
    {
        if ($this->avis->removeElement($avi)) {
            // set the owning side to null (unless already changed)
            if ($avi->getProduct() === $this) {
                $avi->setProduct(null);
            }
        }

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): static
    {
        $this->stock = $stock;

        return $this;
    }
}
