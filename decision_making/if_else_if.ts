class grades {
    marks = 50;
    grading()
    {
        if (this.marks >= 90) 
            {
                console.log("Grade A");
            } 
        else if (this.marks >= 75) 
            {
                console.log("Grade B");
            } 
        else 
            {
                console.log("Grade C");
            }
    }
}

var obj = new grades();
obj.grading();