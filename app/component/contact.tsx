import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#171717] px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#E56B4B]">
              Get In Touch
            </p>

            <h2 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s Create
              <span className="text-[#E56B4B]"> Something Great.</span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-400">
              Have a project, campaign, or digital marketing idea in mind?
              Let&apos;s connect and turn your ideas into meaningful results.
            </p>
          </div>

          <div className="space-y-5">

            <a
              href="mailto:your-email@example.com"
              className="group flex items-center justify-between rounded-2xl border border-white/10 p-6 transition hover:border-[#E56B4B] hover:bg-white/5"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E56B4B]">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    shnzmrm@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={20}
                className="text-gray-500 transition group-hover:text-[#E56B4B]"
              />
            </a>

            <a
              href="tel:+923000000000"
              className="group flex items-center justify-between rounded-2xl border border-white/10 p-6 transition hover:border-[#E56B4B] hover:bg-white/5"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E56B4B]">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    +92 317 4280236
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={20}
                className="text-gray-500 transition group-hover:text-[#E56B4B]"
              />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}