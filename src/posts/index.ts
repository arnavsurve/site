export const posts = import.meta.glob("./*.mdx", {
  eager: true,
  import: "default",
}) as Record<string, React.ComponentType<unknown>>;
