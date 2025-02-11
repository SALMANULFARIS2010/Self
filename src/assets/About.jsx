// import React from 'react';

// const AboutMe = () => {
//   return (
//     <section style={styles.aboutMe}>
//  <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>My Services</h2>
//       <p style={styles.paragraph}>
//         As a dedicated Full Stack Developer, I have recently completed extensive training in web development. I am enthusiastic about applying my skills to contribute to innovative projects and support the success and growth of forward-thinking organizations. My goal is to leverage my knowledge and commitment to deliver effective solutions and collaborate with dynamic teams.
//       </p>
//       <div style={styles.boxes}>
//         <div style={styles.box}>
//           <h3>Languages</h3>
//           <p>HTML, CSS, JavaScript, React JS, Node JS, Express JS</p>
//         </div>
//         <div style={styles.box}>
//           <h3>Education</h3>
//           <p>Postgraduate in Computer Applications (MCA)</p>
//         </div>
//         <div style={styles.box}>
//           <h3>Projects</h3>
//           <p>Built more than 5 projects</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   aboutMe: {
//     fontFamily: 'Arial, sans-serif',
//     padding: '20px',
//   },
//   heading: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   paragraph: {
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   boxes: {
//     display: 'flex',
//     justifyContent: 'space-around',
//   },
//   box: {
//     border: '1px solid #ccc',
//     padding: '20px',
//     width: '30%',
//     textAlign: 'center',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default AboutMe;




// import React from 'react';

// // Box Component
// const Box = ({ children }) => {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <div
//       style={{ ...styles.box, ...(isHovered ? styles.boxHover : {}) }}
//       onMouseOver={() => setIsHovered(true)}
//       onMouseOut={() => setIsHovered(false)}
//     >
//       {children}
//     </div>
//   );
// };

// // AboutMe Component
// const AboutMe = () => {
//   return (
//     <section style={styles.aboutMe}>
//       <h2 style={styles.heading}>About Me</h2>
//       <p style={styles.paragraph}>
//       A self-motivated and enthusiastic individual who is eager about launching a successful career in
//  Software Development. Passionate for innovation and mastering new technologies. Confident in
//  Design,Development, and Deployment. I want to be part of an organization that values personal and
//  professional development where I can learn the best practices and chart a fulfilling career path.
//       </p>
//       <div style={styles.boxes}>
//         <Box>
//           <h3 style={styles.boxTitle}>Languages</h3>
//           <p style={styles.boxContent}>HTML, CSS, JavaScript, React JS, Node JS, Express JS,Mysql,MongoDB</p>
//         </Box>
//         <Box>
//           <h3 style={styles.boxTitle}>Education</h3>
//           <p style={styles.boxContent}>Postgraduate in Computer Applications (MCA)</p>
//         </Box>
//         <Box>
//           <h3 style={styles.boxTitle}>Projects</h3>
//           <p style={styles.boxContent}>Built more than 5 projects</p>
//         </Box>
//       </div>
//     </section>
//   );
// };

// // Styles
// const styles = {
//   aboutMe: {
//     fontFamily: 'Roboto, sans-serif',
//     padding: '40px',
//     backgroundColor: '#f4f4f9',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '2.8rem',
//     color: '#333',
//     marginBottom: '1rem',
//     fontWeight: '700',
//     textTransform: 'uppercase',
//   },
//   paragraph: {
//     fontSize: '1.2rem',
//     color: '#666',
//     lineHeight: '1.6',
//     marginBottom: '40px',
//   },
//   boxes: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '20px',
//   },
//   box: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '20px',
//     width: '30%',
//     textAlign: 'center',
//     backgroundColor: '#fff',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   },
//   boxHover: {
//     transform: 'scale(1.05)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
//   },
//   boxTitle: {
//     fontSize: '1.5rem',
//     color: '#333',
//     marginBottom: '10px',
//   },
//   boxContent: {
//     fontSize: '1rem',
//     color: '#555',
//   },
// };

// export default AboutMe;



// import React from 'react';

// // Box Component
// const Box = ({ children }) => {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <div
//       style={{ ...styles.box, ...(isHovered ? styles.boxHover : {}) }}
//       onMouseOver={() => setIsHovered(true)}
//       onMouseOut={() => setIsHovered(false)}
//     >
//       {children}
//     </div>
//   );
// };

// // AboutMe Component
// const AboutMe = () => {
//   return (
//     <section style={styles.aboutMe}>
//       <div style={styles.contentWrapper}>
//         <div style={styles.imageContainer}>
//           <img 
//             src="src/assets/Photo/clg.jpeg" 
//             alt="Profile" 
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.textContent}>
//           <h2 style={styles.heading}>About Me</h2>
//           <p style={styles.paragraph}>
//             A self-motivated and enthusiastic individual who is eager about launching a successful career in
//             Software Development. Passionate for innovation and mastering new technologies. Confident in
//             Design, Development, and Deployment. I want to be part of an organization that values personal and
//             professional development where I can learn the best practices and chart a fulfilling career path.
//           </p>
//           <div style={styles.boxes}>
//             <Box>
//               <h3 style={styles.boxTitle}>Languages</h3>
//               <p style={styles.boxContent}>HTML, CSS, JavaScript, React JS, Node JS, Express JS, MySQL, MongoDB</p>
//             </Box>
//             <Box>
//               <h3 style={styles.boxTitle}>Education</h3>
//               <p style={styles.boxContent}>Postgraduate in Computer Applications (MCA)</p>
//             </Box>
//             <Box>
//               <h3 style={styles.boxTitle}>Projects</h3>
//               <p style={styles.boxContent}>Built more than 5 projects</p>
//             </Box>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Styles
// const styles = {
//   aboutMe: {
//     fontFamily: 'Roboto, sans-serif',
//     padding: '40px',
//     backgroundColor: '#f4f4f9',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   contentWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   imageContainer: {
//     flex: '1',
//   },
//   image: {
//     width: '100%',
//     borderRadius: '8px',
//   },
//   textContent: {
//     flex: '2',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '2.8rem',
//     color: '#333',
//     marginBottom: '1rem',
//     fontWeight: '700',
//     textTransform: 'uppercase',
//   },
//   paragraph: {
//     fontSize: '1.2rem',
//     color: '#666',
//     lineHeight: '1.6',
//     marginBottom: '40px',
//   },
//   boxes: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '20px',
//   },
//   box: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '20px',
//     width: '30%',
//     textAlign: 'center',
//     backgroundColor: '#fff',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   },
//   boxHover: {
//     transform: 'scale(1.05)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
//   },
//   boxTitle: {
//     fontSize: '1.5rem',
//     color: '#333',
//     marginBottom: '10px',
//   },
//   boxContent: {
//     fontSize: '1rem',
//     color: '#555',
//   },
// };

