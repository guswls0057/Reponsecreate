import { useState, useRef } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";

// ── Hero
import heroImg from "figma:asset/14d2fecdbf7653a9d71368c5d818864c90989c0a.png";

// ── Product images
import prodImg1 from "figma:asset/d48c75188f91a10887f98773d3d752241341e480.png";
import prodImg2 from "figma:asset/0a77e078790626b0639d2311697c86c3f1ce951c.png";
import prodImg3 from "figma:asset/8be7303e3d03e42c024291d2d6959464b16ebeb5.png";
import prodImg4 from "figma:asset/e2b28d6ce67eee985cddeb730ba79ffa5da05617.png";
import prodImg5 from "figma:asset/b0a2567907c8c8d7091d5b9de4459473aec92fec.png";
import prodImg6 from "figma:asset/624ed16cd90102d8031ea2894815f2386088b30c.png";
import prodImg7 from "figma:asset/3e96658ede831fbab15f7f3db491d020e7faee92.png";

// ── Oval section images
import stayLoopImg from "figma:asset/36b47627ddf86781977068338378851af2c24266.png";
import wePopImg from "figma:asset/2c2ceb69d25db10b7f171e6dd68ab036425f0738.png";
import zeroWasteImg from "figma:asset/fb7f0dec55ab393a772946f7ce8e6c75ace83a8a.png";

// ── Category section decorative food images
import foodImg1 from "figma:asset/6b7f8319b7ee8897319de1fa99b993d8ab3cae42.png";
import foodImg2 from "figma:asset/fa7efd3aee4e9589eb61778d11b2efe3ef4554ef.png";
import foodImg3 from "figma:asset/df75b3b11fb0303d7fa7bfcde64af3eee89d5485.png";
import foodImg4 from "figma:asset/c61320b46522fb615b5544b186afee09baa1d8cf.png";

// ── Instagram grid
import instaImg1 from "figma:asset/2a98710a24963c1f7ed7aa6413d24d09d3a9d1ad.png";
import instaImg2 from "figma:asset/616d8808e783bc2379d84bacfe69ee934b534414.png";
import instaImg3 from "figma:asset/46dc6740605efd9b33bdda5f9230b8103b3fed2d.png";
import instaImg4 from "figma:asset/5b39e6d91f4bf1a05466eebe125ee16dc0630a7a.png";

// ── Brand colours
const G = "#4f5d3d";   // green
const B = "#d9c5b2";   // beige
const L = "#f1f2eb";   // light
const GG = "#aeb4a6";  // grey-green
const DB = "#3e322e";  // dark brown
const CB = "#efede7";  // card bg

// ── Global animation
const MARQUEE_CSS = `
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
`;

/* ─────────────────────────── SHARED ATOMS ─────────────────────────── */

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: "3px 8px", borderRadius: 50, border: `1px solid ${G}`,
        backgroundColor: B, color: G,
        fontFamily: "'Noto Sans KR', sans-serif", fontSize: 13, fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function PillButton({ label }: { label: string }) {
  return (
    <button
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: "0 20px", height: 40, borderRadius: 50,
        border: `1px solid ${G}`, backgroundColor: B, color: G,
        fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, fontWeight: 700,
        cursor: "pointer", whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

/* ─────────────────────────── 1. NAVBAR ─────────────────────────── */

function Navbar() {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3"
    >
      <span style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 700, color: DB, fontSize: 16, letterSpacing: "-0.05em" }}>
        Menu
      </span>
      <div className="flex items-center gap-3">
        <Search size={20} color={DB} strokeWidth={1.5} />
        <button style={{ padding: "6px 16px", borderRadius: 50, backgroundColor: G, color: B, fontFamily: "'Noto Sans KR', sans-serif", fontSize: 14, fontWeight: 500, border: "none", cursor: "pointer" }}>
          Order
        </button>
      </div>
    </header>
  );
}

