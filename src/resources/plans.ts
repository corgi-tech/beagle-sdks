// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Plans extends APIResource {
  /**
   * retrieve a specific plans details by its code.
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<Plan> {
    return this._client.get(path`/api/plans/${code}`, options);
  }

  /**
   * list all available plans, note this endpoint is currently unpaginated unlike all
   * other list endpoints.
   */
  list(options?: RequestOptions): APIPromise<PlanListResponse> {
    return this._client.get('/api/plans', options);
  }
}

export interface Plan {
  description: string;

  /**
   * the plans name/code, this is used when creating enrollments.
   */
  name: string;

  /**
   * the price of the plan
   */
  rate: number;

  /**
   * value of contents replacement, note this is only on some TLL plans.
   */
  contents?: number;

  /**
   * value of liability waived, note this is only on TLL plans.
   */
  liability?: number;

  /**
   * general value field, this is currently used for SDR and SDD plans for the
   * replacement or discount value.
   */
  value?: number;
}

export type PlanListResponse = Array<Plan>;

export declare namespace Plans {
  export { type Plan as Plan, type PlanListResponse as PlanListResponse };
}
