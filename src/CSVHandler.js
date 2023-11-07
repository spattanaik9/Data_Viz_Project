import Papa from 'papaparse';

const parseCSV = (filepath) => {
    return new Promise((resolve, reject) => {
        Papa.parse(filepath, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                resolve(results.data);
            },
            error: (error) => {
                reject(error.message);
            },
        });
    });
};

export const getAllYearsMHData = async(filePaths) => {
    try {
        const allData = [];

        for(const filepath of filePaths){
            const data = await parseCSV(filepath);
            allData.push(...data);
        }

        return allData;
    } catch (error){
        throw new Error('Error parsing csv: ' + error);
    }
};

