import { useParams } from "react-router-dom";
import { posts } from "../../posts";

const BlogBody = () => {
  const { slug } = useParams();
  const filePath = `./${slug}.mdx`;
  const PostContent = posts[filePath];

  if (!PostContent) {
    return <div>Post not found</div>;
  }

  const postContentStyle: React.CSSProperties = {
    maxWidth: "60%",
    margin: "0 auto",
    textAlign: "left",
    padding: "2rem",
  };

  return (
    <div style={postContentStyle}>
      <PostContent />
    </div>
  );
};

export default BlogBody;
