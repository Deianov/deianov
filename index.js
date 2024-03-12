const content = document.getElementsByClassName("content")[0];
const contentHome = content.innerHTML;
const contentProjects = `<main aria-role="main">
<h2>List of my projects</h2>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Source code</th>
            <th>Url</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>learning-style</td>
            <td><a href="https://github.com/deianov/learning-style" target="_blank">github</a></td>
            <td><a href="https://learning-style.com" target="_blank">learning-style.com</a></td>
        </tr>
        <tr>
            <td>private</td>
            <td><a href="https://github.com/Deianov/deianov/tree/main/private" target="_blank">github</a></td>
            <td><a href="https://deianov.com/private">deianov.com/private</a></td>
        </tr>
        <tr>
            <td>learning-style-ts</td>
            <td><a href="https://github.com/deianov/learning-style-ts" target="_blank">github</a></td>
    </tr>
    </tbody>
</table>
</main>`;
const contentCertificatesList = `
<object data="/assets/certificates_list.pdf?zoom=85" type="application/pdf">
    <p>You don't have a PDF plugin, but you can <a href="/assets/certificates_list.pdf">download the PDF file.</a></p>
</object>`;
const contentCertificates = `
<object data="/assets/certificates.pdf?#pagemode=bookmarks&zoom=85" type="application/pdf">
    <p>You don't have a PDF plugin, but you can <a href="/assets/certificates.pdf">download the PDF file.</a></p>
</object>`;

const linksMenu = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
const linksMenuBottom = document.getElementsByClassName("menu_bottom")[0].getElementsByTagName("a");
const elementMenuBottom = document.getElementsByClassName("menu_bottom")[0];

const menu_bottom = {
    show: (flag) => elementMenuBottom.classList.toggle('hidden', !flag),
    active: (flag) => {
        linksMenuBottom[0].classList.toggle('active', flag);
        linksMenuBottom[1].classList.toggle('active', !flag);
    }
}

linksMenu[0].addEventListener("click", () => {
    menu_bottom.show(false);
	content.innerHTML = contentHome;
});
linksMenu[1].addEventListener("click", () => {
    menu_bottom.show(false);
	content.innerHTML = contentProjects;
});
linksMenu[2].addEventListener("click", () => {
    menu_bottom.show(true);
    menu_bottom.active(true);
	content.innerHTML = contentCertificatesList;
});
linksMenuBottom[0].addEventListener("click", () => {
    menu_bottom.active(true);
	content.innerHTML = contentCertificatesList;
});
linksMenuBottom[1].addEventListener("click", () => {
    menu_bottom.active(false);
	content.innerHTML = contentCertificates;
});
