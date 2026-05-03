const RSVP_URL = "https://www.zola.com/wedding/luisandphil/rsvp";
const WEDDING_DATE = "2027-05-30T14:00:00+02:00";

const copy = {
  en: {
    brand: "Phillip & Luis",
    navHome: "Home",
    navSchedule: "Schedule & Location",
    navHotels: "Hotels & Shuttle",
    navTravel: "Travel to Madrid",
    navFaq: "FAQs",
    rsvp: "RSVP",
    heroKicker: "Together with their families",
    firstName: "Luis Arocas",
    secondName: "Phillip Pratt",
    date: "May 30, 2027",
    place: "Madrid, Spain",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    banner: "We can’t wait to celebrate with you. RSVPs for our celebration in Spain will open in August 2026.",
    scheduleKicker: "The celebration",
    scheduleTitle: "Schedule & Location",
    scheduleCardTitle: "Ceremony & Celebration",
    scheduleBody:
      "The ceremony will begin at 2:00 PM. Afterwards, we’ll continue with cocktails, appetizers, dinner, music, and dancing until midnight.",
    ceremonyTime: "2:00 PM",
    ceremonyTitle: "Ceremony",
    ceremonyBody: "The ceremony will begin at 2PM.",
    dinnerTime: "After the ceremony",
    dinnerTitle: "Celebration",
    dinnerBody:
      "After the ceremony, there will be a cocktail hour with food and snacks, followed by a formal dinner, music, and dancing until midnight.",
    venueTitle: "La finca de San Antonio",
    venueAddress: "M-618, Hoyo de Manzanares, MD 28240, Spain",
    attire: "Formal attire",
    mapLink: "View map",
    hotelsKicker: "Stay close",
    hotelsTitle: "Hotels & Shuttle",
    hotelsBody:
      "Our venue is located in Hoyo de Manzanares, about 30-40 minutes outside the city. Renting a car can be helpful if you plan to explore the area, and parking will be available at the venue, but driving is not necessary for the wedding.",
    hotelPaxTitle: "Hotel Pax Torrelodones",
    hotelOne: "Recommended if you'd like to stay close to the wedding venue and minimize travel.",
    hotelExeTitle: "Hotel EXE Moncloa",
    hotelTwo:
      "A great option if you prefer being closer to Madrid city while still having convenient access to the venue.",
    shuttleTitle: "Shuttle",
    hotelThree:
      "A shuttle service will take guests from both hotels to the venue and back. More details will be shared closer to the wedding date.",
    hotelPaxLink: "View hotel",
    hotelExeLink: "View hotel",
    travelKicker: "For guests flying in",
    travelTitle: "Travel to Madrid",
    travelBody:
      "If you need to travel for the wedding, we recommend booking flights to Madrid 6-9 months in advance for the best prices and availability.",
    airportTitle: "Airport",
    airportBody: "Madrid-Barajas Airport is the main international airport for guests flying in.",
    arrivalTitle: "Arrival",
    arrivalBody:
      "We recommend arriving at least one day before the wedding. Two days before is ideal if you're coming from abroad.",
    faqKicker: "Good to know",
    faqTitle: "FAQs",
    faqIntro: "If you have any additional questions, please feel free to text us directly.",
    faqOneQ: "When should I RSVP?",
    faqOneA:
      "RSVPs will open in August 2026. The deadline to respond will be February 2027. We encourage you to reply as soon as possible once RSVPs open to help us with planning.",
    faqTwoQ: "What is the dress code?",
    faqTwoA:
      "We invite our guests to dress in formal attire for the celebration. Gentlemen are encouraged to wear a suit and tie, ideally in darker tones. Ladies may choose a formal dress or an elegant tailored set. Dresses may be midi to floor length.",
    faqThreeQ: "Will transportation be provided?",
    faqThreeA:
      "Yes. Transportation will be provided to the venue and back at the end of the night. Details and timing will be shared closer to the date.",
    faqFourQ: "When should we book our flights to Madrid?",
    faqFourA:
      "We recommend booking 6-9 months in advance for the best prices and availability. If you've received a Save the Date, you can feel comfortable making travel plans.",
    faqFiveQ: "What if I cannot attend?",
    faqFiveA:
      "We completely understand that international travel isn't possible for everyone. We're planning a separate celebration in Chicago, date to be determined, for those who can't join us in Spain, but please know we're grateful for your love and support in any form.",
    faqSixQ: "When should I arrive?",
    faqSixA:
      "We recommend arriving at least one day before the wedding to allow time to settle in and adjust to travel. If you're coming from abroad, arriving two days before is ideal.",
    faqSevenQ: "Is the wedding indoors or outdoors?",
    faqSevenA: "The ceremony will be held outdoors, weather permitting, followed by an indoor reception. Please plan accordingly.",
    faqEightQ: "Special dietary needs?",
    faqEightA: "Please indicate any dietary restrictions when you RSVP, and we will do our best to accommodate you.",
  },
  es: {
    brand: "Phillip & Luis",
    navHome: "Inicio",
    navSchedule: "Programa y lugar",
    navHotels: "Hoteles y autobús",
    navTravel: "Viaje a Madrid",
    navFaq: "Preguntas",
    rsvp: "RSVP",
    heroKicker: "Junto a sus familias",
    firstName: "Luis Arocas",
    secondName: "Phillip Pratt",
    date: "30 de mayo de 2027",
    place: "Hoyo de Manzanares, Madrid",
    days: "días",
    hours: "horas",
    minutes: "minutos",
    banner: "Tenemos muchas ganas de celebrarlo con vosotros. Podréis confirmar vuestra asistencia a partir de agosto de 2026.",
    scheduleKicker: "La celebración",
    scheduleTitle: "Programa y lugar",
    scheduleCardTitle: "Ceremonia y celebración",
    scheduleBody:
      "La ceremonia comenzará a las 14:00. Después, continuaremos con cóctel, aperitivos, cena, música y baile hasta medianoche.",
    ceremonyTime: "14:00",
    ceremonyTitle: "Ceremonia",
    ceremonyBody: "La ceremonia comenzará a las 14:00.",
    dinnerTime: "Después de la ceremonia",
    dinnerTitle: "Celebración",
    dinnerBody:
      "Después, continuaremos con cóctel, aperitivos, cena, música y baile hasta medianoche.",
    venueTitle: "La finca de San Antonio",
    venueAddress: "M-618, Hoyo de Manzanares, MD 28240, España",
    attire: "Vestimenta formal",
    mapLink: "Ver mapa",
    hotelsKicker: "Quedaos cerca",
    hotelsTitle: "Hoteles y autobús",
    hotelsBody:
      "La finca está en Hoyo de Manzanares, a unos 30-40 minutos de Madrid. Habrá aparcamiento disponible, así que podéis venir en coche si queréis o utilizar el autobús.",
    hotelPaxTitle: "Hotel Pax Torrelodones",
    hotelOne: "Recomendado si queréis alojaros cerca de la finca y minimizar desplazamientos.",
    hotelExeTitle: "Hotel EXE Moncloa",
    hotelTwo:
      "Una buena opción si preferís estar más cerca de Madrid y seguir teniendo acceso cómodo a la finca.",
    shuttleTitle: "Autobús",
    hotelThree:
      "Habrá servicio de autobús desde ambos hoteles hasta el lugar del evento y de regreso. Compartiremos más detalles más adelante.",
    hotelPaxLink: "Ver hotel",
    hotelExeLink: "Ver hotel",
    travelKicker: "Para quienes vuelan",
    travelTitle: "Viaje a Madrid",
    travelBody:
      "En caso de que tengáis que viajar para la boda, recomendamos reservar vuelos a Madrid con 6-9 meses de antelación para conseguir mejores precios y disponibilidad.",
    airportTitle: "Aeropuerto",
    airportBody: "El Aeropuerto Madrid-Barajas es el principal aeropuerto internacional para los invitados.",
    arrivalTitle: "Llegada",
    arrivalBody:
      "Recomendamos llegar al menos un día antes de la boda. Si viajáis desde el extranjero, lo ideal es llegar dos días antes.",
    faqKicker: "Información útil",
    faqTitle: "Preguntas frecuentes",
    faqIntro: "Si tenéis alguna otra pregunta, no dudéis en escribirnos directamente.",
    faqOneQ: "¿Cuándo debemos confirmar asistencia?",
    faqOneA:
      "Las confirmaciones se abrirán en agosto de 2026. La fecha límite para responder será en febrero de 2027. Os animamos a confirmar cuanto antes para ayudarnos con la organización.",
    faqTwoQ: "¿Cuál es el código de vestimenta?",
    faqTwoA:
      "Os invitamos a vestir de etiqueta formal para la celebración. Los caballeros pueden llevar traje y corbata, idealmente en tonos oscuros. Las mujeres pueden elegir un vestido formal o un conjunto elegante. Los vestidos pueden ser midi o largos.",
    faqThreeQ: "¿Habrá transporte?",
    faqThreeA:
      "Sí. Habrá transporte al lugar de la boda y de regreso al final de la noche. Compartiremos los detalles y horarios más cerca de la fecha.",
    faqFourQ: "¿Cuándo deberíamos reservar vuelos a Madrid?",
    faqFourA:
      "Recomendamos reservar con 6-9 meses de antelación para conseguir mejores precios y disponibilidad.",
    faqFiveQ: "¿Qué pasa si no podemos asistir?",
    faqFiveA:
      "Entendemos completamente que viajar internacionalmente no es posible para todos. Estamos planeando una celebración aparte en Chicago, con fecha por determinar, para quienes no puedan acompañarnos en España. Aun así, agradecemos vuestro cariño y apoyo en cualquier forma.",
    faqSixQ: "¿Cuándo deberíamos llegar?",
    faqSixA:
      "Recomendamos llegar al menos un día antes de la boda para instalaros y adaptaros al viaje. Si venís del extranjero, lo ideal es llegar dos días antes.",
    faqSevenQ: "¿La boda será interior o exterior?",
    faqSevenA: "La ceremonia será al aire libre, si el clima lo permite, seguida de una recepción en interior. Por favor, planificad en consecuencia.",
    faqEightQ: "¿Necesidades alimentarias especiales?",
    faqEightA: "Indicad cualquier restricción alimentaria al confirmar vuestra asistencia, e intentaremos acomodarla.",
  },
};

