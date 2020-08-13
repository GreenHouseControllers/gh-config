# gh-config
This module helps you to work with the config file

### install

    npm install gh-config --save
    
##### or

    npm install gh-config
    
### exemple of the config file

    [
        {
            "HOST": "localhost"
        },
        {
            "PORT": 3000
        }
    ]
    
### usage

#### add to project

    const config = require('gh-config');
    
#### connect
put __dirname and path to your config file in parameters.

    config.connect(__dirname, 'path to the config file');
    
#### get
returns the value of object in config.
put key of object in parameters.

    let HOST = config.get('HOST');
    
#### add 
add new object to the config file
put new object in parameters

    config.add({"host": "localhost"});
    
#### delete
delete object in the config file
put ke of object in parameters
    
    config.delete('HOST");
    
#### getFull
returns all config file

    let fullConfig = confog.getFull();        

### exemple of code

    const express = require('express');
    const config = require('gh-config');
    
    const app = express()
    config.connect(__dirname, './config.json');
    
    const PORT = config.get('PORT');
    
    app.get('/', (req, res) => {
        res.send('Hello World ! ! !');
    })
    
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    })

