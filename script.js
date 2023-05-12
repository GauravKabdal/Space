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

const crewData = {
  DouglasH: {
    key: 1,
    name: "DOUGLAS HURLEY",
    desig: "COMMANDER",
    intro:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    url: "/images/crew/image-douglas-hurley.png",
  },
  MarkS: {
    key: 2,
    name: "MARK SHUTTLEWORTH",
    desig: "MISSION SPECIALIST",
    intro:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    url: "/images/crew/image-mark-shuttleworth.png",
  },
  VictorG: {
    key: 3,
    name: "VICTOR GLOVER",
    desig: "PILOT",
    intro:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    url: "/images/crew/image-victor-glover.png",
  },
  AnoushehA: {
    key: 4,
    name: "ANOUSHEH ANSARI",
    desig: "FLIGHT ENGINEER",
    intro:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    url: "/images/crew/image-anousheh-ansari.png",
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

const changeCrewInfo = (crew) => {
  const desc = document.getElementById("crew_desc");
  const designation = document.createElement("h1");
  designation.innerHTML = crewData[crew].desig;
  const name = document.createElement("h1");
  name.innerHTML = crewData[crew].name;
  const description = document.createElement("p");
  description.innerHTML = crewData[crew].intro;
  desc.innerHTML = "";
  desc.appendChild(designation);
  desc.appendChild(name);
  desc.appendChild(description);

  const imageSection = document.getElementById("crewImage");
  const crewImage = document.createElement("img");
  crewImage.src = crewData[crew].url;
  imageSection.innerHTML = "";
  imageSection.appendChild(crewImage);
};

changeCrewInfo("DouglasH");

changeDesInfo("MOON");
