import Component from '@glimmer/component';

export default class ChartComponent extends Component {
    get results() {
        let { entries } = this.args;

        let results = new Array(entries.length);

        let labels = new Array(10);
        let data = new Array(10);

        for (let i = 0; i < 10; i++)
        {
            labels[i] = '[' + (i * 10 + 1) + '-' + (i * 10 + 10) + ']';
            data[i] = 0;
        }

        for (let i = 0; i < results.length; i++)
        {
            results[i] = Math.floor(entries[i].title.length / 10);

            data[results[i]] += 1;
        }

        return { labels, data };
    }

    get chartData() {
        let { labels, data } = this.results;
        let { label } = this.args;

        console.log(labels);
        console.log(data);

        let result = {
            labels: labels,
            datasets: [
                {
                    label: label,
                    backgroundColor: 'rgba(150, 150, 150, 0.1)',
                    borderColor: 'rgba(150, 150, 150, 0.1)',
                    borderWidth: 1,
                    data: data
				}]
            };

        return result;
    }
}


