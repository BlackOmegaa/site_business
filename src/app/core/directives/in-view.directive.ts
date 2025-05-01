import { Directive, ElementRef, OnInit } from '@angular/core';
import { animate, inView } from 'motion';

@Directive({
    selector: '[appInView]',
    standalone: true
})
export class InViewDirective implements OnInit {
    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        const element = this.el.nativeElement;

        inView(element, () => {
            animate(
                element,
                {
                    opacity: [0, 1],
                    transform: [
                        'rotateX(10deg) translateY(70px)',
                        'rotateX(0deg) translateY(0)'
                    ]
                },
                {
                    duration: 0.7
                }
            );
        });
    }
}
