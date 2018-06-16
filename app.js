var http = require ('http');
var serveStatic = require ('serve-static');
var path = require ('path');
var app = require ('express') ();
var bodyParser = require ('body-parser');
var SudokuSolver = require ('sudoku-solver-js');
var solver = new SudokuSolver ();


app.use (bodyParser.json ());
app.use (serveStatic (path.resolve (__dirname, 'public')));
var puzzle = '001700509573024106800501002700295018009400305652800007465080071000159004908007053';

app.post ('/solve', function (req, res) {
  res.send (solver.solve(req.body.Data, { result: 'array' }));
});

var httpServer = http.createServer ();
httpServer.on ('request', app);

httpServer.listen (process.env.PORT  || 8000);
