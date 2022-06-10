import {toElement} from "../generalFunction.js";

// scoreBoard
function scoreBoardRow(row){
  const element = toElement(`
    <tr class="score_row">
      <th scope="row" id="rank">${row.rank}</td>
      <td id="team_name">${row.team_name}</td>
      <td id="score">${row.score}</td>
    </tr>
  `)
  return element;
}
//scoreBar Comp
function scoreBoardComp(data){
  const table = toElement(`
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Team name</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    `)
  data.forEach(x => table.querySelector("tbody").append(scoreBoardRow(x)));
  return card(table);
}
// Score Bord Cardb
function card(body){
  const card =  toElement(`
    <div class="card text-bg-dark mb-3 mt-2 p-2 mx-2 animation">
      <div class="card-body"></div>
    </div>
  `);
  body!=null ? card.querySelector(".card-body").append(body) : false;
  return card;
}
export {scoreBoardComp}
