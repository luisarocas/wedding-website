const RSVP_URL = "rsvp.html";
const WEDDING_DATE = "2027-05-30T14:00:00+02:00";

const copy = {
  en: {
    brand: "Phillip & Luis",
    navHome: "Home",
    navSchedule: "Details",
    navHotels: "Stay",
    navTravel: "Travel",
    navThings: "Things to Do",
    navAttire: "Attire",
    navFaq: "FAQ",
    rsvp: "RSVP",
    heroKicker: "Together with their families",
    firstName: "Luis Arocas",
    secondName: "Phillip Pratt",
    date: "May 30, 2027",
    place: "Hoyo de Manzanares, Madrid",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    heroThingsLink: "See welcome drinks and the Madrid walking tour",
    banner: "We can't wait to celebrate with you. RSVPs for our celebration in Spain will open in August 2026.",
    overviewKicker: "Weekend at a glance",
    overviewTitle: "Weekend Overview",
    overviewFridayTitle: "Friday",
    overviewFridayBody: "Welcome Drinks, around 7:00 PM. Optional, with more details to come.",
    overviewSaturdayTitle: "Saturday",
    overviewSaturdayBody: "Madrid Walking Tour, around 12:00 PM. Optional, with more details to come.",
    overviewSundayTitle: "Sunday",
    overviewSundayBody: "Ceremony begins at 5:00 PM, followed by cocktails, dinner, music, and dancing.",
    scheduleKicker: "The celebration",
    scheduleTitle: "Details",
    scheduleCardTitle: "Schedule",
    scheduleBody:
      "The ceremony will begin at 5:00 PM. Afterwards, we'll continue with cocktails, dinner, music, and dancing.",
    venueTitle: "La finca de San Antonio",
    venueAddress: "M-618, Hoyo de Manzanares, MD 28240, Spain",
    attire: "Formal attire",
    mapLink: "View map",
    hotelsKicker: "Near the venue",
    hotelsTitle: "Stay",
    hotelsBody:
      "If you're spending a few days in Madrid, we'd recommend staying in the city so you can enjoy it fully. If you're only coming for a shorter visit, staying closer to the venue may be the easiest option.",
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
    travelKicker: "For out-of-town guests",
    travelTitle: "Travel",
    travelBody:
      "If you'll be coming from farther away, we recommend booking flights to Madrid 6-9 months in advance for the best prices and availability.",
    travelThingsLink: "See things to do in Madrid",
    airportTitle: "Airport",
    airportBody: "Madrid-Barajas Airport is the main international airport for guests flying in.",
    arrivalTitle: "Arrival",
    arrivalBody:
      "We recommend arriving at least one day before the wedding. Two days before is ideal if you're coming from abroad.",
    faqKicker: "Good to know",
    faqTitle: "FAQ",
    faqIntro: "If you have any additional questions, please feel free to text us directly.",
    faqOneQ: "When should I RSVP?",
    faqOneA:
      "RSVPs will open in August 2026. The deadline to respond will be February 2027. We encourage you to reply as soon as possible once RSVPs open to help us with planning.",
    faqTwoQ: "What is the dress code?",
    faqTwoA:
      "We invite our guests to dress in formal attire for the celebration. Gentlemen are encouraged to wear a suit and tie, ideally in darker tones. Ladies may choose a formal dress or an elegant tailored set. Dresses may be midi to floor length.",
    faqTwoLink: "If you'd like a few examples, you can view attire inspiration here.",
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
    navSchedule: "Detalles",
    navHotels: "Alojamiento",
    navTravel: "Viaje",
    navThings: "Cosas que hacer",
    navAttire: "Vestimenta",
    navFaq: "Preguntas",
    rsvp: "RSVP",
    heroKicker: "Junto a sus familias",
    firstName: "Luis Arocas",
    secondName: "Phillip Pratt",
    date: "30 de mayo de 2027",
    place: "Hoyo de Manzanares, Madrid",
    days: "d\u00edas",
    hours: "horas",
    minutes: "minutos",
    heroThingsLink: "Ver los welcome drinks y el Madrid walking tour",
    banner: "Tenemos muchas ganas de celebrarlo con vosotros. Podr\u00e9is confirmar vuestra asistencia a partir de agosto de 2026.",
    overviewKicker: "Resumen del fin de semana",
    overviewTitle: "Weekend at a Glance",
    overviewFridayTitle: "Viernes",
    overviewFridayBody: "Welcome Drinks, sobre las 19:00. Opcional, con más detalles por confirmar.",
    overviewSaturdayTitle: "Sábado",
    overviewSaturdayBody: "Madrid Walking Tour, sobre las 12:00. Opcional, con más detalles por confirmar.",
    overviewSundayTitle: "Domingo",
    overviewSundayBody: "La ceremonia comienza a las 17:00, seguida de cóctel, cena, música y baile.",
    scheduleKicker: "La celebraci\u00f3n",
    scheduleTitle: "Detalles",
    scheduleCardTitle: "Horario",
    scheduleBody:
      "La ceremonia comenzar\u00e1 a las 17:00. Despu\u00e9s, continuaremos con c\u00f3ctel, cena, m\u00fasica y baile.",
    venueTitle: "La finca de San Antonio",
    venueAddress: "M-618, Hoyo de Manzanares, MD 28240, Espa\u00f1a",
    attire: "Vestimenta formal",
    mapLink: "Ver mapa",
    hotelsKicker: "Cerca de la finca",
    hotelsTitle: "Alojamiento",
    hotelsBody:
      "Si vais a pasar varios d\u00edas en Madrid, os recomendamos alojaros en la ciudad para disfrutarla bien. Si ven\u00eds solo para una visita m\u00e1s corta, quedaros m\u00e1s cerca de la finca puede ser la opci\u00f3n m\u00e1s c\u00f3moda.",
    hotelPaxTitle: "Hotel Pax Torrelodones",
    hotelOne: "Recomendado si quer\u00e9is alojaros cerca de la finca y minimizar desplazamientos.",
    hotelExeTitle: "Hotel EXE Moncloa",
    hotelTwo:
      "Una buena opci\u00f3n si prefer\u00eds estar m\u00e1s cerca de Madrid y seguir teniendo acceso c\u00f3modo a la finca.",
    shuttleTitle: "Autob\u00fas",
    hotelThree:
      "Habr\u00e1 servicio de autob\u00fas desde ambos hoteles hasta el lugar del evento y de regreso. Compartiremos m\u00e1s detalles m\u00e1s adelante.",
    hotelPaxLink: "Ver hotel",
    hotelExeLink: "Ver hotel",
    travelKicker: "Para quienes ven\u00eds de fuera",
    travelTitle: "Viaje",
    travelBody:
      "En caso de que teng\u00e1is que viajar para la boda, recomendamos reservar vuelos a Madrid con 6-9 meses de antelaci\u00f3n para conseguir mejores precios y disponibilidad.",
    travelThingsLink: "Ver cosas que hacer en Madrid",
    airportTitle: "Aeropuerto",
    airportBody: "El Aeropuerto Madrid-Barajas es el principal aeropuerto internacional para los invitados.",
    arrivalTitle: "Llegada",
    arrivalBody:
      "Recomendamos llegar al menos un d\u00eda antes de la boda. Si viaj\u00e1is desde el extranjero, lo ideal es llegar dos d\u00edas antes.",
    faqKicker: "Informaci\u00f3n \u00fatil",
    faqTitle: "Preguntas",
    faqIntro: "Si ten\u00e9is alguna otra pregunta, no dud\u00e9is en escribirnos directamente.",
    faqOneQ: "\u00bfCu\u00e1ndo debemos confirmar asistencia?",
    faqOneA:
      "Las confirmaciones se abrir\u00e1n en agosto de 2026. La fecha l\u00edmite para responder ser\u00e1 en febrero de 2027. Os animamos a confirmar cuanto antes para ayudarnos con la organizaci\u00f3n.",
    faqTwoQ: "\u00bfCu\u00e1l es el c\u00f3digo de vestimenta?",
    faqTwoA:
      "Os invitamos a vestir de etiqueta formal para la celebraci\u00f3n. Los caballeros pueden llevar traje y corbata, idealmente en tonos oscuros. Las mujeres pueden elegir un vestido formal o un conjunto elegante. Los vestidos pueden ser midi o largos.",
    faqTwoLink: "Si quer\u00e9is ver algunos ejemplos, pod\u00e9is consultar la inspiraci\u00f3n de vestimenta aqu\u00ed.",
    faqThreeQ: "\u00bfHabr\u00e1 transporte?",
    faqThreeA:
      "S\u00ed. Habr\u00e1 transporte al lugar de la boda y de regreso al final de la noche. Compartiremos los detalles y horarios m\u00e1s cerca de la fecha.",
    faqFourQ: "\u00bfCu\u00e1ndo deber\u00edamos reservar vuelos a Madrid?",
    faqFourA:
      "Recomendamos reservar con 6-9 meses de antelaci\u00f3n para conseguir mejores precios y disponibilidad.",
    faqFiveQ: "\u00bfQu\u00e9 pasa si no podemos asistir?",
    faqFiveA:
      "Entendemos completamente que viajar internacionalmente no es posible para todos. Estamos planeando una celebraci\u00f3n aparte en Chicago, con fecha por determinar, para quienes no puedan acompa\u00f1arnos en Espa\u00f1a. Aun as\u00ed, agradecemos vuestro cari\u00f1o y apoyo en cualquier forma.",
    faqSixQ: "\u00bfCu\u00e1ndo deber\u00edamos llegar?",
    faqSixA:
      "Recomendamos llegar al menos un d\u00eda antes de la boda para instalaros y adaptaros al viaje. Si ven\u00eds del extranjero, lo ideal es llegar dos d\u00edas antes.",
    faqSevenQ: "\u00bfLa boda ser\u00e1 interior o exterior?",
    faqSevenA: "La ceremonia ser\u00e1 al aire libre, si el clima lo permite, seguida de una recepci\u00f3n en interior. Por favor, planificad en consecuencia.",
    faqEightQ: "\u00bfNecesidades alimentarias especiales?",
    faqEightA: "Indicad cualquier restricci\u00f3n alimentaria al confirmar vuestra asistencia, e intentaremos acomodarla.",
  },
};

