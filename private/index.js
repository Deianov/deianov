const getId = (id) => document.getElementById(id);
const numbers1 = [0, 0, 0, 0, "", 18.24, 1.9, 13.68, 7.07, 2.48, 7.85, 4.1, 8.61];
const numbers2 = [0, 0, 7.0, 3.29, 9.63, 6.73];
const titles = toUTF8("0LDQv9Cw0YDRgtCw0LzQtdC90YI7CtGC0LDQstCw0L07CtC60LDRgNGC0LA7CtGD0LsuINCb0Y7QsdC10L0g0JrQsNGA0LDQstC10LvQvtCyIOKEliA1LdCwLCDQtdGCLiA2LCDQsNC/LiAyMTs=").split(";");
const labels = toUTF8(
	"NzcuMzkg0LrQsi7QvCAtINCX0LDRgdGC0YDQvtC10L3QsCDQv9C70L7RiSAo0JfQnyk7NjcuNTUg0LrQsi7QvCAtINC/0L4g0J3QkCwg0LfQsNC10LTQvdC+INGBIDQuNzElINC40LQu0YcuINC+0YIg0YHQs9GA0LDQtNCw0YLQsCDQuCDQvNGP0YHRgtC+0YLQvjs2My45MyDQutCyLtC8IC0g0L/Qu9C+0YnQuDt+My4wMCDQutCyLtC8IC0g0YHQutC70LDQtNC+0LLQviDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0L4gSD02MCDRgdC8OzvQtNC90LXQstC90LA70YHRgtGK0LvQsdC4O9GB0L/QsNC70L3RjzvRgtC10YDQsNGB0LA70LHQsNC70LrQvtC9O9C60YPRhdC90Y870LHQsNC90Y87OzI2LjY1INC60LIu0LwgLSDRh9C40YHRgtCwINC/0LvQvtGJO9Cy0LjRgdC+0YfQuNC90LA6IDEwMy0xODUg0YHQvC470YHQutC70LDQtDvRgdC60LvQsNC0O9GB0L/QsNC70L3Rjzs="
).split(";");
const content = getId("content");

const contentHome = content.innerHTML;
const contentMap = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d475.40591488256587!2d23.33192707340583!3d42.68880330760123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x40aa850acef85ebb%3A0xdab6fde59c607aa8!2sul.%20%22Lyuben%20Karavelov%22%205a%2C%20Sofia%2C%20Bulgarien!3m2!1d42.6888104!2d23.332054!4m0!5e0!3m2!1sde!2sde!4v1693424904297!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br><style>.mapouter{position:relative;text-align:right;height:600px;width:800px;}</style><a href="https://www.embedgooglemap.net">embed google</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:600px;width:800px;}</style></div></div>`;
const contents = [contentHome, contentHome, contentMap];

/* menu */
const links = document.getElementsByClassName("menu")[0].getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
	const a = links[i];
	// a.textContent = titles[i];
	a.addEventListener("click", function () {
		content.innerHTML = contents[i];
		updateDom(i);
	});
}

function updateDom(index) {
	if (index === 2) {
		return;
	}
	/* set title */
	content.getElementsByClassName("title")[0].innerHTML = `<span>${titles[3]}</span>`;
	/* set level */
	getId("level1").classList.toggle("none", index == !0);
	getId("level2").classList.toggle("none", index == !1);
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
		buttons[i].addEventListener("click", function () {
			setLayer(layers[i]);
		});
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

function toUTF8(base64String) {
	const binaryString = atob(base64String);
	const uint8Array = new Uint8Array(binaryString.length);

	for (let i = 0; i < binaryString.length; i++) {
		uint8Array[i] = binaryString.charCodeAt(i);
	}
	const utf8Decoded = new TextDecoder().decode(uint8Array);
	return utf8Decoded;
}

updateDom(0);
