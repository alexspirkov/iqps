const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    home_title: "International Quicksand Preservation Society",
    home_mission: "Preserving what the world has chosen to forget.",
    home_body_1: "For decades, quicksand was a common and well-documented natural hazard, encountered across diverse environments and frequently appearing in popular media.",
    home_body_2: "In recent decades, naturally occurring quicksand formations have declined significantly due to land development, drainage, and environmental stabilization efforts.",
    home_body_3: "As real-world occurrences diminished, public awareness — including representation in media and education — declined accordingly.",
    home_body_4: "IQPS is dedicated to the identification, protection, and responsible preservation of remaining quicksand sites.",
    about_title: "About the Society",
    about_body_1: "IQPS was established by concerned observers in response to the documented global decline of naturally occurring quicksand formations.",
    about_body_2: "IQPS works to survey existing locations, promote protective status where appropriate, and support research into the environmental conditions required for sustainable quicksand formation.",
    about_body_3: "The Society advocates for balanced land management practices that recognize the ecological, cultural and educational value of naturally occurring sedimentary hazards."
  },
  ru: {
    nav_home: "Главная",
    nav_about: "О нас",
    home_title: "Международное общество по сохранению зыбучих песков",
    home_mission: "Сохраняя то, о чём мир решил забыть.",
    home_body_1: "На протяжении десятилетий зыбучие пески являлись распространённой и хорошо задокументированной природной опасностью, встречавшейся в различных ландшафтах и отражённой в поп культуре.",
    home_body_2: "В последние десятилетия количество естественных очагов зыбучих песков существенно сократилось вследствие освоения территорий, осушения и стабилизации окружающей среды.",
    home_body_3: "По мере сокращения реальных проявлений снизился и уровень общественной осведомлённости, включая их присутствие в медиа и образовательных материалах.",
    home_body_4: "Международное общество по сохранению зыбучих песков занимается выявлением, защитой и ответственным сохранением оставшихся участков зыбучих песков.",
    about_title: "О обществе",
    about_body_1: "Международное общество по сохранению зыбучих песков было создано обеспокоенными наблюдателями в ответ на зафиксированное глобальное сокращение естественных очагов зыбучих песков.",
    about_body_2: "МОСЗП занимается обследованием существующих участков, содействует приданию им охранного статуса и поддерживает исследования условий, необходимых для устойчивого формирования зыбучих песков.",
    about_body_3: "Общество выступает за сбалансированные подходы к управлению территориями, признающие экологическую, культурную и образовательную ценность естественных осадочных природных опасностей."
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
