import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        This is a click-based game. All you will need is a mouse to click
        around!
      </p>
      <Link href="/class-choice">Get Started</Link>
    </div>
  );
}
