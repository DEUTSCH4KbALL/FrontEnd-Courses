function changeLanguage(lang) {
    document.querySelector('title').innerText = languages[lang].title;
    document.getElementById('header').innerText = languages[lang].header;
    document.getElementById('intro').innerText = languages[lang].intro;
    document.getElementById('paragraph1').innerText = languages[lang].paragraph1;
    document.getElementById('paragraph2').innerText = languages[lang].paragraph2;
    document.getElementById('donationInfo').innerText = languages[lang].donationInfo;
    document.getElementById('cardNumber').innerText = languages[lang].cardNumber;
    document.getElementById('thankYou').innerText = languages[lang].thankYou;
    document.getElementById('contact').innerText = languages[lang].contact;
    document.getElementById('footer').innerText = languages[lang].footer;
}

function changeLanguage(lang) {
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('intro').innerText = translations[lang].intro;
    document.getElementById('topic1-title').innerText = translations[lang].topic1Title;
    document.getElementById('topic1-content').innerText = translations[lang].topic1Content;
    document.getElementById('topic2-title').innerText = translations[lang].topic2Title;
    document.getElementById('topic2-content').innerText = translations[lang].topic2Content;
    document.getElementById('topic3-title').innerText = translations[lang].topic3Title;
    document.getElementById('topic3-content').innerText = translations[lang].topic3Content;
    document.getElementById('new-topic-title').innerText = translations[lang].newTopicTitle;
}