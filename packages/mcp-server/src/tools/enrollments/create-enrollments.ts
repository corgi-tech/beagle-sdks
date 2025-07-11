// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'beagle-mcp/filtering';
import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from '@corgi-tech/beagle';

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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\ncreate a new enrollment for a tenant.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/enrollment',\n  $defs: {\n    enrollment: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'number'\n        },\n        effectiveDate: {\n          type: 'string',\n          description: 'the date the enrollment will begin, note enrollments cannot begin in the past'\n        },\n        plan: {\n          type: 'string',\n          description: 'the plan name/code'\n        },\n        propertyManagerId: {\n          type: 'number'\n        },\n        tenantId: {\n          type: 'number'\n        },\n        note: {\n          type: 'string',\n          description: 'an optional note field, this can be used for easily appending metadata to enrollments'\n        }\n      },\n      required: [        'id',\n        'effectiveDate',\n        'plan',\n        'propertyManagerId',\n        'tenantId'\n      ]\n    }\n  }\n}\n```",
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.enrollments.create(body)));
};

export default { metadata, tool, handler };
