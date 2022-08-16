
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit:`[![License: MIT]https://img.shields.io/badge/License-GNU-blue](https://opensource.org/licenses/MIT)`,
    gnu: `[![License: GNU]https://img.shields.io/badge/License-GNU-blue](https://www.gnu.org/licenses/gpl-3.0.en.html)`,
    isc: `[![License: ISC]https://img.shields.io/badge/License-ISC-blue](https://opensource.org/licenses/ISC)`
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    mit:`[MIT](https://opensource.org/licenses/MIT)`,
    gnu: `[GNU](https://www.gnu.org/licenses/gpl-3.0.en.html)`,
    isc: `[ISC](https://opensource.org/licenses/ISC)`
  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `Licensed under the ${this.renderLicenseLink(license)} license`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
`;
}


module.exports = generateMarkdown;