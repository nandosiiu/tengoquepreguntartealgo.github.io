// opcion de si

let si = document.getElementById('si');
si.addEventListener("click", function(e){
    alert("Gracias sabía que aceptarías ❤");
});

// opcion de no 

let no = document.getElementById('no');
no.addEventListener("mousemove",function(e) {
    let x = Math.round(Math.random() * 93 );
    let y = Math.round(Math.random() * 93 );
    no.style.left = x+"%";
    no.style.top = x+"%";
});