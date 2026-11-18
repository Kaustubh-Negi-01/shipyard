import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  return {
    title: product ? `${product.name} | Shipyard` : "Product not found | Shipyard",
    description: product?.summary ?? "Explore the Shipyard field collection.",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) notFound();

  return (
    <main className="detail-page">
      <header className="site-header detail-header">
        <Link className="wordmark" href="/" aria-label="Shipyard home">shipyard<span>®</span></Link>
        <nav className="site-nav" aria-label="Product navigation">
          <Link href="/#collection">The collection</Link>
          <a href="#product-details">Product details</a>
          <Link className="nav-mark" href="/" aria-label="Back to home">↗</Link>
        </nav>
      </header>
      <div className="detail-layout">
        <div className="detail-visual">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
          />
          <Link className="back-link" href="/#collection"><span aria-hidden="true">←</span> All field gear</Link>
          <p className="detail-photo-note">{product.color}</p>
        </div>
        <article className="detail-copy" id="product-details">
          <h1>{product.name}</h1>
          <p className="detail-category">{product.category} · Shipyard field goods</p>
          <p className="detail-summary">{product.summary}</p>
          <p className="detail-description">{product.description}</p>
          <div className="detail-price-row"><span>Field price</span><strong>${product.price}</strong></div>
          <Link className="detail-action" href="/#collection">Explore the collection <span aria-hidden="true">↗</span></Link>
          <div className="detail-specs">
            <h2>Made for the miles.</h2>
            <ul>
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
          <p className="detail-footnote">Thoughtfully chosen. Ready to go again.</p>
        </article>
      </div>
    </main>
  );
}
