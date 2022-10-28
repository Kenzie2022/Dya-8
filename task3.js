const teamJuniors=[ "John", "Richard","William"];
const teamSeniors=["Sam", "Alyssa", "Josh"];

teamJuniors.pop();
teamSeniors.pop();

teamSeniors.push("Sbrina");
teamSeniors.push("Ahmed");

const theTeam= teamJuniors.concat(teamSeniors);

console.log(theTeam.join("-"));
console.log("lenght of the final team is " +theTeam.length);




for (let i=0; i<5;i++){
    console.log("hello")

}