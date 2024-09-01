// script.js
document.getElementById('resolutionSelect').addEventListener('change', function() {
    const resolution = this.value;
    const giftDiv = document.getElementById('gift');

    // Xóa các phần tử ảnh và video cũ nếu có
    const oldImage = document.getElementById('giftImage');
    const oldVideo = document.getElementById('giftVideo');
    if (oldImage) {
        giftDiv.removeChild(oldImage);
    }
    if (oldVideo) {
        giftDiv.removeChild(oldVideo);
    }

    if (resolution === '1080p') {
        const video = document.createElement('video');
        video.id = 'giftVideo';
        video.controls = true;
        video.classList.remove('hidden');

        const source = document.createElement('source');
        source.id = 'videoSource';
        source.src = `gift_${resolution}.mp4`;
        source.type = 'video/mp4';

        video.appendChild(source);
        giftDiv.appendChild(video);
        video.load();
        video.play(); // Tự động phát video
    } else if (resolution) {
        const img = document.createElement('img');
        img.id = 'giftImage';
        img.src = `gift_${resolution}.png`;
        img.alt = 'Quà tặng';
        img.classList.remove('hidden');

        giftDiv.appendChild(img);
    }
});
