import Link from "next/link";

export default function PostCard(props) {
  const { post } = props;
  console.log("post", post);
  return (
    <Link className="unstyled" href={`/next/${post.slug}`}>
      <div className="postCard">
        <h3>{post.title}</h3>
      </div>
    </Link>
  );
}
