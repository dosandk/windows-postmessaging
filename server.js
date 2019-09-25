const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('./static'));
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan('dev'));

app.listen(PORT, error => {
    if (error) {
        console.error(`Error: ${error}`);
    }

    console.log(`Server listening on port ${PORT}`);
});
