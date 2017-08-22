import {Component, OnInit, Input, ElementRef, Output, EventEmitter} from '@angular/core';

/* ******
*
* Checkboxes Directive
*
*/
@Component({
    selector: 'checkbox',
    template: `
        <div [className]="chkClasses()">
            <label>
                <input type="checkbox" (click)="emitClick($event)" class="form-control" #angularcb id="{{id}}" name="{{name}}" value="{{value}}" checked="{{checked}}" />
                <b></b>
                {{label}}
            </label>
        </div>
    `
})
export class CheckboxDirective implements OnInit {
    
    @Input('label') label: string;
    @Input('_class') _class: string;
    @Input('value') value: string;
    @Input('id') id: string;
    @Input('name') name: string;
    @Input('inline') inline: string = 'false';
    @Input('checked') checked: string = '';
    @Output() onClick: EventEmitter<any> = new EventEmitter(false);
        
    ngOnInit() {
        if ( this.checked === 'checked' || this.checked === 'true' ) {
            this.checked = 'checked'; 
        } else {
            this.checked = '';
        }
    }


    emitClick($event) {
        this.onClick.emit($event);
    }

    
    chkClasses() {
        var _class = 'checkbox';
        
        if (!this.label || this.label === '' ) {
            _class += ' no-text inline';
        }
        
        if ( this.inline === 'true' ) {
            _class += ' inline';
        }
        
        return _class;
    }
    
}
/*
*
* End: Checkboxes Directive 
*
****** */



/* ******
*
* Radio Directive
*
*/
@Component({
    selector: 'radio',
    template: `
        <div [className]="chkClasses()">
            <label>
                <input type="radio" class="form-control" #angularcb name="{{name}}" id="{{id}}" value="{{value}}" checked="{{checked}}" />
                <b></b>
                {{label}}
            </label>
        </div>
    `
})
export class RadioDirective implements OnInit {
    
    @Input('name') name: string;
    @Input('label') label: string;
    @Input('_class') _class: string;
    @Input('value') value: string;
    @Input('id') id: string;
    @Input('inline') inline: string = 'false';
    @Input('checked') checked: string = '';
    
    ngOnInit() {
        if ( this.checked === 'checked' || this.checked === 'true' ) {
            this.checked = 'checked'; 
        } else {
            this.checked = '';
        }
    }
    
    chkClasses() {
        var _class = 'radio';
        
        if (!this.label || this.label === '' ) {
            _class += ' no-text inline';
        }
        
        if ( this.inline === 'true' ) {
            _class += ' inline';
        }
        
        return _class;
    }
    
}
/*
*
* End: Checkboxes Directive 
*
****** */
