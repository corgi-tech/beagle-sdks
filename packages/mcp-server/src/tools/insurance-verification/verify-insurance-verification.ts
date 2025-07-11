// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'beagle-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\ntrigger a job to parse a tenants insurance document(s)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    message: {\n      type: 'string',\n      enum: [        'insurance verification job scheduled'\n      ]\n    }\n  },\n  required: [    'message'\n  ]\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.insuranceVerification.verify(body)));
};

export default { metadata, tool, handler };
