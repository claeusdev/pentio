import { UserInterface } from "src/components/User/User";
import {Payroll} from "src/utils/types";
export const badgeEnum: Record<string, string> = {
  Sales: "green",
  Marketing: "orange",
  Engineering: "red",
};

export const sampleUser: UserInterface = {
  "Employee ID": "PENT3453453",
  Departments: "Engineering",
  "Employee Name": "Jack Pento",
  currency: "Usd",
};

export const getPayrollTotals = (payroll: Payroll[]) => {
  return {
    totalNetPay: calculateTotalAmount(payroll, "Net Pay"),
    totalBonuses: calculateTotalAmount(payroll, "Bonus"),
    totalPension:
      calculateTotalAmount(payroll, "Employer Pension") +
      calculateTotalAmount(payroll, "Employee Pension"),
    totalPayroll: calculateTotalAmount(payroll, "Base Salary"),
  };
};

export const calculateTotalAmount = (
  collection: Payroll[],
  field: string
): number => {
  return collection.reduce((acc, payroll) => acc + Number(payroll[field]), 0);
};

export const CURRENCY = {
  GBP: "£",
  USD: "$",
};

export const convertNumberToString = (value: number): string => String(value);
