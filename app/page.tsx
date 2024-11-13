import { LinkCustom } from "@/components/LinkCustom/LinkCustom";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-14">
      <p>
        This is a click-based game. All you will need is a mouse to click
        around!
      </p>
      <LinkCustom href="/class-choice">Get Started</LinkCustom>
    </section>
  );
}
