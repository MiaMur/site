// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

/*var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var close = document.querySelector(".close");
var modal = document.querySelector(".modal");


img.addEventListener("click", function(){ 
  modal.classList.add("open-modal");
});
close.addEventListener("click", function(){
  modal.classList.remove("modal");
})*/



// create references to the modal...
var modal = document.getElementById('my-modal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('img-gallery-item');
// the image in the modal
var modalImg = document.getElementById("img01");



// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
 
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
     
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  
}


/*
var img1 = document.getElementById("my-img1");
var img2 = document.getElementById("my-img2");
var img3 = document.getElementById("my-img3");
var img4 = document.getElementById("my-img4");
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}*/