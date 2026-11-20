export default function Loading() {
  return (
    <main className="loading-page" aria-busy="true" aria-label="Loading Shipyard">
      <div className="loading-container">
        <div className="loading-spinner" />
        <p className="loading-text">Preparing field goods...</p>
      </div>
    </main>
  );
}
