import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Shipyard home">
          shipyard<span>®</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#collection">The collection</a>
          <a href="#our-way">Our way</a>
          <a className="nav-mark" href="#collection" aria-label="Browse the collection">↘</a>
        </nav>
      </header>

      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <h1 id="home-title">Take the long way home.</h1>
          <div className="hero-bottom">
            <p>Useful things for outside. Good kit makes room for the good parts. We make a little of it, thoughtfully, for the days you want to stay out.</p>
            <a className="text-link" href="#collection">Find your field gear <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="A quiet path leading through a mountain forest">
          <span className="image-caption">A trail worth taking · 46° 51′ N</span>
        </div>
        <div className="hero-index"><span>Field notes</span><span>Out there, at your pace</span><span>↓</span></div>
      </section>

      <section className="collection section-shell" id="collection" aria-labelledby="collection-title">
        <div className="section-heading">
          <div>
            <h2 id="collection-title">The things we take.</h2>
          </div>
          <p className="section-note">A considered kit for open air and unhurried days. Built to be used, repaired, and carried for a long time.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="collection-end"><span>Eight good reasons to head out</span><span>↑ Back to top</span></div>
      </section>

      <section className="manifesto" id="our-way" aria-labelledby="manifesto-title">
        <div className="manifesto-image" role="img" aria-label="Morning sun reaches into a forest clearing" />
        <div className="manifesto-copy">
          <h2 id="manifesto-title">Less gear.<br />More outside.</h2>
          <p>We believe the best day rarely goes to plan. So we make honest, hardworking pieces that leave you free to follow it wherever it leads.</p>
          <a className="text-link" href="#collection">See what comes along <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="site-footer">
        <Link className="wordmark" href="/">shipyard<span>®</span></Link>
        <p>Made for the miles that matter.</p>
        <a href="#home-title">Back to the beginning ↑</a>
      </footer>
    </main>
  );
}
