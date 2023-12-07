import React, { useState, useEffect } from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Papa from 'papaparse';

import TableauEmbed from './components/TableauEmbed';




const App = () => {

  const [selectedVariables, setSelectedVariables] = useState({ first: 'Depression_Percentage', second: 'Number_Of_Internet_Users'});
  
  const handleVariableChange = (e, position) => {
    if (position === 'first'){
      setSelectedVariables({ ...selectedVariables, first: e.target.value });
    } else {
      setSelectedVariables({ ...selectedVariables, second: e.target.value });
    }
  };

  const formatNumber = (value) => {
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;

    while (value >= 1000) {
      value /= 1000;
      suffixNum++;
    }

    // Format the value with the appropriate suffix
    const newValue = value.toPrecision(3);
    return newValue + suffixes[suffixNum];
  };

  const data01 = [
    
    {
      name: '2015',
      GDP: 1304097000,
      Netflix_Subscribers: 99000000,
      Unemployment_Rate: 5.28,
      Personal_Income: 72090,
      Depression_Percentage: 19.6,
      Happiness_Index: 7.12,
      Inflation: 0.10,
      Number_Of_Internet_Users: 280000000,
      
    },
    {
      name: '2016',
      GDP: 1304097000, 
      Netflix_Subscribers: 99000000,
      Unemployment_Rate: 4.87,
      Personal_Income: 72090,
      Depression_Percentage: 20.1,
      Happiness_Index: 7.10,
      Inflation: 1.30,
      Number_Of_Internet_Users: 282100000
    },
    {
    name: '2017',
    GDP: 1304097000,
    Netflix_Subscribers: 99000000,
    Unemployment_Rate: 4.36,
    Personal_Income: 72090,
    Depression_Percentage: 20.7,
    Happiness_Index: 6.99,
    Inflation: 2.10,
    Number_Of_Internet_Users: 286900000,
    OTT_Subscribers: 153000000,
  },
  {
    name: '2018',
    GDP: 1393774000,
    Netflix_Subscribers: 124300000,
    Unemployment_Rate: 3.90,
    Personal_Income: 73030,
    Depression_Percentage: 22.0,
    Happiness_Index: 6.89,
    Inflation: 2.40,
    Number_Of_Internet_Users: 286900000,
    OTT_Subscribers: 170100000,
  },
  {
    name: '2019',
    GDP: 1460160000,
    Netflix_Subscribers: 151500000,
    Unemployment_Rate: 3.67,
    Personal_Income: 78250,
    Depression_Percentage: 21.6,
    Happiness_Index: 6.89,
    Inflation: 1.80,
    Number_Of_Internet_Users: 312300000,
    OTT_Subscribers: 181500000,

  },
  {
    name: '2020',
    GDP: 863658000,
    Netflix_Subscribers: 192900000,
    Unemployment_Rate: 8.05,
    Personal_Income: 76660,
    Depression_Percentage: 22.9,
    Happiness_Index: 6.95,
    Inflation: 1.20,
    Number_Of_Internet_Users: 288100000,
    OTT_Subscribers: 188300000,
  },
  {
    name: '2021',
    GDP: 1189181000,
    Netflix_Subscribers: 219700000,
    Unemployment_Rate: 5.35,
    Personal_Income: 76330,
    Depression_Percentage: 28.6,
    Happiness_Index: 6.98,
    Inflation: 4.70,
    Number_Of_Internet_Users: 298800000,
    OTT_Subscribers: 193200000,
  },
  {
    name: '2022',
    GDP: 1682774000,
    Netflix_Subscribers: 230700000,
    Unemployment_Rate: 3.61,
    Personal_Income: 74580,
    Depression_Percentage: 26.9,
    Happiness_Index: 6.89,
    Inflation: 8.00,
    Number_Of_Internet_Users: 370200000,
    OTT_Subscribers: 197700000,
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
        <h1>The Streaming Balance</h1>
        <h1 style={{fontSize:35}}>Unveiling Economic Trends, OTT Platforms, and Mental Health Insights</h1>
        
      </div>
     

      
      <div className="chart-container">
      
        <div className="dropdown-container" >
        
        <select className="btn btn-lg btn-outline-info text-light dropdown-toggle"
          value={selectedVariables.first} 
          onChange={(e) => handleVariableChange(e, 'first')}
        >

          <option value="GDP">GDP</option>  
          <option value="Netflix_Subscribers">Netflix Subscribers</option>
          <option value="Unemployment_Rate">Unemployment Rate</option>
          <option value="Personal_Income">Personal Income</option>
          <option value="Depression_Percentage">Depression Percentage</option>
          <option value="Happiness_Index">Happiness Index</option>
          <option value="Inflation">Inflation</option>
          <option value="Number_Of_Internet_Users">Internet Users</option>
          <option value="OTT_Subscribers">OTT Subscribers</option>
          

        </select>
      
        <select className="btn btn-lg btn-outline-info text-light"
          value={selectedVariables.second} 
          onChange={(e) => handleVariableChange(e, 'second')}
        >

          <option value="GDP">GDP</option>
          <option value="Netflix_Subscribers">Netflix Subscribers</option>
          <option value="Unemployment_Rate">Unemployment Rate</option>
          <option value="Personal_Income">Personal Income</option>
          <option value="Depression_Percentage">Depression Percentage</option>
          <option value="Happiness_Index">Happiness Index</option>
          <option value="Inflation">Inflation</option>
          <option value="Number_Of_Internet_Users">Internet Users</option>
          <option value="OTT_Subscribers">OTT Subscribers</option>

        </select> 
        </div>
      
        <div className="line-chart">
         <LineChart
          width={1000}
          height={800}
          data={data01}  
          margin={{ top: 100, right: 100, left: 100, bottom: 100 }}
          
          >
          <CartesianGrid strokeDasharray="3 3" stroke="#383323"/>
          <XAxis 
            dataKey="name"
            label={{ value: "Year", fontSize: 24, fill: 'white', dy:50, }} 
            tick={{ fontSize: 22, fill: 'white', dy:10 }} 
          />
          <YAxis 
            yAxisId="left" 
            label={{ value: selectedVariables.first, angle: -90, position: 'insideLeft', fontSize: 24, fill: '#8884d8', offset:-30, textAnchor:'middle', dy:100, }}
            tickFormatter={(value) => formatNumber(value)} 
            tick={{ fontSize: 22, fill: 'white' }}  
            domain={['auto', 'auto']}
          />
          <YAxis 
            yAxisId="right" 
            label={{ value: selectedVariables.second, angle: +90, position: 'insideRight', fontSize: 24, fill: '#82ca9d', offset:-30, textAnchor:'middle', dy:100 }}
            tickFormatter={(value) => formatNumber(value)}
            tick={{ fontSize: 22, fill: 'white' }} 
            domain={['auto', 'auto']} 
            orientation="right" />
          <Tooltip 
            formatter={(value, name) => [formatNumber(value), name]}
            contentStyle={{backgroundColor: 'transparent', color: 'white', border:'none', textAlign: 'left', fontSize:'24px'}}  
          />
          
          <Line yAxisId="left" type="monotone" dataKey={selectedVariables.first} stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey={selectedVariables.second} stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }}/>
          </LineChart>
          </div>

          <p style={{ fontFamily: "'Times New Roman', Times, serif", padding: '50px', fontSize:25, color: 'rgb(158, 236, 239)', textAlign:'left'}}>
          Exploring data trends across various socioeconomic factors from 2015 to 2022 to understand the impact of the COVID-19 pandemic on key indicators like GDP, mental health, employment, and more. 
        </p>
      </div>

      <div>
        <TableauEmbed />
      </div>
      
    </div>
  );
};

export default App;
