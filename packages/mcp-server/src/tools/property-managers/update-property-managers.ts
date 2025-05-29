// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

export const metadata: Metadata = {
  resource: 'property_managers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/property-managers/{id}',
  operationId: 'updatePropertyManager',
};

export const tool: Tool = {
  name: 'update_property_managers',
  description:
    'update an existing property manager by id, note that when updating contacts or addresses you need to send the whole array you want to replace them with.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
      },
      addresses: {
        type: 'array',
        items: {
          allOf: [
            {
              $ref: '#/$defs/address',
            },
          ],
        },
      },
      contacts: {
        type: 'array',
        items: {
          allOf: [
            {
              $ref: '#/$defs/contact',
            },
          ],
        },
      },
      name: {
        type: 'string',
        description: 'name of the property manager',
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

export const handler = (client: Beagle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.propertyManagers.update(id, body);
};

export default { metadata, tool, handler };
