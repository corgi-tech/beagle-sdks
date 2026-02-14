// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.plans.retrieve',
    fullyQualifiedName: 'plans.retrieve',
    httpMethod: 'get',
    httpPath: '/api/plans/{code}',
  },
  {
    clientCallName: 'client.plans.list',
    fullyQualifiedName: 'plans.list',
    httpMethod: 'get',
    httpPath: '/api/plans',
  },
  {
    clientCallName: 'client.propertyManagers.create',
    fullyQualifiedName: 'propertyManagers.create',
    httpMethod: 'post',
    httpPath: '/api/property-managers',
  },
  {
    clientCallName: 'client.propertyManagers.retrieve',
    fullyQualifiedName: 'propertyManagers.retrieve',
    httpMethod: 'get',
    httpPath: '/api/property-managers/{id}',
  },
  {
    clientCallName: 'client.propertyManagers.update',
    fullyQualifiedName: 'propertyManagers.update',
    httpMethod: 'patch',
    httpPath: '/api/property-managers/{id}',
  },
  {
    clientCallName: 'client.propertyManagers.list',
    fullyQualifiedName: 'propertyManagers.list',
    httpMethod: 'get',
    httpPath: '/api/property-managers',
  },
  {
    clientCallName: 'client.propertyManagers.delete',
    fullyQualifiedName: 'propertyManagers.delete',
    httpMethod: 'delete',
    httpPath: '/api/property-managers/{id}',
  },
  {
    clientCallName: 'client.tenants.create',
    fullyQualifiedName: 'tenants.create',
    httpMethod: 'post',
    httpPath: '/api/tenants',
  },
  {
    clientCallName: 'client.tenants.retrieve',
    fullyQualifiedName: 'tenants.retrieve',
    httpMethod: 'get',
    httpPath: '/api/tenants/{id}',
  },
  {
    clientCallName: 'client.tenants.update',
    fullyQualifiedName: 'tenants.update',
    httpMethod: 'patch',
    httpPath: '/api/tenants/{id}',
  },
  {
    clientCallName: 'client.tenants.list',
    fullyQualifiedName: 'tenants.list',
    httpMethod: 'get',
    httpPath: '/api/tenants',
  },
  {
    clientCallName: 'client.tenants.delete',
    fullyQualifiedName: 'tenants.delete',
    httpMethod: 'delete',
    httpPath: '/api/tenants/{id}',
  },
  {
    clientCallName: 'client.enrollments.create',
    fullyQualifiedName: 'enrollments.create',
    httpMethod: 'post',
    httpPath: '/api/enrollments',
  },
  {
    clientCallName: 'client.enrollments.retrieve',
    fullyQualifiedName: 'enrollments.retrieve',
    httpMethod: 'get',
    httpPath: '/api/enrollments/{id}',
  },
  {
    clientCallName: 'client.enrollments.list',
    fullyQualifiedName: 'enrollments.list',
    httpMethod: 'get',
    httpPath: '/api/enrollments',
  },
  {
    clientCallName: 'client.enrollments.lapse',
    fullyQualifiedName: 'enrollments.lapse',
    httpMethod: 'delete',
    httpPath: '/api/enrollments/{id}',
  },
  {
    clientCallName: 'client.enrollments.retrieveCertificate',
    fullyQualifiedName: 'enrollments.retrieveCertificate',
    httpMethod: 'get',
    httpPath: '/api/enrollments/{id}/certificate',
  },
  {
    clientCallName: 'client.insuranceVerification.verify',
    fullyQualifiedName: 'insuranceVerification.verify',
    httpMethod: 'post',
    httpPath: '/api/insurance-verification',
  },
  {
    clientCallName: 'client.webhook.endpoints.create',
    fullyQualifiedName: 'webhook.endpoints.create',
    httpMethod: 'post',
    httpPath: '/api/webhook/endpoints',
  },
  {
    clientCallName: 'client.webhook.endpoints.retrieve',
    fullyQualifiedName: 'webhook.endpoints.retrieve',
    httpMethod: 'get',
    httpPath: '/api/webhook/endpoints/{id}',
  },
  {
    clientCallName: 'client.webhook.endpoints.update',
    fullyQualifiedName: 'webhook.endpoints.update',
    httpMethod: 'patch',
    httpPath: '/api/webhook/endpoints/{id}',
  },
  {
    clientCallName: 'client.webhook.endpoints.list',
    fullyQualifiedName: 'webhook.endpoints.list',
    httpMethod: 'get',
    httpPath: '/api/webhook/endpoints',
  },
  {
    clientCallName: 'client.webhook.endpoints.delete',
    fullyQualifiedName: 'webhook.endpoints.delete',
    httpMethod: 'delete',
    httpPath: '/api/webhook/endpoints/{id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
