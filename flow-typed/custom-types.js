// @flow

// some other types (required to flow type the tests)
declare var expect: {
    (arg: any): any,
    addSnapshotSerializer: any,
};
declare function describe(msg: string, func: Function): void;
declare function it(msg: string, func: Function): void;
declare function afterEach(func: Function): void;
declare function beforeEach(func: Function): void;
declare function beforeAll(func: Function): void;
