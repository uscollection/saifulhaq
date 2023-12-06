// Simulate content loaded after 3 seconds
window.onload = function () {
    setTimeout(function () {
      document.querySelector('.loading-screen').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 1500); // Change this delay as needed
  };
  