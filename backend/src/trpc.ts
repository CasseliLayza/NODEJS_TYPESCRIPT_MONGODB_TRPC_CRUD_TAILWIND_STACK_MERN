import { initTRPC } from "@trpc/server";
import * as trpExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req,
  res,
}: trpExpress.CreateExpressContextOptions) => ({});

const t = initTRPC.context().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
