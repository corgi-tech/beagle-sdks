// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'beagle-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist all available plans, note this endpoint is currently unpaginated unlike all other list endpoints.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/plan'\n  },\n  $defs: {\n    plan: {\n      type: 'object',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        name: {\n          type: 'string',\n          description: 'the plans name/code, this is used when creating enrollments.'\n        },\n        rate: {\n          type: 'number',\n          description: 'the price of the plan'\n        },\n        contents: {\n          type: 'number',\n          description: 'value of contents replacement, note this is only on some TLL plans.'\n        },\n        liability: {\n          type: 'number',\n          description: 'value of liability waived, note this is only on TLL plans.'\n        },\n        value: {\n          type: 'number',\n          description: 'general value field, this is currently used for SDR and SDD plans for the replacement or discount value.'\n        }\n      },\n      required: [        'description',\n        'name',\n        'rate'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.plans.list()));
};

export default { metadata, tool, handler };
