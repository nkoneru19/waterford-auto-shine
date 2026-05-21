import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/lib/blogData";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Waterford Auto Shine Blog`,
    description: post.description,
    alternates: {
      canonical: `https://waterfordautoshine.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://waterfordautoshine.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Waterford Auto Shine",
    },
    publisher: {
      "@type": "Organization",
      name: "Waterford Auto Shine",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://waterfordautoshine.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://waterfordautoshine.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://waterfordautoshine.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <main
        className="pt-28 sm:pt-32 pb-16 sm:pb-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-1.5 text-sm"
          >
            <Link
              href="/"
              className="transition-colors"
              style={{ color: "var(--color-text-muted)" }}
            >
              Home
            </Link>
            <CaretRight
              size={12}
              style={{ color: "var(--color-border)" }}
              aria-hidden="true"
            />
            <Link
              href="/blog"
              className="transition-colors"
              style={{ color: "var(--color-text-muted)" }}
            >
              Blog
            </Link>
            <CaretRight
              size={12}
              style={{ color: "var(--color-border)" }}
              aria-hidden="true"
            />
            <span style={{ color: "var(--color-text-secondary)" }}>
              {post.title}
            </span>
          </nav>

          {/* Header */}
          <div className="mb-10">
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
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-heading)] font-bold tracking-tight"
              style={{
                lineHeight: "1.15",
                color: "var(--color-text-primary)",
              }}
            >
              {post.title}
            </h1>
          </div>

          {/* Body */}
          <div className="space-y-8">
            {post.content.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2
                    className="text-xl sm:text-2xl font-[var(--font-heading)] font-bold mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {section.heading}
                  </h2>
                )}
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    maxWidth: "65ch",
                  }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Related Services */}
          {post.relatedServices && post.relatedServices.length > 0 && (
            <div
              className="mt-12 rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: "var(--color-surface-secondary)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h2
                className="font-[var(--font-heading)] text-lg font-bold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Related Services
              </h2>
              <div className="flex flex-wrap gap-3">
                {post.relatedServices.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {svc.label}
                  </Link>
                ))}
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    backgroundColor: "var(--color-accent)",
                  }}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "var(--color-accent)" }}
            >
              <ArrowLeft size={16} weight="bold" />
              All posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
