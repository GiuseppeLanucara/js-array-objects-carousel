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

  let itemT = "";
  let thumbT = "";
  let indiceAttivo = 0;

    
  for (let i = 0; i < slider.length; i++) {
    let classActive = "";
    if (i === indiceAttivo) {
      classActive = "active";
    }
    itemT += `
    <div class="item ${classActive}">
      <img src="${slider[i].immagine}" />
        <div class="title">
          <h2>${slider[i].titolo}</h2>
          <p>${slider[i].testo}</p>
        </div>
    </div>`;
    thumbT += `
    <div class="thumb ${classActive}">
      <img src="${slider[i].immagine}" alt="" />
    </div>`;
  } 

  const itemsContainer = document.querySelector(".items-container");
  const thumbsContainer = document.querySelector(".thumbs-container");

  itemsContainer.innerHTML = itemT;
  thumbsContainer.innerHTML += thumbT;

  const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");





function slideUpDown(evento) {
    const direction = this.id;
    const imgs = document.getElementsByClassName("item");
    imgs[indiceAttivo].classList.remove("active");
    const thumbs = document.getElementsByClassName("thumb");
    thumbs[indiceAttivo].classList.remove("active");
    //console.log(imgs);
    if(direction === 'iNext'){
      if (indiceAttivo === 0) {
        indiceAttivo = slider.length - 1;
      } else {
        indiceAttivo--;
      }
    }
    else {
      if (indiceAttivo === 4) {
        indiceAttivo = 0;
      } else {
        indiceAttivo++;
      }
    }
    
    
    //console.log(currentIndexActive);
    imgs[indiceAttivo].classList.add("active");
    //console.log(currentIndexActive);
    thumbs[indiceAttivo].classList.add("active");
  }
  
  next.addEventListener("click",slideUpDown);
  prev.addEventListener("click",slideUpDown);
  const timer = setInterval(slideUpDown, 3000);