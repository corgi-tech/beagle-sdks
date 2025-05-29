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
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.post('/api/tenants', { body, ...options });
  }

  /**
   * retrieve a single tenant by their id.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.get(path`/api/tenants/${id}`, options);
  }

  /**
   * update an existing tenant by their id.
   */
  update(id: number, body: TenantUpdateParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.patch(path`/api/tenants/${id}`, { body, ...options });
  }

  /**
   * list all tenants, this endpoint is paginated and allows for queries by
   * individual property manager.
   */
  list(query: TenantListParams, options?: RequestOptions): APIPromise<TenantListResponse> {
    return this._client.get('/api/tenants', { query, ...options });
  }

  /**
   * delete an existing tenant by their id.
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
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

export interface TenantListResponse {
  pagination: PropertyManagersAPI.Pagination;

  tenants: Array<Tenant>;
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
  page: number;

  /**
   * Number of items per page.
   */
  size: number;

  propertyManagerId?: number;
}

export declare namespace Tenants {
  export {
    type Address as Address,
    type Contact as Contact,
    type Tenant as Tenant,
    type TenantListResponse as TenantListResponse,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
  };
}
