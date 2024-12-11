import { useState } from "react";
import TableGrid from './TableGrid'

export default function Table() {

    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
    const [submit, setSubmit] = useState({
        rows: rows,
        cols: columns
    })

    function handleClick() {
        setSubmit({
            rows: rows,
            cols: columns
        })
    }

    return (
        <div className="table">
            <div>

            <div className="rows">
                <label htmlFor="rows">Rows: </label>
                <input value={rows}
                    id="rows"
                    autoComplete="off"
                    onChange={(e) => setRows(Number(e.target.value))} />
            </div>
            <div className="columns">
                <label htmlFor="columns">Columns:   </label>
                <input value={columns}
                    id="columns"
                    autoComplete="off"
                    onChange={(e) => setColumns(Number(e.target.value))} />
            </div>
            <div className="btn-container">
                <button className="submit"
                onClick={handleClick}>SUBMIT</button>
            </div>

        </div>
            <TableGrid submit={submit} />
        </div>
    )
};