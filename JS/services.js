let fIcons = ["fa fa-magic", "fa fa-coffee", "fab fa-amazon", "fa fa-diamond"];

function creatSrvsS() {
    for (let i = 0; i < fIcons.length; i++) {
        document.write(`
        <div class = "srvs-cont">
        <h3>services</h3>
        <i class="${fIcons[i]}"></i>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        `)
    }
    return "";
};

document.write(`<div class="srvs-sec">`);
document.write(`${creatSrvsS()}`);
document.write(`</div>`);