// Import necessary modules and set up express app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
require('./Connection/mongodbConnection')
const clientRoutesRegistration = require('./Router/registration')
const clientRoutes = require('./Router/client')
const consulantRoutes = require('./Router/consultant')
const feedbackRoutes = require('./Router/feedback')

const cors = require('cors');
app.use(cors());
app. use(express. json())
app.use(express.urlencoded({extended : false}))

app.use(clientRoutes)
app.use(clientRoutesRegistration)
app.use(consulantRoutes)
app.use(feedbackRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
