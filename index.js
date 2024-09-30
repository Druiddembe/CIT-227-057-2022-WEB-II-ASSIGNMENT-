var menuBtn= document.getElementById("menuId");
var menuHide = document.getElementById("hideMenu");

// menuBtn.addEventListener('click',()=>{
//    var sideBar= document.getElementsByClassName('sideBarLinks');
//    console.log(sideBar);
//    sideBar.style.display='block';
//    alert('sdljslk');
// })

function showSideBar(){
    document.querySelector('.sideBarLinks').style.display = "flex";
 }
function hideSideBar(){
    document.querySelector('.sideBarLinks').style.display = "none";
 }