// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@corgi-tech/beagle-mcp/filtering';
import { Metadata, asTextContentResult } from '@corgi-tech/beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nretrieve a single webhook endpoint by its id.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/endpoint_retrieve_response',\n  $defs: {\n    endpoint_retrieve_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'number'\n        },\n        active: {\n          type: 'boolean'\n        },\n        companyId: {\n          type: 'number'\n        },\n        createdAt: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'string'\n        },\n        url: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'active',\n        'companyId',\n        'createdAt',\n        'updatedAt',\n        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.webhook.endpoints.retrieve(id)));
};

export default { metadata, tool, handler };
