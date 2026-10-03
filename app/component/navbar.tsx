import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <Link href="/" className="text-xl font-bold tracking-tight">
          SS<span className="text-[#E56B4B]">.</span>
        </Link>

        <div className="hidden items-center gap-10 text-sm font-medium md:flex">
          <Link href="#about" className="transition hover:text-[#E56B4B]">
            About
          </Link>
            <Link href="#skills" className="transition hover:text-[#E56B4B]">
            Skills
          </Link>
          <Link href="#experience" className="transition hover:text-[#E56B4B]">
            Experience
          </Link>
          <Link href="#services" className="transition hover:text-[#E56B4B]">
            Services
          </Link>
        
          <Link href="#contact" className="transition hover:text-[#E56B4B]">
            Contact
          </Link>
        </div>

        <Link
          href="#contact"
          className="rounded-full bg-[#171717] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#E56B4B]"
        >
          Lets Talk <ArrowUpRight className="ml-1 inline-block" size={16} />
        </Link>
      </nav>
  )
}

export default Navbar
