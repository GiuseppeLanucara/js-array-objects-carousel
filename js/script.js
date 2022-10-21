// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata. Attenzione! Le immagini nello screenshot sono differenti da quelli  che vi invio, ma il layout non cambia.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

const slider = [
    {
      immagine:"img/01.webp",
      title:"SPIDERMAN",
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      immagine:"img/02.webp",
      title:"RACHET AND CLANK",
      text:"Lorem ipsum",
    },
    {
      immagine:"img/03.webp",
      title:"FORTNITE",
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  
    },
    {
      immagine:"img/04.webp",
      title:"STRAY",
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      immagine:"img/05.webp",
      title: "AVENGERS",
      text:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
  
    },
  ];

  let itemTemplate = "";
  let thumbTemplate = "";
  let currentIndexActive = 0;

    
    

 