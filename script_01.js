/* Die Satzbau-Maschine | Arrays */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
ausgabe(getSentence("Ich","bin","Max","Mütze")); // Test
function getSentence(word1,word2,word3,word4) {
    let gab = " ";
    let punct = ".";
    let str = word1 + gab +
              word2 + gab +
              word3 + gab +
              word4 + 
              punct;
    return str;
}

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}
