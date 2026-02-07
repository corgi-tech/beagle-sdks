// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TenantsAPI from './tenants';
import * as PropertyManagersAPI from './property-managers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tenants extends APIResource {
  /**
   * create a new tenant.
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.create({
   *   address: {
   *     city: 'city',
   *     state: 'xx',
   *     street1: 'street1',
   *     zip: '60513',
   *   },
   *   contact: {
   *     email: 'dev@stainless.com',
   *     name: { first: 'first', last: 'last' },
   *   },
   *   propertyManagerId: 0,
   * });
   * ```
   */
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<TenantCreateResponse> {
    return this._client.post('/api/tenants', { body, ...options });
  }

  /**
   * retrieve a single tenant by their id.
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.retrieve(123);
   * ```
   */
  retrieve(id: number | null, options?: RequestOptions): APIPromise<TenantRetrieveResponse> {
    return this._client.get(path`/api/tenants/${id}`, options);
  }

  /**
   * update an existing tenant by their id.
   *
   * @example
   * ```ts
   * const tenant = await client.tenants.update(123);
   * ```
   */
  update(
    id: number | null,
    body: TenantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TenantUpdateResponse> {
    return this._client.patch(path`/api/tenants/${id}`, { body, ...options });
  }

  /**
   * list all tenants, this endpoint is paginated and allows for queries by
   * individual property manager.
   *
   * @example
   * ```ts
   * const tenants = await client.tenants.list();
   * ```
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TenantListResponse> {
    return this._client.get('/api/tenants', { query, ...options });
  }

  /**
   * delete an existing tenant by their id.
   *
   * @example
   * ```ts
   * await client.tenants.delete(123);
   * ```
   */
  delete(id: number | null, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/tenants/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Address {
  city: string;

  /**
   * two letter state code, ie CA
   */
  state: string;

  street1: string;

  /**
   * 5 digit US zip code, ie 94104
   */
  zip: string;

  street2?: string;
}

export interface Contact {
  email: string;

  name: Contact.Name;

  phone?: string;
}

export namespace Contact {
  export interface Name {
    first: string;

    last: string;
  }
}

export interface Tenant {
  id: number;

  address: Address;

  contact: Contact;
}

export interface TenantCreateResponse {
  data: Tenant;

  success: true;
}

export interface TenantRetrieveResponse {
  data: Tenant;

  success: true;
}

export interface TenantUpdateResponse {
  data: Tenant;

  success: true;
}

export interface TenantListResponse {
  data: TenantListResponse.Data;

  success: true;
}

export namespace TenantListResponse {
  export interface Data {
    items: Array<TenantsAPI.Tenant>;

    pagination: PropertyManagersAPI.Pagination;
  }
}

export interface TenantCreateParams {
  address: Address;

  contact: Contact;

  propertyManagerId: number;
}

export interface TenantUpdateParams {
  address?: Address;

  contact?: Contact;
}

export interface TenantListParams {
  /**
   * Page number to fetch.
   */
  page?: number;

  propertyManagerId?: number;

  /**
   * Number of items per page.
   */
  size?: number;
}

export declare namespace Tenants {
  export {
    type Address as Address,
    type Contact as Contact,
    type Tenant as Tenant,
    type TenantCreateResponse as TenantCreateResponse,
    type TenantRetrieveResponse as TenantRetrieveResponse,
    type TenantUpdateResponse as TenantUpdateResponse,
    type TenantListResponse as TenantListResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
  };
}
