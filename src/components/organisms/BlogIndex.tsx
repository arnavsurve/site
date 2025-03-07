interface Post {
  slug: string;
  title: string;
  date: string;
}

interface MDXModule {
  default: React.ComponentType;
  frontmatter?: {
    title?: string;
    date?: string;
  };
}

const BlogIndex = () => {
  const modules = import.meta.glob<MDXModule>("../../posts/*.mdx", {
    eager: true,
  });

  const posts: Post[] = Object.entries(modules).map(([path, mod]) => {
    const slug = (path.split("/").pop() ?? "untitled").replace(".mdx", "");
    const { frontmatter } = mod as {
      frontmatter: { title?: string; date?: string };
    };
    return {
      slug,
      title: frontmatter?.title ?? "Untitled",
      date: frontmatter?.date ?? new Date().toISOString(),
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <a href="/">Back</a>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={`/writing/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogIndex;
