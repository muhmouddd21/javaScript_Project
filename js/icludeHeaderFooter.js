
    document.addEventListener('DOMContentLoaded', () => {
      fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('header-container').innerHTML = data;
          const script = document.createElement('script');
          script.src = 'js/navbar.js';
          document.body.appendChild(script);
        });
      fetch('footer.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("footer-container").innerHTML = data;
        })
    });


   