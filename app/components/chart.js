import Component from '@glimmer/component';

export default class ChartComponent extends Component {

    get chartData() {
        let data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    backgroundColor: 'rgba(150, 150, 150, 0.1)',
                    borderColor: 'rgba(150, 150, 150, 0.1)',
                    borderWidth: 1,
                    data: [10, 20, 30, 40, 50, 60, 70]
				},
				{
                    label: 'Dataset 2',
                    backgroundColor: 'rgba(40, 40, 40, 0.1)',
                    borderColor: 'rgba(40, 40, 40, 0.1)',
                    borderWidth: 1,
                    data: [10, 20, 30, 40, 50, 60, 70]
				}]
            };
        
        // console.log(data.labels);
        // console.log(data.datasets);
        // console.log(data.datasets[0].label);
        // console.log(data.datasets[0].data)

        return data;
    }
}


