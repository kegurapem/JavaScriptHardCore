// Promises
const promise = new Promise((resolve, reject) => {
    resolve('hey!')
})

const cows = 15

const countCows = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (cows > 10) {
            resolve(`We have ${cows} on the farm`)
        } else {
            reject('There is no cowso on the farm')
        }
    }, 2000)
})

console.log('My name is kevin')

countCows
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finally'))


//  Fetch
import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi) {
    return fetch(urlApi)
}

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => console.log(products))
//   .then(() => console.log('hello'))
//   .catch(err => console.log(err))

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => console.log(category.name))
  .catch (err => console.log(err))
  .finally(console.log('finally'))