/* ─────────────────────────── 2. HERO ─────────────────────────── */

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(380px, 50vw, 754px)" }}>
      <img src={heroImg} alt="re_ hero" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
      <Navbar />

      {/* Desktop: "re_" large logotype */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden lg:flex items-end"
        style={{ gap: "clamp(4px, 0.5vw, 16px)", paddingBottom: 0, width: "min(64vw, 963px)" }}
      >
        <span
          style={{
            fontFamily: "'Noto Serif KR', serif", fontWeight: 600,
            color: G, fontSize: "clamp(160px, 14vw, 520px)",
            letterSpacing: "-0.05em", lineHeight: 1,
          }}
        >
          re
        </span>
        <div style={{ backgroundColor: G, width: "clamp(90px, 6vw, 260px)", height: "clamp(14px, 1.2vw, 42px)", marginBottom: "clamp(18px, 1.8vw, 52px)" }} />
      </div>

      {/* Tablet: smaller "re_" */}
      <div className="absolute bottom-6 left-6 hidden md:flex lg:hidden items-end gap-1">
        <span style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 600, color: G, fontSize: 200, letterSpacing: "-0.05em", lineHeight: 1 }}>re</span>
        <div style={{ backgroundColor: G, width: 100, height: 18, marginBottom: 24 }} />
      </div>
    </section>
  );
}

/* ─────────────────────────── 3. PRODUCT CAROUSEL ─────────────────────────── */

const TABS = ["Staples", "New Arrivals", "Bestsellers"] as const;

interface Product { img: string; name: string; price: string; tags: string[]; }

const ALL_PRODUCTS: Record<string, Product[]> = {
  "New Arrivals": [
    { img: prodImg1, name: "Brixy Shampoo Bar",              price: "$16.00",        tags: ["Organic", "Vegan", "Non-GMO"] },
    { img: prodImg2, name: "Almond Clusters, Dark Chocolate",price: "$2.75–27.04",   tags: ["Organic", "Non-GMO", "Sulfate-free"] },
    { img: prodImg3, name: "Sprinkles, Rainbow",             price: "$4.50–32.80",   tags: ["Organic", "Vegan", "Non-GMO"] },
    { img: prodImg4, name: "Brixy Deodorant",                price: "$16.00",        tags: ["Organic", "Vegan", "paraben-free"] },
    { img: prodImg5, name: "Cashews, Raw",                   price: "$1.55–17.95",   tags: ["Organic", "Vegan", "Non-GMO"] },
    { img: prodImg6, name: "Penne, Semolina",                price: "$0.99–7.21",    tags: ["Organic", "Non-GMO"] },
    { img: prodImg7, name: "Almond Butter, Raw, Jar",        price: "$22.00",        tags: ["Organic", "Vegan"] },
  ],
  "Staples": [
    { img: prodImg5, name: "Cashews, Raw",           price: "$1.55–17.95", tags: ["Organic", "Vegan", "Non-GMO"] },
    { img: prodImg6, name: "Penne, Semolina",        price: "$0.99–7.21",  tags: ["Organic", "Non-GMO"] },
    { img: prodImg7, name: "Almond Butter, Raw, Jar",price: "$22.00",      tags: ["Organic", "Vegan"] },
    { img: prodImg1, name: "Brixy Shampoo Bar",      price: "$16.00",      tags: ["Organic", "Vegan", "Non-GMO"] },
  ],
  "Bestsellers": [
    { img: prodImg3, name: "Sprinkles, Rainbow",              price: "$4.50–32.80", tags: ["Organic", "Vegan", "Non-GMO"] },
    { img: prodImg4, name: "Brixy Deodorant",                 price: "$16.00",      tags: ["Organic", "Vegan", "paraben-free"] },
    { img: prodImg2, name: "Almond Clusters, Dark Chocolate", price: "$2.75–27.04", tags: ["Organic", "Non-GMO"] },
  ],
};

