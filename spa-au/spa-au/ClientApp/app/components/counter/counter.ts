import {DependencyTest} from './dependency-test';
import {inject} from 'aurelia-framework';

@inject(DependencyTest)

export class Counter {
    public currentCount = 0;
    dt:DependencyTest;
    /**
     *
     */
    constructor(DependencyTest) {
         console.log(DependencyTest);
        this.dt=DependencyTest;
        
    }
    public incrementCounter() {
        this.currentCount++;
        this.dt.WriteTest();
    }
    created(owningView, myView) {
       console.log('state - created');
      // Invoked once the component is created...
   }

   bind(bindingContext, overrideContext) {
        console.log('state - bind');
      // Invoked once the databinding is activated...
   }

   attached(argument) {
        console.log('state - attached');
      // Invoked once the component is attached to the DOM...
   }

   detached(argument) {
        console.log('state - detached');
      // Invoked when component is detached from the dom
   }

   unbind(argument) {
        console.log('state - unbind');
      // Invoked when component is unbound...
   }
}
