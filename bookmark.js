javascript:
console.log("Schedule Viewer Starting");
var studentID = prompt("Enter Student ID: ");
fetch(`https://parents.edison.k12.nj.us/genesis/parents?tab1=studentdata&tab2=studentsummary&action=ajaxGetBellScheduleForDate&studentid=${studentID}&scheduleDate=&schedView=&mpToView=1`)
.then((res)=>res.text()).then((res) => {document.body.innerHTML = (res.replaceAll('\\', ''))}).then(() => {document.querySelector('div').remove();});