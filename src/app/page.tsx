import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/ad98a8a5-ad14-4040-b763-b3dcd7e2bf46-9ahyd4.29.11.06.png",
  "https://utfs.io/f/0982b479-e6d9-48b8-85cd-4f503f53e55f-b6ofwv.55.33.31.png",
  "https://utfs.io/f/4ebde8c8-113c-40ca-b1b2-cbc79eea26d0-9ahyd4.28.59.12.png",
  "https://utfs.io/f/9a1ef914-b001-492b-a778-d100959d1ede-9ahyd4.27.11.89.png",
]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))


export default async function HomePage() {
  const post = await db.query.posts.findMany()
  console.log(post);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {post.map ((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages,].map((imges, index) => (
          <div key={imges.id + "-" + index} className=" w-48">
            <img src={imges.url} />
          </div>
        ))
        }
      </div>
    </main>
  );
}
