import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Crown, Feather, Landmark } from "lucide-react";

const values = [
  {
    icon: Feather,
    title: "The Pen",
    text: "Writing is the foundation. Every book starts with discipline, vision, and a story worth telling.",
  },
  {
    icon: Crown,
    title: "The Brand",
    text: "Pen Game Press is built to feel premium, respected, and serious in the publishing space.",
  },
  {
    icon: BookOpen,
    title: "The Reader",
    text: "Every story is created to pull readers in, hold attention, and leave something behind.",
  },
];

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#B8860B]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div className="rounded-[2.5rem] border border-[#111]/10 bg-white p-10 shadow-xl md:p-14">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              About Pen Game Press
            </p>

            <h1 className="mt-6 font-serif text-5xl font-black leading-tight text-[#111] md:text-7xl">
              A publishing brand built from pressure, purpose, and penmanship.
            </h1>
          </div>

          <div>
            <p className="text-xl leading-9 text-[#3A2A1A]">
              Pen Game Press is an independent urban fiction and publishing
              brand created to give powerful stories a premium home. The brand
              represents discipline, storytelling, legacy, and the belief that
              the right words can travel beyond any wall.
            </p>

            <Link
              to="/books"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-7 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#B8860B]/20 transition hover:bg-[#111]"
            >
              Explore The Books <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL FEATURE */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#111]/10 bg-white shadow-sm md:grid-cols-2">
          <div className="min-h-[420px] bg-[#EFE7DA] p-10 md:p-16">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Founder / Author
            </p>

            <h2 className="mt-6 font-serif text-5xl font-black text-[#111]">
              Emani Nooner
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6F6A61]">
              Emani Nooner is the creative voice behind Pen Game Press, writing
              street urban novels shaped by experience, imagination, and the
              kind of storytelling that turns struggle into literature.
            </p>
          </div>

          <div className="flex items-center bg-[#111] p-10 text-white md:p-16">
            <div>
              <Landmark className="text-[#B8860B]" size={42} />

              <h3 className="mt-8 font-serif text-4xl font-black">
                More than books. A literary house with a point of view.
              </h3>

              <p className="mt-6 leading-8 text-white/70">
                The goal is to build Pen Game Press into a respected home for
                urban fiction, independent authors, reader communities, and
                stories that deserve professional presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Brand Foundation
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
              Built on story, standard, and identity.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#111]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="text-[#B8860B]" size={36} />
                  <h3 className="mt-8 font-serif text-3xl font-black">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6F6A61]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                The Vision
              </p>
              <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
                From manuscript to movement.
              </h2>
            </div>

            <div className="space-y-5">
              {[
                [
                  "01",
                  "Create the brand",
                  "Establish Pen Game Press as a premium publishing identity with a clear voice and professional presentation.",
                ],
                [
                  "02",
                  "Launch the catalog",
                  "Showcase Emani Nooner’s urban novels with strong book pages, descriptions, order options, and reader trust.",
                ],
                [
                  "03",
                  "Grow the platform",
                  "Expand into publishing inquiries, reader updates, author partnerships, and future releases.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={title}
                  className="grid gap-5 rounded-[2rem] border border-[#111]/10 bg-[#EFE7DA] p-8 md:grid-cols-[120px_1fr]"
                >
                  <p className="font-serif text-5xl font-black text-[#B8860B]">
                    {number}
                  </p>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-widest">
                      {title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#6F6A61]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto rounded-[2.5rem] bg-[#B8860B] p-10 text-center text-white md:p-16">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-white/80">
            Read The Work
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl font-black md:text-6xl">
            Discover the stories behind Pen Game Press.
          </h2>

          <Link
            to="/books"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-[#111] transition hover:bg-[#111] hover:text-white"
          >
            View Books <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}