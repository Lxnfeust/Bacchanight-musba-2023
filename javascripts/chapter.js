// function openUnclickableArea(id) {
//   // on ferme toutes les zones non clickables
//   unclickableAreas.forEach((chapter-unclickable-area) => {
//     unclickableAreas.classList.remove('is-opened');
//   });

//   // zone non clickable manager
// const unclickableAreas = document.querySelectorAll('.chapter-unclickable-area');

// Introduction
const startButton = document.getElementById('start-experience-button');

startButton.addEventListener('click', () => {
  openChapter('chapter-1')

});

// Chapters manager
const chapters = document.querySelectorAll('.chapter');
const choices = document.querySelectorAll('.choice');

choices.forEach(function(choiceButton) {
  choiceButton.addEventListener('click', () => {
    const nextChapterId = choiceButton.getAttribute('data-goto');
    openChapter(nextChapterId);
  })
});

function openChapter(id) {
  // on ferme tous chapitres
  chapters.forEach((chapter) => {
    chapter.classList.remove('is-opened');
  });

  const nextChapter = document.getElementById(id);
  nextChapter.classList.add('is-opened');

  const choices = nextChapter.querySelector('.choices')

  // Video HTML
  // const video = nextChapter.querySelector('video');
  // video.play();

  // video.addEventListener('ended', () => {
  //   choices.classList.add('is-visible');
  // })

  // Video Vimeo player
  // Doc : https://github.com/vimeo/player.js/#embed-options
  const playerContainer = nextChapter.querySelector('.player-container');
  const dataYoutubeId = playerContainer.getAttribute('data-youtube-id');
  const player = new YT.Player(playerContainer, {
    videoId: dataYoutubeId,
    playerVars: {
      modestbranding:true,
      rel:0,
      showinfo:0,
    },
    events: {
      'onReady': () => {
        player.playVideo()
      },
      'onStateChange': (state) => {
        if (state.data === 0) {
          const iframe = nextChapter.querySelector('.player-container');
          exitFullScreen();
          iframe.style.display = "none";
          choices.classList.add('is-visible');
        }
      },
    }
  });
  
  function exitFullScreen () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
  }
  }
  // Passer en plein écran automatiquement
  // player.requestFullscreen()
  

}



// openChapter('affiche-film')

