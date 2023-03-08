

export const toDate = (timestamp) => {
    const isoTimestamp = timestamp;
    const date = new Date(isoTimestamp);
    const params = { day: 'numeric', month: 'long', year: 'numeric' };
    const  dateFormat = date.toLocaleDateString('en-US', params).replace(/\b(\d{1,2})(th|nd|rd|st)\b/g, '$1');
    return dateFormat;
}