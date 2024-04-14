document.addEventListener(
  'DOMContentLoaded',
  function () {
    document.querySelectorAll('.rain').forEach(
      rain => {
        //rain.style.left = Math.random() * 100 + '%';
        rain.style.right = Math.random() * 100 + '%';
        rain.style.animationDuration = Math.random() * 1 + 1 + 's';
        rain.style.animationDelay = Math.random() * 2 + 's';
      }
    );
  }
);
