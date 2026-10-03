import {
  Megaphone,
  Search,
  PenTool,
  BarChart3,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Campaign Management",
    description:
      "Planning, managing, and optimizing digital marketing campaigns.",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Market Research",
    description:
      "Understanding audiences, trends, and market opportunities.",
    icon: Search,
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Creating engaging and relevant content for digital platforms.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Account Management",
    description:
      "Managing digital accounts and maintaining consistent brand presence.",
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8F7F4] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E56B4B]">
            What I Do
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Digital Marketing
            <span className="text-[#E56B4B]"> Services.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group rounded-3xl bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[#E56B4B]">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCE9E2] text-[#E56B4B] transition group-hover:bg-[#E56B4B] group-hover:text-white">
                    <Icon size={21} />
                  </div>
                </div>

                <h3 className="mt-10 text-2xl font-bold tracking-tight sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}