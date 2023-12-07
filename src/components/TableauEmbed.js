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
            This chart visually represents the proportionate contribution of different industries, expressed as a percentage of the Gross Domestic Product (GDP) over the past six years. 
            <br/><br/>
            It offers insights into how individual industries have shaped the overall economic landscape. Examining the percentages for each year allows us to discern patterns and variations in the value added by industries from 2017 to 2022.
            </p>
            <div className="tableau-container" ref={ref1}> </div>
            </div>
            <br/>
            <div className="chart-container">
            <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize:25, color: 'rgb(158, 236, 239)', textAlign:'left'}}>
            This choropleth map shows the dynamic landscape of unemployment rates across U.S. states from 2013 to 2023. 
            <br/><br/>
            As we explore the map, valuable insights into economic shifts and regional disparities that have unfolded over the past decade can be gained. Patterns and trends become evident, capturing the ebb and flow of employment conditions across the United States during this period.
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
                <p className="custom-paragraph">
                It is anticipated that the duration of time spent by Americans engaging in subscription over-the-top (OTT) video will steadily rise each year. 
                <br/><br/>
                In 2018, the average daily usage time was 44 minutes, whereas in 2022, it increase to 70 minutes. 
                <br/><br/>
                The growth in the usage time for 2020 was 62 minutes per day, which can be partly attributed to the COVID-19 epidemic, leading to an increase in the amount of time people spend at home.
                </p>
            <div className="tableau-container" ref={ref4}></div>
            </div>
            

            <div className="chart-container">
                <p className="custom-paragraph">The number of users of OTT (Over-The-Top) video services in the United States from 2017 to 2022 has shown a significant increase. 
                    <br/><br/>
                    This graphical representation provides a clear picture of the changing digital media landscape and the growing trend of online streaming platforms. It highlights the surge in OTT viewership over the years, which is an indication of the increasing adoption of these platforms by users.
                </p>
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
            </div>
            

            <div className="chart-container">
                <p className="custom-paragraph">
                This data presents the usage distribution of Over-the-Top (OTT) platforms, including popular services such as Netflix, Prime Video, Hulu, and others. It displays the percentage split between male and female viewers, highlighting how different OTT platforms attract and engage audiences. 
                <br/><br/>
                This information helps to distinguish the specific preferences of men and women when it comes to digital streaming.
                </p>
            <div className="tableau-container" ref={ref2}></div>
            </div>
        </div>
    );
}

export default TableauEmbed;
