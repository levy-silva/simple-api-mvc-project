require("dotenv/config");
const app = require("./src/app");

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));