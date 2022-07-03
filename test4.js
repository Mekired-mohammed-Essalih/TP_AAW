var ficheInfo=[
{
id:1,
nom:"Benali",
prenom:"Mohamed"
},
{
id:2,
nom:"Bendali",
prenom:"Ahmed"
},
{
id:3,
nom:"Boudali",
prenom:"Amir"
}
]
var express = require('express');
var parser = require('body-parser');
var app = express();
app.use(parser.urlencoded({ extended: true }));

app.get('/person/:id', function(req, res) {
for (var i=0;i<ficheInfo.length;i++) {
if (ficheInfo[i].id==req.params.id){
res.json(ficheInfo[i]);
}
}
res.send();
});
app.listen(8000);