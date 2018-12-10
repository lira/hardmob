const axios = require('axios');
const url = 'https://www.hardmob.com.br/forums/407-Promocoes?s=&pp=30&daysprune=-1&sort=dateline&order=desc';
const re = /<a class="title" href="(.*)">(.*)<\/a>/g;

axios.get(url)
    .then(function (response) {
        const data = response.data;
        const arrayUrls = data.match(re);
        console.log(arrayUrls);
    })
    .catch(function (error) {
        console.log(error);
    })
    ;