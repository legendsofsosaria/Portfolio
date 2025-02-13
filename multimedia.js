document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.video-slider');
    const sliderContainer = document.querySelector('.video-slider-container');
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');
    let videoItems; // Declare videoItems here

    let currentPosition = 0;
    let videosToShow;
    let itemWidth;

    function updateSlider() {
        const containerWidth = sliderContainer.offsetWidth;

        if (containerWidth < 769) {
            videosToShow = 1;
        } else if (containerWidth < 1024) {
            videosToShow = 1;
        } else {
            videosToShow = 3;
        }

        videoItems = Array.from(document.querySelectorAll('.video-item')); // Initialize inside updateSlider

        if (videoItems.length > 0) {
            itemWidth = videoItems[0].offsetWidth + 20;
        } else {
            return;
        }

        const maxPosition = videoItems.length - videosToShow;

        slider.style.transform = `translateX(-${currentPosition * itemWidth}px)`;

        scrollLeftButton.disabled = currentPosition === 0;
        scrollRightButton.disabled = currentPosition === maxPosition;
    }

    scrollLeftButton.addEventListener('click', () => {
        currentPosition = Math.max(0, currentPosition - 1);
        updateSlider();
    });

    scrollRightButton.addEventListener('click', () => {
        currentPosition = Math.min(videoItems.length - videosToShow, currentPosition + 1); // Corrected calculation
        updateSlider();
    });

    // Add video items dynamically
    const videoData = [
        { src: "assets/videoclips/Scorpio.mp4", caption: "Scorpio" },
        { src: "assets/videoclips/Diving.mp4", caption: "Diving System" },
        { src: "assets/videoclips/SeedMachine.mp4", caption: "Seed Machine" },
        { src: "assets/videoclips/Harvesting.mp4", caption: "Harvesting System" },
        { src: "assets/videoclips/NecroDominate.mp4", caption: "Necromancy Domination System" },
        { src: "assets/videoclips/ProjectileMobs.mp4", caption: "Monsters Projectiles" },
        { src: "assets/videoclips/ExplodingMerrow.mp4", caption: "Auto Blood Vial" },
        { src: "assets/videoclips/VampireDungeonTour.mp4", caption: "Sunless Citadel Dungeon" },
        { src: "assets/videoclips/ArchaeologyMuseumDungeon.mp4", caption: "Archaeology Museum" },
        { src: "assets/videoclips/AchievementSystem.mp4", caption: "Achievement System" }
    ];

    videoData.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <video width="100%" height="auto" controls loading="lazy">
                <source src="${video.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="caption">
                <p>${video.caption}</p>
            </div>
        `;
        slider.appendChild(videoItem);
    });

    // Initial setup and on resize (call after video items are added)
    window.addEventListener('resize', updateSlider);
    setTimeout(updateSlider, 0); // Call updateSlider after DOM is ready
});
