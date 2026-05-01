"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AtSign,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock3,
  Droplets,
  Gem,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const NAVY = "#04112c";
const BLUE = "#3e9df2";
const SOFT_BLUE = "#6ba4d8";
const ICON_STROKE = 1.85;

const services = [
  {
    name: "Interior Detail",
    price: "$95",
    time: "1.5–2.5 hrs",
    icon: Sparkles,
    bullets: ["Deep vacuum", "Interior surfaces cleaned", "Seats, mats, and trim refreshed"],
  },
  {
    name: "Exterior Detail",
    price: "$70",
    time: "45–75 min",
    icon: Car,
    bullets: ["Hand wash", "Wheels and tires cleaned", "Exterior surfaces finished"],
  },
  {
    name: "Full Detail",
    price: "$180",
    time: "2.5–3.5 hrs",
    icon: Droplets,
    bullets: ["Full interior detail", "Full exterior detail", "Complete service package"],
    featured: true,
  },
];

const conditionLevels = [
  {
    title: "Light",
    price: "Base price",
    icon: Sparkles,
    text: "Well-maintained vehicles with minimal buildup.",
  },
  {
    title: "Moderate",
    price: "+$20",
    icon: Droplets,
    text: "Normal debris, light stains, and buildup.",
  },
  {
    title: "Heavy",
    price: "+$20–$50",
    icon: Droplets,
    text: "Heavy staining, spills, pet hair, or excessive buildup.",
  },
];

const gallery = [
  { title: "Interior Detail", src: "/gallery-interior.jpg", icon: Sparkles },
  { title: "Exterior Detail", src: "/gallery-exterior.jpg", icon: Car },
  { title: "Full Detail", src: "/gallery-full.jpg", icon: Droplets },
];

