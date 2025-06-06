// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/plans/{code}',
  operationId: 'getPlan',
};

export const tool: Tool = {
  name: 'retrieve_plans',
  description: 'retrieve a specific plans details by its code.',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const { code, ...body } = args as any;
  return asTextContentResult(await client.plans.retrieve(code));
};

export default { metadata, tool, handler };
