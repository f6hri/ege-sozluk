import PostCard from "../components/postCard";

export default function Flow(){
    return(
        <div className="flex flex-col gap-8 mb-8">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    );
}