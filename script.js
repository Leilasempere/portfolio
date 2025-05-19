fetch ('data.json')
//quand la reponse est recu on convertie en objet javascript avec response.json
  .then(response => response.json())

  //une fois que les donnees sont converties on les stockes et affichent dans la variable data
  .then(data => {
    console.log(data);
    afficheExperience(data);
    
    
  })
  

  function afficheExperience(experienceSection) {
    
    const sectionExp = document.getElementById('experience-list'); // On récupère la section d'expérience
    sectionExp.innerHTML = ''; // On vide le contenu de la section avant d'ajouter les nouvelles expériences
    // On parcourt chaque expérience et on crée un élément div pour chacune
     experienceSection.forEach(exp => {
        const div = document.createElement('div');// Crée un nouvel élément div pour chaque expérience
        div.classList.add('experience-item');

        function formatArray(value) {
            return Array.isArray(value) ? value.join(', ') : value;
          };

        const noms = formatArray(exp.nom);
        const lieux = formatArray(exp.lieu);
        
        div.innerHTML =`
        <h3>${exp.emploi}</h3>
        <h4>${exp.nom}</h4>
        <h6>${exp.lieu}</h6>
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
  
    img.alt = skill.nom;
    img.style.width = "100px"; // Ajustez la taille selon vos besoins
    img.style.height = "100px"; // Ajustez la taille selon vos besoins
    img.style.margin = "10px"; // Ajustez l'espacement entre les images
    img.style.transition = "transform 0.3s"; // Ajoute une transition pour l'effet de survol
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

  //fonction pour recuperer le theme depuis le local storage
const currentTheme = localStorage.getItem('theme') || "light";

//on va appliquer le theme stocké dans le local storage

if (currentTheme === "dark") {
document.body.classList.add("dark-mode"); //on ajoute la classe dark au body
document.getElementById("theme-toggle").innerText = `🌙` //on change l'emoji du bouton
} else {
document.body.classList.remove("dark-mode"); //on enlève la classe dark au body
document.getElementById("theme-toggle").innerText = `☀️` //on change l'emoji du bouton
}

// on va ajouter un event pour changer le theme
document.getElementById("theme-toggle").addEventListener("click", function () {
const isDarkMode = document.body.classList.toggle("dark-mode"); //on toggle la classe dark au body
localStorage.setItem('theme', isDarkMode? 'dark': 'light'); //on stocke le theme dans le local storage
 //on va sauvegarderle theme dans le local storage
this.innerText= isDarkMode ? `🌙` : `☀️ `; //on change le texte du bouton
});