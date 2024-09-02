// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name === '' || email === '' || message === '') {
          event.preventDefault();
          alert('Please fill out all fields.');
      } else if (!validateEmail(email)) {
          event.preventDefault();
          alert('Please enter a valid email address.');
      }
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});

//Read More 
document.addEventListener('DOMContentLoaded', function () {
  const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const shortText = document.getElementById(`text-${targetId}`);
            const fullText = document.getElementById(`full-text-${targetId}`);

            if (fullText.style.display === 'none' || fullText.style.display === '') {
                fullText.style.display = 'block';
                shortText.style.display = 'none';
                link.textContent = 'Read Less';
            } else {
                fullText.style.display = 'none';
                shortText.style.display = 'block';
                link.textContent = 'Read More';
            }
        });
    });
});
