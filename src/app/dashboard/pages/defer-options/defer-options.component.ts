import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';
import { HeavyLoadersSlowComponent } from "../../../shared/heavy-loaders/heavy-loaders-slow.component";

@Component({
  standalone: true,
  imports: [HeavyLoadersFastComponent, TitleComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
