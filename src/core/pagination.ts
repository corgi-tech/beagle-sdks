// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BeagleError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type Beagle } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Beagle;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Beagle, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new BeagleError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Beagle,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface PropertyManagersPaginationResponse<Item> {
  propertyManagers: Array<Item>;

  pagination: PropertyManagersPaginationResponse.Pagination;
}

export namespace PropertyManagersPaginationResponse {
  export interface Pagination {
    /**
     * Current page number.
     */
    page?: number;

    /**
     * Total number of pages.
     */
    pages?: number;
  }
}

export interface PropertyManagersPaginationParams {
  /**
   * Page number to fetch.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  size?: number;
}

export class PropertyManagersPagination<Item>
  extends AbstractPage<Item>
  implements PropertyManagersPaginationResponse<Item>
{
  propertyManagers: Array<Item>;

  pagination: PropertyManagersPaginationResponse.Pagination;

  constructor(
    client: Beagle,
    response: Response,
    body: PropertyManagersPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.propertyManagers = body.propertyManagers || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.propertyManagers ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.pagination?.page;

    if (currentPage >= this.pagination?.pages) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}

export interface TenantsPaginationResponse<Item> {
  tenants: Array<Item>;

  pagination: TenantsPaginationResponse.Pagination;
}

export namespace TenantsPaginationResponse {
  export interface Pagination {
    /**
     * Current page number.
     */
    page?: number;

    /**
     * Total number of pages.
     */
    pages?: number;
  }
}

export interface TenantsPaginationParams {
  /**
   * Page number to fetch.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  size?: number;
}

export class TenantsPagination<Item> extends AbstractPage<Item> implements TenantsPaginationResponse<Item> {
  tenants: Array<Item>;

  pagination: TenantsPaginationResponse.Pagination;

  constructor(
    client: Beagle,
    response: Response,
    body: TenantsPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.tenants = body.tenants || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.tenants ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.pagination?.page;

    if (currentPage >= this.pagination?.pages) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}

export interface EnrollmentsPaginationResponse<Item> {
  enrollments: Array<Item>;

  pagination: EnrollmentsPaginationResponse.Pagination;
}

export namespace EnrollmentsPaginationResponse {
  export interface Pagination {
    /**
     * Current page number.
     */
    page?: number;

    /**
     * Total number of pages.
     */
    pages?: number;
  }
}

export interface EnrollmentsPaginationParams {
  /**
   * Page number to fetch.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  size?: number;
}

export class EnrollmentsPagination<Item>
  extends AbstractPage<Item>
  implements EnrollmentsPaginationResponse<Item>
{
  enrollments: Array<Item>;

  pagination: EnrollmentsPaginationResponse.Pagination;

  constructor(
    client: Beagle,
    response: Response,
    body: EnrollmentsPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.enrollments = body.enrollments || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.enrollments ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.pagination?.page;

    if (currentPage >= this.pagination?.pages) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}

export interface WebhookEndpointsPaginationResponse<Item> {
  endpoints: Array<Item>;

  pagination: WebhookEndpointsPaginationResponse.Pagination;
}

export namespace WebhookEndpointsPaginationResponse {
  export interface Pagination {
    /**
     * Current page number.
     */
    page?: number;

    /**
     * Total number of pages.
     */
    pages?: number;
  }
}

export interface WebhookEndpointsPaginationParams {
  /**
   * Page number to fetch.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  size?: number;
}

export class WebhookEndpointsPagination<Item>
  extends AbstractPage<Item>
  implements WebhookEndpointsPaginationResponse<Item>
{
  endpoints: Array<Item>;

  pagination: WebhookEndpointsPaginationResponse.Pagination;

  constructor(
    client: Beagle,
    response: Response,
    body: WebhookEndpointsPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.endpoints = body.endpoints || [];
    this.pagination = body.pagination || {};
  }

  getPaginatedItems(): Item[] {
    return this.endpoints ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const currentPage = this.pagination?.page;

    if (currentPage >= this.pagination?.pages) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}
