import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

const SearchBar = ({ widgets }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWidgets = widgets.filter(widget =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        label="Search Widgets"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Box sx={{ mt: 2 }}>
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map(widget => (
            <Typography key={widget.id} variant="body2">
              {widget.name}
            </Typography>
          ))
        ) : (
          <Typography variant="body2">No widgets found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SearchBar;
