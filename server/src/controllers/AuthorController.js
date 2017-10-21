const axios = require('axios')
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function isMatchKeyword(html, keyWord) {
    const isIdMatch = html.id && html.id.match && html.id.match(new RegExp(keyWord))
    const isClassMatch = html.className && html.className.match && html.className.match(new RegExp(keyWord))
    return isIdMatch || isClassMatch
}

function isMatchAuthor(html) {
    const authorKeyWords = ['author', 'editor']
    return authorKeyWords.some((keyword) => isMatchKeyword(html, keyword))
}

function getContent(html) {
    return html.textContent || html.innerHTML || html.nodeValue || html.innerHTML || html.outerHTML || ''
}

module.exports = {
    author(req, res) {
        const url = req.params.url
        axios.get(url).then(response => {

                const doc = new JSDOM(response.data).window.document
                const htmlElements = Array.from(doc.querySelectorAll('*'))
                const authorElements = htmlElements.filter((a) => isMatchAuthor(a))
                const authorNames = authorElements.map(a => getContent(a))

                res.send(authorNames)
            })
            .catch(err => res.send(err))
    }
}
