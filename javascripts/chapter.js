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

  const video = nextChapter.querySelector('video');
  video.play();

  video.addEventListener('ended', () => {
    choices.classList.add('is-visible');
  })
}
