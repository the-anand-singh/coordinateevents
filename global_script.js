/* Change Banner Images Automatically */
var images_banner = ["images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/5.jpeg", "images/6.jpeg"];

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
var images_gallery = ["images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/5.jpeg", "images/6.jpeg"];
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
  document.getElementById("testimonials").src = videos[currentVideoIndex];
}

function nextVideo() {
  currentVideoIndex += 1;
  document.getElementById("testimonials").src = videos[currentVideoIndex];
}

function form_check() {
  var a = document.getElementById("name").value;
  var b = document.getElementById("email").value;
  var c = document.getElementById("phone").value;
  var d = document.getElementById("message").value;
  if (a == "" || a == null || b == "" || b == null || c == "" || c == null || d == "" || d == null) {
    alert("All fields in the form should be filled!");
  } else {
    alert("Thank you for reaching out!");
	  document.getElementById("contact_form").submit();
	  document.getElementById("contact_form").reset();
  }
}

function menu_openclose(){
  if (document.getElementById("navigation").style.display === "block") {
    document.getElementById("navigation").style.display = "none";
  } else {
    document.getElementById("navigation").style.display = "block";
  }
}