function ProductSection() {
  const [activeTab, setActiveTab] = useState<string>("New Arrivals");
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = ALL_PRODUCTS[activeTab] ?? [];

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === "right" ? w : -w, behavior: "smooth" });
  };

  return (
    <section className="w-full flex flex-col" style={{ gap: "clamp(12px, 2vw, 32px)" }}>
      {/* ── Tabs */}
      <div
        className="flex items-center overflow-x-auto"
        style={{ gap: "clamp(10px, 2vw, 30px)", padding: "0 clamp(16px, 4vw, 60px)", scrollbarWidth: "none" }}
      >
        {TABS.map((tab) => {
          const active = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontWeight: 700,
                color: active ? G : GG,
                fontSize: "clamp(20px, 3.2vw, 48px)",
                letterSpacing: "-0.05em",
                whiteSpace: "nowrap",
                background: "none", border: "none", cursor: "pointer", padding: 0,
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* ── Carousel */}
      <div className="relative">
        {/* Prev */}
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 flex items-center justify-center rounded-full shadow"
          style={{ left: 4, top: "35%", transform: "translateY(-50%)", width: 38, height: 38, backgroundColor: B, border: `1px solid ${G}`, cursor: "pointer" }}
        >
          <ChevronLeft size={18} color={G} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto"
          style={{
            gap: "clamp(6px, 1vw, 16px)",
            padding: "0 clamp(16px, 4vw, 60px) 16px",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          {products.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col"
              style={{ scrollSnapAlign: "start", gap: "clamp(4px, 0.5vw, 8px)", width: "clamp(180px, 26vw, 370px)" }}
            >
              <div
                className="relative overflow-hidden"
                style={{ backgroundColor: CB, height: "clamp(200px, 30vw, 444px)", width: "100%" }}
              >
                <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "clamp(12px, 1vw, 16px)", color: G }}>{p.name}</p>
              <p style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "clamp(12px, 1vw, 16px)", color: G }}>{p.price}</p>
              <div className="flex flex-wrap" style={{ gap: 4 }}>
                {p.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          ))}

          {/* Shop All circle */}
          <div
            className="flex-shrink-0 flex items-center justify-center self-center"
            style={{ scrollSnapAlign: "start", width: "clamp(130px, 18vw, 280px)" }}
          >
            <div
              className="flex items-center justify-center"
              style={{ width: "clamp(120px, 16vw, 260px)", height: "clamp(120px, 16vw, 260px)", borderRadius: "50%", border: `2px solid ${G}` }}
            >
              <p className="text-center" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "clamp(11px, 1vw, 18px)", color: G }}>
                Shop All<br />{activeTab}
              </p>
            </div>
          </div>
        </div>

        {/* Next */}
        <button
          onClick={() => scroll("right")}
          className="absolute z-10 flex items-center justify-center rounded-full shadow"
          style={{ right: 4, top: "35%", transform: "translateY(-50%)", width: 38, height: 38, backgroundColor: B, border: `1px solid ${G}`, cursor: "pointer" }}
        >
          <ChevronRight size={18} color={G} />
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────── 4. SCROLLING BANNER ─────────────────────────── */

function ScrollingBanner() {
  const chunk = "rethink   reuse   refill   ";
  const text = chunk.repeat(8);
  return (
    <div className="w-full overflow-hidden relative" style={{ backgroundColor: B, height: "clamp(56px, 8vw, 149px)" }}>
      <style>{MARQUEE_CSS}</style>
      <div
        className="absolute inset-0 flex items-center whitespace-nowrap"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        <span
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            color: G,
            fontSize: "clamp(28px, 5.5vw, 100px)",
            letterSpacing: "-0.01em",
          }}
        >
          {text + text}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────── 5. CONTENT CARDS ─────────────────────────── */

interface ContentCardProps {
  title: string;
  body: string;
  btnLabel: string;
  imgSrc: string;
  /** On desktop: photo appears on the LEFT side */
  photoLeft?: boolean;
}

