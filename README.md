# Abgindon Taxi Solution Co.

We are **Abgindon Taxi Solution Co.**, a fictional company like Contoso.
Our drivers check contracts and earnings here, and our managers see an
aggregate trips-and-absence dashboard. You are joining our platform team.
Follow [our AI TrustBOM story](https://github.com/mrphilbrown/Spaverlock.AI.TrustBOM/blob/main/documentation/guides/tutorial.md)
to add Gemini questions, an MCP earnings tool, and an evidence-backed
response to a buyer's RFI. We have **no AI dependency or MCP server yet**;
that is where the story starts.

```powershell
git clone https://github.com/mrphilbrown/abgindon-taxi-solution-co.git
cd abgindon-taxi-solution-co
npm test
npm start
```

Open `http://localhost:3000/`, `/drivers/driver-101/contract`,
`/drivers/driver-101/earnings`, and `/managers/overview`. Stop the server
with Ctrl+C before moving to the workshop steps.

Node.js 20+ is required; our starter has no external dependencies.
All names and records are synthetic. This is a teaching fixture, **not** an
HR product: URL IDs are not authentication; there is no authorization,
audit trail, production data, or automated employment decision. Never
deploy it or use real employee records.

A fictional buyer's [RFI request](rfi/request.csv) is included. Our
`npm run rfi` refuses an unapproved graph; once Trust has approved and
stamped a graph, `trustbom export` followed by `npm run rfi` creates
cited answers in `export/answers.csv`. Unknown answers and unmatched
questions still need our Trust team; nothing is emailed to the buyer.
