// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PropertyManagersAPI from '../property-managers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Endpoints extends APIResource {
  /**
   * creates a new webhook target.
   */
  create(body: EndpointCreateParams, options?: RequestOptions): APIPromise<EndpointCreateResponse> {
    return this._client.post('/api/webhook/endpoints', { body, ...options });
  }

  /**
   * retrieve a single webhook endpoint by its id.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<EndpointRetrieveResponse> {
    return this._client.get(path`/api/webhook/endpoints/${id}`, options);
  }

  /**
   * update an existing webhook endpoint by its id.
   */
  update(
    id: number,
    body: EndpointUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EndpointUpdateResponse> {
    return this._client.patch(path`/api/webhook/endpoints/${id}`, { body, ...options });
  }

  /**
   * list all webhook endpoints, this endpoint is paginated and allows for queries by
   * individual property manager.
   */
  list(
    query: EndpointListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EndpointListResponse> {
    return this._client.get('/api/webhook/endpoints', { query, ...options });
  }

  /**
   * delete an existing webhook endpoint by its id.
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/webhook/endpoints/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EndpointCreateResponse {
  data: EndpointCreateResponse.Data;

  success: true;
}

export namespace EndpointCreateResponse {
  export interface Data {
    id: number;

    active: boolean;

    companyId: number;

    createdAt: string;

    updatedAt: string;

    url: string;
  }
}

export interface EndpointRetrieveResponse {
  data: EndpointRetrieveResponse.Data;

  success: true;
}

export namespace EndpointRetrieveResponse {
  export interface Data {
    id: number;

    active: boolean;

    companyId: number;

    createdAt: string;

    updatedAt: string;

    url: string;
  }
}

export interface EndpointUpdateResponse {
  data: EndpointUpdateResponse.Data;

  success: true;
}

export namespace EndpointUpdateResponse {
  export interface Data {
    id: number;

    active: boolean;

    companyId: number;

    createdAt: string;

    updatedAt: string;

    url: string;
  }
}

export interface EndpointListResponse {
  data: EndpointListResponse.Data;

  success: true;
}

export namespace EndpointListResponse {
  export interface Data {
    items: Array<Data.Item>;

    pagination: PropertyManagersAPI.Pagination;
  }

  export namespace Data {
    export interface Item {
      id: number;

      active: boolean;

      companyId: number;

      createdAt: string;

      updatedAt: string;

      url: string;
    }
  }
}

export interface EndpointCreateParams {
  secret: string;

  url: string;

  active?: boolean;
}

export interface EndpointUpdateParams {
  secret: string;

  url: string;

  active?: boolean;
}

export interface EndpointListParams {
  /**
   * Page number to fetch.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  size?: number;
}

export declare namespace Endpoints {
  export {
    type EndpointCreateResponse as EndpointCreateResponse,
    type EndpointRetrieveResponse as EndpointRetrieveResponse,
    type EndpointUpdateResponse as EndpointUpdateResponse,
    type EndpointListResponse as EndpointListResponse,
    type EndpointCreateParams as EndpointCreateParams,
    type EndpointUpdateParams as EndpointUpdateParams,
    type EndpointListParams as EndpointListParams,
  };
}
