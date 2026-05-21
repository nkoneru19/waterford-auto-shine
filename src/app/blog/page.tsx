import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title:
    "Car Care Tips & Detailing Blog | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Expert auto detailing tips, guides, and advice from Waterford Auto Shine. Learn how to keep your car looking its best between professional details.",
  alternates: {
    canonical: "https://waterfordautoshine.com/blog",
  },
  openGraph: {
    title: "Car Care Tips & Detailing Blog | Waterford Auto Shine",
    description:
      "Expert auto detailing tips, guides, and advice from Waterford Auto Shine.",
    url: "https://waterfordautoshine.com/blog",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <main
        className="pt-28 sm:pt-32 pb-16 sm:pb-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            Blog
          </p>
          <h1
            className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold tracking-tight mb-4"
            style={{ lineHeight: "1.15", color: "var(--color-text-primary)" }}
          >
            Car Care Tips
          </h1>
          <p
            className="text-lg max-w-[55ch] mb-12"
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Practical advice from our detailing team to help you keep your
            vehicle looking its best.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl p-6 sm:p-8 transition-all duration-300"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  boxShadow: "0 4px 16px oklch(0.1 0.02 250 / 0.04)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {formatDate(post.date)}
                  </span>
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: "var(--color-text-muted)" }}
                  />
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {post.readTime}
                  </span>
                </div>

                <h2
                  className="text-xl sm:text-2xl font-[var(--font-heading)] font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors"
                  style={{
                    color: "var(--color-text-primary)",
                    transitionDuration: "200ms",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {post.description}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--color-accent)" }}
                >
                  Read more
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="group-hover:translate-x-1 transition-transform"
                    style={{ transitionDuration: "200ms" }}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
