import { logger }
from '@/shared/lib/logger';

export function handleError(
  error
) {
  logger.error(error);

  return {
    error:
      error.message ||
      'Something went wrong',
  };
}