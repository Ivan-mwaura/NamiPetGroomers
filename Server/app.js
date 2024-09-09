const express = require('express'); 
const path = require('path'); 
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

app.use(cors());    
app.use(express.json());
app.use(bodyParser.json());

const MainRoutes = require('./Routes/MainRoutes');
const paymentRoutes = require('./Routes/PaymentRoutes');
const productsRoutes = require('./Routes/ProductsRoutes');
const connectDB = require('./db/connect');
const populateDB = require('./PopulationData/populateDB');

app.use('/api/v1', MainRoutes);
app.use('/api/v1', productsRoutes);
app.use('/api/v1', paymentRoutes);

app.get('/api/v1/populate-database', async (req, res) => {
    try {
        await populateDB();
        res.status(200).send('Database populated successfully');
    } catch (error) {
        res.status(500).send('Error populating database');
    }
});

// Serve the Client build folder
app.use('/', express.static(path.join(__dirname, '../Client/dist')));

// Serve the Admin build folder with the correct MIME type for JS files
app.use('/admin', express.static(path.join(__dirname, '../admin/dist'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
            console.log(`Serving JavaScript file: ${path}`);
        }
    }
}));


// All other requests should return the Client or Admin index.html file
app.get('/admin/*', (req, res) => {
    console.log('Serving Admin index.html');
    res.sendFile(path.join(__dirname, '../admin/dist/', 'index.html'));
});

app.get('*', (req, res) => {
    console.log('Serving Client index.html');
    res.sendFile(path.join(__dirname, '../Client/dist', 'index.html'));
});

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connection to Database successful")
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
