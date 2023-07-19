var devsJobTitle = document.getElementById('devsJobTitle');
var devsJobDescription = document.getElementById('devsJobDescription');
var devsTech = document.getElementById('devsTech');
var devsButton = document.getElementById('devsButton');
var freelanceJobTitle = document.getElementById('freelanceJobTitle');
var freelanceJobDescription = document.getElementById('freelanceJobDescription');
var freelanceTech = document.getElementById('freelanceTech');
var freelanceButton = document.getElementById('freelanceButton');
var jobContainer = document.getElementById('jobContainer');


addEventListener("load", (event) => {
    jobContainer.style.height = '450px';
    jobContainer.style.top = "41.6%"

    freelanceJobDescription.style.top = '42%';
    freelanceJobDescription.style.height = '200px';

    freelanceTech.style.bottom = '35%';

    devsJobTitle.style.display = "none";
    devsJobDescription.style.display = "none";
    devsTech.style.display = "none";

    
    freelanceButton.style.fontWeight = "600";
});

freelanceButton.addEventListener("click", (event) => {
    freelanceJobTitle.style.display = "block";
    freelanceJobDescription.style.display = "flex";
    freelanceJobDescription.style.top = '42%';
    freelanceJobDescription.style.height = '200px';

    freelanceTech.style.display = "block";
    freelanceTech.style.bottom = '35%';
    
    devsJobTitle.style.display = "none";
    devsJobDescription.style.display = "none";
    devsTech.style.display = "none";

    freelanceButton.style.fontWeight = "600";
    devsButton.style.fontWeight = "300";

    jobContainer.style.height = '450px';
    jobContainer.style.top = "41.6%"

});

devsButton.addEventListener("click", (event) => {
    devsJobTitle.style.display = "block";
    devsJobDescription.style.display = "flex";
    devsJobDescription.style.top = '47%';
    devsJobDescription.style.height = '310px';

    devsTech.style.display = "block";
    devsTech.style.bottom = '26%';

    freelanceJobTitle.style.display = "none";
    freelanceJobDescription.style.display = "none";
    freelanceTech.style.display = "none";

    freelanceButton.style.fontWeight = "300";
    devsButton.style.fontWeight = "600";

    jobContainer.style.height = '520px';
    jobContainer.style.top = '46%';
});
