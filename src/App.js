import React, { useState, useEffect } from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Papa from 'papaparse';

import TableauEmbed from './components/TableauEmbed';


const App = () => {

  const [selectedVariables, setSelectedVariables] = useState({ first: 'gdp', second: 'mental_illness'});
  
  const handleVariableChange = (e, position) => {
    if (position === 'first'){
      setSelectedVariables({ ...selectedVariables, first: e.target.value });
    } else {
      setSelectedVariables({ ...selectedVariables, second: e.target.value });
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const data01 = [
    {
    name: '2017',
    gdp: 4000,
    mental_illness: 45641,
    netflix_subscribers: 10000,
    unemployment_rate: 5,
    personal_income: 45000,
  },
  {
    name: '2018',
    gdp: 4000,
    mental_illness: 47132,
    netflix_subscribers: 14000,
    unemployment_rate: 15,
    personal_income: 50000,
  },
  {
    name: '2019',
    gdp: 4000,
    mental_illness: 49564,
    netflix_subscribers: 80000,
    unemployment_rate: 20,
    personal_income: 90000,
  },
  {
    name: '2020',
    gdp: 4000,
    mental_illness: 0,
    netflix_subscribers: 100000,
    unemployment_rate: 30,
    personal_income: 450000,
  },
  {
    name: '2021',
    gdp: 4000,
    mental_illness: 57804,
    netflix_subscribers: 10000000,
    unemployment_rate: 5,
    personal_income: 450000,
  },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('csv/GDP_By_Industry.csv');
      const text = await response.text();
      const result = Papa.parse(text, { header: true });
      setData(result.data);
    };

    fetchData();
  }, []);


  return (
    
    <div className="App">
      <div>
        <h1>The Streaming Balance: Unveiling Economic Trends, OTT Platforms, and Mental Health Insights</h1>
        <p>
          Exploring data trends across various socioeconomic factors from 2016 to 2022 to understand the impact of the COVID-19 pandemic on key indicators like GDP, mental health, employment, and more. 
        </p>
      </div>
      
      <div>
      <select value={selectedVariables.first} onChange={(e) => handleVariableChange(e, 'first')}>
        <option value="gdp">GDP</option>
        <option value="mental_illness">Mental Illness</option>
        <option value="netflix_subscribers">Netflix Subscribers</option>
        <option value="unemployment_rate">Unemployment Rate</option>
        <option value="personal_income">Personal Income</option>
      </select>
      <select value={selectedVariables.second} onChange={(e) => handleVariableChange(e, 'second')}>
        <option value="gdp">GDP</option>
        <option value="mental_illness">Mental Illness</option>
        <option value="netflix_subscribers">Netflix Subscribers</option>
        <option value="unemployment_rate">Unemployment Rate</option>
        <option value="personal_income">Personal Income</option>
      </select> 
      </div>
      <div>
      <LineChart
          width={1000}
          height={500}
          data={data01}  
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey={selectedVariables.first} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey={selectedVariables.second} stroke="#82ca9d" />
        </LineChart>
      </div>

      <div>
        <TableauEmbed />
      </div>
      
    </div>
  );
};

export default App;
