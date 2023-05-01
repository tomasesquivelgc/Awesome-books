import { DateTime } from '../node_modules/luxon/src/luxon.js';

const getDate = () => {
  const now = DateTime.now();
  const formattedDate = now.toFormat('MMMM dth yyyy, h:mm:ss a');
  document.getElementById('date').textContent = formattedDate;
};
export default getDate;