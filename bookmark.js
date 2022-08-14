javascript: console.log("Schedule Viewer Starting");
var studentID = prompt("Enter Student ID: ");
if (!window.location.pathname.includes("/genesis/")) {
    var school = window.location.pathname.split("/")[1];
    fetch(`https://parents.genesisedu.com/${school}/parents?tab1=studentdata&tab2=studentsummary&action=ajaxGetBellScheduleForDate&studentid=${studentID}&scheduleDate=&schedView=&mpToView=1`).then((res) => res.text()).then((res) => { document.body.innerHTML = res.replaceAll("\\", ""); }).then(() => { document.querySelector("div").remove(); });

} else {
    fetch(`https://${window.location.hostname}/genesis/parents?tab1=studentdata&tab2=studentsummary&action=ajaxGetBellScheduleForDate&studentid=${studentID}&scheduleDate=&schedView=&mpToView=1`).then((res) => res.text()).then((res) => { document.body.innerHTML = res.replaceAll("\\", ""); }).then(() => { document.querySelector("div").remove(); });
}