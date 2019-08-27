console.log("noget");

// INDLÆS EXPRESS MODUL
// indlæs express modulet, dette er vores serverprogram
const express = require('express');
// opret en express applikation 
const app = express();


// INDLÆS MORGAN MODUL
/* aktiver morgans serverside log  */
const logger = require('morgan');
app.use(logger('dev', {
   // hvis ALLE requests skal ses i loggen, udkommenter næste linje
   skip: req => (!req.url.endsWith(".html") && req.url.indexOf('.') > -1)
}));


// BODYPARSER
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

/* Nu er det muligt at modtage formular data på serversiden, og arbejde med det igennem req.body, lidt lige som req.params. */


// EJS
// sæt viewengine til ejs 
app.set('view engine', 'ejs');
// peg på den mappe hvor alle ejs filerne er placeret
app.set('views', './server/views');


// ROUTES
/* indlæs alle de routes serveren skal håndtere */
require('./server/routes/routes.js')(app);
require('./server/routes/contactform-routes.js')(app);



// PUBLIC MAPPEN
/* Forbind til Public Mappen, skal stå efter ROUTES */
app.use(express.static('public'));


// DATE-AND-TIME
/* Formatering fra engelsk til dansk */
// DER GÅR NOGET GALT NÅR JEG KØRER NPM START.
app.locals.dateAndTime = require('date-and-time');
app.locals.dateAndTime.locale('dk', {
   'A': ['AM', 'PM'],
   'dddd': ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
   'ddd': ['søn', 'man', 'tirs', 'ons', 'tors', 'fre', 'lør'],
   'dd': ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
   'MMM': ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
   'MMMM': ['januar', ' februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
});


// START SERVEREN
// start serveren på port 3000 
const port = 3000;

app.listen(port, (error) => {
   if (error) console.log(error);
   console.log('\x1b[35m%s\x1b[0m', '================================================================'); // udskriver en lilla streg i konsol
   console.log('Server is listening on port %s, address: %s', port, 'http://localhost:' + port);
});

