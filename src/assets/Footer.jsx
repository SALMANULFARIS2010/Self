// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={{ padding: '1rem', backgroundColor: '#f8f9fa', textAlign: 'center', marginTop: '2rem' }}>
//       <p>&copy; 2024 Rinsha E. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
//       <h2 style={{ fontSize: '24px', margin: '10px 0' }}>Salmanul Faris.</h2>
//       <p style={{ fontSize: '14px', margin: '5px 0' }}>salmanulfaris2712@gmail.com</p>
//       <div style={{ margin: '20px 0' }}>
//         <a href="https://www.linkedin.com" style={{ margin: '0 10px' }}>LinkedIn</a>
//         <a href="https://www.github.com" style={{ margin: '0 10px' }}>GitHub</a>
//         <a href="https://www.instagram.com" style={{ margin: '0 10px' }}>Instagram</a>
//       </div>
//       <p style={{ fontSize: '12px', color: '#888' }}>©2024 Salmanul Faris. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={styles.footer}>
//       <h2 style={styles.heading}>Salmanul Faris.</h2>
//       <p style={styles.email}>salmanulfaris2712@gmail.com</p>
//       <div style={styles.socialLinks}>
//         <a href="www.linkedin.com/in/salmanul-faris-bb54b4303" >LinkedIn</a>
//         <a href="https://www.github.com" style={styles.link}>GitHub</a>
//         <a href="https://www.instagram.com" style={styles.link}>Instagram</a>
//       </div>
//       <p style={styles.copyRight}>©2024 Salmanul Faris. All rights reserved.</p>
//     </footer>
//   );
// };

// // Styles
// const styles = {
//   footer: {
//     textAlign: 'center',
//     padding: '20px',
//     background: 'black',
//     color: '#fff',
//     borderTop: '1px solid #ddd',
//   },
//   heading: {
//     fontSize: '24px',
//     margin: '10px 0',
//     fontWeight: 'bold',
//   },
//   email: {
//     fontSize: '14px',
//     margin: '5px 0',
//   },
//   socialLinks: {
//     margin: '20px 0',
//   },
//   link: {
//     margin: '0 10px',
//     color: '#fff',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//     transition: 'color 0.3s',
//   },
//   linkHover: {
//     color: '#ffd700',
//   },
//   copyRight: {
//     fontSize: '12px',
//     color: '#ccc',
//     margin: '10px 0 0',
//   },
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.heading}>Place:Kochi,Kerala</h2>
      <p style={styles.email}>salmanulfaris2712@gmail.com</p>
      <div style={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/salmanul-faris-bb54b4303"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SALMANULFARIS2010"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Instagram
        </a>
      </div>
      <p style={styles.copyRight}>©2025 Salmanul Faris. All rights reserved.</p>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    background: 'black',
    color: '#fff',
    borderTop: '1px solid #ddd',
  },
  heading: {
    fontSize: '24px',
    margin: '10px 0',
    fontWeight: 'bold',
  },
  email: {
    fontSize: '14px',
    margin: '5px 0',
  },
  socialLinks: {
    margin: '20px 0',
  },
  link: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#ffd700',
  },
  copyRight: {
    fontSize: '12px',
    color: '#ccc',
    margin: '10px 0 0',
  },
};

export default Footer;










// import React, { useState, useRef } from 'react';

// const Footer = () => {
//   const [showVideo, setShowVideo] = useState(false);
//   const videoRef = useRef(null);

//   const handleDiscoverClick = () => {
//     setShowVideo(true);
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   return (
//     <div>
//       <section className="py-3 py-md-5 py-xl-8">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-md-10 col-lg-8">
//               <h2 className="display-5 mb-4">Innovation distinguishes between a leader and a follower.</h2>
//               <button onClick={handleDiscoverClick} className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5">Discover More</button>
//             </div>
//           </div>
//         </div>

//         <div className="container overflow-hidden">
//           <div className="row gy-4 gy-lg-0">
//             <div className="col-12 col-lg-6">
//               <article>
//                 <div className="card border-0">
//                   <div className="">
//                     <div className="entry-header mb-3">
//                       <img src="https://cdn.openart.ai/uploads/image_3rvQhe-1_1724851549162_raw.jpg" alt="Vision" className="img-fluid mb-3" />
//                     </div>
//                     <p className="card-text entry-summary text-secondary mb-3">
//                       To be at the forefront of digital transformation, developing intelligent and adaptive systems that anticipate and meet the needs of tomorrow. My goal is to harness the power of emerging technologies to create applications that are not just tools, but experiences that inspire and empower users. I strive to be a catalyst for change, building the next generation of software that will shape the future.
//                     </p>
//                   </div>
//                 </div>
//               </article>
//             </div>
//             <div className="col-12 col-lg-6">
              
//             </div>
//           </div>
//         </div>

//         <div className="expansion-container">
//           <div className="expansion-content">
//             <h1>Codecraft reach is expanding!</h1>
//             <h2>Starting from CHINA and FRANCE</h2>
//             <p>
//               We are glad to announce our upcoming expansion to include the dynamic markets of India, United States, United Kingdom, and Egypt. Stay tuned as we bring our innovative platform to new horizons.
//             </p>
//           </div>
//           <div className="expansion-globe">
//             <img src="http://clipart-library.com/images/qcB4a8Gc5.png" alt="Globe" />
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .expansion-container {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 50px;
//           background-color: #000;
//           color: #fff;
//         }
        
//         .expansion-content {
//           max-width: 50%;
//         }
        
//         .expansion-content h1,
//         .expansion-content h2,
//         .expansion-content p {
//           margin: 0 0 20px 0;
//         }
        
//         .partner-button {
//           background-color: #f00;
//           color: #fff;
//           border: none;
//           padding: 10px 20px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
        
//         .partner-button:hover {
//           background-color: #c00;
//         }
        
//         .expansion-globe img {
//           max-width: 100%;
//           height: auto;
//           animation: rotateGlobe 10s linear infinite;
//         }
        
//         @keyframes rotateGlobe {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Footer;
