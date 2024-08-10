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
      <h2 style={styles.heading}>Salmanul Faris.</h2>
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
      <p style={styles.copyRight}>©2024 Salmanul Faris. All rights reserved.</p>
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
