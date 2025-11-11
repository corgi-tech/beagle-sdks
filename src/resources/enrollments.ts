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
   *
   * @example
   * ```ts
   * const enrollment = await client.enrollments.create({
   *   effectiveDate: 'effectiveDate',
   *   plan: 'plan',
   *   propertyManagerId: 0,
   *   status: 'Premium Paying',
   *   tenantId: 0,
   * });
   * ```
   */
  create(body: EnrollmentCreateParams, options?: RequestOptions): APIPromise<Enrollment> {
    return this._client.post('/api/enrollments', { body, ...options });
  }

  /**
   * get a specific enrollment by its id.
   *
   * @example
   * ```ts
   * const enrollment = await client.enrollments.retrieve(123);
   * ```
   */
  retrieve(id: number | null, options?: RequestOptions): APIPromise<Enrollment> {
    return this._client.get(path`/api/enrollments/${id}`, options);
  }

  /**
   * list all enrollments, this endpoint is paginated and allows for queries by
   * individual property manager.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const enrollment of client.enrollments.list()) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * await client.enrollments.lapse(123);
   * ```
   */
  lapse(id: number | null, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/enrollments/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * get the certificate of enrollment for a given enrollment
   *
   * @example
   * ```ts
   * const response =
   *   await client.enrollments.retrieveCertificate(123);
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveCertificate(id: number | null, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/enrollments/${id}/certificate`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
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

  status:
    | 'Premium Paying'
    | 'Issued, Not Paid'
    | 'Expired'
    | 'Lapsed'
    | 'Suspended'
    | 'Cancelled'
    | 'Not taken'
    | 'Declined';

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

  status:
    | 'Premium Paying'
    | 'Issued, Not Paid'
    | 'Expired'
    | 'Lapsed'
    | 'Suspended'
    | 'Cancelled'
    | 'Not taken'
    | 'Declined';

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
