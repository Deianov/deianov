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
const contentCertificates = `
<object data="/assets/certificates_web.pdf?#pagemode=bookmarks&zoom=85" type="application/pdf">
    <p>You don't have a PDF plugin, but you can <a href="/assets/certificates_web.pdf">download the PDF file.</a></p>
</object>`;
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
links[0].addEventListener("click", () => {
	content.innerHTML = contentHome;
});
links[1].addEventListener("click", () => {
	content.innerHTML = contentProjects;
});
links[2].addEventListener("click", () => {
	content.innerHTML = contentCertificates;
});
