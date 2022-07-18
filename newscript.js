
let data = [
    {
        id: 1,
        imageUrl: 'https://img.freepik.com/free-photo/delicious-spicy-fried-chicken-burger-ads-with-burning-fire-dark-background-fried-chicken-burger_226766-53.jpg?w=1060',
    title: 'chicken',
        url: 'https://www.myrecipes.com/recipe/classic-burger'
    },
    {
        id: 2,
        imageUrl: 'https://img.freepik.com/free-photo/tasty-pepperoni-pizza-with-mushrooms-olives_79782-1976.jpg?w=1380',
        title: 'pizza',
        url: 'https://www.myrecipes.com/recipe/classic-burger'
    },
    {
        id: 3,
        imageUrl: 'https://img.freepik.com/free-photo/front-view-burgers-stand_141793-15545.jpg?t=st=1656917713~exp=1656918313~hmac=14d72b8ddd416c49d4ae21ad85e1b27369d8dd52e612b3d9b13ca37b717d24b5&w=900',
        title: 'burgers',
        url: 'https://www.myrecipes.com/recipe/classic-burger'
    },
    {
        id: 4,
        imageUrl: 'https://img.freepik.com/free-photo/italian-pasta-shells-with-mushrooms-zucchini-tomato-sauce_2829-10882.jpg?t=st=1656949350~exp=1656949950~hmac=a6a99679bc45c3c1d4d7bc16cf54b4d984e7c7a57e0ddaec8d563483563a9fef&w=1380',
    title: 'pasta mushrooms',
        url: 'https://www.myrecipes.com/recipe/classic-burger'
    },
    {
        id: 5,
        imageUrl: 'https://img.freepik.com/free-photo/professional-chef-fire_79782-796.jpg?w=1060',
        title: 'chef',
        url: 'https://www.myrecipes.com/recipe/classic-burger'
      },
      
]


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotItem = document.getElementsByClassName('dot');
let sliderIndex = 0;


function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.classList.add('slide');

    return tag;
}

function createImgtag(item) {
 
    let tagImage = document.createElement('div');
    tagImage.style.backgroundImage = `url(${item.imageUrl})`;
    tagImage.classList.add('slide-bg');

    return tagImage;
}


function createH2tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.append(item.title);
    tagTitle.classList.add('title-slider');

    return tagTitle;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots-wraper');


    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }
        dots.appendChild(dot);

    })
    return dots;

}

function setSlide() {
    sliderContent.innerHTML = '';
    let slideItem = createAtag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);
    currentDotActive();

    console.log(slideItem);
}

function currentDotActive() {
    dotItem[sliderIndex].classList.add('active');
}


function arrowLeftClickSlider() {
    if (sliderIndex == 0) {
        sliderIndex = data.length -  1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}


function arrowRightClickSlider() {
    if (sliderIndex == data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}


arrowLeft.addEventListener('click', arrowLeftClickSlider);

arrowRight.addEventListener('click',arrowRightClickSlider);



setSlide();

setInterval( () => {
    arrowRightClickSlider();
}, 3000);



let burgertext = document.getElementById("indextext");

burgertext.textContent += "Best memories are created eating burgers with friends";



let image = document.createElement('img');

image.setAttribute(
  'src',
  'https://img.freepik.com/free-vector/horizontal-menu-template-with-fast-food_79603-1230.jpg?t=st=1657090794~exp=1657091394~hmac=7679e5bfa42b839e4322d78be19d83c24afd314b4ef6c4afcbeaf195b3ae9c23&w=900',
);

image.setAttribute('alt', 'food');

image.setAttribute('height', 700); 
image.setAttribute('width', 1200); 


image.style.border = '5px solid yellow';

image.onerror = function handleError() {
  console.log('Image could not be loaded');

};

image.onload = function handleImageLoaded() {
  console.log('image loaded successfully');
};

let burgerimage = document.getElementById('burgerimage');
burgerimage.appendChild(image);



let hamburger=document.querySelector(".hamburger");
let navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(x=> x.addEventListener("click"));


      
function setCookie(username,uservalue,exdays) {
    let cookies = new Date();
    // d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + cookies.toUTCString();
    document.cookie = username + "=" + uservalue + ";" + expires + ";path=/";
  }
  
  function getCookie(username) {
    let name = username + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let caarray = decodedCookie.split(';');
    for(let i = 0; i < caarray.length; i++) {
      let c = caarray[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Burger's Factory wishes you a successful day :) " + user );
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 50);
       }
    }
  }