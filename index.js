// const request = require('request-promise');
const cheerio = require('cheerio');
const request = require('requestretry')
// .defaults({ fullResponse: false });

const url = 'https://sfbay.craigslist.org/d/jobs/search/jjj';

const scrapeResult = {
    title: ' International manpower consultancy in Delhi',
    desc: 'International Manpower Consultancy in Delhi with Standards Services is the best manpower solution you can ask for',
    datePosted: 'Apr 13',
    url: 'https://delhi.craigslist.org/tch/d/international-manpower-consultancy-in/7107448776.html',
    compensation: '00'
}

async function main() {

    try {
        const htmlResult = await request.get(url);
        // console.log(htmlResult);
        const $ = await cheerio.load(htmlResult.body);

        $(".result-info").each((index, element) => { console.log($(element).children(".result-title").text()) });



    } catch (error) {
        console.log(error);
    }
    // request.get(url)
}

main();