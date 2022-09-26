import './App.css';
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/Global'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import { AppBar } from './component/NavBar/AppBar';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Services } from './pages/Services/Services';
import { Advices } from './pages/Advices/Advices';
import { Home } from './trash/Home';
import Content from './pages/Home/Content ';
import Books from './pages/Services/Physics/Books';
import Concepts from './pages/Services/Physics/Concepts';
import Experiments from './pages/Services/Physics/Experiments';
import Guides from './pages/Services/Physics/Guides';
import Labs from './pages/Services/Physics/Labs';
import Visuals from './pages/Services/Physics/Visuals';
import NotFound from './pages/NotFound/NotFound';
import Card from './component/Card';



const theme = {
  colors: {
    header: 'blue',
    body: 'black',
    footer: '#263238',
    mainGradient: "linear-gradient (to right, tomato, cyan)",
  },
  mobile: '768px',
}

function App() {
  
  return (
    <div className='App'>
                    {/* mui/icons-material      mui/styled-engine-sc    mui/system                react-icons    react-slideshow-image   */}
                    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
       
        <Router>
          {/* component must render inside the router */}
           <AppBar />
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={< />}  /> */}
        <Route path="/" element={< Content/>}  />
      
        <Route path="/advices" element={<Advices />}  />
        <Route path="/services" element={<Services />}  >

        <Route path="/services/books" element={<Card />} />
      
      <Route path="/services/concepts" element={<Concepts />}   />
         <Route path="/services/experiments" element={<Experiments />}   />
         <Route path="/services/guides" element={<Guides />}   />
         <Route path="/services/labs" element={<Labs />}   />
         <Route path="/services/visuals" element={<Visuals />}   />
        </Route>
        <Route path="/contact" element={<Contact />}  />
        <Route path="/about" element={<About />}  />
        <Route path="*" element={<NotFound />} />
     
      </Routes>
     
     <Routes> 
       
        </Routes>
    </Router>
      </>
    </ThemeProvider>

 </div>
  );
}

export default App;




  