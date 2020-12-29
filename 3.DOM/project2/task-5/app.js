section.addEventListener('click', (e) => {
    if (e.target.tagName != "INPUT") return;
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
});