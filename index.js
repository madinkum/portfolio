document.querySelector("#navbar").innerHTML=`<header>
<a href="index.html"><img class="logo" src="./Images/logo.png" alt="logo"></a>
<nav>
    <ul class="nav-menu">
        <li class= "nav-item">
            <a href="index.html" class="nav-link" >Home</a>
        </li>
        <li class= "nav-item">
            <a href="about.html" class="nav-link" >About</a>
        </li>
        <li class= "nav-item">
            <a href="skills.html" class="nav-link" >Skills</a>
        </li>
        <li class= "nav-item">
            <a href="contacts.html" class="nav-link" >Contact</a>
        </li>
    </ul>
    <div class="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
   </div>
</nav>
</header>`;

const hamburger =document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

*document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


