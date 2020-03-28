window.addEventListener("load",start);
function start() {
  var s,m,h,date;
  s=document.getElementById('s');
  m=document.getElementById('m');
  h=document.getElementById('h');
  /////////////////////////////////////initial value///////////////////////////////////////
  date=((new Date()+" ").split(" ")[4]).split(":");
  s.setAttribute("style","transform: rotate("+(-90+parseInt(date[2])*6)+"deg);");
  m.setAttribute("style","transform: rotate("+(-90+parseInt(date[1])*6)+"deg);");
  h.setAttribute("style","transform: rotate("+(-90+parseInt(date[0])*6)+"deg);");
  drawMinutes();
  drawSeconds();
  document.addEventListener("click",tips);
  ///////////////////////////////////////////////////////////////////////////////////////
  setInterval(function(){
    date=((new Date()+" ").split(" ")[4]).split(":");
    s.setAttribute("style","transform: rotate("+(-90+parseInt(date[2])*6)+"deg);");
    m.setAttribute("style","transform: rotate("+(-90+parseInt(date[1])*6+(parseInt(date[2])/10))+"deg);");
    h.setAttribute("style","transform: rotate("+(-90+parseInt(date[0])*5*6+((parseInt(date[1])*6)/12))+"deg);");
  }, 1000);

}

function tips(e) {
  var x = e.pageX-100 ;
  var y = e.pageY-100 ;
  var str="";
  str+='<img class="tips" src="image/c'+Math.round(Math.random()*5)+'.png" width="200px" height="200px" style="opacity:0.2;position:fixed;top:'+y+'px;left:'+x+'px">';
  document.body.insertAdjacentHTML( 'beforeend', str );
  setTimeout(removeTips,1000);
}

function removeTips() {
  var list = document.body.getElementsByClassName("tips");
  for(var i=0;i<list.length;i++)
    document.body.removeChild(list[i]);
}

function drawMinutes() {
  var str="",left,top;
    for(var i=0;i<=9;i++) {
      left=585+240*Math.cos((30*i)*(Math.PI/180));
      top=285+240*Math.sin((30*i)*(Math.PI/180));
      str+='<img src="image/'+(i+3)+'.png" alt="" class="circle" style="top:'+top+'px;left:'+left+'px;">';
    }
    left=585+240*Math.cos((30*10)*(Math.PI/180));
    top=285+240*Math.sin((30*10)*(Math.PI/180));
    str+='<img src="image/1.png" alt="" class="circle" style="top:'+top+'px;left:'+left+'px;">'
    left=585+240*Math.cos((30*11)*(Math.PI/180));
    top=285+240*Math.sin((30*11)*(Math.PI/180));
    str+='<img src="image/2.png" alt="" class="circle" style="top:'+top+'px;left:'+left+'px;">'
    document.getElementById('main').insertAdjacentHTML( 'beforeend', str );
}

function drawSeconds() {
  var str="",top,left;
  for(var i=0;i<60;i++) {
    left=596+240*Math.cos((6*i)*(Math.PI/180));
    top=296+240*Math.sin((6*i)*(Math.PI/180));
      str+='<img src="image/s.png" class="c" style="top:'+top+'px;left:'+left+'px">';
  }
  document.getElementById('main').insertAdjacentHTML( 'beforeend', str );
}
