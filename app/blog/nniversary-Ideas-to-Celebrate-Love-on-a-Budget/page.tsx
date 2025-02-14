import Image from "next/image"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5th-JF6vWp6DWBfRf4keDXwBZTinUbfskP.jpeg"
            alt="Illustration of a couple celebrating anniversary with cake and candles in a romantic outdoor setting"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title and Description */}
        <h1 className="mt-8 text-3xl font-bold text-center">Anniversary Ideas to Celebrate Love on a Budget</h1>
        <p className="mt-4 text-lg text-center">
          Celebrating your anniversary doesn't have to break the bank. Here are some romantic and affordable ideas to
          make your special day memorable.
        </p>
      </section>

      {/* Rest of the blog content will go here */}
      <section className="mt-12 prose prose-lg max-w-3xl">
        <h2>Romantic and Affordable Anniversary Ideas</h2>
        <ul>
          <li>
            <strong>Cook a romantic dinner at home:</strong> Prepare your partner's favorite meal and set a romantic
            ambiance with candles and music.
          </li>
          <li>
            <strong>Have a picnic in the park:</strong> Pack a basket with your favorite snacks and drinks, and enjoy
            the beautiful scenery.
          </li>
          <li>
            <strong>Go for a hike or bike ride:</strong> Explore nature together and enjoy the fresh air and exercise.
          </li>
          <li>
            <strong>Watch a movie under the stars:</strong> Set up a projector and screen in your backyard or find a
            spot with a clear view of the night sky.
          </li>
          <li>
            <strong>Play board games or card games:</strong> Spend quality time together and have some fun.
          </li>
          <li>
            <strong>Give handmade gifts:</strong> A heartfelt, personalized gift is always appreciated.
          </li>
          <li>
            <strong>Write love letters to each other:</strong> Express your feelings and memories in a heartfelt way.
          </li>
        </ul>
      </section>
    </main>
  )
}

