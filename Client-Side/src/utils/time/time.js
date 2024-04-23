export  const timeformater = (timeString) => {
    const time = new Date(timeString);
    return time.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});
}