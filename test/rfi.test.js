import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("fictional buyer RFI has unique IDs and bank-mappable questions", () => {
  const rows = readFileSync(new URL("../rfi/request.csv", import.meta.url), "utf8")
    .trim().split(/\r?\n/);
  assert.equal(rows.shift(), "id,text,section");
  assert.deepEqual(rows.map((row) => row.split(",")[0]), [
    "RFI-01", "RFI-02", "RFI-03", "RFI-04", "RFI-05"
  ]);
  assert.match(rows[1], /Which models and vendors are used\?/);
  assert.match(rows[2], /Is customer data used to train\?/);
});
