Survey
    .StylesManager
    .applyTheme("defaultV2");

const surveyJson = {
    "showQuestionNumbers": "off",
    "elements": [{
        type: "dropdown",
        name: "question1",
        title: "Select an option",
        choices: [
            "option1",
            "option2",
            "option3"
        ],
        "isRequired": true
    }, 
    {
        type: "dropdown",
        name: "question2",
        title: "Select an option",
        choices: [
            "option4",
            "option5",
            "option6"
        ],
        "isRequired": true
    },
    {
        "type": "radiogroup",
        "name": "question3",
        "title": "Do you want to answer question 4?",
        "isRequired": true,
        "choices": [
          "Yes", "No"
        ]
      },
      {
        "type": "dropdown",
        "name": "question4",
        "title": "What is your answer to question 4?",
        "visibleIf": "{question3}='Yes'",
        "isRequired": true,
        choices: [
            "option7",
            "option8",
            "option9"
        ],
      }
]


};

let recommendations = {
    question1: {
        option1: {
            recommendationName: "Option 1 Recommendation",
            recommendationDescription: "Option 1 Recommendation Description"
        }, 
        option2: {
            recommendationName: "Option 2 Recommendation",
            recommendationDescription: "Option 2 Recommendation Description"
        },
        option3: {
            recommendationName: "Option 3 Recommendation",
            recommendationDescription: "Option 3 Recommendation Description"
        },
    },
    question2: {
        option4: {
            recommendationName: "Option 4 Recommendation",
            recommendationDescription: "Option 4 Recommendation Description"
        },
        option5: {
            recommendationName: "Option 5 Recommendation",
            recommendationDescription: "Option 5 Recommendation Description"
        },
        option6: {
            recommendationName: "Option 6 Recommendation",
            recommendationDescription: "Option 6 Recommendation Description"
        },
    },
    question4: {
        option7: {
            recommendationName: "Option 7 Recommendation",
            recommendationDescription: "Option 7 Recommendation Description"
        },
        option8: {
            recommendationName: "Option 8 Recommendation",
            recommendationDescription: "Option 8 Recommendation Description"
        },
        option9: {
            recommendationName: "Option 9 Recommendation",
            recommendationDescription: "Option 9 Recommendation Description"
        },
    }
    
    
};

const survey = new Survey.Model(surveyJson);

function alertResults (sender) {
    const results = sender.data;

    surveyContainer = document.getElementById("surveyContainer");
    surveyContainer.style.display = "none";

    // Display the results block and results button
    resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.style.display = "block";

    let getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.style.display = "inline";

    // Hide the survey container

    for (const question in results) {

        // Dynamically add HTML elements to the page based on the values pulled from the dictionary
        // Step 1: Create the HTML element
        let resultBlock = document.createElement("div");
        let resultHeader = document.createElement("h3");
        let resultDescription = document.createElement("p");

        // Pull the relevant information from the recommendations
        let answer = results[question];

        // Check that the search has a recommendation/is not a preliminary question with no recommendations
        if (recommendations[question] != undefined) {

            // Pull the recommendations for that question, given that answer
            let recommendationsForAnswer = recommendations[question][answer];
            let recommendationHeader = recommendationsForAnswer.recommendationName;
            let recommendationDescription = recommendationsForAnswer.recommendationDescription;

            // Put the information into the HTML elements
            resultHeader.innerHTML = recommendationHeader;
            resultDescription.innerHTML = recommendationDescription;

            // Step 2: Add the text to the HTML element by pulling from the dictionary
            resultBlock.appendChild(resultHeader);
            resultBlock.appendChild(resultDescription);

            // Step 3: Append the HTML element to the page
            resultsContainer.appendChild(resultBlock);
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

    // Only print recommendations
    // var recommendationConents = resultsContainer.innerHTML;
    // var prnt = window.open('', '', 'height=1000, width=1000');
    // prnt.document.write(recommendationConents);
    // prnt.document.close();
    // prnt.print();

});


// function saveSurveyResults(url, json) {
//     const request = new XMLHttpRequest();
//     request.open('POST', url);
//     request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//     request.addEventListener('load', () => {
//         // Handle "load"
//     });
//     request.addEventListener('error', () => {
//         // Handle "error"
//     });
//     request.send(JSON.stringify(json));
// }