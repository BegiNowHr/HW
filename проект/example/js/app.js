
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

console.log(tabs)
console.log(tabsParent)
console.log(tabContent)

const handleHideCTabContent= ()=>{
    tabContent.forEach((item)=>{
        item.style.display = 'none'
    } )
    tabs.forEach((item)=>{
        item.classList.remove('tabheader__item_active')
    })}



const handleShowTabContent = (i=0)=>{
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
handleHideCTabContent();
handleShowTabContent()

tabsParent.addEventListener('click', (e)=>{
    const target = e.target;
    if(target.classList.contains('tabheader__item')){
        console.log(target)
        tabs.forEach((item,i) => {
            if(item === target){
                // console.log(i)
                handleHideCTabContent()
                handleShowTabContent(i)
            }})}})
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const modalOpenBtn = document.querySelector(".btn_white");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);


const sliderImg = document.querySelectorAll(".offer__slide");
const sliderPrev = document.querySelector(".offer__slider-prev");
const sliderNext = document.querySelector(".offer__slider-next");
const currentCounter = document.querySelector("#current");
let slideIndex = 0;

const showSlide = function (){
    sliderImg.forEach((item)=>{
        item.style.display = 'none'
    } )
    sliderImg[slideIndex].style.display = 'block'
    currentCounter.textContent = ("0" + (slideIndex + 1)).slice(-2);

}
showSlide()
let changeNext = ()=>{
    showSlide()
    slideIndex++
    if (slideIndex >= sliderImg.length) {
        slideIndex = 0;
    }
}
let intervalChange;
intervalChange = setInterval(changeNext, 1000);
const stopInterval = function (){
    clearInterval(intervalChange);
    setTimeout(() => {
        clearInterval(intervalChange);
        intervalChange = setInterval(changeNext, 1000);
    }, 5000);
}
sliderNext.addEventListener('click', () => {
    showSlide()
    slideIndex++
    if (slideIndex >= sliderImg.length) {
        slideIndex = 3;
    }
    stopInterval()
});
sliderPrev.addEventListener('click',()=>{
    showSlide()
    slideIndex--
    if (slideIndex < 0) {
        slideIndex = 0;
    }
    stopInterval()
})
function checkScroll() {
    const scrollWindow = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    if (scrollWindow + windowHeight >= pageHeight) {
        openModal()
    }
}
window.addEventListener("scroll", checkScroll);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});