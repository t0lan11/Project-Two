document.addEventListener("DOMContentLoaded",postData);

//const - constant and immutable
//const age = 17; 
//let mutable
//let name = 17
//must always declare and initialize variables
const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get("fname");
//value prints out
const q1 = params.get("q1");
const q2 = params.get("q2");
const q3 = params.get("q3");
const q4 = params.get("q4");
const q5 = params.get("q5");
const q6 = params.get("q6");
const q7 = params.get("q7");
const q8 = params.get("q8");


let score = 0;
let score2 = 0; 
let score3 = 0;
let score4 = 0;
let score5 = 0;

if(q1 == "asse"){
    score += 1;
} else if(q1 == "aut"){
    score2 += 1;
}else if(q1 == "intro"){
    score3 += 1;
}else if(q1 == "silly"){
    score4 += 1;
}else{
    score5 += 1
}

if(q2 == "no"){
    score += 1;
} else if(q2 == "absn"){
    score2 += 1;
}else if(q2 == "now"){
    score3 = score3 + 1;
}else if(q2 == "yes"){
    score4 = score4 + 1;
}else{
    score5 += 1
} 

if(q3 == "phone"){
    score = score + 1;
} else if(q3 == "knife"){
    score2 = score2 + 1;
}else if(q3 == "food"){
    score3 = score3 + 1;
}else if(q3 == "crumbl"){
    score4 = score4 + 1;
}else{
    score5 += 1
} 

if(q4 =="tele" ){
    score = score + 1;
} else if(q4 =="telek"){
    score2 = score2 + 1;
}else if(q4 == "ff"){
    score3 = score3 + 1;
}else if(q4 == "fly"){
    score4 = score4 + 1;
}else{
    score5 = score5 + 1
} 

if(q5 =="lion"){
    score = score + 1;
} else if(q5 =="cturt" ){
    score2 = score2 + 1;
}else if(q5 =="ele"){
    score3 = score3 + 1;
}else if(q5 == "panda"){
    score4 = score4 + 1;
}else{
    score5 = score5 + 1
} 

if(q6 =="missr"){
    score = score + 1;
} else if(q6 =="fish"){
    score2 = score2 + 1;
}else if(q6 =="pink"){
    score3 = score3 + 1;
}else if(q6 == "arthur"){
    score4 = score4 + 1;
}else{
    score5 = score5 + 1
} 

if(q8 =="rr"){
    score = score + 1;
} else if(q8 =="ew"){
    score2 = score2 + 1;
}else if(q8 =="sr"){
    score3 = score3 + 1;
}else if(q8 == "lmm"){
    score4 = score4 + 1;
}else{
    score5 = score5 + 1
} 

// and is &&, or is ||

let image;
let result; //if statement for every question, initialize score variable before 
if (score > score2 && score > score3 && score > score4 && score > score5){
    result = "LEILA!"
    paragraph = "You are emotionally intelligent and always there for your friends no matter what!"
    image = "images/leila.jpeg"
}else if (score2 > score && score2 > score3 && score2 > score4 && score2 > score5){
    result = "GRACYE!"
    paragraph = "You are intelligent, headstrong, EXTREMELY blunt, and EXTREMELY brave."
    image = "images/gracye.jpeg"
}else if (score3 > score && score3 > score2 && score3 > score4 && score3 > score5){
    result = "SANAI!"
    paragraph = "You are silent but a pillar of strength when in need."
    image = "images/sanai.jpeg"
}else if (score4 > score && score4 > score3 && score4 > score4 && score4 > score2){
    result = "NEHA!"
    paragraph = "You are a bundle of joy and a ray of positivity wherever you go!"
    image = "images/neha.jpeg"
}else if (score5 > score && score5 > score2 && score5 > score3 && score5 > score4){
    result = "MADISON!"
    paragraph = "You are very responsible and willing to do whatever to protect your friends!"
    image = "images/madison.JPG"
}else {
    result = "EVERYONE!"
    paragraph = "You are so AMAZING that you can't be put into a box! Enjoy a picture of my favorite animal instead!"
    image = "images/th.jpeg"
};




//writing html code
function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<h1> ${name}, You are ${result}</h1>
                            <p> ${paragraph}</p>
                             <img src="${image}"></img>`; 
}
