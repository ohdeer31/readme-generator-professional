// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {
  return `# ${data.projectName}
  ![license](https://img.shields.io/badge/license-${data.license}-yellow)
  ## Description
  
  - ${data.motivation}
  - ${data.whyBuilt}
  - ${data.problemSolve}
  - ${data.whatLearned}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  This application is covered under ${data.license}.

  ## Tests

  ${data.tests}

  ## Questions

  For any question, please contact [${data.userName}](https://github.com/${data.userName}).
  \nPlease reach me by the following email address: ${data.email}
`;
}

module.exports = generateMarkdown;
