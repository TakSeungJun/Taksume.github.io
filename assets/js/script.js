'use strict';

const videoLink = document.querySelector('[data-play-video]');
const videoLabel = videoLink.querySelector('.video-label');
const videoPanel = document.querySelector('#research-video');
const videoMount = document.querySelector('[data-video-mount]');

videoLink.addEventListener('click', (event) => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();

  const opening = videoPanel.hidden;
  videoPanel.hidden = !opening;
  videoLabel.textContent = opening ? 'Close video' : 'Video';
  videoLink.setAttribute('aria-expanded', String(opening));
  videoLink.setAttribute('aria-label', opening ? 'Close video' : 'Play video');

  if (opening) {
    const player = document.createElement('iframe');
    player.src = 'https://www.youtube-nocookie.com/embed/NsbvDb8hZbA?autoplay=1&playsinline=1&rel=0';
    player.title = 'LiDAR Gaussian Splatting SLAM research demo';
    player.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    videoMount.replaceChildren(player);
    videoPanel.scrollIntoView({ block: 'nearest' });
    player.focus({ preventScroll: true });
  } else {
    videoMount.replaceChildren();
  }
});
