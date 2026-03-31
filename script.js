document.addEventListener('keydown', function (event) {
  // Check if the pressed key is "1"
  if (event.key === '1') {
    document.body.classList.toggle('flicker-animation');
  }
});