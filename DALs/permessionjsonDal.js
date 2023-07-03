const jFile = require('jsonfile');

 const getUsers = () =>
{
    return new Promise((resolve,reject) =>
    {
        jFile.readFile( "../Data/permessions.json", function(err, data)
        {
            if(err)
            {
                    reject(err)
                }
                else
                {
                    resolve(data)
            }
        })
    })
}

