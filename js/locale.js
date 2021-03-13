"use strict"

const setEnglish = () => {
    console.log('setting language to english');
};

const setDutch = () => {
    console.log('tekst in het nederlands zetten');
};

const setFrench = () => {
    console.log('traduire en francais');
};

const setGerman = () => {
    console.log('umsetzen auf Deutsch');
};

const handleLanguage = (e) => {
    let selectedLanguage = document.getElementById('language-picker-select').value;
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