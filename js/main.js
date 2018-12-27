const headerSection = document.querySelectorAll('.head-section');
// const tags = headerSection.querySelectorAll('a');


headerSection.forEach((section)=>{
    const tags = section.querySelectorAll('a');
    section.addEventListener("mouseenter", ()=>{
      TweenMax.to (tags, 1, {opacity: 1})
    })
    section.addEventListener("mouseleave", ()=>{
        TweenMax.to (tags, 1, {opacity: 0})
      })
})