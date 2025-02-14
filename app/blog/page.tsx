import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPage() {
  return (
    <div className="py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center">Love & Relationship Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="rounded-lg overflow-hidden border bg-white shadow-lg transition-transform group-hover:scale-105">
              <div className="relative aspect-video">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2 group-hover:text-rose-600 transition-colors">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

