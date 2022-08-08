import { Component } from "react";
import Student from "./Student.component";
const studentArray =[
    {firstName:"Yonatan", lastName:"Itzhak", date:new Date("09/29/1997").getFullYear(), pic:"stickman1.jpg"},
    {firstName:"Ilan", lastName:"Itzhak", date:new Date("09/29/1997").getFullYear(), pic:"stickman2.jpg"},
    {firstName:"Eldad", lastName:"Itzhak", date:new Date("09/29/1997").getFullYear(), pic:"stickman3.jpg"},
    {firstName:"Yossi", lastName:"Itzhak", date:new Date("09/29/1997").getFullYear(), pic:"stickman4.jpg"},
    {firstName:"Daniel", lastName:"Itzhak", date:new Date("09/29/1997").getFullYear(), pic:"stickman5.jpg"},
]
class Students extends Component {
    constructor(props){
        super();
    };
    render(){
            return(
                <div>
                    {studentArray.map(studentItem =>
                     <Student firstName={studentItem.firstName} lastName={studentItem.lastName} date={studentItem.date} pic={studentItem.pic}/>
                        )}
                </div>

            )
        };

}
export default Students;
export {studentArray}