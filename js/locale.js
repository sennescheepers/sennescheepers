"use strict"

const setEnglish = () => {
    console.log('setting language to english');
    document.getElementById("location").innerHTML = "Limburg, Belgium";

};

const setDutch = () => {
    console.log('tekst in het nederlands zetten');

    document.getElementById("location").innerHTML = "Limburg, België";
};

const setFrench = () => {
    console.log('traduire en francais');

    document.getElementById("location").innerHTML = "Limbourg, Belgique";
};

const setGerman = () => {
    console.log('umsetzen auf Deutsch');

    document.getElementById("location").innerHTML = "Limburg, Belgien";
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
};

const handleLoad = () => {
    document.getElementById('language-picker-select').addEventListener('change', handleLanguage);
};

window.addEventListener('load', handleLoad);