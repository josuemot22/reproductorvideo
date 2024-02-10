function changeVideo(button, videoUrl, title) {
    document.querySelectorAll('.select-video').forEach(function(btn) {
        btn.classList.remove('active');
    });

    button.classList.add('active');

    var videoContainer = document.querySelector('.video-container');

    videoContainer.innerHTML = `
        <div class="video-playlist">
            <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
            <h2>${title}</h2>
        </div>
    `;
}