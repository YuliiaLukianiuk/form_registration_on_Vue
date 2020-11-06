import { RuleItem, Rules, ValidateSource } from 'async-validator';
export declare type Errors = {
    [key: string]: {
        message: string;
        field: string;
    };
};
declare const DeepValidator: (rules?: Rules) => {
    getRules: () => Rules;
    registerRule: (path: any, rule: RuleItem) => void;
    removeRule: (path: any) => void;
    validate: (data: ValidateSource) => Promise<undefined>;
    validateField: (path: any, value: any) => Promise<undefined>;
};
export default DeepValidator;
