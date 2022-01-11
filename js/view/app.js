import routes from "../routes/route.js";
import UrlParser from "../routes/url-parser.js";

class App {
    constructor({ content }) {
        this._content = content;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlAndCombine();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;