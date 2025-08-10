import Link from "next/link";
import about from "@/content/about.json";
import reviews from "@/content/reviews.json";
import SectionTitle from "@/components/SectionTitle";

export default function Home(){
  return (
    <>
      <section className="relative rounded-2xl overflow-hidden mb-8">
        <div className="h-64 sm:h-96 bg-[url('/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="container flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold">World&apos;s End Bar</h1>
            <Link href="#reserve" className="btn btn-primary w-fit">Reserve</Link>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <SectionTitle>About Us</SectionTitle>
          <p className="opacity-90 whitespace-pre-line">{about.short_en}</p>
          <p className="opacity-80 mt-3 whitespace-pre-line">{about.long_en}</p>
          <div className="mt-4 flex gap-3">
            <Link className="btn btn-ghost" href="/about">More</Link>
            <Link className="btn btn-primary" href="/menu">See Menu</Link>
          </div>
        </div>
        <div className="card">
          <SectionTitle>What our guests say</SectionTitle>
          <div className="space-y-4">
            {reviews.map((r, i)=>(
              <div key={i} className="p-3 rounded-xl bg-white/5">
                <div>{"⭐".repeat(r.rating)}</div>
                <div className="mt-1">{r.text}</div>
                <div className="mt-1 text-sm opacity-75">— {r.author}, {r.date}</div>
                <a className="text-brand-yellow underline text-sm" href={r.url} target="_blank">Read more on Google Maps</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="card mt-8">
        <SectionTitle>Reserve a table</SectionTitle>
        <form action="https://formsubmit.co/kalamers1995@gmail.com" method="POST" className="grid sm:grid-cols-2 gap-4">
          <input type="hidden" name="_subject" value="Reservation request from World’s End Bar website" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://example.com/thanks" />
          <label className="flex flex-col gap-1">
            <span className="opacity-90">Name</span>
            <input required name="name" className="rounded-2xl px-3 py-2 text-black" placeholder="Your name" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-90">Email</span>
            <input required type="email" name="email" className="rounded-2xl px-3 py-2 text-black" placeholder="you@mail.com" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-90">Date</span>
            <input required type="date" name="date" className="rounded-2xl px-3 py-2 text-black" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-90">Time</span>
            <input required type="time" name="time" className="rounded-2xl px-3 py-2 text-black" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="opacity-90">Guests</span>
            <input required type="number" name="guests" min="1" className="rounded-2xl px-3 py-2 text-black" placeholder="2" />
          </label>
          <label className="flex flex-col gap-1 sm:col-span-2">
            <span className="opacity-90">Message</span>
            <textarea name="message" rows={3} className="rounded-2xl px-3 py-2 text-black" placeholder="Anything else?"></textarea>
          </label>
          <button className="btn btn-primary w-full sm:w-auto">Send</button>
        </form>
        <p className="text-sm opacity-70 mt-2">After you submit, we’ll email you back to confirm.</p>
      </section>
    </>
  )
}
