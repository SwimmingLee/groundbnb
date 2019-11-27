var mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.config();
mongoose.connect(
  process.env.MONGO_URL, 
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
