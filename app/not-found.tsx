import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-background min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-8xl font-bold text-accent mb-4">404</div>
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold transition-colors duration-200"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
