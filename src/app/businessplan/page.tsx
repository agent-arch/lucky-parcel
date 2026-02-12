'use client';

import { useState } from 'react';

interface Task {
  id: string;
  task: string;
  priority: 'high' | 'medium' | 'low';
  deadline: string;
  status: 'todo' | 'doing' | 'done';
}

interface Category {
  name: string;
  icon: string;
  color: string;
  tasks: Task[];
}

const categories: Category[] = [
  {
    name: 'Inkoop & Producten',
    icon: '📦',
    color: 'bg-emerald-500',
    tasks: [
      { id: 'i1', task: 'Contact leggen met retourenleveranciers (bol.com, Amazon returns, etc.)', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'i2', task: 'Eerste lading producten bestellen/ophalen', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'i3', task: 'Producten sorteren op categorie en conditie', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'i4', task: 'Prijzen bepalen per categorie (marge 50-70%)', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'i5', task: 'Opslagruimte regelen voor voorraad', priority: 'medium', deadline: 'Week 1', status: 'todo' },
      { id: 'i6', task: 'Kwaliteitscheck proces opzetten', priority: 'medium', deadline: 'Week 2', status: 'todo' },
    ]
  },
  {
    name: 'Markt & Locatie',
    icon: '📍',
    color: 'bg-green-600',
    tasks: [
      { id: 'm1', task: 'Marktvergunning aanvragen bij gemeente', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'm2', task: 'Eerste markt kiezen voor testdag', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'm3', task: 'Standplaats reserveren/bevestigen', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'm4', task: 'Kraam/tent regelen (kopen of huren)', priority: 'high', deadline: 'Week 2', status: 'todo' },
      { id: 'm5', task: 'Tafels, rekken, displaymaterialen kopen', priority: 'medium', deadline: 'Week 2', status: 'todo' },
      { id: 'm6', task: 'Transport regelen (bus/aanhanger)', priority: 'medium', deadline: 'Week 2', status: 'todo' },
    ]
  },
  {
    name: 'Branding & Marketing',
    icon: '🎯',
    color: 'bg-lime-600',
    tasks: [
      { id: 'b1', task: 'Logo finaliseren (vier-bladig klaver)', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'b2', task: 'Spandoek/banner laten drukken voor kraam', priority: 'high', deadline: 'Week 2', status: 'todo' },
      { id: 'b3', task: 'Prijskaartjes en labels ontwerpen/drukken', priority: 'medium', deadline: 'Week 2', status: 'todo' },
      { id: 'b4', task: 'Instagram account aanmaken @luckyparcel.nl', priority: 'medium', deadline: 'Week 1', status: 'todo' },
      { id: 'b5', task: 'Visitekaartjes met website URL drukken', priority: 'low', deadline: 'Week 2', status: 'todo' },
      { id: 'b6', task: 'Flyers maken voor uitdelen op markt', priority: 'low', deadline: 'Week 2', status: 'todo' },
    ]
  },
  {
    name: 'Website & Online',
    icon: '🌐',
    color: 'bg-teal-600',
    tasks: [
      { id: 'w1', task: 'Domein kopen: luckyparcel.nl', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'w2', task: 'Website koppelen aan domein', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'w3', task: 'Marktplanning updaten met echte data', priority: 'medium', deadline: 'Week 2', status: 'todo' },
      { id: 'w4', task: 'WhatsApp Business nummer toevoegen', priority: 'medium', deadline: 'Week 1', status: 'todo' },
      { id: 'w5', task: 'Google Maps locatie aanmaken', priority: 'low', deadline: 'Week 2', status: 'todo' },
      { id: 'w6', task: 'QR-code maken die naar website linkt', priority: 'low', deadline: 'Week 2', status: 'todo' },
    ]
  },
  {
    name: 'Financieel & Juridisch',
    icon: '💰',
    color: 'bg-yellow-600',
    tasks: [
      { id: 'f1', task: 'KvK-inschrijving (eenmanszaak of VOF)', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'f2', task: 'Zakelijke bankrekening openen', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'f3', task: 'Pinautomaat regelen (SumUp/Zettle)', priority: 'high', deadline: 'Week 2', status: 'todo' },
      { id: 'f4', task: 'Startbudget bepalen en investeren', priority: 'high', deadline: 'Week 1', status: 'todo' },
      { id: 'f5', task: 'Aansprakelijkheidsverzekering afsluiten', priority: 'medium', deadline: 'Week 2', status: 'todo' },
      { id: 'f6', task: 'Simpele boekhouding opzetten (Excel/app)', priority: 'medium', deadline: 'Week 2', status: 'todo' },
    ]
  },
  {
    name: 'Operatie & Logistiek',
    icon: '⚙️',
    color: 'bg-orange-600',
    tasks: [
      { id: 'o1', task: 'Kassasysteem bepalen (app of kassa)', priority: 'medium', deadline: 'Week 2', status: 'todo' },
      { id: 'o2', task: 'Wisselgeld regelen voor eerste marktdag', priority: 'high', deadline: 'Week 2', status: 'todo' },
      { id: 'o3', task: 'Tasjes/zakjes kopen voor klanten', priority: 'medium', deadline: 'Week 2', status: 'todo' },
      { id: 'o4', task: 'Checklist maken voor opbouw/afbouw', priority: 'low', deadline: 'Week 2', status: 'todo' },
      { id: 'o5', task: 'Weer-backup plan (parasol, dekzeil)', priority: 'low', deadline: 'Week 2', status: 'todo' },
      { id: 'o6', task: 'Eerste marktdag plannen met team', priority: 'high', deadline: 'Week 2', status: 'todo' },
    ]
  },
];

