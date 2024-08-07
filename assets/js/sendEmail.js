function sendMail(contactForm) {
    emailjs.send("service_06wtwhm","template_b6656bk",{
        from_name: contactForm.name.value,
        message: contactForm.projectsummary.value,
        from_email: contactForm.emailaddress.value,
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });

    return false;
}