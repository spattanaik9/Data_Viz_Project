import React, { useRef, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const { tableau } = window;

function TableauEmbed() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    

    //economic
    const url5 = "https://public.tableau.com/views/unemp_2_17017078712220/Dashboard1?:toolbar=no&:showShareOptions=false";
    const url2 = "https://public.tableau.com/shared/Y7WNJ9BMW";

    //happiness 
    const url3 = "https://public.tableau.com/views/happiness_choropleth/Dashboard2";
    
    
    //ott
    const url4 = "https://public.tableau.com/views/OTTsubscriptiontrendsyear/Dashboard1";
    const url1 = "https://public.tableau.com/views/Industry_GDP/Dashboard1";

    const options = {
        device: "desktop",
        width: '1000px',
        height: '800px'
    };
    const options_2 = {
        device: "desktop",
        width: '400px',
        height: '400px' 
    }

    const ott_data = [
    
        { year: 2018, Netflix: 147.4, Amazon_Video: 93.3, Hulu: 57, ESPN: 3.4 },
        { year: 2019, Netflix: 154.4, Amazon_Video: 106.6, Hulu: 76.3, ESPN: 12.6 },
        { year: 2020, Netflix: 168.9, Amazon_Video: 130.1, Hulu: 94.5, ESPN: 3.4 },
        { year: 2021, Netflix: 171.7, Amazon_Video: 136.9, Hulu: 99.7, ESPN: 3.4 },
        { year: 2022, Netflix: 175.5, Amazon_Video: 143.2, Hulu: 106.1, ESPN: 3.4 },
      ];

    useEffect(() => {
        let viz1 = null;
        let viz2 = null;
        let viz3 = null;
        let viz4 = null;
        let viz5 = null;
        

        const initViz = () => {
            // Ensure that the previous viz is cleaned up before creating a new one
            if (viz1) {
                viz1.dispose();
            }

            if (viz2) {
                viz2.dispose();
            }

            if (viz3) {
                viz3.dispose();
            }

            if (viz4) {
                viz4.dispose();
            }
            if (viz5) {
                viz5.dispose();
            }
           

            viz1 = new tableau.Viz(ref1.current, url1, options);
            viz2 = new tableau.Viz(ref2.current, url2, options);
            viz3 = new tableau.Viz(ref3.current, url3, options);
            viz4 = new tableau.Viz(ref4.current, url4, options);
            viz5 = new tableau.Viz(ref5.current, url5, options);
           

        };

        initViz(); // Call initViz once when the component mounts

        

        return () => {
            //Cleanup when the component unmounts
            if (viz1) {
                viz1.dispose();
            }

            if (viz2) {
                viz2.dispose();
            }

            if (viz3) {
                viz3.dispose();
            }

            if (viz4) {
                viz4.dispose();
            }

            if (viz5) {
                viz5.dispose();
            }

            
        };
    }, [url1, url2, url3, url4, url5, options, ott_data]);

    return (
        <div>
            <p className="section-heading">Economic Trends</p>
            <div className="chart-container">
            <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize:25, color: 'rgb(158, 236, 239)', textAlign:'left'}}>
                This analysis dissects the impact on various industries, revealing the percentage contributions of each sector to the overall GDP landscape.
            </p>
            <div className="tableau-container" ref={ref1}> </div>
            </div>
            <br/>
            <div className="chart-container">
            <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize:25, color: 'rgb(158, 236, 239)', textAlign:'left'}}>
            This choropleth dynamically illustrates the fluctuation of state-level unemployment rates from 2013 to 2023, offering users the flexibility to select specific years or play through the entire decade for a comprehensive view of the evolving employment landscape.
            </p>
            <div className="tableau-container" ref={ref5}></div>
            </div>

            <p className="section-heading">Mental Health Insights</p>
            <div className="chart-container">
            <div className="tableau-container" ref={ref3}>
            </div>
            <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize:25, color: 'rgb(158, 236, 239)', textAlign:'left'}}>
            Explore the changing happiness landscape in the United States with this choropleth map, comparing the top 10 happiest and bottom 10 happiest states in the pre-pandemic year 2018 to the post-pandemic year 2022.
            </p>
            </div>
            <br/>
            <br/>

           <div className="chart-container"> 
            <img src='depression_rate.png'
                style={{ width: '100%', maxWidth: '800px', margin: '10px auto', border:'2px solid #000' , borderRadius: '8px'}}
            />
            <p className="custom-paragraph">
            Recent data from a Gallup Panel survey (Feb. 21-28, 2023) reveals concerning trends in depression diagnoses among U.S. adults. 
            <br/><br/>
            Over one-third of women (36.7%) report a lifetime diagnosis, compared to 20.4% of men, with women's rates rising nearly twice as fast since 2017. 
            <br/><br/>
            Those aged 18 to 29 (34.3%) and 30 to 44 (34.9%) show significantly higher lifetime diagnosis rates than older age groups. 
            <br/><br/>
            Current depression or treatment rates are highest among women (23.8%) and adults aged 18 to 29 (24.6%), with notable increases since 2017. 
            <br/><br/>
            The post-COVID rise is attributed to factors like social isolation, job losses, and healthcare worker stress. </p>
            </div>


            
            <p className="section-heading">OTT Insights</p>
            <div className="chart-container">
                <p className="custom-paragraph">This bar chart visually captures the watchtime trends of OTT platforms in the United States from 2018 to 2022, providing a clear snapshot of the evolving user preferences over the specified time period.</p>
            <div className="tableau-container" ref={ref4}></div>
            </div>
            <br/>
            <div className="line-chart">
            <LineChart
                width={1000}
                height={900}
                data={ott_data}  
                margin={{ top: 100, right: 100, left: 100, bottom: 100 }}
                
                >
                <CartesianGrid strokeDasharray="3 3" stroke="#383323"/>
                <XAxis 
                    dataKey="year"
                    label={{ value: "Year", fontSize: 24, fill: 'white', dy:50, offset: -30 }} 
                    tick={{ fontSize: 22, fill: 'white', dy:10 }} 
                />
                <YAxis
                    label={{ value: "Number of Viewers in Millions", angle: -90, position: 'insideLeft', fontSize: 24, fill: 'white', offset:-30, textAnchor:'middle', dy:120, }}
                    tick={{ fontSize: 22, fill: 'white' }}  
                    
                />
                <Tooltip 
                formatter={(value, name) => [value, name]}
                contentStyle={{backgroundColor: 'transparent', color: 'white', border:'none', textAlign: 'left', fontSize:'24px'}}      
                />
                <Legend verticalAlign="top" height={36} />

                <Line type="monotone" dataKey="Netflix" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="Amazon_Video" stroke="#82ca9d" strokeWidth={3} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Hulu" stroke="pink" strokeWidth={3} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="ESPN" stroke="yellow" strokeWidth={3} activeDot={{ r: 8 }} />
                
            </LineChart>
            </div>
            <br/>
            <div className="tableau-container" ref={ref2}></div>
        </div>
    );
}

export default TableauEmbed;
