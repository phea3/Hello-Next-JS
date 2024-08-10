import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = () => {
  return (
    <div>
      <p>My Blog</p>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Blog;
