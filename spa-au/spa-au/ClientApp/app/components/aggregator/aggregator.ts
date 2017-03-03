import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Aggregator {
    public eventAggregator;
    public subscriber;

   constructor(eventAggregator) {
      this.eventAggregator = eventAggregator;
   }

   publish(){
      var payload = 'This is some data...';
      this.eventAggregator.publish('myEventName', payload);
   }

   subscribe() {
      this.subscriber = this.eventAggregator.subscribe('myEventName', payload => {
         console.log(payload);
      });
   }

   dispose() {
      this.subscriber.dispose();
      console.log('Disposed!!!');
   }
}