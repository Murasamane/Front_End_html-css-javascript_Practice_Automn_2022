const sericesObjArray = [
  {
    image: "img/john-mcarthur-703645-unsplash.png",
    title: "FLIGHT BOOKING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "img/shawn-lee-785068-unsplash.png",
    title: "HOTEL & RESORT BOOKING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "img/Rectangle 4 copy 2.png",
    title: "FAMILY TRIP PLANNER",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "img/vidar-nordli-mathisen-559120-unsplash.png",
    title: "CRUISE TOUR",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "img/robson-hatsukami-morgan-178532-unsplash.png",
    title: "FIRE CAMP",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "img/mimi-thian-737711-unsplash.png",
    title: "CORPORATE HOLIDAYS",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
];

const dynamicGrid = document.querySelector(".grid__dynamic");

sericesObjArray.forEach( item => {
    const htmlCard = `
    <div class="grid__card">
    <figure class="image__figure">
    <img src="${item.image}" alt="" width="300" height="180.75" class="card__img">
    </figure>
    <div class="card__text">
      <h2 class="card__title">${item.title}</h2>
      <p class="card__paragraph">${item.description}</p>
    </div>
    </div>
    `;
    dynamicGrid.innerHTML+=htmlCard;
})
