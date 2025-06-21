// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, TenantsPagination, type TenantsPaginationParams } from '../core/pagination';
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
  retrieve(id: number | null, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.get(path`/api/tenants/${id}`, options);
  }

  /**
   * update an existing tenant by their id.
   */
  update(id: number | null, body: TenantUpdateParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.patch(path`/api/tenants/${id}`, { body, ...options });
  }

  /**
   * list all tenants, this endpoint is paginated and allows for queries by
   * individual property manager.
   */
  list(
    query: TenantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TenantsTenantsPagination, Tenant> {
    return this._client.getAPIList('/api/tenants', TenantsPagination<Tenant>, { query, ...options });
  }

  /**
   * delete an existing tenant by their id.
   */
  delete(id: number | null, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/tenants/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type TenantsTenantsPagination = TenantsPagination<Tenant>;

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

export interface TenantCreateParams {
  address: Address;

  contact: Contact;

  propertyManagerId: number;
}

export interface TenantUpdateParams {
  address?: Address;

  contact?: Contact;
}

export interface TenantListParams extends TenantsPaginationParams {
  propertyManagerId?: number;
}

export declare namespace Tenants {
  export {
    type Address as Address,
    type Contact as Contact,
    type Tenant as Tenant,
    type TenantsTenantsPagination as TenantsTenantsPagination,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
    type TenantListParams as TenantListParams,
  };
}
