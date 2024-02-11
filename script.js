var nameUser = document.getElementById("name")
var age = document.getElementById("age")
var gender = document.getElementsByName('gender')
var selectedVal = null
var myTable = document.getElementById("myTable")
var course = document.getElementById("course")

for(var i = 0; i<gender.length;i++){
    if(gender[i].checked) {
        selectedVal = gender[i].value
        break
    }
}
function Add(){
    // Insert Row
    var row = myTable.insertRow(1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    for(var i = 0; i<gender.length;i++){
    if(gender[i].checked) {
        selectedVal = gender[i].value
        break
    }
}
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    // Insert Row Values
    cell1.innerHTML = nameUser.value
    cell2.innerHTML = age.value
    cell3.innerHTML = selectedVal
    cell4.innerHTML = course.value
    cell5.innerHTML = "<button onclick='delRow(event)'>Delete</button>"
    //Clear Form
    document.getElementById("name").value = ''
    document.getElementById("age").value = ''
    document.getElementById("course").value = ''
    }
    function delRow(event) {
    var row = event.target.parentNode.parentNode; // Get the parent row of the button
    row.remove(); // Remove the row from the table
}