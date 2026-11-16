const express = require('express');
const app = express();
const path = require("node:path");
const PORT = 8080;
const hbs = require("hbs");

// Configuration de Handlebars pour Express
app.set("view engine", "hbs"); // On définit le moteur de template qu'Express va utiliser
app.set("views", path.join(__dirname, "views")); // On définit le dossier des vues (dans lequel se trouvent les fichiers ".hbs")
app.use(express.static(path.join(__dirname, "public"))); // On définit le dossier des ressources (css, images, polices...)
hbs.registerPartials(path.join(__dirname, "views", "partials")); // On définit le dossier des partials (composants e.g. header, footer, menu...)

app.get('/', (req, res) => {
    res.render('index', {
        css: "/css/index.css"
    });
});

//PROJETS
app.get('/projets', (req, res) => {
    res.render('projets/projets', {
        css: "/css/projets.css"
    })
})

    app.get('/projets/1', (req, res) => {//Baaz, the Erudite Raptor
        res.render('projets/projet1', {
            css: "/css/projet.css",
            css2: "/css/slideshow.css"
        });
    });

    app.get('/projets/2', (req, res) => {//Plateforme de gestion de soutenances
        res.render('projets/projet2', {
            css: "/css/projet.css",
            css2: "/css/slideshow.css"
        });
    });

    app.get('/projets/3', (req, res) => {//Ptut
        res.render('projets/projet3', {
            css: "/css/projet.css",
            css2: "/css/slideshow.css"
        });
    });

    app.get('/projets/4', (req, res) => {// VRééducatio
        res.render('projets/projet4', {
            css: "/css/projet.css",
            css2: "/css/slideshow.css"
        });
    });

/////////////////////////////////////////

app.get('/propos', (req, res) => {
    res.render('autre/propos', {
        css: "/css/propos.css"
    })
});

app.get('/cv', (req, res) => {
    res.render('autre/cv', {
        css: "/css/cv.css"
    })
});

app.get('/contact', (req, res) => {
    res.render('autre/contact', {
        css: "/css/contact.css"
    });
});

//EXPERIENCES
app.get('/experiences', (req, res) => {
    res.render('experiences/experiences', {
        css: "/css/projets.css"
    })
})

    app.get('/experiences/1', (req, res) => {
        res.render('experiences/experience1', {
            css: "/css/experience.css"
        })
    })

    app.get('/experiences/2', (req, res) => {
        res.render('experiences/experience2', {
            css: "/css/experience.css"
        })
    })

    app.get('/experiences/3', (req, res) => {
        res.render('experiences/experience3', {
            css: "/css/experience.css"
        })
    })

////////////////////////////////////////

app.get('/terms', (req, res) => {
    res.render('autre/terms', {
        css: "/css/terms.css"
    })
})

//TODO - 404

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
