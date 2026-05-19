// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/api/plans',
    httpMethod: 'get',
    summary: 'List Plans',
    description: 'List all available insurance plans that tenants can be enrolled in.',
    stainlessPath: '(resource) plans > (method) list',
    qualified: 'client.plans.list',
    response:
      '{ data: { description: string; name: string; rate: number; contents?: number; liability?: number; rentBandMax?: number; rentBandMin?: number; termMonths?: number; value?: number; }[]; success: true; }',
    markdown:
      "## list\n\n`client.plans.list(): { data: plan[]; success: true; }`\n\n**get** `/api/plans`\n\nList all available insurance plans that tenants can be enrolled in.\n\n### Returns\n\n- `{ data: { description: string; name: string; rate: number; contents?: number; liability?: number; rentBandMax?: number; rentBandMin?: number; termMonths?: number; value?: number; }[]; success: true; }`\n\n  - `data: { description: string; name: string; rate: number; contents?: number; liability?: number; rentBandMax?: number; rentBandMin?: number; termMonths?: number; value?: number; }[]`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst plans = await client.plans.list();\n\nconsole.log(plans);\n```",
    perLanguage: {
      typescript: {
        method: 'client.plans.list',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst plans = await client.plans.list();\n\nconsole.log(plans.data);",
      },
      python: {
        method: 'plans.list',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nplans = client.plans.list()\nprint(plans.data)',
      },
      java: {
        method: 'plans().list',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.plans.PlanListParams;\nimport com.beagle.api.models.plans.PlanListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        PlanListResponse plans = client.plans().list();\n    }\n}',
      },
      go: {
        method: 'client.Plans.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplans, err := client.Plans.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", plans.Data)\n}\n',
      },
      ruby: {
        method: 'plans.list',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nplans = beagle.plans.list\n\nputs(plans)',
      },
      csharp: {
        method: 'Plans.List',
        example:
          'PlanListParams parameters = new();\n\nvar plans = await client.Plans.List(parameters);\n\nConsole.WriteLine(plans);',
      },
      http: {
        example: 'curl https://developer.beagleforpm.com/api/plans \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/plans/{code}',
    httpMethod: 'get',
    summary: 'Get Plan',
    description: 'retrieve a specific plans details by its code.',
    stainlessPath: '(resource) plans > (method) retrieve',
    qualified: 'client.plans.retrieve',
    params: ['code: string;'],
    response:
      '{ data: { description: string; name: string; rate: number; contents?: number; liability?: number; rentBandMax?: number; rentBandMin?: number; termMonths?: number; value?: number; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.plans.retrieve(code: string): { data: plan; success: true; }`\n\n**get** `/api/plans/{code}`\n\nretrieve a specific plans details by its code.\n\n### Parameters\n\n- `code: string`\n\n### Returns\n\n- `{ data: { description: string; name: string; rate: number; contents?: number; liability?: number; rentBandMax?: number; rentBandMin?: number; termMonths?: number; value?: number; }; success: true; }`\n\n  - `data: { description: string; name: string; rate: number; contents?: number; liability?: number; rentBandMax?: number; rentBandMin?: number; termMonths?: number; value?: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst plan = await client.plans.retrieve('code');\n\nconsole.log(plan);\n```",
    perLanguage: {
      typescript: {
        method: 'client.plans.retrieve',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst plan = await client.plans.retrieve('code');\n\nconsole.log(plan.data);",
      },
      python: {
        method: 'plans.retrieve',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nplan = client.plans.retrieve(\n    "code",\n)\nprint(plan.data)',
      },
      java: {
        method: 'plans().retrieve',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.plans.PlanRetrieveParams;\nimport com.beagle.api.models.plans.PlanRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        PlanRetrieveResponse plan = client.plans().retrieve("code");\n    }\n}',
      },
      go: {
        method: 'client.Plans.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplan, err := client.Plans.Get(context.TODO(), "code")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", plan.Data)\n}\n',
      },
      ruby: {
        method: 'plans.retrieve',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nplan = beagle.plans.retrieve("code")\n\nputs(plan)',
      },
      csharp: {
        method: 'Plans.Retrieve',
        example:
          'PlanRetrieveParams parameters = new() { Code = "code" };\n\nvar plan = await client.Plans.Retrieve(parameters);\n\nConsole.WriteLine(plan);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/plans/$CODE \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/property-managers/{id}',
    httpMethod: 'get',
    summary: 'Get Property Manager',
    description: 'get a property manager by id.',
    stainlessPath: '(resource) property_managers > (method) retrieve',
    qualified: 'client.propertyManagers.retrieve',
    params: ['id: number;'],
    response:
      '{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; totalUnits?: number; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.propertyManagers.retrieve(id: number): { data: property_manager; success: true; }`\n\n**get** `/api/property-managers/{id}`\n\nget a property manager by id.\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; totalUnits?: number; }; success: true; }`\n\n  - `data: { id: number; addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[]; contacts: { email: string; name: object; phone?: string; }[]; name: string; clickWrapAt?: number; totalUnits?: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst propertyManager = await client.propertyManagers.retrieve(123);\n\nconsole.log(propertyManager);\n```",
    perLanguage: {
      typescript: {
        method: 'client.propertyManagers.retrieve',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst propertyManager = await client.propertyManagers.retrieve(123);\n\nconsole.log(propertyManager.data);",
      },
      python: {
        method: 'property_managers.retrieve',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nproperty_manager = client.property_managers.retrieve(\n    123,\n)\nprint(property_manager.data)',
      },
      java: {
        method: 'propertyManagers().retrieve',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.propertymanagers.PropertyManagerRetrieveParams;\nimport com.beagle.api.models.propertymanagers.PropertyManagerRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        PropertyManagerRetrieveResponse propertyManager = client.propertyManagers().retrieve(123.0);\n    }\n}',
      },
      go: {
        method: 'client.PropertyManagers.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpropertyManager, err := client.PropertyManagers.Get(context.TODO(), 123)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", propertyManager.Data)\n}\n',
      },
      ruby: {
        method: 'property_managers.retrieve',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproperty_manager = beagle.property_managers.retrieve(123)\n\nputs(property_manager)',
      },
      csharp: {
        method: 'PropertyManagers.Retrieve',
        example:
          'PropertyManagerRetrieveParams parameters = new() { ID = 123 };\n\nvar propertyManager = await client.PropertyManagers.Retrieve(parameters);\n\nConsole.WriteLine(propertyManager);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/property-managers/$ID \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/property-managers/{id}',
    httpMethod: 'patch',
    summary: 'Update Property Manager',
    description:
      'update an existing property manager by ID\n\n(Note that when updating **contacts** or **addresses** you need to send the whole array you want to replace them with)',
    stainlessPath: '(resource) property_managers > (method) update',
    qualified: 'client.propertyManagers.update',
    params: [
      'id: number;',
      'addresses?: { city: string; state: string; street1: string; zip: string; street2?: string; }[];',
      'clickWrapAt?: number;',
      'contacts?: { email: string; name: { first: string; last: string; }; phone?: string; }[];',
      'name?: string;',
      'totalUnits?: number;',
    ],
    response:
      '{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; totalUnits?: number; }; success: true; }',
    markdown:
      "## update\n\n`client.propertyManagers.update(id: number, addresses?: { city: string; state: string; street1: string; zip: string; street2?: string; }[], clickWrapAt?: number, contacts?: { email: string; name: object; phone?: string; }[], name?: string, totalUnits?: number): { data: property_manager; success: true; }`\n\n**patch** `/api/property-managers/{id}`\n\nupdate an existing property manager by ID\n\n(Note that when updating **contacts** or **addresses** you need to send the whole array you want to replace them with)\n\n### Parameters\n\n- `id: number`\n\n- `addresses?: { city: string; state: string; street1: string; zip: string; street2?: string; }[]`\n  street addresses for each Property\n\n- `clickWrapAt?: number`\n  unix timestamp (ms) of clickwrap agreement signature\n\n- `contacts?: { email: string; name: { first: string; last: string; }; phone?: string; }[]`\n  contact information for each Property Manager\n\n- `name?: string`\n  name of the Property Management Company\n\n- `totalUnits?: number`\n  total number of units managed by this property manager\n\n### Returns\n\n- `{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; totalUnits?: number; }; success: true; }`\n\n  - `data: { id: number; addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[]; contacts: { email: string; name: object; phone?: string; }[]; name: string; clickWrapAt?: number; totalUnits?: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst propertyManager = await client.propertyManagers.update(123);\n\nconsole.log(propertyManager);\n```",
    perLanguage: {
      typescript: {
        method: 'client.propertyManagers.update',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst propertyManager = await client.propertyManagers.update(123);\n\nconsole.log(propertyManager.data);",
      },
      python: {
        method: 'property_managers.update',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nproperty_manager = client.property_managers.update(\n    id=123,\n)\nprint(property_manager.data)',
      },
      java: {
        method: 'propertyManagers().update',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.propertymanagers.PropertyManagerUpdateParams;\nimport com.beagle.api.models.propertymanagers.PropertyManagerUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        PropertyManagerUpdateResponse propertyManager = client.propertyManagers().update(123.0);\n    }\n}',
      },
      go: {
        method: 'client.PropertyManagers.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpropertyManager, err := client.PropertyManagers.Update(\n\t\tcontext.TODO(),\n\t\t123,\n\t\tbeagle.PropertyManagerUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", propertyManager.Data)\n}\n',
      },
      ruby: {
        method: 'property_managers.update',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproperty_manager = beagle.property_managers.update(123)\n\nputs(property_manager)',
      },
      csharp: {
        method: 'PropertyManagers.Update',
        example:
          'PropertyManagerUpdateParams parameters = new() { ID = 123 };\n\nvar propertyManager = await client.PropertyManagers.Update(parameters);\n\nConsole.WriteLine(propertyManager);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/property-managers/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $BEAGLE_API_KEY" \\\n    -d \'{\n          "addresses": [\n            {\n              "city": "South Salt Lake",\n              "state": "UT",\n              "street1": "123 Electric Ave.",\n              "zip": "84115",\n              "kind": "place of business"\n            }\n          ],\n          "clickWrapAt": 1773359774000,\n          "contacts": [\n            {\n              "email": "mr.milchick@example.com",\n              "name": {\n                "first": "Seth",\n                "last": "Milchick"\n              },\n              "phone": "(123) 456-7890",\n              "kind": "reporting"\n            }\n          ],\n          "name": "Lumon Apartments"\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/property-managers/{id}',
    httpMethod: 'delete',
    summary: 'Delete Property Manager',
    description: 'delete a property manager by ID.',
    stainlessPath: '(resource) property_managers > (method) delete',
    qualified: 'client.propertyManagers.delete',
    params: ['id: number;'],
    markdown:
      "## delete\n\n`client.propertyManagers.delete(id: number): void`\n\n**delete** `/api/property-managers/{id}`\n\ndelete a property manager by ID.\n\n### Parameters\n\n- `id: number`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nawait client.propertyManagers.delete(123)\n```",
    perLanguage: {
      typescript: {
        method: 'client.propertyManagers.delete',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.propertyManagers.delete(123);",
      },
      python: {
        method: 'property_managers.delete',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nclient.property_managers.delete(\n    123,\n)',
      },
      java: {
        method: 'propertyManagers().delete',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.propertymanagers.PropertyManagerDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        client.propertyManagers().delete(123.0);\n    }\n}',
      },
      go: {
        method: 'client.PropertyManagers.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.PropertyManagers.Delete(context.TODO(), 123)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'property_managers.delete',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nresult = beagle.property_managers.delete(123)\n\nputs(result)',
      },
      csharp: {
        method: 'PropertyManagers.Delete',
        example:
          'PropertyManagerDeleteParams parameters = new() { ID = 123 };\n\nawait client.PropertyManagers.Delete(parameters);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/property-managers/$ID \\\n    -X DELETE \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/property-managers',
    httpMethod: 'get',
    summary: 'List Property Managers',
    description: 'list all property managers, note this endpoint is paginated.',
    stainlessPath: '(resource) property_managers > (method) list',
    qualified: 'client.propertyManagers.list',
    params: ['page?: number;', 'size?: number;'],
    response: '{ data: { items: object[]; pagination: object; }; success: true; }',
    markdown:
      "## list\n\n`client.propertyManagers.list(page?: number, size?: number): { data: object; success: true; }`\n\n**get** `/api/property-managers`\n\nlist all property managers, note this endpoint is paginated.\n\n### Parameters\n\n- `page?: number`\n  Page number to fetch.\n\n- `size?: number`\n  Number of items per page.\n\n### Returns\n\n- `{ data: { items: object[]; pagination: object; }; success: true; }`\n\n  - `data: { items: { id: number; addresses: object[]; contacts: object[]; name: string; clickWrapAt?: number; totalUnits?: number; }[]; pagination: { page: number; pages: number; records: number; size: number; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst propertyManagers = await client.propertyManagers.list();\n\nconsole.log(propertyManagers);\n```",
    perLanguage: {
      typescript: {
        method: 'client.propertyManagers.list',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst propertyManagers = await client.propertyManagers.list();\n\nconsole.log(propertyManagers.data);",
      },
      python: {
        method: 'property_managers.list',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nproperty_managers = client.property_managers.list()\nprint(property_managers.data)',
      },
      java: {
        method: 'propertyManagers().list',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.propertymanagers.PropertyManagerListParams;\nimport com.beagle.api.models.propertymanagers.PropertyManagerListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        PropertyManagerListResponse propertyManagers = client.propertyManagers().list();\n    }\n}',
      },
      go: {
        method: 'client.PropertyManagers.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpropertyManagers, err := client.PropertyManagers.List(context.TODO(), beagle.PropertyManagerListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", propertyManagers.Data)\n}\n',
      },
      ruby: {
        method: 'property_managers.list',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproperty_managers = beagle.property_managers.list\n\nputs(property_managers)',
      },
      csharp: {
        method: 'PropertyManagers.List',
        example:
          'PropertyManagerListParams parameters = new();\n\nvar propertyManagers = await client.PropertyManagers.List(parameters);\n\nConsole.WriteLine(propertyManagers);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/property-managers \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/property-managers',
    httpMethod: 'post',
    summary: 'Create Property Manager',
    description: 'create a new property manager.',
    stainlessPath: '(resource) property_managers > (method) create',
    qualified: 'client.propertyManagers.create',
    params: [
      'addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[];',
      'contacts: { email: string; name: { first: string; last: string; }; phone?: string; }[];',
      'name: string;',
      'clickWrapAt?: number;',
      'totalUnits?: number;',
    ],
    response:
      '{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; totalUnits?: number; }; success: true; }',
    markdown:
      "## create\n\n`client.propertyManagers.create(addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[], contacts: { email: string; name: object; phone?: string; }[], name: string, clickWrapAt?: number, totalUnits?: number): { data: property_manager; success: true; }`\n\n**post** `/api/property-managers`\n\ncreate a new property manager.\n\n### Parameters\n\n- `addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[]`\n  street addresses for each Property\n\n- `contacts: { email: string; name: { first: string; last: string; }; phone?: string; }[]`\n  contact information for each Property Manager\n\n- `name: string`\n  name of the Property Management Company\n\n- `clickWrapAt?: number`\n  unix timestamp (ms) of clickwrap agreement signature\n\n- `totalUnits?: number`\n  total number of units managed by this property manager\n\n### Returns\n\n- `{ data: { id: number; addresses: address[]; contacts: contact[]; name: string; clickWrapAt?: number; totalUnits?: number; }; success: true; }`\n\n  - `data: { id: number; addresses: { city: string; state: string; street1: string; zip: string; street2?: string; }[]; contacts: { email: string; name: object; phone?: string; }[]; name: string; clickWrapAt?: number; totalUnits?: number; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst propertyManager = await client.propertyManagers.create({\n  addresses: [{\n  city: 'South Salt Lake',\n  state: 'UT',\n  street1: '123 Electric Ave.',\n  zip: '84115',\n  kind: 'place of business',\n}],\n  contacts: [{\n  email: 'mr.milchick@example.com',\n  name: { first: 'Seth', last: 'Milchick' },\n  kind: 'reporting',\n}],\n  name: 'Lumon Apartments',\n});\n\nconsole.log(propertyManager);\n```",
    perLanguage: {
      typescript: {
        method: 'client.propertyManagers.create',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst propertyManager = await client.propertyManagers.create({\n  addresses: [\n    {\n      city: 'South Salt Lake',\n      state: 'UT',\n      street1: '123 Electric Ave.',\n      zip: '84115',\n      kind: 'place of business',\n    },\n  ],\n  contacts: [\n    {\n      email: 'mr.milchick@example.com',\n      name: { first: 'Seth', last: 'Milchick' },\n      kind: 'reporting',\n    },\n  ],\n  name: 'Lumon Apartments',\n});\n\nconsole.log(propertyManager.data);",
      },
      python: {
        method: 'property_managers.create',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nproperty_manager = client.property_managers.create(\n    addresses=[{\n        "city": "South Salt Lake",\n        "state": "UT",\n        "street1": "123 Electric Ave.",\n        "zip": "84115",\n        "kind": "place of business",\n    }],\n    contacts=[{\n        "email": "mr.milchick@example.com",\n        "name": {\n            "first": "Seth",\n            "last": "Milchick",\n        },\n        "kind": "reporting",\n    }],\n    name="Lumon Apartments",\n)\nprint(property_manager.data)',
      },
      java: {
        method: 'propertyManagers().create',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.propertymanagers.PropertyManagerCreateParams;\nimport com.beagle.api.models.propertymanagers.PropertyManagerCreateResponse;\nimport com.beagle.api.models.tenants.Contact;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        PropertyManagerCreateParams params = PropertyManagerCreateParams.builder()\n            .addAddress(PropertyManagerCreateParams.Address.builder()\n                .city("South Salt Lake")\n                .state("UT")\n                .street1("123 Electric Ave.")\n                .zip("84115")\n                .kind(PropertyManagerCreateParams.Address.Kind.PLACE_OF_BUSINESS)\n                .build())\n            .addContact(PropertyManagerCreateParams.Contact.builder()\n                .email("mr.milchick@example.com")\n                .name(Contact.Name.builder()\n                    .first("Seth")\n                    .last("Milchick")\n                    .build())\n                .kind(PropertyManagerCreateParams.Contact.Kind.REPORTING)\n                .build())\n            .name("Lumon Apartments")\n            .build();\n        PropertyManagerCreateResponse propertyManager = client.propertyManagers().create(params);\n    }\n}',
      },
      go: {
        method: 'client.PropertyManagers.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpropertyManager, err := client.PropertyManagers.New(context.TODO(), beagle.PropertyManagerNewParams{\n\t\tAddresses: []beagle.PropertyManagerNewParamsAddress{{\n\t\t\tAddressParam: beagle.AddressParam{\n\t\t\t\tCity:    "South Salt Lake",\n\t\t\t\tState:   "UT",\n\t\t\t\tStreet1: "123 Electric Ave.",\n\t\t\t\tZip:     "84115",\n\t\t\t},\n\t\t\tKind: "place of business",\n\t\t}},\n\t\tContacts: []beagle.PropertyManagerNewParamsContact{{\n\t\t\tContactParam: beagle.ContactParam{\n\t\t\t\tEmail: "mr.milchick@example.com",\n\t\t\t\tName: beagle.ContactNameParam{\n\t\t\t\t\tFirst: "Seth",\n\t\t\t\t\tLast:  "Milchick",\n\t\t\t\t},\n\t\t\t},\n\t\t\tKind: "reporting",\n\t\t}},\n\t\tName: "Lumon Apartments",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", propertyManager.Data)\n}\n',
      },
      ruby: {
        method: 'property_managers.create',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nproperty_manager = beagle.property_managers.create(\n  addresses: [\n    {city: "South Salt Lake", state: "UT", street1: "123 Electric Ave.", zip: "84115", kind: :"place of business"}\n  ],\n  contacts: [{email: "mr.milchick@example.com", name: {first: "Seth", last: "Milchick"}, kind: :reporting}],\n  name: "Lumon Apartments"\n)\n\nputs(property_manager)',
      },
      csharp: {
        method: 'PropertyManagers.Create',
        example:
          'PropertyManagerCreateParams parameters = new()\n{\n    Addresses =\n    [\n        new()\n        {\n            City = "South Salt Lake",\n            State = "UT",\n            Street1 = "123 Electric Ave.",\n            Zip = "84115",\n            Street2 = "street2",\n            Kind = Kind.PlaceOfBusiness,\n        },\n    ],\n    Contacts =\n    [\n        new()\n        {\n            Email = "mr.milchick@example.com",\n            Name = new()\n            {\n                First = "Seth",\n                Last = "Milchick",\n            },\n            Phone = "(123) 456-7890",\n            Kind = Kind.Reporting,\n        },\n    ],\n    Name = "Lumon Apartments",\n};\n\nvar propertyManager = await client.PropertyManagers.Create(parameters);\n\nConsole.WriteLine(propertyManager);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/property-managers \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $BEAGLE_API_KEY" \\\n    -d \'{\n          "addresses": [\n            {\n              "city": "South Salt Lake",\n              "state": "UT",\n              "street1": "123 Electric Ave.",\n              "zip": "84115",\n              "kind": "place of business"\n            }\n          ],\n          "contacts": [\n            {\n              "email": "mr.milchick@example.com",\n              "name": {\n                "first": "Seth",\n                "last": "Milchick"\n              },\n              "phone": "(123) 456-7890",\n              "kind": "reporting"\n            }\n          ],\n          "name": "Lumon Apartments",\n          "clickWrapAt": 1773359774000\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/tenants/{id}',
    httpMethod: 'get',
    summary: 'Get Tenant',
    description: 'retrieve a single tenant by their id.',
    stainlessPath: '(resource) tenants > (method) retrieve',
    qualified: 'client.tenants.retrieve',
    params: ['id: number;'],
    response:
      '{ data: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.tenants.retrieve(id: number): { data: tenant; success: true; }`\n\n**get** `/api/tenants/{id}`\n\nretrieve a single tenant by their id.\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ data: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }; success: true; }`\n\n  - `data: { id: number; address: { city: string; state: string; street1: string; zip: string; street2?: string; }; contact: { email: string; name: object; phone?: string; }; expectedMoveInDate?: string; expectedMoveOutDate?: string; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst tenant = await client.tenants.retrieve(123);\n\nconsole.log(tenant);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tenants.retrieve',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst tenant = await client.tenants.retrieve(123);\n\nconsole.log(tenant.data);",
      },
      python: {
        method: 'tenants.retrieve',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\ntenant = client.tenants.retrieve(\n    123,\n)\nprint(tenant.data)',
      },
      java: {
        method: 'tenants().retrieve',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.tenants.TenantRetrieveParams;\nimport com.beagle.api.models.tenants.TenantRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        TenantRetrieveResponse tenant = client.tenants().retrieve(123.0);\n    }\n}',
      },
      go: {
        method: 'client.Tenants.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttenant, err := client.Tenants.Get(context.TODO(), 123)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tenant.Data)\n}\n',
      },
      ruby: {
        method: 'tenants.retrieve',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\ntenant = beagle.tenants.retrieve(123)\n\nputs(tenant)',
      },
      csharp: {
        method: 'Tenants.Retrieve',
        example:
          'TenantRetrieveParams parameters = new() { ID = 123 };\n\nvar tenant = await client.Tenants.Retrieve(parameters);\n\nConsole.WriteLine(tenant);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/tenants/$ID \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/api/tenants/{id}',
    httpMethod: 'patch',
    summary: 'Update Tenant',
    description: 'update an existing tenant by their id.',
    stainlessPath: '(resource) tenants > (method) update',
    qualified: 'client.tenants.update',
    params: [
      'id: number;',
      'address?: { city: string; state: string; street1: string; zip: string; street2?: string; };',
      'contact?: { email: string; name: { first: string; last: string; }; phone?: string; };',
      'expectedMoveInDate?: string;',
      'expectedMoveOutDate?: string;',
    ],
    response:
      '{ data: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }; success: true; }',
    markdown:
      "## update\n\n`client.tenants.update(id: number, address?: { city: string; state: string; street1: string; zip: string; street2?: string; }, contact?: { email: string; name: object; phone?: string; }, expectedMoveInDate?: string, expectedMoveOutDate?: string): { data: tenant; success: true; }`\n\n**patch** `/api/tenants/{id}`\n\nupdate an existing tenant by their id.\n\n### Parameters\n\n- `id: number`\n\n- `address?: { city: string; state: string; street1: string; zip: string; street2?: string; }`\n  - `city: string`\n  - `state: string`\n    two letter state code, ie CA\n  - `street1: string`\n  - `zip: string`\n    US ZIP or ZIP+4. For example: '94104' or '94104-1234'\n  - `street2?: string`\n\n- `contact?: { email: string; name: { first: string; last: string; }; phone?: string; }`\n  - `email: string`\n  - `name: { first: string; last: string; }`\n  - `phone?: string`\n\n- `expectedMoveInDate?: string`\n\n- `expectedMoveOutDate?: string`\n\n### Returns\n\n- `{ data: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }; success: true; }`\n\n  - `data: { id: number; address: { city: string; state: string; street1: string; zip: string; street2?: string; }; contact: { email: string; name: object; phone?: string; }; expectedMoveInDate?: string; expectedMoveOutDate?: string; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst tenant = await client.tenants.update(123);\n\nconsole.log(tenant);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tenants.update',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst tenant = await client.tenants.update(123);\n\nconsole.log(tenant.data);",
      },
      python: {
        method: 'tenants.update',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\ntenant = client.tenants.update(\n    id=123,\n)\nprint(tenant.data)',
      },
      java: {
        method: 'tenants().update',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.tenants.TenantUpdateParams;\nimport com.beagle.api.models.tenants.TenantUpdateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        TenantUpdateResponse tenant = client.tenants().update(123.0);\n    }\n}',
      },
      go: {
        method: 'client.Tenants.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttenant, err := client.Tenants.Update(\n\t\tcontext.TODO(),\n\t\t123,\n\t\tbeagle.TenantUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tenant.Data)\n}\n',
      },
      ruby: {
        method: 'tenants.update',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\ntenant = beagle.tenants.update(123)\n\nputs(tenant)',
      },
      csharp: {
        method: 'Tenants.Update',
        example:
          'TenantUpdateParams parameters = new() { ID = 123 };\n\nvar tenant = await client.Tenants.Update(parameters);\n\nConsole.WriteLine(tenant);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/tenants/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $BEAGLE_API_KEY" \\\n    -d \'{\n          "address": {\n            "city": "South Salt Lake",\n            "state": "UT",\n            "street1": "123 Main St.",\n            "zip": "84115",\n            "street2": "Unit 3"\n          },\n          "contact": {\n            "email": "mark.s@example.com",\n            "name": {\n              "first": "Mark",\n              "last": "Scout"\n            },\n            "phone": "(123) 456-7890"\n          }\n        }\'',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/api/tenants/{id}',
    httpMethod: 'delete',
    summary: 'Delete Tenant',
    description: 'delete an existing tenant by their id.',
    stainlessPath: '(resource) tenants > (method) delete',
    qualified: 'client.tenants.delete',
    params: ['id: number;'],
    markdown:
      "## delete\n\n`client.tenants.delete(id: number): void`\n\n**delete** `/api/tenants/{id}`\n\ndelete an existing tenant by their id.\n\n### Parameters\n\n- `id: number`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nawait client.tenants.delete(123)\n```",
    perLanguage: {
      typescript: {
        method: 'client.tenants.delete',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.tenants.delete(123);",
      },
      python: {
        method: 'tenants.delete',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nclient.tenants.delete(\n    123,\n)',
      },
      java: {
        method: 'tenants().delete',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.tenants.TenantDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        client.tenants().delete(123.0);\n    }\n}',
      },
      go: {
        method: 'client.Tenants.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Tenants.Delete(context.TODO(), 123)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'tenants.delete',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nresult = beagle.tenants.delete(123)\n\nputs(result)',
      },
      csharp: {
        method: 'Tenants.Delete',
        example:
          'TenantDeleteParams parameters = new() { ID = 123 };\n\nawait client.Tenants.Delete(parameters);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/tenants/$ID \\\n    -X DELETE \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/tenants',
    httpMethod: 'get',
    summary: 'List Tenants',
    description:
      'list all tenants, this endpoint is paginated and allows for queries by individual property manager.',
    stainlessPath: '(resource) tenants > (method) list',
    qualified: 'client.tenants.list',
    params: ['page?: number;', 'propertyManagerId?: number;', 'size?: number;'],
    response: '{ data: { items: object[]; pagination: object; }; success: true; }',
    markdown:
      "## list\n\n`client.tenants.list(page?: number, propertyManagerId?: number, size?: number): { data: object; success: true; }`\n\n**get** `/api/tenants`\n\nlist all tenants, this endpoint is paginated and allows for queries by individual property manager.\n\n### Parameters\n\n- `page?: number`\n  Page number to fetch.\n\n- `propertyManagerId?: number`\n\n- `size?: number`\n  Number of items per page.\n\n### Returns\n\n- `{ data: { items: object[]; pagination: object; }; success: true; }`\n\n  - `data: { items: { id: number; address: object; contact: object; expectedMoveInDate?: string; expectedMoveOutDate?: string; }[]; pagination: { page: number; pages: number; records: number; size: number; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst tenants = await client.tenants.list();\n\nconsole.log(tenants);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tenants.list',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst tenants = await client.tenants.list();\n\nconsole.log(tenants.data);",
      },
      python: {
        method: 'tenants.list',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\ntenants = client.tenants.list()\nprint(tenants.data)',
      },
      java: {
        method: 'tenants().list',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.tenants.TenantListParams;\nimport com.beagle.api.models.tenants.TenantListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        TenantListResponse tenants = client.tenants().list();\n    }\n}',
      },
      go: {
        method: 'client.Tenants.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttenants, err := client.Tenants.List(context.TODO(), beagle.TenantListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tenants.Data)\n}\n',
      },
      ruby: {
        method: 'tenants.list',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\ntenants = beagle.tenants.list\n\nputs(tenants)',
      },
      csharp: {
        method: 'Tenants.List',
        example:
          'TenantListParams parameters = new();\n\nvar tenants = await client.Tenants.List(parameters);\n\nConsole.WriteLine(tenants);',
      },
      http: {
        example: 'curl https://developer.beagleforpm.com/api/tenants \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/tenants',
    httpMethod: 'post',
    summary: 'Create Tenant',
    description: 'create a new tenant.',
    stainlessPath: '(resource) tenants > (method) create',
    qualified: 'client.tenants.create',
    params: [
      'address: { city: string; state: string; street1: string; zip: string; street2?: string; };',
      'contact: { email: string; name: { first: string; last: string; }; phone?: string; };',
      'propertyManagerId: number;',
      'expectedMoveInDate?: string;',
      'expectedMoveOutDate?: string;',
    ],
    response:
      '{ data: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }; success: true; }',
    markdown:
      "## create\n\n`client.tenants.create(address: { city: string; state: string; street1: string; zip: string; street2?: string; }, contact: { email: string; name: object; phone?: string; }, propertyManagerId: number, expectedMoveInDate?: string, expectedMoveOutDate?: string): { data: tenant; success: true; }`\n\n**post** `/api/tenants`\n\ncreate a new tenant.\n\n### Parameters\n\n- `address: { city: string; state: string; street1: string; zip: string; street2?: string; }`\n  - `city: string`\n  - `state: string`\n    two letter state code, ie CA\n  - `street1: string`\n  - `zip: string`\n    US ZIP or ZIP+4. For example: '94104' or '94104-1234'\n  - `street2?: string`\n\n- `contact: { email: string; name: { first: string; last: string; }; phone?: string; }`\n  - `email: string`\n  - `name: { first: string; last: string; }`\n  - `phone?: string`\n\n- `propertyManagerId: number`\n\n- `expectedMoveInDate?: string`\n\n- `expectedMoveOutDate?: string`\n\n### Returns\n\n- `{ data: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }; success: true; }`\n\n  - `data: { id: number; address: { city: string; state: string; street1: string; zip: string; street2?: string; }; contact: { email: string; name: object; phone?: string; }; expectedMoveInDate?: string; expectedMoveOutDate?: string; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst tenant = await client.tenants.create({\n  address: {\n  city: 'South Salt Lake',\n  state: 'UT',\n  street1: '123 Main St.',\n  zip: '84115',\n},\n  contact: {\n  email: 'mark.s@example.com',\n  name: { first: 'Mark', last: 'Scout' },\n},\n  propertyManagerId: 123,\n});\n\nconsole.log(tenant);\n```",
    perLanguage: {
      typescript: {
        method: 'client.tenants.create',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst tenant = await client.tenants.create({\n  address: {\n    city: 'South Salt Lake',\n    state: 'UT',\n    street1: '123 Main St.',\n    zip: '84115',\n  },\n  contact: {\n    email: 'mark.s@example.com',\n    name: { first: 'Mark', last: 'Scout' },\n  },\n  propertyManagerId: 123,\n});\n\nconsole.log(tenant.data);",
      },
      python: {
        method: 'tenants.create',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\ntenant = client.tenants.create(\n    address={\n        "city": "South Salt Lake",\n        "state": "UT",\n        "street1": "123 Main St.",\n        "zip": "84115",\n    },\n    contact={\n        "email": "mark.s@example.com",\n        "name": {\n            "first": "Mark",\n            "last": "Scout",\n        },\n    },\n    property_manager_id=123,\n)\nprint(tenant.data)',
      },
      java: {
        method: 'tenants().create',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.tenants.Address;\nimport com.beagle.api.models.tenants.Contact;\nimport com.beagle.api.models.tenants.TenantCreateParams;\nimport com.beagle.api.models.tenants.TenantCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        TenantCreateParams params = TenantCreateParams.builder()\n            .address(Address.builder()\n                .city("South Salt Lake")\n                .state("UT")\n                .street1("123 Main St.")\n                .zip("84115")\n                .build())\n            .contact(Contact.builder()\n                .email("mark.s@example.com")\n                .name(Contact.Name.builder()\n                    .first("Mark")\n                    .last("Scout")\n                    .build())\n                .build())\n            .propertyManagerId(123.0)\n            .build();\n        TenantCreateResponse tenant = client.tenants().create(params);\n    }\n}',
      },
      go: {
        method: 'client.Tenants.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\ttenant, err := client.Tenants.New(context.TODO(), beagle.TenantNewParams{\n\t\tAddress: beagle.AddressParam{\n\t\t\tCity:    "South Salt Lake",\n\t\t\tState:   "UT",\n\t\t\tStreet1: "123 Main St.",\n\t\t\tZip:     "84115",\n\t\t},\n\t\tContact: beagle.ContactParam{\n\t\t\tEmail: "mark.s@example.com",\n\t\t\tName: beagle.ContactNameParam{\n\t\t\t\tFirst: "Mark",\n\t\t\t\tLast:  "Scout",\n\t\t\t},\n\t\t},\n\t\tPropertyManagerID: 123,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", tenant.Data)\n}\n',
      },
      ruby: {
        method: 'tenants.create',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\ntenant = beagle.tenants.create(\n  address: {city: "South Salt Lake", state: "UT", street1: "123 Main St.", zip: "84115"},\n  contact: {email: "mark.s@example.com", name: {first: "Mark", last: "Scout"}},\n  property_manager_id: 123\n)\n\nputs(tenant)',
      },
      csharp: {
        method: 'Tenants.Create',
        example:
          'TenantCreateParams parameters = new()\n{\n    Address = new()\n    {\n        City = "South Salt Lake",\n        State = "UT",\n        Street1 = "123 Main St.",\n        Zip = "84115",\n        Street2 = "Unit 3",\n    },\n    Contact = new()\n    {\n        Email = "mark.s@example.com",\n        Name = new()\n        {\n            First = "Mark",\n            Last = "Scout",\n        },\n        Phone = "(123) 456-7890",\n    },\n    PropertyManagerID = 123,\n};\n\nvar tenant = await client.Tenants.Create(parameters);\n\nConsole.WriteLine(tenant);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/tenants \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $BEAGLE_API_KEY" \\\n    -d \'{\n          "address": {\n            "city": "South Salt Lake",\n            "state": "UT",\n            "street1": "123 Main St.",\n            "zip": "84115",\n            "street2": "Unit 3"\n          },\n          "contact": {\n            "email": "mark.s@example.com",\n            "name": {\n              "first": "Mark",\n              "last": "Scout"\n            },\n            "phone": "(123) 456-7890"\n          },\n          "propertyManagerId": 123\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/api/enrollments/{id}',
    httpMethod: 'get',
    summary: 'Get Enrollment',
    description: 'get a specific enrollment by its id.',
    stainlessPath: '(resource) enrollments > (method) retrieve',
    qualified: 'client.enrollments.retrieve',
    params: ['id: number;'],
    response:
      '{ data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; product?: string; tenant?: tenant; }; success: true; }',
    markdown:
      "## retrieve\n\n`client.enrollments.retrieve(id: number): { data: enrollment; success: true; }`\n\n**get** `/api/enrollments/{id}`\n\nget a specific enrollment by its id.\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `{ data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; product?: string; tenant?: tenant; }; success: true; }`\n\n  - `data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; product?: string; tenant?: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst enrollment = await client.enrollments.retrieve(123);\n\nconsole.log(enrollment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.enrollments.retrieve',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst enrollment = await client.enrollments.retrieve(123);\n\nconsole.log(enrollment.data);",
      },
      python: {
        method: 'enrollments.retrieve',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nenrollment = client.enrollments.retrieve(\n    123,\n)\nprint(enrollment.data)',
      },
      java: {
        method: 'enrollments().retrieve',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.enrollments.EnrollmentRetrieveParams;\nimport com.beagle.api.models.enrollments.EnrollmentRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        EnrollmentRetrieveResponse enrollment = client.enrollments().retrieve(123.0);\n    }\n}',
      },
      go: {
        method: 'client.Enrollments.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tenrollment, err := client.Enrollments.Get(context.TODO(), 123)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", enrollment.Data)\n}\n',
      },
      ruby: {
        method: 'enrollments.retrieve',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nenrollment = beagle.enrollments.retrieve(123)\n\nputs(enrollment)',
      },
      csharp: {
        method: 'Enrollments.Retrieve',
        example:
          'EnrollmentRetrieveParams parameters = new() { ID = 123 };\n\nvar enrollment = await client.Enrollments.Retrieve(parameters);\n\nConsole.WriteLine(enrollment);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/enrollments/$ID \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'lapse',
    endpoint: '/api/enrollments/{id}',
    httpMethod: 'delete',
    summary: 'Lapse Enrollment',
    description:
      'lapses a specific enrollment for a tenant, note that if a tenant has multiple enrollments (e.g., SDR and TLL), each must be lapsed individually',
    stainlessPath: '(resource) enrollments > (method) lapse',
    qualified: 'client.enrollments.lapse',
    params: ['id: number;'],
    markdown:
      "## lapse\n\n`client.enrollments.lapse(id: number): void`\n\n**delete** `/api/enrollments/{id}`\n\nlapses a specific enrollment for a tenant, note that if a tenant has multiple enrollments (e.g., SDR and TLL), each must be lapsed individually\n\n### Parameters\n\n- `id: number`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nawait client.enrollments.lapse(123)\n```",
    perLanguage: {
      typescript: {
        method: 'client.enrollments.lapse',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.enrollments.lapse(123);",
      },
      python: {
        method: 'enrollments.lapse',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nclient.enrollments.lapse(\n    123,\n)',
      },
      java: {
        method: 'enrollments().lapse',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.enrollments.EnrollmentLapseParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        client.enrollments().lapse(123.0);\n    }\n}',
      },
      go: {
        method: 'client.Enrollments.Lapse',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Enrollments.Lapse(context.TODO(), 123)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'enrollments.lapse',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nresult = beagle.enrollments.lapse(123)\n\nputs(result)',
      },
      csharp: {
        method: 'Enrollments.Lapse',
        example:
          'EnrollmentLapseParams parameters = new() { ID = 123 };\n\nawait client.Enrollments.Lapse(parameters);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/enrollments/$ID \\\n    -X DELETE \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/api/enrollments',
    httpMethod: 'get',
    summary: 'List Enrollments',
    description:
      'list all enrollments, this endpoint is paginated and allows for queries by individual property manager.',
    stainlessPath: '(resource) enrollments > (method) list',
    qualified: 'client.enrollments.list',
    params: [
      'page?: number;',
      'product?: string;',
      'propertyManagerId?: number;',
      'size?: number;',
      'status?: string;',
    ],
    response: '{ data: { items: object[]; pagination: object; }; success: true; }',
    markdown:
      "## list\n\n`client.enrollments.list(page?: number, product?: string, propertyManagerId?: number, size?: number, status?: string): { data: object; success: true; }`\n\n**get** `/api/enrollments`\n\nlist all enrollments, this endpoint is paginated and allows for queries by individual property manager.\n\n### Parameters\n\n- `page?: number`\n  Page number to fetch.\n\n- `product?: string`\n\n- `propertyManagerId?: number`\n\n- `size?: number`\n  Number of items per page.\n\n- `status?: string`\n\n### Returns\n\n- `{ data: { items: object[]; pagination: object; }; success: true; }`\n\n  - `data: { items: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; product?: string; tenant?: object; }[]; pagination: { page: number; pages: number; records: number; size: number; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst enrollments = await client.enrollments.list();\n\nconsole.log(enrollments);\n```",
    perLanguage: {
      typescript: {
        method: 'client.enrollments.list',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst enrollments = await client.enrollments.list();\n\nconsole.log(enrollments.data);",
      },
      python: {
        method: 'enrollments.list',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nenrollments = client.enrollments.list()\nprint(enrollments.data)',
      },
      java: {
        method: 'enrollments().list',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.enrollments.EnrollmentListParams;\nimport com.beagle.api.models.enrollments.EnrollmentListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        EnrollmentListResponse enrollments = client.enrollments().list();\n    }\n}',
      },
      go: {
        method: 'client.Enrollments.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tenrollments, err := client.Enrollments.List(context.TODO(), beagle.EnrollmentListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", enrollments.Data)\n}\n',
      },
      ruby: {
        method: 'enrollments.list',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nenrollments = beagle.enrollments.list\n\nputs(enrollments)',
      },
      csharp: {
        method: 'Enrollments.List',
        example:
          'EnrollmentListParams parameters = new();\n\nvar enrollments = await client.Enrollments.List(parameters);\n\nConsole.WriteLine(enrollments);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/enrollments \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/api/enrollments',
    httpMethod: 'post',
    summary: 'Create Enrollment',
    description: 'create a new enrollment for a tenant.',
    stainlessPath: '(resource) enrollments > (method) create',
    qualified: 'client.enrollments.create',
    params: [
      'effectiveDate: string;',
      'plan: string;',
      'propertyManagerId: number;',
      'tenantId: number;',
      'note?: string;',
      'product?: string;',
      "status?: 'Premium Paying' | 'Issued, Not Paid';",
      'tenant?: { id: number; address: { city: string; state: string; street1: string; zip: string; street2?: string; }; contact: { email: string; name: object; phone?: string; }; expectedMoveInDate?: string; expectedMoveOutDate?: string; };',
    ],
    response:
      '{ data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; product?: string; tenant?: tenant; }; success: true; }',
    markdown:
      "## create\n\n`client.enrollments.create(effectiveDate: string, plan: string, propertyManagerId: number, tenantId: number, note?: string, product?: string, status?: 'Premium Paying' | 'Issued, Not Paid', tenant?: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }): { data: enrollment; success: true; }`\n\n**post** `/api/enrollments`\n\ncreate a new enrollment for a tenant.\n\n### Parameters\n\n- `effectiveDate: string`\n  the date the enrollment will begin, note enrollments cannot begin in the past\n\n- `plan: string`\n  the plan name/code\n\n- `propertyManagerId: number`\n\n- `tenantId: number`\n\n- `note?: string`\n  an optional note field, this can be used for easily appending metadata to enrollments\n\n- `product?: string`\n\n- `status?: 'Premium Paying' | 'Issued, Not Paid'`\n  the enrollment status — defaults to 'Issued, Not Paid' if not provided\n\n- `tenant?: { id: number; address: { city: string; state: string; street1: string; zip: string; street2?: string; }; contact: { email: string; name: object; phone?: string; }; expectedMoveInDate?: string; expectedMoveOutDate?: string; }`\n  - `id: number`\n  - `address: { city: string; state: string; street1: string; zip: string; street2?: string; }`\n  - `contact: { email: string; name: { first: string; last: string; }; phone?: string; }`\n  - `expectedMoveInDate?: string`\n  - `expectedMoveOutDate?: string`\n\n### Returns\n\n- `{ data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; product?: string; tenant?: tenant; }; success: true; }`\n\n  - `data: { id: number; effectiveDate: string; plan: string; propertyManagerId: number; status: string; tenantId: number; note?: string; product?: string; tenant?: { id: number; address: address; contact: contact; expectedMoveInDate?: string; expectedMoveOutDate?: string; }; }`\n  - `success: true`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst enrollment = await client.enrollments.create({\n  effectiveDate: '2025-11-10T19:50:20.638Z',\n  plan: 'TLL_100K_CONTENTS_5K_ACV',\n  propertyManagerId: 123,\n  tenantId: 123,\n});\n\nconsole.log(enrollment);\n```",
    perLanguage: {
      typescript: {
        method: 'client.enrollments.create',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst enrollment = await client.enrollments.create({\n  effectiveDate: '2025-11-10T19:50:20.638Z',\n  plan: 'TLL_100K_CONTENTS_5K_ACV',\n  propertyManagerId: 123,\n  tenantId: 123,\n});\n\nconsole.log(enrollment.data);",
      },
      python: {
        method: 'enrollments.create',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nenrollment = client.enrollments.create(\n    effective_date="2025-11-10T19:50:20.638Z",\n    plan="TLL_100K_CONTENTS_5K_ACV",\n    property_manager_id=123,\n    tenant_id=123,\n)\nprint(enrollment.data)',
      },
      java: {
        method: 'enrollments().create',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.enrollments.EnrollmentCreateParams;\nimport com.beagle.api.models.enrollments.EnrollmentCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        EnrollmentCreateParams params = EnrollmentCreateParams.builder()\n            .effectiveDate("2025-11-10T19:50:20.638Z")\n            .plan("TLL_100K_CONTENTS_5K_ACV")\n            .propertyManagerId(123.0)\n            .tenantId(123.0)\n            .build();\n        EnrollmentCreateResponse enrollment = client.enrollments().create(params);\n    }\n}',
      },
      go: {
        method: 'client.Enrollments.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tenrollment, err := client.Enrollments.New(context.TODO(), beagle.EnrollmentNewParams{\n\t\tEffectiveDate:     "2025-11-10T19:50:20.638Z",\n\t\tPlan:              "TLL_100K_CONTENTS_5K_ACV",\n\t\tPropertyManagerID: 123,\n\t\tTenantID:          123,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", enrollment.Data)\n}\n',
      },
      ruby: {
        method: 'enrollments.create',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nenrollment = beagle.enrollments.create(\n  effective_date: "2025-11-10T19:50:20.638Z",\n  plan: "TLL_100K_CONTENTS_5K_ACV",\n  property_manager_id: 123,\n  tenant_id: 123\n)\n\nputs(enrollment)',
      },
      csharp: {
        method: 'Enrollments.Create',
        example:
          'EnrollmentCreateParams parameters = new()\n{\n    EffectiveDate = "2025-11-10T19:50:20.638Z",\n    Plan = "TLL_100K_CONTENTS_5K_ACV",\n    PropertyManagerID = 123,\n    TenantID = 123,\n};\n\nvar enrollment = await client.Enrollments.Create(parameters);\n\nConsole.WriteLine(enrollment);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/enrollments \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $BEAGLE_API_KEY" \\\n    -d \'{\n          "effectiveDate": "2025-11-10T19:50:20.638Z",\n          "plan": "TLL_100K_CONTENTS_5K_ACV",\n          "propertyManagerId": 123,\n          "tenantId": 123,\n          "status": "Issued, Not Paid",\n          "tenant": {\n            "id": 123,\n            "address": {\n              "city": "South Salt Lake",\n              "state": "UT",\n              "street1": "123 Main St.",\n              "zip": "84115",\n              "street2": "Unit 3"\n            },\n            "contact": {\n              "email": "mark.s@example.com",\n              "name": {\n                "first": "Mark",\n                "last": "Scout"\n              },\n              "phone": "(123) 456-7890"\n            }\n          }\n        }\'',
      },
    },
  },
  {
    name: 'retrieve_certificate',
    endpoint: '/api/enrollments/{id}/certificate',
    httpMethod: 'get',
    summary: 'Get Enrollment Certificate',
    description: 'get the certificate of enrollment for a given enrollment',
    stainlessPath: '(resource) enrollments > (method) retrieve_certificate',
    qualified: 'client.enrollments.retrieveCertificate',
    params: ['id: number;'],
    response: 'string',
    markdown:
      "## retrieve_certificate\n\n`client.enrollments.retrieveCertificate(id: number): string`\n\n**get** `/api/enrollments/{id}/certificate`\n\nget the certificate of enrollment for a given enrollment\n\n### Parameters\n\n- `id: number`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst response = await client.enrollments.retrieveCertificate(123);\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      typescript: {
        method: 'client.enrollments.retrieveCertificate',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.enrollments.retrieveCertificate(123);\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'enrollments.retrieve_certificate',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.enrollments.retrieve_certificate(\n    123,\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      java: {
        method: 'enrollments().retrieveCertificate',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.core.http.HttpResponse;\nimport com.beagle.api.models.enrollments.EnrollmentRetrieveCertificateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        HttpResponse response = client.enrollments().retrieveCertificate(123.0);\n    }\n}',
      },
      go: {
        method: 'client.Enrollments.GetCertificate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Enrollments.GetCertificate(context.TODO(), 123)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'enrollments.retrieve_certificate',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nresponse = beagle.enrollments.retrieve_certificate(123)\n\nputs(response)',
      },
      csharp: {
        method: 'Enrollments.RetrieveCertificate',
        example:
          'EnrollmentRetrieveCertificateParams parameters = new() { ID = 123 };\n\nvar response = await client.Enrollments.RetrieveCertificate(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/enrollments/$ID/certificate \\\n    -H "x-api-key: $BEAGLE_API_KEY"',
      },
    },
  },
  {
    name: 'verify',
    endpoint: '/api/insurance-verification',
    httpMethod: 'post',
    summary: 'Verify a tenants insurance policy',
    description: 'trigger a job to parse a tenants insurance document(s)',
    stainlessPath: '(resource) insurance_verification > (method) verify',
    qualified: 'client.insuranceVerification.verify',
    params: ['propertyManagerId: number;', 'tenantId: number;', 'urls: string[];'],
    response: "{ message: 'insurance verification job scheduled'; }",
    markdown:
      "## verify\n\n`client.insuranceVerification.verify(propertyManagerId: number, tenantId: number, urls: string[]): { message: 'insurance verification job scheduled'; }`\n\n**post** `/api/insurance-verification`\n\ntrigger a job to parse a tenants insurance document(s)\n\n### Parameters\n\n- `propertyManagerId: number`\n\n- `tenantId: number`\n\n- `urls: string[]`\n  an array of presigned pdf urls for the tenants policy document(s)\n\n### Returns\n\n- `{ message: 'insurance verification job scheduled'; }`\n\n  - `message: 'insurance verification job scheduled'`\n\n### Example\n\n```typescript\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle();\n\nconst response = await client.insuranceVerification.verify({\n  propertyManagerId: 0,\n  tenantId: 0,\n  urls: ['string'],\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.insuranceVerification.verify',
        example:
          "import Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.insuranceVerification.verify({\n  propertyManagerId: 0,\n  tenantId: 0,\n  urls: ['string'],\n});\n\nconsole.log(response.message);",
      },
      python: {
        method: 'insurance_verification.verify',
        example:
          'import os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.insurance_verification.verify(\n    property_manager_id=0,\n    tenant_id=0,\n    urls=["string"],\n)\nprint(response.message)',
      },
      java: {
        method: 'insuranceVerification().verify',
        example:
          'package com.beagle.api.example;\n\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.insuranceverification.InsuranceVerificationVerifyParams;\nimport com.beagle.api.models.insuranceverification.InsuranceVerificationVerifyResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        BeagleClient client = BeagleOkHttpClient.fromEnv();\n\n        InsuranceVerificationVerifyParams params = InsuranceVerificationVerifyParams.builder()\n            .propertyManagerId(0.0)\n            .tenantId(0.0)\n            .addUrl("string")\n            .build();\n        InsuranceVerificationVerifyResponse response = client.insuranceVerification().verify(params);\n    }\n}',
      },
      go: {
        method: 'client.InsuranceVerification.Verify',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.InsuranceVerification.Verify(context.TODO(), beagle.InsuranceVerificationVerifyParams{\n\t\tPropertyManagerID: 0,\n\t\tTenantID:          0,\n\t\tURLs:              []string{"string"},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Message)\n}\n',
      },
      ruby: {
        method: 'insurance_verification.verify',
        example:
          'require "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: "My API Key",\n  environment: "staging" # defaults to "production"\n)\n\nresponse = beagle.insurance_verification.verify(property_manager_id: 0, tenant_id: 0, urls: ["string"])\n\nputs(response)',
      },
      csharp: {
        method: 'InsuranceVerification.Verify',
        example:
          'InsuranceVerificationVerifyParams parameters = new()\n{\n    PropertyManagerID = 0,\n    TenantID = 0,\n    Urls =\n    [\n        "string"\n    ],\n};\n\nvar response = await client.InsuranceVerification.Verify(parameters);\n\nConsole.WriteLine(response);',
      },
      http: {
        example:
          'curl https://developer.beagleforpm.com/api/insurance-verification \\\n    -H \'Content-Type: application/json\' \\\n    -H "x-api-key: $BEAGLE_API_KEY" \\\n    -d \'{\n          "propertyManagerId": 0,\n          "tenantId": 0,\n          "urls": [\n            "string"\n          ]\n        }\'',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'csharp',
    content:
      '# Beagle C# API Library\n\nThe Beagle C# SDK provides convenient access to the Beagle REST API from applications written in   C#.\n\n## Installation\n\n```bash\ngit clone git@github.com:stainless-sdks/beagle-csharp.git\ndotnet add reference beagle-csharp/src/Beagle\n```\n\n## Requirements\n\nThis library requires .NET Standard 2.0 or later.\n\n## Usage\n\nSee the [`examples`](examples) directory for complete and runnable examples.\n\n```csharp\nBeagleClient client = new();\n\nPlanListParams parameters = new();\n\nvar plans = await client.Plans.List(parameters);\n\nConsole.WriteLine(plans);\n```',
  },
  {
    language: 'go',
    content:
      '# Beagle Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/beagle-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/beagle-go.svg" alt="Go Reference"></a>\n\nThe Beagle Go library provides convenient access to the Beagle REST API\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Beagle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40corgi-tech%2Fbeagle-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBjb3JnaS10ZWNoL2JlYWdsZS1tY3AiXSwiZW52Ijp7IkJFQUdMRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40corgi-tech%2Fbeagle-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40corgi-tech%2Fbeagle-mcp%22%5D%2C%22env%22%3A%7B%22BEAGLE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/beagle-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/beagle-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/beagle-go"\n\t"github.com/stainless-sdks/beagle-go/option"\n)\n\nfunc main() {\n\tclient := beagle.NewClient(\n\t\toption.WithAPIKey("My API Key"), // defaults to os.LookupEnv("BEAGLE_API_KEY")\n\t\toption.WithEnvironmentStaging(), // defaults to option.WithEnvironmentProduction()\n\t)\n\tplans, err := client.Plans.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", plans.Data)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Plans.List(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/beagle-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Plans.List(context.TODO())\nif err != nil {\n\tvar apierr *beagle.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/api/plans": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Plans.List(\n\tctx,\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := beagle.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Plans.List(context.TODO(), option.WithMaxRetries(5))\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nplans, err := client.Plans.List(context.TODO(), option.WithResponseInto(&response))\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", plans)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/beagle-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Beagle Java API Library\n\n\n[![Maven Central](https://img.shields.io/maven-central/v/com.beagle.api/beagle-java)](https://central.sonatype.com/artifact/com.beagle.api/beagle-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.beagle.api/beagle-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.beagle.api/beagle-java/0.0.1)\n\n\nThe Beagle Java SDK provides convenient access to the Beagle REST API   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Beagle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40corgi-tech%2Fbeagle-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBjb3JnaS10ZWNoL2JlYWdsZS1tY3AiXSwiZW52Ijp7IkJFQUdMRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40corgi-tech%2Fbeagle-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40corgi-tech%2Fbeagle-mcp%22%5D%2C%22env%22%3A%7B%22BEAGLE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\nJavadocs are available on [javadoc.io](https://javadoc.io/doc/com.beagle.api/beagle-java/0.0.1).\n\n## Installation\n\n### Gradle\n\n~~~kotlin\nimplementation("com.beagle.api:beagle-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.beagle.api</groupId>\n  <artifactId>beagle-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.plans.PlanListParams;\nimport com.beagle.api.models.plans.PlanListResponse;\n\n// Configures using the `beagle.apiKey` and `beagle.baseUrl` system properties\n// Or configures using the `BEAGLE_API_KEY` and `BEAGLE_BASE_URL` environment variables\nBeagleClient client = BeagleOkHttpClient.fromEnv();\n\nPlanListResponse plans = client.plans().list();\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\n\n// Configures using the `beagle.apiKey` and `beagle.baseUrl` system properties\n// Or configures using the `BEAGLE_API_KEY` and `BEAGLE_BASE_URL` environment variables\nBeagleClient client = BeagleOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    // Configures using the `beagle.apiKey` and `beagle.baseUrl` system properties\n    // Or configures using the `BEAGLE_API_KEY` and `BEAGLE_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter    | System property  | Environment variable | Required | Default value                         |\n| --------- | ---------------- | -------------------- | -------- | ------------------------------------- |\n| `apiKey`  | `beagle.apiKey`  | `BEAGLE_API_KEY`     | true     | -                                     |\n| `baseUrl` | `beagle.baseUrl` | `BEAGLE_BASE_URL`    | true     | `"https://developer.beagleforpm.com"` |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.beagle.api.client.BeagleClient;\n\nBeagleClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Beagle API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.plans().list(...)` should be called with an instance of `PlanListParams`, and it     will return an instance of `PlanListResponse`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.models.plans.PlanListParams;\nimport com.beagle.api.models.plans.PlanListResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `beagle.apiKey` and `beagle.baseUrl` system properties\n// Or configures using the `BEAGLE_API_KEY` and `BEAGLE_BASE_URL` environment variables\nBeagleClient client = BeagleOkHttpClient.fromEnv();\n\nCompletableFuture<PlanListResponse> plans = client.async().plans().list();\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.beagle.api.client.BeagleClientAsync;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClientAsync;\nimport com.beagle.api.models.plans.PlanListParams;\nimport com.beagle.api.models.plans.PlanListResponse;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `beagle.apiKey` and `beagle.baseUrl` system properties\n// Or configures using the `BEAGLE_API_KEY` and `BEAGLE_BASE_URL` environment variables\nBeagleClientAsync client = BeagleOkHttpClientAsync.fromEnv();\n\nCompletableFuture<PlanListResponse> plans = client.plans().list();\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n\n\n\n\n## Binary responses\n\nThe SDK defines methods that return binary responses, which are used for API responses that shouldn\'t     necessarily be parsed, like non-JSON data.\n\nThese methods return [`HttpResponse`](beagle-java-core/src/main/kotlin/com/beagle/api/core/http/HttpResponse.kt):\n\n```java\nimport com.beagle.api.core.http.HttpResponse;\nimport com.beagle.api.models.enrollments.EnrollmentRetrieveCertificateParams;\n\nHttpResponse response = client.enrollments().retrieveCertificate(123.0);\n```\n\nTo save the response content to a file, use the     [`Files.copy(...)`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#copy-java.io.InputStream-java.nio.file.Path-java.nio.file.CopyOption...-)     method:\n\n```java\nimport com.beagle.api.core.http.HttpResponse;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardCopyOption;\n\ntry (HttpResponse response = client.enrollments().retrieveCertificate(params)) {\n    Files.copy(\n        response.body(),\n        Paths.get(path),\n        StandardCopyOption.REPLACE_EXISTING\n    );\n} catch (Exception e) {\n    System.out.println("Something went wrong!");\n    throw new RuntimeException(e);\n}\n```\n\nOr transfer the response content to any     [`OutputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html):\n\n```java\nimport com.beagle.api.core.http.HttpResponse;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\ntry (HttpResponse response = client.enrollments().retrieveCertificate(params)) {\n    response.body().transferTo(Files.newOutputStream(Paths.get(path)));\n} catch (Exception e) {\n    System.out.println("Something went wrong!");\n    throw new RuntimeException(e);\n}\n```\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.beagle.api.core.http.Headers;\nimport com.beagle.api.core.http.HttpResponseFor;\nimport com.beagle.api.models.plans.PlanListParams;\nimport com.beagle.api.models.plans.PlanListResponse;\n\nHttpResponseFor<PlanListResponse> plans = client.plans().withRawResponse().list();\n\nint statusCode = plans.statusCode();\nHeaders headers = plans.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.beagle.api.models.plans.PlanListResponse;\n\nPlanListResponse parsedPlans = plans.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`BeagleServiceException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/BeagleServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/UnexpectedStatusCodeException.kt) |\n\n- [`BeagleIoException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/BeagleIoException.kt): I/O networking errors.\n\n- [`BeagleRetryableException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/BeagleRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`BeagleInvalidDataException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/BeagleInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`BeagleException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/BeagleException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n\n\n## Logging\n\nEnable logging by setting the `BEAGLE_LOG` environment variable to   `info`:\n\n```sh\nexport BEAGLE_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport BEAGLE_LOG=debug\n```\n\nOr configure the client manually using the `logLevel` method:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.core.LogLevel;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    .logLevel(LogLevel.INFO)\n    .build();\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `beagle-java-core` is published with a     [configuration file](beagle-java-core/src/main/resources/META-INF/proguard/beagle-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`BeagleOkHttpClient`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/BeagleOkHttpClient.kt) or     [`BeagleOkHttpClientAsync`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/BeagleOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.beagle.api.models.plans.PlanListResponse;\n\nPlanListResponse plans = client.plans().list(RequestOptions.builder().timeout(Duration.ofSeconds(30)).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport java.time.Duration;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\nIf the proxy responds with `407 Proxy Authentication Required`, supply credentials by also   configuring `proxyAuthenticator`:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport com.beagle.api.core.http.ProxyAuthenticator;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    .proxy(...)\n    // Or a custom implementation of `ProxyAuthenticator`.\n    .proxyAuthenticator(ProxyAuthenticator.basic("username", "password"))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\nimport java.time.Duration;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n### Environments\n\nThe SDK sends requests to the production by default. To send requests to a different     environment, configure the client like so:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    .staging()\n    .build();\n```\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `beagle-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BeagleClient`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClient.kt), [`BeagleClientAsync`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientAsync.kt),             [`BeagleClientImpl`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientImpl.kt), and [`BeagleClientAsyncImpl`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `beagle-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`BeagleOkHttpClient`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/BeagleOkHttpClient.kt) and [`BeagleOkHttpClientAsync`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/BeagleOkHttpClientAsync.kt), which             provide a way to construct [`BeagleClientImpl`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientImpl.kt) and             [`BeagleClientAsyncImpl`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientAsyncImpl.kt), respectively, using OkHttp\n- `beagle-java`\n  - Depends on and exposes the APIs of both `beagle-java-core` and `beagle-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`beagle-java` dependency](#installation) with `beagle-java-core`\n2. Copy `beagle-java-client-okhttp`\'s [`OkHttpClient`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`BeagleClientImpl`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientImpl.kt) or [`BeagleClientAsyncImpl`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientAsyncImpl.kt), similarly to        [`BeagleOkHttpClient`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/BeagleOkHttpClient.kt) or [`BeagleOkHttpClientAsync`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/BeagleOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`beagle-java` dependency](#installation) with `beagle-java-core`\n2. Write a class that implements the [`HttpClient`](beagle-java-core/src/main/kotlin/com/beagle/api/core/http/HttpClient.kt) interface\n3. Construct [`BeagleClientImpl`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientImpl.kt) or [`BeagleClientAsyncImpl`](beagle-java-core/src/main/kotlin/com/beagle/api/client/BeagleClientAsyncImpl.kt), similarly to        [`BeagleOkHttpClient`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/BeagleOkHttpClient.kt) or [`BeagleOkHttpClientAsync`](beagle-java-client-okhttp/src/main/kotlin/com/beagle/api/client/okhttp/BeagleOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.beagle.api.core.JsonValue;\nimport com.beagle.api.models.plans.PlanListParams;\n\nPlanListParams params = PlanListParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set undocumented parameters on _nested_ headers, query params, or body classes, call the         `putAdditionalProperty` method on the nested class:\n\n```java\nimport com.beagle.api.core.JsonValue;\nimport com.beagle.api.models.tenants.Address;\nimport com.beagle.api.models.tenants.TenantCreateParams;\n\nTenantCreateParams params = TenantCreateParams.builder()\n    .address(Address.builder()\n        .putAdditionalProperty("secretProperty", JsonValue.from("42"))\n        .build())\n    .build();\n```\n\nThese properties can be accessed on the nested built object later using the         `_additionalProperties()` method.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](beagle-java-core/src/main/kotlin/com/beagle/api/core/Values.kt) object to its setter:\n\n```java\nimport com.beagle.api.models.plans.PlanListParams;\n\nPlanListParams params = PlanListParams.builder().build();\n```\n\nThe most straightforward way to create a [`JsonValue`](beagle-java-core/src/main/kotlin/com/beagle/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.beagle.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](beagle-java-core/src/main/kotlin/com/beagle/api/core/Values.kt):\n\n```java\nimport com.beagle.api.core.JsonMissing;\nimport com.beagle.api.models.plans.PlanListParams;\nimport com.beagle.api.models.plans.PlanRetrieveParams;\n\nPlanListParams params = PlanRetrieveParams.builder()\n    .code(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.beagle.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.plans().list(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.beagle.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.plans().list(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`BeagleInvalidDataException`](beagle-java-core/src/main/kotlin/com/beagle/api/errors/BeagleInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.beagle.api.models.plans.PlanListResponse;\n\nPlanListResponse plans = client.plans().list(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.beagle.api.models.plans.PlanListResponse;\n\nPlanListResponse plans = client.plans().list(RequestOptions.builder().responseValidation(true).build());\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.beagle.api.client.BeagleClient;\nimport com.beagle.api.client.okhttp.BeagleOkHttpClient;\n\nBeagleClient client = BeagleOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/beagle-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'python',
    content:
      '# Beagle Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/beagle.svg?label=pypi%20(stable))](https://pypi.org/project/beagle/)\n\nThe Beagle Python library provides convenient access to the Beagle REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Beagle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40corgi-tech%2Fbeagle-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBjb3JnaS10ZWNoL2JlYWdsZS1tY3AiXSwiZW52Ijp7IkJFQUdMRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40corgi-tech%2Fbeagle-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40corgi-tech%2Fbeagle-mcp%22%5D%2C%22env%22%3A%7B%22BEAGLE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\n The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from this staging repo\npip install git+ssh://git@github.com/stainless-sdks/beagle-python.git\n```\n> [!NOTE]\n> Once this package is [published to PyPI](https://www.stainless.com/docs/guides/publish), this will become: `pip install beagle`\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom beagle import Beagle\n\nclient = Beagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="staging",\n)\n\nplans = client.plans.list()\nprint(plans.data)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `BEAGLE_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncBeagle` instead of `Beagle` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom beagle import AsyncBeagle\n\nclient = AsyncBeagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n    # defaults to "production".\n    environment="staging",\n)\n\nasync def main() -> None:\n  plans = await client.plans.list()\n  print(plans.data)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from this staging repo\npip install \'beagle[aiohttp] @ git+ssh://git@github.com/stainless-sdks/beagle-python.git\'\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom beagle import DefaultAioHttpClient\nfrom beagle import AsyncBeagle\n\nasync def main() -> None:\n  async with AsyncBeagle(\n    api_key=os.environ.get("BEAGLE_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    plans = await client.plans.list()\n    print(plans.data)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom beagle import Beagle\n\nclient = Beagle()\n\ntenant = client.tenants.create(\n    address={\n        "city": "South Salt Lake",\n        "state": "UT",\n        "street1": "123 Main St.",\n        "zip": "84115",\n        "street2": "Unit 3",\n    },\n    contact={\n        "email": "mark.s@example.com",\n        "name": {\n            "first": "Mark",\n            "last": "Scout",\n        },\n    },\n    property_manager_id=123,\n)\nprint(tenant.address)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `beagle.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `beagle.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `beagle.APIError`.\n\n```python\nimport beagle\nfrom beagle import Beagle\n\nclient = Beagle()\n\ntry:\n    client.plans.list()\nexcept beagle.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept beagle.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept beagle.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom beagle import Beagle\n\n# Configure the default for all requests:\nclient = Beagle(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).plans.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom beagle import Beagle\n\n# Configure the default for all requests:\nclient = Beagle(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = Beagle(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).plans.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `BEAGLE_LOG` to `info`.\n\n```shell\n$ export BEAGLE_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom beagle import Beagle\n\nclient = Beagle()\nresponse = client.plans.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\nplan = response.parse()  # get the object that `plans.list()` would have returned\nprint(plan.data)\n```\n\nThese methods return an [`APIResponse`](https://github.com/stainless-sdks/beagle-python/tree/main/src/beagle/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/stainless-sdks/beagle-python/tree/main/src/beagle/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.plans.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom beagle import Beagle, DefaultHttpxClient\n\nclient = Beagle(\n    # Or use the `BEAGLE_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom beagle import Beagle\n\nwith Beagle() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/beagle-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport beagle\nprint(beagle.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'ruby',
    content:
      '# Beagle Ruby API library\n\nThe Beagle Ruby library provides convenient access to the Beagle REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/stainless-sdks/beagle-ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Beagle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40corgi-tech%2Fbeagle-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBjb3JnaS10ZWNoL2JlYWdsZS1tY3AiXSwiZW52Ijp7IkJFQUdMRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40corgi-tech%2Fbeagle-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40corgi-tech%2Fbeagle-mcp%22%5D%2C%22env%22%3A%7B%22BEAGLE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/beagle).\n\n\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n```ruby\ngem "beagle", "~> 0.0.1"\n```\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "beagle"\n\nbeagle = Beagle::Client.new(\n  api_key: ENV["BEAGLE_API_KEY"], # This is the default and can be omitted\n  environment: "staging" # defaults to "production"\n)\n\nplans = beagle.plans.list\n\nputs(plans.data)\n```\n\n\n\n\n\n\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `Beagle::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  plan = beagle.plans.list\nrescue Beagle::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue Beagle::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue Beagle::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nbeagle = Beagle::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nbeagle.plans.list(request_options: {max_retries: 5})\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nbeagle = Beagle::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nbeagle.plans.list(request_options: {timeout: 5})\n```\n\nOn timeout, `Beagle::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `Beagle::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\nplans =\n  beagle.plans.list(\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(plans[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `Beagle::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `Beagle::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nbeagle.plans.list \n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nbeagle.plans.list\n\n# You can also splat a full Params class:\nparams = Beagle::PlanListParams.new\nbeagle.plans.list(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :"Premium Paying"\nputs(Beagle::EnrollmentCreateParams::Status::PREMIUM_PAYING)\n\n# Revealed type: `T.all(Beagle::EnrollmentCreateParams::Status, Symbol)`\nT.reveal_type(Beagle::EnrollmentCreateParams::Status::PREMIUM_PAYING)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nbeagle.enrollments.create(\n  status: Beagle::EnrollmentCreateParams::Status::PREMIUM_PAYING,\n  # …\n)\n\n# Literal values are also permissible:\nbeagle.enrollments.create(\n  status: :"Premium Paying",\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/stainless-sdks/beagle-ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Beagle TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@corgi-tech/beagle.svg?label=npm%20(stable))](https://npmjs.org/package/@corgi-tech/beagle) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@corgi-tech/beagle)\n\nThis library provides convenient access to the Beagle REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Beagle MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40corgi-tech%2Fbeagle-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBjb3JnaS10ZWNoL2JlYWdsZS1tY3AiXSwiZW52Ijp7IkJFQUdMRV9BUElfS0VZIjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40corgi-tech%2Fbeagle-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40corgi-tech%2Fbeagle-mcp%22%5D%2C%22env%22%3A%7B%22BEAGLE_API_KEY%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @corgi-tech/beagle\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n  environment: 'staging', // defaults to 'production'\n});\n\nconst plans = await client.plans.list();\n\nconsole.log(plans.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  apiKey: process.env['BEAGLE_API_KEY'], // This is the default and can be omitted\n  environment: 'staging', // defaults to 'production'\n});\n\nconst plans: Beagle.PlanListResponse = await client.plans.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst plans = await client.plans.list().catch(async (err) => {\n  if (err instanceof Beagle.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Beagle({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.plans.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Beagle({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.plans.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Beagle();\n\nconst response = await client.plans.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: plans, response: raw } = await client.plans.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(plans.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `BEAGLE_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Beagle from '@corgi-tech/beagle';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Beagle({\n  logger: logger.child({ name: 'Beagle' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.plans.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Beagle from '@corgi-tech/beagle';\nimport fetch from 'my-fetch';\n\nconst client = new Beagle({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Beagle from '@corgi-tech/beagle';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Beagle({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Beagle from '@corgi-tech/beagle';\n\nconst client = new Beagle({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Beagle from 'npm:@corgi-tech/beagle';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Beagle({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/corgi-tech/beagle-sdks/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
