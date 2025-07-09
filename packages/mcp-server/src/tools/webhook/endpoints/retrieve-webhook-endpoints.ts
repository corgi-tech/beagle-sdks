// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'webhook.endpoints',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/webhook/endpoints/{id}',
  operationId: 'getWebhookEndpoint',
};

export const tool: Tool = {
  name: 'retrieve_webhook_endpoints',
  description: 'retrieve a single webhook endpoint by its id.',
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
  return asTextContentResult(await client.webhook.endpoints.retrieve(id));
};

export default { metadata, tool, handler };
