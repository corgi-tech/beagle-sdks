// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PropertyManagersAPI from './property-managers';
import * as TenantsAPI from './tenants';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Track and update your property managers. Create, list, retrieve, update, or delete property manager profiles. Each profile aggregates addresses and contact channels for billing, legal, and support.
 */
export class PropertyManagers extends APIResource {
  /**
   * create a new property manager.
   *
   * @example
   * ```ts
   * const propertyManager =
   *   await client.propertyManagers.create({
   *     addresses: [
   *       {
   *         city: 'South Salt Lake',
   *         state: 'UT',
   *         street1: '123 Electric Ave.',
   *         zip: '84115',
   *         kind: 'place of business',
   *       },
   *     ],
   *     contacts: [
   *       {
   *         email: 'mr.milchick@example.com',
   *         name: { first: 'Seth', last: 'Milchick' },
   *         kind: 'reporting',
   *       },
   *     ],
   *     name: 'Lumon Apartments',
   *   });
   * ```
   */
  create(
    body: PropertyManagerCreateParams,
    options?: RequestOptions,
  ): APIPromise<PropertyManagerCreateResponse> {
    return this._client.post('/api/property-managers', { body, ...options });
  }

  /**
   * get a property manager by id.
   *
   * @example
   * ```ts
   * const propertyManager =
   *   await client.propertyManagers.retrieve(123);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<PropertyManagerRetrieveResponse> {
    return this._client.get(path`/api/property-managers/${id}`, options);
  }

  /**
   * update an existing property manager by ID
   *
   * (Note that when updating **contacts** or **addresses** you need to send the
   * whole array you want to replace them with)
   *
   * @example
   * ```ts
   * const propertyManager =
   *   await client.propertyManagers.update(123);
   * ```
   */
  update(
    id: number,
    body: PropertyManagerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PropertyManagerUpdateResponse> {
    return this._client.patch(path`/api/property-managers/${id}`, { body, ...options });
  }

  /**
   * list all property managers, note this endpoint is paginated.
   *
   * @example
   * ```ts
   * const propertyManagers =
   *   await client.propertyManagers.list();
   * ```
   */
  list(
    query: PropertyManagerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PropertyManagerListResponse> {
    return this._client.get('/api/property-managers', { query, ...options });
  }

  /**
   * delete a property manager by ID.
   *
   * @example
   * ```ts
   * await client.propertyManagers.delete(123);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/property-managers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

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

  /**
   * street addresses for each Property
   */
  addresses: Array<PropertyManager.Address>;

  /**
   * contact information for each Property Manager
   */
  contacts: Array<PropertyManager.Contact>;

  /**
   * name of the Property Management Company
   */
  name: string;

  /**
   * unix timestamp (ms) of clickwrap agreement signature
   */
  clickWrapAt?: number;

  /**
   * total number of units managed by this property manager
   */
  totalUnits?: number;
}

export namespace PropertyManager {
  export interface Address extends TenantsAPI.Address {
    kind: 'billing' | 'legal' | 'mailing' | 'place of business' | 'marketing';
  }

  export interface Contact extends TenantsAPI.Contact {
    kind: 'agreements' | 'questions' | 'billing' | 'reporting';
  }
}

export interface PropertyManagerCreateResponse {
  data: PropertyManager;

  success: true;
}

export interface PropertyManagerRetrieveResponse {
  data: PropertyManager;

  success: true;
}

export interface PropertyManagerUpdateResponse {
  data: PropertyManager;

  success: true;
}

export interface PropertyManagerListResponse {
  data: PropertyManagerListResponse.Data;

  success: true;
}

export namespace PropertyManagerListResponse {
  export interface Data {
    items: Array<PropertyManagersAPI.PropertyManager>;

    pagination: PropertyManagersAPI.Pagination;
  }
}

export interface PropertyManagerCreateParams {
  /**
   * street addresses for each Property
   */
  addresses: Array<PropertyManagerCreateParams.Address>;

  /**
   * contact information for each Property Manager
   */
  contacts: Array<PropertyManagerCreateParams.Contact>;

  /**
   * name of the Property Management Company
   */
  name: string;

  /**
   * unix timestamp (ms) of clickwrap agreement signature
   */
  clickWrapAt?: number;

  /**
   * total number of units managed by this property manager
   */
  totalUnits?: number;
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
  /**
   * street addresses for each Property
   */
  addresses?: Array<PropertyManagerUpdateParams.Address>;

  /**
   * unix timestamp (ms) of clickwrap agreement signature
   */
  clickWrapAt?: number;

  /**
   * contact information for each Property Manager
   */
  contacts?: Array<PropertyManagerUpdateParams.Contact>;

  /**
   * name of the Property Management Company
   */
  name?: string;

  /**
   * total number of units managed by this property manager
   */
  totalUnits?: number;
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
   * Page number to fetch.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  size?: number;
}

export declare namespace PropertyManagers {
  export {
    type Pagination as Pagination,
    type PropertyManager as PropertyManager,
    type PropertyManagerCreateResponse as PropertyManagerCreateResponse,
    type PropertyManagerRetrieveResponse as PropertyManagerRetrieveResponse,
    type PropertyManagerUpdateResponse as PropertyManagerUpdateResponse,
    type PropertyManagerListResponse as PropertyManagerListResponse,
    type PropertyManagerCreateParams as PropertyManagerCreateParams,
    type PropertyManagerUpdateParams as PropertyManagerUpdateParams,
    type PropertyManagerListParams as PropertyManagerListParams,
  };
}
