import {toElement} from "../generalFunction.js";
import {initScoreBoard } from "../scoreBoard/scoreBoardEventListener.js";
import {closeAddScore,openAddScore,sendScore,initRules} from "./navBarEventListener.js";

// Score team form
function scoreTeamForm(team){
  const form = toElement(`
    <form>
      <div class="mb-3">
        <label for="team_name_${team}" class="form-label">Add team ${team} name</label>
        <input type="text" class="form-control text-inputs" id="team_name_${team}">
        <div id="team_name_help" class="form-text">Add your team name</div>
      </div>
      <div class="mb-3">
        <label for="score_team_${team}" class="form-label ">Add your score team</label>
        <input type="text" class="form-control numeric-inputs" id="score_team_${team}">
      </div>
    </form>
    `);

  return form;
}
// Final form
function finalForm(){
  const finalForm = toElement(`
      <div class="final_form">
        <div class="team_1_form">${scoreTeamForm(1).outerHTML}</div>
        <div class="team_2_form">${scoreTeamForm(2).outerHTML}</div>
      </div>
    `);
  return finalForm;
}
// add score component
function addScoreModal(){
  const modal = toElement(`
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Score</h5>
            <button type="button" class="btn-close close_btn" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary close_btn" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary save_btn">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    `);
  modal.querySelector(".close_btn").addEventListener("click",closeAddScore);
  modal.querySelector(".save_btn").addEventListener("click",sendScore)
  const modalBody = modal.querySelector(".modal-body");
  modalBody.append(finalForm());
  return modal;
}
//navbar component
function navBar(){
    const nav = toElement(`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <a class="navbar-brand" href="#">MazeGame</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
              <a id="scores" class="nav-link">Rank</a>
          </li>
          <li class="nav-item">
              <a id="rules" class="nav-link">Rules</a>
          </li>
          <li class="nav-item">
              <a id="add-score" class="nav-link">Add Score</a>
          </li>
        </ul>
      </div>
    </nav>
    `);
    const scores = nav.querySelector("#scores");
    const rules = nav.querySelector("#rules");
    const addScore = nav.querySelector("#add-score");
    scores.addEventListener("click", (ev)=>{
      initScoreBoard()
    //  [...nav.querySelectorAll(".active")].forEach(item => item.classList.remove('.active'));
      ev.target.parentNode.classList.toggle("active");
    });
    rules.addEventListener("click",(ev) => {
    //  [...nav.querySelectorAll(".active")].forEach(item => item.classList.remove('.active'));
      ev.target.parentNode.classList.toggle("active");
      initRules()
    });
    addScore.addEventListener("click", openAddScore)

    return nav;
  }

export {navBar,addScoreModal}
