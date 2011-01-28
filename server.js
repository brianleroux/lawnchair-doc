var app = require('./config').app

app.get('/', function (req, res) {
    res.render('index.html.ejs', {locals:{current:'home'}})
})

app.get('/downloads', function (req, res) {
    res.render('downloads.html.ejs', {locals:{current:'downloads'}})
})

app.get('/adaptors', function (req, res) {
    res.render('adaptors.html.ejs', {locals:{current:'adaptors'}})
})

app.get('/tests', function (req, res) {
    res.render('tests.html.ejs', {locals:{current:'tests'}})
})

app.get('/license', function (req, res) {
    res.render('license.html.ejs', {locals:{current:'license'}})
})

app.get('/documentation/:doc?', function (req, res) {
    res.render('documentation/' + req.params.doc + '.html.ejs', {locals:{current:req.params.doc}})
})

app.listen(process.env.PORT || 4000)
