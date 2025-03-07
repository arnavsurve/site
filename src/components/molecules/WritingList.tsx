import { Link } from "react-router-dom";

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

const WritingList = () => {
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
    <div>
      <br />
      <img
        src="https://64.media.tumblr.com/fc431188a913f908c6df298a67969ca7/c1858754c2bc5714-36/s2048x3072/42a134d14bee44f4d348bddc7c0646fcb741af9a.jpg"
        alt=""
        style={{ maxWidth: "250px" }}
      />
      <a href="/writing">
        <h2 style={{ marginBottom: "0.5rem" }}>Writing</h2>
      </a>
      <small>thoughts, notes</small>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/writing/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WritingList;
