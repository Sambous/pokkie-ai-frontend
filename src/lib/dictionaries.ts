import type { Locale } from "@/lib/site";

const dictionaries = {
  nl: {
    metaTitle: "Pokkie — AI-receptionist voor restaurants, beauty & meer",
    metaDescription:
      "Pokkie neemt elke call aan, boekt meer afspraken en praat met je klanten — voor restaurants, beauty salons, kappers en kleine bedrijven.",
    nav: {
      features: "Voordelen",
      industries: "Branches",
      plugins: "Plugins",
      how: "Hoe het werkt",
      faq: "FAQ",
      blog: "Blog",
      getCall: "Laat Pokkie bellen",
      getCallShort: "Bel me",
      home: "Home",
    },
    hero: {
      for: "AI-receptionist voor",
      audiences: [
        "restaurants",
        "beauty salons",
        "kappers",
        "spa’s",
        "klinieken",
        "kleine bedrijven",
      ],
      srAudiences: "restaurants, beauty salons, kappers en meer",
      support:
        "Neemt elke call aan, boekt meer afspraken en praat met klanten — zonder een extra receptioniste.",
      cta: "Laat Pokkie je bellen",
      secondary: "Bekijk hoe het werkt",
    },
    marquee: [
      "Restaurants",
      "Beauty salons",
      "Kappers",
      "Spa’s",
      "Klinieken",
      "Boutiques",
      "Cafés",
      "Barbers",
    ],
    callSection: {
      eyebrow: "Probeer Pokkie",
      title: "Hoor haar op jouw lijn",
      body: "Laat je gegevens achter — Pokkie belt je terug zodat je de stem, het boekingsproces en de vibe hoort.",
    },
    form: {
      title: "Laat Pokkie je bellen",
      subtitle: "Hoor hoe ze klinkt voor jouw zaak — zonder verplichtingen.",
      name: "Jouw naam",
      business: "Bedrijf",
      phone: "Telefoon",
      namePlaceholder: "Alex",
      businessPlaceholder: "Studio Luxe",
      phonePlaceholder: "+31 6 12 34 56 78",
      submit: "Laat Pokkie je bellen",
      sending: "Versturen…",
      success: "Top — Pokkie belt je zo.",
      errorGeneric: "Er ging iets mis. Probeer opnieuw.",
      errorNetwork: "Netwerkfout. Probeer opnieuw.",
    },
    features: {
      title: "Receptie-energie.",
      titleAccent: "Geen gemiste belletjes.",
      intro:
        "Gebouwd voor teams die op de telefoon leven — restaurants, salons, klinieken en lokale winkels die geen booking kunnen missen.",
      items: [
        {
          title: "24/7 bereikbaar",
          body: "Spitsuur, lunchpauze, na sluiting — Pokkie neemt direct op zodat elke vraag een menselijk antwoord krijgt.",
        },
        {
          title: "Boekt meer",
          body: "Vangt afspraken, bevestigt details en volgt op zodat stoelen en tafels vol blijven — geen voicemails.",
        },
        {
          title: "Klinkt menselijk",
          body: "Natuurlijke toon, geen robotmenu’s. Gasten stellen vragen, wijzigen bookings en voelen zich geholpen.",
        },
      ],
    },
    industries: {
      title: "Voor bedrijven die van bookings leven",
      intro:
        "Eén Pokkie, jouw tone of voice — of je nou serveert, knipt of de zaak runt.",
      items: [
        {
          id: "restaurants",
          label: "Restaurants",
          headline: "Spitsuur mag geen gemiste tafels betekenen",
          points: [
            "Neem reserveringen en groepen aan tijdens de service",
            "Beantwoord dieetvragen zonder de host van de vloer te trekken",
            "Stuur bevestigingen zodat gasten klaar aankomen",
          ],
          stat: "+15%",
          statLabel: "gem. meer covers via calls",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        },
        {
          id: "beauty",
          label: "Beauty",
          headline: "Houd de stoel vol — ook midden in een behandeling",
          points: [
            "Boek kleur, knip, lashes en spa terwijl jij bij de klant bent",
            "Beantwoord avondvragen die anders in Instagram-DM’s belanden",
            "Bevestig afspraken zodat no-shows dalen",
          ],
          stat: "+18%",
          statLabel: "gem. meer bookings gevangen",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
        },
        {
          id: "smb",
          label: "Kleine bedrijven",
          headline: "Altijd open voor de call die telt",
          points: [
            "Kwalificeer leads, boekt afspraken en routeert urgente calls",
            "Laat klanten nooit op voicemail na sluiting",
            "Blijf persoonlijk waar het ertoe doet — Pokkie doet de rest",
          ],
          stat: "+20%",
          statLabel: "gem. meer vragen beantwoord",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1600&q=80",
        },
      ],
    },
    how: {
      title: "Live in dagen, niet weken",
      intro: "Geen IT-project. Geen callcenter-contract. Gewoon een scherpere receptie.",
      steps: [
        {
          title: "Doorschakelen",
          body: "Stuur calls naar Pokkie in minuten. Houd je nummer — gasten bellen hetzelfde.",
        },
        {
          title: "Leer haar jouw vibe",
          body: "Diensten, openingstijden, toon, boekingsregels. Pokkie leert hoe jouw zaak praat.",
        },
        {
          title: "Meer bookings",
          body: "Zij neemt op, boekt en vat samen. Jij blijft op de vloer waar het gebeurt.",
        },
      ],
    },
    plugins: {
      eyebrow: "Plugins",
      title: "Werkt met de apps",
      titleAccent: "die je al hebt.",
      intro:
        "Geen nieuw systeem dat niemand opent. Pokkie koppelt aan de tools die al in je zaak draaien — reserveringen, agenda en berichten blijven waar je team al werkt.",
      items: [
        {
          id: "zenchef",
          name: "Zenchef",
          body: "Reserveringen landen in Zenchef, zodat de vloer dezelfde tafelplanning ziet als altijd.",
        },
        {
          id: "googleCalendar",
          name: "Google Calendar",
          body: "Afspraken verschijnen in de agenda die je al deelt — geen extra bookingstool om bij te houden.",
        },
        {
          id: "whatsapp",
          name: "WhatsApp",
          body: "Bevestigingen en follow-ups via WhatsApp, naast de telefoon. Klanten blijven in het kanaal dat ze kennen.",
        },
      ],
      more: "En meer — agenda’s, reserveringssystemen en messaging-apps. Pokkie voegt zich naar wat er al staat.",
    },
    phone: {
      title: "Ontmoet Pokkie aan de lijn",
      body: "Natuurlijke beurten, boekingslogica en een stem die bij jouw merk past — geen callcenterscript.",
      cta: "Laat Pokkie je bellen",
      onCall: "In gesprek · 0:42",
      live: "Live",
      lines: [
        { who: "Caller" as const, text: "Hoi, hebben jullie morgen iets na 16:00?" },
        {
          who: "Pokkie" as const,
          text: "Zeker — ik heb 16:30 en 17:15 voor knip & föhn. Wat past beter?",
        },
        { who: "Caller" as const, text: "16:30 graag. Op naam van Maya." },
        {
          who: "Pokkie" as const,
          text: "Je staat genoteerd, Maya. Ik stuur een bevestiging. Nog iets?",
        },
      ],
    },
    testimonials: {
      title: "Geliefd waar bookings tellen",
      items: [
        {
          quote:
            "Pokkie nam onze avondspits over. We verloren geen walk-in-energie meer aan de telefoon — en de agenda vulde sneller.",
          name: "Lina M.",
          role: "Eigenaar, Atelier Glow",
        },
        {
          quote:
            "Gasten denken dat ze met onze host praten. Bevestigingen gaan uit, groepen worden afgehandeld, wij blijven op de vloer.",
          name: "Marco V.",
          role: "GM, Casa Verde",
        },
        {
          quote:
            "Avondvragen stierven in de voicemail. Nu boekt Pokkie ze voordat ik de zaak open.",
          name: "Samira K.",
          role: "Oprichter, Nail Theory",
        },
      ],
    },
    faq: {
      title: "Vragen, beantwoord",
      items: [
        {
          q: "Wat is Pokkie?",
          a: "Pokkie is een AI-receptionist voor restaurants, beauty salons, kappers en kleine bedrijven. Ze neemt calls aan, boekt afspraken en praat met klanten zodat je geen booking mist.",
        },
        {
          q: "Klinkt ze robotachtig?",
          a: "Nee. Pokkie is gemaakt voor natuurlijke gesprekken — warm, helder en on-brand. Gasten stellen vragen, wijzigen tijden en boeken zonder menu-hel.",
        },
        {
          q: "Hoe snel zijn we live?",
          a: "De meeste bedrijven schakelen door, zetten diensten en tijden klaar, en nemen binnen een dag calls aan. Geen zware integratie nodig om te proberen.",
        },
        {
          q: "Moeten we van systeem wisselen?",
          a: "Nee. Pokkie heeft plugins voor onder meer Zenchef, Google Calendar en WhatsApp, zodat bookings en berichten landen in de apps die al in je zaak staan.",
        },
      ],
    },
    finalCta: {
      title: "Klaar om Pokkie",
      titleAccent: "te horen?",
      body: "Eén call. Jouw nummer. Hoor hoe ze boekt voor een zaak zoals die van jou.",
    },
    footer: {
      tagline: "AI-receptionist voor restaurants, beauty & kleine bedrijven.",
      privacy: "Privacy",
      terms: "Voorwaarden",
    },
    blog: {
      eyebrow: "Blog",
      title: "Meer boekingen, minder gemiste oproepen",
      intro:
        "Praktische gidsen over telefonische bereikbaarheid, afspraken inplannen en wat gemiste oproepen echt kosten.",
      metaTitle: "Blog — Pokkie",
      metaDescription:
        "Praktische gidsen over telefonische bereikbaarheid, afspraken inplannen en wat gemiste oproepen kosten voor restaurants, salons en kleine bedrijven.",
      readingTime: "min lezen",
      readMore: "Lees verder",
      backToBlog: "Terug naar blog",
      faqTitle: "Veelgestelde vragen",
      relatedTitle: "Verder lezen",
    },
    industryPages: {
      eyebrow: "Branches",
      metaTitle: "AI-receptionist per branche — Pokkie",
      metaDescription:
        "Bekijk hoe Pokkie de telefoon aanneemt voor restaurants, schoonheidssalons en kapsalons — met afspraken die meteen in de agenda staan.",
      title: "Gebouwd voor zaken die op de telefoon leven",
      intro:
        "Elke branche belt anders. Bekijk hoe Pokkie de gesprekken aanneemt die jij nu misloopt.",
      outcomesTitle: "Wat het oplevert",
      viewAll: "Alle branches",
    },
  },
  en: {
    metaTitle: "Pokkie — AI receptionist for restaurants, beauty & more",
    metaDescription:
      "Pokkie answers every call, books more appointments, and talks to your customers — for restaurants, beauty salons, hairstylists, and small businesses.",
    nav: {
      features: "Features",
      industries: "Industries",
      plugins: "Plugins",
      how: "How it works",
      faq: "FAQ",
      blog: "Blog",
      getCall: "Get a call",
      getCallShort: "Call me",
      home: "Home",
    },
    hero: {
      for: "AI receptionist for",
      audiences: [
        "restaurants",
        "beauty salons",
        "hairstylists",
        "spas",
        "clinics",
        "small businesses",
      ],
      srAudiences: "restaurants, beauty salons, hairstylists, and more",
      support:
        "Answer every call, take more bookings, and talk to customers — without hiring another front desk.",
      cta: "Get a call from Pokkie",
      secondary: "See how it works",
    },
    marquee: [
      "Restaurants",
      "Beauty salons",
      "Hairstylists",
      "Spas",
      "Clinics",
      "Boutiques",
      "Cafés",
      "Barbers",
    ],
    callSection: {
      eyebrow: "Try Pokkie",
      title: "Hear her on your line",
      body: "Drop your details — Pokkie calls you back so you can hear the voice, the booking flow, and the vibe.",
    },
    form: {
      title: "Get a call from Pokkie",
      subtitle: "Hear how she sounds with your business — no commitment.",
      name: "Your name",
      business: "Business",
      phone: "Phone",
      namePlaceholder: "Alex",
      businessPlaceholder: "Studio Luxe",
      phonePlaceholder: "+31 6 12 34 56 78",
      submit: "Get a call from Pokkie",
      sending: "Sending…",
      success: "Got it — Pokkie will call you shortly.",
      errorGeneric: "Something went wrong. Try again.",
      errorNetwork: "Network error. Please try again.",
    },
    features: {
      title: "Front desk energy.",
      titleAccent: "Zero missed rings.",
      intro:
        "Built for teams that live on the phone — restaurants, salons, clinics, and local shops that can't afford a missed booking.",
      items: [
        {
          title: "Answers 24/7",
          body: "Rush hour, lunch break, after close — Pokkie picks up instantly so every enquiry gets a human-feeling reply.",
        },
        {
          title: "Books more",
          body: "Captures appointments, confirms details, and follows up so chairs and tables stay full — not voicemails.",
        },
        {
          title: "Sounds human",
          body: "Natural tone, no robotic menus. Guests ask questions, change bookings, and feel looked after.",
        },
      ],
    },
    industries: {
      title: "Made for businesses that live on bookings",
      intro:
        "One Pokkie, tailored tone — whether you plate food, cut hair, or run the shop.",
      items: [
        {
          id: "restaurants",
          label: "Restaurants",
          headline: "Peak service shouldn't mean missed tables",
          points: [
            "Take reservations and large-party details during dinner rush",
            "Answer dietary questions without pulling a host off the floor",
            "Send confirmations so guests show up ready",
          ],
          stat: "+15%",
          statLabel: "avg. more covers from calls",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        },
        {
          id: "beauty",
          label: "Beauty",
          headline: "Keep the chair full — even mid-appointment",
          points: [
            "Book color, cut, lashes, and spa slots while you're with a client",
            "Answer after-hours enquiries that usually go to Instagram DMs",
            "Confirm appointments so no-shows drop and walk-ins stay welcome",
          ],
          stat: "+18%",
          statLabel: "avg. more bookings captured",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
        },
        {
          id: "smb",
          label: "Small businesses",
          headline: "Always open for the call that pays the rent",
          points: [
            "Qualify leads, book appointments, and route urgent calls",
            "Never leave a customer on voicemail after close",
            "Stay personal where it matters — Pokkie handles the rest",
          ],
          stat: "+20%",
          statLabel: "avg. more enquiries answered",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=1600&q=80",
        },
      ],
    },
    how: {
      title: "Live in days, not weeks",
      intro: "No IT project. No call-center contract. Just a sharper front desk.",
      steps: [
        {
          title: "Forward your number",
          body: "Point calls to Pokkie in minutes. Keep your existing line — guests dial the same number.",
        },
        {
          title: "Teach her your vibe",
          body: "Services, hours, tone, booking rules. Pokkie learns how your studio or restaurant talks.",
        },
        {
          title: "Take more bookings",
          body: "She answers, books, and summarises. You stay on the floor where the magic happens.",
        },
      ],
    },
    plugins: {
      eyebrow: "Plugins",
      title: "Works with the apps",
      titleAccent: "you already run.",
      intro:
        "No new system nobody opens. Pokkie plugs into the tools already in place — reservations, calendars, and messages land where your team already works.",
      items: [
        {
          id: "zenchef",
          name: "Zenchef",
          body: "Reservations land in Zenchef, so the floor sees the same table plan they already trust.",
        },
        {
          id: "googleCalendar",
          name: "Google Calendar",
          body: "Appointments show up in the calendar you already share — no extra booking tool to babysit.",
        },
        {
          id: "whatsapp",
          name: "WhatsApp",
          body: "Confirmations and follow-ups over WhatsApp, alongside the phone. Guests stay in the channel they already use.",
        },
      ],
      more: "And more — calendars, reservation systems, and messaging apps. Pokkie fits around what you already have.",
    },
    phone: {
      title: "Meet Pokkie on the line",
      body: "Natural turn-taking, booking logic, and a voice that fits your brand — not a call centre script.",
      cta: "Get a call from Pokkie",
      onCall: "On a call · 0:42",
      live: "Live",
      lines: [
        { who: "Caller" as const, text: "Hi, do you have anything tomorrow after 4?" },
        {
          who: "Pokkie" as const,
          text: "Absolutely — I have 4:30 and 5:15 for a cut & blow. Which feels better?",
        },
        { who: "Caller" as const, text: "4:30 please. Under Maya." },
        {
          who: "Pokkie" as const,
          text: "You're booked, Maya. I'll text a confirmation. Anything else?",
        },
      ],
    },
    testimonials: {
      title: "Loved where bookings matter",
      items: [
        {
          quote:
            "Pokkie took over our evening rush calls. We stopped losing walk-in energy to the phone — and the books filled faster.",
          name: "Lina M.",
          role: "Owner, Atelier Glow",
        },
        {
          quote:
            "Guests think they're talking to our host. Confirmations go out, large parties get handled, and we stay on the floor.",
          name: "Marco V.",
          role: "GM, Casa Verde",
        },
        {
          quote:
            "After-hours enquiries used to die in voicemail. Now Pokkie books them before I open the shop.",
          name: "Samira K.",
          role: "Founder, Nail Theory",
        },
      ],
    },
    faq: {
      title: "Questions, answered",
      items: [
        {
          q: "What is Pokkie?",
          a: "Pokkie is an AI receptionist for restaurants, beauty salons, hairstylists, and small businesses. She answers calls, books appointments, and talks to customers so you never miss a booking.",
        },
        {
          q: "Does she sound robotic?",
          a: "No. Pokkie is tuned for natural conversation — warm, clear, and on-brand for hospitality and beauty. Guests can ask questions, change times, and book without menu hell.",
        },
        {
          q: "How fast can we go live?",
          a: "Most businesses forward their number, set services and hours, and start taking calls within a day. No heavy integration required to try her.",
        },
        {
          q: "Do we have to switch systems?",
          a: "No. Pokkie has plugins for Zenchef, Google Calendar, WhatsApp and more, so bookings and messages land in the apps you already use.",
        },
      ],
    },
    finalCta: {
      title: "Ready to hear",
      titleAccent: "Pokkie?",
      body: "One call. Your number. Hear how she books for a business like yours.",
    },
    footer: {
      tagline: "AI receptionist for restaurants, beauty & small businesses.",
      privacy: "Privacy",
      terms: "Terms",
    },
    blog: {
      eyebrow: "Blog",
      title: "More bookings, fewer missed calls",
      intro:
        "Practical guides on phone availability, appointment booking, and what missed calls actually cost.",
      metaTitle: "Blog — Pokkie",
      metaDescription:
        "Practical guides on phone availability, appointment booking, and what missed calls cost restaurants, salons, and small businesses.",
      readingTime: "min read",
      readMore: "Read more",
      backToBlog: "Back to blog",
      faqTitle: "Frequently asked questions",
      relatedTitle: "Keep reading",
    },
    industryPages: {
      eyebrow: "Industries",
      metaTitle: "AI receptionist by industry — Pokkie",
      metaDescription:
        "See how Pokkie answers the phone for restaurants, beauty salons, and hair salons — with appointments booked straight into your calendar.",
      title: "Built for businesses that live on the phone",
      intro:
        "Every industry calls differently. See how Pokkie handles the conversations you're missing today.",
      outcomesTitle: "What it delivers",
      viewAll: "All industries",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { dictionaries };
