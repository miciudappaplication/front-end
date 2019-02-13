
axios({
  method:'get',
  url:'https://jsonplaceholder.typicode.com/posts/',
  responseType:'stream'
})
  .then(function (response) {
    console.log(JSON.stringify( response.data , null, 2))  
      
  });