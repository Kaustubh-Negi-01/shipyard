"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Storefront error:", error);
  }, [error]);

  return (
    <main className="error-page" role="alert">
      <div className="error-card">
        <span className="error-tag">Encountered an obstacle</span>
        <h1>Something went off trail.</h1>
        <p>
          We had trouble loading this part of the field catalogue. Please try again or head back to base.
        </p>
        <div className="error-actions">
          <button
            type="button"
            className="detail-action retry-btn"
            onClick={() => reset()}
          >
            Try again <span aria-hidden="true">↻</span>
          </button>
          <Link className="text-link" href="/">
            Return to home <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
