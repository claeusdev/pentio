import { Container, Spinner, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Api from "src/api";
import PayrollList from "src/components/PayrollList";
import StatsSection from "src/components/Stat";

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
    <Box my={4}>
      <Container maxW="container.lg">
        <Text>Welcome, Acme Corp.</Text>
        <StatsSection />
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
            <PayrollList state={state} />
          </>
        )}
      </Container>
    </Box>
  );
}

export default App;
