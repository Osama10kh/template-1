let icons = ["fa fa-magic", "fa fa-coffee", "fab fa-amazon", "fa fa-diamond", "fa fa-user", "fa fa-phone"];

function creatEle() {
    for (let i = 0; i < icons.length; i++) {
        document.write(`
        <div class = "feature-cont">
        <h3>feature</h3>
        <i class="${icons[i]}"></i>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        `)
    }
    return "";
};