const gate = document.querySelector("#languageGate");
const toggle = document.querySelector("#languageToggle");
const rsvpLinks = [document.querySelector("#rsvpHeaderLink"), document.querySelector("#rsvpHeroLink")];

let language = localStorage.getItem("wedding-language") || "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = nextLanguage;
  localStorage.setItem("wedding-language", nextLanguage);
  toggle.textContent = nextLanguage === "en" ? "ES" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = copy[nextLanguage][key];
  });
}

function updateCountdown() {
  const diff = new Date(WEDDING_DATE).getTime() - Date.now();
  const remaining = Math.max(diff, 0);
  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);

  document.querySelector("#days").textContent = String(days).padStart(3, "0");
  document.querySelector("#hours").textContent = String(hours).padStart(2, "0");
  document.querySelector("#minutes").textContent = String(minutes).padStart(2, "0");
}

document.querySelectorAll("[data-language-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageChoice);
    gate.classList.add("is-hidden");
  });
});

toggle.addEventListener("click", () => {
  setLanguage(language === "en" ? "es" : "en");
});

rsvpLinks.forEach((link) => {
  link.href = RSVP_URL;
});

if (localStorage.getItem("wedding-language")) {
  gate.classList.add("is-hidden");
}

setLanguage(language);
updateCountdown();
setInterval(updateCountdown, 60_000);
