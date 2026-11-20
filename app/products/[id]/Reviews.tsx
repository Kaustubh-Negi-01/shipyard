"use client";

import { useId, useState } from "react";

type Review = {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
  helpfulCount: number;
};

const REVIEWS_BY_PRODUCT: Record<string, Review[]> = {
  "ridge-daypack": [
    {
      id: "r1",
      author: "Elena Rostova",
      location: "North Cascades, WA",
      rating: 5,
      date: "October 14, 2026",
      title: "Carried through a three-day alpine squall",
      body: "Took this pack on a 28-mile traverse through the Enchantments. The roll top kept sleeping insulation completely dry through four hours of freezing drizzle. Sits close to the lumbar and doesn't sway on steep scrambles.",
      verified: true,
      helpfulCount: 24,
    },
    {
      id: "r2",
      author: "Marcus Lindqvist",
      location: "Abisko, Sweden",
      rating: 5,
      date: "September 28, 2026",
      title: "Minimalist geometry done right",
      body: "No useless webbing or noisy plastic buckles. The ripstop canvas feels bulletproof, and the strap padding is dense enough for 18 lbs without hot spots.",
      verified: true,
      helpfulCount: 19,
    },
    {
      id: "r3",
      author: "Sarah Chen",
      location: "Boulder, CO",
      rating: 4,
      date: "August 19, 2026",
      title: "Clean silhouette, holds more than it looks",
      body: "Easily swallows a rolled bivy, switchback shell, flask, and stove kit. Only note: grab a small dry sack for keys and passport in the interior sleeve.",
      verified: true,
      helpfulCount: 11,
    },
  ],
  "field-flask": [
    {
      id: "r1",
      author: "David Thorne",
      location: "White Mountains, NH",
      rating: 5,
      date: "November 2, 2026",
      title: "Hot brew at 4,000 feet in sub-zero wind",
      body: "Filled with boiling pour-over at 5 AM. At 1 PM on the ridge, it was still steaming hot. Heavy gauge stainless steel that survives drops on granite.",
      verified: true,
      helpfulCount: 31,
    },
    {
      id: "r2",
      author: "Amara Osei",
      location: "Blue Ridge, VA",
      rating: 5,
      date: "October 20, 2026",
      title: "Zero metallic aftertaste",
      body: "Passes the black coffee test. Clean threads on the cap, gasket seals tightly without over-torquing.",
      verified: true,
      helpfulCount: 14,
    },
  ],
  "switchback-shell": [
    {
      id: "r1",
      author: "Kieran Walsh",
      location: "Kerry, Ireland",
      rating: 5,
      date: "October 30, 2026",
      title: "No swish, breathes on steep ascents",
      body: "Most hard-shells feel like wearing a plastic trash bag on humid climbs. This fabric breathes remarkably well while shedding Atlantic gales.",
      verified: true,
      helpfulCount: 22,
    },
    {
      id: "r2",
      author: "Hannah Vogel",
      location: "Bavarian Alps",
      rating: 5,
      date: "October 11, 2026",
      title: "Storm hood stays put in real weather",
      body: "Single-pull cinch works with cold gloves on. Cut leaves ample shoulder room for a midweight wool sweater underneath.",
      verified: true,
      helpfulCount: 17,
    },
  ],
  "camp-light-no-2": [
    {
      id: "r1",
      author: "Tetsuo Mori",
      location: "Nagano, Japan",
      rating: 5,
      date: "November 08, 2026",
      title: "Soft amber glow that preserves night vision",
      body: "The warm 2200K amber setting makes tent reading calming instead of blinding. Lasted 4 straight evenings on one charge.",
      verified: true,
      helpfulCount: 27,
    },
    {
      id: "r2",
      author: "Clara Dubois",
      location: "Vercors, France",
      rating: 4,
      date: "October 03, 2026",
      title: "Sturdy brass bail wire and dial",
      body: "Hangs easily from tent loops or low pine boughs. Dial click feels satisfying and precise.",
      verified: true,
      helpfulCount: 9,
    },
  ],
  "alpine-mug": [
    {
      id: "r1",
      author: "Julian Vance",
      location: "Inverness, Scotland",
      rating: 5,
      date: "September 15, 2026",
      title: "Rolled rim that never burns your lips",
      body: "A lot of cheap enamel mugs get dangerously hot at the lip. This hand-finished edge cools just enough. Durable porcelain glaze.",
      verified: true,
      helpfulCount: 15,
    },
  ],
  "trail-blanket": [
    {
      id: "r1",
      author: "Rowan Byrne",
      location: "Lake District, UK",
      rating: 5,
      date: "October 22, 2026",
      title: "Dense wool weave, sheds damp grass easily",
      body: "Thick enough to buffer cold ground, rolls up neatly with the bridle leather straps. Lives in my trunk for sudden trailhead sunsets.",
      verified: true,
      helpfulCount: 18,
    },
  ],
  "summit-socks": [
    {
      id: "r1",
      author: "Siddharth Nair",
      location: "Manali, India",
      rating: 5,
      date: "November 04, 2026",
      title: "No slip, zero hot spots",
      body: "Wore these through a 22 km trail day with elevation gain. Merino blend stays springy even after repeated cold creek washes.",
      verified: true,
      helpfulCount: 12,
    },
  ],
  "coastline-binoculars": [
    {
      id: "r1",
      author: "Maya Lind",
      location: "Olympic Peninsula, WA",
      rating: 5,
      date: "October 18, 2026",
      title: "Razor sharp optics in a compact body",
      body: "Spotted orcas in the strait at dusk. The multi-coated glass pulls in plenty of light and fits neatly in an anorak pocket.",
      verified: true,
      helpfulCount: 20,
    },
  ],
};

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "d1",
    author: "Finley Hart",
    location: "High Sierra, CA",
    rating: 5,
    date: "October 12, 2026",
    title: "Honest build quality that lasts",
    body: "Purchased this piece for late autumn outings. The construction and attention to stitching and materials are evident from day one.",
    verified: true,
    helpfulCount: 16,
  },
  {
    id: "d2",
    author: "Lukas Weber",
    location: "Tyrol, Austria",
    rating: 5,
    date: "September 29, 2026",
    title: "Essential field kit",
    body: "Reliable, thoughtfully understated, and does exactly what it promises without fuss.",
    verified: true,
    helpfulCount: 8,
  },
];

