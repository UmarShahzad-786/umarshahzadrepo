// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Contact page loaded successfully!");

    // Example: Add a click listener to social icons (optional)
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            // Prevent default link behavior if you want to handle clicks with JS
            // event.preventDefault();
            console.log(this.getAttribute('aria-label') + ' icon clicked.');
            // You could add custom analytics tracking here or other JS-driven actions
        });
    });

    // Example: Copy to clipboard (more advanced, requires careful implementation)
    // This is a simplified example. Real-world usage might need more robust error handling and user feedback.
    const emailItem = document.querySelector('.contact-item.email span');
    if (emailItem) {
        emailItem.parentElement.addEventListener('click', () => {
            const emailText = emailItem.textContent;
            navigator.clipboard.writeText(emailText).then(() => {
                alert('Email copied to clipboard: ' + emailText);
            }).catch(err => {
                console.error('Failed to copy email: ', err);
                alert('Failed to copy email.');
            });
        });
    }

     const whatsappItem = document.querySelector('.contact-item.whatsapp span');
    if (whatsappItem) {
        whatsappItem.parentElement.addEventListener('click', () => {
            const whatsappText = whatsappItem.textContent;
            navigator.clipboard.writeText(whatsappText).then(() => {
                alert('WhatsApp number copied to clipboard: ' + whatsappText);
            }).catch(err => {
                console.error('Failed to copy WhatsApp number: ', err);
                alert('Failed to copy WhatsApp number.');
            });
        });
    }
});