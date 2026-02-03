const translations={
  mk:{
    home:"Почетна",
    about:"За нас",
    services:"Услуги",
    contact:"Контакт",
    title:"ПЕТ-ЛОГИСТИК ДООЕЛ",
    subtitle:"Сигурен партнер за шпедиција и логистика",
    contactBtn:"Контактирајте не",
    aboutText:"ПЕТ-ЛОГИСТИК ДООЕЛ е водечка компанија во шпедицијата и логистиката во Македонија. Со преку 10 години искуство, нудиме сигурни, брзи и професионални услуги за увоз, извоз и транзит на стоки.",
    whyUsTitle:"Зошто да не изберете нас?",
    whyUs1:"Сигурност и точност во секоја испорака",
    whyUs2:"Професионален тим со долгогодишно искуство",
    whyUs3:"Комплетна услуга: транспорт, царински услуги, документација",
    whyUs4:"Доверлив партнер за домашни и меѓународни клиенти",
    testimonial:"Нашите клиенти редовно ни велат дека нашата услуга е брза, професионална и доверлива. Ние се гордееме со тоа што сме најдобар избор за шпедиција во Македонија!",
    s1:"Увозно и извозно царинење",
    s1Text:"Сигурно и брзо царинење за увоз и извоз на стоки, со точна документација.",
    s2:"Царинење за привремено увезена стока",
    s2Text:"Професионално управување со привремени увози, со минимални трошоци.",
    s3:"Изготвување на транзитни документи",
    s3Text:"Подготовка на сите потребни транзитни документи за безгрижно движење на стоките.",
    s4:"Консалтинг на царинско работење",
    s4Text:"Стручни совети и консалтинг за сите царински процеси и постапки.",
    s5:"Застапување на фирми пред царина",
    s5Text:"Професионално застапување и претставување на вашата компанија пред царинските органи.",
    s6:"Поедноставени царински постапки",
    s6Text:"Ефикасни и поедноставени процеси за брзо и сигурно поминување на стоката.",
    s7:"Транспорт",
    s7Text:"Сигурен и ефикасен транспорт на вашите стоки до било која локација."
  },
  en:{
    home:"Home",
    about:"About Us",
    services:"Services",
    contact:"Contact",
    title:"PET-LOGISTIK DOOEL",
    subtitle:"Reliable partner for freight forwarding and logistics",
    contactBtn:"Contact Us",
    aboutText:"PET-LOGISTIK DOOEL is a leading freight forwarding and logistics company in North Macedonia. With over 10 years of experience, we provide reliable, fast, and professional services for import, export, and transit of goods.",
    whyUsTitle:"Why Choose Us?",
    whyUs1:"Reliability and accuracy in every delivery",
    whyUs2:"Professional team with long-term experience",
    whyUs3:"Complete service: transport, customs, documentation",
    whyUs4:"Trusted partner for domestic and international clients",
    testimonial:"Our clients consistently tell us that our service is fast, professional, and reliable. We take pride in being the best choice for freight forwarding in Macedonia!",
    s1:"Import & Export Customs Clearance",
    s1Text:"Safe and fast customs clearance for imports and exports of goods with accurate documentation.",
    s2:"Temporary Import Customs Clearance",
    s2Text:"Professional management of temporary imports with minimal costs.",
    s3:"Transit Document Preparation",
    s3Text:"Preparation of all necessary transit documents for hassle-free goods movement.",
    s4:"Customs Consulting",
    s4Text:"Expert advice and consulting for all customs processes and procedures.",
    s5:"Representation Before Customs",
    s5Text:"Professional representation of your company before customs authorities.",
    s6:"Simplified Customs Procedures",
    s6Text:"Efficient and simplified processes for fast and secure clearance of goods.",
    s7:"Transport",
    s7Text:"Reliable and efficient transport of your goods to any location."
  }
};

function setLanguage(lang){
  document.querySelectorAll("[data-key]").forEach(el=>{
    const key=el.getAttribute("data-key");
    if(translations[lang][key]) el.textContent=translations[lang][key];
  });
}
