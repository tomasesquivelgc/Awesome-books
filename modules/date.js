const getDate = () =>{
    const now = luxon.DateTime.now();
    const formattedDate = now.toFormat('MMMM dth yyyy, h:mm:ss a');
    document.getElementById('date').textContent = formattedDate;
}
export default getDate;