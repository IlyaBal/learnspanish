/* eslint-disable react/prop-types */
import React from 'react';

import LessonCards from '../../components/LessonCards/LessonCards';
import TestView from '../../components/LessonTest/TestView';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from '../../components/CustomPanel';

export default function LessonView({ children, quiz, dictionary }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Урок" />
            <Tab label="Словарь" />
            <Tab label="Тест" />
          </Tabs>
        </Box>
        <CustomTabPanel value={activeTab} index={0}>
          {children}
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={1}>
          <LessonCards data={dictionary} />
        </CustomTabPanel>
        <CustomTabPanel value={activeTab} index={2}>
          <TestView data={quiz} />
        </CustomTabPanel>
      </Box>
    </>
  );
}
