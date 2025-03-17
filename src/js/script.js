document.addEventListener('DOMContentLoaded', function() {
    const splitContainer = document.getElementById('splitContainer');
    const leftSide = document.getElementById('leftSide');
    const rightSide = document.getElementById('rightSide');
    const divider = document.getElementById('divider');
    
    function isMobile() {
        return window.innerWidth < 768;
    }
    
    leftSide.addEventListener('mouseenter', function() {
        splitContainer.classList.remove('right-active');
        splitContainer.classList.add('left-active');
    });
    
    rightSide.addEventListener('mouseenter', function() {
        splitContainer.classList.remove('left-active');
        splitContainer.classList.add('right-active');
    });
    
    splitContainer.addEventListener('mouseleave', function() {
        splitContainer.classList.remove('left-active');
        splitContainer.classList.remove('right-active');
    });
    
    leftSide.addEventListener('touchstart', function(e) {
        e.preventDefault();
        splitContainer.classList.remove('right-active');
        splitContainer.classList.add('left-active');
    });
    
    rightSide.addEventListener('touchstart', function(e) {
        e.preventDefault();
        splitContainer.classList.remove('left-active');
        splitContainer.classList.add('right-active');
    });
    
    document.addEventListener('touchend', function(e) {
        if (!leftSide.contains(e.target) && !rightSide.contains(e.target)) {
            splitContainer.classList.remove('left-active');
            splitContainer.classList.remove('right-active');
        }
    });
    
    window.addEventListener('resize', function() {
        splitContainer.classList.remove('left-active');
        splitContainer.classList.remove('right-active');
    });
});