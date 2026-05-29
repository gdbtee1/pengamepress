import { Link } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Books", "/books"],
  ["Publishing", "/publishing"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-[#111]/10 bg-[#EFE7DA] px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h2 className="font-serif text-3xl font-black tracking-wide">
            PEN GAME PRESS
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#6F6A61]">
            A premium urban fiction and independent publishing brand built for
            powerful stories, unforgettable characters, and books that leave a
            mark.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#B8860B]">
            Explore
          </h3>
          <div className="mt-5 grid gap-3">
            {links.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className="text-sm font-semibold text-[#111]/70 transition hover:text-[#B8860B]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#B8860B]">
            Inquiries
          </h3>
          <p className="mt-5 text-sm leading-7 text-[#6F6A61]">
            For book orders, author inquiries, publishing opportunities, or
            media requests, contact Pen Game Press.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#B8860B]"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#111]/10 pt-6 text-sm text-[#6F6A61] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Pen Game Press. All rights reserved.</p>
        <p>Luxury urban fiction. Independent publishing. Powerful stories.</p>
      </div>
    </footer>
  );
}