// export default AboutMe;


// import React from 'react';
// import clg from './Photo/clg.jpeg'
// // Box Component
// const Box = ({ children }) => {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <div
//       style={{ ...styles.box, ...(isHovered ? styles.boxHover : {}) }}
//       onMouseOver={() => setIsHovered(true)}
//       onMouseOut={() => setIsHovered(false)}
//     >
//       {children}
//     </div>
//   );
// };

// // AboutMe Component
// const AboutMe = () => {
//   return (
//     // <section style={styles.aboutMe}>
//     //   <div style={styles.contentWrapper}>
//     //     <div style={styles.imageContainer}>
//     //       <img 
//     //         src="src/assets/Photo/clg.jpeg" 
//     //         alt="Profile" 
//     //         style={styles.image}
//     //       />
//     //     </div>
//     <section style={styles.aboutMe}>
//       <div style={styles.contentWrapper}>
//         <div style={styles.imageContainer}>
//           <img 
//             src={clg} 
//             alt="Profile" 
//             style={styles.image}
//           />
//         </div>
//         <div style={styles.textContent}>
//           <h2 style={styles.heading}>About Me</h2>
//           <p style={styles.paragraph}>
//             A self-motivated and enthusiastic individual who is eager about launching a successful career in
//             Software Development. Passionate for innovation and mastering new technologies. Confident in
//             Design, Development, and Deployment. I want to be part of an organization that values personal and
//             professional development where I can learn the best practices and chart a fulfilling career path.
//           </p>
//           <div style={styles.boxes}>
//             {/* <Box>
//               <h3 style={styles.boxTitle}>Skills</h3>
//               <p style={styles.boxContent}>HTML, CSS, JavaScript, React JS, Node JS, Express MySQL, MongoDB,Git Hub</p>
//             </Box> */}
//             <Box>
//               <h3 style={styles.boxTitle}>Education</h3>
//               <p style={styles.boxContent}>MCA (Master of Computer Applications).</p>
//             </Box>
//             <Box>
//               <h3 style={styles.boxTitle}>Projects</h3>
//               <p style={styles.boxContent}>Develop 4 innovative projects that push the boundaries of technology and creativity.</p>
//             </Box>
//             <Box>
//               <h3 style={styles.boxTitle}>Internship</h3>
//               <p style={styles.boxContent}>Completed a Course and Internship in MERN Stack at Camerinfolks Pvt. Ltd</p>
//             </Box>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Styles
// const styles = {
//   aboutMe: {
//     fontFamily: 'Roboto, sans-serif',
//     padding: '40px',
//     backgroundColor: '#f4f4f9',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   contentWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   imageContainer: {
//     flex: '1',
//   },
//   image: {
//     width: '100%',
//     borderRadius: '8px',
//   },
//   textContent: {
//     flex: '2',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '2.8rem',
//     color: '#333',
//     marginBottom: '1rem',
//     fontWeight: '700',
//     textTransform: 'uppercase',
//   },
//   paragraph: {
//     fontSize: '1.2rem',
//     color: '#666',
//     lineHeight: '1.6',
//     marginBottom: '40px',
//   },
//   boxes: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '20px',
//   },
//   box: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '20px',
//     width: '30%',
//     textAlign: 'center',
//     backgroundColor: '#fff',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
//   },
//   boxHover: {
//     transform: 'scale(1.05)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
//     backgroundColor: '#e0f7fa', // Change this color to whatever you prefer
//   },
//   boxTitle: {
//     fontSize: '1.5rem',
//     color: '#333',
//     marginBottom: '10px',
//   },
//   boxContent: {
//     fontSize: '1rem',
//     color: '#555',
//   },
// };

