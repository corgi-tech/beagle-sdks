// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'enrollments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/enrollments/{id}',
  operationId: 'lapseEnrollment',
};

export const tool: Tool = {
  name: 'lapse_enrollments',
  description:
    'lapses a specific enrollment for a tenant, note that if a tenant has multiple enrollments (e.g., SDR and TLL), each must be lapsed individually',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Beagle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.enrollments.lapse(id);
};

export default { metadata, tool, handler };
