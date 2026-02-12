import Image from "next/image";

// Market schedule data - easily editable
const schedule = [
  { day: "Zaterdag", date: "15 feb", location: "Markt Almere Haven", time: "09:00 - 17:00", active: true },
  { day: "Zondag", date: "16 feb", location: "Markt Amersfoort", time: "10:00 - 17:00", active: false },
  { day: "Zaterdag", date: "22 feb", location: "Markt Utrecht", time: "09:00 - 17:00", active: false },
  { day: "Zondag", date: "23 feb", location: "Markt Amsterdam Noord", time: "10:00 - 16:00", active: false },
];

const categories = [
  { name: "Elektronica", icon: "📱", examples: "Koptelefoons, speakers, gadgets" },
  { name: "Huishouden", icon: "🏠", examples: "Keukengerei, opbergers, decoratie" },
  { name: "Speelgoed", icon: "🧸", examples: "Knuffels, spelletjes, puzzels" },
  { name: "Sport & Outdoor", icon: "⚽", examples: "Fitness, camping, tuinartikelen" },
  { name: "Beauty", icon: "💄", examples: "Verzorging, make-up, parfum" },
  { name: "Mode", icon: "👕", examples: "Kleding, accessoires, tassen" },
];

const faqs = [
  {
    q: "Wat zit er in een Lucky Parcel?",
    a: "Elke parcel bevat geretourneerde of overstock producten. Je weet niet precies wat je krijgt, maar de waarde is altijd hoger dan wat je betaalt. Dat is het leuke!",
  },
  {
    q: "Waarom zijn de producten zo goedkoop?",
    a: "Wij kopen geretourneerde producten in per kilo bij grote webshops. Omdat we in bulk inkopen en niet alles hoeven te sorteren, kunnen we extreme kortingen bieden.",
  },
  {
    q: "Kan ik producten ruilen of retourneren?",
    a: "Omdat het mystery parcels zijn, is ruilen niet mogelijk. Wat je krijgt, is van jou. Maar maak je geen zorgen — de meeste klanten zijn positief verrast!",
  },
  {
    q: "Zijn de producten beschadigd?",
    a: "Nee! Dit zijn geretourneerde producten, geen beschadigde. Soms is de verpakking geopend, maar de producten zijn in goede staat.",
  },
];

// Clover SVG component
const Clover = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <ellipse cx="50" cy="25" rx="18" ry="20" />
    <ellipse cx="25" cy="50" rx="20" ry="18" />
    <ellipse cx="75" cy="50" rx="20" ry="18" />
    <ellipse cx="50" cy="75" rx="18" ry="20" />
    <rect x="47" y="70" width="6" height="25" rx="2" />
  </svg>
);

