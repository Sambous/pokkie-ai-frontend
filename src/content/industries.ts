/**
 * Industry landing pages — the `/ai-receptionist/<industry>` set.
 *
 * These target "AI receptionist for X" searches, which convert far better than
 * the generic homepage because the visitor arrives already knowing their
 * vertical. Each page carries its own prose, outcomes, and FAQ rather than a
 * templated noun swap; near-identical pages get treated as thin content and
 * dropped from the index.
 */

import type { IndustryPage } from "@/content/types";
import type { Locale } from "@/lib/site";

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    id: "restaurants",
    glyph: "🍽",
    translations: {
      nl: {
        slug: "restaurants",
        label: "Restaurants",
        title: "AI-receptionist voor restaurants",
        description:
          "Pokkie neemt reserveringen aan tijdens de piek, beantwoordt vragen over de kaart en vangt afzeggingen op — zonder iemand van de vloer te halen.",
        keywords: [
          "AI receptionist restaurant",
          "reserveringen telefoon restaurant",
          "restaurant telefoonservice",
          "telefoniste restaurant",
        ],
        heroHeadline: "Pokkie neemt op tijdens de service",
        heroSubline:
          "Reserveringen, wijzigingen en vragen over de kaart — aangenomen terwijl je team op de vloer staat.",
        outcomes: [
          "Reserveringen worden vastgelegd tijdens de avondpiek",
          "Afzeggingen komen binnen, zodat je de tafel opnieuw verkoopt",
          "Vragen over allergieën, parkeren en groepen kosten geen personeelstijd",
        ],
        body: [
          {
            type: "paragraph",
            text: "Het telefoonvolume van een restaurant piekt precies wanneer je het niet kunt hebben. Tussen het aanschuiven van de eerste gasten en de laatste bestellingen wil iedereen tegelijk reserveren, wijzigen of even iets vragen. Wie opneemt, staat niet bij een tafel.",
          },
          {
            type: "heading",
            text: "Wat Pokkie tijdens de service doet",
          },
          {
            type: "list",
            items: [
              "Neemt meerdere gesprekken tegelijk aan, dus er ontstaat geen wachtrij.",
              "Legt reserveringen vast met datum, tijd, aantal personen en naam.",
              "Beantwoordt terugkerende vragen over openingstijden, allergieën, parkeren en groepsbeleid.",
              "Neemt wijzigingen en afzeggingen aan, zodat tafels niet onnodig geblokkeerd blijven.",
              "Schakelt door naar je team bij privédiners, evenementen of klachten.",
            ],
          },
          {
            type: "heading",
            text: "De uren die je nu kwijtraakt",
          },
          {
            type: "paragraph",
            text: "De meeste gemiste reserveringen vallen in twee blokken: de avondpiek en de uren waarin je gesloten bent. Dat tweede blok is verraderlijk, want gasten plannen hun avond vaak laat en op zondag — precies wanneer er niemand is om op te nemen.",
          },
          {
            type: "quote",
            text: "Een afzegging die je aanneemt is een tafel die je twee keer kunt verkopen.",
          },
          {
            type: "heading",
            text: "Wat je nodig hebt om te starten",
          },
          {
            type: "steps",
            items: [
              "Zet je openingstijden, capaciteit en groepsbeleid klaar.",
              "Verzamel de vragen die je het vaakst krijgt, inclusief allergie- en parkeerinformatie.",
              "Bepaal welke gesprekken altijd naar een mens gaan.",
              "Schakel je nummer door en luister het eerste gesprek mee.",
            ],
          },
        ],
        faq: [
          {
            q: "Kan Pokkie reserveringen aannemen tijdens de drukste uren?",
            a: "Ja. Pokkie handelt meerdere gesprekken tegelijk af, dus bellers komen niet in een wachtrij terecht wanneer je team op de vloer staat.",
          },
          {
            q: "Kan Pokkie vragen over de kaart en allergieën beantwoorden?",
            a: "Ja, mits je die informatie hebt ingesteld. Openingstijden, allergie-informatie, parkeren en groepsbeleid zijn standaardvragen die Pokkie zelfstandig afhandelt.",
          },
          {
            q: "Wat gebeurt er met een aanvraag voor een privédiner?",
            a: "Uitzonderlijke aanvragen zoals privédiners, evenementen of klachten worden doorgeschakeld naar je team of vastgelegd als terugbelverzoek.",
          },
        ],
      },
      en: {
        slug: "restaurants",
        label: "Restaurants",
        title: "AI receptionist for restaurants",
        description:
          "Pokkie takes reservations during the rush, answers menu questions, and catches cancellations — without pulling anyone off the floor.",
        keywords: [
          "AI receptionist restaurant",
          "restaurant phone answering service",
          "restaurant reservations by phone",
          "restaurant virtual receptionist",
        ],
        heroHeadline: "Pokkie answers during service",
        heroSubline:
          "Reservations, changes, and menu questions — handled while your team stays on the floor.",
        outcomes: [
          "Reservations captured through the evening rush",
          "Cancellations answered, so you resell the table",
          "Allergy, parking, and group questions cost no staff time",
        ],
        body: [
          {
            type: "paragraph",
            text: "Restaurant call volume peaks exactly when you can least absorb it. Between seating the first guests and the last orders, everyone wants to book, change, or ask something at once. Whoever answers isn't at a table.",
          },
          {
            type: "heading",
            text: "What Pokkie does during service",
          },
          {
            type: "list",
            items: [
              "Handles several calls at once, so no queue forms.",
              "Captures reservations with date, time, party size, and name.",
              "Answers recurring questions about hours, allergies, parking, and group policy.",
              "Takes changes and cancellations so tables don't stay needlessly blocked.",
              "Transfers to your team for private dining, events, or complaints.",
            ],
          },
          {
            type: "heading",
            text: "The hours you're losing now",
          },
          {
            type: "paragraph",
            text: "Most missed reservations fall into two blocks: the evening rush and the hours you're closed. The second is deceptive, because guests often plan late at night and on Sundays — precisely when nobody is there to pick up.",
          },
          {
            type: "quote",
            text: "A cancellation you answer is a table you get to sell twice.",
          },
          {
            type: "heading",
            text: "What you need to start",
          },
          {
            type: "steps",
            items: [
              "Prepare your opening hours, capacity, and group policy.",
              "Collect the questions you get most, including allergy and parking details.",
              "Decide which conversations always go to a human.",
              "Forward your number and listen in on the first call.",
            ],
          },
        ],
        faq: [
          {
            q: "Can Pokkie take reservations during peak hours?",
            a: "Yes. Pokkie handles several calls simultaneously, so callers don't sit in a queue while your team is on the floor.",
          },
          {
            q: "Can Pokkie answer menu and allergy questions?",
            a: "Yes, provided you've configured that information. Opening hours, allergy details, parking, and group policy are standard questions Pokkie handles independently.",
          },
          {
            q: "What happens with a private dining request?",
            a: "Exceptional requests like private dining, events, or complaints are transferred to your team or captured as a call-back request.",
          },
        ],
      },
    },
  },
  {
    id: "beauty-salons",
    glyph: "✨",
    translations: {
      nl: {
        slug: "schoonheidssalons",
        label: "Schoonheidssalons",
        title: "AI-receptionist voor schoonheidssalons",
        description:
          "Pokkie neemt op terwijl jij behandelt, plant afspraken per behandeling in en vangt afzeggingen op voordat ze no-shows worden.",
        keywords: [
          "AI receptionist schoonheidssalon",
          "beauty salon telefoon",
          "afspraken inplannen salon",
          "no-shows verminderen salon",
        ],
        heroHeadline: "Pokkie neemt op terwijl jij behandelt",
        heroSubline:
          "Afspraken, verzettingen en prijsvragen — afgehandeld zonder je behandeling te onderbreken.",
        outcomes: [
          "Afspraken worden geboekt met de juiste behandelduur",
          "Avondoproepen verdwijnen niet meer in voicemail",
          "Afzeggingen komen op tijd binnen, zodat je het gaatje vult",
        ],
        body: [
          {
            type: "paragraph",
            text: "In een schoonheidssalon is elke onderbreking zichtbaar voor de klant op de behandeltafel. Opnemen betekent iemand laten wachten; niet opnemen betekent een boeking kwijtraken. Dat is geen kwestie van beter plannen — het is een capaciteitsprobleem.",
          },
          {
            type: "heading",
            text: "Wat Pokkie overneemt",
          },
          {
            type: "list",
            items: [
              "Plant afspraken in met de juiste duur per behandeling.",
              "Beantwoordt vragen over prijs, duur en wat een behandeling inhoudt.",
              "Neemt verzettingen en afzeggingen aan, ook buiten openingstijden.",
              "Verstuurt bevestigingen, zodat vergeten afspraken afnemen.",
              "Schakelt door bij klachten, correcties of medische vragen.",
            ],
          },
          {
            type: "heading",
            text: "Waarom bezettingsgraad hieraan hangt",
          },
          {
            type: "paragraph",
            text: "Een klant die op tijd afzegt geeft je de kans het tijdslot opnieuw te verkopen. Bereikt die klant niemand, dan wordt het een no-show en blijft je tafel leeg op een uur dat al betaald had kunnen zijn. Bereikbaarheid voor afzeggingen is dus direct omzet.",
          },
          {
            type: "heading",
            text: "Wat je vooraf instelt",
          },
          {
            type: "steps",
            items: [
              "Leg je behandelingen vast met de juiste duur en prijsindicatie.",
              "Schrijf je annuleringsbeleid in gewone taal.",
              "Bepaal welke onderwerpen altijd naar een mens gaan.",
              "Zet automatische bevestigingen aan.",
            ],
          },
        ],
        faq: [
          {
            q: "Kan Pokkie afspraken inplannen per behandeling?",
            a: "Ja. Zolang je per behandeling de duur en beschikbaarheid hebt ingesteld, biedt Pokkie een passend tijdslot aan in plaats van alleen een terugbelverzoek te noteren.",
          },
          {
            q: "Neemt Pokkie ook 's avonds op?",
            a: "Ja. Juist de avondoproepen verdwijnen nu vaak in voicemail, terwijl klanten hun afspraken het liefst buiten werktijd regelen.",
          },
          {
            q: "Wat gebeurt er bij een klacht over een behandeling?",
            a: "Klachten, correcties en medische vragen worden doorgeschakeld naar jou of vastgelegd als terugbelverzoek.",
          },
        ],
      },
      en: {
        slug: "beauty-salons",
        label: "Beauty salons",
        title: "AI receptionist for beauty salons",
        description:
          "Pokkie answers while you treat, books appointments with the right duration, and catches cancellations before they become no-shows.",
        keywords: [
          "AI receptionist beauty salon",
          "beauty salon phone answering",
          "salon appointment booking",
          "reduce salon no-shows",
        ],
        heroHeadline: "Pokkie answers while you treat",
        heroSubline:
          "Appointments, reschedules, and pricing questions — handled without interrupting your treatment.",
        outcomes: [
          "Appointments booked with the correct treatment duration",
          "Evening calls stop disappearing into voicemail",
          "Cancellations arrive in time to refill the slot",
        ],
        body: [
          {
            type: "paragraph",
            text: "In a beauty salon every interruption is visible to the client on the table. Answering means making someone wait; not answering means losing a booking. This isn't a scheduling problem — it's a capacity problem.",
          },
          {
            type: "heading",
            text: "What Pokkie takes over",
          },
          {
            type: "list",
            items: [
              "Books appointments with the correct duration per treatment.",
              "Answers questions about price, duration, and what a treatment involves.",
              "Takes reschedules and cancellations, including outside opening hours.",
              "Sends confirmations so forgotten appointments decline.",
              "Transfers complaints, corrections, or medical questions.",
            ],
          },
          {
            type: "heading",
            text: "Why utilisation depends on this",
          },
          {
            type: "paragraph",
            text: "A client who cancels in time lets you resell the slot. If they can't reach anyone, it becomes a no-show and your table sits empty during an hour that could already have been paid for. Being reachable for cancellations is revenue.",
          },
          {
            type: "heading",
            text: "What you configure up front",
          },
          {
            type: "steps",
            items: [
              "Record your treatments with correct durations and price guidance.",
              "Write your cancellation policy in plain language.",
              "Decide which topics always go to a human.",
              "Turn on automatic confirmations.",
            ],
          },
        ],
        faq: [
          {
            q: "Can Pokkie book appointments per treatment?",
            a: "Yes. As long as you've set duration and availability per treatment, Pokkie offers a suitable slot instead of only taking a call-back request.",
          },
          {
            q: "Does Pokkie answer in the evening?",
            a: "Yes. Evening calls are exactly the ones that currently disappear into voicemail, while clients prefer to arrange appointments outside working hours.",
          },
          {
            q: "What happens with a complaint about a treatment?",
            a: "Complaints, corrections, and medical questions are transferred to you or captured as a call-back request.",
          },
        ],
      },
    },
  },
  {
    id: "hair-salons",
    glyph: "💇",
    translations: {
      nl: {
        slug: "kapsalons",
        label: "Kapsalons",
        title: "AI-receptionist voor kapsalons",
        description:
          "Je handen zitten in iemands haar als de telefoon gaat. Pokkie neemt op, plant per stylist in en houdt je stoelen vol.",
        keywords: [
          "AI receptionist kapsalon",
          "kapper telefoon aannemen",
          "afspraken kapsalon inplannen",
          "kapsalon gemiste oproepen",
        ],
        heroHeadline: "Je handen zitten in iemands haar",
        heroSubline: "Pokkie neemt de telefoon aan en plant in bij de juiste stylist.",
        outcomes: [
          "Afspraken worden geboekt bij de stylist die vrij is",
          "Bellers komen niet in de wachtrij tijdens de zaterdagdrukte",
          "Verzettingen worden aangenomen in plaats van gemist",
        ],
        body: [
          {
            type: "paragraph",
            text: "Een kapsalon draait op een agenda die per kwartier verschuift. Eén beller die je mist is niet alleen die ene knipbeurt — het is ook het gat in de dag dat je niet meer gevuld krijgt.",
          },
          {
            type: "heading",
            text: "Wat Pokkie voor je salon doet",
          },
          {
            type: "list",
            items: [
              "Plant in per stylist, met de juiste duur voor knippen, kleuren of behandelen.",
              "Neemt zaterdagdrukte op zonder wachtrij, ook als iedereen bezig is.",
              "Handelt verzettingen af, zodat vrijgekomen tijd zichtbaar wordt.",
              "Beantwoordt vragen over prijs, duur en beschikbaarheid.",
            ],
          },
          {
            type: "heading",
            text: "Waar het misgaat op zaterdag",
          },
          {
            type: "paragraph",
            text: "Op je drukste dag staat iedereen achter een stoel. Precies dan belt iemand voor een afspraak volgende week. Die oproep is eenvoudig af te handelen, maar er is niemand vrij om hem aan te nemen — en dus verdwijnt hij.",
          },
          {
            type: "quote",
            text: "Het gaatje dat je niet opvult, kost evenveel als de klant die je niet aannam.",
          },
          {
            type: "heading",
            text: "Instellen kost één keer een middag",
          },
          {
            type: "steps",
            items: [
              "Zet je stylisten en hun behandelingen klaar met de juiste duur.",
              "Geef aan welke behandelingen alleen door specifieke stylisten worden gedaan.",
              "Leg je annuleringsbeleid vast.",
              "Schakel je nummer door buiten openingstijden en test een gesprek.",
            ],
          },
        ],
        faq: [
          {
            q: "Kan Pokkie inplannen bij een specifieke stylist?",
            a: "Ja, mits je per stylist de behandelingen en beschikbaarheid hebt ingesteld. Pokkie biedt dan alleen tijdslots aan die daadwerkelijk kunnen.",
          },
          {
            q: "Wat gebeurt er als meerdere klanten tegelijk bellen?",
            a: "Pokkie handelt meerdere gesprekken tegelijk af, dus er ontstaat geen wachtrij op je drukste momenten.",
          },
          {
            q: "Kan Pokkie prijzen noemen?",
            a: "Ja, zolang je die hebt ingesteld. Voor behandelingen waarbij de prijs afhangt van haarlengte of situatie kun je een indicatie geven en het gesprek laten doorschakelen.",
          },
        ],
      },
      en: {
        slug: "hair-salons",
        label: "Hair salons",
        title: "AI receptionist for hair salons",
        description:
          "Your hands are in someone's hair when the phone rings. Pokkie answers, books per stylist, and keeps your chairs full.",
        keywords: [
          "AI receptionist hair salon",
          "hair salon phone answering",
          "salon booking by phone",
          "hairdresser missed calls",
        ],
        heroHeadline: "Your hands are in someone's hair",
        heroSubline: "Pokkie answers the phone and books with the right stylist.",
        outcomes: [
          "Appointments booked with whichever stylist is free",
          "No queue during the Saturday rush",
          "Reschedules answered instead of missed",
        ],
        body: [
          {
            type: "paragraph",
            text: "A hair salon runs on a calendar that shifts every fifteen minutes. One caller you miss isn't just that single cut — it's also the gap in the day you can no longer fill.",
          },
          {
            type: "heading",
            text: "What Pokkie does for your salon",
          },
          {
            type: "list",
            items: [
              "Books per stylist, with the right duration for cuts, colour, or treatments.",
              "Absorbs the Saturday rush without a queue, even when everyone is busy.",
              "Handles reschedules so freed-up time becomes visible.",
              "Answers questions about price, duration, and availability.",
            ],
          },
          {
            type: "heading",
            text: "Where Saturday goes wrong",
          },
          {
            type: "paragraph",
            text: "On your busiest day everyone is behind a chair. That is exactly when someone calls to book for next week. The call is simple to handle, but nobody is free to take it — so it disappears.",
          },
          {
            type: "quote",
            text: "The gap you don't fill costs as much as the client you didn't book.",
          },
          {
            type: "heading",
            text: "Setup takes one afternoon",
          },
          {
            type: "steps",
            items: [
              "Add your stylists and their treatments with correct durations.",
              "Mark which treatments only specific stylists perform.",
              "Record your cancellation policy.",
              "Forward your number outside opening hours and test a call.",
            ],
          },
        ],
        faq: [
          {
            q: "Can Pokkie book with a specific stylist?",
            a: "Yes, provided you've configured treatments and availability per stylist. Pokkie then only offers slots that are genuinely possible.",
          },
          {
            q: "What happens when several clients call at once?",
            a: "Pokkie handles multiple calls simultaneously, so no queue forms during your busiest moments.",
          },
          {
            q: "Can Pokkie quote prices?",
            a: "Yes, as long as you've configured them. For treatments where price depends on hair length or condition, you can give guidance and have the call transferred.",
          },
        ],
      },
    },
  },
];

export function getIndustryBySlug(locale: Locale, slug: string): IndustryPage | undefined {
  return INDUSTRY_PAGES.find((page) => page.translations[locale].slug === slug);
}
