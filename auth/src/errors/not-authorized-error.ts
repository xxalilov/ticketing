import { CustomError } from "./custom-errors";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not authorizated");

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: "Not authorizated" }];
  }
}
