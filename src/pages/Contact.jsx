import {
  Mail,
  MapPin,
  MessageSquare,
  Send,
  UserRound,
  BookOpen,
  PenLine,
  Newspaper,
  ArrowRight,
} from "lucide-react";

const inquiryTypes = [
  "Book Order Inquiry",
  "Publishing Inquiry",
  "Media / Interview Request",
  "Author Submission",
  "General Message",
];

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: "pengamepress@email.com",
  },
  {
    icon: MessageSquare,
    title: "Inquiries",
    text: "Books, publishing, media, support",
  },
  {
    icon: MapPin,
    title: "Brand",
    text: "Independent urban fiction publishing",
  },
];

const inquiryCards = [
  {
    icon: BookOpen,
    title: "Reader Inquiries",
    text: "Ask about book releases, ordering details, future titles, and reader updates.",
  },
  {
    icon: PenLine,
    title: "Author Submissions",
    text: "Connect with Pen Game Press about manuscripts, publishing direction, and brand fit.",
  },
  {
    icon: Newspaper,
    title: "Media & Business",
    text: "Reach out for interviews, collaborations, partnerships, or professional opportunities.",
  },
];

export default function Contact() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-20 md:py-28">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#B8860B]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-white/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Contact
            </p>

            <h1 className="mt-5 font-serif text-5xl font-black leading-tight md:text-7xl">
              Let’s start the conversation.
            </h1>
          </div>

          <div className="rounded-[2.5rem] border border-[#111]/10 bg-white p-8 shadow-xl md:p-10">
            <p className="text-lg leading-8 text-[#6F6A61]">
              Contact Pen Game Press for book orders, reader questions,
              publishing inquiries, media requests, author submissions, or
              business opportunities.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#B8860B]">
              Serious inquiries welcome <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.75fr_1.25fr]">
          {/* LEFT INFO */}
          <div className="space-y-5">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-[2rem] border border-[#111]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="text-[#B8860B]" size={32} />
                  <h3 className="mt-5 font-serif text-2xl font-black">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[#6F6A61]">{card.text}</p>
                </div>
              );
            })}

            <div className="rounded-[2rem] bg-[#111] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#B8860B]">
                Response Note
              </p>
              <p className="mt-4 leading-7 text-white/70">
                Use the form for the clearest response. Include the reason for
                your inquiry, your contact info, and any important details.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2.5rem] border border-[#111]/10 bg-white p-8 shadow-2xl md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Send A Message
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black text-[#111]">
              Inquiry Form
            </h2>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#6F6A61]">
                    Name
                  </span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-[#111]/10 bg-[#F8F4EE] px-5 py-4 text-[#111] outline-none transition placeholder:text-[#111]/35 focus:border-[#B8860B] focus:bg-white"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold text-[#6F6A61]">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-2xl border border-[#111]/10 bg-[#F8F4EE] px-5 py-4 text-[#111] outline-none transition placeholder:text-[#111]/35 focus:border-[#B8860B] focus:bg-white"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#6F6A61]">
                  Inquiry Type
                </span>
                <select className="rounded-2xl border border-[#111]/10 bg-[#F8F4EE] px-5 py-4 text-[#111] outline-none transition focus:border-[#B8860B] focus:bg-white">
                  {inquiryTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#6F6A61]">
                  Message
                </span>
                <textarea
                  rows="6"
                  placeholder="Tell us what you need..."
                  className="rounded-2xl border border-[#111]/10 bg-[#F8F4EE] px-5 py-4 text-[#111] outline-none transition placeholder:text-[#111]/35 focus:border-[#B8860B] focus:bg-white"
                />
              </label>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8860B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#B8860B]/20 transition hover:bg-[#111]"
              >
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* INQUIRY TYPES */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Who This Is For
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
              One contact page for every serious opportunity.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {inquiryCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-[2rem] border border-[#111]/10 bg-[#EFE7DA] p-8"
                >
                  <Icon className="text-[#B8860B]" size={34} />
                  <h3 className="mt-6 font-serif text-3xl font-black">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6F6A61]">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL BRAND CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#111]/10 bg-[#EFE7DA] md:grid-cols-2">
          <div className="p-10 md:p-16">
            <UserRound className="text-[#B8860B]" size={42} />

            <h2 className="mt-8 font-serif text-4xl font-black md:text-6xl">
              For readers, authors, and opportunities.
            </h2>
          </div>

          <div className="bg-[#111] p-10 text-white md:p-16">
            <p className="text-lg leading-8 text-white/70">
              This contact page is built for conversion. It gives every visitor
              a clear next step, whether they want to buy a book, ask about a
              release, submit a manuscript, or connect with Pen Game Press
              professionally.
            </p>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-[#B8860B]">
              Pen Game Press
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}