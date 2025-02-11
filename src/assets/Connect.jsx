// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     comments: ''
//   });
  
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if all fields are filled
//     if (!formData.name || !formData.email || !formData.comments) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     // Validate email format
//     if (!validateEmail(formData.email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }
    
//     // Clear error message
//     setError('');

//     // Handle form submission logic here (e.g., send form data to a server)
//     console.log('Form submitted:', formData);
//     setMessage('Message sent successfully!');
    
//     // Reset form data
//     setFormData({ name: '', email: '', comments: '' });
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         width: '400px',
//         margin: '0 auto',
//         fontFamily: 'Arial, sans-serif',
//         padding: 2,
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#fff'
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Typography variant="h4" gutterBottom align="center">
//         Get In Touch
//       </Typography>

//       <TextField
//         id="name"
//         name="name"
//         label="Enter your name"
//         value={formData.name}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />

//       <TextField
//         id="email"
//         name="email"
//         label="Enter your email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//         helperText="Please enter a valid email address"
//         error={!validateEmail(formData.email) && formData.email !== ''}
//       />

//       <TextField
//         id="comments"
//         name="comments"
//         label="Enter your comments"
//         value={formData.comments}
//         onChange={handleChange}
//         multiline
//         rows={4}
//         fullWidth
//         margin="normal"
//       />

//       <Button 
//         type="submit"
//         variant="contained"
//         color="primary"
//         fullWidth
//         sx={{ mt: 2 }}
//       >
//         Send Message
//       </Button>

//       {message && (
//         <Typography 
//           variant="body2" 
//           color="success.main" 
//           align="center" 
//           sx={{ mt: 2 }}
//         >
//           {message}
//         </Typography>
//       )}

//       {error && (
//         <Typography 
//           variant="body2" 
//           color="error.main" 
//           align="center" 
//           sx={{ mt: 2 }}
//         >
//           {error}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default ContactForm;



// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     comments: ''
//   });
  
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if all fields are filled
//     if (!formData.name || !formData.email || !formData.comments) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     // Validate email format
//     if (!validateEmail(formData.email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }
    
//     // Clear error message
//     setError('');

//     // Handle form submission logic here (e.g., send form data to a server)
//     console.log('Form submitted:', formData);
//     setMessage('Message sent successfully!');
    
//     // Reset form data
//     setFormData({ name: '', email: '', comments: '' });
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         width: '100%',
//         maxWidth: '600px',
//         margin: '0 auto',
//         fontFamily: 'Arial, sans-serif',
//         padding: 4,
//         borderRadius: '12px',
//         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#f9f9f9',  // Light background color for the form
//         border: '1px solid #ddd'
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: '#333' }}>
//         Get In Touch
//       </Typography>

//       <TextField
//         id="name"
//         name="name"
//         label="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//         variant="outlined"
//         sx={{
//           borderRadius: '8px',
//           backgroundColor: '#fff', // Light background color for input fields
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#ccc'
//             },
//             '&:hover fieldset': {
//               borderColor: '#a0a0a0'
//             }
//           }
//         }}
//       />

//       <TextField
//         id="email"
//         name="email"
//         label="Your Email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//         variant="outlined"
//         sx={{
//           borderRadius: '8px',
//           backgroundColor: '#fff', // Light background color for input fields
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#ccc'
//             },
//             '&:hover fieldset': {
//               borderColor: '#a0a0a0'
//             }
//           }
//         }}
//         helperText="Please enter a valid email address"
//         error={!validateEmail(formData.email) && formData.email !== ''}
//       />

//       <TextField
//         id="comments"
//         name="comments"
//         label="Your Comments"
//         value={formData.comments}
//         onChange={handleChange}
//         multiline
//         rows={4}
//         fullWidth
//         margin="normal"
//         variant="outlined"
//         sx={{
//           borderRadius: '8px',
//           backgroundColor: '#fff', // Light background color for input fields
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#ccc'
//             },
//             '&:hover fieldset': {
//               borderColor: '#a0a0a0'
//             }
//           }
//         }}
//       />

//       <Button 
//         type="submit"
//         variant="contained"
//         color="primary"
//         fullWidth
//         sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
//       >
//         Send Message
//       </Button>

//       {message && (
//         <Typography 
//           variant="body2" 
//           color="success.main" 
//           align="center" 
//           sx={{ mt: 3, color: '#28a745' }}
//         >
//           {message}
//         </Typography>
//       )}

