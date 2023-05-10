let info: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string,
        }
    },

}

const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => {
    console.log('total', total);
    console.log('amount', amount);
    return total + amount});
sum // 118.11
