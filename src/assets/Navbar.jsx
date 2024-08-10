// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white', textAlign: 'center' }}>
//       <a href="#home" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Home</a>
//       <a href="#about" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>About</a>
//       <a href="#technologies" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>My Service</a>
//       <a href="#contact" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Contact</a>
//       <a href="#work" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Mywork</a>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav style={{ 
//       padding: '1rem', 
//       display: 'flex', 
//       justifyContent: 'space-between', 
//       alignItems: 'center', 
//       backgroundColor: '#f8f9fa' 
//     }}>
//       <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>
//         Salman.
//       </div>
//       <div style={{ marginRight: '35', display: 'flex', alignItems: 'center' }}>
//         <a href="/" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Home</a>
//         <a href="#about" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>About Me</a>
//         <a href="./Services.jsx" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Services</a>
//         <a href="#work" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>My Work</a>
//         <a href="#contact" style={{ margin: '0 15px', textDecoration: 'none', color: '#000' }}>Contact Me</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <div style={styles.logo}>
//         Salman.
//       </div>
//       <ul style={styles.navList}>
//         <li>
//           <Link to="home" smooth={true} duration={500} style={styles.navItem}>Home</Link>
//         </li>
//         <li>
//           <Link to="about" smooth={true} duration={500} style={styles.navItem}>About Me</Link>
//         </li>
//         <li>
//           <Link to="services" smooth={true} duration={500} style={styles.navItem}>Services</Link>
//         </li>
//         <li>
//           <Link to="work" smooth={true} duration={500} style={styles.navItem}>My Work</Link>
//         </li>
//         <li>
//           <Link to="connect" smooth={true} duration={500} style={styles.navItem}>Connect</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     padding: '1rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//   },
//   logo: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   navList: {
//     display: 'flex',
//     listStyleType: 'none',
//     margin: '0',
//     padding: '0',
//     alignItems: 'center',
//   },
//   navItem: {
//     margin: '0 15px',
//     textDecoration: 'none',
//     color: '#000',
//   },
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
//     document.body.style.color = isDarkMode ? '#fff' : '#000';
//   }, [isDarkMode]);

//   return (
//     <nav style={{
//       padding: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
//     }}>
//       <div style={{
//         fontSize: '24px',
//         fontWeight: 'bold',
//         color: isDarkMode ? '#fff' : '#000',
//       }}>
//         Salman.
//       </div>
//       <ul style={{
//         display: 'flex',
//         listStyleType: 'none',
//         margin: '0',
//         padding: '0',
//         alignItems: 'center',
//       }}>
//         <li>
//           <Link to="home" smooth={true} duration={500} style={{
//             margin: '0 15px',
//             textDecoration: 'none',
//             color: isDarkMode ? '#fff' : '#000',
//           }}>Home</Link>
//         </li>
//         <li>
//           <Link to="about" smooth={true} duration={500} style={{
//             margin: '0 15px',
//             textDecoration: 'none',
//             color: isDarkMode ? '#fff' : '#000',
//           }}>About Me</Link>
//         </li>
//         <li>
//           <Link to="services" smooth={true} duration={500} style={{
//             margin: '0 15px',
//             textDecoration: 'none',
//             color: isDarkMode ? '#fff' : '#000',
//           }}>Services</Link>
//         </li>
//         <li>
//           <Link to="work" smooth={true} duration={500} style={{
//             margin: '0 15px',
//             textDecoration: 'none',
//             color: isDarkMode ? '#fff' : '#000',
//           }}>My Work</Link>
//         </li>
//         <li>
//           <Link to="connect" smooth={true} duration={500} style={{
//             margin: '0 15px',
//             textDecoration: 'none',
//             color: isDarkMode ? '#fff' : '#000',
//           }}>Connect</Link>
//         </li>
//         <li>
//           <button onClick={toggleTheme} style={{
//             padding: '0.5rem 1rem',
//             border: 'none',
//             cursor: 'pointer',
//             backgroundColor: isDarkMode ? '#007bff' : '#0056b3',
//             color: '#fff',
//             borderRadius: '5px',
//           }}>
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
//     document.body.style.color = isDarkMode ? '#fff' : '#000';
//   }, [isDarkMode]);

