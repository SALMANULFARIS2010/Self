

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


// import React from 'react';
// import meImage from './Photo/me.jpeg'
// const Home = () => {
//   // WhatsApp number in international format (e.g., +1234567890)
//   const whatsappNumber = '+1234567890';

//   return (
//     <section style={{ 
//       textAlign: 'center', 
//       height: '100vh', 
//       width: '100vw', 
//       display: 'flex', 
//       flexDirection: 'column', 
//       justifyContent: 'center', 
//       alignItems: 'center',
//       margin: '0', 
//       padding: '0' 
//     }}>
//       <div>
//         {/* <img 
//           src="src/assets/Photo/me.jpeg"
//           alt="Profile" 
//           style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
//         /> */}
//         <img 
//   src={meImage}
//   alt="Profile" 
//   style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
// />
//       </div>
//       <h1 style={{ marginTop: '1rem' }}>Hi! I'm Salmanul Faris 👋</h1>
//       <h3 style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto' }}>Dynamic MERN Stack Developer Specializing in <br />
//         Full-Stack Solutions and Innovative Web Applications
//       </h3>
//       <p style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto' }}>
//         {/* I'm a MERN Stack developer based in India, just starting my journey in web development. 
//         I'm excited to build innovative web applications and grow as a developer. */}
//         As a budding MERN Stack developer from India, I'm thrilled to dive into web development, driven by the opportunity to create groundbreaking web applications and continually refine my skills as a tech innovator
//       </p>
//       <div style={{ marginTop: '2rem' }}>
//         <a 
//           href={`https://wa.me/${+918592990768}?text=Hi%20Salmanul%20Faris%2C%20I'd%20like%20to%20get%20in%20touch!`} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           style={{ 
//             padding: '0.75rem 2rem', 
//             margin: '0 1rem',
//             background: 'linear-gradient(90deg, rgba(255,123,0,1) 0%, rgba(255,0,135,1) 100%)',
//             color: '#fff', 
//             borderRadius: '30px', 
//             textDecoration: 'none'
//           }}
//         >
//           Contact Me
//         </a>
//         <a 
//           href="/src/assets/Cvdoc/CV.pdf" // Link to your resume file in the public directory
//           download="Resume.pdf" // Optional: specify the name for the downloaded file
//           style={{ 
//             padding: '0.75rem 2rem', 
//             margin: '0 1rem', 
//             background: 'linear-gradient(90deg, rgba(255,123,0,1) 0%, rgba(255,0,135,1) 100%)',
//             color: '#fff', 
//             borderRadius: '30px',
//             textDecoration: 'none'
//           }}
//         >
//           My Resume
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Home;

// import React from 'react';
// import meImage from './Photo/me.jpeg';  // You can still import this one as it's being used elsewhere

// const Home = () => {
//   const whatsappNumber = '+918592990768';

//   return (
//     <section style={{ 
//       textAlign: 'center', 
//       height: '100vh', 
//       width: '100vw', 
//       display: 'flex', 
//       flexDirection: 'column', 
//       justifyContent: 'center', 
//       alignItems: 'center',
//       margin: '0', 
//       padding: '0'
//     }}>
//       <div>
//         <img 
//           src={meImage}
//           alt="Profile" 
//           style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
//         />
//       </div>
//       <h1 style={{ marginTop: '1rem' }}>Hi! I'm Salmanul Faris 👋</h1>
//       <h3 style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto' }}>
//         Dynamic MERN Stack Developer Specializing in <br />
//         Full-Stack Solutions and Innovative Web Applications
//       </h3>
//       <div style={{ marginTop: '2rem', textAlign: 'center' }}>
//         <h2>SKILLS</h2>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
//           <img 
//             src="https://e7.pngegg.com/pngimages/185/866/png-clipart-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd-miscellaneous-angle-thumbnail.png"  // HTML Image
//             alt="HTML" 
//             style={{ width: '70px', height: '70px', borderRadius: '15px', backgroundColor: '#fff', padding: '10px' }} 
//           />
//           <img 
//             src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"  // CSS Image
//             alt="CSS" 
//             style={{ width: '70px', height: '70px', borderRadius: '15px', backgroundColor: '#fff', padding: '10px' }} 
//           />
//           <img 
//             src="https://customizepress.ca/wp-content/uploads/2017/01/bootstrap-logo.jpg"  // Bootstrap Image
//             alt="Bootstrap" 
//             style={{ width: '70px', height: '70px', borderRadius: '15px', backgroundColor: '#fff', padding: '10px' }} 
//           />
//              <img 
//             src="https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png"  // React.js Image
//             alt="React.js" 
//             style={{ width: '70px', height: '70px', borderRadius: '15px', backgroundColor: '#fff', padding: '10px' }} 
//           />
//           <img 
//             src="https://e7.pngegg.com/pngimages/503/848/png-clipart-javascript-computer-icons-software-developer-cascading-style-sheets-javascript-logo-angle-text-thumbnail.png"  // JavaScript Image
//             alt="JavaScript" 
//             style={{ width: '70px', height: '70px', borderRadius: '15px', backgroundColor: '#fff', padding: '10px' }} 
//           />
//           <img 
//             src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"  // MongoDB Image
//             alt="MongoDB" 
//             style={{ width: '70px', height: '70px', borderRadius: '15px', backgroundColor: '#fff', padding: '10px' }} 
//           />
//           <img 
//             src="https://www.pngitem.com/pimgs/m/1-15848_node-js-node-js-hd-png-download.png"  // Node.js Image
//             alt="Node.js" 
//             style={{ width: '70px', height: '70px', borderRadius: '15px', backgroundColor: '#fff', padding: '10px' }} 
//           />
//           <img 
//             src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fhpg6if7btrwilqkidqbe.png"  // Express.js Image
//             alt="Express.js" 
//             style={{ width: '70px', height: '70px', borderRadius: '15px', backgroundColor: '#fff', padding: '10px' }} 
//           />
       
