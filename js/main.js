let containerEl = document.querySelector(".justify-content-between");

const team = [
  {
    name: "Wayne",
    surname: "Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela",
    surname: "Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter",
    surname: "Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela",
    surname: "Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott",
    surname: "Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara",
    surname: "Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];
console.log(team);

createDiv();

function createDiv() {
  for (let i = 0; i < team.length; i++) {
    let info = team[i];
    console.log(info);
    let nameEl = document.createElement("div");
    nameEl.innerHTML = info.name;

    let surnameEl = document.createElement("div");
    surnameEl.innerHTML = info.surname;
    let roleEl = document.createElement("div");
    roleEl.innerHTML = info.role;
    let imgEl = document.createElement("div");
    imgEl.innerHTML = info.img;
    containerEl.append(nameEl);
    containerEl.append(surnameEl);
    containerEl.append(roleEl);
    containerEl.append(imgEl);
  }
}