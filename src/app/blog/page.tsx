import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { blogPosts, categoryPages } from "@/lib/stubPages";

export const metadata: Metadata = {
  title: "Blog - Rapid Mobile Tyres Bristol",
  description: "Tyre safety tips, cost guides, and news from Rapid Mobile Tyres Bristol.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="Blog" breadcrumb="Home / Blog" />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-10">
            <ul className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
              {blogPosts.map((post) => (
                <li key={post.path}>
                  <Link
                    href={`/${post.path}`}
                    className="block py-4 text-sm font-medium text-zinc-800 hover:text-orange-600"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-sm text-zinc-500">
              <p className="font-semibold text-zinc-700">Categories</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {categoryPages.map((c) => (
                  <Link
                    key={c.path}
                    href={`/${c.path}`}
                    className="rounded-full border border-zinc-200 px-3 py-1 hover:border-orange-400 hover:text-orange-600"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
