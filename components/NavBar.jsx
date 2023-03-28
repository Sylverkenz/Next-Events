import Link from "next/link";

function NavBar() {
  return (
    <nav className="font-CDisplay">
      <ul className="flex gap-8 px-[2rem] py-8 border">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>{" "}
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
