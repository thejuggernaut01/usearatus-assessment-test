"use client";

import React, { useState } from "react";
import {
  ColumnOrderState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BaseHelper from "@/utils/helper";
// import { ResponsiveLine } from '@nivo/line';
// import { useTokenData } from '@/services/home.service';

import { data } from "@/data";
import { DraggableColumnHeader, columns } from "@/components/token-list-table";

export default function TokenTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  // const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
  //   columns.map((column) => column.id),
  // );
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    columns
      .map((column) => column.id)
      .filter((id): id is string => id !== undefined),
  );
  const [columnVisibility, setColumnVisibility] = useState({});
  const [customViewName, setCustomViewName] = useState("");
  const [savedViews, setSavedViews] = useState<{ [key: string]: string[] }>({
    Trending: columnOrder,
  });
  const [activeView, setActiveView] = useState("Trending");
  //   const { tokens } = useTokenData();

  const table = useReactTable({
    data: data, // Add your data here
    columns,
    state: {
      sorting,
      columnOrder,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnOrderChange: setColumnOrder,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: (event) => {
        if (event instanceof KeyboardEvent) {
          return { x: 0, y: 0 };
        }
        return undefined;
      },
    }),
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setColumnOrder((old) => {
        const oldIndex = old.indexOf(active.id);
        const newIndex = old.indexOf(over.id);
        return BaseHelper.arrayMove(old, oldIndex, newIndex);
      });
    }
  };

  const saveCustomView = () => {
    if (customViewName) {
      setSavedViews((prev) => ({
        ...prev,
        [customViewName]: columnOrder.filter((col) => {
          const column = table.getColumn(col);
          return column ? column.getIsVisible() : false;
        }),
      }));
      setActiveView(customViewName);
      setCustomViewName("");
    }
  };

  const loadView = (viewName: string) => {
    setActiveView(viewName);
    const viewColumns = savedViews[viewName];
    setColumnOrder(viewColumns);
    setColumnVisibility(
      Object.fromEntries(
        columns.map((col) => [col.id, viewColumns.includes(col.id as string)]),
      ),
    );
  };

  return (
    <>
      <Card className="w-full overflow-hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
        <CardHeader className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Token List
          </CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Explore and analyze market data for various tokens
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs value={activeView} onValueChange={loadView} className="w-full">
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-t-lg">
              {Object.keys(savedViews).map((viewName) => (
                <TabsTrigger
                  key={viewName}
                  value={viewName}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 rounded-md transition-colors"
                >
                  {viewName}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToHorizontalAxis]}
          >
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-900">
                  <SortableContext
                    items={columnOrder}
                    strategy={horizontalListSortingStrategy}
                  >
                    {table.getHeaderGroups()[0].headers.map((header) => (
                      <DraggableColumnHeader key={header.id} header={header} />
                    ))}
                  </SortableContext>
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className={
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50 dark:bg-gray-900"
                    }
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="p-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DndContext>
        </CardContent>
        <CardFooter className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Customize View
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 rounded-lg shadow-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Customize View
                </DialogTitle>
                <DialogDescription className="text-gray-500 dark:text-gray-400">
                  Tailor your token list view by selecting columns and saving
                  your preferences.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-6">
                {columns.map((column) => (
                  <div key={column.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={column.id}
                      checked={
                        table.getColumn(column.id as string)?.getIsVisible() ??
                        false
                      }
                      onCheckedChange={(value) =>
                        table
                          .getColumn(column.id as string)
                          ?.toggleVisibility(!!value)
                      }
                      className="border-2 border-gray-300 dark:border-gray-600 rounded"
                    />
                    <label
                      htmlFor={column.id}
                      className="text-sm font-medium text-gray-700 dark:text-gray-200 cursor-pointer"
                    >
                      {column.header as string}
                    </label>
                  </div>
                ))}
                <Input
                  placeholder="Name your custom view"
                  value={customViewName}
                  onChange={(e) => setCustomViewName(e.target.value)}
                  className="border-2 border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
              <DialogFooter>
                <Button
                  onClick={saveCustomView}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Save View
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
}
