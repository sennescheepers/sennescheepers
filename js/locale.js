"use strict"

const setEnglish = () => {
    console.log('setting language to english');

    // Navigation dots
    document.getElementById("section01").setAttribute("data-scroll-indicator-title", "About");
    document.getElementById("section02").setAttribute("data-scroll-indicator-title", "Experience");
    document.getElementById("section03").setAttribute("data-scroll-indicator-title", "Education");
    document.getElementById("section04").setAttribute("data-scroll-indicator-title", "Skills");
    document.getElementById("section05").setAttribute("data-scroll-indicator-title", "Interests");

    // About page
    document.getElementById("location").innerHTML = "Limburg, Belgium";
    document.getElementById("summary").innerHTML = "I'm a student at PXL University College, studying Artificial Intelligence & Robotics. I've got a passion for programming and problem solving, and I'd be happy to turn this into my job."

    // Experience page
    document.getElementById("experience-title").innerHTML = "Experience";
    document.getElementById("exp-1-title").innerHTML = "Garmin smartwatch watchface";
    document.getElementById("exp-1-date").innerHTML = "September 2020 - Present";
    document.getElementById("exp-1-subtitle").innerHTML = "SIDE PROJECT";
    document.getElementById("exp-1-text").childNodes[0].nodeValue = "Developped and deployed a watchface for Garmin smartwatches. Learned how to use feedback from users and testers to make the code run as optimal as possible and to make the user experience better.";
    document.getElementById("exp-1-li-1").childNodes[2].nodeValue = " with 35 reviews";
    document.getElementById("exp-1-li-2").innerHTML = "5500+ downloads";
    document.getElementById("exp-2-title").innerHTML = "Studentjob";
    document.getElementById("exp-2-date").innerHTML = "2017 - Present";
    document.getElementById("exp-2-text").innerHTML = "Learned how to work in a multicultural team and a professional environment. Developed professional social skills and a good work ethic.";

    // Education page
    document.getElementById("education-title").innerHTML = "Education";
    document.getElementById("edu-1-school").innerHTML = "PXL University College, Hasselt";
    document.getElementById("edu-1-date").innerHTML = "September 2019 - June 2022";
    document.getElementById("edu-1-subtitle").innerHTML = "BACHELOR OF APPLIED INFORMATION TECHNOLOGY";
    document.getElementById("edu-1-text").innerHTML = "Application development - Artificial Intelligence & Robotics";
    document.getElementById("edu-2-school").innerHTML = "Heilig-Grafinstituut, Bilzen";
    document.getElementById("edu-2-date").innerHTML = "September 2015 - June 2019";
    document.getElementById("edu-2-subtitle").innerHTML = "SCIENCES & MODERN LANGUAGES";

    // Skills page
    document.getElementById("skills-title").innerHTML = "Skills";
    document.getElementById("programming-languages").innerHTML = "Programming languages & Tools";
    document.getElementById("languages").innerHTML = "Languages";
    document.getElementById("lan-1").innerHTML = "Dutch";
    document.getElementById("lan-1-level").innerHTML = "Native";
    document.getElementById("lan-2").innerHTML = "English";
    document.getElementById("lan-2-level").innerHTML = "Professional";
    document.getElementById("lan-3").innerHTML = "French";
    document.getElementById("lan-3-level").innerHTML = "Conversational";
    document.getElementById("lan-4").innerHTML = "German";
    document.getElementById("lan-4-level").innerHTML = "Basic";

    // Interests page
    document.getElementById("interests-title").innerHTML = "Interests";
    document.getElementById("interests-text").innerHTML = "When I'm not working for school you can find me riding my bike or putting on my running shoes, I'll take every chance to go outside and be active. Apart from being active I enjoy learning new technologies and building my knowledge with side projects.";

};

