// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'property_managers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/property-managers/{id}',
  operationId: 'deletePropertyManager',
};

export const tool: Tool = {
  name: 'delete_property_managers',
  description: 'delete a property manager by id.',
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
  await client.propertyManagers.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
