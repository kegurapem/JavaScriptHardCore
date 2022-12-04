const data = [{
    title: 'Aprendiendo Promesas',
    year: '2021',
    isbn: '777-55545452',
    author: 'Kevin Gutierrez'
}, {
    title: 'Aprendiendo Promesas',
    year: '2021',
    isbn: '777-55545452',
    author: 'Kevin Gutierrez'
}, {
    title: 'Aprendiendo Promesas',
    year: '2021',
    isbn: '777-55545452',
    author: 'Kevin Gutierrez'
}]

// const data = []

function getData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.length === 0) {
                reject(new Error('Data is empty'))
            }
            resolve(data)
        }, 2000)
    })
}

getData()
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message))

console.log('My name is kevin');