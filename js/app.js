window.onload = function (){
    var topbtn = document.getElementById("backToTop");
    var timer = null;
    var pagellookheight = document.documentElement.clientHeight;

    window.onscroll = function(){
        // alert("hello");
        var backtop = document.documentElement.scrollTop;
        if(backtop >= pagellookheight){
            topbtn.style.display = "block";
        }
        else{
            topbtn.style.display = "none";
        }
    }
    topbtn.onclick = function(){
        
    timer = setInterval(function(){
        var backtop = document.documentElement.scrollTop;
        var speedtop = backtop/5;
        document.documentElement.scrollTop = backtop - speedtop;
        if(backtop ==0){
            clearInterval(timer);
        }
    },30);
    }
    const button = document.querySelector('.button');
        const menus = document.querySelector('.service1');
        button.addEventListener('click', e => {
          document.body.classList.toggle('active');
          if (document.body.classList.contains('active')) {
            menus.style.display = 'block';
          }
    });
}