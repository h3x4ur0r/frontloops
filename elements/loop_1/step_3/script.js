const checkboxes = document.querySelectorAll("input");

const makeGreen = (element) => {
    const reqLabel = element.parentElement;
    reqLabel.classList.toggle('checked');
}

const randomToggle = (element) => {
    const otherChecks = [...checkboxes].filter(c => {
        return(c !== element && Math.random() < 0.5);
    })

    otherChecks.map(c => {
        c.checked = !c.checked;
        makeGreen(c);
    })
}

[...checkboxes].map(c => {
    c.addEventListener('change', () => {
        makeGreen(c);
        randomToggle(c);
    })
})