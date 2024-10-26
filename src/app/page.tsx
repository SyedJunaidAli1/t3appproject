import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from 'next/image';
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"

const Images = async () => {
  const images = await getMyImages()

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col h-48 w-48">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              width={480}
              height={480}
              style={{ objectFit: "contain" }}
              alt={image.name} />
          </Link>
          <div>{image.name}</div>
        </div>))}
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
