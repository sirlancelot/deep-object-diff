type NonTraverse =
    | Date
    | Function
    | RegExp
    | boolean
    | number
    | string
    | symbol
export type DeepDiff<T> = T extends NonTraverse
    ? T
    : T extends (infer U)[]
        ? { [x: number]: U | undefined }
        : T extends Record<infer U, any>
            ? { [K in U]?: DeepDiff<T[K]> }
            : never

export function diff<
    T extends Record<PropertyKey, any>,
    U extends Record<PropertyKey, any>,
>(originalObj: T, updatedObj: U): DeepDiff<T & U>

export function addedDiff (originalObj: object, updatedObj: object): object

export function deletedDiff (originalObj: object, updatedObj: object): object

export function updatedDiff (originalObj: object, updatedObj: object): object

export interface DetailedDiff {
    added: object
    deleted: object
    updated: object
}

export function detailedDiff (originalObj: object, updatedObj: object): DetailedDiff
