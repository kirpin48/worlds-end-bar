import menu from "@/content/menu.json";
import SectionTitle from "@/components/SectionTitle";

function Category({title, items}){
  return (
    <section className="card mt-6">
      <SectionTitle>{title}</SectionTitle>
      <ul className="space-y-2">
        {items.map((i, idx)=>(
          <li key={idx} className="flex items-start justify-between gap-4">
            <div>
              <div className="font-semibold">{i.name_en}</div>
              {i.desc_en && <div className="text-sm opacity-80">{i.desc_en}</div>}
            </div>
            <div className="whitespace-nowrap">{i.price!==""? `${i.price} GEL`: ""}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function MenuPage(){
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold mb-2">Menu</h1>
      <Category title="Cocktails" items={menu.cocktails} />
      <Category title="Soft Drinks" items={menu.softs} />
      <Category title="Snacks" items={menu.snacks} />
      <Category title="Whisky" items={menu.whisky} />
      <Category title="Spirits" items={menu.spirits} />
      <Category title="Draught Beer" items={menu.draught_beer} />
      <Category title="Shots" items={menu.shots} />
      <Category title="In Bottle" items={menu.in_bottle} />
      <Category title="Beer Cocktails" items={menu.beer_cocktails} />
      <section className="card mt-6">
        <SectionTitle>Wine</SectionTitle>
        <div className="mb-2 font-semibold">Badagoni</div>
        <div className="text-sm opacity-80 mb-3">{menu.wine.badagoni.kinds.join(" / ")}</div>
        <ul className="space-y-1">
          <li className="flex justify-between"><span>Glass (15cl)</span><span>{menu.wine.badagoni.prices.glass_15cl} GEL</span></li>
          <li className="flex justify-between"><span>Jar (50cl)</span><span>{menu.wine.badagoni.prices.jar_50cl} GEL</span></li>
          <li className="flex justify-between"><span>Bottle (75cl)</span><span>{menu.wine.badagoni.prices.bottle_75cl} GEL</span></li>
        </ul>
        <div className="mt-4 font-semibold">John Lemon</div>
        <div className="text-sm opacity-80 mb-3">{menu.wine.john_lemon.desc}</div>
        <ul className="space-y-1">
          <li className="flex justify-between"><span>Glass (11cl)</span><span>{menu.wine.john_lemon.glass_11cl} GEL</span></li>
          <li className="flex justify_between"><span>Jar (50cl)</span><span>{menu.wine.john_lemon.jar_50cl} GEL</span></li>
        </ul>
      </section>
    </div>
  )
}
