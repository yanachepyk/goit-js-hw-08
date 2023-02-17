import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
const onTimeUpdate = function (event) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
};
player.on('timeupdate', throttle(onTimeUpdate, 1000));

if (currentTime) {
    player.setCurrentTime(currentTime);
}
