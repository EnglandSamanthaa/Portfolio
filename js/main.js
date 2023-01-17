const home = document.getElementById('home');
const aboutMe = document.getElementById('aboutMe');
const projects = document.getElementById('projects');
const experience = document.getElementById('experience');

const navList = document.getElementById('navList');


window.addEventListener("load", e => {
    home.style.display = 'flex';
    aboutMe.style.display = 'none';
    projects.style.display = 'none';
    experience.style.display = 'none';
})


navList.addEventListener("click", e => {

    let page = e.target.id 

    
    switch(page){
        case "homeNav":
            home.style.display = 'flex';
            aboutMe.style.display = 'none';
            projects.style.display = 'none';
            experience.style.display = 'none';
            canvas.style.display = 'block';

            console.log('home');
            break;
        case "expertiseNav":
            home.style.display = 'none'
            aboutMe.style.display = 'flex';
            projects.style.display = 'none';
            experience.style.display = 'none';
            canvas.style.display = 'none';

            console.log('aboutMe');
            break;
        case 'projectsNav':
            home.style.display = 'none'
            aboutMe.style.display = 'none';
            projects.style.display = 'flex';
            experience.style.display = 'none';
            canvas.style.display = 'none';

            console.log('projects');
            break;
        case 'experienceNav': 
            home.style.display = 'none';
            aboutMe.style.display = 'none';
            projects.style.display = 'none';
            experience.style.display = 'flex';
            canvas.style.display = 'none';

            console.log('experience')
            break;
    }
    
})
