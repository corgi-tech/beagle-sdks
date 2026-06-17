// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Beagle from '@corgi-tech/beagle';

const client = new Beagle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource propertyManagers', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.propertyManagers.create({
      addresses: [
        {
          city: 'South Salt Lake',
          state: 'UT',
          street1: '123 Electric Ave.',
          zip: '84115',
          kind: 'place of business',
        },
      ],
      contacts: [
        {
          email: 'mr.milchick@example.com',
          name: { first: 'Seth', last: 'Milchick' },
          kind: 'reporting',
        },
      ],
      name: 'Lumon Apartments',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.propertyManagers.create({
      addresses: [
        {
          city: 'South Salt Lake',
          state: 'UT',
          street1: '123 Electric Ave.',
          zip: '84115',
          street2: 'street2',
          kind: 'place of business',
        },
      ],
      contacts: [
        {
          email: 'mr.milchick@example.com',
          name: { first: 'Seth', last: 'Milchick' },
          phone: '(123) 456-7890',
          kind: 'reporting',
        },
      ],
      name: 'Lumon Apartments',
      clickWrapAt: 1773359774000,
      totalUnits: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.propertyManagers.retrieve(123);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.propertyManagers.update(123, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.propertyManagers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.propertyManagers.list({ page: 1, size: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Beagle.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.propertyManagers.delete(123);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
