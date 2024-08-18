import './App.css';
import { CssBaseline } from '@mui/material';
import LoginForm from './components/LoginForm';
import { Box } from '@mui/material';
import IframeOverlay from './components/IframeOverlay';

function App() {

  return (
    <Box>
        <CssBaseline />
        <LoginForm />
        {/* <IframeOverlay /> */}
    </Box>
  );
}


export default App;
