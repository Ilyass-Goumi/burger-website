const buttons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

buttons.forEach((button) =>{
    button.addEventListener("click" , () =>{
        const category = button.getAttribute("data-category");

        menuItems.forEach((item) =>{
            if (category === "all" || category === item.getAttribute("data-category") ){
                item.style.display ="flex";
            }else{
                  item.style.display ="none";
            }
        })

    })
});

/* scripte 2  */

const swiper = new Swiper('.slider-wrapper', {
 
  loop: true,
  grabCursor:true,
  spaceBetween:30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  clickoble:true,
  dynamicBullets:true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 /* breack point responsive */
breakpoints:{
  0: { slidesPreView: 1

},
620: { slidesPreView: 2

},
1024: { slidesPreView: 3

},

 
},
});

  



























