function clc(){
    var txt = document.getElementById("text").value ;
    var nm = "";
    var sm = 0;
    for (var i = 0; i < txt.length ; i++){
        nm += txt.charCodeAt(i) + " ";
        sm += txt.charCodeAt(i);
    }
    document.getElementById("numbers").value = String(nm);
    document.getElementById("sum").value = sm;
}
