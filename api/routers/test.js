import { Api } from '../mongo.js';

export default (Router) => {

    Router.post('/test', function (req, res) {

    })

    Router.get('/test', async function (req, res) {
        let tmp = await Api.getUsers({})
        console.log("gfgg=", tmp)
        return res.json( tmp );
    })

}
