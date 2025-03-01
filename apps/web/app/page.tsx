import { Github } from "@/components/tailwind/ui/icons";
import { Button } from "@/components/tailwind/ui/button";
import Menu from "@/components/tailwind/ui/menu";
import Link from "next/link";
import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <div className="flex w-full max-w-screen-lg items-center gap-2 px-4 sm:mb-[calc(20vh)]">
        <Button size="icon" variant="outline">
          <a href="https://github.com/DanPace725/mindi" target="_blank">
            <Github />
          </a>
        </Button>
        <Link href="/docs" className="ml-auto">
          <Button variant="ghost"></Button>
        </Link>
        <Menu />
      </div>
      <TailwindAdvancedEditor />
    </div>
  );
}
