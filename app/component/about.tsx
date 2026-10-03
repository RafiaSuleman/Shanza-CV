import React from 'react'
import {  ArrowUpRight } from "lucide-react";
const About = () => {
  return (

  <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

    {/* Left Content */}
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E56B4B]">
        About Me
      </p>

      <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        Creativity Meets
        <span className="text-[#E56B4B]"> Strategy.</span>
      </h2>

      <p className="mt-7 text-base leading-8 text-gray-500">
        I am a qualified and professional digital marketing expert with
        Two years of experience. My approach combines creative thinking
        with analytical skills to develop meaningful marketing strategies
        and deliver impactful campaigns.
      </p>

      <p className="mt-5 text-base leading-8 text-gray-500">
        As a team player with an eye for detail, I enjoy exploring new
        ideas, understanding market trends, and creating content that
        connects brands with their audiences.
      </p>

      <a
        href="#experience"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171717] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#E56B4B]"
      >
        My Experience
        <ArrowUpRight size={17} />
      </a>
    </div>

    {/* Right Content */}
    <div className="grid grid-cols-2 gap-4">

      <div className="rounded-3xl bg-[#F8F7F4] p-7 sm:p-10">
        <p className="text-5xl font-bold text-[#E56B4B]">02+</p>
        <h3 className="mt-4 text-lg font-semibold">Years Experience</h3>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Professional experience in digital marketing.
        </p>
      </div>

      <div className="mt-10 rounded-3xl bg-[#FCE9E2] p-7 sm:p-10">
        <p className="text-5xl font-bold text-[#E56B4B]">02</p>
        <h3 className="mt-4 text-lg font-semibold">Work Periods</h3>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Experience at Alpha Tech Solution.
        </p>
      </div>

      <div className="rounded-3xl bg-[#171717] p-7 text-white sm:p-10">
        <div className="text-4xl font-bold">01</div>
        <h3 className="mt-4 text-lg font-semibold">Creative Mindset</h3>
        <p className="mt-2 text-sm leading-6 text-gray-400">
          Creative ideas backed by analytical thinking.
        </p>
      </div>

      <div className="mt-10 rounded-3xl bg-[#F8F7F4] p-7 sm:p-10">
        <div className="text-4xl font-bold text-[#E56B4B]">∞</div>
        <h3 className="mt-4 text-lg font-semibold">Learning & Growth</h3>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Always exploring new trends and opportunities.
        </p>
      </div>

    </div>
  </div>

  )
}

export default About
