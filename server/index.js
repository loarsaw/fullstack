import express from "express";
import userRoute from "./routes/users.js"
const app = express()

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
