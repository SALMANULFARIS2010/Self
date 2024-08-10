// import React from 'react';

// const services = [
//   {
//     title: "Full-Stack Web Development",
//     description: "Building dynamic and scalable web applications with the MERN stack.",
//     icon: "🌐",
//   },
//   {
//     title: "Custom API Development",
//     description: "Creating secure and efficient RESTful APIs for seamless data communication.",
//     icon: "📱",
//   },
//   {
//     title: "Responsive Web Design",
//     description: "Designing responsive and mobile-first websites for optimal user experience.",
//     icon: "📐",
//   },
//   {
//     title: "E-Commerce Solutions",
//     description: "Developing robust online stores with integrated payment gateways and user-friendly features.",
//     icon: "🛒",
//   },
// ];

// const Services = () => {
//   return (
//     <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
//       <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Services</h2>
//       <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: '#555' }}>
//         I am dedicated to delivering high-quality web development solutions. I offer services in full 
//         stack development, UI/UX design, and performance optimization, focusing on creating responsive 
//         and user-friendly applications.
//       </p>
//       <div style={styles.cardContainer}>
//         {services.map((service, index) => (
//           <div key={index} style={styles.card}>
//             <div style={styles.icon}>{service.icon}</div>
//             <h3 style={styles.title}>{service.title}</h3>
//             <p style={styles.description}>{service.description}</p>
//             <a href="#readmore" style={styles.link}>Read more →</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   cardContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '2rem',
//   },
//   card: {
//     backgroundColor: '#f9f9f9',
//     padding: '2rem',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     textAlign: 'left',
//     width: '250px',
//     transition: 'transform 0.3s ease',
//   },
//   icon: {
//     fontSize: '2rem',
//     marginBottom: '1rem',
//   },
//   title: {
//     fontSize: '1.25rem',
//     marginBottom: '0.5rem',
//   },
//   description: {
//     fontSize: '1rem',
//     marginBottom: '1.5rem',
//     color: '#666',
//   },
//   link: {
//     color: '#007BFF',
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
// };

// export default Services;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faComputer } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building dynamic and scalable web applications with the MERN stack. Leveraging modern technologies to create robust and efficient solutions that meet user needs and industry standards.",
    icon: "🌐",
  },
  {
    title: "Custom API Development",
    description: "Creating secure and efficient RESTful APIs for seamless data communication. Ensuring high performance and reliability while integrating with various data sources and services.",
    icon: "📱",
  },
  {
    title: "Responsive Web Design",
    description: "Designing responsive and mobile-first websites for optimal user experience. Emphasizing clean, intuitive layouts and fast loading times to enhance user engagement across all devices.",
    icon: <FontAwesomeIcon icon={faComputer} />,
  },
  {
    title: "Pioneering Progress",
    description: "Transform real-world challenges into opportunities with the power of innovative technology. Embrace new solutions to drive progress and create impactful change.",
    icon: <FontAwesomeIcon icon={faUserTie} />,
  },
];

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = index => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Services</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: '#555' }}>
        I am committed to providing top-notch web development solutions, specializing in full stack development, UI/UX design, and performance optimization. My focus is on delivering responsive and user-friendly applications that meet high-quality standards.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
      }}>
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: hoverIndex === index ? '#e0e0e0' : '#f9f9f9',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: hoverIndex === index ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
              width: '250px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.title}</h3>
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#666' }}>{service.description}</p>
            <a href="#readmore" style={{ color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
