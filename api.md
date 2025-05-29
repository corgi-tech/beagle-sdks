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

Methods:

- <code title="post /api/property-managers">client.propertyManagers.<a href="./src/resources/property-managers.ts">create</a>({ ...params }) -> PropertyManager</code>
- <code title="get /api/property-managers/{id}">client.propertyManagers.<a href="./src/resources/property-managers.ts">retrieve</a>(id) -> PropertyManager</code>
- <code title="patch /api/property-managers/{id}">client.propertyManagers.<a href="./src/resources/property-managers.ts">update</a>(id, { ...params }) -> PropertyManager</code>
- <code title="get /api/property-managers">client.propertyManagers.<a href="./src/resources/property-managers.ts">list</a>({ ...params }) -> PropertyManagersPropertyManagersPage</code>
- <code title="delete /api/property-managers/{id}">client.propertyManagers.<a href="./src/resources/property-managers.ts">delete</a>(id) -> void</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants.ts">Address</a></code>
- <code><a href="./src/resources/tenants.ts">Contact</a></code>
- <code><a href="./src/resources/tenants.ts">Tenant</a></code>

Methods:

- <code title="post /api/tenants">client.tenants.<a href="./src/resources/tenants.ts">create</a>({ ...params }) -> Tenant</code>
- <code title="get /api/tenants/{id}">client.tenants.<a href="./src/resources/tenants.ts">retrieve</a>(id) -> Tenant</code>
- <code title="patch /api/tenants/{id}">client.tenants.<a href="./src/resources/tenants.ts">update</a>(id, { ...params }) -> Tenant</code>
- <code title="get /api/tenants">client.tenants.<a href="./src/resources/tenants.ts">list</a>({ ...params }) -> TenantsTenantsPage</code>
- <code title="delete /api/tenants/{id}">client.tenants.<a href="./src/resources/tenants.ts">delete</a>(id) -> void</code>

# Enrollments

Types:

- <code><a href="./src/resources/enrollments.ts">Enrollment</a></code>

Methods:

- <code title="post /api/enrollments">client.enrollments.<a href="./src/resources/enrollments.ts">create</a>({ ...params }) -> Enrollment</code>
- <code title="get /api/enrollments/{id}">client.enrollments.<a href="./src/resources/enrollments.ts">retrieve</a>(id) -> Enrollment</code>
- <code title="get /api/enrollments">client.enrollments.<a href="./src/resources/enrollments.ts">list</a>({ ...params }) -> EnrollmentsEnrollmentsPage</code>
- <code title="delete /api/enrollments/{id}">client.enrollments.<a href="./src/resources/enrollments.ts">lapse</a>(id) -> void</code>
