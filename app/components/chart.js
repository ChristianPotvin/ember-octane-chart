import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChartComponent extends Component {

    @tracked isPostBodyLengthChart = false;

    @action toggleChart() {
        this.isPostBodyLengthChart = !this.isPostBodyLengthChart;
    }

    get buttonTitle() {
        return this.isPostBodyLengthChart ? 'View Post Title Length Chart' : 'View Post Body Length Chart';
    }

    get highlow() {
        let { entries } = this.args;

        let initial = new Array(entries.length);

        let highest = Number.MIN_SAFE_INTEGER;
        let lowest = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < initial.length; i++)
        {
            initial[i] = this.isPostBodyLengthChart ? entries[i].body.length : entries[i].title.length

            if (initial[i] > highest)
            {
                highest = initial[i];
            }

            if (initial[i] < lowest)
            {
                lowest = initial[i];
            }
        }

        return { initial, lowest, highest };
    }

    get results() {
        let { initial, lowest, highest} = this.highlow;

        const MAX_INTERVAL_ENTRIES = 10;

        let labels = new Array();
        let data = new Array();

        let interval = Math.ceil((highest - lowest) / MAX_INTERVAL_ENTRIES);
        
        let lowBound, highBound = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < MAX_INTERVAL_ENTRIES && highBound < highest ; i++)
        {
            lowBound = (i * interval + lowest);
            highBound = lowBound + interval - 1;

            labels.push('[' + lowBound + '-' + highBound + ']');
            data.push(0);
        }

        for (let i = 0; i < initial.length; i++)
        {
            initial[i] = Math.floor((initial[i] - lowest) / interval);

            data[initial[i]] += 1;
        }

        return { labels, data };
    }

    get chartData() {
        let { labels, data } = this.results;
        let label = this.isPostBodyLengthChart ? 'Post Body Length' : 'Post Title Length';

        let result = {
            labels: labels,
            datasets: [
                {
                    label: label,
                    backgroundColor: 'rgba(152,251,152, 0.5)',
                    borderColor: 'rgba(152,251,152, 0.5)',
                    borderWidth: 1,
                    data: data
				}]
            };

        return result;
    }
}


