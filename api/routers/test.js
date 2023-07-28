export default (Router) => {

    Router.post('/test', function (req, res) {

    })

    Router.get('/test', function (req, res) {
        return res.json({ error: 'No files were uploaded.' });
    })

}