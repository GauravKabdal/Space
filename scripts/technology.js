const techData = {
  Vehicle: {
    key: 1,
    techName: "LAUNCH VEHICLE",
    url: "/images/technology/image-launch-vehicle-portrait.jpg",
    intro:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  Port: {
    key: 2,
    techName: "SPACEPORT",
    url: "/images/technology/image-spaceport-portrait.jpg",
    intro:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  },
  Capsule: {
    key: 3,
    techName: "SPACE CAPSULE",
    url: "/images/technology/image-space-capsule-portrait.jpg",
    intro:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

const changeTechInfo = (tech) => {
  const desc = document.getElementById("tech_desc");
  const heading = document.createElement("h1");
  heading.innerHTML = techData[tech].techName;
  const description = document.createElement("P");
  description.innerHTML = techData[tech].intro;
  desc.children[1] && desc.removeChild(desc.children[1]);
  desc.children[1] && desc.removeChild(desc.children[1]);
  desc.appendChild(heading);
  desc.appendChild(description);
  const imageSection = document.getElementById("techImage");
  const image = document.createElement("img");
  image.src = techData[tech].url;
  imageSection.innerHTML = "";
  imageSection.appendChild(image);
};

changeTechInfo("Vehicle");
