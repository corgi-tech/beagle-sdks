// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Retrieve a list of all plans or look up details by plan code. Each plan defines its name, description, rate, and any coverage values.
 */
export class Plans extends APIResource {
  /**
   * Retrieve a specific plan's details by its code. Plans are only returned when
   * they are available to your API key, and pricing can vary by client
   * configuration.
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<PlanRetrieveResponse> {
    return this._client.get(path`/api/plans/${code}`, options);
  }

  /**
   * List all insurance plans available to your API key. Plan availability, coverage
   * details, and pricing can vary by client configuration. Use the plan's name/code
   * when creating enrollments.
   */
  list(options?: RequestOptions): APIPromise<PlanListResponse> {
    return this._client.get('/api/plans', options);
  }
}

export interface Plan {
  description: string;

  /**
   * the plan's name/code, this is used when creating enrollments.
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
   * for approved-partner Rent Guarantee plans, the maximum monthly rent covered by
   * this rent band. Rent Guarantee plan codes use the format
   * RG*{term}M_RENT*{min}\_{max}; for example, RG_3M_RENT_750_1000 covers a 3-month
   * term with monthly rent from $750 to $1,000.
   */
  rentBandMax?: number;

  /**
   * for approved-partner Rent Guarantee plans, the minimum monthly rent covered by
   * this rent band.
   */
  rentBandMin?: number;

  /**
   * for approved-partner Rent Guarantee plans, the lease term in months. Match this
   * to the tenant's lease term when choosing a plan.
   */
  termMonths?: number;

  /**
   * general value field, this is currently used for SDR and SDD plans for the
   * replacement or discount value.
   */
  value?: number;
}

export interface PlanRetrieveResponse {
  data: Plan;

  success: true;
}

export interface PlanListResponse {
  data: Array<Plan>;

  success: true;
}

export declare namespace Plans {
  export {
    type Plan as Plan,
    type PlanRetrieveResponse as PlanRetrieveResponse,
    type PlanListResponse as PlanListResponse,
  };
}