const priorityColors = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-gray-100 text-gray-600 border-gray-200',
};

export default function BusinessPlan() {
  const [tasks, setTasks] = useState(categories);

  const totalTasks = tasks.reduce((acc, cat) => acc + cat.tasks.length, 0);
  const highPriorityTasks = tasks.reduce((acc, cat) => acc + cat.tasks.filter(t => t.priority === 'high').length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-3xl">🍀</span>
            <span className="text-xl font-bold text-green-800">Lucky Parcel</span>
          </a>
          <a 
            href="/"
            className="text-green-600 hover:text-green-800 font-medium"
          >
            ← Terug naar home
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">🍀 Lucky Parcel Businessplan</h1>
          <p className="text-xl text-green-100 mb-6">
            Van idee naar eerste marktdag in 2 weken
          </p>
          <div className="flex gap-6 flex-wrap">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">{totalTasks}</span>
              <span className="text-green-100 ml-2">Totale taken</span>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">{highPriorityTasks}</span>
              <span className="text-green-100 ml-2">High priority</span>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <span className="text-2xl font-bold">2</span>
              <span className="text-green-100 ml-2">Weken tot lancering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Concept */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6">📋 Het Concept</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Wat is Lucky Parcel?</h3>
              <p className="text-gray-600 mb-4">
                Lucky Parcel verkoopt retourproducten van grote webshops op lokale markten. 
                Klanten vinden hier elektronica, fashion, home & living en meer — 
                allemaal tegen 50-80% van de originele prijs.
              </p>
              
              <h3 className="font-bold text-gray-800 mb-3">Waarom werkt dit?</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ Retouren zijn goedkoop in te kopen (pallets)</li>
                <li>✅ Consumenten houden van "de deal"</li>
                <li>✅ Markten trekken koopjesjagers</li>
                <li>✅ Duurzaam: producten krijgen tweede leven</li>
                <li>✅ Lage overhead: geen winkel nodig</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Verdienmodel</h3>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Inkoop pallet:</span>
                    <div className="font-bold text-gray-800">€200-500</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Verwachte opbrengst:</span>
                    <div className="font-bold text-green-600">€600-1500</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Marge:</span>
                    <div className="font-bold text-green-600">50-70%</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Break-even:</span>
                    <div className="font-bold text-gray-800">~€300/markt</div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-bold text-gray-800 mb-3">Startinvestering</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>📦 Eerste voorraad: €500-1000</li>
                <li>🏪 Kraam/materialen: €300-500</li>
                <li>🎨 Branding/prints: €150-250</li>
                <li>📱 Pinautomaat: €30-50</li>
                <li>📋 Vergunningen: €50-100</li>
                <li className="font-bold text-green-700 pt-2 border-t">Totaal: €1000-1900</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6">📅 Tijdlijn</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-sm text-green-600 font-medium mb-2">WEEK 1</div>
              <h3 className="font-bold text-gray-800 mb-2">Voorbereiding</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• KvK inschrijven</li>
                <li>• Leverancier contacten</li>
                <li>• Eerste producten bestellen</li>
                <li>• Marktvergunning aanvragen</li>
                <li>• Domein + website live</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-sm text-green-600 font-medium mb-2">WEEK 2</div>
              <h3 className="font-bold text-gray-800 mb-2">Setup</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Producten sorteren/prijzen</li>
                <li>• Kraam materialen kopen</li>
                <li>• Branding drukwerk</li>
                <li>• Pinautomaat testen</li>
                <li>• Proefopstelling thuis</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-green-500">
              <div className="text-sm text-green-600 font-medium mb-2">WEEK 3</div>
              <h3 className="font-bold text-gray-800 mb-2">🚀 Eerste Markt!</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Testdag op markt</li>
                <li>• Feedback verzamelen</li>
                <li>• Prijzen eventueel aanpassen</li>
                <li>• Proces optimaliseren</li>
                <li>• Volgende markt plannen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Task Categories */}
        <h2 className="text-2xl font-bold text-green-800 mb-6">✅ Alle Taken per Categorie</h2>
        
        <div className="grid gap-6">
          {tasks.map((category) => (
            <div key={category.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`${category.color} text-white px-6 py-4 flex items-center gap-3`}>
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.name}</h3>
                <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-sm">
                  {category.tasks.length} taken
                </span>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {category.tasks.map((task) => (
                    <div 
                      key={task.id}
                      className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="flex-1 text-gray-700">{task.task}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${priorityColors[task.priority]}`}>
                        {task.priority === 'high' ? '🔴 High' : task.priority === 'medium' ? '🟡 Medium' : '⚪ Low'}
                      </span>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {task.deadline}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Wins */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">⚡ Quick Wins voor Week 1</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <h4 className="font-bold text-gray-800">KvK Inschrijven</h4>
                <p className="text-sm text-gray-600">Online in 30 min geregeld. Eenmanszaak is simpelst.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <h4 className="font-bold text-gray-800">Retourpallet Bestellen</h4>
                <p className="text-sm text-gray-600">Via Vidaxl, Costway of lokale retourenhandel.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <h4 className="font-bold text-gray-800">Markt Bellen</h4>
                <p className="text-sm text-gray-600">Vraag naar dagvergunningen - vaak snel beschikbaar.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <div>
                <h4 className="font-bold text-gray-800">SumUp Bestellen</h4>
                <p className="text-sm text-gray-600">€39 eenmalig, daarna alleen transactiekosten.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Suppliers */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">📦 Waar Retouren Inkopen?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Liquidation.com</h3>
              <p className="text-sm text-gray-600 mb-2">Amerikaanse retouren, grote partijen</p>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Import kosten!</span>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Vidaxl Retouren</h3>
              <p className="text-sm text-gray-600 mb-2">Nederlandse aanbieder, pallets vanaf €200</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Aanrader</span>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-800 mb-2">Lokale Retourenhandel</h3>
              <p className="text-sm text-gray-600 mb-2">Zoek op Marktplaats, vaak ophalen mogelijk</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Flexibel</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Vragen of hulp nodig bij de lancering?</p>
          <a 
            href="https://wa.me/31612345678" 
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors"
          >
            💬 WhatsApp ons
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-green-300">🍀 Lucky Parcel — Geluk zit in kleine pakketjes</p>
          <p className="text-green-400 text-sm mt-2">© 2026 Lucky Parcel</p>
        </div>
      </footer>
    </div>
  );
}
