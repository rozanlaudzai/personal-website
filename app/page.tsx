import Link from "next/link";
import Navbar from "./components/Navbar";

type Award = {
  title: string;
  issuer?: string;
  level?: string;
  year?: string;
};

const awards: Award[] = [
  {
    title:
      "Finalist - Indonesia National Olympiad in Informatics (OSN Informatika)",
    issuer: "Ministry of Education of The Republic of Indonesia",
    level: "National",
    year: "2024",
  },
  {
    title:
      "1st Place - MAGE (Multimedia and Game Event) 2024 - Competitive Programming",
    issuer: "Institut Teknologi Sepuluh Nopember",
    level: "National",
    year: "2024",
  },
  {
    title: "3rd Place - Airnology 2024 - Coding Challenge",
    issuer: "Universitas Airlangga",
    level: "National",
    year: "2024",
  },
  {
    title: "1st Place - Pekan IT 2025 - Competitive Programming",
    issuer: "Universitas Singaperbangsa Karawang",
    level: "National",
    year: "2025",
  },
  {
    title:
      "1st Place - Computer Science Showdown 2025 - Competitive Programming",
    issuer: "Universitas Lampung",
    level: "National",
    year: "2025",
  },
  {
    title: "3rd Place - INACOMP 2025 - Competitive Programming",
    issuer: "Universitas Negeri Jakarta",
    level: "National",
    year: "2025",
  },
  {
    title:
      "1st Place - Computer Science Showdown 2024 - Competitive Programming",
    issuer: "Universitas Lampung",
    level: "National",
    year: "2024",
  },
  {
    title: "1st Place - Cite Up 2024 - Competitive Programming",
    issuer: "Universitas Pertamina",
    level: "National",
    year: "2024",
  },
  {
    title: "1st Place - Ma Chung Intelligence Battle 2024 - Code Championship",
    issuer: "Universitas Ma Chung",
    level: "Provincial",
    year: "2024",
  },
  {
    title: "1st Place - National Programming & Logic Competition 2024",
    issuer: "Universitas Ciputra",
    level: "National",
    year: "2024",
  },
  {
    title: "1st Place - Compsphere 2023 - Programming Rush",
    issuer: "President University",
    level: "National",
    year: "2023",
  },
  {
    title:
      "2nd Place - Electrical Engineering in Action 2023 - Programming Competition",
    issuer: "Universitas Lampung",
    level: "National",
    year: "2023",
  },
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />

      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I&apos;m <span className="heading-accent">Rozan</span>
            </h1>
            <p className="text-[--color-muted] max-w-2xl">
              Backend & DevOps Enthusiast | Competitive Programmer
            </p>
            <div className="flex gap-3">
              <Link
                href="mailto:rozanlaudzai717@gmail.com"
                className="px-4 py-2 rounded-md border border-[--color-border] hover:border-[--color-accent] transition"
              >
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/rozan-laudzai-2576b1336/"
                className="px-4 py-2 rounded-md border border-[--color-border] hover:border-[--color-accent] transition"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/rozanlaudzai"
                className="px-4 py-2 rounded-md border border-[--color-border] hover:border-[--color-accent-2] transition"
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">University of Indonesia</h3>
                <span className="text-xs text-[--color-muted]">
                  2025 - Present
                </span>
              </div>
              <p className="text-sm text-[--color-muted]">
                Bachelor&apos;s degree, Computer Science
              </p>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">SMA Negeri 3 Malang</h3>
                <span className="text-xs text-[--color-muted]">
                  2022 - 2025
                </span>
              </div>
              <p className="text-sm text-[--color-muted]">
                High School Diploma — Core Subjects: Mathematics, Physics,
                Chemistry.
              </p>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Awards</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((a, idx) => (
              <div key={idx} className="glass rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{a.title}</p>
                    {a.issuer ? (
                      <p className="text-xs text-[--color-muted]">{a.issuer}</p>
                    ) : null}
                  </div>
                  <div className="text-right text-xs text-[--color-muted]">
                    <div>{a.level}</div>
                    <div>{a.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <div className="glass rounded-lg p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Go-MySQL RESTful API</h3>
              <span className="text-xs text-[--color-muted]">
                November 2025
              </span>
            </div>
            <p className="text-sm text-[--color-muted]">
              A RESTful API designed for category management, built with Go and
              MySQL. This project demonstrates clean architecture patterns,
              secure API key authentication, comprehensive error handling, and
              full CRUD operations.
            </p>
            <div className="mt-3">
              <Link
                href="https://github.com/rozanlaudzai/go-mysql-restful-api"
                className="text-[--color-accent] hover:underline"
              >
                Repository
              </Link>
            </div>
          </div>
          <div className="glass rounded-lg p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Flask To-Do List</h3>
              <span className="text-xs text-[--color-muted]">June 2025</span>
            </div>
            <p className="text-sm text-[--color-muted]">
              To-Do List Web App with auth system using Flask
            </p>
            <div className="mt-3">
              <Link
                href="https://github.com/rozanlaudzai/flask-todo-list"
                className="text-[--color-accent] hover:underline"
              >
                Repository
              </Link>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experiences" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Experiences</h2>
          <div className="space-y-4">
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  Competitive Programming Tutor — SMA Negeri 3 Malang
                </h3>
                <span className="text-xs text-[--color-muted]">
                  August 2022 - March 2025
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-[--color-muted] mt-2 space-y-1">
                <li>
                  Taught basics of programming with C++, discrete mathematics,
                  algorithms, and data structures
                </li>
                <li>Prepared relevant problems for each member</li>
              </ul>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  Competitive Programming Tutor — SMA Negeri 1 Gondangwetan
                </h3>
                <span className="text-xs text-[--color-muted]">
                  February 2025
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-[--color-muted] mt-2 space-y-1">
                <li>
                  Taught discrete mathematics and several algorithms and data
                  structures
                </li>
              </ul>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  Mathematics Olympiad Problem Setter — Smanti Education
                  Festival
                </h3>
                <span className="text-xs text-[--color-muted]">
                  March 2023 & March 2024
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-[--color-muted] mt-2 space-y-1">
                <li>
                  The Smanti Education Festival is an annual event organized by
                  SMA Negeri 3 Malang. It features various competitions for high
                  school students, including a mathematics olympiad specifically
                  for junior high school students.
                </li>
                <li>
                  In 2023 and 2024, I created numerous mathematics olympiad
                  problems using LaTeX.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Competitive Programming</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Go (Golang)</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Python</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Fiber</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Django</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Flask</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">MySQL</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">PostgreSQL</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Docker</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Nginx</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">LaTeX</p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Languages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-lg p-4">
              <p className="font-medium">Bahasa Indonesia</p>
              <p className="text-xs text-[--color-muted]">Native proficiency</p>
            </div>
            <div className="glass rounded-lg p-4">
              <p className="font-medium">English</p>
              <p className="text-xs text-[--color-muted]">
                Working proficiency
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[--color-border]/60 mt-16">
        <div className="container mx-auto px-6 py-8 text-sm text-[--color-muted] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Rozan Laudzai</p>
          <div className="flex gap-4">
            <Link
              href="mailto:rozanlaudzai717@gmail.com"
              className="hover:text-[--color-foreground]"
            >
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/rozan-laudzai-2576b1336/"
              className="hover:text-[--color-foreground]"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/rozanlaudzai"
              className="hover:text-[--color-foreground]"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
