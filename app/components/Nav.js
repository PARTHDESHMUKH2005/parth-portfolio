import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="navwrap">
        <Link href="/" className="brand">
          <span className="dot"></span> P. DESHMUKH
        </Link>
        <div className="navlinks">
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Models</Link>
          <Link href="/skills">Stack</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <a className="nav-cta" href="mailto:parthdeshmukh036@gmail.com">
          Get in touch →
        </a>
      </div>
    </nav>
  );
}
