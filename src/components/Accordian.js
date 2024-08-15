import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function IframeAccordion() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 10000, width: '100%', backgroundColor: 'white' }}>
      hey test
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Open Iframe</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe
            src="https://app.cig.chat/inbox/f93795u107359087"
            style={{ width: '100%', height: '400px', border: 'none' }}
            allowFullScreen
            title='chat'
          />
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}

export default IframeAccordion;
