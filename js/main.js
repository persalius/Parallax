var parallaxContainer = document.getElementById("parallax");
var layers = parallaxContainer.children;

var moveLayers = function(e) {
    var initialX = (window.innerWidth) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;
    
    [].slice.call(layers).forEach(function(layer, i) {
        var divider = i / 100;
        var positionX = initialX * divider;
        var positionY = initialY * divider;
        var bottomPosition = (window.innerHeight / 2) * divider;
        var layerStyle = layer.style;
        var transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';
        
        layerStyle.transform = transformString;
        layerStyle.bottom = "-" + bottomPosition + "px";
    });
    
}

window.addEventListener("mousemove", moveLayers);