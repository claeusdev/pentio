import { Payroll } from "src/utils/types";
import Table from "src/components/Table";

interface PayrollListProps {
  state: Payroll[];
}

export default function PayrollList({ state }: PayrollListProps) {
  return (
    <div>
      <Table data={state} />
    </div>
  );
}
