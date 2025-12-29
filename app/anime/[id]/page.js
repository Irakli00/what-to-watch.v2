import { getAnime } from "@/app/services/aniList";

export default async function Page() {
  const a = await getAnime("171627");
  console.log(a);
  return <h1>{a.title.english}</h1>;
}
