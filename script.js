const texts = [
  "faster deliveries",
  "expanding bussinesess",
  "reliable shipping experience",
  "cash(COD) handling"
];

const changingtext = document.getElementById("firstpage-changingtext");
let textindex = 0;

function showNextText() {
    changingtext.textContent = texts[textindex];
    
    // Fade in from left
    changingtext.style.opacity = 1;
    changingtext.style.transform = "translateX(0px)";


    setTimeout(() => {
        // Fade out to left
        changingtext.style.opacity = 0;
        changingtext.style.transform = "translateX(-50px)";

        // After fade-out, show next
        setTimeout(() => {
        textindex = (textindex + 1) % texts.length;
        showNextText();
        }, 500); // Match CSS transition duration

    }, 2000); // Visible duration
}

showNextText();

// logic for moving cards page

const track = document.getElementById("carouselTrack");
const cards = document.querySelectorAll(".card");
let cardindex = 0;

function slideToNextCard() {
  cardindex++;

  if (cardindex >= cards.length) {
    // Reset to first card after reaching end
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = `translateX(0)`;
      cardindex = 0;
    }, 600);
  }

  track.style.transition = "transform 0.6s ease";
  track.style.transform = `translateX(-${cardindex * 100}%)`;
}

setInterval(slideToNextCard, 2600); // 2s pause + 0.6s slide

// animations...

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }else{
      // entry.target.classList.remove('animate');
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.animate-on-scroll').forEach(elem => {
  observer.observe(elem);
});



// LAST carousell
const track2 = document.getElementById("carouselTrack2");
const cards2 = document.querySelectorAll(".card2");
let cardindex2 = 0;

function slideToNextCard2() {
  cardindex2++;

  if (cardindex2 >= cards2.length) {
    // Reset to first card after reaching end
    setTimeout(() => {
      track2.style.transition = "none";
      track2.style.transform = `translateX(0)`;
      cardindex2 = 0;
    }, 600);
  }

  track2.style.transition = "transform 0.6s ease";
  track2.style.transform = `translateX(-${cardindex2 * 100}%)`;
}

setInterval(slideToNextCard2, 3600); // 2s pause + 0.6s slide

// TO LOGIN PAGE

function toLogin() {
  window.location.href = "/login.html";
};
var button = document.getElementById("to-login");
button.addEventListener("click", toLogin);

// TO TRACKING PAGE

function goToTrackingPage() {
  const shipmentId = document.getElementById("ShipmentID").value.trim();
  if (!shipmentId) {
    alert("Please enter a Shipment ID.");
    return;
  }

  // Store the ID in localStorage
  localStorage.setItem("trackAwb", shipmentId);

  // Redirect to the tracking page
  window.location.href = '/shipment_tracking.html';
}
const emailinput = document.getElementById('emailinput');
const sendnotif = document.getElementById('sendnotif');
const notification = document.getElementById('notification');

sendnotif.addEventListener('click', function() {
  if(emailinput.value === ''){
    alert('Please Enter an email');
    return
  }else{
    notification.removeAttribute('hidden');
    setTimeout(function() {
        notification.setAttribute("hidden","");
    }, 3000); // Hide after 3 seconds
  }
});

