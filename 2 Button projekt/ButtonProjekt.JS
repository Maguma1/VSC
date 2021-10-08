function myfunction(){
    window.open("https://www.youtube.com/watch?v=XfR9iY5y94s&ab_channel=MenAtWorkVEVO");
}

var flag = 1;

function myFunction() {
  if (flag === 1) {
    document.getElementById("demo").innerHTML = "Boorgir!";
    flag=-1;
  } else {
  document.getElementById("demo").innerHTML = "SLUTA CLICKA";
    flag=1;
  }
}