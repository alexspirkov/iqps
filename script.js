const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    home_title: "International Quicksand Preservation Society",
    home_mission: "Preserving what the world has chosen to forget.",
    home_body_1: "For decades, quicksand occupied a central place in our collective imagination.",
    home_body_2: "And then, without explanation, it vanished.",
    home_body_3: "IQPS exists to ensure quicksand is never forgotten.",
    about_title: "About the Society",
    about_body_1: "Founded by concerned observers, IQPS responds to the unexplained decline of quicksand.",
    about_body_2: "Once a defining hazard of adventure narratives, it has been quietly removed.",
    about_body_3: "We document, preserve, and advocate for awareness."
  },
  ru: {
    nav_home: "Главная",
    nav_about: "О нас",
    home_title: "Международное общество по сохранению зыбучих песков",
    home_mission: "Сохраняя то, о чём мир решил забыть.",
    home_body_1: "На протяжении десятилетий зыбучие пески занимали важное место в нашем воображении.",
    home_body_2: "А затем, без объяснений, они исчезли.",
    home_body_3: "МОСЗП существует, чтобы они не были забыты.",
    about_title: "О обществе",
    about_body_1: "Основано обеспокоенными наблюдателями в ответ на исчезновение зыбучих песков.",
    about_body_2: "Когда-то ключевая опасность приключенческих историй.",
    about_body_3: "Мы документируем и сохраняем осознание этого явления."
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
}

const savedLang = localStorage.getItem("lang") || "en";
setLang(savedLang);