//         </div>
//       </div>
//       <p style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto' }}>
//         As a budding MERN Stack developer from India, I'm thrilled to dive into web development, driven by the opportunity to create groundbreaking web applications and continually refine my skills as a tech innovator.
//       </p>
//       <div style={{ marginTop: '2rem' }}>
//         <a 
//           href={`https://wa.me/${whatsappNumber}?text=Hi%20Salmanul%20Faris%2C%20I'd%20like%20to%20get%20in%20touch!`} 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           style={{ 
//             padding: '0.75rem 2rem', 
//             margin: '0 1rem',
//             background: 'linear-gradient(90deg, rgba(255,123,0,1) 0%, rgba(255,0,135,1) 100%)',
//             color: '#fff', 
//             borderRadius: '30px', 
//             textDecoration: 'none'
//           }}
//         >
//           Contact Me
//         </a>
//         <a 
//           href="/src/assets/Cvdoc/CV.pdf" 
//           download="Resume.pdf" 
//           style={{ 
//             padding: '0.75rem 2rem', 
//             margin: '0 1rem', 
//             background: 'linear-gradient(90deg, rgba(255,123,0,1) 0%, rgba(255,0,135,1) 100%)',
//             color: '#fff', 
//             borderRadius: '30px',
//             textDecoration: 'none'
//           }}
//         >
//           My Resume
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Home;




import React from 'react';
import meImage from './Photo/me.jpeg';  // You can still import this one as it's being used elsewhere

const Home = () => {
  const whatsappNumber = '+918592990768';

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
        <img 
          src={meImage}
          alt="Profile" 
          style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
        />
      </div>
      <h1 style={{ marginTop: '1rem' }}>Hi! I'm Salmanul Faris 👋</h1>
      <h3 style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto' }}>
        Dynamic MERN Stack Developer Specializing in <br />
        Full-Stack Solutions and Innovative Web Applications
      </h3>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h2>SKILLS</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <img 
            src="https://e7.pngegg.com/pngimages/185/866/png-clipart-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd-miscellaneous-angle-thumbnail.png"  // HTML Image
            alt="HTML" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px', 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer' 
            }} 
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
            
            
            
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'scale(1.1)';
            //   e.currentTarget.style.border = '2px solid #3498db'; // or any color and border style of your choice
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'scale(1)';
            //   e.currentTarget.style.border = 'none'; // or the original border style
            // }}
            
            
            
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"  // CSS Image
            alt="CSS" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            // onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            // onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'rotateY(180deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'rotateY(0deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
            
          />
          <img 
            src="https://customizepress.ca/wp-content/uploads/2017/01/bootstrap-logo.jpg"  // Bootstrap Image
            alt="Bootstrap" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            // onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            // onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'rotateY(180deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'rotateY(0deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
          />
          <img 
            src="https://miro.medium.com/v2/resize:fit:522/1*NJSv6DGoKTloI8d8im98zg.png"  // React.js Image
            alt="React.js" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            // onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            // onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'rotateY(180deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'rotateY(0deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
          />
          <img 
            src="https://e7.pngegg.com/pngimages/503/848/png-clipart-javascript-computer-icons-software-developer-cascading-style-sheets-javascript-logo-angle-text-thumbnail.png"  // JavaScript Image
            alt="JavaScript" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'scale(1.1)';
            //   e.currentTarget.style.border = '2px solid #3498db'; // or any color and border style of your choice
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'scale(1)';
            //   e.currentTarget.style.border = 'none'; // or the original border style
            // }}
            
            // onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            // onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
          />
          <img 
            src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"  // MongoDB Image
            alt="MongoDB" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            // onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            // onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'rotateY(180deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'rotateY(0deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
            
          />
          <img 
            src="https://www.pngitem.com/pimgs/m/1-15848_node-js-node-js-hd-png-download.png"  // Node.js Image
            alt="Node.js" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            // onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            // onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'rotateY(180deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'rotateY(0deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
          />
          <img 
            src="https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fhpg6if7btrwilqkidqbe.png"  // Express.js Image
            alt="Express.js" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'rotateY(180deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'rotateY(0deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            
            // onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            // onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
          />
           <img 
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"  // Express.js Image
            alt="github" 
            style={{ 
              width: '70px', 
              height: '70px', 
              borderRadius: '15px', 
              backgroundColor: '#fff', 
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            // onMouseEnter={e => {
            //   e.currentTarget.style.transform = 'rotateY(180deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            // onMouseLeave={e => {
            //   e.currentTarget.style.transform = 'rotateY(0deg)';
            //   e.currentTarget.style.transition = 'transform 0.6s ease';
            // }}
            
            // onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            // onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.transition = 'all 0.3s ease';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.border = '2px solid rgba(0, 0, 0, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            
          />
        </div>
      </div>
      <p style={{ marginTop: '1rem', maxWidth: '600px', margin: 'auto' }}>
        As a budding MERN Stack developer from India, I'm thrilled to dive into web development, driven by the opportunity to create groundbreaking web applications and continually refine my skills as a tech innovator.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=Hi%20Salmanul%20Faris%2C%20I'd%20like%20to%20get%20in%20touch!`} 
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
          href="/src/assets/Cvdoc/CV.pdf" 
          download="Resume.pdf" 
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

