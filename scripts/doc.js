document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in, .fade-in img');

    function checkPosition() {
        fadeInElements.forEach(function(element) {
            const positionFromTop = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (positionFromTop - screenHeight <= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    document.addEventListener('scroll', checkPosition);
    document.addEventListener('resize', checkPosition);
    
    checkPosition();
});
