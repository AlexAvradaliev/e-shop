import { UnauthorizedError }
from '@/shared/errors/UnauthorizedError';

export function isAdmin(user) {
  if (
    !user ||
    user.role !== 'ADMIN'
  ) {
    throw new UnauthorizedError();
  }
}