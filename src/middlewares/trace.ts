import { Request, Response, NextFunction } from "express";
import { v7 as uuidv7 } from "uuid";

export default function trace(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.method === "OPTIONS") {
    next();
    return;
  }

  const traceId = uuidv7();
  req["traceId"] = traceId;
  res.header("x-request-id", traceId);

  next();
}
