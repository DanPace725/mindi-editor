import { Github } from "@/components/tailwind/ui/icons";
import { Button } from "@/components/tailwind/ui/button";
import Menu from "@/components/tailwind/ui/menu";
import Link from "next/link";
import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";
import { useEffect, useRef, useState } from "react";
import { useClient } from 'next/client';
export default function Page() {
  useClient();
  const [currentView, setCurrentView] = useState('notes');
  const toggleView = () => {
    setCurrentView(currentView === 'notes' ?  'chat');
  };
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <div className="flex w-full max-w-screen-lg items-center gap-2 px-4 sm:mb-[calc(20vh)]">
        <Button size="icon" variant="outline">
          <a href="https://github.com/DanPace725/mindi" target="_blank">
            <Github />
          </a>
        </Button>
        <div className="flex justify-center items-center my-4">
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input id="toggle" type="checkbox" className="sr-only" checked={currentView === 'editor'} onChange={toggleView} />
              <div className="block bg-neutral-200 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform" style={{ transform: currentView === 'editor' ? 'translateX(100%)' : '' }}></div>
            </div>
            <div className="ml-3 text-neutral-900 font-semibold">
              Switch to {currentView === 'notes' ? 'Chat' : 'Notes'}
            </div>
          </label>
        </div>
        
        <Menu />
      </div>
      <TailwindAdvancedEditor />
    </div>);}
