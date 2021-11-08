import {
  Box,
  Stack,
  StackDivider,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { HiCheckCircle, HiOutlineCash, HiUserGroup } from "react-icons/hi";
import StatCard from "src/components/StatCard";

const StatsSection = () => {
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
              accentColor="red.500"
              icon={<HiOutlineCash />}
              data={{
                label: "Total Earnings",
                value: "24000",
                change: 4.31,
              }}
            />
            <StatCard
              accentColor="cyan.500"
              icon={<HiCheckCircle />}
              data={{ label: "Total Pensions", value: "40", change: -4.5 }}
            />
            <StatCard
              accentColor="cyan.500"
              icon={<HiCheckCircle />}
              data={{ label: "Total Bonuses", value: "40", change: -4.5 }}
            />
            <StatCard
              accentColor="cyan.500"
              icon={<HiCheckCircle />}
              data={{ label: "Total Payroll", value: "40", change: -4.5 }}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default StatsSection;
