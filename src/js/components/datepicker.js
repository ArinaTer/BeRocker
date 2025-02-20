
export function datepicker() {
    
    const picker = Datepicker('#datepicker', {
        formatter: (input, date) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            input.value = `${day}.${month}.${year}`;
        }
    });
}