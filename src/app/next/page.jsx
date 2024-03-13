import PostCard from "@/components/PostsCard/PostCard";
import getPostMetadata from "@/utilty/getPostsMetaData";

export default function Home() {
  const postMetadata = getPostMetadata("next");

  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
