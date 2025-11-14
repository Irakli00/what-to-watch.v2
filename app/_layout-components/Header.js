import Logo from "@/app/_components/Logo";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-dark-blue shadow-md h-header-height fixed left-0 right-0 z-50">
      <nav className="h-min font-bold text-white">
        <ul className="cusom-container flex items-center justify-between">
          <div>
            <li>
              <Link href="/" className="flex gap-2 items-center py-3">
                <Logo height={80} width={80} type="light" />
                <h1>What To Watch?</h1>
              </Link>
            </li>
          </div>
          <div className="flex items-center gap-4.5 text-white">
            <li>
              <Link href="/selectMovies">Select a Movie</Link>
            </li>
            <li>
              <Link href="/selectAnimes">Select an Anime</Link>
            </li>
            <li>
              <Link href="/TVs">Select a TV Show</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
