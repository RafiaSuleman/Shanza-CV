const skills = [
  "Digital Marketing",
  "Campaign Management",
  "Account Management",
  "Market Research",
  "Content Creation",
  "Creative Strategy",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F8F7F4] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#E56B4B]">
            My Skills
          </p>

          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Skills That Turn Ideas Into{" "}
            <span className="text-[#E56B4B]">Results.</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E56B4B] hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <span className="text-sm font-semibold text-[#E56B4B]">
                  0{index + 1}
                </span>

                <h3 className="text-lg font-semibold">{skill}</h3>
              </div>

              <span className="text-xl text-gray-300 transition group-hover:text-[#E56B4B]">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}