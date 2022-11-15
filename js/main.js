const containerEl = document.querySelector(".justify-content-between");

const btnEl = document.querySelector(".btn");
let team = [
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
    const nameEl = document.createElement("div");
    mainDiv.classList.add("text-center");
    nameEl.innerHTML = `${info.name} ${info.surname}`;

    const roleEl = document.createElement("div");

    roleEl.innerHTML = info.role;
    const imgEl = document.createElement("img");
    imgEl.src = info.img;
    imgEl.innerHTML = info.img;
    containerEl.append(mainDiv);
    mainDiv.append(nameEl);
    mainDiv.append(roleEl);
    mainDiv.append(imgEl);
  }
}

btnEl.addEventListener("click", function () {
  const firstNameEl = document.querySelector('[aria-label="First-name"]');
  const lastNameEl = document.querySelector('[aria-label="Last-name"]');
  const roleEl = document.querySelector('[aria-label="role"]');
  const newUser = {
    name: firstNameEl.value,
    surname: lastNameEl.value,
    role: roleEl.value,
  };
  team.push(newUser);
  console.log(team);
});
