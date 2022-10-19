function TableRows({ rowsData, deleteTableRows, handleChange }) {
    return (
        rowsData.map((data, index) => {
            const { fullName, age, city } = data;
            return (
                <tr key={index}>
                    <td>
                        <input type="text" value={fullName} onChange={(evnt) => (handleChange(index, evnt))} name="fullName" className="form-control" />
                    </td>
                    <td><input type="text" value={age} onChange={(evnt) => (handleChange(index, evnt))} name="age" className="form-control" /> </td>
                    <td><input type="text" value={city} onChange={(evnt) => (handleChange(index, evnt))} name="city" className="form-control" /> </td>
                    <td><button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button></td>
                </tr>
            )
        })
    )
}

export default TableRows;