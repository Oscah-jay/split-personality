document.addEventListener('DOMContentLoaded', function() {
    const splitContainer = document.getElementById('splitContainer');
    const leftSide = document.getElementById('leftSide');
    const rightSide = document.getElementById('rightSide');
    const divider = document.getElementById('divider');
    
    // Check if we're on mobile
    function isMobile() {
        return window.innerWidth < 768;
    }
    
    // Handle mouse enter on left side
    leftSide.addEventListener('mouseenter', function() {
        splitContainer.classList.remove('right-active');
        splitContainer.classList.add('left-active');
    });
    
    // Handle mouse enter on right side
    rightSide.addEventListener('mouseenter', function() {
        splitContainer.classList.remove('left-active');
        splitContainer.classList.add('right-active');
    });
    
    // Handle mouse leave from container
    splitContainer.addEventListener('mouseleave', function() {
        splitContainer.classList.remove('left-active');
        splitContainer.classList.remove('right-active');
    });
    
    // Handle touch events for mobile
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
    
    // Reset on touch end outside the sides
    document.addEventListener('touchend', function(e) {
        if (!leftSide.contains(e.target) && !rightSide.contains(e.target)) {
            splitContainer.classList.remove('left-active');
            splitContainer.classList.remove('right-active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Reset classes when switching between mobile and desktop
        splitContainer.classList.remove('left-active');
        splitContainer.classList.remove('right-active');
    });
});