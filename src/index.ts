import mongoose from "mongoose";
import app from "./app";
import { connect } from "./db";


connect();
const PORT = 3000;

app.listen(PORT);

console.log(`Backend listening on port ${PORT}`);