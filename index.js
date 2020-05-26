const axios = require('axios');
const hardmobUrl = 'https://www.hardmob.com.br/';
const url = `${hardmobUrl}/forums/407-Promocoes?s=&pp=30&daysprune=-1&sort=dateline&order=desc`;
const re = /<a class="title" href="(.*)">(.*)<\/a>/g;

axios.get(url, { responseType: 'arraybuffer', reponseEncoding: 'binary' })
    .then(function (response) {
        const data = response.data.toString('latin1');
        const arrayUrls = data.match(re);
        const clean = arrayUrls.map(function (htmlA) {
            let data = /href="(.*)" (.*)>(.*)</g.exec(htmlA);
            return {
                title: data[3],
                url: `${hardmobUrl}${data[1]}`,
            };
        });
        
        console.log(JSON.stringify(clean));
    })
    .catch(function (error) {
        console.log(error);
    })
    ;
