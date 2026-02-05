import { useSeo } from '../hooks/useSeo';

export default function About() {
  useSeo({
    title: 'About - Digital Pro Hub',
    description:
      'Digital Pro Hub is a small, student-led digital service initiative focused on helping students, individuals, and small businesses with their digital work.',
  });

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl">About Us</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                Digital Pro Hub is a small, student-led digital service initiative focused on helping students,
                individuals, and small businesses with their digital work. We believe in simple communication,
                honest pricing, and delivering quality work on time. This platform operates fully online and
                prioritizes clarity and transparency with every client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
