function init(){

particlesContainer = document.getElementById("particles-js");
 setTimeout(() => {
            particlesContainer.classList.add("show");
        }, 1000);




/// Particle JS

/* ---- particles.js config ---- */

particlesJS("particles-js", {
   particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54", "#ffffff", "#cc444b", "#ff6b6b","#e63946" ] },
      shape: {
         type: "circle",
         stroke: { width: 0, color: "#000000" },
         polygon: { nb_sides: 5 },
         image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
         value: 1,
         random: false,
         anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
         value: 6,
         random: true,
         anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
         enable: false,
         distance: 150,
         color: "#ffffff",
         opacity: 0.4,
         width: 1
      },
      move: {
         enable: true,
         speed: 6,
         direction: "top",
         random: true,
         straight: false,
         out_mode: "bounce",
         bounce: false,
         attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
   },
   interactivity: {
      detect_on: "canvas",
      events: {
         onhover: { enable: true, mode: "repulse" },
         onclick: { enable: true, mode: "push" },
         resize: true
      },
      modes: {
         grab: { distance: 400, line_linked: { opacity: 1 } },
         bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
         repulse: { distance: 150, duration: 0.4 },
         push: { particles_nb: 4 },
         remove: { particles_nb: 2 }
      }
   },
   retina_detect: true
});


}




function showMessage(){

$(".birthday-card").css('display', 'none');
  $('.message-card').css('display', 'block');
  $('.container').css('display',  'none');

}





(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "10/19/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

