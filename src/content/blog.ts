/**
 * Blog posts, in both locales.
 *
 * Topics are chosen for search intent rather than company news: each post
 * targets a question an owner actually types before they know AI receptionists
 * exist ("what do missed calls cost", "answering service vs AI"). Company
 * updates rank for nothing and are deliberately absent.
 */

import type { BlogPost } from "@/content/types";
import type { Locale } from "@/lib/site";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "cost-of-missed-calls",
    published: "2026-07-14",
    readingMinutes: 6,
    translations: {
      nl: {
        slug: "wat-gemiste-oproepen-kosten",
        title: "Wat gemiste oproepen jouw zaak echt kosten",
        description:
          "Elke onbeantwoorde telefoon is een boeking die naar de concurrent gaat. Reken uit wat het jouw zaak per maand kost — en wat je eraan doet.",
        keywords: [
          "gemiste oproepen",
          "telefoon niet opgenomen",
          "omzet mislopen telefoon",
          "AI receptionist",
          "telefonische bereikbaarheid",
        ],
        body: [
          {
            type: "paragraph",
            text: "De meeste ondernemers weten niet hoeveel telefoontjes ze missen. Niet omdat het ze niets kan schelen, maar omdat een gemiste oproep geen spoor achterlaat. Er verschijnt geen melding met 'dit had €85 kunnen zijn'. De klant belt gewoon de volgende zaak in de zoekresultaten.",
          },
          {
            type: "heading",
            text: "Reken het één keer voor jezelf uit",
          },
          {
            type: "paragraph",
            text: "Je hebt maar drie getallen nodig: hoeveel oproepen je per week mist, wat een gemiddelde klant bij jou besteedt, en hoe vaak een beller daadwerkelijk boekt. Vermenigvuldig ze en het bedrag is bijna altijd hoger dan verwacht.",
          },
          {
            type: "steps",
            items: [
              "Tel de gemiste oproepen in je telefoonlogboek over één volledige week.",
              "Vermenigvuldig met je gemiddelde besteding per klant.",
              "Neem daar 30–50% van — niet elke beller zou geboekt hebben.",
              "Vermenigvuldig met 52 voor het jaarcijfer.",
            ],
          },
          {
            type: "paragraph",
            text: "Een salon die tien oproepen per week mist bij een gemiddelde van €65 en een conversie van 40% laat ruim €13.500 per jaar liggen. Dat is meer dan de meeste zaken aan marketing uitgeven om nieuwe klanten binnen te halen die vervolgens niemand aan de lijn krijgen.",
          },
          {
            type: "heading",
            text: "Waarom bellers niet terugbellen",
          },
          {
            type: "paragraph",
            text: "De aanname dat een klant het later nog eens probeert, klopt zelden. Iemand die belt heeft een concreet moment in gedachten: vanavond eten, morgen knippen, deze week een afspraak. Als jij niet opneemt, blijft die behoefte bestaan — alleen wordt hij ergens anders vervuld.",
          },
          {
            type: "list",
            items: [
              "Voicemail wordt door de meeste bellers overgeslagen; ze hangen op en bellen verder.",
              "Wie wél inspreekt, verwacht binnen enkele minuten reactie — niet aan het einde van de dag.",
              "Buiten openingstijden bellen is normaal geworden: mensen regelen hun afspraken 's avonds.",
            ],
          },
          {
            type: "heading",
            text: "De uren waarop het misgaat",
          },
          {
            type: "paragraph",
            text: "Gemiste oproepen zijn niet gelijk verdeeld over de dag. Ze clusteren precies daar waar je het drukst bent: tijdens de lunchdrukte, midden in een behandeling, in de aanloop naar het diner. Je mist ze niet omdat je stilzit, maar omdat je aan het werk bent bij de klant die al binnen is.",
          },
          {
            type: "quote",
            text: "De telefoon gaat het hardst op het moment dat je hem het minst kunt opnemen.",
          },
          {
            type: "paragraph",
            text: "Daarom lost 'beter je best doen' het niet op. Het is een capaciteitsprobleem: één persoon kan niet tegelijk aan de balie staan en de telefoon aannemen zonder één van beide slechter te doen.",
          },
          {
            type: "heading",
            text: "Wat de opties zijn",
          },
          {
            type: "list",
            items: [
              "Extra personeel inhuren — effectief, maar duur en alleen aanwezig tijdens diensten.",
              "Een telefonisch antwoordservice — neemt op, maar boekt zelden rechtstreeks in je agenda.",
              "Alles naar online boeken duwen — helpt, maar een groot deel van je klanten belt liever.",
              "Een AI-receptionist — neemt elke oproep aan, ook 's avonds en tijdens piekmomenten.",
            ],
          },
          {
            type: "paragraph",
            text: "Welke je kiest hangt af van je volume en marge. De rekensom hierboven maakt die keuze wel concreet: zolang de kosten van de oplossing lager zijn dan wat je nu misloopt, is niets doen de duurste optie.",
          },
          {
            type: "callout",
            text: "Pokkie neemt elke oproep aan, ook wanneer je handen vol zitten, en boekt de afspraak meteen in. Laat Pokkie je bellen om te horen hoe dat klinkt voor jouw zaak.",
          },
        ],
        faq: [
          {
            q: "Hoeveel oproepen mist een gemiddelde kleine zaak?",
            a: "Dat verschilt sterk per branche, maar zaken die tijdens openingstijden met klanten bezig zijn missen doorgaans een aanzienlijk deel van hun inkomende oproepen — vooral tijdens piekuren en buiten openingstijden. Tel een week lang mee in je telefoonlogboek voor je eigen cijfer.",
          },
          {
            q: "Belt een klant die niet wordt opgenomen later terug?",
            a: "Meestal niet. Een beller heeft een concrete behoefte op dat moment. Wordt er niet opgenomen, dan belt hij doorgaans de volgende zaak in de zoekresultaten in plaats van later opnieuw te proberen.",
          },
          {
            q: "Helpt online boeken tegen gemiste oproepen?",
            a: "Het helpt, maar het lost het niet volledig op. Een deel van je klanten belt liever, zeker bij vragen over beschikbaarheid, allergieën, groepen of speciale wensen. Die gesprekken verdwijnen niet als je een boekingslink toevoegt.",
          },
        ],
      },
      en: {
        slug: "what-missed-calls-cost",
        title: "What missed calls actually cost your business",
        description:
          "Every unanswered phone is a booking that goes to a competitor. Work out what it costs you per month — and what to do about it.",
        keywords: [
          "missed calls",
          "missed call cost",
          "lost revenue phone calls",
          "AI receptionist",
          "phone availability",
        ],
        body: [
          {
            type: "paragraph",
            text: "Most owners have no idea how many calls they miss. Not because they don't care, but because a missed call leaves no trace. No notification appears saying 'that was €85'. The customer simply calls the next business in the search results.",
          },
          {
            type: "heading",
            text: "Run the numbers once",
          },
          {
            type: "paragraph",
            text: "You need three figures: how many calls you miss per week, what an average customer spends, and how often a caller actually books. Multiply them and the result is almost always higher than expected.",
          },
          {
            type: "steps",
            items: [
              "Count the missed calls in your phone log across one full week.",
              "Multiply by your average spend per customer.",
              "Take 30–50% of that — not every caller would have booked.",
              "Multiply by 52 for the annual figure.",
            ],
          },
          {
            type: "paragraph",
            text: "A salon missing ten calls a week at a €65 average and 40% conversion leaves more than €13,500 on the table each year. That is more than most businesses spend on marketing to attract new customers who then can't reach anyone.",
          },
          {
            type: "heading",
            text: "Why callers don't call back",
          },
          {
            type: "paragraph",
            text: "The assumption that a customer will try again later rarely holds. Someone calling has a specific moment in mind: dinner tonight, a cut tomorrow, an appointment this week. If you don't pick up, the need doesn't disappear — it gets met somewhere else.",
          },
          {
            type: "list",
            items: [
              "Most callers skip voicemail entirely; they hang up and keep dialling.",
              "Those who do leave a message expect a reply within minutes, not by end of day.",
              "Calling outside opening hours is normal now — people sort their appointments in the evening.",
            ],
          },
          {
            type: "heading",
            text: "The hours where it goes wrong",
          },
          {
            type: "paragraph",
            text: "Missed calls are not spread evenly across the day. They cluster exactly where you are busiest: the lunch rush, mid-treatment, the run-up to dinner service. You miss them not because you are idle, but because you are serving the customer already in front of you.",
          },
          {
            type: "quote",
            text: "The phone rings hardest at the exact moment you are least able to answer it.",
          },
          {
            type: "paragraph",
            text: "That is why 'trying harder' doesn't fix it. This is a capacity problem: one person cannot work the floor and answer the phone without doing one of them badly.",
          },
          {
            type: "heading",
            text: "What the options are",
          },
          {
            type: "list",
            items: [
              "Hire more staff — effective, but expensive and only present during shifts.",
              "Use an answering service — they pick up, but rarely book straight into your calendar.",
              "Push everything to online booking — helps, but plenty of customers still prefer to call.",
              "Use an AI receptionist — answers every call, including evenings and peak hours.",
            ],
          },
          {
            type: "paragraph",
            text: "Which you choose depends on your volume and margin. The calculation above makes the decision concrete: as long as the solution costs less than what you currently lose, doing nothing is the most expensive option.",
          },
          {
            type: "callout",
            text: "Pokkie answers every call, including when your hands are full, and books the appointment on the spot. Get a call from Pokkie to hear how that sounds for your business.",
          },
        ],
        faq: [
          {
            q: "How many calls does an average small business miss?",
            a: "It varies by industry, but businesses whose staff are serving customers during opening hours typically miss a meaningful share of inbound calls — especially during peak hours and outside opening times. Track one week in your phone log to get your own number.",
          },
          {
            q: "Will a customer call back if nobody answers?",
            a: "Usually not. A caller has an immediate need. If nobody picks up, they typically call the next business in the search results rather than trying you again later.",
          },
          {
            q: "Does online booking solve missed calls?",
            a: "It helps, but it does not fully solve it. A share of your customers prefer to call, especially for questions about availability, allergies, group sizes, or special requests. Those conversations don't disappear when you add a booking link.",
          },
        ],
      },
    },
  },
  {
    id: "ai-receptionist-vs-answering-service",
    published: "2026-07-28",
    readingMinutes: 7,
    translations: {
      nl: {
        slug: "ai-receptionist-of-antwoordservice",
        title: "AI-receptionist of antwoordservice: wat past bij jouw zaak?",
        description:
          "Een eerlijke vergelijking tussen een AI-receptionist, een klassieke antwoordservice en extra personeel — op kosten, snelheid en wat er echt geboekt wordt.",
        keywords: [
          "AI receptionist",
          "antwoordservice",
          "telefoonservice vergelijken",
          "telefoniste uitbesteden",
          "AI telefoonassistent",
        ],
        body: [
          {
            type: "paragraph",
            text: "Zodra je accepteert dat je te veel oproepen mist, komt de volgende vraag: wie neemt ze aan? Er zijn drie serieuze opties, en ze verschillen minder in prijs dan in wat er aan het einde van het gesprek daadwerkelijk gebeurt.",
          },
          {
            type: "heading",
            text: "De klassieke antwoordservice",
          },
          {
            type: "paragraph",
            text: "Een extern team neemt op onder jouw bedrijfsnaam, noteert de vraag en stuurt je een bericht. Het werkt, en voor complexe of gevoelige gesprekken is een mens nog steeds ongeëvenaard. Het knelpunt zit in wat er ná het gesprek moet gebeuren.",
          },
          {
            type: "list",
            items: [
              "De meeste diensten boeken niet rechtstreeks in jouw agenda — je krijgt een notitie en moet zelf terugbellen.",
              "Je betaalt per minuut of per gesprek, dus piekweken zijn onvoorspelbaar duur.",
              "De medewerker kent jouw menu, behandelingen of openingstijden niet zoals jij ze kent.",
            ],
          },
          {
            type: "paragraph",
            text: "Het resultaat is dat je de oproep niet mist, maar de boeking nog steeds handmatig moet afronden. Voor een deel van de bellers is dat één stap te veel.",
          },
          {
            type: "heading",
            text: "Extra personeel",
          },
          {
            type: "paragraph",
            text: "Iemand aannemen die de telefoon aanneemt is de meest complete oplossing en veruit de duurste. Belangrijker: het lost het probleem alleen op tijdens de uren dat die persoon werkt. De avondoproepen, de zondag, de vakantieweek — die blijven onbeantwoord.",
          },
          {
            type: "quote",
            text: "Personeel schaalt met diensten, niet met vraag. Je telefoon houdt zich daar niet aan.",
          },
          {
            type: "heading",
            text: "De AI-receptionist",
          },
          {
            type: "paragraph",
            text: "Een AI-receptionist neemt op, voert een normaal gesprek en rondt de handeling af waar de andere twee opties stoppen: de afspraak staat in de agenda voordat de beller ophangt. Er is geen wachtrij, want meerdere gesprekken tegelijk zijn geen probleem.",
          },
          {
            type: "list",
            items: [
              "24/7 bereikbaar, inclusief avonden, weekenden en feestdagen.",
              "Vaste maandprijs in plaats van kosten per minuut — piekweken kosten niet extra.",
              "Kent jouw behandelingen, openingstijden en veelgestelde vragen precies zoals je ze hebt ingesteld.",
              "Schakelt door naar een mens wanneer het gesprek daarom vraagt.",
            ],
          },
          {
            type: "paragraph",
            text: "De eerlijke beperking: voor een klacht, een gevoelig gesprek of een uitzonderlijk verzoek wil je een mens aan de lijn. Een goede AI-receptionist herkent dat en draagt over in plaats van door te modderen.",
          },
          {
            type: "heading",
            text: "Hoe je kiest",
          },
          {
            type: "steps",
            items: [
              "Kijk waar je oproepen vandaan komen: als een groot deel buiten openingstijden valt, vallen personeel en de meeste antwoordservices af.",
              "Kijk wat er moet gebeuren aan het einde van het gesprek. Is dat 'afspraak inplannen', dan telt directe agenda-integratie zwaarder dan wie er opneemt.",
              "Kijk naar je piekweken. Betaal je per minuut, dan zijn dat precies de weken waarin je rekening explodeert.",
              "Bel je eigen nummer buiten openingstijden en luister naar wat een klant hoort.",
            ],
          },
          {
            type: "paragraph",
            text: "Voor de meeste restaurants, salons en kleine praktijken valt de keuze op de combinatie: AI voor het volume aan routinegesprekken, een mens voor de uitzonderingen. Dat is goedkoper dan personeel en levert meer boekingen op dan een notitieblok.",
          },
          {
            type: "callout",
            text: "Wil je horen hoe een AI-receptionist voor jouw zaak klinkt? Laat Pokkie je bellen en beoordeel het gesprek zelf.",
          },
        ],
        faq: [
          {
            q: "Wat is het verschil tussen een AI-receptionist en een antwoordservice?",
            a: "Een antwoordservice neemt op en noteert de vraag, waarna jij zelf terugbelt om af te ronden. Een AI-receptionist voert het gesprek én rondt de handeling af — de afspraak staat in je agenda voordat de beller ophangt.",
          },
          {
            q: "Hoort een klant dat het geen mens is?",
            a: "Een moderne AI-receptionist voert een natuurlijk gesprek, zonder keuzemenu's. Bellers kunnen vragen stellen, tijden wijzigen en boeken in gewone spreektaal. Wees wel altijd transparant als een klant er expliciet naar vraagt.",
          },
          {
            q: "Kan een AI-receptionist doorschakelen naar een medewerker?",
            a: "Ja. Bij een klacht, een uitzonderlijk verzoek of een gesprek dat om menselijk oordeel vraagt, hoort de AI door te verbinden of een terugbelverzoek vast te leggen in plaats van zelf door te gaan.",
          },
        ],
      },
      en: {
        slug: "ai-receptionist-vs-answering-service",
        title: "AI receptionist vs answering service: which fits your business?",
        description:
          "An honest comparison of an AI receptionist, a traditional answering service, and hiring staff — on cost, speed, and what actually gets booked.",
        keywords: [
          "AI receptionist",
          "answering service",
          "virtual receptionist comparison",
          "call answering service",
          "AI phone assistant",
        ],
        body: [
          {
            type: "paragraph",
            text: "Once you accept that you're missing too many calls, the next question is who answers them. There are three serious options, and they differ less in price than in what actually happens by the end of the call.",
          },
          {
            type: "heading",
            text: "The traditional answering service",
          },
          {
            type: "paragraph",
            text: "An external team answers under your business name, notes the request, and sends you a message. It works, and for complex or sensitive conversations a human is still unmatched. The bottleneck is what has to happen after the call.",
          },
          {
            type: "list",
            items: [
              "Most services don't book directly into your calendar — you get a note and still have to call back.",
              "You pay per minute or per call, so peak weeks are unpredictably expensive.",
              "The agent doesn't know your menu, treatments, or opening hours the way you do.",
            ],
          },
          {
            type: "paragraph",
            text: "The result is that you don't miss the call, but you still have to close the booking manually. For a share of callers, that is one step too many.",
          },
          {
            type: "heading",
            text: "Hiring staff",
          },
          {
            type: "paragraph",
            text: "Hiring someone to answer the phone is the most complete option and by far the most expensive. More importantly, it only solves the problem during the hours that person works. Evening calls, Sundays, holiday weeks — those still go unanswered.",
          },
          {
            type: "quote",
            text: "Staff scale with shifts, not with demand. Your phone doesn't respect the rota.",
          },
          {
            type: "heading",
            text: "The AI receptionist",
          },
          {
            type: "paragraph",
            text: "An AI receptionist picks up, holds a normal conversation, and finishes the job where the other two options stop: the appointment is in the calendar before the caller hangs up. There's no queue, because several calls at once aren't a problem.",
          },
          {
            type: "list",
            items: [
              "Available 24/7, including evenings, weekends, and public holidays.",
              "Flat monthly pricing instead of per-minute billing — peak weeks don't cost extra.",
              "Knows your treatments, opening hours, and common questions exactly as you configured them.",
              "Hands off to a human when the conversation calls for it.",
            ],
          },
          {
            type: "paragraph",
            text: "The honest limitation: for a complaint, a sensitive conversation, or an unusual request, you want a person on the line. A good AI receptionist recognises that and transfers instead of muddling through.",
          },
          {
            type: "heading",
            text: "How to choose",
          },
          {
            type: "steps",
            items: [
              "Look at when your calls arrive: if a large share falls outside opening hours, staff and most answering services are ruled out.",
              "Look at what needs to happen at the end of the call. If it's 'book an appointment', direct calendar integration matters more than who picks up.",
              "Look at your peak weeks. If you pay per minute, those are exactly the weeks your bill explodes.",
              "Call your own number outside opening hours and listen to what a customer hears.",
            ],
          },
          {
            type: "paragraph",
            text: "For most restaurants, salons, and small practices the answer is a combination: AI for the volume of routine calls, a human for the exceptions. That is cheaper than hiring and books more than a notepad.",
          },
          {
            type: "callout",
            text: "Want to hear how an AI receptionist sounds for your business? Get a call from Pokkie and judge the conversation yourself.",
          },
        ],
        faq: [
          {
            q: "What's the difference between an AI receptionist and an answering service?",
            a: "An answering service picks up and takes a message, after which you call back to close the loop. An AI receptionist handles the conversation and completes the task — the appointment is in your calendar before the caller hangs up.",
          },
          {
            q: "Can customers tell it isn't a person?",
            a: "A modern AI receptionist holds a natural conversation without phone menus. Callers can ask questions, change times, and book in ordinary speech. Always be transparent if a customer asks directly.",
          },
          {
            q: "Can an AI receptionist transfer to a human?",
            a: "Yes. For a complaint, an unusual request, or a conversation that needs human judgement, the AI should transfer or capture a call-back request rather than pressing on alone.",
          },
        ],
      },
    },
  },
  {
    id: "restaurant-phone-availability",
    published: "2026-08-11",
    readingMinutes: 6,
    translations: {
      nl: {
        slug: "telefonische-bereikbaarheid-restaurants",
        title: "Telefonische bereikbaarheid voor restaurants: een praktische gids",
        description:
          "Reserveringen komen binnen op het drukste moment van je service. Zo houd je je restaurant bereikbaar zonder iemand van de vloer te halen.",
        keywords: [
          "telefonische bereikbaarheid restaurant",
          "reserveringen telefoon",
          "restaurant telefoon aannemen",
          "AI receptionist restaurant",
          "no-shows verminderen",
        ],
        body: [
          {
            type: "paragraph",
            text: "In een restaurant valt het telefoonvolume precies samen met de service. Tussen 18:00 en 20:00 wil iedereen tegelijk reserveren, wijzigen of vragen of er nog plek is — en op datzelfde moment staat je team op de vloer.",
          },
          {
            type: "heading",
            text: "Waar reserveringen sneuvelen",
          },
          {
            type: "list",
            items: [
              "Tijdens de piek: de telefoon gaat, niemand kan weg bij een tafel.",
              "Buiten openingstijden: gasten plannen 's avonds laat en op zondag.",
              "Bij wijzigingen: iemand wil een uur later, met twee personen extra.",
              "Bij vragen die geen reservering zijn: allergieën, parkeren, groepen, kaart.",
            ],
          },
          {
            type: "paragraph",
            text: "Die laatste categorie wordt structureel onderschat. Het zijn korte gesprekken, maar ze bezetten dezelfde lijn en dezelfde medewerker als een reservering van acht personen.",
          },
          {
            type: "heading",
            text: "Wat je vandaag kunt verbeteren",
          },
          {
            type: "steps",
            items: [
              "Zet je meest gestelde vragen — openingstijden, parkeren, allergieën, groepsbeleid — op één plek waar wie opneemt ze direct kan voorlezen.",
              "Beslis vooraf wie opneemt tijdens de piek, zodat het niet per toeval gebeurt.",
              "Zorg dat een gemiste oproep zichtbaar is, niet alleen hoorbaar: log ze en bekijk ze wekelijks.",
              "Bied altijd een tweede kanaal aan in je voicemailtekst, met een concrete belofte over reactietijd.",
            ],
          },
          {
            type: "paragraph",
            text: "Dit vermindert de schade, maar het lost het capaciteitsprobleem niet op. Zolang dezelfde persoon zowel gasten bedient als de telefoon aanneemt, verlies je bij elke piek één van beide.",
          },
          {
            type: "heading",
            text: "Waarom no-shows samenhangen met bereikbaarheid",
          },
          {
            type: "paragraph",
            text: "Een gast die wil afzeggen en niemand bereikt, zegt niet af. De tafel blijft geblokkeerd en komt niet terug in je boek. Bereikbaarheid is dus niet alleen een kanaal voor nieuwe reserveringen — het is ook hoe je bezetting terugwint die anders leeg blijft.",
          },
          {
            type: "quote",
            text: "Elke afzegging die je wél aanneemt, is een tafel die je opnieuw kunt verkopen.",
          },
          {
            type: "heading",
            text: "Waar een AI-receptionist past",
          },
          {
            type: "paragraph",
            text: "Voor een restaurant is de winst het duidelijkst bij precies die gesprekken die je nu mist: de tweede beller tijdens de piek, de reservering om 23:40, de wijziging op maandagochtend. Een AI-receptionist neemt die aan, beantwoordt de standaardvragen en legt de reservering vast — zonder dat iemand van de vloer moet.",
          },
          {
            type: "list",
            items: [
              "Meerdere gesprekken tegelijk, dus geen wachtrij tijdens de piek.",
              "Antwoorden op kaart-, allergie- en parkeervragen zonder een medewerker te onderbreken.",
              "Afzeggingen en wijzigingen worden aangenomen in plaats van gemist.",
              "Complexe verzoeken zoals privédiners gaan door naar een mens.",
            ],
          },
          {
            type: "callout",
            text: "Benieuwd hoe dit klinkt tijdens jouw service? Laat Pokkie je bellen en hoor een reservering van begin tot eind.",
          },
        ],
        faq: [
          {
            q: "Hoe houd ik mijn restaurant bereikbaar tijdens de piek?",
            a: "Wijs vooraf iemand aan die opneemt, leg standaardantwoorden klaar en zorg dat gemiste oproepen gelogd worden. Voor het volume dat je daarmee niet opvangt, is een AI-receptionist die meerdere gesprekken tegelijk aanneemt de meest praktische oplossing.",
          },
          {
            q: "Helpt online reserveren tegen gemiste telefoontjes?",
            a: "Deels. Online reserveren vangt de eenvoudige boekingen op, maar wijzigingen, groepsvragen en vragen over allergieën of parkeren komen nog steeds telefonisch binnen — juist tijdens de service.",
          },
          {
            q: "Kan een AI-receptionist vragen over de kaart beantwoorden?",
            a: "Ja, mits je die informatie hebt ingesteld. Openingstijden, allergie-informatie, parkeren en groepsbeleid zijn standaardvragen die zonder tussenkomst van een medewerker beantwoord kunnen worden.",
          },
        ],
      },
      en: {
        slug: "restaurant-phone-availability",
        title: "Phone availability for restaurants: a practical guide",
        description:
          "Reservations arrive at the busiest moment of your service. Here's how to stay reachable without pulling anyone off the floor.",
        keywords: [
          "restaurant phone availability",
          "restaurant reservations by phone",
          "restaurant answering service",
          "AI receptionist restaurant",
          "reduce no-shows",
        ],
        body: [
          {
            type: "paragraph",
            text: "In a restaurant, call volume lands exactly on top of service. Between 6pm and 8pm everyone wants to book, change, or ask whether there's a table left — and that is precisely when your team is on the floor.",
          },
          {
            type: "heading",
            text: "Where reservations get lost",
          },
          {
            type: "list",
            items: [
              "During the rush: the phone rings and nobody can leave a table.",
              "Outside opening hours: guests plan late at night and on Sundays.",
              "On changes: someone wants an hour later, with two extra people.",
              "On questions that aren't bookings: allergies, parking, groups, the menu.",
            ],
          },
          {
            type: "paragraph",
            text: "That last category is consistently underestimated. They're short calls, but they occupy the same line and the same staff member as a party of eight.",
          },
          {
            type: "heading",
            text: "What you can improve today",
          },
          {
            type: "steps",
            items: [
              "Put your most common questions — hours, parking, allergies, group policy — in one place whoever answers can read from directly.",
              "Decide in advance who answers during the rush, so it doesn't happen by accident.",
              "Make missed calls visible, not just audible: log them and review weekly.",
              "Always offer a second channel in your voicemail message, with a concrete promise about response time.",
            ],
          },
          {
            type: "paragraph",
            text: "This reduces the damage but doesn't solve the capacity problem. As long as the same person serves guests and answers the phone, every rush costs you one of the two.",
          },
          {
            type: "heading",
            text: "Why no-shows are an availability problem",
          },
          {
            type: "paragraph",
            text: "A guest who wants to cancel and can't reach anyone simply doesn't cancel. The table stays blocked and never returns to your book. Availability isn't only a channel for new reservations — it's how you recover covers that would otherwise sit empty.",
          },
          {
            type: "quote",
            text: "Every cancellation you actually answer is a table you get to sell twice.",
          },
          {
            type: "heading",
            text: "Where an AI receptionist fits",
          },
          {
            type: "paragraph",
            text: "For a restaurant the gain is clearest on exactly the calls you currently miss: the second caller during the rush, the 11:40pm booking, the Monday-morning change. An AI receptionist takes those, answers the standard questions, and records the reservation — without anyone leaving the floor.",
          },
          {
            type: "list",
            items: [
              "Several calls at once, so no queue during the rush.",
              "Answers menu, allergy, and parking questions without interrupting a staff member.",
              "Cancellations and changes get answered instead of missed.",
              "Complex requests like private dining are handed to a human.",
            ],
          },
          {
            type: "callout",
            text: "Curious how this sounds during your service? Get a call from Pokkie and hear a reservation handled end to end.",
          },
        ],
        faq: [
          {
            q: "How do I keep my restaurant reachable during the rush?",
            a: "Assign someone to answer in advance, prepare standard answers, and make sure missed calls are logged. For the volume that still slips through, an AI receptionist that handles several calls at once is the most practical fix.",
          },
          {
            q: "Does online booking stop missed calls?",
            a: "Partly. Online booking captures the simple reservations, but changes, group enquiries, and questions about allergies or parking still come in by phone — right in the middle of service.",
          },
          {
            q: "Can an AI receptionist answer questions about the menu?",
            a: "Yes, provided you've configured that information. Opening hours, allergy details, parking, and group policy are standard questions that can be answered without involving a staff member.",
          },
        ],
      },
    },
  },
  {
    id: "salon-ai-phone-assistant",
    published: "2026-08-19",
    readingMinutes: 5,
    translations: {
      nl: {
        slug: "ai-telefoonassistent-kapsalons-schoonheidssalons",
        title: "AI-telefoonassistent voor kapsalons en schoonheidssalons",
        description:
          "Je handen zitten in iemands haar als de telefoon gaat. Zo vang je die oproepen op zonder je behandeling te onderbreken.",
        keywords: [
          "AI telefoonassistent kapsalon",
          "schoonheidssalon telefoon",
          "afspraken inplannen salon",
          "AI receptionist beauty",
          "salon software telefoon",
        ],
        body: [
          {
            type: "paragraph",
            text: "In een salon is de reden voor gemiste oproepen letterlijk zichtbaar: je handen zitten in iemands haar, je bent bezig met een behandeling, of je staat af te rekenen. De telefoon opnemen betekent de klant voor je onderbreken.",
          },
          {
            type: "heading",
            text: "De onmogelijke keuze",
          },
          {
            type: "paragraph",
            text: "Neem je op, dan voelt de klant in de stoel zich minder belangrijk. Neem je niet op, dan boekt de beller ergens anders. Beide keuzes kosten geld — de ene direct, de andere onzichtbaar.",
          },
          {
            type: "quote",
            text: "Elke keer dat je de telefoon negeert kies je voor de klant die er al is. Dat is de juiste keuze, en hij kost je nog steeds omzet.",
          },
          {
            type: "heading",
            text: "Wat bellers bij een salon willen",
          },
          {
            type: "list",
            items: [
              "Een afspraak maken voor een specifieke behandeling en stylist.",
              "Verzetten of afzeggen, vaak op korte termijn.",
              "Vragen naar prijs, duur of wat een behandeling inhoudt.",
              "Weten of er vandaag of morgen nog plek is.",
            ],
          },
          {
            type: "paragraph",
            text: "Dat zijn stuk voor stuk gesprekken met een vast patroon. Precies daarom zijn ze geschikt om automatisch te laten afhandelen: er is weinig ruimte voor verrassingen zolang je behandelingen, duur en beschikbaarheid goed staan ingesteld.",
          },
          {
            type: "heading",
            text: "Waarom afzeggingen belangrijker zijn dan ze lijken",
          },
          {
            type: "paragraph",
            text: "Een klant die op tijd afzegt geeft je de kans het gaatje opnieuw te vullen. Bereikt die klant niemand, dan wordt het een no-show en staat je stoel leeg op een tijdslot dat je had kunnen verkopen. Bereikbaarheid voor afzeggingen is dus direct bezettingsgraad.",
          },
          {
            type: "heading",
            text: "Wat je zou moeten instellen",
          },
          {
            type: "steps",
            items: [
              "Zet je behandelingen met de juiste duur klaar, inclusief varianten per stylist.",
              "Leg je annuleringsbeleid vast in duidelijke taal, zodat het bij elke afzegging hetzelfde klinkt.",
              "Bepaal welke gesprekken altijd naar een mens gaan — klachten en correcties horen daarbij.",
              "Laat bevestigingen automatisch versturen, zodat no-shows verder dalen.",
            ],
          },
          {
            type: "paragraph",
            text: "Als dat staat, wordt de avondoproep die vroeger in voicemail verdween een boeking die er 's ochtends gewoon in staat. Dat is het verschil tussen bereikbaar zijn en beschikbaar zijn.",
          },
          {
            type: "callout",
            text: "Pokkie neemt op terwijl jij doorwerkt en boekt de afspraak meteen in. Laat Pokkie je bellen en hoor het zelf.",
          },
        ],
        faq: [
          {
            q: "Kan een AI-telefoonassistent afspraken inplannen per stylist?",
            a: "Ja, mits je per behandeling en per stylist de duur en beschikbaarheid hebt ingesteld. De assistent kan dan een passend tijdslot aanbieden in plaats van alleen een terugbelverzoek te noteren.",
          },
          {
            q: "Wat gebeurt er bij een klacht of een correctie?",
            a: "Dat soort gesprekken hoort naar een mens te gaan. Stel vooraf in welke onderwerpen altijd worden doorgeschakeld of als terugbelverzoek worden vastgelegd.",
          },
          {
            q: "Helpt dit tegen no-shows?",
            a: "Ja, op twee manieren: afzeggingen worden daadwerkelijk aangenomen zodat je het tijdslot opnieuw kunt vullen, en automatische bevestigingen verlagen het aantal vergeten afspraken.",
          },
        ],
      },
      en: {
        slug: "ai-phone-assistant-hair-beauty-salons",
        title: "AI phone assistant for hair and beauty salons",
        description:
          "Your hands are in someone's hair when the phone rings. Here's how to catch those calls without interrupting the treatment.",
        keywords: [
          "AI phone assistant salon",
          "beauty salon phone answering",
          "salon appointment booking",
          "AI receptionist beauty",
          "hair salon missed calls",
        ],
        body: [
          {
            type: "paragraph",
            text: "In a salon the reason for missed calls is literally visible: your hands are in someone's hair, you're mid-treatment, or you're taking payment. Answering the phone means interrupting the client in front of you.",
          },
          {
            type: "heading",
            text: "The impossible choice",
          },
          {
            type: "paragraph",
            text: "Answer, and the client in the chair feels less important. Don't answer, and the caller books elsewhere. Both choices cost money — one immediately, the other invisibly.",
          },
          {
            type: "quote",
            text: "Every time you ignore the phone you're choosing the client already in front of you. That's the right call, and it still costs you revenue.",
          },
          {
            type: "heading",
            text: "What salon callers actually want",
          },
          {
            type: "list",
            items: [
              "To book a specific treatment with a specific stylist.",
              "To reschedule or cancel, often at short notice.",
              "To ask about price, duration, or what a treatment involves.",
              "To find out whether there's anything left today or tomorrow.",
            ],
          },
          {
            type: "paragraph",
            text: "Every one of those follows a fixed pattern. That is exactly why they're suited to automatic handling: there's little room for surprises as long as your treatments, durations, and availability are configured properly.",
          },
          {
            type: "heading",
            text: "Why cancellations matter more than they look",
          },
          {
            type: "paragraph",
            text: "A client who cancels in time gives you a chance to refill the slot. If that client can't reach anyone, it becomes a no-show and your chair sits empty during a slot you could have sold. Being reachable for cancellations is chair utilisation.",
          },
          {
            type: "heading",
            text: "What you should configure",
          },
          {
            type: "steps",
            items: [
              "Set up your treatments with correct durations, including variations per stylist.",
              "Write your cancellation policy in plain language so it sounds identical on every call.",
              "Decide which conversations always go to a human — complaints and corrections belong there.",
              "Send confirmations automatically so no-shows keep dropping.",
            ],
          },
          {
            type: "paragraph",
            text: "Once that's in place, the evening call that used to die in voicemail becomes a booking that's simply there in the morning. That's the difference between being reachable and being available.",
          },
          {
            type: "callout",
            text: "Pokkie answers while you keep working and books the appointment on the spot. Get a call from Pokkie and hear it for yourself.",
          },
        ],
        faq: [
          {
            q: "Can an AI phone assistant book appointments per stylist?",
            a: "Yes, provided you've configured duration and availability per treatment and per stylist. The assistant can then offer a suitable slot instead of only taking a call-back request.",
          },
          {
            q: "What happens with a complaint or a correction?",
            a: "Those conversations should go to a human. Configure in advance which topics are always transferred or captured as a call-back request.",
          },
          {
            q: "Does this help with no-shows?",
            a: "Yes, in two ways: cancellations actually get answered so you can refill the slot, and automatic confirmations reduce forgotten appointments.",
          },
        ],
      },
    },
  },
];

/** Newest first — the blog index and sitemap both rely on this ordering. */
export function getSortedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.published.localeCompare(a.published));
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.translations[locale].slug === slug);
}
