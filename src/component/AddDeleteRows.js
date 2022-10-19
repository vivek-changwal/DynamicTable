import React, {useState} from 'react';
import Users from './records.json'
import Table from './Table';

function AddAndDelete(props) {
    const [newRecord , setRecords] = useState({});
    const [existingRecords , setExistingRecords] = useState(Users);
    
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setRecords(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setRecords(newRecord)
      const data = [...existingRecords, newRecord];
      setExistingRecords(data)
      setRecords({})
    }
    

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={ newRecord.fullName || "" }
            onChange={handleChange}
            placeholder="newRecord fullName "
          />
          <br/>
          <input
            type="text"
            name="age"
            value={ newRecord.age || "" }
            onChange={handleChange}
            placeholder="age"
          />
          <br/>
          <input
            type="text"
            name="city"
            value={ newRecord.city || "" }
            onChange={handleChange}
            placeholder="origin"
          />
          <br/>
          <input type="submit" value="Submit" />
        </form>

        <Table users={existingRecords} />
      </div>
    )
}
export default AddAndDelete