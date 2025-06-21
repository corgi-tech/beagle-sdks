// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EndpointsAPI from './endpoints';
import {
  EndpointCreateParams,
  EndpointCreateResponse,
  EndpointListParams,
  EndpointListResponse,
  EndpointListResponsesWebhookEndpointsPagination,
  EndpointRetrieveResponse,
  EndpointUpdateParams,
  EndpointUpdateResponse,
  Endpoints,
} from './endpoints';

export class Webhook extends APIResource {
  endpoints: EndpointsAPI.Endpoints = new EndpointsAPI.Endpoints(this._client);
}

Webhook.Endpoints = Endpoints;

export declare namespace Webhook {
  export {
    Endpoints as Endpoints,
    type EndpointCreateResponse as EndpointCreateResponse,
    type EndpointRetrieveResponse as EndpointRetrieveResponse,
    type EndpointUpdateResponse as EndpointUpdateResponse,
    type EndpointListResponse as EndpointListResponse,
    type EndpointListResponsesWebhookEndpointsPagination as EndpointListResponsesWebhookEndpointsPagination,
    type EndpointCreateParams as EndpointCreateParams,
    type EndpointUpdateParams as EndpointUpdateParams,
    type EndpointListParams as EndpointListParams,
  };
}
