import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookMarked,
  CheckCircle,
  FileText,
  PenTool,
  Send,
  Users,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const services = [
  {
    icon: BookMarked,
    title: "Urban Fiction Publishing",
    text: "A professional home for street literature, urban novels, and powerful fiction with commercial appeal.",
  },
  {
    icon: PenTool,
    title: "Author Branding",
    text: "Brand positioning, presentation, and digital presence designed to make authors look serious and trusted.",
  },
  {
    icon: FileText,
    title: "Manuscript Development",
    text: "Support for shaping stories, organizing books, polishing concepts, and preparing titles for release.",
  },
];

const process = [
  [
    "01",
    "Submit Inquiry",
    "Reach out with your book, idea, or publishing question.",
  ],
  [
    "02",
    "Review Fit",
    "Pen Game Press reviews whether the project fits the brand direction.",
  ],
  [
    "03",
    "Plan Release",
    "If aligned, the next step is planning presentation, catalog placement, and launch direction.",
  ],
];

export default function Publishing() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#B8860B]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-white/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Publishing
            </p>

            <h1 className="mt-5 font-serif text-5xl font-black leading-tight md:text-7xl">
              A publishing platform for stories with weight.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6F6A61]">
              Pen Game Press is built to grow beyond one book. This page gives
              the brand room for author submissions, publishing conversations,
              business inquiries, and future partnerships.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8860B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#B8860B]/20 transition hover:bg-[#111]"
              >
                Submit Inquiry <ArrowRight size={18} />
              </Link>

              <Link
                to="/books"
                className="inline-flex items-center justify-center rounded-full border border-[#B8860B]/40 bg-white/60 px-8 py-4 text-sm font-black uppercase tracking-widest text-[#111] shadow-sm transition hover:bg-[#B8860B] hover:text-white"
              >
                View Catalog
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[#111]/10 bg-white p-8 shadow-2xl">
            <div className="rounded-[2rem] border border-[#B8860B]/30 bg-[#F8F4EE] p-8">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#B8860B]">
                For Authors
              </p>

              <h2 className="mt-8 font-serif text-4xl font-black text-[#111]">
                Fiction. Identity. Legacy.
              </h2>

              <p className="mt-5 leading-8 text-[#6F6A61]">
                A strong publishing brand helps readers, authors, and business
                partners understand what Pen Game Press stands for immediately.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Urban fiction focus",
                  "Professional brand presence",
                  "Reader and author inquiries",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-[#B8860B]" size={20} />
                    <span className="font-semibold text-[#111]/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                What We Build
              </p>
              <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
                Publishing with presentation and purpose.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#6F6A61]">
              This page turns Pen Game Press from only an author website into a
              scalable publishing brand that can attract readers, authors,
              collaborators, and opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-[#111]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="text-[#B8860B]" size={36} />
                  <h3 className="mt-8 font-serif text-3xl font-black">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6F6A61]">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREMIUM BRAND STRIP */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            [Sparkles, "Premium Presentation", "Built to make every book feel intentional and valuable."],
            [BadgeCheck, "Professional Standards", "Clear structure creates trust with readers, authors, and partners."],
            [Users, "Audience Growth", "Designed to support readers, submissions, and publishing opportunities."],
          ].map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-[#111]/10 bg-[#EFE7DA] p-8"
            >
              <Icon className="text-[#B8860B]" size={34} />
              <h3 className="mt-6 font-serif text-3xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-[#6F6A61]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENT DESIGN: EDITORIAL STRIP */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#111]/10 bg-white shadow-sm">
          <div className="grid md:grid-cols-[1fr_1fr]">
            <div className="bg-[#EFE7DA] p-10 md:p-16">
              <Users className="text-[#B8860B]" size={42} />

              <h2 className="mt-8 font-serif text-4xl font-black md:text-6xl">
                Designed for more than one release.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#6F6A61]">
                A publishing company needs structure. This page helps Pen Game
                Press look organized, intentional, and prepared for growth.
              </p>
            </div>

            <div className="bg-[#111] p-10 text-white md:p-16">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                Conversion Purpose
              </p>

              <div className="mt-8 space-y-6">
                {[
                  "Gives serious authors a place to inquire.",
                  "Shows readers this is a real publishing brand.",
                  "Creates business opportunities beyond book sales.",
                  "Makes Pen Game Press look scalable and professional.",
                ].map((item) => (
                  <div key={item} className="flex gap-4">
                    <CheckCircle
                      className="mt-1 shrink-0 text-[#B8860B]"
                      size={22}
                    />
                    <p className="text-lg leading-8 text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
            Process
          </p>

          <h2 className="mt-4 max-w-4xl font-serif text-4xl font-black md:text-6xl">
            A clear path for publishing inquiries.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {process.map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-[#111]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="font-serif text-6xl font-black text-[#B8860B]">
                  {number}
                </p>
                <h3 className="mt-8 text-xl font-black uppercase tracking-widest">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-[#6F6A61]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL QUOTE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
            Publishing Philosophy
          </p>

          <h2 className="mt-8 font-serif text-4xl font-black leading-tight md:text-6xl">
            “A story becomes stronger when the brand around it makes readers
            believe it matters.”
          </h2>

          <p className="mt-8 text-[#6F6A61]">
            Pen Game Press is built to give powerful stories the presentation
            they deserve.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
              Publishing questions.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              [
                "Is Pen Game Press accepting authors?",
                "This website creates space for author inquiries. The brand can choose which projects fit its direction.",
              ],
              [
                "What type of books fit the brand?",
                "Urban fiction, street literature, powerful character-driven stories, and books with strong commercial storytelling.",
              ],
              [
                "Can readers ask about upcoming releases?",
                "Yes. The contact page can be used for reader questions, release updates, and order inquiries.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-[2rem] border border-[#111]/10 bg-[#EFE7DA] p-7"
              >
                <h3 className="text-lg font-black">{question}</h3>
                <p className="mt-3 leading-7 text-[#6F6A61]">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2.5rem] bg-[#B8860B] p-10 text-white md:flex-row md:items-center md:p-14">
          <div>
            <Send size={34} />
            <h2 className="mt-5 font-serif text-4xl font-black">
              Have a publishing inquiry?
            </h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Contact Pen Game Press for author submissions, business
              conversations, book questions, or partnership opportunities.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-[#111] transition hover:bg-[#111] hover:text-white"
          >
            Start Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}