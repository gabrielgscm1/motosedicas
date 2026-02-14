document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.fade-in');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(function (el) { observer.observe(el); });
});
