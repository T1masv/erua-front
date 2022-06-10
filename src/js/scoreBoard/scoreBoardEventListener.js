import {scoreBoardComp} from './scoreBoardComponents.js';

function initScoreBoard(){
  const app = document.querySelector("#app");
  // Remove all childs from the application
  [...app.children].forEach((item, i) => item.remove());
  //add score component
  app.append(scoreBoardComp([{team_name:"test1",rank:1,score:10},{team_name:"test12",rank:2,score:9}]));
}


export{initScoreBoard}
