import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Link className="wordmark" href="/">shipyard<span>®</span></Link>
      <h1>This trail ends here.</h1>
      <p>We couldn&apos;t find that piece of field gear. The good stuff is back at base.</p>
      <Link className="detail-action" href="/">Return to Shipyard <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
