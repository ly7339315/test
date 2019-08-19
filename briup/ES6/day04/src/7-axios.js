const axios = require('axios');
// console.log(axios);
axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then(function(re){
    console.log(re.data);
    export{re}
}).catch(function(error){
    console.log(error);
});