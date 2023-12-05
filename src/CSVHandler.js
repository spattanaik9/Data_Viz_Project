import Papa from 'papaparse';

const parseCSV = (csvFile) => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvFile, {
      header: true,
      complete: (results) => {
        console.log(results.data);
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

export default parseCSV;
