// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Beagle from 'beagle';

const client = new Beagle({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource enrollments', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.enrollments.create({
      effectiveDate: 'effectiveDate',
      plan: 'plan',
      propertyManagerId: 0,
      tenantId: 0,
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
    const response = await client.enrollments.create({
      effectiveDate: 'effectiveDate',
      plan: 'plan',
      propertyManagerId: 0,
      tenantId: 0,
      'x-api-token': 'x-api-token',
      note: 'note',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.enrollments.retrieve(42, { 'x-api-token': 'x-api-token' });
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
    const response = await client.enrollments.retrieve(42, { 'x-api-token': 'x-api-token' });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.enrollments.list({ 'x-api-token': 'x-api-token' });
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
    const response = await client.enrollments.list({
      'x-api-token': 'x-api-token',
      page: 1,
      propertyManagerId: 1,
      size: 1,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('lapse: only required params', async () => {
    const responsePromise = client.enrollments.lapse(42, { 'x-api-token': 'x-api-token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('lapse: required and optional params', async () => {
    const response = await client.enrollments.lapse(42, { 'x-api-token': 'x-api-token' });
  });
});
