import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12 lg:py-20">
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[#E56B4B]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Digital Marketing Professional
            </p>
          </div>

          <h1 className="text-6xl font-bold leading-[1.05] tracking-[-0.06em] sm:text-7xl lg:text-[88px]">
            SHANZA
            <br />
            <span className="text-[#E56B4B]">SIDDIQUI</span>
          </h1>

          <h2 className="mt-7 text-lg font-medium tracking-[0.22em] text-gray-700 sm:text-xl">
            DIGITAL MARKETING
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-500">
            A creative and analytical digital marketing professional with
            2 years of experience, passionate about building meaningful
            connections and delivering impactful campaigns.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#experience"
              className="rounded-full bg-[#E56B4B] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#cf593a]"
            >
              Explore My Work <ArrowUpRight className="ml-2 inline-block" size={17} />
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-gray-300 px-7 py-4 text-sm font-semibold transition hover:border-black"
            >
              Contact Me
            </Link>
          </div>
        </div>

   
        <div className="relative mx-auto w-full max-w-130">
          <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[#F3D8CC]" />
          <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full border border-[#E56B4B]/30" />

          <div className="relative overflow-hidden rounded-4xl bg-[#E9E4DE] p-5 sm:p-8">
            <div className="relative flex min-h-107.5 flex-col justify-between overflow-hidden rounded-3xl bg-[#E56B4B] p-7 text-white sm:min-h-122.5 sm:p-10">
              <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border-45 border-white/10" />
              <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full border-35 border-white/10" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  Creative Mindset
                </span>
                <ArrowUpRight size={25} />
              </div>

              <div className="relative z-10">
                <p className="text-sm font-medium text-white/80">
                  Turning Ideas Into
                </p>
                <h3 className="mt-3 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                  Digital
                  <br />
                  Impact.
                </h3>
                <div className="mt-8 h-px w-full bg-white/30" />
                <p className="mt-5 max-w-xs text-sm leading-7 text-white/80">
                  Strategy, creativity, and data-driven decisions for
                  meaningful digital growth.
                </p>
              </div>
            </div>
          </div>

          {/* Floating Experience Card */}
          <div className="absolute -left-5 top-1/3 rounded-2xl bg-white p-5 shadow-xl sm:-left-12">
            <p className="text-4xl font-bold tracking-tight">
              2<span className="text-[#E56B4B]">+</span>
            </p>
            <p className="mt-1 text-xs font-medium text-gray-500">
              Years of Experience
            </p>
          </div>

          {/* Floating Campaign Card */}
          <div className="absolute -right-3 bottom-10 rounded-2xl bg-white p-4 shadow-xl sm:-right-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE9E2] text-[#E56B4B]">
                <ArrowUpRight size={20} />
              </div>
              <div>
                <p className="text-sm font-bold">Creative Strategy</p>
                <p className="text-xs text-gray-500">Digital Campaigns</p>
              </div>
            </div>
          </div>
        </div>
        </section>
  )
}

export default Hero
