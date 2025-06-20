// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'webhook.endpoints',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/webhook/endpoints',
  operationId: 'createWebhookEndpoint',
};

export const tool: Tool = {
  name: 'create_webhook_endpoints',
  description: 'creates a new webhook target.',
  inputSchema: {
    type: 'object',
    properties: {
      secret: {
        type: 'string',
      },
      url: {
        type: 'string',
      },
      active: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.webhook.endpoints.create(body));
};

export default { metadata, tool, handler };
