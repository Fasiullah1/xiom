window.addEventListener('scroll', function(){
    let header = this.document.querySelector('header');
    header.classList.toggle('sticky',this.window.scrollY > 200);
});

let mybutton = document.getElementById("mybtn");
window.onscroll = function (){scrollFuntion()};

function scrollFuntion(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var loader = document.getElementById("loading");
window.addEventListener("load", function(){
    loader.style.display="none";
})