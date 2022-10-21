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
      titolo:"SPIDERMAN",
      testo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      immagine:"img/02.webp",
      titolo:"RACHET AND CLANK",
      testo:"Lorem ipsum",
    },
    {
      immagine:"img/03.webp",
      titolo:"FORTNITE",
      testo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  
    },
    {
      immagine:"img/04.webp",
      titolo:"STRAY",
      testo:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      immagine:"img/05.webp",
      titolo: "AVENGERS",
      testo:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
  
    },
  ];

  let itemTemplate = "";
  let thumbTemplate = "";
  let currentIndexActive = 0;

    
  for (let i = 0; i < slider.length; i++) {
    let classActive = "";
    if (i === currentIndexActive) {
      classActive = "active";
    }
    itemTemplate += `
    <div class="item ${classActive}">
      <img src="${slider[i].immagine}" />
        <div class="title">
          <h2>${slider[i].titolo}</h2>
          <p>${slider[i].testo}</p>
        </div>
    </div>`;
    thumbTemplate += `
    <div class="thumb ${classActive}">
      <img src="${slider[i].immagine}" alt="" />
    </div>`;
  } 

 