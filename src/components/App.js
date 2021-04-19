import React, { useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LightTheme from '../themes/light';
import DarkTheme from '../themes/dark';

const GlobalStyle = createGlobalStyle`
    body {
      background: ${p => p.theme.bodyBackgroundColor};
      min-height: 100vh;
      margin: 0;
      font-family: 'Kaushan Script';
      color: ${p => p.theme.bodyFontColor};
    }
`;

function App() {
    const [theme, setTheme] = useState(LightTheme);
    return (
       <ThemeProvider theme={{...theme, setTheme: () => {
           setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)}
       }}>
           <GlobalStyle />
           <BrowserRouter>
               <Switch>
                   <Route exact path='/'>
                       <Home />
                   </Route>
                   <Route path='/login'>
                       <Login />
                   </Route>
               </Switch>
           </BrowserRouter>
       </ThemeProvider>
      );
}

export default App;
