import { motion, useMotionValue } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import portfolio from "./assets/portfolio.jpeg";
import { Typewriter } from "react-simple-typewriter";

function App() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

 const projects = [
  {
    title: "TrustHire – AI Job Scam Detection",
    desc: "AI-powered platform that analyzes job offers and detects scam probability using NLP and red-flag analysis. Built with React, Node.js, Express, and Supabase authentication.",
    tech: ["React.js", "Node.js", "Express", "Supabase", "AI/NLP"],
    github: "https://github.com/MuskanGautam-25",
    live: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Language Translator",
    desc: "Responsive language translation web app with auto-detect, language swap, glossary support, translation history, copy-to-clipboard, and downloadable translated text.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/MuskanGautam-25/translator-pro",
    live: "http://muskangautam-25.github.io/translator-pro/",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Personal Portfolio Website",
    desc: "Modern animated developer portfolio built using React, Tailwind CSS, Framer Motion, and interactive cursor effects inspired by modern UI portfolios.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/MuskanGautam-25",
    live: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-[#020617] text-white overflow-hidden relative"
    >

      {/* CURSOR EFFECT */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed top-0 left-0 rounded-full bg-white z-[9999]"
          style={{
            width: 16 - i,
            height: 16 - i,
            x: mouseX,
            y: mouseY,
            opacity: 1 - i * 0.08,
            filter: "blur(1px)",
          }}
          animate={{
            x: mouseX.get() - i * 10,
            y: mouseY.get() - i * 6,
          }}
          transition={{
            duration: 0.15 + i * 0.04,
          }}
        />
      ))}

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Muskan's Portfolio
          </h1>

          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      {/* HERO SECTION */}
<section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-28 relative z-10"
>

  <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-7"
    >

      <p className="text-3xl text-purple-400 font-medium">
        Hello, my name is
      </p>

      <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
        Muskan{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Gautam
        </span>
      </h1>

      <h2 className="text-4xl text-gray-300 leading-snug">
  I build things for the{" "}

  <span className="text-purple-400 font-semibold">
    <Typewriter
      words={[
        "AI",
        "Web",
       
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={100}
      delaySpeed={2000}
    />
  </span>

</h2>

      <p className="text-gray-400 text-lg leading-9 max-w-xl">
        A passionate IT student at IGDTUW exploring Web Development,
       Artificial Intelligence, and impactful
        technology solutions.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-5 pt-2">

        <a
          href="#projects"
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition duration-300"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-2xl border border-purple-400 hover:bg-purple-500/10 transition duration-300"
        >
          Contact Me
        </a>

      </div>

      {/* SOCIALS */}
      <div className="flex gap-7 text-4xl pt-5">

        <a
          href="https://github.com/MuskanGautam-25"
          target="_blank"
        >
          <FaGithub className="hover:text-cyan-400 transition duration-300" />
        </a>

        <a
          href="https://linkedin.com/in/muskan-gautam-257a15332"
          target="_blank"
        >
          <FaLinkedin className="hover:text-cyan-400 transition duration-300" />
        </a>

        <a href="mailto:muskangautam9876@gmail.com">
          <FaEnvelope className="hover:text-cyan-400 transition duration-300" />
        </a>

      </div>

    </motion.div>

    {/* RIGHT SIDE IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center relative"
    >

      {/* GLOW */}
      <div className="absolute w-[320px] h-[320px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* IMAGE BOX */}
      <div className="relative z-10">

        <img
          src={portfolio}
          alt="profile"
          className="w-[420px] lg:w-[450px] object-cover drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]"
        />

      </div>

    </motion.div>

  </div>
</section>
      {/* ABOUT */}
      <section id="about" className="py-28 px-6 relative z-10">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-10 space-y-6">

              <p className="text-gray-300 text-lg leading-9">
                I am a passionate IT student from IGDTUW exploring Web
                Development, Cloud Computing, Artificial Intelligence,
                and modern technologies.
              </p>

              <p className="text-gray-300 text-lg leading-9">
                I enjoy building impactful projects that solve real-world
                problems while continuously improving my development and
                problem-solving skills.
              </p>

              <p className="text-gray-300 text-lg leading-9">
               When I’m not developing, you’ll find me designing comics, crafting stories,
               or experimenting with emerging tech. I’m always open to collaboration and new 
               challenges that push the limits of what code and creativity can achieve.
              </p>

            </div>

            <div className="space-y-8">

              <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  Education
                </h3>

                <p className="text-gray-300 text-lg">
                  B.Tech Information Technology
                </p>

                <p className="text-gray-400">
                  Indira Gandhi delhi Technical University For Women
                
                </p>
                <p className="text-gray-400">
               
                  2023 – 2027
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-8">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                  Interests
                </h3>

                <p className="text-gray-300 leading-8">
                  Web Development,  Artificial Intelligence, Machine Learning 
                  UI/UX Design, Open Source
                </p>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="py-28 px-6 relative z-10">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">

            <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-10">

              <h3 className="text-3xl font-semibold mb-8 text-cyan-400">
                Technical Skills
              </h3>

              <div className="space-y-8">

                {[
                  ["HTML", "95%"],
                  ["CSS", "90%"],
                  ["JavaScript", "88%"],
                  ["React", "85%"],
                  ["Tailwind CSS", "90%"],
                  ["Java", "80%"],
                ].map(([skill, level], index) => (

                  <div key={index}>

                    <div className="flex justify-between mb-2">
                      <span>{skill}</span>
                      <span>{level}</span>
                    </div>

                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                        style={{ width: level }}
                      ></div>
                    </div>

                  </div>
                ))}

              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-10">

              <h3 className="text-3xl font-semibold mb-8 text-purple-400">
                Tools & Technologies
              </h3>

              <div className="grid grid-cols-2 gap-6">

                {[
                  "GitHub",
                  "VS Code",
                  "Node.js",
                
                  "AI/ML",
                  "Responsive Design",
                ].map((tool, index) => (

                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-cyan-400/40 transition"
                  >
                    {tool}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      {/* PROJECTS SECTION */}
<section
  id="projects"
  className="py-32 px-6 relative z-10"
>

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
    >
      Featured Projects
    </motion.h2>

    {/* PROJECT GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {projects.map((project, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.2 }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-lg shadow-xl hover:shadow-purple-500/20 transition duration-500"
        >

          {/* IMAGE */}
          <div className="overflow-hidden h-[220px]">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />

          </div>

          {/* CONTENT */}
          <div className="p-7">

            <h3 className="text-3xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              {project.desc}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mb-8">

              {project.tech.map((tech, i) => (

                <span
                  key={i}
                  className="px-4 py-2 bg-purple-500/20 rounded-full text-sm text-purple-200"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* BUTTONS */}
            <div className="flex gap-5">

              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
              >
                <FaGithub />
                Code
              </a>

              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
              >
                ↗ Live Demo
              </a>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 relative z-10">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">

            <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-10 space-y-8">

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                  Email
                </h3>

                <p className="text-gray-300">
                  muskangautam9876@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                  LinkedIn
                </h3>

                <p className="text-gray-300">
                  linkedin.com/in/muskan-gautam
                </p>
              </div>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-10">

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
                ></textarea>

                <button
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold hover:scale-105 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;
