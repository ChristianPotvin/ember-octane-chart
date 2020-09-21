import Component from '@glimmer/component';

export default class FilterComponent extends Component {
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

        return entries;
      }
}
