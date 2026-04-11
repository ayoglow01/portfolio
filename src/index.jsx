import { useState, useEffect } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 shadow-md bg-white dark:bg-gray-900">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <div className="hidden md:flex gap-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 p-5">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm Akinola Ayomide
        </h1>

        <p className="mt-4 text-lg">
          Frontend Developer | CrewAI Engineer
        </p>

        {/* CV Download */}
        <a
          href="/assets/MyCV-.pdf"
          download="Akinola_Ayomide_Resume.pdf"
          className="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Download Resume
        </a>
      </section>

      {/* About */}
      <section id="about" className="p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I’m a Software Engineering student who loves building web applications
          and working with AI. I create projects that combine clean design with
          smart functionality, including AI tools and interactive web apps.
          I’m always learning, improving my skills, and exploring new technologies.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">Password Generator</h3>
            <p className="mt-2">
              A simple tool to generate secure passwords with copy functionality.
            </p>
            <p className="text-sm mt-2">Tech: HTML, CSS, JavaScript</p>

            <a
              href="https://wonderful-dragon-5e3eed.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">Captcha Generator & Validator</h3>
            <p className="mt-2">
              Real-time validation of randomly generated captcha strings.
            </p>
            <p className="text-sm mt-2">Tech: HTML, CSS, JavaScript</p>

            <a
              href="https://cheery-semifreddo-60f970.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          </div>

          {/* Project 3 */}
          <div className="p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">E-Commerce Landing Page</h3>
            <p className="mt-2">
              Responsive landing page for consumer electronics.
            </p>
            <p className="text-sm mt-2">Tech: HTML, CSS, JS</p>

            <a
              href="https://stupendous-tarsier-d5b575.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          </div>

          {/* Project 4 */}
          <div className="p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">Trendify Clothing Store</h3>
            <p className="mt-2">
              Responsive UI with Bootstrap and jQuery interactions.
            </p>
            <p className="text-sm mt-2">Tech: HTML, CSS, JS, Bootstrap</p>

            <a
              href="https://enchanting-biscochitos-1f7c16.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          </div>

          {/* Project 5 */}
          <div className="p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">Personal Portfolio Website</h3>
            <p className="mt-2">
              Responsive portfolio with dark mode and modern UI.
            </p>
            <p className="text-sm mt-2">Tech: React, Tailwind CSS, Vite</p>

            <p className="text-green-500 text-sm mt-2">
              ● You are viewing it live
            </p>
          </div>

          {/* Project 6 */}
          <div className="p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">AI Data Insight Reporter</h3>
            <p className="mt-2">
              AI system that analyzes datasets and generates insights.
            </p>
            <p className="text-sm mt-2">
              Tech: Python, Streamlit, CrewAI (Groq API)
            </p>

            <p className="text-green-500 text-sm mt-2">
              ● Undergoing updates
            </p>

            <a
              href="https://youtu.be/810fX6Elndw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              ▶ Watch Demo Video
            </a>
          </div>

          {/* Project 7 */}
          <div className="p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">Tone Adaptive AI Writer</h3>
            <p className="mt-2">
              AI tool that rewrites text into different tones.
            </p>
            <p className="text-sm mt-2">Tech: Python, Streamlit, CrewAI</p>

            <p className="text-green-500 text-sm mt-2">
              ● Undergoing updates
            </p>

            <a
              href="https://youtu.be/WE0nWrS-mvg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              ▶ Watch Demo Video
            </a>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="p-10 bg-slate-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold">Frontend</h3>
            <p>HTML, CSS, JavaScript</p>
          </div>

          <div>
            <h3 className="font-semibold">Backend</h3>
            <p>Python</p>
          </div>

          <div>
            <h3 className="font-semibold">Tools</h3>
            <p>GitHub</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <input className="p-3 rounded bg-gray-100 dark:bg-gray-700" placeholder="Name" required />
          <input className="p-3 rounded bg-gray-100 dark:bg-gray-700" placeholder="Email" required />
          <textarea className="p-3 rounded bg-gray-100 dark:bg-gray-700" placeholder="Message" required />

          <button className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-5 border-t">
        <p>© 2026 Akinola Ayomide. All rights reserved.</p>
      </footer>

    </div>
  );
}