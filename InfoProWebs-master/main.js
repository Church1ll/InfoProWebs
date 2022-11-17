var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

var coll = document.getElementsByClassName("collapsible");

for ( let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      
      //coll.style.color = "#627d98";
    }
  });
}

var nr_click_1 = 0;
document.getElementsByClassName("collapsible")[0].onclick = () => {
  nr_click_1++;
  var icon = document.getElementById("icon_1");
  if ((nr_click_1 % 2) == 0) {
    icon.style.opacity = "0.5";
    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "all 0.5s";
    icon.style.transitionDelay = "0s";
    coll[0].style.color = "#627d98";
  } else {
    icon.style.transform = "rotate(90deg)";
    icon.style.opacity = "1";
    coll[0].style.color = "#3f96ee";
  }
}

var nr_click_2 = 0;
document.getElementsByClassName("collapsible")[1].onclick = () => {
  nr_click_2++;
  var icon = document.getElementById("icon_2");
  if ((nr_click_2 % 2) == 0) {
    icon.style.opacity = "0.5";
    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "all 0.5s";
    icon.style.transitionDelay = "0s";
    coll[1].style.color = "#627d98";
  } else {
    icon.style.transform = "rotate(90deg)";
    icon.style.opacity = "1";
    coll[1].style.color = "#3f96ee";
  }
}

var nr_click_3 = 0;
document.getElementsByClassName("collapsible")[2].onclick = () => {
  nr_click_3++;
  var icon = document.getElementById("icon_3");
  if ((nr_click_3 % 2) == 0) {
    icon.style.opacity = "0.5";
    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "all 0.5s";
    icon.style.transitionDelay = "0s";
    coll[2].style.color = "#627d98";
  } else {
    icon.style.transform = "rotate(90deg)";
    icon.style.opacity = "1";
    coll[2].style.color = "#3f96ee";
  }
}

var nr_click_4 = 0;
document.getElementsByClassName("collapsible")[3].onclick = () => {
  nr_click_4++;
  var icon = document.getElementById("icon_4");
  if ((nr_click_4 % 2) == 0) {
    icon.style.opacity = "0.5";
    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "all 0.5s";
    icon.style.transitionDelay = "0s";
    coll[3].style.color = "#627d98";
  } else {
    icon.style.transform = "rotate(90deg)";
    icon.style.opacity = "1";
    coll[3].style.color = "#3f96ee";
  }
}

var nr_click_cont_9_button = 0;
var cont_9_button = document.getElementById("cont_9_button");
cont_9_button.onclick = () => {
  nr_click_cont_9_button++;
  var cont_9_hidden_card = document.getElementsByClassName("cont_9_card_hidden");
  if ((nr_click_cont_9_button % 2) == 0) {
    for (var n = 0; n < cont_9_hidden_card.length; n++) {
      cont_9_hidden_card[n].style.display = "none";
      cont_9_hidden_card[n].style.opacity = "0";
      cont_9_hidden_card[n].style.transition = "all 0.5s ease";
      cont_9_hidden_card[n].style.transitionDelay = "0s";
      cont_9_button.innerHTML = "View All";
    }
  } else {
    for (var n = 0; n < cont_9_hidden_card.length; n++) {
      cont_9_hidden_card[n].style.display = "block";
      cont_9_hidden_card[n].style.opacity = "1";
      cont_9_button.innerHTML = "Hide Some";
    }
  }

}