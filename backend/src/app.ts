import express from "express";
import morgan, { format } from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";
import { router, createContext } from "./trpc";
import { nodeRouters } from "./routes/notes";
import cors from "cors";

const app = express();

const appRouter = router({
  node: nodeRouters,
});

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export type AppRouter = typeof appRouter;

export default app;
