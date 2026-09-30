const drivers = {
  "driver-101": {
    name: "Alex Example",
    contract: "Hourly rate: GBP 16. Paid leave: 25 days per year.",
    completedTrips: 42,
    earningsGbp: 672,
    absenceDays: 1
  },
  "driver-102": {
    name: "Sam Sample",
    contract: "Hourly rate: GBP 17. Paid leave: 25 days per year.",
    completedTrips: 38,
    earningsGbp: 646,
    absenceDays: 0
  }
};

export function driverRecord(id) {
  return drivers[id] ?? null;
}

export function managerOverview() {
  const records = Object.values(drivers);
  return {
    driverCount: records.length,
    completedTrips: records.reduce((sum, driver) => sum + driver.completedTrips, 0),
    absenceDays: records.reduce((sum, driver) => sum + driver.absenceDays, 0)
  };
}

export function ownerOverview() {
  const records = Object.values(drivers);
  return {
    driverCount: records.length,
    completedTrips: records.reduce((sum, driver) => sum + driver.completedTrips, 0),
    driverEarningsGbp: records.reduce((sum, driver) => sum + driver.earningsGbp, 0)
  };
}
