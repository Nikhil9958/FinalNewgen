import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './BasicTabs.css'
// import Main from '../Main/Main'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ padding: '0%' }} className='basictabs'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ display: 'inline-block' }}>
          <Tab label="Best Model" {...a11yProps(0)} />
          <Tab label="Comparision" {...a11yProps(1)} />
          <Tab label="All Models" {...a11yProps(2)} />
        </Tabs>
        
        <button className='downloadBtn'>Download <select name="types" id="downloadBtnId"></select> </button>
          <p className='viewPipeline'>View Pipeline</p>
       
      </Box>
      <TabPanel value={value} index={0}>
        Best Model
      </TabPanel>
      <TabPanel value={value} index={1} className='card-container'>
        {/* <Main /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        All Models
      </TabPanel>

    </Box>
  );
}
