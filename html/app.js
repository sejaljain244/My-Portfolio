const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first_child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const toggle_btn = document.querySelector(".next-btn");

window.addEventListener("scroll", () => {
   skillsCounter();
});


// -------   Sticky navbar

function stickyNavbar() {
   header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavbar);

// ------    Reveal Animation

let sr = ScrollReveal({
   duration: 2500,
   distance: "60px",
});

sr.reveal(".showcase-info", { delay: 600 });


///-------------------------------------skill section javascript 57:00
// // ------    skills progress bar Animation

// function hasReached(el){
//    let topPoasition = el.getBoundingClientREact().top;
//    console.log(topPoasition);
// }

// function skillsCounter(){
//    // console.log("we have reached the skill section");
//    hasReached(first_skill);
// }



// ------------      Change page theme      -------------------//

// let firstTheme = localStorage.getItem("dark");

// changeTheme(+firstTheme);

// function changeTheme(isDark) {
//    if (isDark) {
//       document.body.classList.add("dark");
//       toggle_btn.classList.replace("uil=moon", "uil-sun");
//       localStorage.setItem("dark", 1);

//    }
//    else {
//       document.body.classList.remove("dark");
//       toggle_btn.classList.replace("uil-sun", "uil-moon");
//       localStorage.setItem("dark", 0);
//    }
// }

// toggle_btn.addEventListener("click", () => {
//    changeTheme(!document.body.classList.contains("dark"));
// });
