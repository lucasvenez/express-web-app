const express = require('express');
const userRoutes = require('./src/routes/users')

const port = 3000;

// const databaseConfig = require('./config/database');
// mongoose.connect(databaseConfig.url, {useNewUrlParser: true})

app = express();

app.use('/user/', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

