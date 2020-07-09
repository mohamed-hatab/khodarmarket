var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}
var observer = new IntersectionObserver(intersect,options)
var productCollection = document.querySelector(".productCollection1")
observer.observe(productCollection)

function intersect(entries,observer){
  if(entries[0].isIntersecting){
  console.log("intersected")
  productCollection.setAttribute("id", "activeCat");
}}
