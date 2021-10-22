# Bhavcopy Typescript

Node/Typescript module for downloading bhavcopy from NSE

```
import BhavCopy from 'bhavcopy';
const options = {
 type: 'json' // optional. if not specified, zip file will be downloaded. Valid TYPES: ['json', 'csv', 'zip']
 dir: "xxxx" // optional. if not specified, files will be downloaded under NSE folder
};
const request = new BhavCopy(options);
request
 .download({
   month: "SEP", // required (values can be anything as given below under MONTH CODES)
   year: 2016, // required (values can be anything as given below under YEAR CODES)
   day: 18 // optional (values can be anything in range: 1 - 31)
 })
 .then(data => {
   console.log(data); // Wait! Files are downloading...
 })
 .catch(err => {
   console.log(err);
 });
```