const setDutch = () => {
    console.log('tekst in het nederlands zetten');

    // Navigation dots
    document.getElementById("section01").setAttribute("data-scroll-indicator-title", "Over mij");
    document.getElementById("section02").setAttribute("data-scroll-indicator-title", "Ervaring");
    document.getElementById("section03").setAttribute("data-scroll-indicator-title", "Opleiding");
    document.getElementById("section04").setAttribute("data-scroll-indicator-title", "Vaardigheden");
    document.getElementById("section05").setAttribute("data-scroll-indicator-title", "Interesses");

    // About page
    document.getElementById("location").innerHTML = "Limburg, België";
    document.getElementById("summary").innerHTML = "Ik ben een tweedejaarsstudent toegepaste informatica aan Hogeshool PXL, met als afstudeerrichting “AI & Robotics”. Uit programmeren en problem solving haal ik veel voldoening, ik ben dan ook blij om van mijn passie mijn beroep te maken.";

    // Experience page
    document.getElementById("experience-title").innerHTML = "Ervaring";
    document.getElementById("exp-1-title").innerHTML = "Garmin smartwatch wijzerplaat";
    document.getElementById("exp-1-date").innerHTML = "september 2020 - heden";
    document.getElementById("exp-1-subtitle").innerHTML = "SIDE PROJECT";
    document.getElementById("exp-1-text").childNodes[0].nodeValue = "Ontwikkeling en deployment van een wijzerplaat voor Garmin sporthorloges. Geleerd hoe om te gaan met feedback van gebruikers en testers om de code zo optimaal mogelijk te laten lopen en de gebruikerservaring beter te maken.";
    document.getElementById("exp-1-li-1").childNodes[2].nodeValue = " met 35 reviews";
    document.getElementById("exp-1-li-2").innerHTML = "5500+ downloads";
    document.getElementById("exp-2-title").innerHTML = "Studentenjob";
    document.getElementById("exp-2-date").innerHTML = "2017 - heden";
    document.getElementById("exp-2-text").innerHTML = "Geleerd hoe te werken in een multicultureel team, sociale vaardigheden in een professionele omgeving en een goede werkethiek uitgebouwd.";

    // Education page
    document.getElementById("education-title").innerHTML = "Opleiding";
    document.getElementById("edu-1-school").innerHTML = "Hogeschool PXL, Hasselt";
    document.getElementById("edu-1-date").innerHTML = "september 2019 - juni 2022";
    document.getElementById("edu-1-subtitle").innerHTML = "PROFESSIONELE BACHELOR TOEGEPASTE INFORMATICA";
    document.getElementById("edu-1-text").innerHTML = "Application development - Artificial Intelligence & Robotics";
    document.getElementById("edu-2-school").innerHTML = "Heilig-Grafinstituut, Bilzen";
    document.getElementById("edu-2-date").innerHTML = "september 2015 - juni 2019";
    document.getElementById("edu-2-subtitle").innerHTML = "WETENSCHAPPEN & MODERNE TALEN";

    // Skills page
    document.getElementById("skills-title").innerHTML = "Vaardigheden";
    document.getElementById("programming-languages").innerHTML = "Programmeertalen & Tools";
    document.getElementById("languages").innerHTML = "Talen";
    document.getElementById("lan-1").innerHTML = "Nederlands";
    document.getElementById("lan-1-level").innerHTML = "Moedertaal";
    document.getElementById("lan-2").innerHTML = "Engels";
    document.getElementById("lan-2-level").innerHTML = "Professioneel";
    document.getElementById("lan-3").innerHTML = "Frans";
    document.getElementById("lan-3-level").innerHTML = "Conversationeel";
    document.getElementById("lan-4").innerHTML = "Duits";
    document.getElementById("lan-4-level").innerHTML = "Basis";

    // Interests page
    document.getElementById("interests-title").innerHTML = "Interesses";
    document.getElementById("interests-text").innerHTML = "Wanneer ik niet voor school werk ben ik te vinden op mijn fiets of in mijn loopschoenen, ik zal iedere kans om actief bezig of buiten te zijn met beide handen grijpen. Buiten sporten leer ik ook graag nieuwe technologieën en werk ik graag aan side projects.";

};

const setFrench = () => {
    console.log('traduire en francais');
    ich gerne
    document.getElementById("section02").setAttribute("data-scroll-indicator-title", "Expérience");
    document.getElementById("section03").setAttribute("data-scroll-indicator-title", "Éducation");
    document.getElementById("section04").setAttribute("data-scroll-indicator-title", "Compétences");
    document.getElementById("section05").setAttribute("data-scroll-indicator-title", "Intérêts");

    // About page 
    document.getElementById("location").innerHTML = "Limbourg, Belgique";
    document.getElementById("summary").innerHTML = "Je suis étudiant à Haute Ècole PXL, j'étudie l'intelligence artificielle et la robotique. La programmation et la résolution de problèmes me procurent une grande satisfaction, je suis heureux de faire de ma passion mon métier."
};

