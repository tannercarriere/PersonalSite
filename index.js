const { readFile, readFileSync } = require('fs');
express = require('express');

const app = express();

app.get('/', (request, response) => {
    readFile('./index.html', 'utf-8', (err, html) => {
       if(err){
            response.status(500).send('Soz, brok');
            console.log(err);
       }

       response.send(html);
    })
})

app.listen(process.env.PORT || 3000, ()=> console.log(`App at http://localhost:3000`));