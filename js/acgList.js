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

    goPage(1,20);
}

/**
 * Benifit from Internet
 * Sorry I forget where I find it
 **/
function goPage(pno,psize){
  var itable = document.getElementById("idData");
  var num = itable.rows.length;
  var totalPage = 0;
  var pageSize = psize;

  if(num/pageSize > parseInt(num/pageSize)){
      totalPage=parseInt(num/pageSize)+1;
    }else{
      totalPage=parseInt(num/pageSize);
    }
  var currentPage = pno;
  var startRow = (currentPage - 1) * pageSize+1;
    var endRow = currentPage * pageSize;
    endRow = (endRow > num)? num : endRow; 

  for(var i=1;i<(num+1);i++){
    var irow = itable.rows[i-1];
    if(i>=startRow && i<=endRow){
      irow.style.display = "block";
    }else{
      irow.style.display = "none";
    }
  }
  var nextPage = "";
  var previousPage = "";
  var mostCurrent = "";
  if(currentPage>1){
    mostCurrent += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">The most current</a> " ;
    previousPage += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"> Previous Page </a>";
  }else{

  }
  if(currentPage<totalPage){
    nextPage += "&nbsp;&nbsp;" + "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\"> Next Page</a>";

  }else{

  }
  document.getElementById("barcon").innerHTML = nextPage;
  document.getElementById("previousPage").innerHTML = previousPage;
  document.getElementById("mostCurrent").innerHTML = mostCurrent;

  // // navitation bar
  // var topbtn = document.getElementById("backToTop");
  // var timer = null;
  // var pagellookheight = document.documentElement.clientHeight;

  // window.onscroll = function(){
  //     // window.alert("hello");
  //     var backtop = document.documentElement.scrollTop;
  //     if(backtop >= pagellookheight){
  //         topbtn.style.display = "block";
  //     }
  //     else{
  //         topbtn.style.display = "none";
  //     }
  // }
  // topbtn.onclick = function(){
      
  // timer = setInterval(function(){
  //     var backtop = document.documentElement.scrollTop;
  //     var speedtop = backtop/5;
  //     document.documentElement.scrollTop = backtop - speedtop;
  //     if(backtop ==0){
  //         clearInterval(timer);
  //     }
  // },30);
  // }
  // const button = document.querySelector('.button');
  //     const menus = document.querySelector('.service1');
  //     button.addEventListener('click', e => {
  //       document.body.classList.toggle('active');
  //       if (document.body.classList.contains('active')) {
  //         menus.style.display = 'block';
  //       }
  // });
}