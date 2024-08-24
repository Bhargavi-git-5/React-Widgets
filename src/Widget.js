import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Widget = ({ widget, removeWidget }) => {
  const chartData = {
    labels: widget.data.labels,
    datasets: [
      {
        data: widget.data.values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
<div class='row' style={{width:'100%'}}>

  <div class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-xaep3o-MuiPaper-root-MuiCard-root'>
  {/* <Typography variant="h5" gutterBottom>
        CNAPP Dashboard
      </Typography> */}
    <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flexGrow: 1}}>
        <Typography variant="h6">{widget.name}</Typography>
        <Box sx={{ height: 200 }}>
        <Doughnut data={chartData} />
        </Box>
      </Box>
      <IconButton onClick={removeWidget}>
       <button style={{marginLeft:'-100%'}}>Remove</button> 
      </IconButton>
    </Box>
    </div>
    </div>
    </>
  );
};

export default Widget;
