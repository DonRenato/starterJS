var skills = [
    "JavaScript",
    "ReactJS",
    "React Native"
]

function temHabilidade(skills){
    for(skill of skills){
        if( skill === "JavaScript"){
            return true;
        }else{
            return false;
        }
    }
}

console.log(temHabilidade(skills));

 //ou
//   function temHabilidade(skills) {
//     return skills.indexOf("Javascript") !== -1;
//   }
  
//   var skills = ["Javascript", "ReactJS", "React Native"];
//   console.log(temHabilidade(skills));