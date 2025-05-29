// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TenantsAPI from './tenants';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PropertyManagers extends APIResource {
  /**
   * create a new property manager.
   */
  create(params: PropertyManagerCreateParams, options?: RequestOptions): APIPromise<PropertyManager> {
    const { 'x-api-key': xAPIKey, ...body } = params;
    return this._client.post('/api/property-managers', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * get a property manager by id.
   */
  retrieve(
    id: number,
    params: PropertyManagerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PropertyManager> {
    const { 'x-api-key': xAPIKey } = params;
    return this._client.get(path`/api/property-managers/${id}`, {
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * update an existing property manager by id, note that when updating contacts or
   * addresses you need to send the whole array you want to replace them with.
   */
  update(
    id: number,
    params: PropertyManagerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PropertyManager> {
    const { 'x-api-key': xAPIKey, ...body } = params;
    return this._client.patch(path`/api/property-managers/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * list all property managers, note this endpoint is paginated.
   */
  list(params: PropertyManagerListParams, options?: RequestOptions): APIPromise<PropertyManagerListResponse> {
    const { 'x-api-key': xAPIKey, ...query } = params;
    return this._client.get('/api/property-managers', {
      query,
      ...options,
      headers: buildHeaders([{ 'x-api-key': xAPIKey }, options?.headers]),
    });
  }

  /**
   * delete a property manager by id.
   */
  delete(id: number, params: PropertyManagerDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { 'x-api-key': xAPIKey } = params;
    return this._client.delete(path`/api/property-managers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'x-api-key': xAPIKey }, options?.headers]),
    });
  }
}

export interface Pagination {
  page: number;

  pages: number;

  records: number;

  size: number;
}

export interface PropertyManager {
  id: number;

  addresses: Array<PropertyManager.Address>;

  contacts: Array<PropertyManager.Contact>;

  /**
   * name of the property manager
   */
  name: string;
}

export namespace PropertyManager {
  export interface Address extends TenantsAPI.Address {
    kind: 'billing' | 'legal' | 'mailing' | 'place of business' | 'marketing';
  }

  export interface Contact extends TenantsAPI.Contact {
    kind: 'agreements' | 'questions' | 'billing' | 'reporting';
  }
}

export interface PropertyManagerListResponse {
  pagination: Pagination;

  propertyManagers: Array<PropertyManager>;
}

export interface PropertyManagerCreateParams {
  /**
   * Body param:
   */
  addresses: Array<PropertyManagerCreateParams.Address>;

  /**
   * Body param:
   */
  contacts: Array<PropertyManagerCreateParams.Contact>;

  /**
   * Body param: name of the property manager
   */
  name: string;

  /**
   * Header param:
   */
  'x-api-key': string;
}

export namespace PropertyManagerCreateParams {
  export interface Address extends TenantsAPI.Address {
    kind: 'billing' | 'legal' | 'mailing' | 'place of business' | 'marketing';
  }

  export interface Contact extends TenantsAPI.Contact {
    kind: 'agreements' | 'questions' | 'billing' | 'reporting';
  }
}

export interface PropertyManagerRetrieveParams {
  'x-api-key': string;
}

export interface PropertyManagerUpdateParams {
  /**
   * Header param:
   */
  'x-api-key': string;

  /**
   * Body param:
   */
  addresses?: Array<PropertyManagerUpdateParams.Address>;

  /**
   * Body param:
   */
  contacts?: Array<PropertyManagerUpdateParams.Contact>;

  /**
   * Body param: name of the property manager
   */
  name?: string;
}

export namespace PropertyManagerUpdateParams {
  export interface Address extends TenantsAPI.Address {
    kind: 'billing' | 'legal' | 'mailing' | 'place of business' | 'marketing';
  }

  export interface Contact extends TenantsAPI.Contact {
    kind: 'agreements' | 'questions' | 'billing' | 'reporting';
  }
}

export interface PropertyManagerListParams {
  /**
   * Header param:
   */
  'x-api-key': string;

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  size?: number;
}

export interface PropertyManagerDeleteParams {
  'x-api-key': string;
}

export declare namespace PropertyManagers {
  export {
    type Pagination as Pagination,
    type PropertyManager as PropertyManager,
    type PropertyManagerListResponse as PropertyManagerListResponse,
    type PropertyManagerCreateParams as PropertyManagerCreateParams,
    type PropertyManagerRetrieveParams as PropertyManagerRetrieveParams,
    type PropertyManagerUpdateParams as PropertyManagerUpdateParams,
    type PropertyManagerListParams as PropertyManagerListParams,
    type PropertyManagerDeleteParams as PropertyManagerDeleteParams,
  };
}