function ContentCard({ title, body, btnLabel, imgSrc, photoLeft = false }: ContentCardProps) {
  const oval = (
    <div
      className="shrink-0 overflow-hidden bg-white"
      style={{
        borderRadius: "50%",
        width: "clamp(220px, 35vw, 484px)",
        height: "clamp(320px, 50vw, 726px)",
      }}
    >
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
  );

  const text = (
    <div
      className="flex flex-col items-center lg:items-start text-center lg:text-left"
      style={{ gap: "clamp(12px, 1.5vw, 24px)", maxWidth: 587 }}
    >
      <h2
        style={{
          fontFamily: "'Noto Serif KR', serif", fontWeight: 700, color: G,
          fontSize: "clamp(28px, 4vw, 50px)", letterSpacing: "-0.05em", lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500, color: G,
          fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: 1.35, maxWidth: 323,
        }}
      >
        {body}
      </p>
      <PillButton label={btnLabel} />
    </div>
  );

  // Mobile: oval always on top (DOM order: oval first, text second)
  // Desktop: photoLeft=true → oval LEFT (DOM order natural), photoLeft=false → text LEFT, oval RIGHT (swap via order)
  return (
    <section
      className="w-full flex flex-col items-center lg:flex-row lg:justify-center"
      style={{
        gap: "clamp(24px, 4vw, 80px)",
        padding: "clamp(24px, 4vw, 72px) clamp(16px, 4vw, 80px)",
      }}
    >
      <div className={!photoLeft ? "lg:order-2" : ""}>{oval}</div>
      <div className={!photoLeft ? "lg:order-1" : ""}>{text}</div>
    </section>
  );
}

/* ─────────────────────────── 6. CATEGORY SECTION ─────────────────────────── */

const CATEGORIES = [
  { icon: "🍫", label: "Snacks" },
  { icon: "🧴", label: "Bath & Body" },
  { icon: "🏠", label: "Household" },
  { icon: "♻️", label: "Reusables" },
  { icon: "🫙", label: "Oils, Vinegars & Honey" },
  { icon: "🌰", label: "Nuts & Seeds" },
  { icon: "☕", label: "Coffee & Tea" },
  { icon: "🌿", label: "Superfoods" },
];

function CategorySection() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: B, minHeight: "clamp(420px, 55vw, 708px)" }}
    >
      {/* Floating decorative food images */}
      <img src={foodImg4} alt="" aria-hidden className="absolute pointer-events-none object-contain"
        style={{ width: "clamp(18px, 2.5vw, 55px)", top: "8%", left: "28%", zIndex: 0 }} />
      <img src={foodImg3} alt="" aria-hidden className="absolute pointer-events-none object-contain"
        style={{ width: "clamp(35px, 5.5vw, 102px)", top: "30%", left: "44%", zIndex: 0 }} />
      <img src={foodImg1} alt="" aria-hidden className="absolute pointer-events-none object-contain"
        style={{ width: "clamp(35px, 5.5vw, 101px)", bottom: "14%", right: "20%", zIndex: 0 }} />
      <img src={foodImg2} alt="" aria-hidden className="absolute pointer-events-none object-contain"
        style={{ width: "clamp(45px, 8vw, 183px)", top: "28%", left: "14%", zIndex: 0, opacity: 0.8 }} />

      {/* Circular "la" decoration */}
      <div className="absolute" style={{ top: "9%", right: "20%", zIndex: 0 }}>
        <svg viewBox="0 0 60 60" fill="none" style={{ width: "clamp(28px, 3.5vw, 60px)", height: "clamp(28px, 3.5vw, 60px)" }}>
          <circle cx="30" cy="30" r="29" stroke={G} strokeWidth="2" />
          <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle"
            fill={G} fontSize="16" fontFamily="'Noto Serif KR', serif" fontWeight="600">la</text>
        </svg>
      </div>

      {/* Category list */}
      <div className="relative z-10 flex flex-col items-center" style={{ gap: "clamp(2px, 0.4vw, 6px)" }}>
        {CATEGORIES.map(({ icon, label }) => (
          <p
            key={label}
            style={{
              fontFamily: "'Noto Serif KR', serif", fontWeight: 700, color: G,
              fontSize: "clamp(22px, 3.2vw, 40px)", letterSpacing: "-0.1em", lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {icon} {label}
          </p>
        ))}
        <div style={{ marginTop: "clamp(12px, 2vw, 32px)" }}>
          <PillButton label="More +" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── 7. ORDER SECTION ─────────────────────────── */

function OrderSection() {
  const size = "clamp(180px, 26vw, 380px)";
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center"
      style={{ gap: "clamp(24px, 5vw, 62px)", padding: "clamp(32px, 5vw, 80px) clamp(16px, 4vw, 60px)" }}
    >
      {/* Pickup – square */}
      <div
        className="flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
        style={{ border: `2px solid ${G}`, width: size, height: size }}
      >
        <p style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "clamp(15px, 1.5vw, 24px)", color: G }}>Order Pickup</p>
      </div>

      {/* Delivery – circle */}
      <div
        className="flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
        style={{ border: `2px solid ${G}`, borderRadius: "50%", width: size, height: size }}
      >
        <p className="text-center" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "clamp(15px, 1.5vw, 24px)", color: G }}>
          Order<br />Delivery
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── 8. INSTAGRAM SECTION ─────────────────────────── */

