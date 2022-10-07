import { MasterCSSRule } from '../rule';

export class TextStrokeColor extends MasterCSSRule {
    static id = 'textStrokeColor';
    static override matches = /^text-stroke-color:./;
    static override colorStarts = 'text-stroke:';
    static override colorful = true;
    override getProps(propertyInfo): { [key: string]: any } {
        return {
            '-webkit-text-stroke-color': propertyInfo
        };
    }
}