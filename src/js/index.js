import {toElement} from "./generalFunction.js";
import {navBar} from "./navBar/navBarComponents.js";
//test component

//init app function
function initApp(){
    const app = toElement(`<div id="app" class="app"></div>`)
    document.body.append(app);
    //add test component
    // app.append(testComponent());
    app.before(navBar());
}
initApp()
