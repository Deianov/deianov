const decode = (s) => decodeURIComponent(escape(window.atob(s)));
const getId = (id) => document.getElementById(id);
const numbers1 = [0,0,0,0, "", 18.24, 1.90, 13.68, 7.07, 2.48, 7.85, 4.10, 8.61];
const numbers2 = [0,0, 7.00, 3.29, 9.63, 6.73];
const titles = decode("0LDQv9Cw0YDRgtCw0LzQtdC90YI7CtGC0LDQstCw0L07CtC60LDRgNGC0LA7CtGD0LsuINCb0Y7QsdC10L0g0JrQsNGA0LDQstC10LvQvtCyIOKEliA1LdCwLCDQtdGCLiA2LCDQsNC/LiAyMTs=").split(";");
const labels = decode("NzcuMzkg0LrQsi7QvCAtINCX0LDRgdGC0YDQvtC10L3QsCDQv9C70L7RiSAo0JfQnyk7NjcuNTUg0LrQsi7QvCAtINC/0L4g0J3QkCwg0LfQsNC10LTQvdC+INGBIDQuNzElINC40LQu0YcuINC+0YIg0YHQs9GA0LDQtNCw0YLQsCDQuCDQvNGP0YHRgtC+0YLQvjs2My45MyDQutCyLtC8IC0g0L/Qu9C+0YnQuDt+My4wMCDQutCyLtC8IC0g0YHQutC70LDQtNC+0LLQviDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0L4gSD02MCDRgdC8OzvQtNC90LXQstC90LA70YHRgtGK0LvQsdC4O9GB0L/QsNC70L3RjzvRgtC10YDQsNGB0LA70LHQsNC70LrQvtC9O9C60YPRhdC90Y870LHQsNC90Y87OzI2LjY1INC60LIu0LwgLSDRh9C40YHRgtCwINC/0LvQvtGJO9Cy0LjRgdC+0YfQuNC90LA6IDEwMy0xODUg0YHQvC470YHQutC70LDQtDvRgdC60LvQsNC0O9GB0L/QsNC70L3Rjzs=").split(";");
const content = getId("content");

const contentHome = content.innerHTML;
const contentMap = `<div class="mapouter"><div class="gmap_canvas"><iframe width="800" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=%D0%9B%D1%8E%D0%B1%D0%B5%D0%BD%20%D0%9A%D0%B0%D1%80%D0%B0%D0%B2%D0%B5%D0%BB%D0%BE%D0%B2%205%D0%B0,%20%D0%A1%D0%BE%D1%84%D0%B8%D1%8F&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br><style>.mapouter{position:relative;text-align:right;height:600px;width:800px;}</style><a href="https://www.embedgooglemap.net">embed google</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:600px;width:800px;}</style></div></div>`;
const contents = [contentHome, contentHome, contentMap];

/* menu */
const links = document.getElementsByClassName("menu")[0].getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    const a = links[i];
    // a.textContent = titles[i];
    a.addEventListener("click", function() {
        content.innerHTML = contents[i];
        updateDom(i);
    })
};

function updateDom(index) {
    if(index === 2) {
        return;
    }
    /* set title */
    content.getElementsByClassName("title")[0].innerHTML = `<span>${titles[3]}</span>`;
    /* set level */ 
    getId("level1").classList.toggle("none", index ==! 0);
    getId("level2").classList.toggle("none", index ==! 1);
    /* add events */
    addButtons();
    /* hide inactive layers */
    setLayer(layers[currentLayer]);
}

/* toggle layers */

let currentLayer = 0;
const layers = ["white", "zp", "gr"];

function addButtons() {
    const buttons = document.getElementsByClassName("buttons")[0].children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            setLayer(layers[i]);
        })
    }
}

function setButton(name) {
    const buttons = document.getElementsByClassName("buttons")[0].children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("active", buttons[i].classList.contains(name));
    }    
}

function setLayer(name) {
    currentLayer = layers.indexOf(name);
    const gs = document.getElementsByClassName("toggle");
    for (let c = 0; c < gs.length; c++) {
        const g = gs[c];
        const elements = g.children;

        for (let i = 0; i < elements.length; i++) {
            const e = elements[i];
            e.classList.toggle("none", !e.classList.contains(name));
            
        }
    }
    label(content.getElementsByTagName("text"), 0, labels);
    // show areas
    if (currentLayer === 2) {
        label(getId("level1").getElementsByTagName("text"), 4, numbers1);
        label(getId("level2").getElementsByTagName("text"), 2, numbers2);
    }
    setButton(name);
}

function label(points, fromIndex, text) {
    for (let i = fromIndex; i < points.length && i < text.length; i++) {
        const v = text[i];
        points[i].textContent = isNaN(v) || v === "" ? v : Number(v).toFixed(2);
    }
}

updateDom(0);