import { useQuery } from "@apollo/client";
import fetchProfileQuery from "../queries/fetchProfileQuery.js";
import Comment from "./Comment.js";

export default function Post(props) {
    const post = props.post;

    console.log("fetching comment for", post.id);
    const { loading, error, data } = useQuery(fetchProfileQuery, {
        variables: {
            request: { profileId: post.profile.id },
            publicationsRequest: {
                commentsOf: post.id
            },
        },
    });

    if (loading) return "Loading..";
    //if (error) return `Error! ${error.message}`;

    return (
        <div className="m-4">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8">
                        <p className="mt-2 text-base font-medium text-black whitespace-pre-line">
                            {post.metadata.content}
                            {data.publications.items.map((comment, idx) => {
                                return <Comment key={idx} comment={comment} />;
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}