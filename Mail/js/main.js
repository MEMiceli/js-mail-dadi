// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creiamo una lista di email

const iscritti = ('1email@dominio.it','2email@dominio.it','3email@dominio.it');

// chiediamo email tramite prompt

let mailUtente = prompt("Inserire la tua email");

// accesso consentito / accesso negato

if (mailUtente = iscritti){
    console.log("Autorizzato");
}
else (mailUtente != iscritti)
    console.log("Non Autorizzato")
    let newEmail = prompt("Inserire nuova email");
    iscritti.push("newEmail");


