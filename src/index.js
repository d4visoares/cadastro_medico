const express = require('express');
const cors = require('cors');

const medicoRoutes = require('./routes/medicoRoutes');
const EspecialidadeRoutes = require('./routes/especialidadeRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use(medicoRoutes);
app.use(EspecialidadeRoutes);

app.listen(3333);