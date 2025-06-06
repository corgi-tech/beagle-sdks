// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'property_managers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/property-managers',
  operationId: 'listPropertyManagers',
};

export const tool: Tool = {
  name: 'list_property_managers',
  description: 'list all property managers, note this endpoint is paginated.',
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'number',
        description: 'Page number to fetch.',
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
  return asTextContentResult(await client.propertyManagers.list(body));
};

export default { metadata, tool, handler };
