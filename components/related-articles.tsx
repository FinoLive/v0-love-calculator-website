import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "Navigating Love in the Digital Age: How to Manage Relationship Anxiety",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4th-CdSc0xi3dW0jPvuH8UUqVknqU0gxMe.jpeg",
    link: "/blog/Managing-Relationship-Anxiety",
  },
  {
    title: "10 Creative and Affordable Anniversary Ideas to Celebrate Love on a Budget",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-JF6vWp6DWBfRf4keDXwBZTinUbfskP.jpeg",
    link: "/blog/aniversary-Ideas-to-Celebrate-Love-on-a-Budget",
  },
  {
    title: "Tips for Navigating Cultural Differences in Modern Relationships",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd-7mmdr5Eg4gypyD3afyvhPxQ4Lk5p8a.jpeg",
    link: "/blog/Cultural-Differences-in-Relationships",
  },
]

export function RelatedArticles() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-rose-600">Articles on Love and Romance</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.link} href={article.link} className="group">
            <div className="rounded-lg overflow-hidden border bg-white shadow-lg transition-transform group-hover:scale-105">
              <div className="relative aspect-video">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-medium group-hover:text-rose-600 transition-colors">{article.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

