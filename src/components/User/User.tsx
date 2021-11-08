import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";

export interface UserInterface {
  ["Employee ID"]: string;
  ["Employee Name"]: string;
  ["Departments"]: string;
  currency: string;
}

interface UserProps {
  user: UserInterface;
}

const User = ({ user }: UserProps) => {
  console.log("USER", user)

  return (
    <Stack direction="row" spacing="4" align="center">
      <Box>
        <Box fontSize="sm" fontWeight="medium">
          {user}
        </Box>
      </Box>
    </Stack>
  );
};

export default User;
