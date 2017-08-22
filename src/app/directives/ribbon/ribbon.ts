import {Component} from '@angular/core';

interface RibbonInterface {
    msg: string;
    id?: string;
    type?: string;
    closable?: boolean;
    timeout?: number;
}

@Component({
    selector: 'ribbon',
    template: require('./ribbon.html')
})
export class RibbonComponent {
    
    constructor() {
    }
    
    //
    // Closes the specified ribbon if an ID is passed
    // If the ribbon was created with an ID, pass the ID back and it will close that ribbon
    //
    // If no ID is passed, it closes all ribbons
    close(id?:string) {
        let $ribbonParent = $('div[ribbonParent]');
        
        if (id) {
            $ribbonParent.find('#' + id).slideUp(150, function() {
                $(this).remove();
                if ( $ribbonParent.find('div.ribbon-message').length === 0 ) {
                    $ribbonParent.slideUp(50);
                }
            });
        } else {
            $ribbonParent.find('div.ribbon-message').slideUp(150, function() {
                $(this).remove();
                if ( $ribbonParent.find('div.ribbon-message').length === 0 ) {
                    $ribbonParent.slideUp(50);
                }
            });
        }
    }
    
    //
    // Adds a new ribbon
    // If an ID is passed, it will check a ribbon with that ID already exists
    // if that ID exists, a new ribbon IS NOT added
    add( ribbon:RibbonInterface ) {
        let self = this;
        let exists = false;
        let id;
        let $ribbon;
        let $ribbonParent = $('div[ribbonParent]');

        if ( ribbon.id ) {
            exists = ( $ribbonParent.find('#' + ribbon.id).length > 0);
        }
        
        if ( $ribbonParent.is(':hidden') ) {
            $ribbonParent.slideDown(50);
        }
        
        //
        // only add the ribbon if it doesn't already exist
        if (!exists) {
            ribbon.type = ribbon.type || 'info';
            id = (ribbon.id) ? ' id="' + ribbon.id + '"' : '';

            $ribbon = $('<div' + id + ' class="ribbon-message ' + ribbon.type + '" style="display: none;">' + ribbon.msg + '<i class="fa fa-times-circle ribbon-close"></i></div>');
            
            $ribbonParent.append($ribbon);
            
            $ribbon.find('.ribbon-close').unbind('click').on('click', function() {
                self.closeRibbon($ribbon);
            });
            
            if ( ribbon.timeout || ribbon.type === 'success' ) {
                ribbon.timeout = ribbon.timeout || 10000;
                setTimeout(function() {
                    self.closeRibbon($ribbon);
                }, ribbon.timeout);
            }
            
            $ribbon.slideDown(150);
        }
    }
    
    private closeRibbon($ribbon) {
        let $ribbonParent = $('div[ribbonParent]');

        $ribbon.slideUp(150, function() {
            $ribbon.remove();
            if ( $ribbonParent.find('div.ribbon-message').length === 0 ) {
                $ribbonParent.slideUp(50);
            }
        });
    }
}
