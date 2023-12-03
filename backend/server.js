const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const calendarItemsRouter = require('./routes/api/CalendarItems'); 

const app = express();
const port = process.env.PORT || 8082;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Connect to MongoDB
const conn_str = "mongodb+srv://bipi_user:B2021ipasha@cluster0.orbhgoa.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => {
    console.log(`MongoDB Connection Succeeded...`);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.log(`Error in DB Connection: ${err}`);
  });

// Root route
app.get('/', (req, res) => {
  res.send('Hello world!');
});
