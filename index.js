const content = document.getElementsByClassName("content")[0];
const contentHome = content.innerHTML;
const contentProjects = `<main aria-role="main">
<h2>List of my projects</h2>
<table >
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Source code</th>
            <th>Url</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <td>learning-style</td>
            <td><a href="https://github.com/deianov/learning-style" target="_blank">github</a></td>
            <td><a href="https://learning-style.com" target="_blank">learning-style.com</a></td>
        </tr>
        <tr>
        <th>2</th>
        <td>private</td>
        <td></td>
        <td><a href="https://deianov.com/private">deianov.com/private</a></td>
    </tr>
    </tbody>
</table>
</main>`;
const links = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
links[0].addEventListener("click", () => {content.innerHTML = contentHome});
links[1].addEventListener("click", () => {content.innerHTML = contentProjects});