//       {error && (
//         <Typography 
//           variant="body2" 
//           color="error.main" 
//           align="center" 
//           sx={{ mt: 3, color: '#dc3545' }}
//         >
//           {error}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default ContactForm;



// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     comments: ''
//   });
  
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if all fields are filled
//     if (!formData.name || !formData.email || !formData.comments) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     // Validate email format
//     if (!validateEmail(formData.email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }
    
//     // Clear error message
//     setError('');

//     // Handle form submission logic here (e.g., send form data to a server)
//     console.log('Form submitted:', formData);
//     setMessage('Message sent successfully!');
    
//     // Reset form data
//     setFormData({ name: '', email: '', comments: '' });
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         width: '100%',
//         maxWidth: '700px',  // Adjust width as needed
//         margin: '0 auto',
//         fontFamily: 'Arial, sans-serif',
//         padding: 4,
//         borderRadius: '16px',  // More rounded corners if needed
//         boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
//         backgroundColor: '#ffffff',  // Match the background color to Visme design
//         border: '1px solid #e0e0e0'  // Light border color
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: '#333' }}>
//         Get In Touch
//       </Typography>

//       <TextField
//         id="name"
//         name="name"
//         label="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//         variant="outlined"
//         sx={{
//           borderRadius: '8px',
//           backgroundColor: '#fff',
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#ccc'
//             },
//             '&:hover fieldset': {
//               borderColor: '#888'
//             }
//           }
//         }}
//       />

//       <TextField
//         id="email"
//         name="email"
//         label="Your Email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//         variant="outlined"
//         sx={{
//           borderRadius: '8px',
//           backgroundColor: '#fff',
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#ccc'
//             },
//             '&:hover fieldset': {
//               borderColor: '#888'
//             }
//           }
//         }}
//         helperText="Please enter a valid email address"
//         error={!validateEmail(formData.email) && formData.email !== ''}
//       />

//       <TextField
//         id="comments"
//         name="comments"
//         label="Your Comments"
//         value={formData.comments}
//         onChange={handleChange}
//         multiline
//         rows={4}
//         fullWidth
//         margin="normal"
//         variant="outlined"
//         sx={{
//           borderRadius: '8px',
//           backgroundColor: '#fff',
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: '#ccc'
//             },
//             '&:hover fieldset': {
//               borderColor: '#888'
//             }
//           }
//         }}
//       />

//       <Button 
//         type="submit"
//         variant="contained"
//         color="primary"
//         fullWidth
//         sx={{ mt: 3, py: 1.5, fontWeight: 'bold', backgroundColor: '#007bff' }}  // Adjust button color
//       >
//         Send Message
//       </Button>

//       {message && (
//         <Typography 
//           variant="body2" 
//           color="success.main" 
//           align="center" 
//           sx={{ mt: 3, color: '#28a745' }}
//         >
//           {message}
//         </Typography>
//       )}

//       {error && (
//         <Typography 
//           variant="body2" 
//           color="error.main" 
//           align="center" 
//           sx={{ mt: 3, color: '#dc3545' }}
//         >
//           {error}
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default ContactForm;






import React, { useState } from 'react';
import { Box, TextField, Typography, Button, useMediaQuery } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', comments: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  // Responsive styling
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.comments) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setMessage('Message sent successfully!');
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({ name: '', email: '', comments: '' });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        maxWidth: isMobile ? '90%' : '600px', // Adjusts width on smaller screens
        margin: '0 auto',
        padding: isMobile ? 3 : 4, // Adjust padding for mobile
        borderRadius: '16px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant={isMobile ? 'h5' : 'h4'} align="center" sx={{ color: '#333', mb: 2 }}>
        Get In Touch
      </Typography>

      <TextField
        id="name"
        name="name"
        label="Your Name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="email"
        name="email"
        label="Your Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
        helperText="Please enter a valid email address"
        error={!validateEmail(formData.email) && formData.email !== ''}
      />

      <TextField
        id="comments"
        name="comments"
        label="Your Comments"
        value={formData.comments}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          py: 1.5,
          fontWeight: 'bold',
          backgroundColor: '#007bff',
          '&:hover': { backgroundColor: '#0056b3' },
        }}
      >
        Send Message
      </Button>

      {message && (
        <Typography align="center" sx={{ mt: 2, color: '#28a745', fontWeight: 'bold' }}>
          {message}
        </Typography>
      )}

      {error && (
        <Typography align="center" sx={{ mt: 2, color: '#dc3545', fontWeight: 'bold' }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;

