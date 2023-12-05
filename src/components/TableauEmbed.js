import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TableauEmbed() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const url1 = "https://public.tableau.com/views/unemp_2_17017078712220/Dashboard1";
    const url2 = "https://public.tableau.com/views/DataViz_17017190049000/Sheet1";
    const url3 = "https://public.tableau.com/shared/TB9QT6PK3";
    const url4 = "https://public.tableau.com/views/OTTsubscriptiontrendsyear/Dashboard1";

    const options = {
        device: "desktop",
    };

    useEffect(() => {
        let viz1 = null;
        let viz2 = null;
        let viz3 = null;
        let viz4 = null;

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

            viz1 = new tableau.Viz(ref1.current, url1, options);
            viz2 = new tableau.Viz(ref2.current, url2, options);
            viz3 = new tableau.Viz(ref3.current, url3, options);
            viz4 = new tableau.Viz(ref4.current, url4, options);
        };

        initViz(); // Call initViz once when the component mounts

        return () => {
            // Cleanup when the component unmounts
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
        };
    }, [url1, url2, url3, url4, options]);

    return (
        <div>
            <p>US Statewise Unemployment 2013 - 2023</p>
            <div ref={ref1}></div>

            <p>Viz2</p>
            <div ref={ref2}></div>

            <p>Viz3</p>
            <div ref={ref3}></div>

            <p>Viz4</p>
            <div ref={ref4}></div>
        </div>
    );
}

export default TableauEmbed;
