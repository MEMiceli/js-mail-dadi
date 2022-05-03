// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// creiamo una lista di email

const iscritti = ['1email@dominio.it','2email@dominio.it','3email@dominio.it'];

// chiediamo email tramite prompt

let mailUtente = prompt("Inserire la tua email");

// controllare l'email è presente

for (let i = 0; i < iscritti.length; i++) {

// accesso consentito / accesso negato

    if (mailUtente === iscritti[i]){
        console.log("Autorizzato");
    }
    else if (mailUtente != i){
        console.log("Non Autorizzato")
        let newEmail = prompt("Inserire nuova email");
        iscritti.push("newEmail");
    }
    
}




