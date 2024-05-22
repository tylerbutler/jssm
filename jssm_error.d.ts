import { JssmErrorExtendedInfo } from './jssm_types.js';
declare class JssmError extends Error {
    message: string;
    base_message: string;
    requested_state: string | undefined;
    constructor(machine: any, message: string, JEEI?: JssmErrorExtendedInfo);
}
export { JssmError };
