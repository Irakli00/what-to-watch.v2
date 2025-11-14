import Link from "next/link";

import Logo from "@/app/_components/Logo";
import NavigationLink from "../_components/NavigationLink";

function Header() {
  return (
    <header className="bg-dark-blue shadow-md ">
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

          <div className="flex items-center gap-4.5">
            <li>
              <NavigationLink href="/movies/select">
                Select a Movie
              </NavigationLink>
            </li>

            <li>
              <NavigationLink href="/animes/select">
                Select an Anime
              </NavigationLink>
            </li>

            <li>
              <NavigationLink d href="/tvs/select">
                Select a TV Show
              </NavigationLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
