import {
  Box,
  Stack,
  StackDivider,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { HiCheckCircle, HiOutlineCash } from "react-icons/hi";
import StatCard from "src/components/StatCard";
import { convertNumberToString, getPayrollTotals } from "src/utils";
import { Payroll } from "src/utils/types";

interface StatsSectionProps  {
  payroll: Payroll[]
}
const StatsSection = ({ payroll }: StatsSectionProps) => {
  const totalSummary = getPayrollTotals(payroll)
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} p="6">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Box bg={mode("white", "gray.700")} p="10" rounded="xl" shadow="base">
          <Stack
            spacing="8"
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            divider={<StackDivider />}
          >
            <StatCard
              accentColor="green.500"
              icon={<HiCheckCircle />}
              data={{ label: "Total Pensions", value: convertNumberToString(totalSummary.totalPension), change: -4.5 }}
            />
            <StatCard
              accentColor="cyan.500"
              icon={<HiCheckCircle />}
              data={{ label: "Total Bonuses", value: convertNumberToString(totalSummary.totalBonuses), change: -4.5 }}
            />
            <StatCard
              accentColor="red.500"
              icon={<HiOutlineCash />}
              data={{ label: "Total Payroll", value: convertNumberToString(totalSummary.totalPayroll), change: -4.5 }}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default StatsSection;