// export default AboutMe;








// import React, { useState, useEffect } from 'react';
// import clg from './Photo/clg.jpeg';
// import clg2 from './Photo/clg2.jpeg';
// import clg3 from './Photo/me.jpeg';

// // Box Component
// const Box = ({ children }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{ ...styles.box, ...(isHovered ? styles.boxHover : {}) }}
//       onMouseOver={() => setIsHovered(true)}
//       onMouseOut={() => setIsHovered(false)}
//     >
//       {children}
//     </div>
//   );
// };

// // AboutMe Component
// const AboutMe = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [clg, clg2, clg3];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 4000); // Change image every 4 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [slides.length]);

//   return (
//     <section style={styles.aboutMe}>
//       <div style={styles.contentWrapper}>
//         <div style={styles.sliderContainer}>
//           <div style={styles.boxContainer}>
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 style={{
//                   ...styles.boxWrapper,
//                   display: currentSlide === index ? 'block' : 'none',
//                 }}
//               >
//                 <img
//                   src={slide}
//                   alt={`Profile ${index + 1}`}
//                   style={styles.slide}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div style={styles.textContent}>
//           <h2 style={styles.heading}>About Me</h2>
//           <p style={styles.paragraph}>
//             A self-motivated and enthusiastic individual who is eager about launching a successful career in
//             Software Development. Passionate for innovation and mastering new technologies. Confident in
//             Design, Development, and Deployment. I want to be part of an organization that values personal and
//             professional development where I can learn the best practices and chart a fulfilling career path.
//           </p>
//           <div style={styles.boxes}>
//             <Box>
//               <h3 style={styles.boxTitle}>Education</h3>
//               <p style={styles.boxContent}>MCA (Master of Computer Applications).</p>
//             </Box>
//             <Box>
//               <h3 style={styles.boxTitle}>Projects</h3>
//               <p style={styles.boxContent}>Developed 4 innovative projects that push the boundaries of technology and creativity.</p>
//             </Box>
//             <Box>
//               <h3 style={styles.boxTitle}>Internship</h3>
//               <p style={styles.boxContent}>Completed a Course and Internship in MERN Stack at Camerinfolks Pvt. Ltd.</p>
//             </Box>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Styles
// const styles = {
//   aboutMe: {
//     fontFamily: 'Roboto, sans-serif',
//     padding: '40px',
//     backgroundColor: '#f4f4f9',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   contentWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   sliderContainer: {
//     flex: '1',
//     overflow: 'hidden',
//     position: 'relative',
//     width: '100%',
//     height: '400px',
//   },
//   boxContainer: {
//     display: 'flex',
//     width: '100%',
//     height: '100%',
//     position: 'relative',
//   },
//   boxWrapper: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     transition: 'opacity 1s ease-in-out',
//   },
//   slide: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     borderRadius: '8px',
//   },
//   textContent: {
//     flex: '2',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '2.8rem',
//     color: '#333',
//     marginBottom: '1rem',
//     fontWeight: '700',
//     textTransform: 'uppercase',
//   },
//   paragraph: {
//     fontSize: '1.2rem',
//     color: '#666',
//     lineHeight: '1.6',
//     marginBottom: '40px',
//   },
//   boxes: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '20px',
//   },
//   box: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '20px',
//     width: '100%',
//     textAlign: 'center',
//     backgroundColor: '#fff',
//     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
//   },
//   boxHover: {
//     transform: 'scale(1.05)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
//     backgroundColor: '#e0f7fa',
//   },
//   boxTitle: {
//     fontSize: '1.5rem',
//     color: '#333',
//     marginBottom: '10px',
//   },
//   boxContent: {
//     fontSize: '1rem',
//     color: '#555',
//   },
// };

// export default AboutMe;














// import React from 'react';
// import clg from './Photo/clg.jpeg';
// import clg2 from './Photo/clg2.jpeg';

// const AboutMe = () => {
//   return (
//     <section className="about-me">
//       <style>
//         {`
//           .about-me {
//             font-family: 'Roboto, sans-serif';
//             padding: 40px;
//             background-color: #f4f4f9;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           }

//           .content-wrapper {
//             display: flex;
//             align-items: center;
//             gap: 20px;
//             max-width: 1200px;
//             margin: 0 auto;
//           }

//           .flip-card {
//             width: 300px;
//             height: 400px;
//             perspective: 1000px;
//           }

//           .flip-card-inner {
//             width: 100%;
//             height: 100%;
//             transition: transform 0.6s;
//             transform-style: preserve-3d;
//             position: relative;
//           }

//           .flip-card:hover .flip-card-inner {
//             transform: rotateY(180deg);
//           }

//           .flip-card-front,
//           .flip-card-back {
//             width: 100%;
//             height: 100%;
//             backface-visibility: hidden;
//             position: absolute;
//             top: 0;
//             left: 0;
//             border-radius: 8px;
//           }

//           .flip-card-back {
//             transform: rotateY(180deg);
//           }

//           .card-image {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             border-radius: 8px;
//           }

//           .text-content {
//             flex: 2;
//             text-align: center;
//           }

//           .heading {
//             font-size: 2.8rem;
//             color: #333;
//             margin-bottom: 1rem;
//             font-weight: 700;
//             text-transform: uppercase;
//           }

//           .paragraph {
//             font-size: 1.2rem;
//             color: #666;
//             line-height: 1.6;
//             margin-bottom: 40px;
//           }

//           .boxes {
//             display: flex;
//             justify-content: space-between;
//             gap: 20px;
//           }

//           .box {
//             border: 1px solid #ddd;
//             border-radius: 8px;
//             padding: 20px;
//             width: 100%;
//             text-align: center;
//             background-color: #fff;
//             box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
//             transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
//           }

//           .box:hover {
//             transform: scale(1.05);
//             box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
//             background-color: #e0f7fa;
//           }

//           .box-title {
//             font-size: 1.5rem;
//             color: #333;
//             margin-bottom: 10px;
//           }

//           .box-content {
//             font-size: 1rem;
//             color: #555;
//           }
//         `}
//       </style>
//       <div className="content-wrapper">
//         <div className="flip-card">
//           <div className="flip-card-inner">
//             <div className="flip-card-front">
//               <img src={clg} alt="Front" className="card-image" />
//             </div>
//             <div className="flip-card-back">
//               <img src={clg2} alt="Back" className="card-image" />
//             </div>
//           </div>
//         </div>
//         <div className="text-content">
//           <h2 className="heading">About Me</h2>
//           <p className="paragraph">
//             A self-motivated and enthusiastic individual who is eager about launching a successful career in
//             Software Development. Passionate for innovation and mastering new technologies. Confident in
//             Design, Development, and Deployment. I want to be part of an organization that values personal and
//             professional development where I can learn the best practices and chart a fulfilling career path.
//           </p>
//           <div className="boxes">
//             <div className="box">
//               <h3 className="box-title">Education</h3>
//               <p className="box-content">MCA (Master of Computer Applications).</p>
//             </div>
//             <div className="box">
//               <h3 className="box-title">Projects</h3>
//               <p className="box-content">Developed 4 innovative projects that push the boundaries of technology and creativity.</p>
//             </div>
//             <div className="box">
//               <h3 className="box-title">Internship</h3>
//               <p className="box-content">Completed a Course and Internship in MERN Stack at Camerinfolks Pvt. Ltd.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;





import React from 'react';
import clg from './Photo/clg.jpeg';
import clg2 from './Photo/clg2.jpeg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <style>
        {`
          .about-me {
            font-family: 'Roboto, sans-serif';
            padding: 40px;
            background-color: #f4f4f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .content-wrapper {
            display: flex;
            align-items: center;
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap;
          }

          .flip-card {
            width: 300px;
            height: 400px;
            perspective: 1000px;
          }

          .flip-card-inner {
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            position: relative;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front,
          .flip-card-back {
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 8px;
          }

          .flip-card-back {
            transform: rotateY(180deg);
          }

          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }

          .text-content {
            flex: 2;
            text-align: center;
          }

          .heading {
            font-size: 2.8rem;
            color: #333;
            margin-bottom: 1rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          .paragraph {
            font-size: 1.2rem;
            color: #666;
            line-height: 1.6;
            margin-bottom: 40px;
          }

          .boxes {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            justify-content: center;
          }

          .box {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            background-color: #fff;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          }

          .box:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
            background-color: #e0f7fa;
          }

          .box-title {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 10px;
          }

          .box-content {
            font-size: 1rem;
            color: #555;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .content-wrapper {
              flex-direction: column;
              align-items: center;
            }
          }

          @media (max-width: 768px) {
            .heading {
              font-size: 2rem;
            }
            .paragraph {
              font-size: 1rem;
            }
            .boxes {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
      <div className="content-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={clg} alt="Front" className="card-image" />
            </div>
            <div className="flip-card-back">
              <img src={clg2} alt="Back" className="card-image" />
            </div>
          </div>
        </div>
        <div className="text-content">
          <h2 className="heading">About Me</h2>
          <p className="paragraph">
            A self-motivated and enthusiastic individual eager to launch a successful career in
            Software Development. Passionate about innovation and mastering new technologies.
          </p>
          <div className="boxes">
            <div className="box">
              <h3 className="box-title">Education</h3>
              <p className="box-content">MCA (Master of Computer Applications).</p>
            </div>
            <div className="box">
              <h3 className="box-title">Projects</h3>
              <p className="box-content">Developed 4 innovative projects in technology and creativity.</p>
            </div>
            <div className="box">
              <h3 className="box-title">Internship</h3>
              <p className="box-content">Completed MERN Stack Internship at Camerinfolks Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
