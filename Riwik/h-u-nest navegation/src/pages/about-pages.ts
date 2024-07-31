// componente para el Header 
const header = document. createElement('header');
const h1About=document.createElement('h1');
h1About.textContent = 'About Us like development';
header.appendChild(h1About);

const nav = document.createElement('nav');
const aHome = document.createElement('a');
aHome.href = '../../index.html';
aHome.textContent = 'Home';

const aContact = document.createElement('a');
aContact.href = './contact.html';
aContact.textContent = 'Contact Us';

nav.append(aHome,aContact);
header.appendChild(nav);

// componente para el Main

const main =document.createElement('main');


/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container"></div>

    <script>
        // Crear el componente del header
        const header = document.createElement('header');

        const h1 = document.createElement('h1');
        h1.textContent = 'About us like development';
        header.appendChild(h1);

        const nav = document.createElement('nav');
        const homeLink = document.createElement('a');
        homeLink.href = '../../index.html';
        homeLink.textContent = 'Home';
        const contactLink = document.createElement('a');
        contactLink.href = './contact.html';
        contactLink.textContent = 'Contact Us';

        nav.appendChild(homeLink);
        nav.appendChild(contactLink);
        header.appendChild(nav);

        // Crear el componente del main
        const main = document.createElement('main');
        const section = document.createElement('section');
        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = 'About us';
        article.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus et nunc ultrices faucibus.
        Proin euismod lectus vel libero hendrerit, non mollis lectus consectetur. Donec vel est vel neque scelerisque
        dignissim. Nulla facilisi. Donec vel libero vel dolor ullamcorper scelerisque.`;
        article.appendChild(p);

        section.appendChild(article);
        main.appendChild(section);

        // Insertar el header y el main en el contenedor
        const container = document.getElementById('container');
        container.appendChild(header);
        container.appendChild(main);
    </script>
</body>
</html>


*/