export default function INTRWebsite() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent("INTR Service Request");
    const body = encodeURIComponent(
      `New service request:

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}
Vehicle Type: ${form.vehicle}
Preferred Date: ${form.date}
Preferred Time: ${form.time}
Address / Location: ${form.address}
Notes: ${form.notes}`
    );
    return `mailto:intrdetail@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  function update(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <main className="min-h-screen bg-white text-slate-950" style={{ fontFamily: "Montserrat, Inter, system-ui, sans-serif" }}>
      <section id="top" className="relative overflow-hidden text-white" style={{ background: `radial-gradient(circle at 18% 10%, rgba(62,157,242,.22), transparent 28%), linear-gradient(135deg, #020814 0%, ${NAVY} 55%, #06203f 100%)` }}>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-7 md:px-8">
          <a href="#top" aria-label="INTR Auto Detail home" className="block">
<Logo variant="white" className="h-28 w-80 md:h-32 md:w-[380px]" />          </a>

          <div className="hidden items-center gap-12 text-sm font-semibold text-white/90 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#gallery" className="transition hover:text-white">Gallery</a>
            <a href="#booking" className="transition hover:text-white">Book</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a href="#booking" className="rounded-xl px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(62,157,242,.28)] transition hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${BLUE}, ${SOFT_BLUE})` }}>
            Book Now
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-8 pt-10 md:grid-cols-[1fr_1.03fr] md:px-8 md:pb-8 md:pt-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold backdrop-blur" style={{ borderColor: "rgba(62,157,242,.72)", color: SOFT_BLUE, backgroundColor: "rgba(62,157,242,.08)" }}>
              <MapPin size={15} strokeWidth={ICON_STROKE} /> Mobile Auto Detail • Chicagoland, IL
            </div>

            <h1 className="max-w-xl text-6xl font-black leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-[5.5rem]">
              Clean.<br />Restore.<br />Renew.
            </h1>

            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-white/78">
              Premium mobile detailing designed to deliver a cleaner, sharper, more refined vehicle — at your location.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#booking" className="rounded-2xl px-9 py-4 text-center text-base font-bold text-white shadow-[0_14px_34px_rgba(62,157,242,.28)] transition hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${BLUE}, ${SOFT_BLUE})` }}>
                Book Now
              </a>
              <a href="#services" className="rounded-2xl border border-white/25 bg-white/5 px-9 py-4 text-center text-base font-bold text-white backdrop-blur transition hover:bg-white/10">
                View Services
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-white/82">
              <HeroTrust icon={ShieldCheck} text="Satisfaction Guarantee" />
              <HeroTrust icon={Clock3} text="Professional Results" />
              <HeroTrust icon={Car} text="100% Mobile Service" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.08 }}>
            <div className="rounded-[1.8rem] border border-white/12 bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,.34)] backdrop-blur-md md:p-10">
              <p className="mb-7 text-base font-extrabold" style={{ color: BLUE }}>Our Services</p>
              <div className="space-y-0">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.name} className={`grid grid-cols-[64px_1fr_auto] items-center gap-5 py-6 ${index !== services.length - 1 ? "border-b border-white/10" : ""}`}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border" style={{ borderColor: "rgba(62,157,242,.35)", backgroundColor: "rgba(62,157,242,.08)", color: BLUE }}>
                        <Icon size={31} strokeWidth={ICON_STROKE} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold tracking-tight">{service.name}</h3>
                        <p className="mt-1 text-lg font-extrabold" style={{ color: BLUE }}>Starting at {service.price}</p>
                      </div>
                      <p className="whitespace-nowrap text-lg font-bold text-white/88">{service.time}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">Simple services. Premium results.</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className={`relative flex min-h-[315px] flex-col rounded-2xl border bg-white p-7 shadow-[0_8px_24px_rgba(2,8,20,.06)] ${service.featured ? "border-blue-300 ring-1 ring-blue-200" : "border-slate-200"}`}>
                  {service.featured && <span className="absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-black uppercase text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, ${SOFT_BLUE})` }}>Best Value</span>}

                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full shadow-[0_10px_24px_rgba(4,17,44,.16)]" style={{ backgroundColor: NAVY, color: BLUE }}>
                      <Icon size={31} strokeWidth={ICON_STROKE} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tight">{service.name}</h3>
                      <p className="mt-1 text-lg font-extrabold" style={{ color: BLUE }}>Starting at {service.price}</p>
                      <p className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-600"><Clock3 size={16} strokeWidth={ICON_STROKE} /> {service.time}</p>
                    </div>
                  </div>

                  <div className="my-7 h-px bg-slate-200" />

                  <ul className="mt-auto space-y-3 text-[15px] font-semibold text-slate-700">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 size={18} fill={BLUE} strokeWidth={2.1} className="text-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Condition-Based Pricing</SectionLabel>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {conditionLevels.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_24px_rgba(2,8,20,.05)]">
                  <div className="flex items-start gap-5">
                    <Icon size={32} strokeWidth={ICON_STROKE} style={{ color: BLUE }} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                        <span className="rounded-full border px-3 py-1 text-sm font-bold" style={{ borderColor: "rgba(62,157,242,.45)", color: BLUE }}>{item.price}</span>
                      </div>
                      <p className="mt-4 text-base font-semibold leading-7 text-slate-700">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <SectionLabel>Recent Work</SectionLabel>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] md:text-5xl">Recent Work</h2>
              <p className="mt-2 text-base font-semibold text-slate-600">Before-and-after results from recent details.</p>
            </div>
            <a href="#booking" className="hidden rounded-xl border px-7 py-3 text-sm font-extrabold md:block" style={{ borderColor: SOFT_BLUE, color: BLUE }}>View Gallery</a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <GalleryCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 text-white md:px-8" style={{ background: `linear-gradient(135deg, #020814 0%, ${NAVY} 70%, #06203f 100%)` }}>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <TrustCard icon={ShieldCheck} title="Satisfaction Guarantee" text="Every service is completed with care, precision, and a focus on a refined finish." />
          <TrustCard icon={MapPin} title="100% Mobile Service" text="We come to you anywhere in Chicagoland. Water and power access may be required." />
          <TrustCard icon={CalendarDays} title="Flexible Scheduling" text="Exterior appointments may be adjusted due to weather conditions." />
        </div>
      </section>

      <section id="booking" className="grid border-y border-slate-200 bg-white md:grid-cols-[0.82fr_1.18fr]">
        <div className="px-5 py-14 md:px-20 md:py-16">
          <SectionLabel>Booking</SectionLabel>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">Request Your Detail</h2>
          <p className="mt-5 max-w-md text-base font-semibold leading-7 text-slate-700">
            Submit your preferred service, vehicle details, and availability. We'll follow up to confirm your appointment.
          </p>

          <div className="mt-9 max-w-md rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="font-extrabold">Quick Policies</h3>
            <ul className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-700">
              <li>• 12-hour cancellation notice required.</li>
              <li>• Late cancellations may be subject to a $20 fee.</li>
              <li>• Scheduled details can be moved subject to weather.</li>
            </ul>
          </div>
        </div>

        <form className="border-t border-slate-200 px-5 py-10 md:border-l md:border-t-0 md:px-10 md:py-12" onSubmit={(event) => { event.preventDefault(); window.location.href = mailtoLink; }}>
          <div className="grid gap-5 md:grid-cols-2">
            <Input label="Name" placeholder="Full name" value={form.name} onChange={(v) => update("name", v)} />
            <Input label="Phone" placeholder="Phone number" value={form.phone} onChange={(v) => update("phone", v)} />
            <Input label="Email" placeholder="Email address" value={form.email} onChange={(v) => update("email", v)} />
            <Select label="Service" value={form.service} onChange={(v) => update("service", v)} options={["Select a service", "Interior Detail", "Exterior Detail", "Full Detail"]} />
            <Select label="Vehicle Type" value={form.vehicle} onChange={(v) => update("vehicle", v)} options={["Select type", "Sedan/Coupe", "SUV/Truck"]} />
            <Input label="Preferred Date" type="date" value={form.date} onChange={(v) => update("date", v)} />
           <div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Preferred Time
  </label>
  <select
    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select time</option>
    <option value="morning">Morning</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
  </select>
