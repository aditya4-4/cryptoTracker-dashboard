/* eslint-disable react/prop-types */

import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {  createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import './styles.css'
import Grid from '../Grid'
import List from '../List';

export default function TabsComponents({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color : "var(--white)",
    width : "50vw",
    fontSize : "1.2rem",
    fontWeight : "600",
    fontFamily : "Inter",
    textTransform : "capitalize"
  }

  const theme = createTheme({
    palette : {
      primary : {
        main : "#3a80e9",
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>

        <TabPanel value="grid">
          <div className='grid-flex'>
            {coins != undefined && coins.map((coin,idx) => (
              <Grid coin={coin} key={idx}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div className='list-flex'>
            {coins != undefined && coins.map((coin,idx) => {
            return <List coin={coin} key={idx} />
            })}</div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}