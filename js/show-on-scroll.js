var scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');
var elementsToShow = Array.prototype.slice.call(elementsToShow);

function loop(){
    elementsToShow.forEach(function(element) {
        if (isElementInViewport(element)){
            element.classList.add("is-visible");
        } 
         else {
             element.classList.remove("is-visible");
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport(el){
    if (typeof jQUery == "function" && el instanceof jQuery){
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return(
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
        && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}
                     

