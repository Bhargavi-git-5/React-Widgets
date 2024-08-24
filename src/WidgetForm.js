import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const WidgetForm = ({ categories, handleAddWidget }) => {
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '');
  const [widgetName, setWidgetName] = useState('');
  const [widgetLabels, setWidgetLabels] = useState('');
  const [widgetValues, setWidgetValues] = useState('');

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const labels = widgetLabels.split(',').map(label => label.trim());
    const values = widgetValues.split(',').map(value => parseFloat(value.trim()));

    handleAddWidget(categoryId, widgetName, { labels, values });
    setWidgetName('');
    setWidgetLabels('');
    setWidgetValues('');
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        + Add Widget
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Widget</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              {categories.map(cat => (
                <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Widget Name"
            fullWidth
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Labels (comma-separated)"
            fullWidth
            value={widgetLabels}
            onChange={(e) => setWidgetLabels(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Values (comma-separated)"
            fullWidth
            value={widgetValues}
            onChange={(e) => setWidgetValues(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WidgetForm;