//   return (
//     <nav style={{
//       padding: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
//       maxWidth: '1200px', // Decrease the length
//       margin: '0 auto', // Center the navbar
//       borderRadius: '0 0 40px 40px', // Add curved edges to the bottom
//       boxShadow: '0 4px 98px rgba(0,0,0,0.1)',
//     }}>
//       <div style={{
//         fontSize: '24px',
//         fontWeight: 'bold',
//         color: isDarkMode ? '#fff' : '#000',
//       }}>
//         Salman.
//       </div>
//       <ul style={{
//         display: 'flex',
//         listStyleType: 'none',
//         margin: '0',
//         padding: '0',
//         alignItems: 'center',
//       }}>
//         {['home', 'about', 'services', 'work', 'connect'].map((item) => (
//           <li key={item} style={{ margin: '0 15px' }}>
//             <Link
//               to={item}
//               smooth={true}
//               duration={500}
//               style={{
//                 textDecoration: 'none',
//                 color: isDarkMode ? '#fff' : '#000',
//                 position: 'relative',
//                 paddingBottom: '5px',
//                 cursor: 'pointer',
//                 display: 'inline-block',
//               }}
//               activeClass="active"
//               className="nav-link"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//               <span style={{
//                 position: 'absolute',
//                 left: '0',
//                 bottom: '0',
//                 width: '0',
//                 height: '2px',
//                 backgroundColor: 'blue',
//                 cursor: 'pointer',
//                 transition: 'width 0.3s ease-in-out',
//               }}></span>
//             </Link>
//           </li>
//         ))}
//         <li>
//           <button onClick={toggleTheme} style={{
//             padding: '0.5rem 1rem',
//             border: 'none',
//             cursor: 'pointer',
//             backgroundColor: isDarkMode ? '#007bff' : '#0056b3',
//             color: '#fff',
//             borderRadius: '5px',
//           }}>
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </li>
//       </ul>
//       <style>{`
//         .nav-link:hover span {
//           width: 100%;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
//     document.body.style.color = isDarkMode ? '#fff' : '#000';
//   }, [isDarkMode]);

//   return (
//     <nav style={{
//       padding: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       borderRadius: '0 0 40px 40px',
//       boxShadow: '0 4px 98px rgba(0,0,0,0.1)',
//     }}>
//       <div style={{
//         fontSize: '24px',
//         fontWeight: 'bold',
//         color: isDarkMode ? '#fff' : '#000',
//       }}>
//         Salman.
//       </div>
//       <ul style={{
//         display: 'flex',
//         listStyleType: 'none',
//         margin: '0',
//         padding: '0',
//         alignItems: 'center',
//       }}>
//         {['home', 'about', 'services', 'work', 'connect'].map((item) => (
//           <li key={item} style={{ margin: '0 15px' }}>
//             <Link
//               to={item}
//               smooth={true}
//               duration={500}
//               style={{
//                 textDecoration: 'none',
//                 color: isDarkMode ? '#fff' : '#000',
//                 position: 'relative',
//                 paddingBottom: '5px',
//                 cursor: 'pointer',
//                 display: 'inline-block',
//                 transition: 'color 0.3s ease-in-out', // Smooth color transition
//               }}
//               activeClass="active"
//               className="nav-link"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//               <span style={{
//                 position: 'absolute',
//                 left: '0',
//                 bottom: '0',
//                 width: '0',
//                 height: '2px',
//                 backgroundColor: 'blue',
//                 transition: 'width 0.3s ease-in-out',
//               }}></span>
//             </Link>
//           </li>
//         ))}
//         <li>
//           <button onClick={toggleTheme} style={{
//             padding: '0.5rem 1rem',
//             border: 'none',
//             cursor: 'pointer',
//             backgroundColor: isDarkMode ? '#007bff' : '#0056b3',
//             color: '#fff',
//             borderRadius: '5px',
//           }}>
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </li>
//       </ul>
//       <style>{`
//         .nav-link:hover span {
//           width: 100%;
//         }
//         .nav-link:hover {
//           color: blue; // Change text color on hover if needed
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
//     document.body.style.color = isDarkMode ? '#fff' : '#000';
//   }, [isDarkMode]);

