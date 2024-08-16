import './App.css';
import { CssBaseline } from '@mui/material';
import LoginForm from './components/LoginForm';
import { Box } from '@mui/material';
import Accordion from './components/Accordian';

function App() {

  return (
    <Box>
        <CssBaseline />
        <LoginForm />
        {/* <Accordion /> */}
    </Box>
  );
}


export default App;