export default function Home() {
  const nextMarket = schedule.find(s => s.active) || schedule[0];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-clover-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clover className="w-8 h-8 text-clover-500" />
            <span className="font-display font-bold text-xl text-clover-800">Lucky Parcel</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-clover-700">
            <a href="#hoe-het-werkt" className="hover:text-clover-500 transition-colors">Hoe het werkt</a>
            <a href="#locaties" className="hover:text-clover-500 transition-colors">Locaties</a>
            <a href="#faq" className="hover:text-clover-500 transition-colors">FAQ</a>
          </nav>
          <a 
            href="#locaties" 
            className="bg-clover-500 hover:bg-clover-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Vind ons 📍
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 clover-pattern opacity-30" />
          <div className="absolute top-20 right-10 text-clover-200 float">
            <Clover className="w-24 h-24" />
          </div>
          <div className="absolute bottom-20 left-10 text-clover-200 float" style={{ animationDelay: '1s' }}>
            <Clover className="w-16 h-16" />
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="max-w-2xl">
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-clover-100 text-clover-700 px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clover-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-clover-500"></span>
                </span>
                <span className="font-semibold text-sm">Volgende markt: {nextMarket.day} {nextMarket.date}</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight text-clover-900">
                Jouw geluksmomentje{" "}
                <span className="text-clover-500">wacht</span>
                <span className="inline-block ml-2">🍀</span>
              </h1>

              <p className="mt-6 text-xl text-clover-700 leading-relaxed">
                Ontdek verrassende producten voor bodemprijzen! Wij verkopen 
                geretourneerde producten als mystery parcels. Je weet nooit 
                precies wat je krijgt — maar altijd meer waarde dan je betaalt.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#locaties"
                  className="inline-flex items-center justify-center gap-2 bg-clover-500 hover:bg-clover-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-clover-500/30 hover:shadow-xl hover:shadow-clover-500/40"
                >
                  <span>Bekijk waar we staan</span>
                  <span>📍</span>
                </a>
                <a
                  href="#hoe-het-werkt"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-clover-50 text-clover-700 px-8 py-4 rounded-xl font-bold text-lg transition-colors border-2 border-clover-200"
                >
                  Hoe werkt het?
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-clover-600">
                <span className="flex items-center gap-2">
                  <span className="text-gold-500">★★★★★</span>
                  Happy customers
                </span>
                <span className="flex items-center gap-2">
                  💰 Altijd voordelig
                </span>
                <span className="flex items-center gap-2">
                  🎁 Verrassing gegarandeerd
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="mt-16 md:absolute md:top-0 md:right-0 md:w-1/2 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-clover-400 to-clover-600 rounded-3xl transform rotate-3" />
                <Image
                  src="https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mystery parcels"
                  width={600}
                  height={400}
                  className="relative rounded-3xl object-cover shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-gold-400 text-clover-900 px-6 py-3 rounded-xl font-bold shadow-lg pulse-gold">
                  Vanaf €5! 🎉
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="hoe-het-werkt" className="py-20 md:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-clover-500 font-semibold mb-4">
                <Clover className="w-5 h-5" />
                Hoe het werkt
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-clover-900">
                Simpel als 1-2-3
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "1", icon: "📍", title: "Check waar we staan", desc: "Bekijk onze agenda en vind de markt bij jou in de buurt" },
                { num: "2", icon: "🎁", title: "Kies je parcel", desc: "Klein, medium of groot — elke maat heeft zijn eigen verrassing" },
                { num: "3", icon: "🍀", title: "Open & ontdek", desc: "Ga naar huis en ontdek wat voor moois je hebt gescoord!" },
              ].map((step) => (
                <div key={step.num} className="relative bg-clover-50 rounded-3xl p-8 text-center group hover:bg-clover-100 transition-colors">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-clover-500 text-white rounded-full flex items-center justify-center font-bold">
                    {step.num}
                  </div>
                  <span className="text-5xl mb-4 block">{step.icon}</span>
                  <h3 className="font-display font-bold text-xl text-clover-800 mb-2">{step.title}</h3>
                  <p className="text-clover-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section id="locaties" className="py-20 md:py-32 px-6 bg-gradient-to-b from-clover-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-clover-500 font-semibold mb-4">
                <Clover className="w-5 h-5" />
                Locaties & Agenda
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-clover-900">
                Waar kun je ons vinden?
              </h2>
              <p className="mt-4 text-clover-600 text-lg">
                We staan regelmatig op verschillende markten door heel Nederland
              </p>
            </div>

            {/* Current status */}
            <div className="bg-gradient-to-r from-clover-500 to-clover-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-white/10">
                <Clover className="w-48 h-48" />
              </div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
                  </span>
                  <span className="font-semibold">Volgende markt</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                  {nextMarket.location}
                </h3>
                <p className="text-xl text-white/80">
                  {nextMarket.day} {nextMarket.date} • {nextMarket.time}
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="grid gap-4">
              {schedule.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${
                    item.active 
                      ? 'bg-clover-50 border-clover-300 shadow-lg' 
                      : 'bg-white border-clover-100 hover:border-clover-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                      item.active ? 'bg-clover-500 text-white' : 'bg-clover-100 text-clover-600'
                    }`}>
                      {item.date.split(' ')[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-clover-800">{item.location}</h4>
                      <p className="text-sm text-clover-500">{item.day} {item.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-clover-700">{item.time}</p>
                    {item.active && (
                      <span className="inline-flex items-center gap-1 text-xs bg-gold-400 text-clover-900 px-2 py-1 rounded-full font-semibold">
                        ⭐ Volgende
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 md:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-clover-500 font-semibold mb-4">
                <Clover className="w-5 h-5" />
                Wat kun je verwachten
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-clover-900">
                Verrassingen in elke categorie
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div key={cat.name} className="bg-clover-50 hover:bg-clover-100 rounded-2xl p-6 text-center transition-colors">
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <h3 className="font-bold text-clover-800 mb-1">{cat.name}</h3>
                  <p className="text-sm text-clover-500">{cat.examples}</p>
                </div>
              ))}
            </div>

            {/* Value proposition */}
            <div className="mt-16 bg-gradient-to-r from-gold-100 to-gold-200 rounded-3xl p-8 md:p-12 text-center">
              <span className="text-5xl mb-4 block">🎁</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-clover-900 mb-4">
                Elke parcel bevat €15-€50 aan waarde
              </h3>
              <p className="text-clover-700 max-w-xl mx-auto">
                Voor slechts €5-€15 krijg je producten die in de winkel veel meer kosten. 
                De verrassing is wat het leuk maakt!
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 md:py-32 px-6 bg-clover-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-clover-500 font-semibold mb-4">
                <Clover className="w-5 h-5" />
                Sfeerimpressie
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-clover-900">
                Dit kun je verwachten
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2">
                <Image
                  src="https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Markt sfeer"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <Image
                src="https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Producten"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <Image
                src="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Pakketjes"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <Image
                src="https://images.pexels.com/photos/4498124/pexels-photo-4498124.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Blije klant"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <Image
                src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Mystery box"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-32 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-clover-500 font-semibold mb-4">
                <Clover className="w-5 h-5" />
                Veelgestelde vragen
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-clover-900">
                Nog vragen?
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-clover-50 rounded-2xl p-6">
                  <h3 className="font-bold text-clover-800 text-lg mb-2">{faq.q}</h3>
                  <p className="text-clover-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-clover-500 to-clover-700 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 text-white/5">
                <Clover className="w-64 h-64 -translate-x-1/4 -translate-y-1/4" />
              </div>
              <div className="absolute bottom-0 right-0 text-white/5">
                <Clover className="w-48 h-48 translate-x-1/4 translate-y-1/4" />
              </div>
              
              <div className="relative">
                <span className="text-6xl mb-6 block">🍀</span>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  Klaar voor jouw geluksmomentje?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto">
                  Kom langs op een van onze markten en ontdek wat voor moois 
                  er op je wacht!
                </p>
                <a
                  href="#locaties"
                  className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-clover-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
                >
                  <span>Bekijk de agenda</span>
                  <span>📍</span>
                </a>
                
                <div className="mt-8 flex justify-center gap-8 text-white/60">
                  <a href="https://instagram.com/luckyparcel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    📸 Instagram
                  </a>
                  <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-clover-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Clover className="w-6 h-6 text-clover-400" />
            <span className="font-display font-bold text-lg">Lucky Parcel</span>
          </div>
          <p className="text-clover-400 text-sm">
            © {new Date().getFullYear()} Lucky Parcel. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4 text-clover-400">
            <a href="https://instagram.com/luckyparcel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="mailto:info@luckyparcel.nl" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
