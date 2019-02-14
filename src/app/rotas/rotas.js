const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1>Casa do Código</h1>
                    </body>
                </html>
            `
        );
    });
    
    app.get('/livros', (req, res) => {
        new LivroDao(db).lista()
            .then(livros => res.marko(require('../views/livros/lista/lista.marko'),{livros}))
            .catch(erro => console.log(erro));
    });
}

