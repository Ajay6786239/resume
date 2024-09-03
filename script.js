// Ensure this script is executed after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Your EmailJS user ID
    emailjs.init('4gPTsBr2VALGFiTJJ'); // Replace with your EmailJS User ID

    const btn = document.getElementById('button');
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        btn.textContent = 'Sending...'; // Update button text

        const serviceID = 'service_eo778ag'; // Your EmailJS service ID
        const templateID = 'template_cvjnmbj'; // Your EmailJS template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Send Message'; // Reset button text
                alert('Sent!');
                form.reset(); // Clear form fields
            }, (err) => {
                btn.textContent = 'Send Message'; // Reset button text
                alert('Failed to send: ' + JSON.stringify(err));
            });
    });
}); 
