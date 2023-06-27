const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry
                .target
                .classList
                .add('animate__animated');
            entry
                .target
                .classList
                .add('animate__backInDown');
        }
    });
});
const hiddenElements = document.querySelectorAll('.animation-hidden');
hiddenElements.forEach((el) => observer.observe(el));