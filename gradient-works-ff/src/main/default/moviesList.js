import { LightningElement ,wire,track } from 'lwc';
import loadData from '@salesforce/apex/FetchMoview.getMoviesDetails'; 

const columns = [
		{ label: 'Id', fieldName: 'id',type: 'text' },
    { label: 'Name', fieldName: 'title',type: 'text' },
		{ label: 'Release Date', fieldName: 'release_date',type: 'text', },
		{ label: 'Opening Revenue', fieldName: 'opening_revenue',type: 'currency' },
		
		
];
export default class FetchHoliday extends LightningElement {
    columns = columns;

   @wire(loadData) moviesList;  
		
		
    

}
