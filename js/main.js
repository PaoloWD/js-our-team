let containerEl = document.querySelector(".justify-content-between");

const team = [
  {
    name: "Wayne",
    surname: "Barnett",
    role: "Founder & CEO",
    img: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela",
    surname: "Caroll",
    role: "Chief Editor",
    img: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter",
    surname: "Gordon",
    role: "Office Manager",
    img: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela",
    surname: "Lopez",
    role: "Social Media Manager",
    img: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott",
    surname: "Estrada",
    role: "Developer",
    img: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara",
    surname: "Ramos",
    role: "Graphic Designer",
    img: "img/barbara-ramos-graphic-designer.jpg",
  },
];
console.log(team);

createDiv();

function createDiv() {
  for (let i = 0; i < team.length; i++) {
    const info = team[i];
    console.log(info);
    const mainDiv = document.createElement("div");
    const nameEl = document.createElement("span");

    nameEl.innerHTML = info.name;

    const surnameEl = document.createElement("span");
    surnameEl.innerHTML = info.surname;
    const roleEl = document.createElement("div");
    roleEl.innerHTML = info.role;
    const imgEl = document.createElement("img");
    imgEl.src = info.img;
    imgEl.innerHTML = info.img;
    containerEl.append(mainDiv);
    mainDiv.append(nameEl);
    mainDiv.append(surnameEl);
    mainDiv.append(roleEl);
    mainDiv.append(imgEl);
  }
}
