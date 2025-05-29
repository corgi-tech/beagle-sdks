// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Beagle from 'beagle';

const client = new Beagle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource propertyManagers', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.propertyManagers.create({
      addresses: [{ city: 'city', state: 'xx', street1: 'street1', zip: '60513', kind: 'billing' }],
      contacts: [{ email: 'dev@stainless.com', name: { first: 'first', last: 'last' }, kind: 'agreements' }],
      name: 'name',
      'x-api-token': 'x-api-token',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.propertyManagers.create({
      addresses: [
        { city: 'city', state: 'xx', street1: 'street1', zip: '60513', street2: 'street2', kind: 'billing' },
      ],
      contacts: [
        {
          email: 'dev@stainless.com',
          name: { first: 'first', last: 'last' },
          phone: 'phone',
          kind: 'agreements',
        },
      ],
      name: 'name',
      'x-api-token': 'x-api-token',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.propertyManagers.retrieve(42, { 'x-api-token': 'x-api-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.propertyManagers.retrieve(42, { 'x-api-token': 'x-api-token' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.propertyManagers.update(42, { 'x-api-token': 'x-api-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.propertyManagers.update(42, {
      'x-api-token': 'x-api-token',
      addresses: [
        { city: 'city', state: 'xx', street1: 'street1', zip: '60513', street2: 'street2', kind: 'billing' },
      ],
      contacts: [
        {
          email: 'dev@stainless.com',
          name: { first: 'first', last: 'last' },
          phone: 'phone',
          kind: 'agreements',
        },
      ],
      name: 'name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.propertyManagers.list({ 'x-api-token': 'x-api-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.propertyManagers.list({ 'x-api-token': 'x-api-token', page: 1, size: 1 });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.propertyManagers.delete(42, { 'x-api-token': 'x-api-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.propertyManagers.delete(42, { 'x-api-token': 'x-api-token' });
  });
});
