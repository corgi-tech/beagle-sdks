// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'insurance_verification',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/insurance-verification',
  operationId: 'verifyInsurance',
};

export const tool: Tool = {
  name: 'verify_insurance_verification',
  description: 'trigger a job to parse a tenants insurance document(s)',
  inputSchema: {
    type: 'object',
    properties: {
      propertyManagerId: {
        type: 'number',
      },
      tenantId: {
        type: 'number',
      },
      urls: {
        type: 'array',
        description: 'an array of presigned pdf urls for the tenants policy document(s)',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.insuranceVerification.verify(body));
};

export default { metadata, tool, handler };
