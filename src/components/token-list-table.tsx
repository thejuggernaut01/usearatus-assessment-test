import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TableHead } from "@/components/ui/table";
import { flexRender, ColumnDef } from "@tanstack/react-table";
import { Token } from "@/types";

export const DraggableColumnHeader = ({ header }: { header: any }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: header.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableHead ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </TableHead>
  );
};

export const columns: ColumnDef<Token>[] = [
  {
    id: "name",
    header: "Name",
    accessorFn: (row) => row.name,
  },
  {
    id: "price",
    header: "Price",
    accessorFn: (row) => row.price,
  },
  {
    id: "change1h",
    header: "1h Change",
    accessorFn: (row) => row.change1h,
  },
  {
    id: "change24h",
    header: "24h Change",
    accessorFn: (row) => row.change24h,
  },
  {
    id: "change7d",
    header: "7d Change",
    accessorFn: (row) => row.change7d,
  },
  {
    id: "volume24h",
    header: "24h Volume",
    accessorFn: (row) => row.volume24h,
  },
  {
    id: "marketCap",
    header: "Market Cap",
    accessorFn: (row) => row.marketCap,
  },
];
