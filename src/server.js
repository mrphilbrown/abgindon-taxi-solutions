import { createServer as createHttpServer } from "node:http";
import { pathToFileURL } from "node:url";
import { driverRecord, managerOverview, ownerOverview } from "./data.js";

export function createServer() {
  return createHttpServer((request, response) => {
    const url = new URL(request.url, "http://localhost");
    const parts = url.pathname.split("/").filter(Boolean);
    let body;
    let status = 200;

    if (url.pathname === "/") {
      body = { name: "Abgindon Taxi Solutions", notice: "Synthetic workshop data only" };
    } else if (parts.length === 3 && parts[0] === "drivers" &&
               (parts[2] === "contract" || parts[2] === "earnings")) {
      const driver = driverRecord(parts[1]);
      if (!driver) {
        status = 404;
        body = { error: "Unknown driver" };
      } else if (parts[2] === "contract") {
        body = { driver: driver.name, contract: driver.contract };
      } else {
        body = { driver: driver.name, earningsGbp: driver.earningsGbp };
      }
    } else if (url.pathname === "/managers/overview") {
      body = managerOverview();
    } else if (url.pathname === "/owners/overview") {
      body = ownerOverview();
    } else {
      status = 404;
      body = { error: "Not found" };
    }

    response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify(body));
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  createServer().listen(3000, "127.0.0.1", () => {
    console.log("Synthetic taxi portal listening on http://127.0.0.1:3000");
  });
}
