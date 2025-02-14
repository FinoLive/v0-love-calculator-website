import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="py-16 space-y-8">
      <div className="max-w-3xl mx-auto">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="prose prose-rose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  )
}

