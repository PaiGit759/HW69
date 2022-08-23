 var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
};

let resalt = "";
let property = "";

function buttonOnclickIsProperty() {

        property = document.getElementById("fildForInput").value;

        if (student.hasOwnProperty(property)) {
                resalt = "Yes, there is such a property.";
        }
        else {
                resalt = "No, there is no such property.";
        
        }

        document.getElementById("cat").innerHTML = resalt;
}
