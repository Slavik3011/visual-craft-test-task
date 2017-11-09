const express = require('express');

const app = express();

app.get('/api', (req, res) => {
	console.log('oks')
})

app.listen(3000, () => console.log('Server started'));