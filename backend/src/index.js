import app from "./app.js";
import { connectionToDatabase } from "./db/connection.js";
// connections and listeners
const PORT = process.env.PORT || 5000;
connectionToDatabase().then(() => {
    app.listen(PORT, () => console.log("Server is running and connected to Database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map