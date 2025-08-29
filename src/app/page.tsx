import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import ContactForm from "@/components/ContactForm";
import { certifications } from "@/data/certifications";

export default function Home() {
  return (
    <>
      <Hero name="Siddhanth Shetty" tagline="Enthusiastic Computer Science Engineering student specializing in Data Science with hands-on experience in Flutter, Python." />
      <Section id="about" title="About Me">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[160px_1fr]">
          <div className="mx-auto md:mx-0">
            <Image
              src="/me.jpeg"
              alt="Siddhanth Shetty"
              width={160}
              height={160}
              className="h-40 w-40 rounded-full object-cover ring-1 ring-gray-200"
              priority
            />
          </div>
          <div className="space-y-4 text-gray-700">
            <p>
              B.E. Computer Science (Data Science) student at Mumbai University with hands-on
              experience in Flutter, Python, and Machine Learning. Skilled in developing mobile
              applications with real-world impact, including speech recognition and air quality
              prediction.
            </p>
            <p>
              Strong problem-solving ability, eager to contribute to software development and
              AI-driven projects. Passionate about building user-centric solutions and learning new
              technologies.
            </p>
            <p>
              Currently pursuing a B.E. at VCET with a CGPA of 8.33, and actively participating in
              technical events and showcases while expanding skills in ML and modern app
              development.
            </p>
          </div>
        </div>
      </Section>
      <Section id="resume" title="Resume">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <iframe
              src="/resume.pdf"
              title="Resume PDF"
              className="h-[80vh] w-full"
            />
          </div>
          <div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Section>
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="AQI Prediction & Health Alerts App"
            description="Mobile app providing real-time AQI insights, health alerts, and forecasting using machine learning."
            tech={["Flutter", "Flask", "Random Forest", "ML"]}
            github="https://github.com/SiddhanthShetty-412/Aqi_app_frontend"
          />
          <ProjectCard
            title="Speech Recognition Mobile App"
            description="Real-time speech-to-text transcription app with multi-language support and optimized API usage."
            tech={["Flutter", "Speech-to-Text", "Mobile"]}
            github="https://github.com/SiddhanthShetty-412/speech_to_text"
          />
          <ProjectCard
            title="Portfolio Website"
            description="This portfolio site built with Next.js and Tailwind CSS."
            tech={["Next.js", "TypeScript", "Tailwind CSS"]}
            demo="/"
          />
        </div>
      </Section>
      <Section id="certifications" title="Certifications">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <CertificationCard
              key={`${c.title}-${c.date}`}
              title={c.title}
              issuer={c.issuer}
              date={c.date}
              url={c.link}
            />
          ))}
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>
    </>
  );
}
