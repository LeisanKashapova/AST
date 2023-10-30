function updateScroll() {
    const header = document.querySelector("header")
    if (window.scrollY === 0){
        header.classList.remove("header__scrolled")
    } else {
        header.classList.add("header__scrolled")
    }
    let windowBottomPosition = window.scrollY + window.innerHeight;
    // let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    // if (windowBottomPosition >= countElementPosition && !animationInited) {
    //     initIncreaseNumberAnimation()
    //     animationInited = true
    // }
  }
  
window.addEventListener("scroll", updateScroll)
  
  function addSmoothScroll(link) {
    link.addEventListener("click", onLinkClick)
  }
  
  function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute("href")).scrollIntoView({
        behavior: 'smooth'
    });
  }