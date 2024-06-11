/*let day = 4;
switch(day){
    case 1:
        console.log("its monday");
        break;
    case 2:
        console.log("Its tuesday");
        break;
    case 3:
        console.log("Its wednsday");
        break;
    case 4:
        console.log("its thursday");
        break;
    case 5:
        console.log("Its friday");
        break;
    case 6: 
        console.log("Its saturday");
        break;
    case 7: 
        console.log("Its sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}
*/

let testScore = 65;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 85:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "c";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F"
}

console.log(letterGrade);