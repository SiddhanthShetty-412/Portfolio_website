import Link from "next/link";

type HeroProps = {
  name?: string;
  tagline?: string;
};

export default function Hero({
  name = "Siddhanth Shetty",
  tagline = "Enthusiastic Computer Science Engineering student specializing in Data Science with hands-on experience in Flutter, Python.",
}: HeroProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center text-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          {name}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200">
          {tagline}
        </p>
        <div className="mt-10">
          <Link
            href="/resume.pdf"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-md transition hover:bg-gray-200"
            prefetch={false}
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
