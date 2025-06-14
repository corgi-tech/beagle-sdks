// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Beagle } from '../client';

export abstract class APIResource {
  protected _client: Beagle;

  constructor(client: Beagle) {
    this._client = client;
  }
}
