interface IPayroll {
  [key: string]: string | number;
}

export interface Payroll extends IPayroll {
  ["Payroll Period"]: string;
  ["Pay Date"]: string;
  ["Employee ID"]: string;
  ["Employee Name"]: string;
  ["Departments"]: string;
  ["currency"]: string;
  ["Hours Worked"]: number;
  ["Base Salary"]: number;
  ["Bonus"]: number;
  ["Student Loan Repayment"]: number;
  ["Income Tax"]: number;
  ["Employee Pension"]: number;
  ["Employer Pension"]: number;
  ["Net Pay"]: number;
}
