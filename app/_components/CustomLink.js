import Link from "next/link";

function CustomLink({ to, children, type = "movie" }) {
  const lookUpObj = {
    movie: {
      style: `bg-bright-yellow text-dark-blue hover:bg-bright-yellow-tint hover:shadow-lg`,
    },
    anime: {
      style: `bg-main-red text-white hover:bg-main-red-tint hover:shadow-lg`,
    },
  };

  return (
    <Link
      href={to}
      className={`p-8 mt-16 rounded-xl font-semibold shadow-md transition duration-300 ease-in-out inline-block select-none ${lookUpObj[type].style}`}
    >
      {children}
    </Link>
  );
}
export default CustomLink;
