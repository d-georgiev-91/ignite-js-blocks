import {
    Component,
    ElementRef,
    forwardRef,
    HostListener,
    HostBinding,
    Inject,
    Input
} from '@angular/core';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxDropDownItemBase } from '../drop-down/drop-down-item.component';
import { IgxComboDropDownComponent } from './combo-dropdown.component';

@Component({
    selector: 'igx-combo-item',
    templateUrl: 'combo-item.component.html'
})
export class IgxComboItemComponent extends IgxDropDownItemBase {
    private get combo() {
        return this.dropDown.combo;
    }

    @HostBinding('style.height.px')
    get itemHeight() {
        return this.combo.itemHeight;
    }

    /**
     * @hidden
     */
    @Input()
    public itemData;

    /**
     * @hidden
     */
    public get itemID() {
        return this.itemData;
    }

    constructor(
        @Inject(forwardRef(() => IgxComboDropDownComponent)) public dropDown: IgxComboDropDownComponent,
        protected elementRef: ElementRef,
        protected selectionAPI: IgxSelectionAPIService
    ) {
        super(dropDown, elementRef);
    }

    /**
     * @hidden
     */
    get isSelected() {
        return this.combo.isItemSelected(this.itemID);
    }

    @HostListener('click', ['$event'])
    clicked(event) {
        if (this.disabled || this.isHeader) {
            const focusedItem = this.dropDown.focusedItem;
            if (focusedItem) {
                focusedItem.element.nativeElement.focus({ preventScroll: true });
            }
            return;
        }
        this.dropDown.selectItem(this, event);
    }
}
