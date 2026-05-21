import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-md">
          <p
            className="text-7xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-accent)",
            }}
          >
            404
          </p>
          <h1
            className="text-2xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text-primary)",
            }}
          >
            Page Not Found
          </h1>
          <p
            className="text-base mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="text-sm font-semibold px-6 py-3 rounded-lg transition-transform"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-inverse)",
                transitionDuration: "200ms",
                transitionTimingFunction: "var(--ease-out-quart)",
              }}
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
              style={{
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
                transitionDuration: "200ms",
              }}
            >
              View Services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
