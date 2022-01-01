// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// Notice the lack of parentheses around the 'profileDataArr' parameter?
// const printProfileData = profileDataArr => {
    // This...
   //  for (let i = 0; i < profileDataArr.length; i++) {
       //  console.log(profileDataArr[i]);
    // }

    // console.log('===============');

    // Is the same as this....
   //  profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// this is the same as generatePage as above written in multi-line string
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

