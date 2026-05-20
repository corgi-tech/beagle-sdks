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
   * Retrieve a specific plan's details by its code. Rent Guarantee plans are priced
   * by lease term and monthly rent range, and are only available when enabled for
   * your API key. For example, RG*3M_RENT_750_1000 is a 3-month Rent Guarantee plan
   * for monthly rent between $750 and $1,000. Rent Guarantee plan codes use the
   * format RG*{term}M*RENT*{min}\_{max}.
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<PlanRetrieveResponse> {
    return this._client.get(path`/api/plans/${code}`, options);
  }

  /**
   * List all available insurance plans that tenants can be enrolled in. Rent
   * Guarantee plans are priced by lease term and monthly rent range. They are
   * client-specific and only appear when enabled for your API key. For example,
   * RG*3M_RENT_750_1000 is a 3-month Rent Guarantee plan for monthly rent between
   * $750 and $1,000. Rent Guarantee plan codes use the format
   * RG*{term}M*RENT*{min}\_{max}.
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
   * the maximum monthly rent for a Rent Guarantee plan band.
   */
  rentBandMax?: number;

  /**
   * the minimum monthly rent for a Rent Guarantee plan band.
   */
  rentBandMin?: number;

  /**
   * the Rent Guarantee plan term in months, when applicable.
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
