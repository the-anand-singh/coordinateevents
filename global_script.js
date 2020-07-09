/* Change Banner Images Automatically */
var images_banner = ["images/Banner/2.jpeg",
  "images/Banner/3.jpeg",
  "images/Banner/4.jpeg",
  "images/Banner/5.jpeg",
  "images/Banner/6.jpeg"
];

function heroImage() {
  var i = 0;
  document.getElementById("hero").style.backgroundImage = "url(" + images_banner[i] + ")";
  setInterval(function () {
    i++;
    if (i == images_banner.length) {
      i = 0;
    }
    document.getElementById("hero").style.opacity = "0.3";
    document.getElementById("hero").style.transition = "1s";
    document.getElementById("hero").style.backgroundImage = "url(" + images_banner[i] + ")";
    document.getElementById("hero").style.opacity = "1";
    document.getElementById("hero").style.transition = "1s";
  }, 2000);
}


/* Gallery Section */
var images_gallery = ["images/Gallery/2cc2538f-9db0-4ed4-8cec-03b6e86592c4.JPG",
  "images/Gallery/3bcd04d7-510a-408e-bee7-a675f7adcd18.JPG",
  "images/Gallery/ARP_6797-01-02.jpeg",
  "images/Gallery/ARP_6867-10-01-05-01.jpeg",
  "images/Gallery/ARP_6980-01-01-01.jpeg",
  "images/Gallery/ARP_8440.JPG",
  "images/Gallery/ARP_8522.JPG",
  "images/Gallery/ARP_9511.NEF",
  "images/Gallery/ARP_9617.JPG",
  "images/Gallery/d1bf4def-cbb8-42c7-b48d-26dbae6c7550.JPG",
  "images/Gallery/FB_IMG_1588026530961-01.jpeg",
  "images/Gallery/FB_IMG_1588026600347-01.jpeg",
  "images/Gallery/FB_IMG_1588026909067.jpg",
  "images/Gallery/IMG-2014.JPG"
];
var currentImageIndex = 0;

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    closeModal();
  }
}

function modalImage(x) {
  currentImageIndex = x;
  document.getElementById("modal_image").src = images_gallery[x];
}

function checkGalleryIndex() {
  if (currentImageIndex == 0) {
    document.getElementById("prev-gallery").style.display = "none";
  } else {
    document.getElementById("prev-gallery").style.display = "block";
  }
  if (currentImageIndex == images_gallery.length - 1) {
    document.getElementById("next-gallery").style.display = "none";
  } else {
    document.getElementById("next-gallery").style.display = "block";
  }
}

function prevImage() {
  currentImageIndex -= 1;
  document.getElementById("modal_image").src = images_gallery[currentImageIndex];
}

function nextImage() {
  currentImageIndex += 1;
  document.getElementById("modal_image").src = images_gallery[currentImageIndex];
}

/* Change Testimonials onClick */
var videos = new Array("https://www.youtube.com/embed/VCQ24gXfRrc", "https://www.youtube.com/embed/_OBlgSz8sSM");
var currentVideoIndex = 0;

function checkTestimonialIndex() {
  if (currentVideoIndex == 0) {
    document.getElementById("prev-testimonials").style.display = "none";
  } else {
    document.getElementById("prev-testimonials").style.display = "block";
  }
  if (currentVideoIndex == videos.length - 1) {
    document.getElementById("next-testimonials").style.display = "none";
  } else {
    document.getElementById("next-testimonials").style.display = "block";
  }
}

function prevVideo() {
  currentVideoIndex -= 1;
  document.getElementById("testimonial").src = videos[currentVideoIndex];
}

function nextVideo() {
  currentVideoIndex += 1;
  document.getElementById("testimonial").src = videos[currentVideoIndex];
}

function resetForm() {
  /*var a = document.getElementById("name").value;
  var b = document.getElementById("email").value;
  var c = document.getElementById("phone").value;
  var d = document.getElementById("message").value;
  if (a == "" || a == null || b == "" || b == null || c == "" || c == null || d == "" || d == null) {
	  Event.preventDefault();
    alert("All fields in the form should be filled!");
  } else {*/
    document.getElementById("contact_form").submit();
    document.getElementById("contact_form").reset();
  alert("Thank you for reaching out! Someone from our team will get in touch with you shortly.");
}

function menu_openclose() {
  if (document.getElementById("navigation").style.display === "block") {
    document.getElementById("navigation").style.display = "none";
  } else {
    document.getElementById("navigation").style.display = "block";
  }
}
