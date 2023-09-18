const articles = document.querySelectorAll('article');

for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    article.addEventListener('mousemove', e => {
        console.log(1);
        const containerRect = article.getBoundingClientRect();
        const hoverButton = article.querySelector('._card-hover-btn');

        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;

        const buttonHeight = hoverButton.offsetHeight;

        hoverButton.style.left = (mouseX - buttonHeight / 2) + "px";
        hoverButton.style.top = mouseY + "px";

        hoverButton.style.transition = "transform ease-out 0.3s";
    });

}
