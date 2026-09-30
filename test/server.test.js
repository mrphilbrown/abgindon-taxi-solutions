import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { createServer } from "../src/server.js";

const server = createServer();
let base;

before(async () => {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});

after(() => new Promise((resolve) => server.close(resolve)));

test("driver can read synthetic contract and earnings", async () => {
  const contract = await (await fetch(`${base}/drivers/driver-101/contract`)).json();
  const earnings = await (await fetch(`${base}/drivers/driver-101/earnings`)).json();
  assert.match(contract.contract, /GBP 16/);
  assert.equal(earnings.earningsGbp, 672);
});

test("portal identifies our taxi company", async () => {
  const home = await (await fetch(base)).json();
  assert.equal(home.name, "Abgindon Taxi Solutions");
});

test("manager sees aggregates rather than driver records", async () => {
  assert.deepEqual(await (await fetch(`${base}/managers/overview`)).json(), {
    driverCount: 2,
    completedTrips: 80,
    absenceDays: 1
  });
});

test("owner sees fleet totals rather than driver records", async () => {
  assert.deepEqual(await (await fetch(`${base}/owners/overview`)).json(), {
    driverCount: 2,
    completedTrips: 80,
    driverEarningsGbp: 1318
  });
});

test("unknown driver returns 404", async () => {
  assert.equal((await fetch(`${base}/drivers/unknown/earnings`)).status, 404);
});
