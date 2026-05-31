import { prisma }
from '@/server/db/prisma';

export class AuditService {
  static async log({
    action,
    userId,
    entity,
    entityId,
    metadata,
  }) {
    return await prisma.auditLog.create({
      data: {
        action,
        userId,
        entity,
        entityId,
        metadata,
      },
    });
  }
}