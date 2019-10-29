const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb+srv://loginbanco:login123456@nofood-1zrbb.mongodb.net/test?retryWrites=true'

    },
    Security: {
        secretyKey: '202cb962ac59075b964b07152d234b70'
    }
}
module.exports = variables;