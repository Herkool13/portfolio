let links = document.querySelectorAll('.link');
let section = document.querySelectorAll('section')

function activeLink() {
    links.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
links.forEach((item) =>
    item.addEventListener('click', activeLink));

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        console.log(id);
        if (top >= offset && top < offset + height) {
            links.forEach((item) => {
                item.classList.remove('active');
                if (item.getAttribute('href') == '#' + id) {
                    item.classList.add('active');
                }
            });
        }
    })
};