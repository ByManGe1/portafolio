function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Unity");
        habilidades[1].classList.add("Terminal");
        habilidades[2].classList.add("Git");
        habilidades[3].classList.add("Boostrap");
        habilidades[4].classList.add("CSharp");
        habilidades[5].classList.add("Htmlcss");
        habilidades[6].classList.add("JavaScript");
        habilidades[7].classList.add("cpp");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 