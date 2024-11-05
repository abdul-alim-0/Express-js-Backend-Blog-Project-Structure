const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json()); // Middleware to parse JSON requests
app.use('/api', blogRoutes); // Prefix all routes with /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
