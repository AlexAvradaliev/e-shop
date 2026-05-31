import { ROLES }
from './roles';

export function hasPermission(
  user,
  permission
) {
  if (!user) return false;

  const permissions =
    ROLES[user.role] || [];

  return permissions.includes(
    permission
  );
}