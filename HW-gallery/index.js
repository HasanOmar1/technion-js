// "use strict";

// חסן עומר + עיסא לואבנה

const events = [
  {
    name: "Music Festival",
    image:
      "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=",
    date: "2025-06-15",
  },
  {
    name: "Art Exhibition",
    image:
      "https://media.sva.edu/image/upload/singleImage/mmg-sagmeister-9-2024-15-1725648939-2-1731962054-derivative.webp",
    date: "2025-07-01",
  },
  {
    name: "Tech Conference",
    image:
      "https://a.storyblok.com/f/188325/1920x1280/41e681c422/alexandre-pellaes-6vajp0pscx0-unsplash-1-1.jpg",
    date: "2025-08-10",
  },
  {
    name: "City Marathon",
    image:
      "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/03/USAT/71435752007-2-nycmarathon-1103.jpg?width=1733&height=1155&fit=crop&format=pjpg&auto=webp",
    date: "2025-09-05",
  },
];

const galleryContainer = document.querySelector(".gallery");

events.forEach((item) => {
  const container = document.createElement("div");
  container.className = "container";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;

  container.append(img);
  const details = document.createElement("div");
  details.className = "details";

  const h3 = document.createElement("h3");
  h3.textContent = item.name;

  const h5 = document.createElement("h5");
  h5.textContent = item.date;

  details.append(h3);
  details.append(h5);

  container.addEventListener("mouseover", () => {
    container.append(details);
  });

  container.addEventListener("mouseout", () => {
    details.remove();
  });

  galleryContainer.append(container);
});
