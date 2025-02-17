import { useParams } from "react-router-dom";
import { posts } from "../../posts";

const BlogBody = () => {
  const { slug } = useParams();
  const filePath = `./${slug}.mdx`;
  const PostContent = posts[filePath];

  if (!PostContent) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <PostContent />
    </div>
  );
};

export default BlogBody;
