// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EndpointsAPI from './endpoints';
import { Endpoints } from './endpoints';

export class Webhook extends APIResource {
  endpoints: EndpointsAPI.Endpoints = new EndpointsAPI.Endpoints(this._client);
}

Webhook.Endpoints = Endpoints;

export declare namespace Webhook {
  export { Endpoints as Endpoints };
}
