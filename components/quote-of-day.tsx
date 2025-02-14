const quotes = [
  {
    text: "One word frees us of all the weight and pain of life. That word is love.",
    author: "Sophocles",
  },
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
  },
]

export function QuoteOfDay() {
  // Get a random quote
  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div className="rounded-lg border p-6 bg-white shadow-lg">
      <h2 className="text-center text-2xl font-semibold mb-4 text-rose-600">Love Quote of the Day</h2>
      <blockquote className="text-center italic text-gray-600">
        &quot;{quote.text}&quot; - {quote.author}
      </blockquote>
    </div>
  )
}

