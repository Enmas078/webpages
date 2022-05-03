const date = document.querySelector(".date");
const dateTime = new Date();
date.innerHTML = dateTime;
// display pictures on profile
//select variables 

// display pictur
var fileTag = document.getElementById("filetag"),
  preview = document.getElementById("preview");

fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}


const overallcontain = document.querySelector(".overallcontain");
const menu = document.querySelectorAll(".cont");
const content = document.querySelectorAll(".content");
overallcontain.addEventListener("click", function(e){
  const id = e.target.dataset.id;
  if(id){
    menu.forEach(function(menuItem){
      menuItem.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach(function(contentMenu){
      contentMenu.classList.remove("active");
    })
    const element = document.getElementById(id);
    element.classList.add("active");
    }
});


// for dsshboard adverts

/*
*/
function changeImages(inputs) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}


const loadedFile = function(event) {
  const prev = document.getElementById("prev")
  prev.src = URL.createObjectURL(event.target.files[0]);
}

const displayPic = document.getElementById("prev");
const adsinputfile = document.getElementById("filetags");
adsinputfile.addEventListener("change", function(event) {
  displayPic.src = URL.createObjectURL(event.target.files[0]);
});

// chatbox
const textarea = document.querySelector("textarea");
const send = document.querySelector(".send");
const ul = document.querySelector("ul");
send.addEventListener("click", function(){
  const elem = document.createElement("li");
  elem.style.color ="palegreen";
  elem.innerHTML= textarea.value;
  ul.appendChild(elem);
  textarea.value = "";
})

// search 
const search = document.getElementById("search").value;
const head = document.querySelector("head");

search.addEventListener("keyup",function(){
for (var i =0; i < head.length; i++){
  let match = head[i].innerHTML;
  if (match){
    let textValue = match.textContent || match.innerHTML;
    if (textValue.indexof(search) > -1)
    head[i].style.display="";
  } else{
    product[i].style.display="none";
  }
}
})
/*const contmenu = document.querySelector(".contmenu");
const cont = document.querySelectorAll(".cont");
const content = document.querySelectorAll(".content");
contmenu.addEventListener("click", function(e) {
      const id = e.target.dataset.id;
      if (id) {
        cont.forEach(function(conts) {
          conts.classList.remove("active");
          e.target.classList.add("active");

        });
        content.forEach(function(contents) {
          contents.classList.remove("active");

        });
        const element = document.getElementById(id);
        element.classList.add("active");
        console.log(element);
      }*/
















/*var loadFile = function(event) {
var image = document.getElementById('output');
image.src = URL.createObjectURL(event.target.files[0]);
};
const file = document.getElementById("file");
const output = document.getElementById("output");
file.addEventListener("change", function(event) {
  output.src = URL.createObjectURL(event.target.files[0]);
});
// navbar 
const contmenu = document.querySelector(".contmenu");
const cont = document.querySelectorAll(".cont");
const content = document.querySelectorAll(".content");
contmenu.addEventListener("click", function(e) {
  const id = e.target.dataset.id;
  if (id) {
    cont.forEach(function(conts) {
      conts.classList.remove("active");
      e.target.classList.add("active");

    });
    content.forEach(function(contents) {
      contents.classList.remove("active");

    });
    const element = document.getElementById(id);
    element.classList.add("active");
    console.log(element);
  }
});
// text to homepage from chat
const form = document.querySelector("form");
const textArea = document.querySelector("textarea");
const posts = document.querySelector("button");
const a = document.getElementById("li");
form.addEventListener("click", function(e){
  const prev = e.preventDefault();
  console.log ("hi");
  const li = document.createElement("li");
  a.innerHTML = textArea.value;
  a.appendChild(li);
  textArea.value="";
});
// image for advertisement

const displayPic= document.getElementById("adsimg");
const adsinputfile= document.getElementById("file");
adsinputfile.addEventListener("change", function(event) {
  
 displayPic.src = URL.createObjectURL(event.target.files[0]);
  console.log(displayPic.src);
});*/
