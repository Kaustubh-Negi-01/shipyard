import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link className="product-card__link" href={`/products/${product.id}`}>
        <div className="product-card__image-wrap">
          <Image
            className="product-card__image"
            src={product.image}
            alt={product.imageAlt}
            width={900}
            height={1125}
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
          {product.badge ? <span className="product-card__badge">{product.badge}</span> : null}
          <span className="product-card__arrow" aria-hidden="true">↗</span>
        </div>
        <div className="product-card__meta">
          <div>
            <p className="product-card__category">{product.category}</p>
            <h3>{product.name}</h3>
            <p className="product-card__summary">{product.summary}</p>
          </div>
          <p className="product-card__price">${product.price}</p>
        </div>
      </Link>
    </article>
  );
}
