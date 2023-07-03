const jFile = require('jsonfile');

exports.getFlag = () =>
{
    return new Promise((resolve,reject) =>
    {
        jFile.readFile("../Final/Data/Flags.json" , function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data.flags);
                console.log(data)
            }
        })
    })
}



exports.setFlag = (flags) =>
{
    return new Promise((resolve,reject) =>
    {
        jFile.writeFile("../Final/Data/Flags.json" , {"flags": flags}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data.flags);
                console.log(data)
            }
        })
    })
}

// let resp = GetFlag()
// resp.then(data => console.log(data))