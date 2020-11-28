
import { NgModule } from '@angular/core';
import { SearchPipe } from './searchpipe';

@NgModule({
    declarations: [
        SearchPipe,
    ],
    imports: [
    ],
    providers: [],
    exports: [SearchPipe,
      ]
})
export class SharedModule { }


