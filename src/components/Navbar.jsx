import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Books", "/books"],
  ["Publishing", "/publishing"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#B8860B]/20 bg-[#F8F4EE]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-serif text-xl font-black tracking-[0.18em] text-[#111]"
        >
          PEN GAME PRESS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-widest transition ${
                  isActive
                    ? "text-[#B8860B]"
                    : "text-[#111]/70 hover:text-[#111]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-[#111] px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#B8860B] md:inline-flex"
        >
          Inquire
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-[#111]/10 p-3 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#B8860B]/20 bg-[#F8F4EE] transition-all duration-300 md:hidden ${
          open ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-5">
          {links.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-4 text-sm font-bold uppercase tracking-widest text-[#111]/80 hover:bg-[#B8860B]/10 hover:text-[#B8860B]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}