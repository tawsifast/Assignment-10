import React from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Things to Inspect Before Renting a Premium Duplex",
    excerpt: "When renting luxury spaces, telemetry and documentation inspection are critical. Here is your ultimate checklist.",
    author: "Levi Ackerman",
    date: "Jun 24, 2026",
    category: "Guides",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Rise of Smart Ecosystems in Urban Living Spaces",
    excerpt: "How automated digital locks and real-time utility tracking are reshaping modern millennial properties.",
    author: "Eren Yeager",
    date: "Jun 20, 2026",
    category: "Technology",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Why Fixed-Term Sublet Insurances Matter in 2026",
    excerpt: "Protecting your rental deposit via verified payout sessions. A developer-turned-tenant perspective.",
    author: "Mikasa Ackerman",
    date: "Jun 15, 2026",
    category: "Finance",
    readTime: "7 min read"
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#030307] text-white p-8 md:p-16 antialiased">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="border-b border-white/[0.05] pb-8 space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Insights & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Articles</span>
          </h1>
          <p className="text-xs text-slate-400 font-light">
            Stay updated with premium real-estate tech trends, tenancy laws, and interior architecture.
          </p>
        </div>

        {/* Featured / Grid Posts */}
        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="backdrop-blur-xl bg-white/[0.01] border border-white/[0.05] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-purple-500/20 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="space-y-3 max-w-3xl">
                {/* Meta row */}
                <div className="flex items-center gap-4 text-[11px] text-slate-500 font-medium tracking-wide">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/10">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> By {post.author}
                  </span>
                  <span>• {post.readTime}</span>
                </div>

                {/* Title & Excerpt */}
                <h2 className="text-xl font-bold text-slate-200 hover:text-white transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Read Action button */}
              <Link 
                href={`/all-client/blogs/${post.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/[0.02] border border-white/[0.08] hover:border-white/20 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-all group shrink-0"
              >
                Read Article 
                <ArrowRight size={13} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}