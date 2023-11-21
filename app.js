const express = require('express');

const port = 3000;

// const databaseConfig = require('./config/database');
// mongoose.connect(databaseConfig.url, {useNewUrlParser: true})

const app = express();
const userRoutes = require('./src/routes/users');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user/', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

