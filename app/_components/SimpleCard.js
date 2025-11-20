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
      <Image
        draggable="false"
        src={img}
        width={290}
        height={220}
        alt={`${type} poster`}
        className={`rounded-[7px] select-none`}
      />
    </Link>
  );
}

export default SimpleCard;
