const express = require('express');
const app = express();
const axios = require('axios');
const ejs = require('ejs');

const PORT = process.env.PORT || 3000;
// Views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// body parser
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
    axios.get('https://queue-times.com/en-US/parks/66/queue_times.json')
        .then(response => {
            const { data } = response;
            const { rides } = data;
            res.render('home', { rides })
        })
        .catch(e => {
            res.render('failure', { e });

        })

})









// Listen
app.listen(PORT, () => {
    console.log(`LISTENING ON ${PORT}`)
})
