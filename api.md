# Plans

Types:

- <code><a href="./src/resources/plans.ts">Plan</a></code>
- <code><a href="./src/resources/plans.ts">PlanListResponse</a></code>

Methods:

- <code title="get /api/plans/{code}">client.plans.<a href="./src/resources/plans.ts">retrieve</a>(code) -> Plan</code>
- <code title="get /api/plans">client.plans.<a href="./src/resources/plans.ts">list</a>() -> PlanListResponse</code>

# PropertyManagers

Types:

- <code><a href="./src/resources/property-managers.ts">Pagination</a></code>
- <code><a href="./src/resources/property-managers.ts">PropertyManager</a></code>
- <code><a href="./src/resources/property-managers.ts">PropertyManagerListResponse</a></code>

Methods:

- <code title="post /api/property-managers">client.propertyManagers.<a href="./src/resources/property-managers.ts">create</a>({ ...params }) -> PropertyManager</code>
- <code title="get /api/property-managers/{id}">client.propertyManagers.<a href="./src/resources/property-managers.ts">retrieve</a>(id) -> PropertyManager</code>
- <code title="patch /api/property-managers/{id}">client.propertyManagers.<a href="./src/resources/property-managers.ts">update</a>(id, { ...params }) -> PropertyManager</code>
- <code title="get /api/property-managers">client.propertyManagers.<a href="./src/resources/property-managers.ts">list</a>({ ...params }) -> PropertyManagerListResponse</code>
- <code title="delete /api/property-managers/{id}">client.propertyManagers.<a href="./src/resources/property-managers.ts">delete</a>(id) -> void</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants.ts">Address</a></code>
- <code><a href="./src/resources/tenants.ts">Contact</a></code>
- <code><a href="./src/resources/tenants.ts">Tenant</a></code>
- <code><a href="./src/resources/tenants.ts">TenantListResponse</a></code>

Methods:

- <code title="post /api/tenants">client.tenants.<a href="./src/resources/tenants.ts">create</a>({ ...params }) -> Tenant</code>
- <code title="get /api/tenants/{id}">client.tenants.<a href="./src/resources/tenants.ts">retrieve</a>(id) -> Tenant</code>
- <code title="patch /api/tenants/{id}">client.tenants.<a href="./src/resources/tenants.ts">update</a>(id, { ...params }) -> Tenant</code>
- <code title="get /api/tenants">client.tenants.<a href="./src/resources/tenants.ts">list</a>({ ...params }) -> TenantListResponse</code>
- <code title="delete /api/tenants/{id}">client.tenants.<a href="./src/resources/tenants.ts">delete</a>(id) -> void</code>

# Enrollments

Types:

- <code><a href="./src/resources/enrollments.ts">Enrollment</a></code>
- <code><a href="./src/resources/enrollments.ts">EnrollmentListResponse</a></code>

Methods:

- <code title="post /api/enrollments">client.enrollments.<a href="./src/resources/enrollments.ts">create</a>({ ...params }) -> Enrollment</code>
- <code title="get /api/enrollments/{id}">client.enrollments.<a href="./src/resources/enrollments.ts">retrieve</a>(id) -> Enrollment</code>
- <code title="get /api/enrollments">client.enrollments.<a href="./src/resources/enrollments.ts">list</a>({ ...params }) -> EnrollmentListResponse</code>
- <code title="delete /api/enrollments/{id}">client.enrollments.<a href="./src/resources/enrollments.ts">lapse</a>(id) -> void</code>

# InsuranceVerification

Types:

- <code><a href="./src/resources/insurance-verification.ts">InsuranceVerificationVerifyResponse</a></code>

Methods:

- <code title="post /api/insurance-verification">client.insuranceVerification.<a href="./src/resources/insurance-verification.ts">verify</a>({ ...params }) -> InsuranceVerificationVerifyResponse</code>

# Webhook

## Endpoints

Types:

- <code><a href="./src/resources/webhook/endpoints.ts">EndpointCreateResponse</a></code>
- <code><a href="./src/resources/webhook/endpoints.ts">EndpointRetrieveResponse</a></code>
- <code><a href="./src/resources/webhook/endpoints.ts">EndpointUpdateResponse</a></code>
- <code><a href="./src/resources/webhook/endpoints.ts">EndpointListResponse</a></code>

Methods:

- <code title="post /api/webhook/endpoints">client.webhook.endpoints.<a href="./src/resources/webhook/endpoints.ts">create</a>({ ...params }) -> EndpointCreateResponse</code>
- <code title="get /api/webhook/endpoints/{id}">client.webhook.endpoints.<a href="./src/resources/webhook/endpoints.ts">retrieve</a>(id) -> EndpointRetrieveResponse</code>
- <code title="patch /api/webhook/endpoints/{id}">client.webhook.endpoints.<a href="./src/resources/webhook/endpoints.ts">update</a>(id, { ...params }) -> EndpointUpdateResponse</code>
- <code title="get /api/webhook/endpoints">client.webhook.endpoints.<a href="./src/resources/webhook/endpoints.ts">list</a>({ ...params }) -> EndpointListResponse</code>
- <code title="delete /api/webhook/endpoints/{id}">client.webhook.endpoints.<a href="./src/resources/webhook/endpoints.ts">delete</a>(id) -> void</code>
