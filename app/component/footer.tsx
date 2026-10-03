import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#171717] px-6 pb-8 text-white lg:px-12">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              SS<span className="text-[#E56B4B]">.</span>
            </Link>

            <p className="mt-3 text-sm text-gray-500">
              Digital Marketing Professional
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#about" className="transition hover:text-[#E56B4B]">
              About
            </a>

            <a href="#skills" className="transition hover:text-[#E56B4B]">
              Skills
            </a>

            <a
              href="#experience"
              className="transition hover:text-[#E56B4B]"
            >
              Experience
            </a>

            <a href="#services" className="transition hover:text-[#E56B4B]">
              Services
            </a>

            <a href="#contact" className="transition hover:text-[#E56B4B]">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Shanza Siddiqui. All rights reserved.
          </p>

          <p>Digital Marketing Portfolio</p>
        </div>

      </div>
    </footer>
  );
}