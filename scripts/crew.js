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
