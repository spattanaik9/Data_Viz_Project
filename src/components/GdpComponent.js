import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = ({ data, sector }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Filter data based on the sector
    const filteredData = data.filter(item => item.Sector === sector);

    // Calculate the sum of '% of GDP' for each year
    const groupedData = filteredData.reduce((acc, curr) => {
      const year = curr.Year;
      acc[year] = (acc[year] || 0) + parseFloat(curr['% of GDP']);
      return acc;
    }, {});

    // Format data for Recharts
    const formattedChartData = Object.keys(groupedData).map(year => ({
      year,
      gdpPercentage: groupedData[year],
    }));

    setChartData(formattedChartData);
  }, [data, sector]);

  return (
    <BarChart width={600} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="gdpPercentage" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
