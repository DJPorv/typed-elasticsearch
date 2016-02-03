declare module "elasticsearch" {
    export class Client {

        constructor(params: any);
        indices: Indices;
        ping(params: PingParams, callback: (err: any, response: any, status: any) => void): void;
        ping(params: PingParams): IPromise<any>;
        get(params: GetParams, callback: (error: any, response: any) => void): void;
        get<T>(params: GetParams): IPromise<GetResponse<T>>;
        index<T>(params: IndexParams<T>, callback: (error: any, response: any) => void): void;
        index<T>(params: IndexParams<T>): IPromise<any>;
        search(params: SearchParams, callback: (error: any, response: any) => void): void;
        search(params: SearchParams): IPromise<any>;
    }

    export class Indices {
        delete(params: MultipleIndicesParams, callback: (err: any, response: any, status: any) => void): void;
        delete(params: MultipleIndicesParams): IPromise<any>;
        delete(params: SingleIndexParams, callback: (err: any, response: any, status: any) => void): void;
        delete(params: SingleIndexParams): IPromise<any>;
        exists(params: SingleIndexExitsParams, callback: (err: any, response: any, status: any) => void): void;
        exists(params: SingleIndexExitsParams): IPromise<any>;
        create(params: SingleIndexParams, callback: (err: any, response: any, status: any) => void): void;
        create(params: SingleIndexParams): IPromise<any>;
        getAlias(params: GetAliasParams, callback: (err: any, response: any, status: any) => void): void;
        getAlias(params: GetAliasParams): IPromise<any>;
        putTemplate(params: IndicesPutTemplateParams, callback: (error: any, response: any) => void): void;
        putTemplate(params: IndicesPutTemplateParams): IPromise<any>;
    }

    export class MultipleIndicesParams {
        index: string[];
    }

    export class SingleIndexParams {
        index: string;
    }

    export interface IndicesPutTemplateParams {
        order?: number;
        create?: boolean;
        timeout?: Date | number;
        masterTimeout?: Date | number;
        flatSettings?: boolean;
        name: string;
        body: string | any;
    }

    export interface GetAliasParams {
        ignoreUnavailable?: boolean,
        allowNoIndices?: boolean,
        expandWildcards?: string,
        local?: boolean,
        index?: string | string[] | boolean,
        name: string | string[] | boolean
    }

    export interface GetParams {
        index: string;
        type: string;
        id: string;
        fields?: string | string[] | boolean;
        parent?: string;
        preference?: string;
        realtime?: boolean;
        refresh?: boolean;
        routing?: string;
        _source?: string | string[] | boolean;
        _sourceExclude?: string | string[] | boolean;
        _sourceInclude?: string | string[] | boolean;
        version?: number;
        versionType?: string;
    }

    export interface GetResponse<T> {
        _type: string;
        _id: string;
        _version: number;
        found: boolean;
        _source: T;
    }

    export interface IndexParams<T> {
        index: string;
        type: string;
        id: string;
        body: T;
        consistensy?: string;
        parent?: string;
        replication?: string;
        routing?: string;
        timeout?: Date | number;
        timestamp?: Date | number;
        version?: number;
        versionType?: string;
    }

    export interface SearchParams {
        index?: string;
        type?: string | string[] | number;
        body?: any;
        q?: string;
        scroll?: string;
        search_type?: string;
        fields?: string[],
        size?: number,
        sort?: string | string[] | boolean,
        _source?: string | string[] | boolean,
        _sourceExclude?: string | string[] | boolean,
        _sourceInclude?: string | string[] | boolean,
        stats?: string | string[] | boolean,
        suggestField?: string,
        suggestSize?: number,
        suggestText?: string,
        timeout?: Date | number,
    }

    export class SingleIndexExitsParams extends SingleIndexParams {
        ignoreUnavailable: boolean;
    }

    export class PingParams {
        requestTimeout: number;
        method: string;
        hello: string;
    }

    export interface IPromise<T> {
        then(resolve: (response: T) => void, reject: (error: any) => void): any;
    }
}
