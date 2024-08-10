

// import React from 'react';

// const Home = () => {
//   return (
//     <section style={{ 
//       textAlign: 'center', 
//       height: '100vh', 
//       width: '100vw', 
//       display: 'flex', 
//       flexDirection: 'column', 
//       justifyContent: 'center', 
//       alignItems: 'center',
//       margin: '0', // Ensure no margin around the section
//       padding: '0' // Ensure no padding around the section
//     }}>
//       <div>
//         <img 
//         //   src="https://via.placeholder.com/150" 
//              src="src/assets/Photo/me.jpeg"
//           alt="Profile" 
//           style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
//         />
//       </div>
//       <h1 style={{ marginTop: '1rem' }}>Hi! I'm Salmanul Faris 👋</h1>
//       <h2 style={{ marginTop: '1rem', fontSize: '2rem' }}>FullStack Developer Based in India.</h2>
//       <p style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto', color: '#666' }}>
//         I'm a MERN Stack developer based in India, just starting my journey in web development. 
//         I'm excited to build innovative web applications and grow as a developer.
//       </p>
//       <div style={{ marginTop: '2rem' }}>
//         <a href="#contact" style={{ 
//           padding: '0.75rem 2rem', 
//           margin: '0 1rem',
//           background: 'linear-gradient(90deg, rgba(255,123,0,1) 0%, rgba(255,0,135,1) 100%)',
//           color: '#fff', 
//           borderRadius: '30px', 
//           textDecoration: 'none'
//         }}>
//           Contact Me
//         </a>
//         <a href="#resume" style={{ 
//           padding: '0.75rem 2rem', 
//           margin: '0 1rem', 
//           border: '2px solid #000', 
//           color: '#000', 
//           borderRadius: '30px',
//           textDecoration: 'none'
//         }}>
//           My Resume
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Home;


import React from 'react';
import meImage from './Photo/me.jpeg'
const Home = () => {
  // WhatsApp number in international format (e.g., +1234567890)
  const whatsappNumber = '+1234567890';

  return (
    <section style={{ 
      textAlign: 'center', 
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      margin: '0', 
      padding: '0' 
    }}>
      <div>
        {/* <img 
          src="src/assets/Photo/me.jpeg"
          alt="Profile" 
          style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
        /> */}
        <img 
  src={meImage}
  alt="Profile" 
  style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
/>
      </div>
      <h1 style={{ marginTop: '1rem' }}>Hi! I'm Salmanul Faris 👋</h1>
      <h3 style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto' }}>Dynamic MERN Stack Developer Specializing in <br />
        Full-Stack Solutions and Innovative Web Applications
      </h3>
      <p style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto' }}>
        {/* I'm a MERN Stack developer based in India, just starting my journey in web development. 
        I'm excited to build innovative web applications and grow as a developer. */}
        As a budding MERN Stack developer from India, I'm thrilled to dive into web development, driven by the opportunity to create groundbreaking web applications and continually refine my skills as a tech innovator
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href={`https://wa.me/${8592990768}?text=Hi%20Salmanul%20Faris%2C%20I'd%20like%20to%20get%20in%20touch!`} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            padding: '0.75rem 2rem', 
            margin: '0 1rem',
            background: 'linear-gradient(90deg, rgba(255,123,0,1) 0%, rgba(255,0,135,1) 100%)',
            color: '#fff', 
            borderRadius: '30px', 
            textDecoration: 'none'
          }}
        >
          Contact Me
        </a>
        <a 
          href="src/assets/Cvdoc/CV.pdf" // Link to your resume file in the public directory
          download="Resume.pdf" // Optional: specify the name for the downloaded file
          style={{ 
            padding: '0.75rem 2rem', 
            margin: '0 1rem', 
            background: 'linear-gradient(90deg, rgba(255,123,0,1) 0%, rgba(255,0,135,1) 100%)',
            color: '#fff', 
            borderRadius: '30px',
            textDecoration: 'none'
          }}
        >
          My Resume
        </a>
      </div>
    </section>
  );
}

export default Home;



