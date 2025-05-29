// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PropertyManagersAPI from './property-managers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tenants extends APIResource {
  /**
   * create a new tenant.
   */
  create(params: TenantCreateParams, options?: RequestOptions): APIPromise<Tenant> {
    const { 'x-api-token': xAPIToken, ...body } = params;
    return this._client.post('/api/tenants', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-api-token': xAPIToken }, options?.headers]),
    });
  }

  /**
   * retrieve a single tenant by their id.
   */
  retrieve(id: number, params: TenantRetrieveParams, options?: RequestOptions): APIPromise<Tenant> {
    const { 'x-api-token': xAPIToken } = params;
    return this._client.get(path`/api/tenants/${id}`, {
      ...options,
      headers: buildHeaders([{ 'x-api-token': xAPIToken }, options?.headers]),
    });
  }

  /**
   * update an existing tenant by their id.
   */
  update(id: number, params: TenantUpdateParams, options?: RequestOptions): APIPromise<Tenant> {
    const { 'x-api-token': xAPIToken, ...body } = params;
    return this._client.patch(path`/api/tenants/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'x-api-token': xAPIToken }, options?.headers]),
    });
  }

  /**
   * list all tenants, this endpoint is paginated and allows for queries by
   * individual property manager.
   */
  list(params: TenantListParams, options?: RequestOptions): APIPromise<TenantListResponse> {
    const { 'x-api-token': xAPIToken, ...query } = params;
    return this._client.get('/api/tenants', {
      query,
      ...options,
      headers: buildHeaders([{ 'x-api-token': xAPIToken }, options?.headers]),
    });
  }

  /**
   * delete an existing tenant by their id.
   */
  delete(id: number, params: TenantDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { 'x-api-token': xAPIToken } = params;
    return this._client.delete(path`/api/tenants/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'x-api-token': xAPIToken }, options?.headers]),
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

export interface TenantListResponse {
  pagination: PropertyManagersAPI.Pagination;

  tenants: Array<Tenant>;
}

export interface TenantCreateParams {
  /**
   * Body param:
   */
  address: Address;

  /**
   * Body param:
   */
  contact: Contact;

  /**
   * Body param:
   */
  propertyManagerId: number;

  /**
   * Header param:
   */
  'x-api-token': string;
}

export interface TenantRetrieveParams {
  'x-api-token': string;
}

export interface TenantUpdateParams {
  /**
   * Header param:
   */
  'x-api-token': string;

  /**
   * Body param:
   */
  address?: Address;

  /**
   * Body param:
   */
  contact?: Contact;
}

export interface TenantListParams {
  /**
   * Header param:
   */
  'x-api-token': string;

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  propertyManagerId?: number;

  /**
   * Query param:
   */
  size?: number;
}

export interface TenantDeleteParams {
  'x-api-token': string;
}

export declare namespace Tenants {
  export {
    type Address as Address,
    type Contact as Contact,
    type Tenant as Tenant,
    type TenantListResponse as TenantListResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantRetrieveParams as TenantRetrieveParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
    type TenantDeleteParams as TenantDeleteParams,
  };
}
