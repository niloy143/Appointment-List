var patientName = document.getElementById('name');
var patientNumber = document.getElementById('number');
var appointmentDate = document.getElementById('date');
var table = document.getElementById('table');
table.style.visibility = 'hidden';
var tbody = document.getElementById('tbody');
var addPatient = document.getElementById('button');
var count = 0;

var nameValue = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberValue = '017 89 234 56-';


patientName.addEventListener('input', function () {
    for (var i = 0; i < patientName.value.length; i++) {
        if (nameValue.indexOf(patientName.value[i]) === -1) {
            patientName.value = patientName.value.slice(0, i);
        }
    }
    if (patientName.value.length >= 30){
        patientName.value = patientName.value.slice(0, -1);
    }
})

patientNumber.addEventListener('input', function () {
    for (var i = 0; i < patientNumber.value.length; i++) {
        if (numberValue.indexOf(patientNumber.value[i]) === -1) {
            patientNumber.value = patientNumber.value.slice(0, i);
        }
    }
    if (patientNumber.value.length >= 15){
        patientNumber.value = patientNumber.value.slice(0, -1);
    }
})


addPatient.addEventListener('click', function (x) {
    x.preventDefault();
    if (patientName.value === '' || patientName.value.length < 2 || patientNumber.value === '' || patientNumber.value.length < 3 || appointmentDate.value === '') {
        return;
    }
    else {
        count++;
    var patientLine = document.createElement('tr');

    var serialtd = document.createElement('td');
    serialtd.innerHTML = count + '.';
    patientLine.appendChild(serialtd);

    var nametd = document.createElement('td');
    nametd.innerHTML = patientName.value;
    patientLine.appendChild(nametd);

    var numbertd = document.createElement('td');
    numbertd.innerHTML = patientNumber.value;
    patientLine.appendChild(numbertd);

    var datetd = document.createElement('td');
    datetd.innerHTML = appointmentDate.value;
    patientLine.appendChild(datetd);

    var statustd = document.createElement('td');
    var statusSelect = document.createElement('select');

    var statusRunning = document.createElement('option');
    statusRunning.innerHTML = 'Running';
    statusSelect.appendChild(statusRunning);

    var statusCompleted = document.createElement('option');
    statusCompleted.innerHTML = 'Completed';
    statusSelect.appendChild(statusCompleted);

    var statusCancelled = document.createElement('option');
    statusCancelled.innerHTML = 'Cancelled';
    statusSelect.appendChild(statusCancelled);

    statustd.appendChild(statusSelect);
    patientLine.appendChild(statustd);

    var deletetd = document.createElement('td');
    var deleteButton = document.createElement('img');
    deleteButton.src = "img/deleteicon.png";
    deletetd.appendChild(deleteButton);
    patientLine.appendChild(deletetd);

    tbody.appendChild(patientLine);
    deleteButton.addEventListener('click', function () {
        patientLine.remove();
        count--;
    })

    table.style.visibility = 'visible';
    patientName.value = '';
    patientNumber.value = '';
    appointmentDate.value = '';
    }
})