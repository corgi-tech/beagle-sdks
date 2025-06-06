// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import retrieve_plans from './plans/retrieve-plans';
import list_plans from './plans/list-plans';
import create_property_managers from './property-managers/create-property-managers';
import retrieve_property_managers from './property-managers/retrieve-property-managers';
import update_property_managers from './property-managers/update-property-managers';
import list_property_managers from './property-managers/list-property-managers';
import delete_property_managers from './property-managers/delete-property-managers';
import create_tenants from './tenants/create-tenants';
import retrieve_tenants from './tenants/retrieve-tenants';
import update_tenants from './tenants/update-tenants';
import list_tenants from './tenants/list-tenants';
import delete_tenants from './tenants/delete-tenants';
import create_enrollments from './enrollments/create-enrollments';
import retrieve_enrollments from './enrollments/retrieve-enrollments';
import list_enrollments from './enrollments/list-enrollments';
import lapse_enrollments from './enrollments/lapse-enrollments';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_plans);
addEndpoint(list_plans);
addEndpoint(create_property_managers);
addEndpoint(retrieve_property_managers);
addEndpoint(update_property_managers);
addEndpoint(list_property_managers);
addEndpoint(delete_property_managers);
addEndpoint(create_tenants);
addEndpoint(retrieve_tenants);
addEndpoint(update_tenants);
addEndpoint(list_tenants);
addEndpoint(delete_tenants);
addEndpoint(create_enrollments);
addEndpoint(retrieve_enrollments);
addEndpoint(list_enrollments);
addEndpoint(lapse_enrollments);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
