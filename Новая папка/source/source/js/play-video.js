const videoPlayButton = document.querySelector('.about__content-video-button');
const videoWrapper = document.querySelector('.about__content-video-wrapper');
const videoIframe = document.createElement('iframe');

const playVideo = () => {
  videoPlayButton.addEventListener('click' , () => {
    videoIframe.classList.add('about__content-video');
    videoIframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=k3gyFlHgnZk8FVo_&autoplay=1';
    videoIframe.width = '320';
    videoIframe.height = '170';
    videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    videoIframe.allowFullscreen = 'true';

    videoWrapper.appendChild(videoIframe);
    videoPlayButton.style.display = 'none';
  });
};

export {playVideo};
