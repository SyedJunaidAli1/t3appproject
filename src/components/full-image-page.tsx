import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id)
    const uploaderinfo = await clerkClient.users.getUser(image.userId);
    return (
        <div className="flex w-full h-full min-w-0 ">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="object-contain flex-shrink" />
            </div>
            <div className="w-48 flex flex-col flex-shrink-0 border-l">
                <div className="text-lg border-b text-center p-2">{image.name}</div>
                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span>{uploaderinfo.fullName}</span>
                </div>
                <div className="flex flex-col p-2">
                    <span>Created On:</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}