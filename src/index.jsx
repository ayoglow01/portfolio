import { useState, useEffect } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply/remove the "dark" class on the <html> element
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 shadow-md">
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
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Akinola Ayomide</h1>
        <p className="mt-4 text-lg">Frontend Developer | CrewAI Engineer</p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
          <a
  href="/MyCV-.pdf"
  download
>
  Download Resume
</a>
        </button>
      </section>

      {/* About */}
      <section id="about" className="p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I’m a Software Engineering student who loves building web applications and working with AI. I create projects that combine clean design with smart functionality, including AI tools and interactive web apps.

I’m always learning, improving my skills, and exploring new technologies to build better and more useful solutions.</p>
      </section>

      <section id="projects" className="p-10">
  <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Project 1 */}
    <div key={1} className="p-5 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800">
  <h3 className="text-xl font-semibold">Password Generator</h3>
  <p className="mt-2">
    A simple tool to generate secure passwords with copy functionality.
  </p>
  <p className="text-sm mt-2">Tech: HTML, CSS, JavaScript</p>
  <a
    href="https://wonderful-dragon-5e3eed.netlify.app/" // replace with your live URL
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded"
  >
    Live Demo
  </a>
</div>

    {/* Project 2 */}
    <div className="p-5 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800">
      <h3 className="text-xl font-semibold">Personal Portfolio Website</h3>
      <p className="mt-2">
        A responsive portfolio website showcasing my projects, skills, and experience with dark/light mode functionality.
      </p>
      <p className="text-sm mt-2">Tech: React, Tailwind CSS, Vite</p>

      <p className="text-green-500 text-sm mt-2">● You are viewing it live</p>

    </div>

    {/* Project 3 */}
    <div className="p-5 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800">
      <h3 className="text-xl font-semibold">AI Data Insight Reporter</h3>
      <p className="mt-2">
        An AI-powered application that analyzes datasets and generates intelligent reports with actionable insights and summaries.
      </p>
      <p className="text-sm mt-2">Tech: Python, Streamlit, CrewAI (Groq API)</p>
      <p className="text-green-500 text-sm mt-2">● Undergoing some updates</p>
    </div>

    {/* Project 4 */}
    <div className="p-5 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-800">
      <h3 className="text-xl font-semibold">Tone Adaptive AI Writer</h3>
      <p className="mt-2">
        An AI tool that rewrites text in different tones such as professional, casual, persuasive, or friendly.
      </p>
      <p className="text-sm mt-2">Tech: Python, Streamlit, CrewAI</p>
      <p className="text-green-500 text-sm mt-2">● Undergoing some updates</p>

      
    </div>

  </div>
</section>

      {/* Skills */}
      <section id="skills" className="p-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold">Frontend</h3>
            <p>HTML, CSS, Javascript</p>
          </div>
          <div>
            <h3 className="font-semibold">Backend</h3>
            <p>Python</p>
          </div>
          <div>
            <h3 className="font-semibold">Tools</h3>
            <p>Github</p>
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
          <input type="email" className="p-3 rounded bg-gray-100 dark:bg-gray-700" placeholder="Email" required />
          <textarea className="p-3 rounded bg-gray-100 dark:bg-gray-700" placeholder="Message" required />
          <button className="bg-blue-500 text-white py-2 rounded">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-5 border-t">
        <p>© 2026 Akinola Ayomide. All rights reserved.</p>
      </footer>
    </div>
  );
}