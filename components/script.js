(function(window, document, undefined) {
  var playlist = new Array();
  var nowPlayingNumber = 0;
  var player = document.getElementById('video-player');
  var droparea = document.getElementById('video-droparea');

  var playVideo = function(number) {
    var URL = window.URL || window.webkitURL;
    player.src = URL.createObjectURL(playlist[number]);
  };

  droparea.addEventListener('drop', function(event) {
    event.preventDefault();
    droparea.classList.remove('video-dropover');
    droparea.classList.add('video-dropped');
    for (var i = 0; i < event.dataTransfer.files.length; i++) {
      playlist.push(event.dataTransfer.files[i]);
    }
    if (playlist.length == 1) {
      playVideo(0);
    }
  });

  player.addEventListener('ended', function(event) {
    nowPlayingNumber += 1;
    if (playlist.length == nowPlayingNumber) {
      nowPlayingNumber = 0;
    }
    playVideo(nowPlayingNumber);
  });

  droparea.addEventListener('dragover', function(event) {
    event.preventDefault();
    event.dataTransfer.effectAllowed = 'copy';
  });

  droparea.addEventListener('dragenter', function(event) {
    event.preventDefault();
    droparea.classList.add('video-dropover');
  });

  droparea.addEventListener('dragleave', function(event) {
    event.preventDefault();
    droparea.classList.remove('video-dropover');
  });

  window.addEventListener('dragenter', function(event) {
    event.preventDefault();
    droparea.classList.remove('video-dropped');
  });

})(window, document, undefined);
