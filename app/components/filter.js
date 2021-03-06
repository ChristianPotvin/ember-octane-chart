import Component from '@glimmer/component';

export default class FilterComponent extends Component {
    get results() {
        let { entries } = this.args;

        const MAX_INTERVAL_ENTRIES = 10;

        let results = new Array(entries.length);

        let labels = new Array();
        let data = new Array();

        let highest = Number.MIN_SAFE_INTEGER;
        let lowest = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < results.length; i++)
        {
            results[i] = entries[i].title.length;

            if (results[i] > highest)
            {
                highest = results[i];
            }

            if (results[i] < lowest)
            {
                lowest = results[i];
            }
        }

        let interval = Math.ceil((highest - lowest) / MAX_INTERVAL_ENTRIES);

        let lowBound, highBound = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < MAX_INTERVAL_ENTRIES && highBound < highest ; i++)
        {
            lowBound = (i * interval + lowest);
            highBound = lowBound + interval - 1;

            labels.push('[' + lowBound + '-' + highBound + ']');
            data.push(0);
        }

        for (let i = 0; i < results.length; i++)
        {
            results[i] = Math.floor((results[i] - lowest) / interval);

            data[results[i]] += 1;
        }

        return data;
    }
}
