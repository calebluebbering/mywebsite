document.addEventListener('DOMContentLoaded', function() {
    const delayedLinks = document.querySelectorAll('.delayed-link');
    
    delayedLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 773) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // 500ms delay, adjust as needed
            }
            // If screen width is 773px or larger, the default link behavior occurs immediately
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    let isActive = false;

    dropdownButton.addEventListener('click', function(event) {
        if (window.matchMedia('(hover: none)').matches) {
            event.preventDefault();
            isActive = !isActive;
            dropdownButton.classList.toggle('active', isActive);

            if (!isActive) {
                // Redirect to home page when clicked again
                window.location.href = '/';
            }
        }
    });
});