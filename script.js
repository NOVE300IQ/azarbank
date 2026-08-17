function openInviteModal() {
    const modal = document.getElementById("inviteModal");

    if (!modal) {
        return;
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


function closeInviteModal() {
    const modal = document.getElementById("inviteModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");
    document.body.style.overflow = "";

    const form = document.getElementById("inviteForm");
    const formContainer = document.getElementById("inviteFormContainer");
    const success = document.getElementById("inviteSuccess");

    if (form) {
        form.reset();
    }

    if (formContainer) {
        formContainer.style.display = "block";
    }

    if (success) {
        success.classList.remove("active");
    }
}


const inviteForm = document.getElementById("inviteForm");

if (inviteForm) {

    inviteForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("inviteName").value.trim();
        const email = document.getElementById("inviteEmail").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in all the fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        document.getElementById("inviteFormContainer").style.display = "none";
        document.getElementById("inviteSuccess").classList.add("active");

    });
}


const inviteModal = document.getElementById("inviteModal");

if (inviteModal) {

    inviteModal.addEventListener("click", function(event) {

        if (event.target === inviteModal) {
            closeInviteModal();
        }

    });

}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeInviteModal();
    }

});


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(
            "Thanks, " +
            name +
            "! Your message has been sent."
        );

        contactForm.reset();

    });

}


const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const job = button.dataset.job;

        alert(
            "Thanks for your interest in the " +
            job +
            " position!"
        );

    });

});