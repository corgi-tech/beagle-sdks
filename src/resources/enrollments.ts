// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PropertyManagersAPI from './property-managers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Enrollments extends APIResource {
  /**
   * create a new enrollment for a tenant.
   */
  create(params: EnrollmentCreateParams, options?: RequestOptions): APIPromise<Enrollment> {
    const { 'x-api-token': xAPIToken, ...body } = params;
    return this._client.post('/api/enrollments', {
      body,
      ...options,
      headers: buildHeaders([{ 'x-api-token': xAPIToken }, options?.headers]),
    });
  }

  /**
   * get a specific enrollment by its id.
   */
  retrieve(id: number, params: EnrollmentRetrieveParams, options?: RequestOptions): APIPromise<Enrollment> {
    const { 'x-api-token': xAPIToken } = params;
    return this._client.get(path`/api/enrollments/${id}`, {
      ...options,
      headers: buildHeaders([{ 'x-api-token': xAPIToken }, options?.headers]),
    });
  }

  /**
   * list all enrollments, this endpoint is paginated and allows for queries by
   * individual property manager.
   */
  list(params: EnrollmentListParams, options?: RequestOptions): APIPromise<EnrollmentListResponse> {
    const { 'x-api-token': xAPIToken, ...query } = params;
    return this._client.get('/api/enrollments', {
      query,
      ...options,
      headers: buildHeaders([{ 'x-api-token': xAPIToken }, options?.headers]),
    });
  }

  /**
   * lapses a specific enrollment for a tenant, note that if a tenant has multiple
   * enrollments (e.g., SDR and TLL), each must be lapsed individually
   */
  lapse(id: number, params: EnrollmentLapseParams, options?: RequestOptions): APIPromise<void> {
    const { 'x-api-token': xAPIToken } = params;
    return this._client.delete(path`/api/enrollments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'x-api-token': xAPIToken }, options?.headers]),
    });
  }
}

export interface Enrollment {
  id: number;

  /**
   * the date the enrollment will begin, note enrollments cannot begin in the past
   */
  effectiveDate: string | null;

  /**
   * the plan name/code
   */
  plan: string;

  propertyManagerId: number;

  tenantId: number;

  /**
   * an optional note field, this can be used for easily appending metadata to
   * enrollments
   */
  note?: string;
}

export interface EnrollmentListResponse {
  enrollments: Array<Enrollment>;

  pagination: PropertyManagersAPI.Pagination;
}

export interface EnrollmentCreateParams {
  /**
   * Body param: the date the enrollment will begin, note enrollments cannot begin in
   * the past
   */
  effectiveDate: string;

  /**
   * Body param: the plan name/code
   */
  plan: string;

  /**
   * Body param:
   */
  propertyManagerId: number;

  /**
   * Body param:
   */
  tenantId: number;

  /**
   * Header param:
   */
  'x-api-token': string;

  /**
   * Body param: an optional note field, this can be used for easily appending
   * metadata to enrollments
   */
  note?: string;
}

export interface EnrollmentRetrieveParams {
  'x-api-token': string;
}

export interface EnrollmentListParams {
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

export interface EnrollmentLapseParams {
  'x-api-token': string;
}

export declare namespace Enrollments {
  export {
    type Enrollment as Enrollment,
    type EnrollmentListResponse as EnrollmentListResponse,
    type EnrollmentCreateParams as EnrollmentCreateParams,
    type EnrollmentRetrieveParams as EnrollmentRetrieveParams,
    type EnrollmentListParams as EnrollmentListParams,
    type EnrollmentLapseParams as EnrollmentLapseParams,
  };
}
