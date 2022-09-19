import { useQuery } from "@apollo/client";
import Link from "next/link";

export default function Comment(props) {
    const comment = props.comment;

    return (
        <div className="p-4 border-emerald-300">
            <Link href={`/profile/${comment.profile.id}`}>
                <div className="max-w-md mx-auto rounded-xl shadow-none overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            {comment.profile.picture ? (
                                <img
                                    src={
                                        comment.profile.picture.original
                                            ? comment.profile.picture.original.url
                                            : comment.profile.picture.uri
                                    }
                                    className="w-20 h-20 rounded-full object-cover my-4"
                                />
                            ) : (
                                <div
                                    style={{
                                        backgrondColor: "gray",
                                    }}
                                    className="w-20 h-20 rounded-full object-cover my-4"
                                />
                            )}
                        </div>
                        <div className="p-4">
                            <div className="tracking-wide text-sm font-semibold">
                                {comment.profile.name && comment.profile.name }
                            </div>
                            <div className="uppercase tracking-wide text-xs text-indigo-500">
                                { "@" + comment.profile.handle}
                            </div>
                            <div className="block mt-1 text-base leading-tight font-medium text-black hover:underline">
                                {comment.metadata.content}
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                                {comment.createdAt}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}