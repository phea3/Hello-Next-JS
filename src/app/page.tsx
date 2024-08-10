import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome home!</h1>
      <Link href={"/blog"}>Blog</Link>
    </main>
  );
}
