// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'tenants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/tenants',
  operationId: 'listTenants',
};

export const tool: Tool = {
  name: 'list_tenants',
  description:
    'list all tenants, this endpoint is paginated and allows for queries by individual property manager.',
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'number',
        description: 'Page number to fetch.',
      },
      propertyManagerId: {
        type: 'number',
      },
      size: {
        type: 'number',
        description: 'Number of items per page.',
      },
    },
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tenants.list(body));
};

export default { metadata, tool, handler };
