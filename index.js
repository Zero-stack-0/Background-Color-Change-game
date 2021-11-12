var btn=document.getElementById("btn");
var allChar="0123456789ABCDEF"
btn.addEventListener("click",MyFun);
    function MyFun(){
        var randcol="";
        for(i=0;i<6;i++){
        randcol +=Math.floor(Math.random()*16);

    }
    document.body.style.backgroundColor= "#"+randcol;
}
