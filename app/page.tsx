"use client";

import React, { useState } from "react";
import {
  CalendarDays,
  Car,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const RED = "#e50914";
const BLUE = "#3e9df2";
const NAVY = "#07152f";
const LOGO_SRC = "/driveway-detail-logo.jpg";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvyprep";

const services = [
  {
    name: "Interior Detail",
    price: "$95",
    description: "Deep clean of interior surfaces, seats, carpets, mats, and trim.",
    bullets: ["Deep vacuum", "Interior wipe down", "Seats, mats, and trim refreshed"],
  },
  {
    name: "Exterior Detail",
    price: "$70",
    description: "Hand wash, wheels, tires, exterior glass, and clean finish.",
    bullets: ["Hand wash", "Wheels and tires cleaned", "Exterior finish wiped down"],
  },
  {
    name: "Full Detail",
    price: "$180",
    description: "The best value package — complete interior and exterior refresh.",
    bullets: ["Interior detail", "Exterior detail", "Best value package"],
  },
];

export default function DrivewayDetailWebsite() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    week: "",
    time: "",
    address: "",
    notes: "",
  });

  function update(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function getWeeks() {
    const weeks = ["Select week"];
    const start = new Date(2026, 4, 18); // Monday 05/18/2026
    const end = new Date(2026, 7, 16); // Sunday 08/16/2026
    const current = new Date(start);

    const format = (date: Date) =>
      `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;

    while (current <= end) {
      const monday = new Date(current);
      const sunday = new Date(current);
      sunday.setDate(sunday.getDate() + 6);
      weeks.push(`Monday ${format(monday)} - Sunday ${format(sunday)}`);
      current.setDate(current.getDate() + 7);
    }

    return weeks;
  }

  return (
    <main className="min-h-screen bg-white text-slate-950" style={{ fontFamily: "Inter, Montserrat, system-ui, sans-serif" }}>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Driveway Detail home">
            <img src={LOGO_SRC} alt="Driveway Detail" className="h-16 w-auto object-contain md:h-20" />
          </a>

          <div className="hidden items-center gap-10 text-sm font-bold uppercase tracking-wide text-slate-800 md:flex">
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#why" className="hover:text-red-600">Why Us</a>
            <a href="#gallery" className="hover:text-red-600">Gallery</a>
            <a href="#booking" className="hover:text-red-600">Book</a>
          </div>

          <a href="#booking" className="rounded-lg px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5" style={{ backgroundColor: RED }}>
            Book Now
          </a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-blue-50 to-transparent md:block" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold" style={{ color: BLUE }}>
              <MapPin size={16} /> Mobile detailing serving the neighborhood
            </div>

            <h1 className="max-w-2xl text-6xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              <span style={{ color: RED }}>Clean Car.</span>
              <br />
              <span style={{ color: BLUE }}>No Hassle.</span>
            </h1>

            <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-700">
              Friendly, reliable mobile detailing that comes to you. Simple pricing, honest work, and a cleaner car without the hassle.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#booking" className="rounded-lg px-8 py-4 text-center font-black text-white shadow-lg transition hover:-translate-y-0.5" style={{ backgroundColor: RED }}>
                Book Now
              </a>
              <a href="sms:6304570168" className="rounded-lg border-2 border-slate-300 px-8 py-4 text-center font-black text-slate-900 transition hover:border-blue-400 hover:text-blue-600">
                Text Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-600">
              <TrustLine icon={CheckCircle2} text="We come to you" />
              <TrustLine icon={Sparkles} text="Quality products" />
              <TrustLine icon={ShieldCheck} text="Satisfaction guaranteed" />
            </div>
          </div>

          <div className="relative z-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
  <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
    <div className="flex justify-center">
      <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-blue-100 bg-blue-50 shadow-lg">
        <img
          src="/joe-mcgreal.png"
          alt="Joe McGreal"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>

    <div>
      <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: BLUE }}>
        About Me
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
        Hi, I’m Joe McGreal.
      </h2>

      <p className="mt-4 text-base font-semibold leading-7 text-slate-700">
        I’m a finance and accounting student at the University of Iowa, and I started Driveway Detail to offer reliable, high-quality detailing to my neighborhood and surrounding areas.
      </p>

      <p className="mt-4 text-base font-semibold leading-7 text-slate-700">
        If you’re looking for a clean car without the hassle, book a detail today!
      </p>

      <a
        href="#booking"
        className="mt-6 inline-flex rounded-lg px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5"
        style={{ backgroundColor: RED }}
      >
        Book a Detail
      </a>
    </div>
  </div>
</div>
        </div>
      </section>

      <section id="services" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Our Services" title="Simple services. Fair prices." />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                  <Car size={38} strokeWidth={1.8} style={{ color: BLUE }} />
                </div>
                <h3 className="mt-6 text-2xl font-black uppercase tracking-tight">{service.name}</h3>
                <p className="mt-3 min-h-[56px] text-sm font-semibold leading-6 text-slate-600">{service.description}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-500">Starting at</p>
                <p className="mt-1 text-4xl font-black" style={{ color: RED }}>{service.price}</p>
                <ul className="mt-6 space-y-2 text-left text-sm font-semibold text-slate-700">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <CheckCircle2 size={17} fill={BLUE} className="text-white" /> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-slate-50 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-center">
          <div>
            <SectionTitle eyebrow="Why Choose Us" title="Local, reliable, and easy." />
            <ul className="mt-8 space-y-4 text-base font-semibold text-slate-700">
              <li className="flex gap-3"><CheckCircle2 style={{ color: BLUE }} /> Local and reliable</li>
              <li className="flex gap-3"><CheckCircle2 style={{ color: BLUE }} /> Fully mobile — we come to you</li>
              <li className="flex gap-3"><CheckCircle2 style={{ color: BLUE }} /> Quality products and equipment</li>
              <li className="flex gap-3"><CheckCircle2 style={{ color: BLUE }} /> Attention to detail</li>
              <li className="flex gap-3"><CheckCircle2 style={{ color: BLUE }} /> Satisfaction guaranteed</li>
            </ul>
          </div>

          <div id="gallery" className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
            <p className="text-sm font-black uppercase tracking-wide" style={{ color: BLUE }}>See the difference</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50">
                    <Sparkles size={46} style={{ color: BLUE }} />
                  </div>
                  <div className="p-4 text-center text-sm font-black" style={{ backgroundColor: NAVY, color: "white" }}>{service.name}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-slate-500">Before-and-after photos will be added as appointments are completed.</p>
          </div>
        </div>
      </section>

      <section id="booking" className="bg-blue-50 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-[0.65fr_1.35fr] md:p-10">
          <div>
            <SectionTitle eyebrow="Booking" title="Book your detail." />
            <p className="mt-5 text-base font-semibold leading-7 text-slate-700">
              Fill out the form and we’ll get back to you to confirm your appointment.
            </p>
            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-black">Quick Notes</h3>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-slate-600">
                <li>• 12-hour cancellation notice requested.</li>
                <li>• Exterior details may move due to weather.</li>
                <li>• Final pricing can vary by size and condition.</li>
              </ul>
            </div>
          </div>

          <form action={FORMSPREE_ENDPOINT} method="POST" className="grid gap-4 md:grid-cols-3">
            <input type="hidden" name="_subject" value="New Driveway Detail Booking Request" />

            <Input name="name" placeholder="Full Name" value={form.name} onChange={(v) => update("name", v)} required />
            <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} required />
            <Input name="email" placeholder="Email Address" value={form.email} onChange={(v) => update("email", v)} />

            <Select name="service" value={form.service} onChange={(v) => update("service", v)} options={["Select Service", "Interior Detail", "Exterior Detail", "Full Detail"]} />
            <Select name="vehicle_type" value={form.vehicle} onChange={(v) => update("vehicle", v)} options={["Vehicle Type", "Sedan/Coupe", "SUV/Truck"]} />
            <Select name="preferred_week" value={form.week} onChange={(v) => update("week", v)} options={getWeeks()} />
            <Select name="preferred_time" value={form.time} onChange={(v) => update("time", v)} options={["Preferred Time", "Morning", "Afternoon", "Evening"]} />
            <Input name="address" placeholder="Address / Location" value={form.address} onChange={(v) => update("address", v)} className="md:col-span-2" />

            <textarea name="notes" value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Additional details about your vehicle or request" className="min-h-[110px] rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-300 focus:bg-white md:col-span-3" />

            <button type="submit" className="rounded-lg px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 md:col-span-3" style={{ backgroundColor: RED }}>
              Submit Booking <Send className="ml-2 inline" size={16} />
            </button>

            <p className="text-center text-sm font-semibold text-slate-500 md:col-span-3">
              Prefer to book faster? <a href="sms:6304570168" className="font-black" style={{ color: BLUE }}>Text us at 630-457-0168</a>
            </p>
          </form>
        </div>
      </section>

      <footer className="px-5 py-10 text-white md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <img src={LOGO_SRC} alt="Driveway Detail" className="h-20 w-auto object-contain" />
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Clean car. No hassle.</p>
          </div>
          <div className="grid gap-4 text-sm font-bold text-white/85 sm:grid-cols-3">
            <a href="tel:6304570168" className="flex items-center gap-2"><Phone size={17} /> 630-457-0168</a>
            <a href="mailto:intrdetail@gmail.com" className="flex items-center gap-2"><Mail size={17} /> intrdetail@gmail.com</a>
            <span className="flex items-center gap-2"><CalendarDays size={17} /> Mobile Service</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-black uppercase tracking-[0.22em]" style={{ color: BLUE }}>{eyebrow}</p>
      <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function TrustLine({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={17} />
      <span>{text}</span>
    </div>
  );
}

function Input({ name, placeholder, value, onChange, className = "", required = false }: { name: string; placeholder: string; value: string; onChange: (value: string) => void; className?: string; required?: boolean }) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      className={`rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-300 focus:bg-white ${className}`}
    />
  );
}

function Select({ name, value, onChange, options, className = "" }: { name: string; value: string; onChange: (value: string) => void; options: string[]; className?: string }) {
  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-300 focus:bg-white ${className}`}
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}
<h1>TEST UPDATE</h1>