//   return (
//     <nav style={{
//       padding: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       borderRadius: '0 0 40px 40px',
//       boxShadow: '0 4px 98px rgba(0,0,0,0.1)',
//     }}>
//       <div style={{
//         fontSize: '24px',
//         fontWeight: 'bold',
//         color: isDarkMode ? '#fff' : '#000',
//       }}>
//         Salman.
//       </div>
//       <ul style={{
//         display: 'flex',
//         listStyleType: 'none',
//         margin: '0',
//         padding: '0',
//         alignItems: 'center',
//       }}>
//         {['home', 'about', 'services', 'work', 'connect'].map((item) => (
//           <li key={item} style={{ margin: '0 15px' }}>
//             <Link
//               to={item}
//               smooth={true}
//               duration={500}
//               style={{
//                 textDecoration: 'none',
//                 color: isDarkMode ? '#fff' : '#000',
//                 position: 'relative',
//                 paddingBottom: '5px',
//                 cursor: 'pointer',
//                 display: 'inline-block',
//                 transition: 'color 0.3s ease-in-out', // Smooth color transition
//               }}
//               activeClass="active"
//               className="nav-link"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//               <span style={{
//                 position: 'absolute',
//                 left: '0',
//                 bottom: '0',
//                 width: '0',
//                 height: '2px',
//                 backgroundColor: 'blue',
//                 transition: 'width 0.3s ease-in-out',
//               }}></span>
//             </Link>
//           </li>
//         ))}
//         <li>
//           <button onClick={toggleTheme} style={{
//             padding: '0.5rem 1rem',
//             border: 'none',
//             cursor: 'pointer',
//             backgroundColor: isDarkMode ? '#007bff' : '#0056b3',
//             color: '#fff',
//             borderRadius: '5px',
//           }}>
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </li>
//       </ul>
//       <style>{`
//         .nav-link:hover span {
//           width: 100%;
//         }
//         .nav-link:hover {
//           color: blue; /* Optional: Change text color on hover if needed */
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
//     document.body.style.color = isDarkMode ? '#fff' : '#000';
//   }, [isDarkMode]);

//   return (
//     <nav style={{
//       padding: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       borderRadius: '0 0 40px 40px',
//       boxShadow: '0 4px 98px rgba(0,0,0,0.1)',
//       position: 'relative', // Required for absolute positioning of the underline
//     }}>
//       <div style={{
//         fontSize: '24px',
//         fontWeight: 'bold',
//         color: isDarkMode ? '#fff' : '#000',
//       }}>
//         Salman.
//       </div>
//       <ul style={{
//         display: 'flex',
//         listStyleType: 'none',
//         margin: '0',
//         padding: '0',
//         alignItems: 'center',
//         position: 'relative', // Required for absolute positioning of the underline
//         zIndex: 1, // Ensure links are above the underline
//       }}>
//         {['home', 'about', 'services', 'work', 'connect'].map((item) => (
//           <li key={item} style={{ margin: '0 15px' }}>
//             <Link
//               to={item}
//               smooth={true}
//               duration={500}
//               style={{
//                 textDecoration: 'none',
//                 color: isDarkMode ? '#fff' : '#000',
//                 position: 'relative',
//                 paddingBottom: '5px',
//                 cursor: 'pointer',
//                 display: 'inline-block',
//                 transition: 'color 0.3s ease-in-out', // Smooth color transition
//               }}
//               activeClass="active"
//               className="nav-link"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </Link>
//           </li>
//         ))}
//         <li>
//           <button onClick={toggleTheme} style={{
//             padding: '0.5rem 1rem',
//             border: 'none',
//             cursor: 'pointer',
//             backgroundColor: isDarkMode ? '#007bff' : '#0056b3',
//             color: '#fff',
//             borderRadius: '5px',
//           }}>
//             {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </li>
//       </ul>
//       <style>{`
//         nav::after {
//           content: '';
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 100%;
//           height: 2px;
//           background-color: blue;
//           transition: transform 0.3s ease-in-out;
//           transform: scaleX(0);
//           transform-origin: left;
//         }
//         nav:hover::after {
//           transform: scaleX(1);
//         }
//         .nav-link:hover {
//           color: #000000; // Change text color on hover if needed
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
//     document.body.style.color = isDarkMode ? '#fff' : '#000';
//   }, [isDarkMode]);

