export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-white font-extrabold text-xl">HiveXLabs</div>
            <p className="mt-1 text-sm">Designing and building modern software products.</p>
          </div>
          <nav className="flex items-center gap-4 sm:gap-5 text-sm">
            <a href="#projects" className="hover:text-white transition-colors min-h-[44px] flex items-center">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors min-h-[44px] flex items-center">Contact</a>
            <a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">Privacy</a>
          </nav>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} HiveXLabs. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors min-h-[44px] flex items-center">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors min-h-[44px] flex items-center">LinkedIn</a>
            <a href="#" aria-label="X" className="hover:text-white transition-colors min-h-[44px] flex items-center">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

