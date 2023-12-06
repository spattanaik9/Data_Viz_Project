import React, { useRef, useEffect } from "react";


const { tableau } = window;

function TableauEmbed() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const url5 = "https://public.tableau.com/views/unemp_2_17017078712220/Dashboard1?:toolbar=no&:showShareOptions=false";
    const url2 = "https://public.tableau.com/shared/Y7WNJ9BMW";
    const url3 = "https://public.tableau.com/shared/7T89RR9G4";
    const url4 = "https://public.tableau.com/views/OTTsubscriptiontrendsyear/Dashboard1";
    const url1 = "https://public.tableau.com/views/Industry_GDP/Dashboard1";

    const options = {
        device: "desktop",
    };

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
    }, [url1, url2, url3, url4, url5, options]);

    return (
        <div>
            <p className="section-heading">Economic Trends</p>
            <div className="tableau-container" ref={ref1}></div>
            <br/>

            <div className="tableau-container" ref={ref5}></div>

            <p className="section-heading">Mental Health Insights</p>
            <div className="tableau-container" ref={ref3}>
            </div>
            <br/>
            <br/>

            <img src='lifetime depression.png'
                style={{ width: '100%', maxWidth: '800px', margin: '10px auto' }}
            />
            
            

            <p className="section-heading">OTT Insights</p>
            <div className="tableau-container" ref={ref4}></div>
            <br/>
            <div className="tableau-container" ref={ref2}></div>
        </div>
    );
}

export default TableauEmbed;
