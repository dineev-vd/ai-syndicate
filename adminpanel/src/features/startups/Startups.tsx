import React, { useMemo } from "react";
import { Column, useRowSelect, useTable } from "react-table";
import { useStartupsQuery } from "./startupsAPI";
import styled from "styled-components";
import { Startup } from "./types";
import editIcon from "../../assets/045-edit-1.svg";
import addIcon from "../../assets/067-add-1.svg";

const Styles = styled.div`
  padding: 1rem 3rem;

  table {
    box-sizing: border-box;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 24px;
    background-color: #fcfcfc;

    th {
      text-align: left;
    }

    td,
    th {
      padding: 20px 16px;
    }

    tr {
      border-left: solid 5px transparent;
      border-bottom: solid 1px #eceaf3;
    }

    .row {
      :last-child {
        margin-bottom: 32px;
      }

      :hover {
        background: white;
        border-left: solid 5px purple;
        box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export const Startups = () => {
  const { data, isLoading } = useStartupsQuery();

  const columns = useMemo<Column<Startup>[]>(
    () => [
      { Header: "Id", accessor: "id" },
      { Header: "Title", accessor: "title" },
      { Header: "Description", accessor: "description" },
      { Header: "Budget", accessor: "targetBudget" },
      { Header: "Domain", accessor: "domain" },
      { Header: "Status", accessor: "currentStatus" },
    ],
    []
  );

  if (isLoading) {
    return (
      <>
        you spinning me right round baby right round like a record spinning
        round round
      </>
    );
  }

  if (!data) {
    return <>breaking bad</>;
  }

  return (
    <Styles>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          margin: "8px",
          fontSize: "20px",
          fontWeight: "bold",
          alignItems: "center",
        }}
      >
        Startups entities
        <div
          style={{
            justifySelf: "flex-end",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "lightblue",
            padding: 6,
            borderRadius: 10,
          }}
          onClick={() => console.log("lol")}
        >
          Add new entity
          <img
            src={addIcon}
            style={{
              width: 20,
              height: 20,
              marginLeft: 4,
            }}
          />
        </div>
      </div>
      <StartupsTable columns={columns} data={data} />
    </Styles>
  );
};

export const StartupsTable = ({
  columns,
  data,
}: {
  columns: Column<Startup>[];
  data?: Startup[];
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: data ?? [],
      },
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          ...columns,
          {
            id: "actions",
            Header: () => <div>Actions</div>,
            Cell: () => (
              <img
                src={editIcon}
                style={{
                  width: 20,
                  height: 20,
                  cursor: "pointer",
                }}
                onClick={() => console.log("lol")}
              />
            ),
          },
        ]);
      }
    );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="header">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="row">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
          <tr style={{ height: 26 }}></tr>
        </tbody>
      </table>
    </>
  );
};
