// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'beagle-mcp/filtering';
import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'property_managers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/property-managers',
  operationId: 'listPropertyManagers',
};

export const tool: Tool = {
  name: 'list_property_managers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist all property managers, note this endpoint is paginated.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    pagination: {\n      $ref: '#/$defs/pagination'\n    },\n    propertyManagers: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/property_manager'\n      }\n    }\n  },\n  required: [    'pagination',\n    'propertyManagers'\n  ],\n  $defs: {\n    pagination: {\n      type: 'object',\n      properties: {\n        page: {\n          type: 'number',\n          description: 'Current page number.'\n        },\n        pages: {\n          type: 'number',\n          description: 'Total number of pages.'\n        },\n        records: {\n          type: 'number',\n          description: 'Total number of records.'\n        },\n        size: {\n          type: 'number',\n          description: 'Number of items per page.'\n        }\n      },\n      required: [        'page',\n        'pages',\n        'records',\n        'size'\n      ]\n    },\n    property_manager: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'number'\n        },\n        addresses: {\n          type: 'array',\n          items: {\n            allOf: [              {\n                $ref: '#/$defs/address'\n              }\n            ]\n          }\n        },\n        contacts: {\n          type: 'array',\n          items: {\n            allOf: [              {\n                $ref: '#/$defs/contact'\n              }\n            ]\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'name of the property manager'\n        }\n      },\n      required: [        'id',\n        'addresses',\n        'contacts',\n        'name'\n      ]\n    },\n    address: {\n      type: 'object',\n      properties: {\n        city: {\n          type: 'string'\n        },\n        state: {\n          type: 'string',\n          description: 'two letter state code, ie CA'\n        },\n        street1: {\n          type: 'string'\n        },\n        zip: {\n          type: 'string',\n          description: '5 digit US zip code, ie 94104'\n        },\n        street2: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'state',\n        'street1',\n        'zip'\n      ]\n    },\n    contact: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'string'\n        },\n        name: {\n          type: 'object',\n          properties: {\n            first: {\n              type: 'string'\n            },\n            last: {\n              type: 'string'\n            }\n          },\n          required: [            'first',\n            'last'\n          ]\n        },\n        phone: {\n          type: 'string'\n        }\n      },\n      required: [        'email',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'number',
        description: 'Page number to fetch.',
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
  const response = await client.propertyManagers.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
