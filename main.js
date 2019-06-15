(function () {
    // particlesJS.load(@dom-id, @path-json, @callback (optional));
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
})();


function select(event) {
    /*let isActive = event.target.classList.contains("active");
    if(!isActive){
        #event.target.addClass("active");
    }*/
}

document.addEventListener('scroll', e => {
    if(document.scrollingElement.scrollTop !== 0){
        const element = document.getElementById("header");
        element.classList.add("stuck");
    }else{
        const element = document.getElementById("header");
        element.classList.remove("stuck");
    }
});
