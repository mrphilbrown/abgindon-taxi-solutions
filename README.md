# Abgindon Taxi Solutions

For this tutorial, **we are Abgindon Taxi Solutions**, an AI-first taxi
services company. We help our customers improve the experience of their
drivers, managers, and owners. Drivers check contracts and earnings,
managers see trips and absence, and owners see fleet totals. Our customers
need to know how we use AI to provide these services.

Join our platform team in the [AI TrustBOM tutorial](https://github.com/mrphilbrown/Spaverlock.AI.TrustBOM/blob/main/documentation/guides/tutorial.md):
introduce Gemini questions and an MCP earnings tool, then generate a
cited response to a customer RFI. This starter represents an early
commit, **before** those AI integrations are added.

```powershell
git clone https://github.com/mrphilbrown/abgindon-taxi-solutions.git
cd abgindon-taxi-solutions
npm test
npm start
```

Open `http://localhost:3000/`, `/drivers/driver-101/contract`,
`/drivers/driver-101/earnings`, `/managers/overview`, and
`/owners/overview`. Stop the server with Ctrl+C before moving on.

Node.js 20+ is required; our starter has no external dependencies.
All names and records are synthetic. This is a teaching fixture, **not** an
HR product: URL IDs are not authentication; there is no authorization,
audit trail, production data, or automated employment decision. Never
deploy it or use real employee records.

A customer's sample [RFI request](rfi/request.csv) is included. Our
`npm run rfi` refuses an unapproved graph; once Trust has approved and
stamped a graph, `trustbom export` followed by `npm run rfi` creates
cited answers in `export/answers.csv`. Unknown answers and unmatched
questions still need our Trust team; nothing is emailed to the buyer.
