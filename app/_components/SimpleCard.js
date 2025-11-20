import Image from "next/image";
import Link from "next/link";

function SimpleCard({ id, type = "anime", img = "", onClick = null }) {
  return (
    <Link
      key={id}
      href={`/${type}/${id}`}
      onClick={onClick}
      relative="path"
      className="card card--simple"
    >
      <img
        draggable="false"
        src={img}
        // className={`h-[280px] rounded-[7px] select-none `}
        alt={`${type} poster`}
        className={`rounded-[7px] select-none`}
      />
    </Link>
  );
}

export default SimpleCard;
