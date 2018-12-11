const axios = require('axios');
const hardmobUrl = 'https://www.hardmob.com.br/';
const url = `${hardmobUrl}/forums/407-Promocoes?s=&pp=30&daysprune=-1&sort=dateline&order=desc`;
const re = /<a class="title" href="(.*)">(.*)<\/a>/g;
const reGroup =  /href="(.*)" (.*)>(.*)</g;

axios.get(url)
    .then(function (response) {
        const data = response.data;
        const arrayUrls = data.match(re);
	const clean = arrayUrls.map(function (htmlA) {
	  let data = reGroup.exec(htmlA);
	  if (data) {
			  
	  return {
	    title: data[3],
            url: `${hardmobUrl}${data[1]}`,
	  };
	  }
	});
        console.log(clean);
    })
    .catch(function (error) {
        console.log(error);
    })
    ;
