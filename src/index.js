import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import theme from "./assets/theme"

const myTheme= createMuiTheme(theme)

ReactDOM.render(
  <MuiThemeProvider theme={myTheme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </MuiThemeProvider>,

  document.getElementById("root")
);
registerServiceWorker();
