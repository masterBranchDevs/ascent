import { ReactNode } from "react";

// Complaint Redressal table data
export const complaintsData = [
  {
    srNo: 1,
    receivedFrom: "Directly from Investors",
    pendingLastMonth: 0,
    received: 0,
    resolved: 0,
    totalPending: 0,
    pending3Months: 0,
    avgResolutionTime: 0,
    pendingOver3Months: 0
  },
  {
    srNo: 2,
    receivedFrom: "SEBI (SCORES)",
    pendingLastMonth: 0,
    received: 0,
    resolved: 0,
    totalPending: 0,
    pending3Months: 0,
    avgResolutionTime: 0,
    pendingOver3Months: 0
  },
  {
    srNo: 3,
    receivedFrom: "Other Sources (if any)",
    pendingLastMonth: 0,
    received: 0,
    resolved: 0,
    totalPending: 0,
    pending3Months: 0,
    avgResolutionTime: 0,
    pendingOver3Months: 0
  },
] as const;

// Monthly Trend table data
export const trendMonthlyData = [
  { srNo: 1, month: "May'25", carried: 0, received: 0, resolved: 0, pending: 0 },
  { srNo: 2, month: "Apr'25", carried: 0, received: 0, resolved: 0, pending: 0 },
  { srNo: 3, month: "Mar'25", carried: 0, received: 0, resolved: 0, pending: 0 },
  { srNo: 4, month: "Feb'25", carried: 0, received: 0, resolved: 0, pending: 0 },
  { srNo: 5, month: "Jan'25", carried: 0, received: 0, resolved: 0, pending: 0 },
  { srNo: 6, month: "Grand Total", carried: 0, received: 0, resolved: 0, pending: 0 },
] as const;

// Yearly Trend table data
export const trendYearlyData = [
  { srNo: 1, year: "2025-26", carried: "0", received: "0", resolved: "0", pending: "0" },
  { srNo: 2, year: "Grand Total", carried: "0", received: "0", resolved: "0", pending: "0" },
] as const;
