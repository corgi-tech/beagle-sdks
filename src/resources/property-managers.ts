// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TenantsAPI from './tenants';
import { APIPromise } from '../core/api-promise';
import {
  PagePromise,
  PropertyManagersPagination,
  type PropertyManagersPaginationParams,
} from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PropertyManagers extends APIResource {
  /**
   * create a new property manager.
   */
  create(body: PropertyManagerCreateParams, options?: RequestOptions): APIPromise<PropertyManager> {
    return this._client.post('/api/property-managers', { body, ...options });
  }

  /**
   * get a property manager by id.
   */
  retrieve(id: number | null, options?: RequestOptions): APIPromise<PropertyManager> {
    return this._client.get(path`/api/property-managers/${id}`, options);
  }

  /**
   * update an existing property manager by id, note that when updating contacts or
   * addresses you need to send the whole array you want to replace them with.
   */
  update(
    id: number | null,
    body: PropertyManagerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PropertyManager> {
    return this._client.patch(path`/api/property-managers/${id}`, { body, ...options });
  }

  /**
   * list all property managers, note this endpoint is paginated.
   */
  list(
    query: PropertyManagerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PropertyManagersPropertyManagersPagination, PropertyManager> {
    return this._client.getAPIList('/api/property-managers', PropertyManagersPagination<PropertyManager>, {
      query,
      ...options,
    });
  }

  /**
   * delete a property manager by id.
   */
  delete(id: number | null, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/property-managers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PropertyManagersPropertyManagersPagination = PropertyManagersPagination<PropertyManager>;

export interface Pagination {
  /**
   * Current page number.
   */
  page: number;

  /**
   * Total number of pages.
   */
  pages: number;

  /**
   * Total number of records.
   */
  records: number;

  /**
   * Number of items per page.
   */
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

export interface PropertyManagerCreateParams {
  addresses: Array<PropertyManagerCreateParams.Address>;

  contacts: Array<PropertyManagerCreateParams.Contact>;

  /**
   * name of the property manager
   */
  name: string;
}

export namespace PropertyManagerCreateParams {
  export interface Address extends TenantsAPI.Address {
    kind: 'billing' | 'legal' | 'mailing' | 'place of business' | 'marketing';
  }

  export interface Contact extends TenantsAPI.Contact {
    kind: 'agreements' | 'questions' | 'billing' | 'reporting';
  }
}

export interface PropertyManagerUpdateParams {
  addresses?: Array<PropertyManagerUpdateParams.Address>;

  contacts?: Array<PropertyManagerUpdateParams.Contact>;

  /**
   * name of the property manager
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

export interface PropertyManagerListParams extends PropertyManagersPaginationParams {}

export declare namespace PropertyManagers {
  export {
    type Pagination as Pagination,
    type PropertyManager as PropertyManager,
    type PropertyManagersPropertyManagersPagination as PropertyManagersPropertyManagersPagination,
    type PropertyManagerCreateParams as PropertyManagerCreateParams,
    type PropertyManagerUpdateParams as PropertyManagerUpdateParams,
    type PropertyManagerListParams as PropertyManagerListParams,
  };
}
