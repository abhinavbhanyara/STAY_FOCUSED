var flag=0;
var a=document.getElementById("adio");
var b=document.getElementById("bdio");
function showTime(){
  var q;
  var i=-1;
  var i;
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  h=appendZero(h);
  m=appendZero(m);
  s=appendZero(s);
  if(h>12){
    h-=12;
    q="pm";
  }
  else {
    q="am";
  }
  var y=today.getFullYear();
  var day=today.getDay();
  var date=today.getDate();
  if(date==1||date==21)
  date=date+"st";
  else if(date==2||date==22)
  date=date+"nd";
  else if(date==3||date==23)
  date=date+"rd";
  else
  date=date+"th";
  var month=today.getMonth();
  switch(day){
    case 0:
    day="Sunday";
    break;
    case 1:
    day="Monday";
    break;
    case 2:
    day="Tuesday";
    break;
    case 3:
    day="wednesday";
    break;
    case 4:
    day="Thursday";
    break;
    case 5:
    day="Friday";
    break;
    case 6:
    day="Saturday";
    break;
  }
  switch(month){
    case 0:
    month="January";
    break;
    case 1:
    month="February";
    break;
    case 2:
    month="March";
    break;
    case 3:
    month="April";
    break;
    case 4:
    month="May";
    break;
    case 5:
    month="June";
    break;
    case 6:
    month="July";
    break;
    case 7:
    month="August";
    break;
    case 8:
    month="September";
    break;
    case 9:
    month="October";
    break;
    case 10:
    month="November";
    break;
    case 11:
    month="December";
    break;
  }
  document.getElementById('elem0').innerHTML="|Stay|_|Focused|";
  document.getElementById('elem').innerHTML=h+":"+m+":"+s;
  document.getElementById('elem1').innerHTML=q;
  document.getElementById('elem2').innerHTML=day;
  document.getElementById('elem3').innerHTML=date+","+month+","+y;
  setTimeout(showTime, 500);
}

function appendZero(i){
  if(i<10){
    i="0"+i;
  }
  return i;
}
var hour=0;
var minute=0;
var second=0;
function showTimer(i){
  if(hour==99)
  {
    return;
  }
  if(hour==0&&minute==0&&second==0&&flag==1){
    flag=0;
  }
  if(hour==0&&minute==0&&second==1&&flag==1){
    b.play();
  }
  if(minute==0&&second<0&&hour!=0&&flag==1){
    minute=59;
    second=60;
    hour--;
  }
  if(second<0&&minute!=0&&flag==1){
    second=59;
    minute--;
  }
  if(i==1&&minute>=55){
    minute=0;
    hour++;
  }
  else if(i==1){
    minute=minute+5;
  }
  if(minute==0&&i==0&&hour>0){
    hour--;
    minute=60;
  }
  if(i==0&&minute>=5){
    minute=minute-5;
  }
  if(minute>9&&hour>9&&second>9)
  document.getElementById('timer').innerHTML=hour+":"+minute+":"+second;
  else if (minute>9&&hour>9) {
    document.getElementById('timer').innerHTML=hour+":"+minute+":"+"0"+second;
  }
  else if (hour>9&&second>9) {
    document.getElementById('timer').innerHTML=hour+":"+"0"+minute+":"+second;
  }
  else if (minute>9&&second>9) {
    document.getElementById('timer').innerHTML="0"+hour+":"+minute+":"+second;
  }
  else if (hour>9) {
    document.getElementById('timer').innerHTML=hour+":"+"0"+minute+":"+"0"+second;
  }
  else if (minute>9) {
    document.getElementById('timer').innerHTML="0"+hour+":"+minute+":"+"0"+second;
  }
  else if (second>9) {
    document.getElementById('timer').innerHTML="0"+hour+":"+"0"+minute+":"+second;
  }
  else{
    document.getElementById('timer').innerHTML="0"+hour+":"+"0"+minute+":"+"0"+second;
  }
  if(flag==1){
    second--;
    a.play();
    setTimeout(showTimer,1000);
  }
}
function increase(){
  if(flag==0)
  showTimer(1);
}
function decrease(){
  if(flag==0)
  showTimer(0);
}
function startTimer(){
  if(flag==0){
    flag=1;
    showTimer();
  }
}
function stopTimer(){
  hour=minute=second=0;
  flag=0;
  showTimer();
}
function pauseTimer(){
  flag=0;
}
