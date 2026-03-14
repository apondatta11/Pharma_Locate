
export default function Home() {

  return (
    <main className="home">
      <section className="hero" id="find">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />

        <div className="hero__inner">
          <h1 className="hero__heading">
            Find your medicine
            <br />
            <span className="hero__heading-accent">
              at the nearest pharmacy
            </span>
          </h1>

          <p className="hero__subtext">
            PharmaLocate helps you search for a specific medicine and find the
            closest pharmacy that has it in stock — especially when every minute
            counts.
          </p>
        </div>
      </section>
    </main>
  );
}
