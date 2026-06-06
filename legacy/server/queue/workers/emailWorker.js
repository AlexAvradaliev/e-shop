import { Worker }
from 'bullmq';

import { redis }
from '../redis';

new Worker(
  'emailQueue',
  async (job) => {
    console.log(
      'Sending email',
      job.data
    );

    // send email logic
  },
  {
    connection: redis,
  }
);