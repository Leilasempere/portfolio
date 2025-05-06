fetch ('data.json')
//quand la reponse est recu on convertie en objet javascript avec reponse.json
  .then(response => response.json())

  //une fois que les donnees sont converties on les stockes et affichent dans la variable data
  .then(data => {
    console.log(data);
    afficheExperience(data);
    
    
  })
  

  function afficheExperience(experienceSection) {
    //on recupere l'element html
    const sectionExp = document.getElementById('experience-list');
     experienceSection.forEach(exp => {
        const div = document.createElement('div');
        div.classList.add('experience-item');

        function formatArray(value) {
            return Array.isArray(value) ? value.join(', ') : value;
          };

        const noms = formatArray(exp.nom);
        const lieux = formatArray(exp.lieu);
        
        div.innerHTML =`
        <h3>${exp.emploi}</h3>
        <h6>${exp.nom}</h6>
        <p>${exp.lieu}</p>
        <p>${exp.datedebut}</p>
        <p>${exp.datefin}</p>`

        sectionExp.appendChild(div);
    });
};



  
  const container = document.getElementById("skills-container");
  
  skills.forEach((skill, index) => {
    const img = document.createElement("img");
    img.src = skill.logo;
    img.className = "skill-logo";
  
    // Position aléatoire initiale
    img.style.top = Math.random() * 250 + "px";
    img.style.left = Math.random() * 90 + "%";
  
    container.appendChild(img);
  });
  
   // Transition entre intro et portfolio
   document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const enterBtn = document.getElementById("enter-btn");

    enterBtn.addEventListener("click", () => {
      introScreen.style.display = "none";
      mainContent.style.display = "block";
    });
  });