const setGerman = () => {
    console.log('umsetzen auf Deutsch');

    // Navigation dots
    document.getElementById("section01").setAttribute("data-scroll-indicator-title", "Über mich");
    document.getElementById("section02").setAttribute("data-scroll-indicator-title", "Arbeitserfahrung");
    document.getElementById("section03").setAttribute("data-scroll-indicator-title", "Bildung");
    document.getElementById("section04").setAttribute("data-scroll-indicator-title", "Kompetenzen");
    document.getElementById("section05").setAttribute("data-scroll-indicator-title", "Interessen");

    // About page
    document.getElementById("location").innerHTML = "Limburg, Belgien";
    document.getElementById("summary").innerHTML = "Ich bin ein Schüler an Fachhochschule PXL, ich studiere Informatik mit ein Spezialisierung auf Artificial Intelligence & Robotics. Programmieren und Problemlösen bereiten mir große Freude und ich bin froh, meine Leidenschaft zum Beruf machen zu können."

    // Experience page
    document.getElementById("experience-title").innerHTML = "Arbeitserfahrung";
    document.getElementById("exp-1-title").innerHTML = "Garmin smartwatch Zifferblatt";
    document.getElementById("exp-1-date").innerHTML = "September 2020 - jetzt";
    document.getElementById("exp-1-subtitle").innerHTML = "NEBENPROJEKT";
    document.getElementById("exp-1-text").childNodes[0].nodeValue = "Entwickelung und Bereitstellung eines Zifferblatts für Garmin Sportuhren. Gelernt wie man umgeht mit Feedback von Testern un Benutzern um das Benutzerlebnis so angenehm wie möglich zu gestalten.";
    document.getElementById("exp-1-li-1").childNodes[2].nodeValue = " mit 35 Bewertungen";
    document.getElementById("exp-1-li-2").innerHTML = "5500+ Downloads";
    document.getElementById("exp-2-title").innerHTML = "Studentenjob";
    document.getElementById("exp-2-date").innerHTML = "2017 - jetzt";
    document.getElementById("exp-2-text").innerHTML = "Gelernt zu arbeiten in einem multikulturelles Team, soziale Kompetenzen in einem professionellen Umfeld und einer guten Arbeitsmoral entwickelt.";

    // Education page
    document.getElementById("education-title").innerHTML = "Bildung";
    document.getElementById("edu-1-school").innerHTML = "Fachhochschule PXL, Hasselt";
    document.getElementById("edu-1-date").innerHTML = "September 2019 - Juni 2022";
    document.getElementById("edu-1-subtitle").innerHTML = "INFORMATIK";
    document.getElementById("edu-1-text").innerHTML = "Application development - Artificial Intelligence & Robotics";
    document.getElementById("edu-2-school").innerHTML = "Heilig-Grafinstituut, Bilzen";
    document.getElementById("edu-2-date").innerHTML = "September 2015 - Juni 2019";
    document.getElementById("edu-2-subtitle").innerHTML = "WISSENSCHAFTEN & MODERNE SPRACHEN";

    // Skills page
    document.getElementById("skills-title").innerHTML = "Kompetenzen";
    document.getElementById("programming-languages").innerHTML = "Programmiersprachen & Tools";
    document.getElementById("languages").innerHTML = "Sprachen";
    document.getElementById("lan-1").innerHTML = "Niederländisch";
    document.getElementById("lan-1-level").innerHTML = "Muttersprache";
    document.getElementById("lan-2").innerHTML = "Englisch";
    document.getElementById("lan-2-level").innerHTML = "Fachkundige Kenntnisse";
    document.getElementById("lan-3").innerHTML = "Französisch";
    document.getElementById("lan-3-level").innerHTML = "Selbständige Sprachverwendung";
    document.getElementById("lan-4").innerHTML = "Deutsch";
    document.getElementById("lan-4-level").innerHTML = "Grundkenntnisse";

    // Interests page
    document.getElementById("interests-title").innerHTML = "Interessen";
    document.getElementById("interests-text").innerHTML = "Wenn ich nicht für die Schule arbeite, kannst du mich auf meinem Fahrrad oder in meinem Laufschuhen finden. Ich werde jede Chance um aktiv zu sein nutzen. Neben dem Sport lerne ich auch gerne neue Technologien und arbeite an Nebenprojekten.";


};

const handleLanguage = (e) => {
    let selectedLanguage = document.getElementById('language-picker-select').value;
    console.log(selectedLanguage)
    switch (selectedLanguage) {
        case 'english':
            setEnglish();
            break;
        case 'nederlands':
            setDutch();
            break;
        case 'francais':
            setFrench();
            break;
        case 'deutsch':
            setGerman();
            break;
        default:
            break;
    }
    document.getElementsByClassName('scroll-indicator-controller')[0].remove();
    easyScrollDots({
        'fixedNav': false,
        'fixedNavId': '',
        'fixedNavUpward': false
    });
};

const handleLoad = () => {
    document.getElementById('language-picker-select').addEventListener('change', handleLanguage);
};

window.addEventListener('load', handleLoad);