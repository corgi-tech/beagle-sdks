// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { EnrollmentsPagination, type EnrollmentsPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Enrollments extends APIResource {
  /**
   * create a new enrollment for a tenant.
   */
  create(body: EnrollmentCreateParams, options?: RequestOptions): APIPromise<Enrollment> {
    return this._client.post('/api/enrollments', { body, ...options });
  }

  /**
   * get a specific enrollment by its id.
   */
  retrieve(id: number | null, options?: RequestOptions): APIPromise<Enrollment> {
    return this._client.get(path`/api/enrollments/${id}`, options);
  }

  /**
   * list all enrollments, this endpoint is paginated and allows for queries by
   * individual property manager.
   */
  list(
    query: EnrollmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EnrollmentsEnrollmentsPagination, Enrollment> {
    return this._client.getAPIList('/api/enrollments', EnrollmentsPagination<Enrollment>, {
      query,
      ...options,
    });
  }

  /**
   * lapses a specific enrollment for a tenant, note that if a tenant has multiple
   * enrollments (e.g., SDR and TLL), each must be lapsed individually
   */
  lapse(id: number | null, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/enrollments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EnrollmentsEnrollmentsPagination = EnrollmentsPagination<Enrollment>;

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

export interface EnrollmentCreateParams {
  /**
   * the date the enrollment will begin, note enrollments cannot begin in the past
   */
  effectiveDate: string;

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

export interface EnrollmentListParams extends EnrollmentsPaginationParams {
  propertyManagerId?: number;
}

export declare namespace Enrollments {
  export {
    type Enrollment as Enrollment,
    type EnrollmentsEnrollmentsPagination as EnrollmentsEnrollmentsPagination,
    type EnrollmentCreateParams as EnrollmentCreateParams,
    type EnrollmentListParams as EnrollmentListParams,
  };
}
