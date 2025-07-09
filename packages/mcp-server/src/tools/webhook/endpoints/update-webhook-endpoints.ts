// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'webhook.endpoints',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/webhook/endpoints/{id}',
  operationId: 'updateWebhookEndpoint',
};

export const tool: Tool = {
  name: 'update_webhook_endpoints',
  description: 'update an existing webhook endpoint by its id.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
      },
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.webhook.endpoints.update(id, body));
};

export default { metadata, tool, handler };
