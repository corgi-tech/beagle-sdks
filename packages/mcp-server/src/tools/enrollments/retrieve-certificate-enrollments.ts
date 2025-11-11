// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from '@corgi-tech/beagle-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Beagle from '@corgi-tech/beagle';

export const metadata: Metadata = {
  resource: 'enrollments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/enrollments/{id}/certificate',
  operationId: 'getEnrollmentCertificate',
};

export const tool: Tool = {
  name: 'retrieve_certificate_enrollments',
  description: 'get the certificate of enrollment for a given enrollment',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Beagle, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.enrollments.retrieveCertificate(id).asResponse());
};

export default { metadata, tool, handler };
