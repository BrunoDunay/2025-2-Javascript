"use-strict";

let students = [];

window.onload = function() {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
        students = JSON.parse(storedStudents);
        displayStudents();
        updateAverage();
    }
}

function addStudent() {
    console.log("Agregar estudiante");
    const name = document.getElementById("nameInput").value.trim();
    const grade = parseFloat(document.getElementById("gradeInput").value);

    if (name === "" || isNaN(grade) || grade < 0 || grade > 100) {
        alert("Por favor, ingrese un nombre y una calificación válida.");
        return;
    }

    const student = { name , grade , status: grade >= 60 ? "Aprobado" : "Reprobado" };     

    students.push(student);
    saveToLocalStorage();
    displayStudents();
    updateAverage();
    document.getElementById("nameInput").value = "";
    document.getElementById("gradeInput").value = "";
}

function displayStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = ""; // Limpiar la lista antes de mostrar los estudiantes
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const li = document.createElement("li");
        li.innerHTML = `
            <li>${students[i].name} <span class="passed"> ${students[i].grade}<span> <span class="failed"> ${students[i].status}</li>
        `;
        list.appendChild(li);
    }
}

function updateAverage() {
    if (students.length === 0) {
        alert("No hay estudiantes para calcular el promedio.");
        return;
    }
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].grade;
    }
    let average = total / students.length;

    document.getElementById("averageDisplay").textContent = `Promedio: ${average.toFixed(2)}`;
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}