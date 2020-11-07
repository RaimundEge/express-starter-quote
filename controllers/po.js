const axios = require('axios');

module.exports = {
    processSample: async result => {
        var data = {
            'order': 'xyz-987654321-ba',
            'associate': 'RE-676732',
            'custid': '21',
            'amount': '7654.32'
        };
        axios.post('http://blitz.cs.niu.edu/purchaseorder', data).then((response) => {
            result(response.data);
        }).catch(err => {
            throw err;
        });
    }
}