const gate = document.querySelector("#languageGate");
const toggle = document.querySelector("#languageToggle");
const backToTop = document.querySelector("#backToTop");
const sectionMenu = document.querySelector("#sectionMenu");
const sectionMenuToggle = document.querySelector("#sectionMenuToggle");
const rsvpLinks = [document.querySelector("#rsvpHeaderLink"), document.querySelector("#rsvpHeroLink")];
const faqItems = Array.from(document.querySelectorAll(".faq-list details"));
const mobileFaqMedia = window.matchMedia("(max-width: 540px)");

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

function syncFaqState() {
  const shouldOpen = !mobileFaqMedia.matches;
  faqItems.forEach((item) => {
    item.open = shouldOpen;
  });
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

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

sectionMenuToggle.addEventListener("click", () => {
  sectionMenu.classList.toggle("is-open");
});

sectionMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    sectionMenu.classList.remove("is-open");
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
  if (window.scrollY > 200) {
    sectionMenu.classList.remove("is-open");
  }
});

mobileFaqMedia.addEventListener("change", syncFaqState);

rsvpLinks.forEach((link) => {
  link.href = RSVP_URL;
});

if (localStorage.getItem("wedding-language")) {
  gate.classList.add("is-hidden");
}

setLanguage(language);
syncFaqState();
updateCountdown();
setInterval(updateCountdown, 60_000);
