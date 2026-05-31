import { UnauthorizedError }
from '@/shared/errors/UnauthorizedError';

export function isAuthenticated(
  user
) {
  if (!user) {
    throw new UnauthorizedError();
  }
}