
// ADD PROJECTS TO PORTFOLIO

let numberOfProjects = 0;
let projectDisplayWidth = window.innerWidth/numberOfProjects;

class PortfolioProject {
    constructor(id, project){
        this.id = id;
        this.class = "project"
        this.width = projectDisplayWidth;
    };
};



var devsJobTitle = document.getElementById('devsJobTitle');
var devsJobDescription = document.getElementById('devsJobDescription');
var devsTech = document.getElementById('devsTech');
var devsButton = document.getElementById('devsButton');
var freelanceJobTitle = document.getElementById('freelanceJobTitle');
var freelanceJobDescription = document.getElementById('freelanceJobDescription');
var freelanceTech = document.getElementById('freelanceTech');
var freelanceButton = document.getElementById('freelanceButton');

addEventListener("load", (event) => {
    freelanceJobTitle.style.display = "none";
    freelanceJobDescription.style.display = "none";
    freelanceTech.style.display = "none";
    devsButton.style.fontWeight = "600";
});

freelanceButton.addEventListener("click", (event) => {
    freelanceJobTitle.style.display = "block";
    freelanceJobDescription.style.display = "block";
    freelanceTech.style.display = "block";

    devsJobTitle.style.display = "none";
    devsJobDescription.style.display = "none";
    devsTech.style.display = "none";

    freelanceButton.style.fontWeight = "600";
    devsButton.style.fontWeight = "300";
});

devsButton.addEventListener("click", (event) => {
    devsJobTitle.style.display = "block";
    devsJobDescription.style.display = "block";
    devsTech.style.display = "block";

    freelanceJobTitle.style.display = "none";
    freelanceJobDescription.style.display = "none";
    freelanceTech.style.display = "none";

    freelanceButton.style.fontWeight = "300";
    devsButton.style.fontWeight = "600";
});
