import Route from '@ember/routing/route';

export default class IndexRoute extends Route 
{
    async model() {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let response = await fetch(url);
        let data = await response.json();

        return data;
    }
}