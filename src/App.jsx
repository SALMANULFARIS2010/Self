
// import React from 'react';
// import Navbar from './assets/Navbar';
// import Footer from './assets/Footer'
// import Home from './assets/Home';
// import Services from './assets/Services';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Footer />
//       <Services/>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Navbar from './assets/Navbar';
import Footer from './assets/Footer'
import Home from './assets/Home';
import Services from './assets/Services';
import AboutMe from './assets/About';
import Connect from './assets/Connect';
import Mywork from './assets/Mywork';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutMe/>
        </section>
        <section id="work">
        <Mywork/>
        </section>
        <section id="connect">
        <Connect/>
        </section>
      <Footer />
    </div>
  );
}

export default App;