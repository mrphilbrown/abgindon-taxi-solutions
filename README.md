# Abingdon Wagon Taxi Solutions Corp

A **fictional**, local-only driver portal for the
[AI TrustBOM taxi workshop](https://github.com/mrphilbrown/Spaverlock.AI.TrustBOM/blob/main/documentation/guides/tutorial.md).
All names, contracts, earnings, and absence records are synthetic. This starter
has **no AI dependency, MCP server, or live employee data**: that is intentional.
Follow the workshop to introduce each capability and inspect the resulting
draft AI bill of materials.

```powershell
git clone https://github.com/mrphilbrown/abingdon-wagon-taxi-demo.git
cd abingdon-wagon-taxi-demo
npm test
npm start
```

Open `http://localhost:3000/`, `/drivers/driver-101/contract`,
`/drivers/driver-101/earnings`, and `/managers/overview`. Stop the server
with Ctrl+C before moving to the workshop steps.

Node.js 20+ is required; there is no installation step or external service
for the starter. This is a teaching fixture, **not** an HR product: route IDs
are not authentication, and the sample has no authorization, audit trail,
production data, or employment-decision automation. Never deploy it or use
real employee records. Managers see only aggregate synthetic figures.
