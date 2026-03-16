import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1
          className="font-display mb-4"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            color: "oklch(0.12 0.005 60)",
          }}
        >
          404
        </h1>
        <p
          className="font-body text-lg mb-8"
          style={{ color: "oklch(0.45 0.010 60)" }}
        >
          Page not found
        </p>
        <Link href="/">
          <a
            className="font-body text-sm tracking-widest uppercase"
            style={{
              color: "oklch(0.12 0.005 60)",
              borderBottom: "0.5px solid oklch(0.12 0.005 60)",
              paddingBottom: "2px",
              display: "inline-block",
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Return Home
          </a>
        </Link>
      </div>
    </div>
  );
}
