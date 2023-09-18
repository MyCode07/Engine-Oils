// import "./static/side-fixed.js";
// import { accorden } from "./static/accordeon.js";
// import { maskInputs } from "./static/inputmask.js";
import { runTicker } from "./static/ticker.js";
import { replaceDomElements } from "./static/replace.js";

import "./parts/menu.js";
import "./utils/isMobile.js";
import "./static/replace.js";
import "./parts/header.js";
import "./parts/card-hover.js";


replaceDomElements();
runTicker()
// accorden();
// maskInputs('+7 999 999 999 999', '.phone')


