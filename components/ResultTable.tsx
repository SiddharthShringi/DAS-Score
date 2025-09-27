import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IGroupedByCategory } from "@/lib/types";

interface ResultTableProps {
  groupedData?: IGroupedByCategory[];
  categoryTotals: Record<string, number>;
}

export default function ResultTable({
  categoryTotals,
  groupedData,
}: ResultTableProps) {
  console.log({ categoryTotals, groupedData });
  return (
    <div className="flex justify-center w-full my-10 p-3 lg:p-0">
      <div className="overflow-x-auto max-w-4xl w-full">
        <div className="border border-gray-300 rounded-lg overflow-hidden mx-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-b border-accent-foreground">
                <TableHead className="border-r text-base text-primary border-accent-foreground">
                  Value System
                </TableHead>
                <TableHead className="border-r text-base text-primary border-accent-foreground">
                  Questions Through
                </TableHead>
                <TableHead className="border-r text-base text-primary border-accent-foreground">
                  Individual Score
                </TableHead>
                <TableHead className="border-r text-base text-primary border-accent-foreground">
                  Total Score
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groupedData?.map((group, index) => (
                <TableRow
                  className="border-b border-accent-foreground"
                  key={index}
                >
                  <TableCell className="border-r border-accent-foreground">
                    {group.category}
                  </TableCell>
                  <TableCell className="border-r border-accent-foreground">
                    {`${group.QuestionTo} to ${group.QuestionFrom}`}
                  </TableCell>
                  <TableCell className="border-r border-accent-foreground">
                    {group.IndividualScore.join(", ")}
                  </TableCell>
                  <TableCell className="border-r border-accent-foreground">
                    {group.TotalScore}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
