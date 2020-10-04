var names = [];
function addNewName(){
    var name = document.getElementById("name").value;
    var patt = /\d/;
    var patt2 = /\W/;
    if(!(patt.test(name) || patt2.test(name))){
        names.push(name);
        alert("name added!");
        document.getElementById("name").value="";
        document.getElementById("name").focus();
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
        var win = window.open("");
        var s = "";
        for (var i in names){
            
            s += names[i] + "<br/>";
            win.document.write(s);
        }
    }else{
        alert("no name has been added!")
    }
}