//   return (
//     <nav style={{
//       padding: '1rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
//       maxWidth: '900px',
//       margin: '0 auto',
//       borderRadius: '0 0 40px 40px',
//       boxShadow: '0 9px 1px 10rgba(0,0,0,0.1)',
//       position: 'relative', // Required for absolute positioning of the underline
//     }}>
//       <div style={{
//         fontSize: '24px',
//         fontWeight: 'bold',
//         color: isDarkMode ? '#fff' : '#000',
//       }}>
        
//       </div>
//       <ul style={{
//         display: 'flex',
//         listStyleType: 'none',
//         margin: '0',
//         padding: '0',
//         alignItems: 'center',
//         position: 'relative', // Required for absolute positioning of the underline
//         zIndex: 1, // Ensure links are above the underline
//       }}>
//         {['home', 'about', 'services', 'work', 'connect'].map((item) => (
//           <li key={item} style={{ margin: '0 15px' }}>
//             <Link
//               to={item}
//               smooth={true}
//               duration={500}
//               style={{
//                 textDecoration: 'none',
//                 color: isDarkMode ? '#fff' : '#000',
//                 position: 'relative',
//                 paddingBottom: '5px',
//                 cursor: 'pointer',
//                 display: 'inline-block',
//                 transition: 'color 0.3s ease-in-out', // Smooth color transition
//               }}
//               activeClass="active"
//               className="nav-link"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//               <span style={{
//                 position: 'absolute',
//                 left: 0,
//                 bottom: 0,
//                 width: '100%',
//                 height: '2px',
//                 backgroundColor: 'blue',
//                 transform: 'scaleX(0)',
//                 transformOrigin: 'left',
//                 transition: 'transform 0.3s ease-in-out',
//               }}></span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <style>{`
//         nav::after {
//           content: '';
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 100%;
//           height: 2px;
//           background-color: black;
//           transition: transform 0.3s ease-in-out;
//           transform: scaleX(0);
//           transform-origin: left;
//         }
//         nav:hover::after {
//           transform: scaleX(1);
//         }
//         .nav-link:hover span {
//           transform: scaleX(1);
//         }
//         .nav-link:hover {
//           color: #000000; // Change text color on hover if needed
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
//     document.body.style.color = isDarkMode ? '#fff' : '#000';
//   }, [isDarkMode]);

//   return (
// <nav style={{
//       padding: '1rem',
//       display: 'flex',
//       flexDirection: 'row', // Layout items horizontally
//       justifyContent: 'space-between', // Space items evenly
//       alignItems: 'center', // Center items vertically
//       backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
//       maxWidth: '800px',
//       margin: '0 auto',
//       borderRadius: '280px', // Rounded corners
//       boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Subtle shadow for depth
//       position: 'relative',
//     }}>
//       <div style={{
//         fontSize: '24px',
//         fontWeight: 'bold',
//         color: isDarkMode ? '#fff' : '#000',
//         marginBottom: '1rem', // Add space between the title and nav items
//       }}>
//         {/* Your logo or brand name here */}
//       </div>
//       <ul style={{
          
