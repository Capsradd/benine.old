document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('splash-video');
    if (video) {
        video.addEventListener('ended', function() {
            window.location.href = 'main.html';
        });
    }
});