import {studentArray} from "./Students.component";
function StudentsTable(){
    return (
        <table>
            <thead>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Birth Of Date</td>
                <td>Picture</td>
            </thead>
            <tbody>
                {studentArray.map(item =>(
                    <tr>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.date}</td>
                        <td>{item.pic}</td>
                   </tr>
                   ) )}
            </tbody>
        </table>
    )
}

export default StudentsTable;