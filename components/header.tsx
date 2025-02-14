import Link from "next/link"
import { Heart, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-rose-600">
            <Heart className="h-6 w-6 fill-current" />
            <span className="text-xl font-bold">Loving True</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/zodiac-compatibility" className="text-gray-600 hover:text-rose-600 transition-colors">
              Zodiac Compatibility
            </Link>
            <Link href="/love-horoscope" className="text-gray-600 hover:text-rose-600 transition-colors">
              Love Horoscope
            </Link>
            <Link href="/love-test" className="text-gray-600 hover:text-rose-600 transition-colors">
              Love Test
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link href="/zodiac-compatibility" className="text-gray-600 hover:text-rose-600 transition-colors">
                    Zodiac Compatibility
                  </Link>
                  <Link href="/love-horoscope" className="text-gray-600 hover:text-rose-600 transition-colors">
                    Love Horoscope
                  </Link>
                  <Link href="/love-test" className="text-gray-600 hover:text-rose-600 transition-colors">
                    Love Test
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

