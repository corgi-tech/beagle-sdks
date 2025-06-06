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
  httpPath: '/api/property-managers/{id}',
  operationId: 'getPropertyManager',
};

export const tool: Tool = {
  name: 'retrieve_property_managers',
  description: 'get a property manager by id.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
      },
    },
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.propertyManagers.retrieve(id));
};

export default { metadata, tool, handler };
