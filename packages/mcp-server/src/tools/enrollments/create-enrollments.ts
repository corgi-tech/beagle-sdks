// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'enrollments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/enrollments',
  operationId: 'createEnrollment',
};

export const tool: Tool = {
  name: 'create_enrollments',
  description: 'create a new enrollment for a tenant.',
  inputSchema: {
    type: 'object',
    properties: {
      effectiveDate: {
        type: 'string',
        description: 'the date the enrollment will begin, note enrollments cannot begin in the past',
      },
      plan: {
        type: 'string',
        description: 'the plan name/code',
      },
      propertyManagerId: {
        type: 'number',
      },
      tenantId: {
        type: 'number',
      },
      note: {
        type: 'string',
        description: 'an optional note field, this can be used for easily appending metadata to enrollments',
      },
    },
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.enrollments.create(body));
};

export default { metadata, tool, handler };
