import { MasterCSSRule } from '../rule';
import { BORDER, dash, WIDTH } from '../constants/css-property-keyword';
import { getBorderProps } from '../utils/get-border-props';

export class BorderWidth extends MasterCSSRule {
    static id = 'borderWidth';
    static override matches = /^(border(-(left|right|top|bottom))?-width:.|b([xytblr]|order(-(left|right|top|bottom))?)?:(([0-9]|(max|min|calc|clamp)\(.*\))|(max|min|calc|clamp)\(.*\))((?!\|).)*$)/;
    override getProps(propertyInfo): { [key: string]: any } {
        return getBorderProps(this.prefix, propertyInfo, WIDTH);
    }
    override get order(): number {
        return (this.prefix === dash(BORDER, WIDTH) + ":" || this.prefix === 'b:' || this.prefix === BORDER + ':') ? -1 : 0;
    }
}