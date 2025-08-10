import gallery from "@/content/gallery.json";
export default function GalleryPage(){
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {gallery.map((g, idx)=>(
          <figure key={idx} className="overflow-hidden rounded-2xl bg-white/5">
            <div className="aspect-video bg-center bg-cover" style={{backgroundImage:`url(${g.src})`}} />
            <figcaption className="p-2 text-sm opacity-85">{g.caption_en}</figcaption>
          </figure>
        ))}
      </div>
      <p className="opacity-70 text-sm mt-2">Tip: upload images to <code>/public/gallery</code> and list them in <code>/content/gallery.json</code>.</p>
    </div>
  )
}
