const headerSection = document.querySelectorAll('.head-section');
const aboutBtn = document.querySelector('.about-btn');
const aboutSection = document.querySelector('.about')



headerSection.forEach((section)=>{
    const tags = section.querySelectorAll('a');
    section.addEventListener("mouseenter", ()=>{
      TweenMax.to (tags, 1, {opacity: 1})
    })
    section.addEventListener("mouseleave", ()=>{
        TweenMax.to (tags, 1, {opacity: 0})
      })
})

aboutBtn.addEventListener('click', ()=>{
    aboutSection.classList.toggle('flex');
    aboutSection.classList.toggle('hidden');
    // if(aboutSection.classList.contains="flex"){
    //     aboutSection.classList.remove="flex";
    // }
    // else{
    //     aboutSection.classList.add="flex";
    // }
});