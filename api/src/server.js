import app from './app';
import 'dotenv';

app.listen(process.env.PORT || 3333, function() {
	console.log("Servidor rodando ...");
});