type ReviewsProps = {
  productId: string;
  productName: string;
};

export default function Reviews({ productId, productName }: ReviewsProps) {
  const reviews = REVIEWS_BY_PRODUCT[productId] ?? DEFAULT_REVIEWS;
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});
  const filterId = useId();

  const handleHelpful = (id: string, initialCount: number) => {
    setHelpfulVotes((prev) => {
      const current = prev[id] ?? initialCount;
      return { ...prev, [id]: current + 1 };
    });
  };

  const filtered = filterRating === "all"
    ? reviews
    : reviews.filter((r) => r.rating === filterRating);

  const avgRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)
  ).toFixed(1);

  return (
    <section className="reviews-panel" aria-labelledby="reviews-title">
      <div className="reviews-panel__header">
        <div>
          <span className="reviews-panel__tag">Field Verified Notes</span>
          <h2 id="reviews-title">Community field logs</h2>
          <p className="reviews-panel__sub">
            Real mileage from people carrying the {productName} out there.
          </p>
        </div>
        <div className="reviews-score-card">
          <div className="reviews-score-card__rating">{avgRating}</div>
          <div className="reviews-score-card__stars" aria-label={`${avgRating} out of 5 stars`}>
            {"★".repeat(Math.round(Number(avgRating)))}
            {"☆".repeat(5 - Math.round(Number(avgRating)))}
          </div>
          <p className="reviews-score-card__count">
            Based on {reviews.length} field reports · 100% verified
          </p>
        </div>
      </div>

      <div className="reviews-panel__toolbar">
        <label htmlFor={filterId} className="reviews-panel__filter-label">
          Filter by rating:
        </label>
        <select
          id={filterId}
          className="reviews-panel__filter-select"
          value={filterRating}
          onChange={(e) => {
            const val = e.target.value;
            setFilterRating(val === "all" ? "all" : Number(val));
          }}
        >
          <option value="all">All field reports ({reviews.length})</option>
          <option value="5">5 stars only</option>
          <option value="4">4 stars only</option>
        </select>
      </div>

      <div className="reviews-list">
        {filtered.map((r) => {
          const currentHelpful = helpfulVotes[r.id] ?? r.helpfulCount;
          return (
            <article key={r.id} className="review-card">
              <header className="review-card__header">
                <div>
                  <div className="review-card__stars" aria-label={`${r.rating} stars`}>
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                  </div>
                  <h3 className="review-card__title">{r.title}</h3>
                </div>
                <time className="review-card__date" dateTime={r.date}>
                  {r.date}
                </time>
              </header>

              <p className="review-card__body">{r.body}</p>

              <footer className="review-card__footer">
                <div className="review-card__author-info">
                  <span className="review-card__author">{r.author}</span>
                  <span className="review-card__dot">·</span>
                  <span className="review-card__location">{r.location}</span>
                  {r.verified ? (
                    <span className="review-card__badge">Verified Trail Mileage</span>
                  ) : null}
                </div>

                <button
                  type="button"
                  className="review-card__helpful-btn"
                  onClick={() => handleHelpful(r.id, r.helpfulCount)}
                  aria-label={`Mark as helpful. Currently ${currentHelpful} found helpful`}
                >
                  Helpful ({currentHelpful})
                </button>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}
