[npm-image]: https://img.shields.io/npm/v/ionic-select-searchable.svg
[npm-url]: https://npmjs.org/package/ionic-select-searchable
[dm-image]: https://img.shields.io/npm/dm/ionic-select-searchable.svg
[dt-image]: https://img.shields.io/npm/dt/ionic-select-searchable.svg

# Ionic Select with Searchbar
[![npm][npm-image]][npm-url]
[![npm][dt-image]][npm-url]
[![npm][dm-image]][npm-url]

An Ionic component similar to `ion-select`, that allows to search items, including async search and infinite scrolling.  

![iOS Demo](demo/ios.gif)

# Contents
* [Demo (Live)](https://stackblitz.com/edit/ionic-select-searchable-basic?file=pages%2Fhome%2Fhome.html)
* [Demo (GitHub)](https://github.com/eakoriakin/ionic-select-searchable-demo)
* [Getting started](#getting-started)
* [FAQ](../../wiki/FAQ)
* [Documentation](../../wiki/Documentation)
* [Theming](../../wiki/Theming)

## Getting started

1. Install it.

```
npm install ionic-select-searchable --save
```

2. Import it.
```
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
    imports: [
        SelectSearchableModule
    ]
})
export class AppModule { }

```
3. Add it to template.
```
<ion-item>
    <ion-label>Port</ion-label>
    <select-searchable
        item-content
        [(ngModel)]="port"
        [items]="ports"
        itemValueField="id"
        itemTextField="name"
        [canSearch]="true"
        (onChange)="portChange($event)">
    </select-searchable>
</ion-item>
```
4. Configure it.
```
import { SelectSearchableComponent } from 'ionic-select-searchable';

class Port {
    public id: number;
    public name: string;
}

@Component({ ... })
export class HomePage {
    ports: Port[];
    port: Port;

    constructor() {
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' }
        ];
    }

    portChange(event: {
        component: SelectSearchableComponent,
        value: any 
    }) {
        console.log('port:', event.value);
    }
}
```

5. Enjoy it 😉
6. That is just a small part of what `ionic-select-searchable` is capable of.  
See [more samples](https://stackblitz.com/@eakoriakin) and explore [docs](https://github.com/eakoriakin/ionic-select-searchable/wiki/Documentation) and [FAQ](https://github.com/eakoriakin/ionic-select-searchable/wiki/FAQ) to learn more.

## Share it
If you find this component useful, please star the repo to let others know that it's reliable. Also, share it with friends and colleagues who might find it useful as well. Thank you 😄
