'use strict'
//Crear proyecto de node
//npm init -> Agrega la config
//npm i sass -> instalar la dependencia de sass desde https://www.npmjs.com/package/sass
//crear .gitignore t agregar tecto  de la pag https://www.toptal.com/developers/gitignore/api/node
//correr sass: sass --watch archivo.scss salida.css

const form=document.querySelectorAll(".signup-form");

const getTemplate = function(){
    return fetch("./template.html").then(response=>response.text());
};

const sendEmail=(miVariable)=>{
    miVariable.preventDefault();
    const email = miVariable.target.querySelector("input").value;
    getTemplate().then( (response)=>{
        console.log(response);
    } )
    .catch( (error)=>{
        console.log(error, "Error al obtener el template");
    } )
    console.log(email);
};


for (let i = 0; i < form.length; i++) {
    // console.log(form[i]);
    form[i].addEventListener("submit", sendEmail)
}