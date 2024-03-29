var Brand = require('./brand');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   next();
})

router.route('/brand').get((request,response)=>{
    dboperations.getBrands().then(result => {        
        if(result !== undefined){
            response.json(result);
        } else {
            return [];
        }
    })

})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);