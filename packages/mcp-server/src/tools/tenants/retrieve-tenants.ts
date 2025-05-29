// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'tenants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/tenants/{id}',
  operationId: 'getTenant',
};

export const tool: Tool = {
  name: 'retrieve_tenants',
  description: 'retrieve a single tenant by their id.',
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
  return client.tenants.retrieve(id);
};

export default { metadata, tool, handler };
