console.log(`2
use one line of code to destructure to obtain subject, dueDate and assignTo from this object:
`);
const task = {
    subject: `Implement login feature`,
    createdBy: `Hoang Ngoc Duc`,
    assignTo: `Nguyen Phuong Nam`,
    dueDate: `2019-10-08T18:00:24+0000`,
    expectedHours: 0.5,
};
var { subject, dueDate, assignTo } = task;
console.log(` \n
subject: ${subject} \n
dueDate: ${dueDate} \n
assignTo: ${assignTo}
`);
