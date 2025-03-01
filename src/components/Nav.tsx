import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className="btn_link">Home</Link>
        </li>
        <li>
          <Link href="/about" className="btn_link">About</Link>
        </li>
        <li>
          <Link href="/blog" className="btn_link">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}