import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Api from "src/api";
import Application from "src/components/App";

export interface Payroll {
  ["Payroll Period"]: string;
  ["Pay Date"]: string;
  ["Employee ID"]: string;
  ["Employee Name"]: string;
  Departments: string[];
  currency: string;
  ["Hours Worked"]: number;
  ["Base Salary"]: number;
  Bonus: number;
  ["Student Loan Repayment"]: number;
  ["Income Tax"]: number;
  ["Employee Pension"]: number;
  ["Employer Pension"]: number;
  ["Net Pay"]: number;
}

function App() {
  const [state, setstate] = useState<Payroll[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  useEffect(() => {
    async function getProduct() {
      setIsLoading(true);
      const response = await new Api().getPayroll();
      setstate(response);
      setIsLoading(false);
    }
    getProduct();
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          {state.map((payroll) => (
            <p>{payroll["Employee Name"]}</p>
          ))}
        </>
      )}
      <Application />
    </div>
  );
}

export default App;
