import { Directive, HostListener, ElementRef, HostBinding, Renderer2 } from "@angular/core";
import { element } from "protractor";

@Directive({
   selector:'[appDropdown]'     
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
    private elementRef : ElementRef;
    private renderer : Renderer2;

    constructor(elementRef : ElementRef, renderer : Renderer2){
        this.elementRef = elementRef;
        this.renderer = renderer;
    }

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
        //this.elementRef.nativeElement.class.opren = this.isOpen;
    };


}