// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'beagle-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nupdate an existing webhook endpoint by its id.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'number'\n    },\n    active: {\n      type: 'boolean'\n    },\n    companyId: {\n      type: 'number'\n    },\n    createdAt: {\n      type: 'string'\n    },\n    updatedAt: {\n      type: 'string'\n    },\n    url: {\n      type: 'string'\n    }\n  },\n  required: [    'id',\n    'active',\n    'companyId',\n    'createdAt',\n    'updatedAt',\n    'url'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.webhook.endpoints.update(id, body)));
};

export default { metadata, tool, handler };
