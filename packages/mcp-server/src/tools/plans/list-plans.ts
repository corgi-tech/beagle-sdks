// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/plans',
  operationId: 'listPlans',
};

export const tool: Tool = {
  name: 'list_plans',
  description:
    'list all available plans, note this endpoint is currently unpaginated unlike all other list endpoints.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.plans.list());
};

export default { metadata, tool, handler };
