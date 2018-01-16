(function(window, document, undefined) {
  var player = document.getElementById('video-player');
  var droparea = document.getElementById('video-droparea');

  droparea.addEventListener('drop', function(event) {
    event.preventDefault();
    droparea.classList.remove('video-dropover');
    droparea.classList.add('video-dropped');
    var URL = window.URL || window.webkitURL;
    var file = event.dataTransfer.files[0];
    player.src = URL.createObjectURL(file);
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
