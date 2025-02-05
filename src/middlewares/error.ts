import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error("Error:", {
    message: err.message,
    traceId: req["traceId"],
    path: req.path,
  });

  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal server error",
      traceId: req["traceId"],
    },
  });
}
