function navbarResponse() {
    var x = document.getElementById("main-nav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

$(document).ready(function () {
    $(".nav-link").click(function () {
        var x = document.getElementById("main-nav");
        x.className = "main-nav";
    })
});
