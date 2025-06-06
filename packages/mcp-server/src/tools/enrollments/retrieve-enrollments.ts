// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'enrollments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/enrollments/{id}',
  operationId: 'getEnrollment',
};

export const tool: Tool = {
  name: 'retrieve_enrollments',
  description: 'get a specific enrollment by its id.',
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
  return asTextContentResult(await client.enrollments.retrieve(id));
};

export default { metadata, tool, handler };
