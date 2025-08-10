import Link from "next/link";
export default function MobileBottomBar(){
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-dark/90 backdrop-blur border-t border-white/10 bottom-safe">
      <div className="container py-3 grid grid-cols-2 gap-3">
        <Link href="/#reserve" className="btn btn-primary w-full text-center">Reserve</Link>
        <Link href="https://chat.whatsapp.com/C7uLKkTsCiwFRpAVESuN51" className="btn btn-ghost w-full text-center">Join WhatsApp</Link>
      </div>
    </div>
  );
}
