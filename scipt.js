function tambah(){ 
    a=eval(document.getElementById("a").value);
    b=eval(document.getElementById("b").value);
    c=eval(document.getElementById("c").value);
    hasil=a+b+c;
    document.getElementById("hasil").value=hasil; 
}

function kurang(){ 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=document.getElementById("c").value;
    hasil=a-b-c;
    document.getElementById("hasil").value=hasil; 
}

function kali(){ 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=document.getElementById("c").value;
    hasil=a*b*c;
    document.getElementById("hasil").value=hasil; 
}

function bagi(){ 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=document.getElementById("c").value;
    hasil=a/b/c;
    document.getElementById("hasil").value=hasil; 
}