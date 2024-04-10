import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-5 bg-pink-800 text-white p-3 justify-center border-2  border-black">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