function InstagramSection() {
  const images = [instaImg1, instaImg2, instaImg3, instaImg4];
  return (
    <section className="w-full flex flex-col items-center" style={{ gap: "clamp(12px, 2vw, 24px)", paddingTop: "clamp(32px, 5vw, 68px)" }}>
      <div className="flex flex-wrap items-center justify-center" style={{ gap: "clamp(8px, 1.5vw, 14px)", padding: "0 16px" }}>
        <p style={{ fontFamily: "'Noto Sans KR', sans-serif", fontSize: "clamp(14px, 1.5vw, 24px)", color: G, whiteSpace: "nowrap" }}>
          Follow us on Instagram
        </p>
        <button
          style={{
            padding: "0 16px", height: "clamp(32px, 3.5vw, 50px)", borderRadius: 50,
            backgroundColor: B, border: `1px solid ${G}`,
            fontFamily: "Arial, sans-serif", fontSize: "clamp(13px, 1.2vw, 20px)", color: G,
            cursor: "pointer", whiteSpace: "nowrap",
          }}
        >
          @re_grocery
        </button>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 overflow-hidden">
        {images.map((src, i) => (
          <div key={i} style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
            <img src={src} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── 9. FOOTER ─────────────────────────── */

const footerCols = [
  ["Our Ethos", "FAQs", "Glossary", "Press", "Careers", "E-Gift Cards"],
  ["Blog: The Scoop", "PopUp Shop", "Snack Rack", "Instagram", "TikTok", "Facebook"],
  ["club / re_", "Account", "Locations", "Returns", "Privacy", "Terms"],
];

const ABOUT_TEXT = "re_ makes it easier and more affordable to shop sustainably. To do better than recycling. To say no to plastic altogether. Thanks to you, we've diverted over 500,000 items of packaging from landfill since opening on Earth Day 2020.";

function Footer() {
  return (
    <footer className="w-full overflow-hidden" style={{ backgroundColor: G }}>
      {/* ── Desktop layout: two columns */}
      <div className="hidden lg:grid" style={{ gridTemplateColumns: "420px 1fr" }}>
        {/* Left column */}
        <div className="flex flex-col px-7 py-8" style={{ gap: 48 }}>
          <p style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 600, color: L, fontSize: "clamp(80px, 9vw, 160px)", letterSpacing: "-0.05em", lineHeight: 1 }}>
            re_
          </p>
          {/* Newsletter */}
          <div className="flex flex-col" style={{ gap: 16 }}>
            <p style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500, color: L, fontSize: 26, letterSpacing: "-0.05em" }}>
              Let's Keep in Touch
            </p>
            <p style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500, color: L, fontSize: 16, letterSpacing: "-0.03em" }}>
              Sign-up for 10% off your first online order
            </p>
            <div className="flex items-center justify-between px-5 h-[33px]" style={{ backgroundColor: L, maxWidth: 392 }}>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: GG }}>Email</span>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: G }}>Subscribe</span>
            </div>
          </div>
          {/* Copyright */}
          <p style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400, color: L, fontSize: 12, letterSpacing: "-0.03em" }}>
            © 2026 re grocery inc. All rights reserved
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col px-8 py-8" style={{ gap: 48 }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: L, fontSize: "clamp(15px, 1.5vw, 22px)", lineHeight: 1.35, maxWidth: 570 }}>
            {ABOUT_TEXT}
          </p>
          <div className="flex" style={{ gap: "clamp(40px, 6vw, 110px)" }}>
            {footerCols.map((col, ci) => (
              <ul key={ci} className="flex flex-col" style={{ gap: "clamp(6px, 0.6vw, 10px)", listStyle: "none", padding: 0, margin: 0 }}>
                {col.map((link) => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400, color: L, fontSize: 14, textDecoration: "none" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile / Tablet layout: single column */}
      <div className="lg:hidden flex flex-col px-7 py-8" style={{ gap: 40 }}>
        <p style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 600, color: L, fontSize: "clamp(56px, 14vw, 96px)", letterSpacing: "-0.05em", lineHeight: 1 }}>
          re_
        </p>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, color: L, fontSize: "clamp(13px, 1.8vw, 16px)", lineHeight: 1.35 }}>
          {ABOUT_TEXT}
        </p>

        {/* Newsletter */}
        <div className="flex flex-col" style={{ gap: 12 }}>
          <p style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500, color: L, fontSize: "clamp(18px, 3.5vw, 26px)", letterSpacing: "-0.05em" }}>
            Let's Keep in Touch
          </p>
          <p style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500, color: L, fontSize: "clamp(13px, 2vw, 16px)", letterSpacing: "-0.03em" }}>
            Sign-up for 10% off your first online order
          </p>
          <div className="flex items-center justify-between px-4" style={{ height: 33, backgroundColor: L, maxWidth: 370 }}>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: GG }}>Email</span>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: G }}>Subscribe</span>
          </div>
        </div>

        {/* Link columns */}
        <div className="flex" style={{ gap: "clamp(24px, 6vw, 49px)" }}>
          {footerCols.map((col, ci) => (
            <ul key={ci} className="flex flex-col" style={{ gap: "clamp(14px, 3vw, 24px)", listStyle: "none", padding: 0, margin: 0 }}>
              {col.map((link) => (
                <li key={link}>
                  <a href="#" style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400, color: L, fontSize: "clamp(11px, 1.5vw, 13px)", textDecoration: "none" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 400, color: L, fontSize: 12, letterSpacing: "-0.03em" }}>
          © 2026 re grocery inc. All rights reserved
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────── ROOT ─────────────────────────── */

export default function App() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: B }}>
      <HeroSection />
      <div style={{ paddingTop: "clamp(20px, 3vw, 48px)", paddingBottom: "clamp(20px, 3vw, 48px)" }}>
        <ProductSection />
      </div>
      <ScrollingBanner />
      <ContentCard
        title="Stay in the Loop"
        body="From sustainable lifestyle guides to zero-waste recipes, we're sharing it all on the blog."
        btnLabel="The Scoop"
        imgSrc={stayLoopImg}
        photoLeft={false}
      />
      <ContentCard
        title="We Pop Up!"
        body="Party at your place? Hosting an event? Book our popup shop to give your guests a sustainable experience."
        btnLabel="PopUp Shop"
        imgSrc={wePopImg}
        photoLeft={true}
      />
      <ContentCard
        title="Zero-Waste Breakroom"
        body="Achieve your corporate sustainability goals by switching to package-free office snacks!"
        btnLabel="Snack Rack"
        imgSrc={zeroWasteImg}
        photoLeft={false}
      />
      <CategorySection />
      <OrderSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}