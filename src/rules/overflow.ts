import { X, Y } from '../constants/css-property-keyword';
import { MasterCSSRule } from '../rule';

export class Overflow extends MasterCSSRule {
    static id = 'overflow';
    static override matches = /^overflow(-x|-y)?:(?:visible|overlay|hidden|scroll|auto|clip|inherit|initial|revert|revert-layer|unset|\$|var)/;
    override getProps(propertyInfo): { [key: string]: any } {
        if (this.prefix) {
            switch (this.prefix.slice(-2, -1)) {
                case X:
                    return { 'overflow-x': propertyInfo };
                case Y:
                    return { 'overflow-y': propertyInfo };
            }
        }
        return { 'overflow': propertyInfo };
    }
    override get order(): number {
        if (this.prefix) {
            switch (this.prefix.slice(-2, -1)) {
                case X:
                case Y:
                    return 0;
            }
        }
        return -1;
    }
}