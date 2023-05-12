const data = {
  MOON: {
    key: 1,
    name: "MOON",
    desc: "See our planet as you have never seen it before. A perfect relaxing trip away to gain perspective and come back refreshed.While you are there , take in some history by visiting Luna 2 and Apollo11 landing sites.",
    url: "/images/destination/image-moon.png",
    avg_dis: "384,400 KM",
    est_time: "3 DAYS",
  },
  MARS: {
    key: 2,
    name: "MARS",
    desc: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    url: "/images/destination/image-mars.png",
    avg_dis: "225 MIL. KM",
    est_time: "9 MONTHS",
  },
  EUROPA: {
    key: 3,
    name: "EUROPA",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    url: "/images/destination/image-europa.png",
    avg_dis: "628 MIL. KM",
    est_time: "3 YEARS",
  },
  TITAN: {
    key: 4,
    name: "TITAN",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    url: "/images/destination/image-titan.png",
    avg_dis: "1.6 BIL. KM",
    est_time: "7 YEARS",
  },
};

const changeDesInfo = (des) => {
  const imageSection = document.getElementById("desImage");
  const img = document.createElement("img");
  img.src = data[des].url;
  img.className = "desImage";
  imageSection.children[1] &&
    imageSection.removeChild(imageSection.children[1]);
  imageSection.appendChild(img);
  const desc = document.getElementById("moon_desc");
  const heading = document.createElement("h1");
  heading.innerHTML = data[des].name;
  const description = document.createElement("p");
  description.innerHTML = data[des].desc;
  desc.innerHTML = "";
  desc.appendChild(heading);
  desc.appendChild(description);
  const avgDis = document.getElementById("avg_dis");
  const distance = document.createElement("h3");
  distance.innerHTML = data[des].avg_dis;
  avgDis.children[1] && avgDis.removeChild(avgDis.children[1]);
  avgDis.appendChild(distance);
  const avgTime = document.getElementById("avg_time");
  const time = document.createElement("h3");
  time.innerHTML = data[des].est_time;
  avgTime.children[1] && avgTime.removeChild(avgTime.children[1]);
  avgTime.appendChild(time);
};

changeDesInfo("MOON");
