import { animate, AnimationMetadata, style } from "@angular/animations";

export const fade = (duration: number): AnimationMetadata | AnimationMetadata[] => {
    return [
        style({ opacity: '0' }),
        animate(duration, style({ opacity: '1' })),
    ];
}