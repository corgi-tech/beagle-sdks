// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'tenants',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/tenants/{id}',
  operationId: 'deleteTenant',
};

export const tool: Tool = {
  name: 'delete_tenants',
  description: 'delete an existing tenant by their id.',
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
  return client.tenants.delete(id);
};

export default { metadata, tool, handler };
