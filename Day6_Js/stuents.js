const studentName = document.getElementById("student-name");
const studentGrade = document.getElementById("grade");

const array = [];

const addStudent = document.getElementById("add-students");

addStudent.onclick = function(){

    let name = studentName.value;
    let grade = studentGrade.value;

    if(!isNaN(name)){
        window.alert("Enter the valid name only contains characters");
        studentGrade.value = "";
        studentName.value = "";
        return;
    }
    
    if(name === "" || grade === ""){
        window.alert("Enter the necessary details");
        studentGrade.value = "";
        studentName.value = "";
        return;
    }
    
    if(Number(grade) < 0 || Number(grade) > 100){
        window.alert("The Grade range is only betweem 0 to 100");
        studentGrade.value = "";
        studentName.value = "";
        return;   
    }

    let student = `${name} - ${grade}`;

    if(array.includes(student)){
        window.alert("The student is already found");
        studentGrade.value = "";
        studentName.value = "";
        return;
    } else {
        array.push(student);
        studentGrade.value = "";
        studentName.value = "";
    }

}



const displayGrade = document.getElementById("display-grades");
const studentsList = document.getElementById("students-list");

console.log(array);

displayGrade.onclick = function (){
    studentsList.innerHTML  = "";
    for(let i = 0; i < array.length; i ++){
        const student = document.createElement("li");
        student.textContent = array[i];
        studentsList.appendChild(student);
    }
}

const answer = document.getElementById("answer-button");

answer.onclick = function (){
    let sum = 0;
    for(let i = 0; i < array.length; i ++){
        let mark = array[i].split(" - ");

        sum += Number(mark[1]);
    }

    let average = Math.round(Math.ceil(sum / array.length));

    document.getElementById("average-grade").textContent = `Average of Students is ${average} %`;
}