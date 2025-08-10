import Link from "next/link";
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10 py-8">
      <div className="container grid sm:grid-cols-2 gap-6 text-sm opacity-80">
        <div>
          <div className="font-semibold mb-2">World&apos;s End Bar</div>
          <div>Tbilisi, Sh. Dadiani st., 7</div>
          <div className="mt-1">
            <Link href="https://maps.app.goo.gl/D4dKpLgxdh9Ez16g9" className="underline">Open in Google Maps</Link>
          </div>
        </div>
        <div className="sm:text-right">
          <div className="mb-2">Follow us</div>
          <div className="flex sm:justify-end gap-4">
            <Link href="https://www.instagram.com/worlds.end.tbilisi" className="underline">Instagram</Link>
            <Link href="https://www.facebook.com/worlds.end.tbilisi" className="underline">Facebook</Link>
          </div>
          <div className="mt-2">
            <Link href="https://chat.whatsapp.com/C7uLKkTsCiwFRpAVESuN51" className="underline">Join our WhatsApp group</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
