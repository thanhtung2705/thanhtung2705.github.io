function baogio() {
    num=document.getElementById("abc").value;
    num=eval(num)+1;
    document.getElementById("abc").value=num;
    hengio=setTimeout("baogio();",1000);
}