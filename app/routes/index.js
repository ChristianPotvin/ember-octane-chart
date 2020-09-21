import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route 
{
    @service store;

    async model() {
        // let url = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=45.41&lon=-75.7&dt=1600300800&appid=e0e706a9f4c813d9e442c80c6e64cc73';
        // let response = await fetch(url);
        // let { data } = await response.json();

        // console.log('Running IndexRoute model');
        // console.log(response);

        // return data;

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => console.log(json))

        let url = 'https://jsonplaceholder.typicode.com/posts';
        let response = await fetch(url);
        let data = await response.json();

        console.log('Running IndexRoute model');
        console.log(data[0].title.length);

        return data;

        // console.log('Running IndexRoute model');
        // return this.store.Find('weather');
    }
}