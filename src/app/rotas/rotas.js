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

    app.get('/livros/form', (req, res) => {
        res.marko(require('../views/livros/form/form.marko'));
    });

    app.post('/livros', (req,res) => {
        console.log(req.body);
        new LivroDao(db).adiciona(req.body)
            .then(res.redirect('/livros'))
            .catch(erro => console.log(erro));
    })
}

