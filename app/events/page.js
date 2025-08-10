import events from "@/content/events.json";
export default function EventsPage(){
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e, idx)=>(
          <div key={idx} className="card">
            <div className="flex items-center justify-between">
              <div className="text-brand-yellow font-semibold">{new Date(e.date).toLocaleDateString("en-GB", {day:"2-digit", month:"short", year:"numeric"})}</div>
              {e.time && <div className="opacity-80">{e.time}</div>}
            </div>
            <h3 className="text-xl font-bold mt-2">{e.title_en}</h3>
            <p className="opacity-90 mt-2">{e.desc_en}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
