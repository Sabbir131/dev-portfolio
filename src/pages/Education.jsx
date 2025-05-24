const educationList = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Dhaka",
    year: "2019 - 2023",
    details: "Focused on software engineering, web development, and databases.",
  },
  {
    degree: "Web Development Certification",
    school: "FreeCodeCamp",
    year: "2021",
    details: "Completed full responsive web design and JavaScript algorithms courses.",
  },
];

const Education = () => {
  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10 text-emerald-400 text-center">Education & Certifications</h2>
      <div className="space-y-8">
        {educationList.map(({ degree, school, year, details }, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold text-white">{degree}</h3>
            <p className="text-emerald-400">{school}</p>
            <p className="text-gray-400 text-sm mb-2">{year}</p>
            <p className="text-gray-300">{details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
