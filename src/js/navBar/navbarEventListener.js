import {addScoreModal} from "./navBarComponents.js";
import {toElement} from "../generalFunction.js";

async function openAddScore(){
  // add modal on the body
  const modal= addScoreModal();
  document.body.append(modal);
  setTimeout(()=>{
    modal.classList.add('show');
    modal.style = "display:block;";
  },50);
}

async function closeAddScore(){
  const modal= document.querySelector(".modal");
  modal.classList.remove("show")
  setTimeout(()=>{
    modal.style = "display:none;";
    modal.remove();
  },3000);
}
async function sendScore(){
  const textInputs=[...document.querySelectorAll(".text-inputs")];
  const numericInputs=[...document.querySelectorAll(".numeric-inputs")];

  textInputs.forEach((item, i) => {
    ["border-danger","border-success"].forEach(x =>item.classList.remove(x));
    if(item.value =="" || item.value==null){
      item.classList.add("border-danger");
      return
    }else {
      item.classList.add("border-success");
    }
  });
  numericInputs.forEach((item, i) => {
    if((item.value =="" || item.value==null )|| !isNumeric(item.value)){
      item.classList.add("border-danger");
      return
    }else {
      item.classList.add("border-success");
    }
  });

  const jsonBody = {
    "team1_name": document.querySelector("#team_name_1").value,
    "team1_score":document.querySelector("#score_team_1").value,
    "team2_name": document.querySelector("#team_name_2").value,
    "team2_score": document.querySelector("#score_team_1").value,
  }


  console.log(jsonBody);
}
function initRules(){
  const rules = toElement(`
    <div class="card text-bg-dark mb-3 mt-2 p-2 mx-2 animation">
      <div class="card-body">
      <ul type="circle">
        <li>The Wall Ball Maze Game is a cooperative game designed for 2 teams of 2 players. </li>
        <li>It is made of 2 planks or boards which are 2,4m high each. Each team has its own board and ball.</li>
        <li>The goal is to make your team's ball reach the triangle at the top of each plank. You have to avoid falling in every other holes.</li>
        <li>To make the ball move, you have to use the 2 strings on each side of the board. 1 player for the left string and one for the right string. At the start of the game the ball is set at the bottom of the board and must be horizontally centered.</li>
        <li>The difficulty is progressive so beginners can enjoy playing as well as more experienced players.</li>
        <li>After each game you can add your team's score at the leaderboard by clicking here.</li>
      </ul>
      </div>
    </div>
  `)
  const app = document.querySelector("#app");
  // Remove all childs from the application
  [...app.children].forEach((item, i) => item.remove());
  app.append(rules);
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
export {openAddScore,closeAddScore,sendScore,initRules}
