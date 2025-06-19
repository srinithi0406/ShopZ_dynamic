/*Hamburger Menu*/
const menu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

/*FAQs*/
let answers=document.querySelectorAll('.accordion')
answers.forEach((event) =>{
    event.addEventListener("click", ()=>{
        const icon = event.querySelector('.toggle-icon');

        if (event.classList.contains("active")){
            event.classList.remove('active');
            icon.textContent = "+";
        }
        else{
            event.classList.add("active");
            icon.textContent = "-";
        }
    });
});


/*Feedback Form*/
document.querySelector('.form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for your feedback!");
  e.target.reset();
});

/*Back To Top*/
let mybtn=document.getElementById('scrollbuttonid');
window.addEventListener('scroll', ()=>{
    if (document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        mybtn.style.display='flex';
    }
    else{
        mybtn.style.display='none';
    }
})

/*Toggle Theme*/
const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});


/* Add to Cart button*/
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".view-btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      Swal.fire({
        title: "Added to Cart!",
        text: "Your item has been successfully added.",
        icon: "success",
        confirmButtonColor: "#FFD700",
        background: document.body.classList.contains('dark-theme') ? "#111" : "#fff",
        color: document.body.classList.contains('dark-theme') ? "#FFD700" : "#000"
      });
    });
  });
});


