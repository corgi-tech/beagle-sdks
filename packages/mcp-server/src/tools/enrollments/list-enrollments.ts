// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'beagle-mcp/filtering';
import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'enrollments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/enrollments',
  operationId: 'listEnrollments',
};

export const tool: Tool = {
  name: 'list_enrollments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist all enrollments, this endpoint is paginated and allows for queries by individual property manager.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    enrollments: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/enrollment'\n      }\n    },\n    pagination: {\n      $ref: '#/$defs/pagination'\n    }\n  },\n  required: [    'enrollments',\n    'pagination'\n  ],\n  $defs: {\n    enrollment: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'number'\n        },\n        effectiveDate: {\n          type: 'string',\n          description: 'the date the enrollment will begin, note enrollments cannot begin in the past'\n        },\n        plan: {\n          type: 'string',\n          description: 'the plan name/code'\n        },\n        propertyManagerId: {\n          type: 'number'\n        },\n        tenantId: {\n          type: 'number'\n        },\n        note: {\n          type: 'string',\n          description: 'an optional note field, this can be used for easily appending metadata to enrollments'\n        }\n      },\n      required: [        'id',\n        'effectiveDate',\n        'plan',\n        'propertyManagerId',\n        'tenantId'\n      ]\n    },\n    pagination: {\n      type: 'object',\n      properties: {\n        page: {\n          type: 'number',\n          description: 'Current page number.'\n        },\n        pages: {\n          type: 'number',\n          description: 'Total number of pages.'\n        },\n        records: {\n          type: 'number',\n          description: 'Total number of records.'\n        },\n        size: {\n          type: 'number',\n          description: 'Number of items per page.'\n        }\n      },\n      required: [        'page',\n        'pages',\n        'records',\n        'size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'number',
        description: 'Page number to fetch.',
      },
      propertyManagerId: {
        type: 'number',
      },
      size: {
        type: 'number',
        description: 'Number of items per page.',
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
  const response = await client.enrollments.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
