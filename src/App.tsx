import { Container, Spinner, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Api from "src/api";
import PayrollList from "src/components/PayrollList";
import StatsSection from "src/components/Stat";

import { Payroll } from "src/utils/types";

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
        <StatsSection payroll={state} />
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
