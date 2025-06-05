function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.querySelector('.email-input').value;

  if (!email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }

  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      alert("Thank you! We'll notify you when Orizn launches.");
      form.reset();
    })
    .catch((error) => {
      alert('There was a problem submitting the form. Please try again later.');
      console.error(error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll(
    '.main-title, .signup-section, .description, .feature-item'
  );

  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';

    setTimeout(() => {
      el.style.transition = 'all 0.6s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 100);
  });
});
