var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}
var observer = new IntersectionObserver(intersect,options)
var footer = document.querySelector(".footerr")
var features = document.querySelector(".features")


function intersect(entries,observer){

  // console.log(entries[0].target.classList.contains("footerr"));
  if(entries[0].isIntersecting && entries[0].target.classList.contains("footerr")){
  console.log("footer intersected")
  $(".footerr").children().addClass("fade")
}

if(entries[0].isIntersecting && entries[0].target.classList.contains("features")){
  console.log("features intersected");
  $(".features").children().addClass("slideLeft")
}

}

observer.observe(footer)
observer.observe(features)
