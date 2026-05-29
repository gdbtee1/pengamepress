import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, ShoppingBag, Star } from "lucide-react";

const books = [
  {
    title: "Coming Soon",
    category: "Street Urban Novel",
    status: "Upcoming Release",
    description:
      "A cinematic urban fiction story built around loyalty, ambition, betrayal, survival, and the cost of every choice.",
  },
  {
    title: "Untitled Manuscript",
    category: "Urban Fiction",
    status: "In Development",
    description:
      "A future Pen Game Press release with raw characters, high stakes, and powerful street storytelling.",
  },
  {
    title: "New Release TBA",
    category: "Fiction",
    status: "Future Catalog",
    description:
      "More titles will be added as the Pen Game Press collection grows.",
  },
];

export default function Books() {
  return (
    <main>
      {/* HERO */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
            The Catalog
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
            <h1 className="font-serif text-5xl font-black leading-tight md:text-7xl">
              Street fiction with luxury presentation.
            </h1>

            <p className="text-lg leading-8 text-[#6F6A61]">
              Explore featured books, upcoming releases, and future titles from
              Pen Game Press. This page is built to turn visitors into readers.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED BOOK */}
      <section className="px-5 py-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#111]/10 bg-white shadow-xl md:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-[#2B2114] p-10 md:p-16">
            <div className="flex min-h-[420px] flex-col justify-between rounded-2xl border border-[#B8860B]/40 bg-gradient-to-b from-[#EFE7DA] to-[#B8860B]/20 p-8 text-[#111] shadow-2xl">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#B8860B]">
                  Pen Game Press
                </p>
                <h2 className="mt-8 font-serif text-5xl font-black">
                  Coming Soon
                </h2>
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#111]/60">
                Official Cover Placeholder
              </p>
            </div>
          </div>

        <div className="p-10 md:p-16">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Featured Release
            </p>
<h2 className="mt-5 font-serif text-4xl font-black text-[#111] md:text-6xl">
              A raw urban novel built for readers who like pressure, plot, and
              consequences.
            </h2>
<p className="mt-6 text-lg leading-8 text-[#6F6A61]">
              This featured title section will showcase Emani Nooner’s current
              or upcoming release with the book cover, synopsis, release date,
              price, and purchase link.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Genre", "Urban Fiction"],
                ["Status", "Coming Soon"],
                ["Brand", "Pen Game Press"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-[#B8860B]">
                    {label}
                  </p>
                  <p className="mt-2 font-bold">{value}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-[#111]"
            >
              Ask About This Book <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section><section className="px-5 pb-10">
  <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#EFE7DA] p-10 md:p-16">
    <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
      Coming Soon
    </p>

    <h2 className="mt-5 font-serif text-4xl font-black md:text-6xl">
      The next chapter of Pen Game Press.
    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6F6A61]">
      New releases, expanded collections, and future stories are already in
      development. This catalog is designed to grow with the brand.
    </p>
  </div>
</section>

      {/* BOOK GRID */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                Releases
              </p>
              <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
                Current & upcoming books.
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#B8860B]"
            >
              Book order inquiry <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.title}
                className="group overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-72 items-center justify-center bg-[#EFE7DA] p-8">
                  <div className="flex h-full w-full flex-col justify-between rounded-xl border border-[#B8860B]/30 bg-[#F8F4EE] p-6">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#B8860B]">
                      {book.category}
                    </p>
                    <h3 className="font-serif text-4xl font-black">
                      {book.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#111]/50">
                      {book.status}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-sm font-black uppercase tracking-widest text-[#B8860B]">
                    {book.status}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-black">
                    {book.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6F6A61]">
                    {book.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#111] transition hover:text-[#B8860B]"
                  >
                    Inquire <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION STRIP */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            [BookOpen, "Original Stories"],
            [Star, "Reader-Focused"],
            [Calendar, "Upcoming Releases"],
            [ShoppingBag, "Order Inquiries"],
          ].map(([Icon, label]) => (
            <div
              key={label}
              className="rounded-[2rem] border border-[#111]/10 bg-[#EFE7DA] p-7"
            >
              <Icon className="text-[#B8860B]" size={30} />
              <p className="mt-5 text-sm font-black uppercase tracking-widest">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
<section className="px-5 py-20">
  <div className="mx-auto max-w-5xl text-center">
    <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
      Reader Experience
    </p>

    <h2 className="mt-8 font-serif text-4xl font-black leading-tight md:text-6xl">
      “Great books don't just tell stories.
      They leave fingerprints on the reader.”
    </h2>

    <p className="mt-8 text-[#6F6A61]">
      Pen Game Press exists to publish memorable fiction with lasting impact.
    </p>
  </div>
</section>
      {/* FAQ STYLE */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Book Questions
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
              What readers may want to know.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              [
                "Where can I buy the books?",
                "Purchase links, ordering instructions, and release details can be added once the books are ready.",
              ],
              [
                "Can I request updates?",
                "Yes. Readers can contact Pen Game Press to ask about releases, availability, and future announcements.",
              ],
              [
                "Will more books be added?",
                "Yes. This catalog is designed to grow as Pen Game Press releases new titles.",
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
    </main>
  );
}