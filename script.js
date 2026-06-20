const RSVP_URL = "rsvp.html";
const WEDDING_DATE = "2027-05-30T17:00:00+02:00";

const copy = {
  en: {
    brand: "Phillip & Luis",
    navHome: "Home",
    navHomeMobile: "Home",
    navBigDay: "The Big Day",
    navBigDayMobile: "Big Day",
    navThings: "Things to Do",
    navThingsMobile: "Plans",
    navAttire: "Attire",
    navAttireMobile: "Attire",
    navFaq: "FAQ",
    navFaqMobile: "FAQ",
    rsvp: "RSVP",
    heroKicker: "Together with their families",
    firstName: "Luis Arocas",
    secondName: "Phillip Pratt",
    date: "May 30, 2027",
    place: "Hoyo de Manzanares, Madrid",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    banner: "We can't wait to celebrate with you. RSVPs for our celebration in Spain will open in August 2026.",
    summaryKicker: "Everything in one place",
    summaryTitle: "The Big Day",
    summaryBody:
      "You'll find the full schedule, venue details, travel notes, accommodation suggestions, weekend overview, and gift information on our Big Day page.",
    summaryButton: "See The Big Day",
  },
  es: {
    brand: "Phillip & Luis",
    navHome: "Inicio",
    navHomeMobile: "Inicio",
    navBigDay: "El gran día",
    navBigDayMobile: "Gran día",
    navThings: "Cosas que hacer",
    navThingsMobile: "Planes",
    navAttire: "Vestimenta",
    navAttireMobile: "Vestir",
    navFaq: "Preguntas",
    navFaqMobile: "FAQ",
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
    summaryKicker: "Todo en un mismo lugar",
    summaryTitle: "El gran día",
    summaryBody:
      "En la página de El gran día encontraréis el horario completo, los detalles de la finca, información de viaje, opciones de alojamiento, el resumen del fin de semana y la información sobre regalos.",
    summaryButton: "Ver El gran día",
  },
};

const gate = document.querySelector("#languageGate");
const toggle = document.querySelector("#languageToggle");
const backToTop = document.querySelector("#backToTop");
const sectionMenu = document.querySelector("#sectionMenu");
const sectionMenuToggle = document.querySelector("#sectionMenuToggle");
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

rsvpLinks.forEach((link) => {
  link.href = RSVP_URL;
});

if (localStorage.getItem("wedding-language")) {
  gate.classList.add("is-hidden");
}

setLanguage(language);
updateCountdown();
setInterval(updateCountdown, 60_000);
