Survey
    .StylesManager
    .applyTheme("defaultV2");

// This is the datastructure for the mitigations for the threat of 
// compromise of confidential information
const compromiseOfConfidentialInformation = {
    changingPasswords: {
        mitigationName: "Changing passwords after a precipitating event (e.g., passwords being leaked, data breach)",
        mitigationDescription: "If you've been involved in any kind of data breanch, it is " + 
            "important to change your passwords so that malicious actors can't access other accounts that use the same password. " + 
            "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=kJVrV2HT-s4'> https://www.youtube.com/watch?v=kJVrV2HT-s4 </a>",
        skillLevel: "Low",
        skillLevelNumeric: "1"
    },
    twoFactorAuth: {
        mitigationName: "Two-Factor Authentication",
        mitigationDescription: "Two-Factor authentication requires that you have another way to verify who you are (not just passwords)." +
        "That way, if a malicious actor is able to obtain your password, they still can't log into your account. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=AMOtB7XkTT4'> https://www.youtube.com/watch?v=AMOtB7XkTT4 </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    }, 
    phishingEmails: {
        mitigationName: "Being educated on phishing emails",
        mitigationDescription: "Understanding how malicious actors might use email to get confidential information can protect you from" + 
        " falling victim to a phishing attack. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=Y7zNlEMDmI4'> https://www.youtube.com/watch?v=Y7zNlEMDmI4 </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    uniquePasswords: {
        mitigationName: "Making each password unique for every site",
        mitigationDescription: "Using unique passwords can prevent malicious actors from using compromised or stolen passwords to access your resources. " + 
        "If a password is stolen and found by a malicious actor, unique passwords will limit their access to only that service instead of other services that use the same password." + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=AJQ76iBh4IE'> https://www.youtube.com/watch?v=AJQ76iBh4IE </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    suspiciousLinks: {
        mitigationName: "Being educated on suspicious links",
        mitigationDescription: "Being aware of suspicious links can protect you from malicious websites. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=M5u3AtwmW4I'> https://www.youtube.com/watch?v=M5u3AtwmW4I </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    complexPasswords: {
        mitigationName: "Making passwords strong (i.e., long and complex)",
        mitigationDescription: "Making strong passwords makes it harder for malicious actors to guess what your passwords are. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=h_WZk-_TWh0'> https://www.youtube.com/watch?v=h_WZk-_TWh0 </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    vpnUsage: {
        mitigationName: "Use a VPN (virtual private network) whenever using public WiFi (e.g., coffee shop, airport, hotel) at a minimum",
        mitigationDescription: "Virtual Private Networks prevent others from looking at your network traffic (including potentially confidential information), especially in public places. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=_wQTRMBAvzg'> https://www.youtube.com/watch?v=_wQTRMBAvzg </a>", 
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    creditCardInformation: {
        mitigationName: "Being educated on the risk of storing credit card information online",
        mitigationDescription: "Minimizing the amount of sensitive information online can prevent malicious actors from getting access to your information. " + 
        "Here is a video that helps explain this idea: <a href='https://youtu.be/-ni_PWxrsNo?t=168'> https://youtu.be/-ni_PWxrsNo?t=168 </a>",
        skillLevel: "Low",
        skillLevelNumeric: "1"
    },
    socialEngineering: {
        mitigationName: "Being educated on social engineering techniques",
        mitigationDescription: "Understanding how malicious actors may use social techniques is important to stopping these kind of attacks. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=v7VTJhkJUUY'> https://www.youtube.com/watch?v=v7VTJhkJUUY </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    secureWifiConnections: {
        mitigationName: "Utilizing Secure Wi-Fi Connections",
        mitigationDescription: "Secure Wi-Fi connections can prevent malicious actors from seeing the data on those connections. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=SfFSxThtzhE'> https://www.youtube.com/watch?v=SfFSxThtzhE </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    userAccessControls: {
        mitigationName: "User access controls (i.e. having a separate admin account or differing levels of privilege on a device)",
        mitigationDescription: "Having separate accounts or differing privileges can prevent malicious actors from gaining total control over devices, should the situation ever occur. " + 
        "Here is a video that gives an example of this mitigation in action: <a href='https://www.youtube.com/watch?v=45zM0mchZ3g'> https://www.youtube.com/watch?v=45zM0mchZ3g </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    wirelessNetworkSecurity: {
        mitigationName: "Setting up wireless networks securely",
        mitigationDescription: "Ensuring that malicious actors cannot gain access to your wireleness networks can prevent them from stealing " + 
        "information you would like to remain confidential. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=i1ps2SCErTY'> https://www.youtube.com/watch?v=i1ps2SCErTY </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    antiMalware: {
        mitigationName: "Anti-malware software",
        mitigationDescription: "Anti-malware can help with identifying potentially malicious software on your devices. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=67-5bzc_GKE'> https://www.youtube.com/watch?v=67-5bzc_GKE </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    usingAFirewall: {
        mitigationName: "Using a Firewall",
        mitigationDescription: "Using a firewall can prevent malicious traffic from entering into your network. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=kDEX1HXybrU'> https://www.youtube.com/watch?v=kDEX1HXybrU </a>",
        skillLevel: "High",
        skillLevelNumeric: "3"
    },
    educateOtherUsers: {
        mitigationName: "Educating other users sharing the same information system",
        mitigationDescription: "It is important that all users of the same information system understand security, because " + 
        "if one user accidentally presents an opportunity for a malicious actor, it can impact all users of that system. " + 
        "Here is a video that helps explain the importance of this idea: <a href='https://www.youtube.com/watch?v=zYfx4cdFCVA'> https://www.youtube.com/watch?v=zYfx4cdFCVA </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    cameraCovers: {
        mitigationName: "Camera Covers for Computing Devices",
        mitigationDescription: "Some malicious actors access users' webcams. A way to prevent confidential information from being recorded or taken is to " + 
        "leverage a camera cover. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=vMbHlax92rQ'> https://www.youtube.com/watch?v=vMbHlax92rQ </a>",
        skillLevel: "Low",
        skillLevelNumeric: "1"
    }
}

// This is the datastructure for the mitigations for the threat of compromise of confidential information
const fileAndDataLoss = {
    havingBackups: {
        mitigationName: "Having back-ups of important data and files",
        mitigationDescription: "Having back-ups is a way of copying your data in case it ever gets lost. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=FIL6L7f32Bs'> https://www.youtube.com/watch?v=FIL6L7f32Bs </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    changingPasswords: {
        mitigationName: "Changing passwords after a precipitating event (e.g., passwords being leaked, data breach)",
        mitigationDescription: "If you've been involved in any kind of data breanch, it is " + 
            "important to change your passwords so that malicious actors can't access other accounts that use the same password. " + 
            "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=kJVrV2HT-s4'> https://www.youtube.com/watch?v=kJVrV2HT-s4 </a>",
        skillLevel: "Low",
        skillLevelNumeric: "1"
    },
    encryptionAtRest: {
        mitigationName: "Encrypting data at rest",
        mitigationDescription: "If malicious actors cannot decrypt your data, then they will not be able to leverage it. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=cESHmIDBP2w'> https://www.youtube.com/watch?v=cESHmIDBP2w </a>",
        skillLevel: "High",
        skillLevelNumeric: "3"
    },
    suspiciousLinks: {
        mitigationName: "Being educated on suspicious links",
        mitigationDescription: "Being aware of suspicious links can protect you from malicious websites. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=M5u3AtwmW4I'> https://www.youtube.com/watch?v=M5u3AtwmW4I </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    phishingEmails: {
        mitigationName: "Being educated on phishing emails",
        mitigationDescription: "Understanding how malicious actors might use email to get confidential information can protect you from" + 
        " falling victim to a phishing attack. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=Y7zNlEMDmI4'> https://www.youtube.com/watch?v=Y7zNlEMDmI4 </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    autoBackup: {
        mitigationName: "Automated data back-up solutions",
        mitigationDescription: "Automating data back-ups can help ensure that backups are up-to-date, should they need using. " +
        "Here is an article that helps explain this idea: <a href='https://www.acronis.com/en-us/blog/posts/auto-backup/#:~:text=Auto%20backups%20can%20save%20you,work%20or%20on%20a%20trip.'> https://www.acronis.com/en-us/blog/posts/auto-backup/#:~:text=Auto%20backups%20can%20save%20you,work%20or%20on%20a%20trip. </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    uniquePasswords: {
        mitigationName: "Making each password unique for every site",
        mitigationDescription: "Using unique passwords can prevent malicious actors from using compromised or stolen passwords to access your resources. " + 
        "If a password is stolen and found by a malicious actor, unique passwords will limit their access to only that service instead of other services that use the same password. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=AJQ76iBh4IE'> https://www.youtube.com/watch?v=AJQ76iBh4IE </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    wirelessNetworkSecurity: {
        mitigationName: "Setting up wireless networks securely",
        mitigationDescription: "Ensuring that malicious actors cannot gain access to your wireleness networks can prevent them from stealing " + 
        "information you would like to remain confidential. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=i1ps2SCErTY'> https://www.youtube.com/watch?v=i1ps2SCErTY </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    educateOtherUsers: {
        mitigationName: "Educating other users sharing the same information system",
        mitigationDescription: "It is important that all users of the same information system understand security, because " + 
        "if one user accidentally presents an opportunity for a malicious actor, it can impact all users of that system. " + 
        "Here is a video that helps explain the importance of this idea: <a href='https://www.youtube.com/watch?v=zYfx4cdFCVA'> https://www.youtube.com/watch?v=zYfx4cdFCVA </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    socialEngineering: {
        mitigationName: "Being educated on social engineering techniques",
        mitigationDescription: "Understanding how malicious actors may use social techniques is important to stopping these kind of attacks. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=v7VTJhkJUUY'> https://www.youtube.com/watch?v=v7VTJhkJUUY </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    secureWifiConnections: {
        mitigationName: "Utilizing Secure Wi-Fi Connections",
        mitigationDescription: "Secure Wi-Fi connections can prevent malicious actors from seeing the data on those connections. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=SfFSxThtzhE'> https://www.youtube.com/watch?v=SfFSxThtzhE </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    complexPasswords: {
        mitigationName: "Making passwords strong (i.e., long and complex)",
        mitigationDescription: "Making strong passwords makes it harder for malicious actors to guess what your passwords are. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=h_WZk-_TWh0'> https://www.youtube.com/watch?v=h_WZk-_TWh0 </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    userAccessControls: {
        mitigationName: "User access controls (i.e. having a separate admin account or differing levels of privilege on a device)",
        mitigationDescription: "Having separate accounts or differing privileges can prevent malicious actors from gaining total control over devices, should the situation ever occur. " + 
        "Here is a video that gives an example of this mitigation in action: <a href='https://www.youtube.com/watch?v=45zM0mchZ3g'> https://www.youtube.com/watch?v=45zM0mchZ3g </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    antiMalware: {
        mitigationName: "Anti-malware software",
        mitigationDescription: "Anti-malware can help with identifying potentially malicious software on your devices. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=67-5bzc_GKE'> https://www.youtube.com/watch?v=67-5bzc_GKE </a>",
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
    creditCardInformation: {
        mitigationName: "Being educated on the risk of storing credit card information online",
        mitigationDescription: "Minimizing the amount of sensitive information online can prevent malicious actors from getting access to your information. " + 
        "Here is a video that helps explain this idea: <a href='https://youtu.be/-ni_PWxrsNo?t=168'> https://youtu.be/-ni_PWxrsNo?t=168 </a>",
        skillLevel: "Low",
        skillLevelNumeric: "1"
    },
    vpnUsage: {
        mitigationName: "Use a VPN (virtual private network) whenever using public WiFi (e.g., coffee shop, airport, hotel) at a minimum",
        mitigationDescription: "Virtual Private Networks prevent others from looking at your network traffic (including potentially confidential information), especially in public places. " + 
        "Here is a video that helps explain this idea: <a href='https://www.youtube.com/watch?v=_wQTRMBAvzg'> https://www.youtube.com/watch?v=_wQTRMBAvzg </a>", 
        skillLevel: "Medium",
        skillLevelNumeric: "2"
    },
}


const surveyJson = {
    "showQuestionNumbers": "off",
    "elements": [{
        "type": "radiogroup",
        "name": "skillLevel",
        "title": "Using the definitions below, how would you define your skill level with technology?",
        "isRequired": true,
        "choices": [
            {
                "Value": "1",
                "text": "Low: Little to no experience with configuration of technology. Users in this category are expected to leverage products and solutions as purchased, with minimal changes to the original configurations. "
            },
            {
                "Value": "2",
                "text": "Medium: Moderate experience with configuration of technology. Users in this category are expected to understand how to make detailed configurations to solutions which are already built into the products or solutions they purchase."
            },
            {
                "Value": "3",
                "text": "High: Deep understanding of technical configurations. Users in this category are able to combine multiple technologies together to achieve a desired outcome, and may create their own technical enhancements to solutions if none are readily available. "
            }
        ]
      },
      {
        "type": "radiogroup",
        "name": "importanceOfCompromise",
        "title": "How important is mitigating the threat of Compromise of Confidential Information, to you?",
        "isRequired": true,
        "choices": [
            {
                "Value": "1",
                "text": "Not Very Important"
            },
            {
                "Value": "2",
                "text": "Moderately important"
            },
            {
                "Value": "3",
                "text": "Very Important"
            }
        ]
      },
      {
        "type": "radiogroup",
        "name": "importanceOfDataFileLoss",
        "title": "How important is mitigating the threat of Data/File Loss, to you?",
        "isRequired": true,
        "choices": [
            {
                "Value": "1",
                "text": "Not Very Important"
            },
            {
                "Value": "2",
                "text": "Moderately important"
            },
            {
                "Value": "3",
                "text": "Very Important"
            }
        ]
      },
    ]
};


// Instantiate the survey
const survey = new Survey.Model(surveyJson);

// Present the results to the user
function alertResults (sender) {

    // Move the user's view to the top of the recommendations page
    window.scrollTo({top: 0})

    // This will contain the skill level (we will use this later)
    const userResponse = sender.data;

    // Hide the survey container
    surveyContainer = document.getElementById("surveyContainer");
    surveyContainer.style.display = "none";

    let overallResultsContainer = document.getElementById("overallResultsContainer");
    overallResultsContainer.style.display = "block";

    let priorityDisplayHeader = document.getElementById("priorityDisplayHeader");
    priorityDisplayHeader.style.display = "inline";

    // Create the compromise results container
    let compromiseResultsContainer = document.createElement("div");
    compromiseResultsContainer.setAttribute("id", "resultsContainerForCompromise");
    let compromiseRecommendationsHeader = document.createElement("h2");
    compromiseRecommendationsHeader.setAttribute("id","compromiseRecommendationsHeader");

    compromiseRecommendationsHeader.innerHTML = "Please see below for your personalized security recommendations for the threat of Compromise of Confidential Information:";

    // Append the header to the container
    compromiseResultsContainer.append(compromiseRecommendationsHeader);

    // Higher skill level results container for compromise of confidential information
    let compromiseResultsContainerHigherSkill = document.createElement("div");
    compromiseResultsContainerHigherSkill.setAttribute("id", "resultsContainerForCompromiseHigherSkillLevel");
    compromiseResultsContainerHigherSkill.style.display = "none";

    let compromiseRecommendationsHeaderHigherSkillLevel = document.createElement("h2");
    compromiseRecommendationsHeaderHigherSkillLevel.setAttribute("id","compromiseRecommendationsHeaderHigherSkillLevel");
    compromiseRecommendationsHeaderHigherSkillLevel.innerHTML = "The following mitigation(s) for Compromise of Confidential Information were indicated as above your provided skill level, but have been included here for your visbility:";

    // Append the header to the container
    compromiseResultsContainerHigherSkill.append(compromiseRecommendationsHeaderHigherSkillLevel);

    // Create the results components for file and data loss
    let resultsContainerForDataAndFileLoss = document.createElement("div");
    resultsContainerForDataAndFileLoss.setAttribute("id", "resultsContainerForDataAndFileLoss");

    let dataFileLossRecommendationsHeader = document.createElement("h2");
    dataFileLossRecommendationsHeader.setAttribute("id","dataFileLossRecommendationsHeader");
    dataFileLossRecommendationsHeader.innerHTML = "Please see below for your personalized security recommendations for the threat of Data/File Loss:";
    // Append the header to the container
    resultsContainerForDataAndFileLoss.append(dataFileLossRecommendationsHeader);

    // Higher skill level results container for file and data loss
    let resultsContainerForDataFileLossHigherSkillLevel = document.createElement("div");
    resultsContainerForDataFileLossHigherSkillLevel.setAttribute("id", "resultsContainerForDataFileLossHigherSkillLevel");
    resultsContainerForDataFileLossHigherSkillLevel.style.display = "none";

    let dataFileLossRecommendationsHeaderHigherSkillLevel = document.createElement("h2");
    dataFileLossRecommendationsHeaderHigherSkillLevel.setAttribute("id","dataFileLossRecommendationsHeaderHigherSkillLevel");
    dataFileLossRecommendationsHeaderHigherSkillLevel.innerHTML = "The following mitigation(s) for Data/File Loss were indicated as above your provided skill level, but have been included here for your visbility:";
    // Append the header to the container
    resultsContainerForDataFileLossHigherSkillLevel.append(dataFileLossRecommendationsHeaderHigherSkillLevel);

    // If compromise of personal information is greater, then the results should be displayed first
    if (userResponse.importanceOfCompromise.Value > userResponse.importanceOfDataFileLoss.Value) {
        document.getElementById("overallResultsContainer").append(compromiseResultsContainer);
        document.getElementById("overallResultsContainer").append(resultsContainerForDataAndFileLoss);
        document.getElementById("overallResultsContainer").append(compromiseResultsContainerHigherSkill);
        document.getElementById("overallResultsContainer").append(resultsContainerForDataFileLossHigherSkillLevel);

    } 
    // This covers both the scenario where importance of compromise is less, and the results are equal
    else {
        document.getElementById("overallResultsContainer").append(resultsContainerForDataAndFileLoss);
        document.getElementById("overallResultsContainer").append(compromiseResultsContainer);
        document.getElementById("overallResultsContainer").append(resultsContainerForDataFileLossHigherSkillLevel);
        document.getElementById("overallResultsContainer").append(compromiseResultsContainerHigherSkill);
    }

    // If the user did not select the highest skill level, the other results block for higher skill level
    // items should be displayed
    if (userResponse.skillLevel.Value < 3) {
        compromiseResultsContainerHigherSkill.style.display = "block";
        resultsContainerForDataFileLossHigherSkillLevel.style.display = "block";
    }

    // Display the results button and display it to the user
    let getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.style.display = "inline";

    generateResults(compromiseOfConfidentialInformation, compromiseResultsContainer, compromiseResultsContainerHigherSkill, userResponse)
    generateResults(fileAndDataLoss, resultsContainerForDataAndFileLoss, resultsContainerForDataFileLossHigherSkillLevel, userResponse)

}

// Generate the mitigations which get displayed, based on user input
function generateResults(threat, resultsContainer, resultsContainerHigherSkill, userResponse) {

    for (const mitigation in threat) {

        // Dynamically add HTML elements to the page based on the values pulled from the threat and mitigation data structure
        let resultBlock = document.createElement("div");
        resultBlock.classList.add("mitigationContainer");
        let resultHeader = document.createElement("h3");
        let resultSkillLevel = document.createElement("h4");
        let resultDescription = document.createElement("p");

        let mitigationInformation = threat[mitigation];

        // Put the mitigation information into the HTML elements
        resultHeader.innerHTML = mitigationInformation.mitigationName;
        resultDescription.innerHTML = mitigationInformation.mitigationDescription;
        resultSkillLevel.innerHTML = "Skill Level: " + mitigationInformation.skillLevel;

        // Append the relevant information to the result
        resultBlock.appendChild(resultHeader);
        resultBlock.appendChild(resultSkillLevel);
        resultBlock.appendChild(resultDescription);

        if (mitigationInformation.skillLevelNumeric <= userResponse.skillLevel.Value) {
            // Append the HTML element to the page
            resultsContainer.appendChild(resultBlock);
        } else {
            // Append the HTML elemnet to the section that has higher skill level items
            resultsContainerHigherSkill.appendChild(resultBlock);
        }
    }
} 

survey.onComplete.add(alertResults);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});

getResultsButton.addEventListener("click", function(){
    // full page PDF print
    window.print();
});
