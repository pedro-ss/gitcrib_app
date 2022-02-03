import { gitCribAPI } from './BaseApi';

gitCribAPI.get('/endpoints',).then((response) => {
    console.log(response)
}).catch((error) => { console.log(error) });

gitCribAPI.post('/endpoints', data)
    .then((response) => {
        console.log(response)
    }).catch((error) => { console.log(error) });

gitCribAPI.delete('/endpoints').then((response) => {
    console.log(response)
}).catch((error) => { console.log(error) });

gitCribAPI.patch('/endpoints').then((response) => {
    console.log(response)
}).catch((error) => { console.log(error) });

