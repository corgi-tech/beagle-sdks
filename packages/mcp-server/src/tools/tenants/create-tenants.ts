// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from 'beagle';

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
  description: 'create a new tenant.',
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
  return asTextContentResult(await client.tenants.create(body));
};

export default { metadata, tool, handler };
