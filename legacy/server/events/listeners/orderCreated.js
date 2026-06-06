import { emitter }
from '@/server/events/emitter';

import { EVENTS }
from '@/server/events/events';

emitter.on(
  EVENTS.ORDER_CREATED,
  async (order) => {
    console.log(
      'Processing order',
      order.id
    );

    // send email

    // update inventory

    // analytics

    // cache invalidation
  }
);