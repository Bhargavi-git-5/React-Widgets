import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Category from './Category';
import WidgetForm from './WidgetForm';
import SearchBar from './SearchBar';
// import initialData from './data/sampleData.json'; // Assume JSON data is saved here

const App = () => {
  const [dashboard, setDashboard] = useState({
    "categories": [
      {
        "id": "1",
        "name": "CSPM Executive Dashboard",
        "widgets": [
          {
            "id": "1",
            "name": "Cloud Accounts",
            "data": {
              "labels": ["Q1", "Q2", "Q3", "Q4"],
              "values": [50, 50, 0, 0]
            }
          },
          {
            "id": "2",
            "name": "Cloud Account Risk Assessment",
            "data": {
              "labels": ["Rent", "Utilities", "Salaries", "Other"],
              "values": [30, 15, 45, 10]
            }
          }
        ]
      },
      {
        "id": "2",
        "name": "CWPP Dashboard",
        "widgets": [
          {
            "id": "3",
            "name": "Top 5 Namespace Specific Alerts",
            "data": {
              "labels": ["Facebook", "Google", "Twitter", "LinkedIn"],
              "values": [40, 35, 15, 10]
            }
          },
          {
            "id": "4",
            "name": "Workload Alerts",
            "data": {
              "labels": ["Analysis", "Development", "Ready To QA", "Completed"],
              "values": [10, 30, 20, 40]
            }
          }
        ]
      }
    ]
  }
  );

  const addWidgetToCategory = (categoryId, widget) => {
    const updatedCategories = dashboard.categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, widgets: [...cat.widgets, widget] };
      }
      return cat;
    });
    setDashboard({ ...dashboard, categories: updatedCategories });
  };

  const removeWidgetFromCategory = (categoryId, widgetId) => {
    const updatedCategories = dashboard.categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, widgets: cat.widgets.filter(widget => widget.id !== widgetId) };
      }
      return cat;
    });
    setDashboard({ ...dashboard, categories: updatedCategories });
  };

  const handleAddWidget = (categoryId, widgetName, widgetData) => {
    const newWidget = {
      id: (dashboard.categories.flatMap(cat => cat.widgets).length + 1).toString(),
      name: widgetName,
      data: widgetData
    };
    addWidgetToCategory(categoryId, newWidget);
  };

  return (
    <Container>
      <h5>My Assignment DashBoard</h5>
      <SearchBar widgets={dashboard.categories.flatMap(cat => cat.widgets)} />
      {dashboard.categories.map(cat => (
        <Category
          key={cat.id}
          category={cat}
          removeWidgetFromCategory={removeWidgetFromCategory}
        />
      ))}
        
      <WidgetForm categories={dashboard.categories} handleAddWidget={handleAddWidget} />
    </Container>
  );
};

export default App;
