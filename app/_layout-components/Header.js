import Link from "next/link";

import Logo from "@/app/_components/Logo";
import NavigationLink from "../_components/NavigationLink";

function Header() {
  return (
    <header className=" bg-dark-blue shadow-md ">
      <nav className="m-auto container h-min font-bold text-white">
        <ul className=" flex items-center justify-between">
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
              <NavigationLink href="/select/movie">
                Select a Movie
              </NavigationLink>
            </li>

            <li>
              <NavigationLink href="/select/anime">
                Select an Anime
              </NavigationLink>
            </li>

            <li>
              <NavigationLink d href="/select/tv">
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
