// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class InsuranceVerification extends APIResource {
  /**
   * trigger a job to parse a tenants insurance document(s)
   */
  verify(
    body: InsuranceVerificationVerifyParams,
    options?: RequestOptions,
  ): APIPromise<InsuranceVerificationVerifyResponse> {
    return this._client.post('/api/insurance-verification', { body, ...options });
  }
}

export interface InsuranceVerificationVerifyResponse {
  message: 'insurance verification job scheduled';
}

export interface InsuranceVerificationVerifyParams {
  propertyManagerId: number;

  tenantId: number;

  /**
   * an array of presigned pdf urls for the tenants policy document(s)
   */
  urls: Array<string>;
}

export declare namespace InsuranceVerification {
  export {
    type InsuranceVerificationVerifyResponse as InsuranceVerificationVerifyResponse,
    type InsuranceVerificationVerifyParams as InsuranceVerificationVerifyParams,
  };
}
