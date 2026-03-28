// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/api/plans/{code}',
    httpMethod: 'get',
    summary: 'Get Plan',
    description: 'retrieve a specific plans details by its code.',
    stainlessPath: '(resource) plans > (method) retrieve',
    qualified: 'client.plans.retrieve',
    params: ['code: string;'],
    response:
      '{ data: { description: string; name: string; rate: number; contents?: number; liability?: number; value?: number; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.plans.retrieve(code: string): { data: plan; success: true; }`\n\n**get** `/api/plans/{code}`\n\nretrieve a specific plans details by its code.\n\n### Parameters\n\n- `code: string`\n\n### Returns\n\n- `{ data: { description: string; name: string; rate: number; contents?: number; liability?: number; value?: number; }; success: true; }`\n\n  - `data: { description: string; name: string; rate: number; contents?: number; liability?: number; value?: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst plan = await client.plans.retrieve('code');\n\nconsole.log(plan);\n```",
  },
  {
    name: 'list',
    endpoint: '/api/plans',
    httpMethod: 'get',
    summary: 'List Plans',
    description: 'List all available insurance plans that tenants can be enrolled in.',
    stainlessPath: '(resource) plans > (method) list',
    qualified: 'client.plans.list',
    response:
      '{ data: { description: string; name: string; rate: number; contents?: number; liability?: number; value?: number; }[]; success: true; }',
    markdown:
      "## list\n\n`client.plans.list(): { data: plan[]; success: true; }`\n\n**get** `/api/plans`\n\nList all available insurance plans that tenants can be enrolled in.\n\n### Returns\n\n- `{ data: { description: string; name: string; rate: number; contents?: number; liability?: number; value?: number; }[]; success: true; }`\n\n  - `data: { description: string; name: string; rate: number; contents?: number; liability?: number; value?: number; }[]`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst plans = await client.plans.list();\n\nconsole.log(plans);\n```",
  },
  {
    name: 'create',
    endpoint: '/api/property-managers',
    httpMethod: 'post',
    summary: 'Create Property Manager',
    description: 'create a new property manager.',
    stainlessPath: '(resource) property_managers > (method) create',
    qualified: 'client.propertyManagers.create',
    params: [
      'addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[];',
      'contacts: { email: string; name: { first: string; last: string; }; phone?: string; }[];',
      'name: string;',
      'clickWrapAt?: number;',
    ],
    response:
      '{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; }; success: true; }',
    markdown:
      "## create\n\n`client.propertyManagers.create(addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[], contacts: { email: string; name: object; phone?: string; }[], name: string, clickWrapAt?: number): { data: property_manager; success: true; }`\n\n**post** `/api/property-managers`\n\ncreate a new property manager.\n\n### Parameters\n\n- `addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[]`\n  street addresses for each Property\n\n- `contacts: { email: string; name: { first: string; last: string; }; phone?: string; }[]`\n  contact information for each Property Manager\n\n- `name: string`\n  name of the Property Management Company\n\n- `clickWrapAt?: number`\n  unix timestamp (ms) of clickwrap agreement signature\n\n### Returns\n\n- `{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; }; success: true; }`\n\n  - `data: { id: number; addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[]; contacts: { email: string; name: object; phone?: string; }[]; name: string; clickWrapAt?: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst propertyManager = await client.propertyManagers.create({\n  addresses: [{\n  city: 'city',\n  state: 'xx',\n  street1: 'street1',\n  zip: '60513',\n  kind: 'billing',\n}],\n  contacts: [{\n  email: 'dev@stainless.com',\n  name: { first: 'first', last: 'last' },\n  kind: 'agreements',\n}],\n  name: 'name',\n});\n\nconsole.log(propertyManager);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/property-managers/{id}',
    httpMethod: 'get',
    summary: 'Get Property Manager',
    description: 'get a property manager by id.',
    stainlessPath: '(resource) property_managers > (method) retrieve',
    qualified: 'client.propertyManagers.retrieve',
    params: ['id: number;'],
    response:
      '{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.propertyManagers.retrieve(id: number): { data: property_manager; success: true; }`\n\n**get** `/api/property-managers/{id}`\n\nget a property manager by id.\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; }; success: true; }`\n\n  - `data: { id: number; addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[]; contacts: { email: string; name: object; phone?: string; }[]; name: string; clickWrapAt?: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst propertyManager = await client.propertyManagers.retrieve(123);\n\nconsole.log(propertyManager);\n```",
  },
  {
    name: 'update',
    endpoint: '/api/property-managers/{id}',
    httpMethod: 'patch',
    summary: 'Update Property Manager',
    description:
      'update an existing property manager by ID\n\n(Note that when updating **contacts** or **addresses** you need to send the whole array you want to replace them with)',
    stainlessPath: '(resource) property_managers > (method) update',
    qualified: 'client.propertyManagers.update',
    params: [
      'id: number;',
      'addresses?: { city: string; state: string; street1: string; zip: string; street2?: string; }[];',
      'clickWrapAt?: number;',
      'contacts?: { email: string; name: { first: string; last: string; }; phone?: string; }[];',
      'name?: string;',
    ],
    response:
      '{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; }; success: true; }',
    markdown:
      "## update\n\n`client.propertyManagers.update(id: number, addresses?: { city: string; state: string; street1: string; zip: string; street2?: string; }[], clickWrapAt?: number, contacts?: { email: string; name: object; phone?: string; }[], name?: string): { data: property_manager; success: true; }`\n\n**patch** `/api/property-managers/{id}`\n\nupdate an existing property manager by ID\n\n(Note that when updating **contacts** or **addresses** you need to send the whole array you want to replace them with)\n\n### Parameters\n\n- `id: number`\n\n- `addresses?: { city: string; state: string; street1: string; zip: string; street2?: string; }[]`\n  street addresses for each Property\n\n- `clickWrapAt?: number`\n  unix timestamp (ms) of clickwrap agreement signature\n\n- `contacts?: { email: string; name: { first: string; last: string; }; phone?: string; }[]`\n  contact information for each Property Manager\n\n- `name?: string`\n  name of the Property Management Company\n\n### Returns\n\n- `{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; }; success: true; }`\n\n  - `data: { id: number; addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[]; contacts: { email: string; name: object; phone?: string; }[]; name: string; clickWrapAt?: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst propertyManager = await client.propertyManagers.update(123);\n\nconsole.log(propertyManager);\n```",
  },
  {
    name: 'list',
    endpoint: '/api/property-managers',
    httpMethod: 'get',
    summary: 'List Property Managers',
    description: 'list all property managers, note this endpoint is paginated.',
    stainlessPath: '(resource) property_managers > (method) list',
    qualified: 'client.propertyManagers.list',
    params: ['page?: number;', 'size?: number;'],
    response: '{ data: { items: object[]; pagination: object; }; success: true; }',
    markdown:
      "## list\n\n`client.propertyManagers.list(page?: number, size?: number): { data: object; success: true; }`\n\n**get** `/api/property-managers`\n\nlist all property managers, note this endpoint is paginated.\n\n### Parameters\n\n- `page?: number`\n  Page number to fetch.\n\n- `size?: number`\n  Number of items per page.\n\n### Returns\n\n- `{ data: { items: object[]; pagination: object; }; success: true; }`\n\n  - `data: { items: { id: number; addresses: object[]; contacts: object[]; name: string; clickWrapAt?: number; }[]; pagination: { page: number; pages: number; records: number; size: number; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst propertyManagers = await client.propertyManagers.list();\n\nconsole.log(propertyManagers);\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/property-managers/{id}',
    httpMethod: 'delete',
    summary: 'Delete Property Manager',
    description: 'delete a property manager by ID.',
    stainlessPath: '(resource) property_managers > (method) delete',
    qualified: 'client.propertyManagers.delete',
    params: ['id: number;'],
    markdown:
      "## delete\n\n`client.propertyManagers.delete(id: number): void`\n\n**delete** `/api/property-managers/{id}`\n\ndelete a property manager by ID.\n\n### Parameters\n\n- `id: number`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nawait client.propertyManagers.delete(123)\n```",
  },
  {
    name: 'create',
    endpoint: '/api/tenants',
    httpMethod: 'post',
    summary: 'Create Tenant',
    description: 'create a new tenant.',
    stainlessPath: '(resource) tenants > (method) create',
    qualified: 'client.tenants.create',
    params: [
      'address: { city: string; state: string; street1: string; zip: string; street2?: string; };',
      'contact: { email: string; name: { first: string; last: string; }; phone?: string; };',
      'propertyManagerId: number;',
    ],
    response: '{ data: { id: number; address: address; contact: contact; }; success: true; }',
    markdown:
      "## create\n\n`client.tenants.create(address: { city: string; state: string; street1: string; zip: string; street2?: string; }, contact: { email: string; name: object; phone?: string; }, propertyManagerId: number): { data: tenant; success: true; }`\n\n**post** `/api/tenants`\n\ncreate a new tenant.\n\n### Parameters\n\n- `address: { city: string; state: string; street1: string; zip: string; street2?: string; }`\n  - `city: string`\n  - `state: string`\n    two letter state code, ie CA\n  - `street1: string`\n  - `zip: string`\n    5 digit US zip code, ie 94104\n  - `street2?: string`\n\n- `contact: { email: string; name: { first: string; last: string; }; phone?: string; }`\n  - `email: string`\n  - `name: { first: string; last: string; }`\n  - `phone?: string`\n\n- `propertyManagerId: number`\n\n### Returns\n\n- `{ data: { id: number; address: address; contact: contact; }; success: true; }`\n\n  - `data: { id: number; address: { city: string; state: string; street1: string; zip: string; street2?: string; }; contact: { email: string; name: object; phone?: string; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst tenant = await client.tenants.create({\n  address: {\n  city: 'city',\n  state: 'xx',\n  street1: 'street1',\n  zip: '60513',\n},\n  contact: {\n  email: 'dev@stainless.com',\n  name: { first: 'first', last: 'last' },\n},\n  propertyManagerId: 0,\n});\n\nconsole.log(tenant);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/tenants/{id}',
    httpMethod: 'get',
    summary: 'Get Tenant',
    description: 'retrieve a single tenant by their id.',
    stainlessPath: '(resource) tenants > (method) retrieve',
    qualified: 'client.tenants.retrieve',
    params: ['id: number;'],
    response: '{ data: { id: number; address: address; contact: contact; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.tenants.retrieve(id: number): { data: tenant; success: true; }`\n\n**get** `/api/tenants/{id}`\n\nretrieve a single tenant by their id.\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ data: { id: number; address: address; contact: contact; }; success: true; }`\n\n  - `data: { id: number; address: { city: string; state: string; street1: string; zip: string; street2?: string; }; contact: { email: string; name: object; phone?: string; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst tenant = await client.tenants.retrieve(123);\n\nconsole.log(tenant);\n```",
  },
  {
    name: 'update',
    endpoint: '/api/tenants/{id}',
    httpMethod: 'patch',
    summary: 'Update Tenant',
    description: 'update an existing tenant by their id.',
    stainlessPath: '(resource) tenants > (method) update',
    qualified: 'client.tenants.update',
    params: [
      'id: number;',
      'address?: { city: string; state: string; street1: string; zip: string; street2?: string; };',
      'contact?: { email: string; name: { first: string; last: string; }; phone?: string; };',
    ],
    response: '{ data: { id: number; address: address; contact: contact; }; success: true; }',
    markdown:
      "## update\n\n`client.tenants.update(id: number, address?: { city: string; state: string; street1: string; zip: string; street2?: string; }, contact?: { email: string; name: object; phone?: string; }): { data: tenant; success: true; }`\n\n**patch** `/api/tenants/{id}`\n\nupdate an existing tenant by their id.\n\n### Parameters\n\n- `id: number`\n\n- `address?: { city: string; state: string; street1: string; zip: string; street2?: string; }`\n  - `city: string`\n  - `state: string`\n    two letter state code, ie CA\n  - `street1: string`\n  - `zip: string`\n    5 digit US zip code, ie 94104\n  - `street2?: string`\n\n- `contact?: { email: string; name: { first: string; last: string; }; phone?: string; }`\n  - `email: string`\n  - `name: { first: string; last: string; }`\n  - `phone?: string`\n\n### Returns\n\n- `{ data: { id: number; address: address; contact: contact; }; success: true; }`\n\n  - `data: { id: number; address: { city: string; state: string; street1: string; zip: string; street2?: string; }; contact: { email: string; name: object; phone?: string; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst tenant = await client.tenants.update(123);\n\nconsole.log(tenant);\n```",
  },
  {
    name: 'list',
    endpoint: '/api/tenants',
    httpMethod: 'get',
    summary: 'List Tenants',
    description:
      'list all tenants, this endpoint is paginated and allows for queries by individual property manager.',
    stainlessPath: '(resource) tenants > (method) list',
    qualified: 'client.tenants.list',
    params: ['page?: number;', 'propertyManagerId?: number;', 'size?: number;'],
    response: '{ data: { items: object[]; pagination: object; }; success: true; }',
    markdown:
      "## list\n\n`client.tenants.list(page?: number, propertyManagerId?: number, size?: number): { data: object; success: true; }`\n\n**get** `/api/tenants`\n\nlist all tenants, this endpoint is paginated and allows for queries by individual property manager.\n\n### Parameters\n\n- `page?: number`\n  Page number to fetch.\n\n- `propertyManagerId?: number`\n\n- `size?: number`\n  Number of items per page.\n\n### Returns\n\n- `{ data: { items: object[]; pagination: object; }; success: true; }`\n\n  - `data: { items: { id: number; address: object; contact: object; }[]; pagination: { page: number; pages: number; records: number; size: number; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst tenants = await client.tenants.list();\n\nconsole.log(tenants);\n```",
  },
  {
    name: 'delete',
    endpoint: '/api/tenants/{id}',
    httpMethod: 'delete',
    summary: 'Delete Tenant',
    description: 'delete an existing tenant by their id.',
    stainlessPath: '(resource) tenants > (method) delete',
    qualified: 'client.tenants.delete',
    params: ['id: number;'],
    markdown:
      "## delete\n\n`client.tenants.delete(id: number): void`\n\n**delete** `/api/tenants/{id}`\n\ndelete an existing tenant by their id.\n\n### Parameters\n\n- `id: number`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nawait client.tenants.delete(123)\n```",
  },
  {
    name: 'create',
    endpoint: '/api/enrollments',
    httpMethod: 'post',
    summary: 'Create Enrollment',
    description: 'create a new enrollment for a tenant.',
    stainlessPath: '(resource) enrollments > (method) create',
    qualified: 'client.enrollments.create',
    params: [
      'effectiveDate: string;',
      'plan: string;',
      'propertyManagerId: number;',
      'status: string;',
      'tenantId: number;',
      'note?: string;',
    ],
    response:
      '{ data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; }; success: true; }',
    markdown:
      "## create\n\n`client.enrollments.create(effectiveDate: string, plan: string, propertyManagerId: number, status: string, tenantId: number, note?: string): { data: enrollment; success: true; }`\n\n**post** `/api/enrollments`\n\ncreate a new enrollment for a tenant.\n\n### Parameters\n\n- `effectiveDate: string`\n  the date the enrollment will begin, note enrollments cannot begin in the past\n\n- `plan: string`\n  the plan name/code\n\n- `propertyManagerId: number`\n\n- `status: string`\n\n- `tenantId: number`\n\n- `note?: string`\n  an optional note field, this can be used for easily appending metadata to enrollments\n\n### Returns\n\n- `{ data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; }; success: true; }`\n\n  - `data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst enrollment = await client.enrollments.create({\n  effectiveDate: 'effectiveDate',\n  plan: 'plan',\n  propertyManagerId: 0,\n  status: 'Premium Paying',\n  tenantId: 0,\n});\n\nconsole.log(enrollment);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/api/enrollments/{id}',
    httpMethod: 'get',
    summary: 'Get Enrollment',
    description: 'get a specific enrollment by its id.',
    stainlessPath: '(resource) enrollments > (method) retrieve',
    qualified: 'client.enrollments.retrieve',
    params: ['id: number;'],
    response:
      '{ data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.enrollments.retrieve(id: number): { data: enrollment; success: true; }`\n\n**get** `/api/enrollments/{id}`\n\nget a specific enrollment by its id.\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; }; success: true; }`\n\n  - `data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst enrollment = await client.enrollments.retrieve(123);\n\nconsole.log(enrollment);\n```",
  },
  {
    name: 'list',
    endpoint: '/api/enrollments',
    httpMethod: 'get',
    summary: 'List Enrollments',
    description:
      'list all enrollments, this endpoint is paginated and allows for queries by individual property manager.',
    stainlessPath: '(resource) enrollments > (method) list',
    qualified: 'client.enrollments.list',
    params: ['page?: number;', 'propertyManagerId?: number;', 'size?: number;'],
    response: '{ data: { items: object[]; pagination: object; }; success: true; }',
    markdown:
      "## list\n\n`client.enrollments.list(page?: number, propertyManagerId?: number, size?: number): { data: object; success: true; }`\n\n**get** `/api/enrollments`\n\nlist all enrollments, this endpoint is paginated and allows for queries by individual property manager.\n\n### Parameters\n\n- `page?: number`\n  Page number to fetch.\n\n- `propertyManagerId?: number`\n\n- `size?: number`\n  Number of items per page.\n\n### Returns\n\n- `{ data: { items: object[]; pagination: object; }; success: true; }`\n\n  - `data: { items: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; }[]; pagination: { page: number; pages: number; records: number; size: number; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst enrollments = await client.enrollments.list();\n\nconsole.log(enrollments);\n```",
  },
  {
    name: 'lapse',
    endpoint: '/api/enrollments/{id}',
    httpMethod: 'delete',
    summary: 'Lapse Enrollment',
    description:
      'lapses a specific enrollment for a tenant, note that if a tenant has multiple enrollments (e.g., SDR and TLL), each must be lapsed individually',
    stainlessPath: '(resource) enrollments > (method) lapse',
    qualified: 'client.enrollments.lapse',
    params: ['id: number;'],
    markdown:
      "## lapse\n\n`client.enrollments.lapse(id: number): void`\n\n**delete** `/api/enrollments/{id}`\n\nlapses a specific enrollment for a tenant, note that if a tenant has multiple enrollments (e.g., SDR and TLL), each must be lapsed individually\n\n### Parameters\n\n- `id: number`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nawait client.enrollments.lapse(123)\n```",
  },
  {
    name: 'retrieve_certificate',
    endpoint: '/api/enrollments/{id}/certificate',
    httpMethod: 'get',
    summary: 'Get Enrollment Certificate',
    description: 'get the certificate of enrollment for a given enrollment',
    stainlessPath: '(resource) enrollments > (method) retrieve_certificate',
    qualified: 'client.enrollments.retrieveCertificate',
    params: ['id: number;'],
    response: 'string',
    markdown:
      "## retrieve_certificate\n\n`client.enrollments.retrieveCertificate(id: number): string`\n\n**get** `/api/enrollments/{id}/certificate`\n\nget the certificate of enrollment for a given enrollment\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst response = await client.enrollments.retrieveCertificate(123);\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
  },
  {
    name: 'verify',
    endpoint: '/api/insurance-verification',
    httpMethod: 'post',
    summary: 'Verify a tenants insurance policy',
    description: 'trigger a job to parse a tenants insurance document(s)',
    stainlessPath: '(resource) insurance_verification > (method) verify',
    qualified: 'client.insuranceVerification.verify',
    params: ['propertyManagerId: number;', 'tenantId: number;', 'urls: string[];'],
    response: "{ message: 'insurance verification job scheduled'; }",
    markdown:
      "## verify\n\n`client.insuranceVerification.verify(propertyManagerId: number, tenantId: number, urls: string[]): { message: 'insurance verification job scheduled'; }`\n\n**post** `/api/insurance-verification`\n\ntrigger a job to parse a tenants insurance document(s)\n\n### Parameters\n\n- `propertyManagerId: number`\n\n- `tenantId: number`\n\n- `urls: string[]`\n  an array of presigned pdf urls for the tenants policy document(s)\n\n### Returns\n\n- `{ message: 'insurance verification job scheduled'; }`\n\n  - `message: 'insurance verification job scheduled'`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst response = await client.insuranceVerification.verify({\n  propertyManagerId: 0,\n  tenantId: 0,\n  urls: ['string'],\n});\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
