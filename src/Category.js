import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Close } from '@mui/icons-material';
import Widget from './Widget';

const Category = ({ category, removeWidgetFromCategory }) => {
  return (
    <>
    <Typography variant="h5" gutterBottom>
        CNAPP Dashboard
      </Typography>
    <Card sx={{ mb: 2}}>
      <CardContent sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        {/* <Typography variant="h5"></Typography> */}
        
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidgetFromCategory(category.id, widget.id)}
          />
        ))}
      </CardContent>
    </Card>
    </>
  );
};

export default Category;
