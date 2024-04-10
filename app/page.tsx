import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col items-center justify-center">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-gray-600 mb-8">
          Explore our pages and discover what we have to offer.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/blog"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          >
            Visit Blog
          </Link>
          <Link
            href="/about"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn About Us
          </Link>
          <Link
            href="/contact"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          >
            Contact Us
          </Link>
        </div>
      </main>

      <footer className="bg-pink-800 text-white py-4 px-8 w-full text-center">
        {new Date().getFullYear()} Blog By Sushant
      </footer>
    </div>
  );
}
