import { AppError }
from './AppError';

export class ValidationError
extends AppError {
  constructor(message) {
    super(message, 400);

    this.name =
      'ValidationError';
  }
}