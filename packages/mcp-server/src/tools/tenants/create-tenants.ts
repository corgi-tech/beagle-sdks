// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'beagle-mcp/filtering';
import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'tenants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/tenants',
  operationId: 'createTenant',
};

export const tool: Tool = {
  name: 'create_tenants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\ncreate a new tenant.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/tenant',\n  $defs: {\n    tenant: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'number'\n        },\n        address: {\n          $ref: '#/$defs/address'\n        },\n        contact: {\n          $ref: '#/$defs/contact'\n        }\n      },\n      required: [        'id',\n        'address',\n        'contact'\n      ]\n    },\n    address: {\n      type: 'object',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        state: {\n          type: 'string',\n          description: 'two letter state code, ie CA'\n        },\n        street1: {\n          type: 'string'\n        },\n        zip: {\n          type: 'string',\n          description: '5 digit US zip code, ie 94104'\n        },\n        street2: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'state',\n        'street1',\n        'zip'\n      ]\n    },\n    contact: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        name: {\n          type: 'object',\n          properties: {\n            first: {\n              type: 'string'\n            },\n            last: {\n              type: 'string'\n            }\n          },\n          required: [            'first',\n            'last'\n          ]\n        },\n        phone: {\n          type: 'string'\n        }\n      },\n      required: [        'email',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        $ref: '#/$defs/address',
      },
      contact: {
        $ref: '#/$defs/contact',
      },
      propertyManagerId: {
        type: 'number',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      address: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
          },
          state: {
            type: 'string',
            description: 'two letter state code, ie CA',
          },
          street1: {
            type: 'string',
          },
          zip: {
            type: 'string',
            description: '5 digit US zip code, ie 94104',
          },
          street2: {
            type: 'string',
          },
        },
        required: ['city', 'state', 'street1', 'zip'],
      },
      contact: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
          name: {
            type: 'object',
            properties: {
              first: {
                type: 'string',
              },
              last: {
                type: 'string',
              },
            },
            required: ['first', 'last'],
          },
          phone: {
            type: 'string',
          },
        },
        required: ['email', 'name'],
      },
    },
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.tenants.create(body)));
};

export default { metadata, tool, handler };
