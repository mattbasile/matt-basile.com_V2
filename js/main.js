const headerContent = document.querySelectorAll('.content-head');
const aboutBtn = document.querySelector('.about-btn');
const aboutSection = document.querySelector('.about');
const contactSection = document.querySelector('.contact');


headerContent.forEach((section)=>{
    const tags = [].slice.call(section.querySelectorAll('a'));
    console.log(tags);
    section.addEventListener("mouseenter", ()=>{
      TweenMax.staggerTo (tags, 1, {opacity:"1"}, 0.2)
      TweenMax.to(section, 1, {background: 'rgb(50, 50, 50, .3)'});
    //   section.style.background=" rgb(50, 50, 50)";
    })
    section.addEventListener("mouseleave", ()=>{
        TweenMax.staggerTo (tags, 1, {opacity:"0"}, 0.2)
        TweenMax.to(section, 1, {background: 'white'});
      })
})

aboutBtn.addEventListener('click', ()=>{
    
    aboutSection.classList.toggle('flex');
    aboutSection.classList.toggle('hidden');
    contactSection.classList.toggle('flex');
    contactSection.classList.toggle('hidden');


    //     aboutSection.classList.remove="flex";
    // }
    // else{
    //     aboutSection.classList.add="flex";
    // }
});