</div>
          </div>

          <Input label="Address / Location" placeholder="Street address or location" value={form.address} onChange={(v) => update("address", v)} className="mt-5" />

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-slate-700">Notes (optional)</span>
            <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={3} placeholder="Additional details about your vehicle or request" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-blue-300 focus:bg-white" />
          </label>

          <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${BLUE}, ${SOFT_BLUE})` }}>
            Send Request <Send size={16} strokeWidth={ICON_STROKE} />
          </button>
        </form>
      </section>

      <footer id="contact" className="px-5 py-8 text-white md:px-8" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
<Logo variant="white" className="h-28 w-80" />              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/55">Clean. Restore. Renew.</p>
            </div>

            <div className="grid gap-5 text-sm font-bold text-white/82 sm:grid-cols-2 lg:grid-cols-4">
              <FooterLink href="tel:6304570168" icon={Phone} label="630-457-0168" />
              <FooterLink href="mailto:intrdetail@gmail.com" icon={Mail} label="intrdetail@gmail.com" />
              <FooterLink href="https://www.intrdetail.com" icon={Globe} label="www.intrdetail.com" />
              <FooterLink href="https://instagram.com/intrdetail" icon={AtSign} label="@intrdetail" />
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs font-semibold text-white/45">
            © 2024 INTR Auto Detail. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function Logo({ variant, className = "" }: { variant: "white" | "blue"; className?: string }) {
  const [failed, setFailed] = useState(false);
  const src = variant === "white" ? "/intr-logo-white.png" : "/intr-logo-blue.png";
  const textColor = variant === "white" ? "text-white" : "text-slate-950";
  const accentColor = variant === "white" ? "text-blue-300" : "text-blue-500";

  if (failed) {
    return (
      <div className={`flex flex-col justify-center ${className}`}>
        <div className={`text-4xl font-black tracking-[0.32em] ${textColor}`}>INTR</div>
        <div className={`mt-1 text-xs font-black uppercase tracking-[0.32em] ${accentColor}`}>Auto Detail</div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <img src={src} alt="INTR Auto Detail" onError={() => setFailed(true)} className="h-full w-full object-contain object-left" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-black uppercase tracking-[0.22em]" style={{ color: SOFT_BLUE }}>{children}</p>;
}

function HeroTrust({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={17} strokeWidth={ICON_STROKE} />
      <span>{text}</span>
    </div>
  );
}

function TrustCard({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
  return (
    <div className="flex gap-6 border-white/10 md:border-r md:pr-8 last:border-r-0">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border" style={{ borderColor: "rgba(62,157,242,.45)", backgroundColor: "rgba(62,157,242,.12)", color: BLUE }}>
        <Icon size={38} strokeWidth={ICON_STROKE} />
      </div>
      <div>
        <h3 className="text-lg font-black tracking-tight">{title}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-white/75">{text}</p>
      </div>
    </div>
  );
}

function GalleryCard({ title, src, icon: Icon }: { title: string; src: string; icon: React.ElementType }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(2,8,20,.08)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {!failed ? (
          <img src={src} alt={title} onError={() => setFailed(true)} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300">
            <Icon size={48} strokeWidth={ICON_STROKE} style={{ color: BLUE }} />
          </div>
        )}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/80" />
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/80 text-slate-800 shadow-lg">
          <Gem size={16} strokeWidth={ICON_STROKE} />
        </div>
      </div>
      <div className="py-4 text-center text-base font-black text-white" style={{ backgroundColor: NAVY }}>{title}</div>
    </div>
  );
}

function FooterLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a className="flex items-center gap-3 transition hover:text-white" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <Icon size={21} strokeWidth={ICON_STROKE} />
      <span>{label}</span>
    </a>
  );
}

function Input({ label, value, onChange, type = "text", placeholder = "", className = "" }: { label: string; value: string; onChange: (value: string) => void; type?: string; placeholder?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-blue-300 focus:bg-white" />
    </label>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium outline-none transition focus:border-blue-300 focus:bg-white">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
