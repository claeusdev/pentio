import {
  Badge,
  Box,
  Circle,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

interface StatProps {
  icon: React.ReactElement;
  accentColor: string;
  data: {
    change: number;
    label: string;
    value: string;
  };
  currency?: string;
}

const StatCard = ({ data, icon, accentColor, currency = "$"}: StatProps) => {
  const { label, value, change } = data;

  const isNegative = change < 0;

  return (
    <Stack mx="auto" spacing="3">
      <Box color={mode("gray.600", "gray.400")} fontWeight="medium">
        {label}
      </Box>
      <HStack spacing="3">
        <Circle flexShrink={0} size="6" bg={accentColor} color="white">
          {icon}
        </Circle>
        <Heading as="h1" size="xl" fontWeight="bold">
          {currency}{value}
        </Heading>
      </HStack>
      <HStack>
        <Text>Past Month</Text>
        <Badge
          fontSize="sm"
          px="2"
          rounded="full"
          colorScheme={isNegative ? "red" : "green"}
        >
          {change}%
        </Badge>
      </HStack>
    </Stack>
  );
};

export default StatCard;
