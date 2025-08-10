import about from "@/content/about.json";

export default function AboutPage() {
  const hours = about.hours;
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About us</h1>

      <section className="card">
        <p className="opacity-90 whitespace-pre-line">{about.short_en}</p>
        <p className="opacity-80 mt-3 whitespace-pre-line">{about.long_en}</p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-3">Hours</h2>
        <ul className="grid sm:grid-cols-2 gap-2">
          <li className="flex justify-between"><span>Mon</span><span>{hours.mon}</span></li>
          <li className="flex justify-between"><span>Tue</span><span>{hours.tue}</span></li>
          <li className="flex justify-between"><span>Wed</span><span>{hours.wed}</span></li>
          <li className="flex justify-between"><span>Thu</span><span>{hours.thu}</span></li>
          <li className="flex justify-between"><span>Fri</span><span>{hours.fri}</span></li>
          <li className="flex justify-between"><span>Sat</span><span>{hours.sat}</span></li>
          <li className="flex justify-between"><span>Sun</span><span>{hours.sun}</span></li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-3">Find us</h2>
        <p>{about.address}</p>
        <p className="mt-1">
          <a href={about.maps_url} className="underline" target="_blank">Open in Google Maps</a>
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a className="btn btn-primary" href={"mailto:"+about.reservation_email}>Reserve by email</a>
          <a className="btn btn-ghost" href={about.whatsapp_url} target="_blank">WhatsApp group</a>
          <a className="btn btn-ghost" href={about.instagram} target="_blank">Instagram</a>
          <a className="btn btn-ghost" href={about.facebook} target="_blank">Facebook</a>
        </div>
      </section>
    </div>
  );
}