//         display: 'flex',
//         listStyleType: 'none',
//         margin: '0',
//         padding: '0',
//         alignItems: 'center',
        
//         position: 'relative', // Required for absolute positioning of the underline
//         zIndex: 1, // Ensure links are above the underline
//         flexDirection: 'row', // Align items horizontally
//       }}>
//         {['home', 'about', 'services', 'work', 'connect'].map((item) => (
//           <li key={item} style={{ margin: '0 15px' }}>
//             <Link
//               to={item}
//               smooth={true}
//               duration={500}
//               style={{
//                 textDecoration: 'none',
//                 color: isDarkMode ? '#fff' : '#000',
//                 position: 'relative',
//                 paddingBottom: '5px',
//                 cursor: 'pointer',
//                 display: 'inline-block',
//                 transition: 'color 0.3s ease-in-out', // Smooth color transition
//               }}
//               activeClass="active"
//               className="nav-link"
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//               <span style={{
//                 position: 'absolute',
//                 left: 0,
//                 bottom: 0,
//                 width: '100%',
//                 height: '2px',
//                 backgroundColor: 'blue',
//                 transform: 'scaleX(0)',
//                 transformOrigin: 'left',
//                 transition: 'transform 0.3s ease-in-out',
//               }}></span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <style>{`
//         nav::after {
//           content: '';
//           position: absolute;
//           left: 0;
//           bottom: 0;
//           width: 100%;
//           height: 2px;
//           background-color: black;
//           transition: transform 0.3s ease-in-out;
//           transform: scaleX(0);
//           transform-origin: left;
//         }
//         nav:hover::after {
//           transform: scaleX(1);
//         }
//         .nav-link:hover span {
//           transform: scaleX(1);
//         }
//         .nav-link:hover {
//           color: #000000; // Change text color on hover if needed
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
    document.body.style.color = isDarkMode ? '#fff' : '#000';
  }, [isDarkMode]);

  return (
    <nav style={{
      padding: '1rem',
      display: 'flex',
      backgroundColor: '#f0f0f0',
      flexDirection: 'column', // Stack items vertically
      alignItems: 'center',    // Center items horizontally
      // backgroundColor: isDarkMode ? '#333' : '#f8f9fa',
      maxWidth: '750px',
      margin: '0 auto',
      borderRadius: '280px', // Rounded corners
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Subtle shadow for depth
      position: 'relative',
    }}>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: isDarkMode ? '#fff' : '#000',
        marginBottom: '1rem', // Space between the title and nav items
      }}>
        {/* Your logo or brand name here */}
      </div>
      <ul style={{
        display: 'flex',
        listStyleType: 'none',
      
        margin: '0',
        padding: '0',
        alignItems: 'center',
        position: 'relative', // Required for absolute positioning of the underline
        zIndex: 1, // Ensure links are above the underline
        flexDirection: 'row', // Align items horizontally
        gap: '15px', // Space between links
      }}>
        {['home', 'about', 'services', 'work', 'connect'].map((item) => (
          <li key={item} style={{ margin: '0' }}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              style={{
                textDecoration: 'none',
                fontSize: '20px',
                color: isDarkMode ? '#fff' : '#000',
                position: 'relative',
                paddingBottom: '5px',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'color 0.3s ease-in-out', // Smooth color transition
              }}
              activeClass="active"
              className="nav-link"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: '2px',
                backgroundColor: 'blue',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease-in-out',
              }}></span>
            </Link>
          </li>
        ))}
      </ul>
      <style>{`
        nav::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: black;
          transition: transform 0.3s ease-in-out;
          transform: scaleX(0);
          transform-origin: left;
        }
        nav:hover::after {
          transform: scaleX(1);
        }
        .nav-link:hover span {
          transform: scaleX(1);
        }
        .nav-link:hover {
          color: #000000; // Change text color on hover if needed
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
