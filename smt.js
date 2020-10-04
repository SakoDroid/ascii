var names = [];
function addNewName(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var patt = /\d/;
    var patt2 = /\W/;
    var patt3 = /\D/;
    if(!(patt.test(name) || patt2.test(name || patt3.test(age)))){
        var dr = [];
        dr.push(name,age);
        names.push(dr);
        alert("name added!");
        document.getElementById("name").value="";
        document.getElementById("name").focus();
        document.getElementById("age").value = "";
    }else{
        alert("something is wrong!");
    }
    console.clear()
    for (var i in names){
        console.log(names[i])
    }
}
function showNames(){
    if(names.length > 0){
        var table = document.createElement("table");
        table.innerHTML = "<tr><th>Name</th><th>age</th></tr>"
        var win = window.open("");
        for (var i in names){
            table.innerHTML = table.innerHTML + "<tr><td>" + names[i][0] + "</td><td>" + names[i][1] + "</td></tr>";
        }
        win.document.body.appendChild(table);
    }else{
        alert("no name has been added!")
    }
}