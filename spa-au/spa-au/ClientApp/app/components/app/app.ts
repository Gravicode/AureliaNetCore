import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: '../home/home',
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: '../counter/counter',
            nav: true,
            title: 'Counter'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: '../fetchdata/fetchdata',
            nav: true,
            title: 'Fetch data'
        }, {
            route: 'aggregator',
            name: 'aggregator',
            settings: { icon: 'star' },
            moduleId: '../aggregator/aggregator',
            nav: true,
            title: 'Event Aggregator'
        },{
            route: 'formsample',
            name: 'formsample',
            settings: { icon: 'list-alt' },
            moduleId: '../formsample/formsample',
            nav: true,
            title: 'Form Sample'
        },{
            route: 'restsample',
            name: 'restsample',
            settings: { icon: 'bookmark' },
            moduleId: '../restsample/restsample',
            nav: true,
            title: 'Rest Sample'
        },{
            route: 'refsample',
            name: 'refsample',
            settings: { icon: 'share' },
            moduleId: '../refsample/refsample',
            nav: true,
            title: 'Ref Sample'
        }]);

        this.router = router;
    }
  
   constructor(argument) {
      // Create and initialize your class object here...
   }

   
}
