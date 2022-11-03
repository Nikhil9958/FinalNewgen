import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import './BasicTabs.css'
import Card from '../Card/Card';
// import Main from '../Main/Main'

const defaultFixedBoxValue = {
  versionKey:'V1',
  versionValue:'V1',
  isDeletable : false,

  timeStampKey:'T1',
  timeStampValue:'23/08/2022 1:54pm',

  algorithmKey:'RFC',
  algorithmValue:'RFC',

  clusterKey:'C1',
  clusterValue:'Cluster Index - 1'
}

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
        <div style={{ display: 'flex' }}>
          <div className='addAlgorithm'>
            <div className='addAlgorithmSubContainer'>
              <Button variant="contained" className='addButton'><AddIcon fontSize='large' /></Button>
              <p className='addAlgoText'>Add Algorithm</p>
            </div>
          </div>

          <Card data = {defaultFixedBoxValue} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        All Models
      </TabPanel>

    </Box>
  );
}
