export let URL = 'http://localhost:8000'
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    URL = process.env.REACT_URL
}