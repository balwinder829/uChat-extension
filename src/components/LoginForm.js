/*global chrome*/
import React, { useState } from 'react';
import { TextField, Button, Box, Container, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = ({isIframeVisible, setIsIframeVisible}) => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [show, setShow] = useState(false)
  // const [errors, setErrors] = useState({});

  // const validate = () => {
  //   const errors = {};
  //   if (!username) {
  //     errors.username = 'Username is required';
  //   }
  //   if (!password) {
  //     errors.password = 'Password is required';
  //   }
  //   return errors;
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
  // const errors = validate();
    // setErrors(errors);
    // if (Object.keys(errors).length === 0) {
      chrome.runtime.sendMessage({ type: 'LOGIN_SUBMIT' });
      // }
  };

  return (
    <Container component="div" sx={{width:isIframeVisible ? '100%' : '350px', display:'flex', justifyContent:'center'}}>
      <Box
        sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:'350px',
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{color:'black', padding:'10px',textAlign:'center', width:'100%'}}>Click to Open Chat Option</Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{padding:'0px 15px 15px 15px '}}>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => 
            {
                setUsername(e.target.value)
                setErrors((prevErrors) => ({ ...prevErrors, username: null }));
            }
            }
            error={errors.username ? true : false}
            helperText={errors.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={show ? 'text' :"password"}
            id="password"
            value={password}
            onChange={(e) => 
            {
                setErrors((prevErrors) => ({ ...prevErrors, password: null }));
                setPassword(e.target.value)
            }
            }
            InputProps={{startAdornment: (
                <Box onClick={()=>setShow(!show)}>
                <InputAdornment position="start">
                 {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </InputAdornment>
                </Box>
            )}}
            error={errors.password ? true : false}
            helperText={errors.password}
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2, backgroundColor:'#2a3847', textTransform:'math-auto' }}
          >
          Open uChat
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;