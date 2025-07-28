"use strict";
function results() {
    var marks = 35;
    if (marks >= 40) {
        console.log("Result: Pass");
        if (marks >= 75) {
            console.log("Grade: Distinction");
        }
    }
    else {
        console.log("Result: Fail");
        if (marks >= 35 && marks < 40)
            console.log("Note: Borderline case, consider re-evaluation");
    }
}
results();
