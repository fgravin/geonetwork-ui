import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core'
import { BaseComponent } from '../../../base.component'
import { Store } from '@ngrx/store'
import { SearchState, UpdateParams } from '@lib/search'

@Component({
  selector: 'wc-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class GnAggregatedRecordsComponent extends BaseComponent {
  @Input() aggregationField: string
  @Input() aggregationMaxCount = 20
  @Input() aggregationQueryString: string

  activeFilter = null

  constructor(private store: Store<SearchState>) {
    super()
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

  setFilter(value: string) {
    this.activeFilter = `+${this.aggregationField}:"${value}"`
    this.store.dispatch(new UpdateParams({ any: this.activeFilter }))
  }

  clearFilter() {
    this.activeFilter = null
  }
}
