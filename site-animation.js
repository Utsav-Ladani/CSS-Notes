const container = document.querySelector('.content__grid');
const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('animate', entry.isIntersecting);

        if(entry.isIntersecting) {
            observer.unobserve(entry.target);
        }
    });
}, {
    // threshold: .1
    // rootMargin: "100px",
    // root: container
});

boxes.forEach(box => {
    observer.observe(box);
});


const text = document.querySelector('.animated-text');

const animateText = (element, text) => {
    let len = 1;
    let isRTL = true;
    const animate = () => {
        len += 2*isRTL - 1;

        if(len > text.length) {
            len--;
            isRTL = !isRTL;
        }
        else if(len < 0) {
            len++;
            isRTL = !isRTL;
        }

        element.innerText = text.slice(0, len);

        setTimeout(animate, 100);
    }

    animate();
}

animateText(text, "Hello World!\n This is a text animation and you are in a matrix.");
