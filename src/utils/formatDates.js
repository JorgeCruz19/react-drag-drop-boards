export const formatDateTime = (seconds) => {
  return new Intl.DateTimeFormat('es', { dateStyle: 'medium' }).format(seconds * 1000)
}
	
export const formatDateToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`	
}