let fullName = "Jeremy Rummel";
let career ="Career: Paramedic/EMS";
let meDes = "I am a married father of three waiting to break into the development world";
let mySkills = ["German", "Javascript", "BAM: Pilot", "BAM: Guitar playing"];

let interests = ["Aviation", "Sports", "Guitars", "Napping"];

function displayPosition(name, position, description) {
    console.log('*' + position + ' ' + 'at' + " " + name + '-' + ' ' + description);
};

console.log("Name:"+ ' ' + fullName.toUpperCase());
console.log(career);
console.log(meDes);
console.log(' ');
console.log("My Interests:");

for (let i = 0; i < interests.length; i++) {
    console.log("*" + interests[i]);
}

console.log(" ");
console.log("My Experience:");
console.log(displayPosition("Mary Greeley Medical Center", "Paramedic", "I responded to medical emergencies and provided emergency treatment to patients."));

console.log(displayPosition("Pioneer", "Research Associate", "I tested various types of crop DNA for traits in a high throughput genotyping lab."));
console.log(' ');
console.log("My Skills:");

for (let j = 0; j < mySkills.length; j++) {
    console.log("*" + mySkills[j]);
}