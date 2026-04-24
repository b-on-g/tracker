declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
        static $: $;
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
    function $node_internal_check(name: string): boolean;
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    function $node_autoinstall(this: typeof $, name: string): void;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: readonly Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    const $mol_key_handle: unique symbol;
    const $mol_key_store: WeakMap<object, string>;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        static [$mol_key_handle](): any;
        destructor(): void;
        static destructor(): void;
        [Symbol.dispose](): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        constructor(id?: string);
        [Symbol.toStringTag]: string;
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        pub_list: $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor, pos: number): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: ($mol_wire_sub | number)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    const $mol_dev_format_head: unique symbol;
    const $mol_dev_format_body: unique symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    let $mol_dev_format_span: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor, pos?: number): void;
        [$mol_dev_format_head](): any[];
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
        [$mol_dev_format_body](): null;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async_raw(): Promise<Result>;
        async(): Promise<Result> & {
            destructor(): void;
        };
        step(): Promise<null>;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        update(value: readonly $mol_tree2[], ...path: $mol_tree2_path): readonly $mol_tree2[];
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_array_chunks<Item>(array: readonly Item[], rule: number | ((item: Item, index: number) => boolean)): Item[][];
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    class $mol_term_color {
        static reset: (str: string) => string;
        static bold: (str: string) => string;
        static italic: (str: string) => string;
        static underline: (str: string) => string;
        static inverse: (str: string) => string;
        static hidden: (str: string) => string;
        static strike: (str: string) => string;
        static gray: (str: string) => string;
        static red: (str: string) => string;
        static green: (str: string) => string;
        static yellow: (str: string) => string;
        static blue: (str: string) => string;
        static magenta: (str: string) => string;
        static cyan: (str: string) => string;
        static Gray: (str: string) => string;
        static Red: (str: string) => string;
        static Green: (str: string) => string;
        static Yellow: (str: string) => string;
        static Blue: (str: string) => string;
        static Magenta: (str: string) => string;
        static Cyan: (str: string) => string;
        static ansi(open: number, close: number): (str: string) => string;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: (str: string) => string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
        destructor(): void;
    }
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type ConstructorResultAwaited<Some> = Some extends new (...args: infer Args) => infer Res ? new (...args: Args) => Res : {};
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> & ConstructorResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_run_error_context = {
        pid?: number;
        stdout: Buffer | string;
        stderr: Buffer | string;
    };
    class $mol_run_error extends $mol_error_mix<{
        timeout_kill?: boolean;
        pid?: number;
        signal?: NodeJS.Signals | null;
        status?: number | null;
        command: string;
        dir: string;
    }> {
    }
    const $mol_run_spawn: (...args: Parameters<(typeof $node)["child_process"]["spawn"]>) => import("node:child_process").ChildProcess;
    const $mol_run_spawn_sync: (...args: Parameters<(typeof $node)["child_process"]["spawnSync"]>) => import("node:child_process").SpawnSyncReturns<string | NonSharedBuffer>;
    type $mol_run_options = {
        command: readonly string[] | string;
        dir: string;
        timeout?: number;
        env?: Record<string, string | undefined>;
    };
    class $mol_run extends $mol_object {
        static async_enabled(): boolean;
        static spawn(options: $mol_run_options): import("node:child_process").SpawnSyncReturns<string | NonSharedBuffer> | $mol_run_error_context;
        static spawn_async({ dir, sync, timeout, command, env }: $mol_run_options & {
            sync?: boolean;
        }): import("node:child_process").SpawnSyncReturns<string | NonSharedBuffer> | (Promise<$mol_run_error_context> & {
            destructor: () => void;
        });
        static error_message(res?: $mol_run_error_context): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_promise<Result = void> extends Promise<Result> {
        done: (value: Result | PromiseLike<Result>) => void;
        fail: (reason?: any) => void;
        constructor(executor?: (done: (value: Result | PromiseLike<Result>) => void, fail: (reason?: any) => void) => void);
    }
}

declare namespace $ {
    class $mol_promise_blocker<Result> extends $mol_promise<Result> {
        static [Symbol.toStringTag]: string;
    }
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static radial_gradient<Value>(value: Value): $mol_style_func<"radial-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | 'none' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size] | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "current" | "field" | "focus" | "back" | "hover" | "card" | "special" | "control" | "shade" | "spirit", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "blur" | "page" | "block" | "round" | "emoji", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: null | Set<string>;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr?: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
        static get field(): <Host extends object, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr?: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_error_message(this: $, error: unknown): string;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean | null;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        static roots(): $mol_view[];
        static auto(): void;
        title(): string;
        hint(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly $mol_view_content[];
        sub_visible(): readonly $mol_view_content[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: string | null): string | null | undefined;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        [$mol_dev_format_head](): any[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
    let $mol_layer: Record<"focus" | "float" | "hover" | "speck" | "popup", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): any;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    class $mol_dom_event<EventType extends Event> extends $mol_object {
        readonly native: EventType;
        constructor(native: EventType);
        prevented(next?: boolean): boolean;
        static wrap<EventType extends Event>(event: EventType): $mol_dom_event<EventType>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): { [key in keyof typeof $mol_keyboard_code]?: (event: KeyboardEvent) => void; };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    function $mol_wait_user_async(this: $): Promise<unknown>;
    function $mol_wait_user(this: $): unknown;
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
    class $mol_lock extends $mol_object {
        protected promise: null | Promise<void>;
        wait(): Promise<() => void>;
        grab(): () => void;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: AllowSharedBufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_buffer(size: number): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_charset_encode(str: string): Uint8Array<ArrayBuffer>;
    function $mol_charset_encode_to(str: string, buf: Uint8Array<ArrayBuffer>, from?: number): number;
    function $mol_charset_encode_size(str: string): number;
}

declare namespace $ {
    type $mol_file_transaction_mode = 'create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append';
    type $mol_file_transaction_buffer = ArrayBufferView;
    class $mol_file_transaction extends $mol_object {
        path(): string;
        modes(): readonly $mol_file_transaction_mode[];
        write(options: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        read(): Uint8Array<ArrayBuffer>;
        truncate(size: number): void;
        flush(): void;
        close(): void;
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_file_transaction_node extends $mol_file_transaction {
        protected descr(): number;
        write({ buffer, offset, length, position }: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        truncate(size: number): void;
        read(): Uint8Array<ArrayBuffer>;
        flush(): void;
        close(): void;
    }
}

declare namespace $ {
    class $mol_file_base extends $mol_object {
        static absolute<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static relative<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static base: string;
        path(): string;
        parent(): this;
        exists_cut(): boolean;
        protected root(): boolean;
        protected stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        protected static changed: Set<$mol_file_base>;
        protected static frame: null | $mol_after_timeout;
        protected static changed_add(type: 'change' | 'rename', path: string): void;
        static watch_debounce(): number;
        static flush(): void;
        protected static watching: boolean;
        protected static lock: $mol_lock;
        protected static watch_off(path: string): void;
        static unwatched<Result>(side_effect: () => Result, affected_dir: string): Result;
        reset(): void;
        modified(): Date | null;
        version(): string;
        protected info(path: string): null | $mol_file_stat;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): void;
        protected kids(): readonly this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
        buffer(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        stat_make(size: number): {
            readonly type: "file";
            readonly size: number;
            readonly atime: Date;
            readonly mtime: Date;
            readonly ctime: Date;
        };
        clone(to: string): this | null;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        text(next?: string, virt?: 'virt'): string;
        text_int(next?: string, virt?: 'virt'): string;
        sub(reset?: null): this[];
        resolve(path: string): this;
        relate(base?: $mol_file_base): string;
        find(include?: RegExp, exclude?: RegExp): this[];
        size(): number;
        toJSON(): string;
        open(...modes: readonly $mol_file_transaction_mode[]): $mol_file_transaction;
    }
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file extends $mol_file_base {
    }
}

declare namespace $ {
    function $mol_file_node_buffer_normalize(buf: Buffer<ArrayBuffer>): Uint8Array<ArrayBuffer>;
    class $mol_file_node extends $mol_file {
        static relative<This extends typeof $mol_file>(this: This, path: string): InstanceType<This>;
        watcher(reset?: null): {
            destructor(): void;
        };
        protected info(path: string): $mol_file_stat | null;
        protected ensure(): null | undefined;
        protected copy(to: string): void;
        protected drop(): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): undefined;
        protected kids(): this[];
        resolve(path: string): this;
        relate(base?: $mol_file): string;
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts?: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    class $mol_state_local_node<Value> extends $mol_state_local<Value> {
        static dir(): $mol_file;
        static value<Value>(key: string, next?: Value | null): Value | null;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        item_height_min(index: number): number;
        row_width_min(index: number): number;
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        minimal_width(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height_mol_labeler_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_2 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_labeler_3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub_mol_labeler_4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {
    class $mol_wire_set<Value> extends Set<Value> {
        pub: $mol_wire_pub;
        has(value: Value): boolean;
        entries(): SetIterator<[Value, Value]>;
        keys(): SetIterator<Value>;
        values(): SetIterator<Value>;
        forEach(task: (value: Value, value2: Value, set: Set<Value>) => void, self?: any): void;
        [Symbol.iterator](): SetIterator<Value>;
        get size(): number;
        add(value: Value): this;
        delete(value: Value): boolean;
        clear(): void;
        item(val: Value, next?: boolean): boolean;
    }
}

declare namespace $ {
    enum $mol_rest_code {
        'Continue' = 100,
        'Switching protocols' = 101,
        'Processing' = 102,
        'OK' = 200,
        'Created' = 201,
        'Accepted' = 202,
        'Non-Authoritative Information' = 203,
        'No Content' = 204,
        'Reset Content' = 205,
        'Partial Content' = 206,
        'Multi Status' = 207,
        'Already Reported' = 208,
        'IM Used' = 226,
        'Multiple Choices' = 300,
        'Moved Permanently' = 301,
        'Found' = 302,
        'See Other' = 303,
        'Not Modified' = 304,
        'Use Proxy' = 305,
        'Temporary Redirect' = 307,
        'Bad Request' = 400,
        'Unauthorized' = 401,
        'Payment Required' = 402,
        'Forbidden' = 403,
        'Not Found' = 404,
        'Method Not Allowed' = 405,
        'Not Acceptable' = 406,
        'Proxy Authentication Required' = 407,
        'Request Timeout' = 408,
        'Conflict' = 409,
        'Gone' = 410,
        'Length Required' = 411,
        'Precondition Failed' = 412,
        'Request Entity Too Large' = 413,
        'Request URI Too Long' = 414,
        'Unsupported Media Type' = 415,
        'Requested Range Not Satisfiable' = 416,
        'Expectation Failed' = 417,
        'Teapot' = 418,
        'Unprocessable Entity' = 422,
        'Locked' = 423,
        'Failed Dependency' = 424,
        'Upgrade Required' = 426,
        'Precondition Required' = 428,
        'Too Many Requests' = 429,
        'Request Header Fields Too Large' = 431,
        'Unavailable For Legal Reasons' = 451,
        'Internal Server Error' = 500,
        'Not Implemented' = 501,
        'Bad Gateway' = 502,
        'Service Unavailable' = 503,
        'Gateway Timeout' = 504,
        'HTTP Version Not Supported' = 505,
        'Insufficient Storage' = 507,
        'Loop Detected' = 508,
        'Not Extended' = 510,
        'Network Authentication Required' = 511,
        'Network Read Timeout Error' = 598,
        'Network Connect Timeout Error' = 599
    }
}

declare namespace $ {
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    type $mol_rest_port_mime_hi = 'text' | 'application' | 'font' | 'audio' | 'video' | 'image' | 'model';
    type $mol_rest_port_mime = `${$mol_rest_port_mime_hi}/${string}`;
    class $mol_rest_port extends $mol_object {
        send_code(code: $mol_rest_code): void;
        send_type(mime: $mol_rest_port_mime): void;
        send_data(data: null | string | Uint8Array<ArrayBuffer> | Element | object): void;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
        send_text(data: string): void;
        send_json(data: object): void;
        send_dom(data: Element): void;
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    function $mol_base64_encode(src: Uint8Array<ArrayBuffer>): string;
}

declare namespace $ {
    function $mol_base64_encode_node(str: Uint8Array<ArrayBuffer>): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_decode_node(base64Str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_ae_encode(buffer: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_ae_decode(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_buffer extends DataView<ArrayBuffer> {
        [Symbol.toStringTag]: string;
        static from<This extends typeof $mol_buffer>(this: This, array: number | string | ArrayBufferView<ArrayBuffer> | ArrayBuffer): InstanceType<This>;
        static toString(): string;
        getUint48(offset: number, LE?: boolean): number;
        setUint48(offset: number, value: number, LE?: boolean): void;
        int8(offset: number, next?: number): number;
        uint8(offset: number, next?: number): number;
        int16(offset: number, next?: number): number;
        uint16(offset: number, next?: number): number;
        int32(offset: number, next?: number): number;
        uint32(offset: number, next?: number): number;
        int64(offset: number, next?: bigint): bigint;
        uint48(offset: number, next?: number): number;
        uint64(offset: number, next?: bigint): bigint;
        float16(offset: number, next?: number): number;
        float32(offset: number, next?: number): number;
        float64(offset: number, next?: number): number;
        asArray(): Uint8Array<ArrayBuffer>;
        toString(): string;
    }
}

declare namespace $ {
    function $mol_base64_url_encode(buffer: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_url_decode(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_base64_url_encode_node(str: Uint8Array<ArrayBuffer>): string;
    function $mol_base64_url_decode_node(str: string): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    class $mol_crypto2_key extends $mol_buffer {
        static size_str: number;
        static size_bin: number;
        static from<This extends typeof $mol_buffer>(this: This, serial: number | string | ArrayBufferView<ArrayBuffer> | ArrayBuffer): InstanceType<This>;
        asArray(): Uint8Array<ArrayBuffer>;
        toString(): string;
    }
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    function $mol_crypto_restack(error: any): never;
}

declare namespace $ {
    class $mol_crypto2_auditor extends $mol_crypto2_key {
        native(): Promise<CryptoKey>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
}

declare namespace $ {
    class $mol_crypto2_socket extends $mol_crypto2_key {
        native(): Promise<CryptoKey>;
    }
}

declare namespace $ {
    class $mol_crypto2_public extends $mol_crypto2_key {
        static size_str: number;
        static size_bin: number;
        auditor(): $mol_crypto2_auditor;
        socket(): $mol_crypto2_socket;
        toString(): string;
    }
}

declare namespace $ {
    function $mol_crypto2_hash(input: ArrayBufferView): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    let $mol_crypto_hash: typeof $mol_crypto2_hash;
}

declare namespace $ {
    function $giper_baza_link_compare(left: $giper_baza_link, right: $giper_baza_link): 1 | -1 | 0;
    class $giper_baza_link extends Object {
        readonly str: string;
        constructor(str: string);
        static hole: $giper_baza_link;
        static check(val: string): string | null;
        [$mol_key_handle](): string;
        toString(): string;
        toJSON(): string;
        [Symbol.toPrimitive](): string;
        [$mol_dev_format_head](): any[];
        toBin(): Uint8Array<ArrayBuffer>;
        static from_int(int: number): $giper_baza_link;
        static from_bin(bin: Uint8Array<ArrayBuffer>): $giper_baza_link;
        static _hash_cache: WeakMap<ArrayBufferView<ArrayBufferLike>, $giper_baza_link>;
        static hash_bin(bin: ArrayBufferView): $giper_baza_link;
        static hash_str(str: string): $giper_baza_link;
        peer(): $giper_baza_link;
        area(): $giper_baza_link;
        head(): $giper_baza_link;
        lord(): $giper_baza_link;
        land(): $giper_baza_link;
        relate(base: $giper_baza_link): $giper_baza_link;
        resolve(base: $giper_baza_link): $giper_baza_link;
        mix(mixin: Uint8Array<ArrayBuffer> | $giper_baza_link): Uint8Array<ArrayBuffer>;
    }
    function $giper_baza_link_base<Res>(base: $giper_baza_link, task: () => Res): Res;
}

declare namespace $ {
    class $mol_crypto2_signer extends $mol_crypto2_auditor {
        static size_sign: number;
        static generate(): Promise<$mol_crypto2_signer>;
        nativePrivate(): Promise<CryptoKey>;
        asArrayPrivate(): Uint8Array<ArrayBuffer>;
        toStringPrivate(): string;
        auditor(): $mol_crypto2_auditor;
        sign(data: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
}

declare namespace $ {
    function $mol_crypto2_nonce(): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    let $mol_crypto_salt: typeof $mol_crypto2_nonce;
}

declare namespace $ {
    type BufferSource = ArrayBufferView<ArrayBuffer> | ArrayBuffer;
    export class $mol_crypto_sacred extends $mol_buffer {
        static size: 16;
        static make(): $mol_crypto_sacred;
        static from<This extends typeof $mol_buffer>(this: This, serial: string | ArrayBufferView<ArrayBuffer>): InstanceType<This>;
        static from_native(native: CryptoKey): Promise<$mol_crypto_sacred>;
        constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);
        toString(): string;
        _native: undefined | CryptoKey & {
            type: 'secret';
        };
        native(): Promise<CryptoKey & {
            type: "secret";
        }>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        close(opened: DataView<ArrayBuffer>, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
        open(closed: Uint8Array<ArrayBuffer>, salt: BufferSource): Promise<Uint8Array<ArrayBuffer>>;
    }
    export {};
}

declare namespace $ {
    class $mol_crypto2_cipher extends $mol_crypto2_socket {
        static size_secret: number;
        static generate(): Promise<$mol_crypto2_cipher>;
        nativePrivate(): Promise<CryptoKey>;
        asArrayPrivate(): Uint8Array<ArrayBuffer>;
        toStringPrivate(): string;
        socket(): $mol_crypto2_socket;
        secret(pub: $mol_crypto2_socket): Promise<$mol_crypto_sacred>;
    }
}

declare namespace $ {
    class $mol_crypto2_private extends $mol_crypto2_public {
        static generate(): Promise<$mol_crypto2_private>;
        signer(): $mol_crypto2_signer;
        cipher(): $mol_crypto2_cipher;
        public(): $mol_crypto2_public;
        asArrayPrivate(): Uint8Array<ArrayBuffer>;
        toStringPrivate(): string;
    }
}

declare namespace $ {
    class $giper_baza_auth_pass extends $mol_crypto2_public {
        static like(bin: Uint8Array<ArrayBuffer>): $giper_baza_auth_pass | null;
        hash(): $giper_baza_link;
        path(): string;
        lord(): $giper_baza_link;
        peer(): $giper_baza_link;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
    }
    class $giper_baza_auth extends $mol_crypto2_private {
        static current(next?: $giper_baza_auth | null): $giper_baza_auth;
        static embryos: string[];
        static grab(): $giper_baza_auth;
        static generate(): Promise<$giper_baza_auth>;
        pass(): $giper_baza_auth_pass;
        secret_mutual(pass: $giper_baza_auth_pass): $mol_crypto_sacred;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
}

declare namespace $ {
    enum $mol_websocket_frame_op {
        con = 0,
        txt = 1,
        bin = 2,
        stop = 8,
        ping = 9,
        pong = 10
    }
    class $mol_websocket_frame extends $mol_buffer {
        kind(next?: {
            op: keyof typeof $mol_websocket_frame_op;
            fin: boolean;
        }): {
            op: keyof typeof $mol_websocket_frame_op;
            fin: boolean;
        } | {
            op: "stop" | "con" | "txt" | "bin" | "ping" | "pong";
            fin: number;
        };
        data(next?: {
            size: number;
            mask: boolean;
        }): {
            size: number;
            mask: boolean;
        } | {
            size: number;
            mask: number;
        };
        size(): number;
        mask(): Uint8Array<ArrayBuffer>;
        toString(): string;
        static make(op: keyof typeof $mol_websocket_frame_op, size?: number, mask?: boolean, fin?: boolean): $mol_websocket_frame;
    }
}

declare namespace $ {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket: WebSocket;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    class $mol_rest_port_ws_node extends $mol_rest_port_ws {
        socket: InstanceType<$node['stream']['Duplex']>;
        send_nil(): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
        send_text(data: string): void;
    }
}

declare namespace $ {
    enum $giper_baza_slot_kind {
        free = 0,
        land = 76,
        sand = 252,
        gift = 253,
        seal = 254,
        pass = 255
    }
}

declare namespace $ {
    class $mol_graph<Node, Edge> {
        nodes: Set<Node>;
        edges_out: Map<Node, Map<Node, Edge>>;
        edges_in: Map<Node, Map<Node, Edge>>;
        link(from: Node, to: Node, edge: Edge): void;
        unlink(from: Node, to: Node): void;
        link_out(from: Node, to: Node, edge: Edge): void;
        link_in(to: Node, from: Node, edge: Edge): void;
        edge(from: Node, to: Node): NonNullable<Edge> | null;
        edge_out(from: Node, to: Node): NonNullable<Edge> | null;
        edge_in(to: Node, from: Node): NonNullable<Edge> | null;
        acyclic(get_weight: (edge: Edge) => number): void;
        get sorted(): Set<Node>;
        get roots(): Node[];
        nodes_depth(select: (left: number, right: number) => number): Map<Node, number>;
        depth_nodes(select: (left: number, right: number) => number): Node[][];
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | readonly [number, number, number, number, number, number] | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        get normal(): $mol_time_duration;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        toArray(): readonly [number, number, number, number, number, number];
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | readonly (number | undefined)[] | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        toArray(): readonly [number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined, number | undefined];
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        [$mol_dev_format_head](): any[];
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    type $mol_data_tagged_type<Value, Tag extends PropertyKey> = Value & {
        [Key in Tag]: Value;
    };
    type $mol_data_tagged_parser<Input, Output> = {
        Value: Output;
    } & ((val: $mol_data_tagged_type<Input, never>) => Output);
    export function $mol_data_tagged<Config extends Record<string, $mol_data_value>>(config: Config): { [Type in keyof Config]: $mol_data_tagged_parser<Parameters<Config[Type]>[0], $mol_data_tagged_type<ReturnType<Config[Type]>, Type>>; };
    export {};
}

declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_func_is_class<Func extends Function>(func: Func): func is Func & (new (...args: any[]) => any);
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: $mol_type_result<$mol_type_foot<Funcs>>;
    };
    export {};
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {
    function $mol_data_integer(val: number): number;
}

declare namespace $ {
    const $giper_baza_rank: {
        Value: number & {
            $giper_baza_rank: number;
        };
    } & ((val: number & {}) => number & {
        $giper_baza_rank: number;
    });
    function $giper_baza_rank_make(tier: keyof typeof $giper_baza_rank_tier, fame: keyof typeof $giper_baza_rank_rate): typeof $giper_baza_rank.Value;
    enum $giper_baza_rank_tier {
        deny = 0,
        read = 16,
        post = 48,
        pull = 112,
        rule = 240
    }
    function $giper_baza_rank_tier_of(rank: typeof $giper_baza_rank.Value): $giper_baza_rank_tier;
    const $giper_baza_rank_work_rates: readonly [15, 15, 15, 15, 15, 15, 15, 15, 14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    enum $giper_baza_rank_rate {
        late = 0,
        long = 12,
        slow = 13,
        fast = 14,
        just = 15
    }
    function $giper_baza_rank_rate_of(rank: typeof $giper_baza_rank.Value): $giper_baza_rank_rate;
    const $giper_baza_rank_deny: number & {
        $giper_baza_rank: number;
    };
    const $giper_baza_rank_read: number & {
        $giper_baza_rank: number;
    };
    const $giper_baza_rank_rule: number & {
        $giper_baza_rank: number;
    };
    function $giper_baza_rank_pull(rate: keyof typeof $giper_baza_rank_rate): number & {
        $giper_baza_rank: number;
    };
    function $giper_baza_rank_post(rate: keyof typeof $giper_baza_rank_rate): number & {
        $giper_baza_rank: number;
    };
    type $giper_baza_rank_preset = [$giper_baza_auth_pass | null, typeof $giper_baza_rank.Value][];
}

declare namespace $ {
    function $giper_baza_time_moment(time: number): $mol_time_moment;
    function $giper_baza_time_dump(time: number, tick?: number): string;
    function $giper_baza_time_now(): number;
    function $giper_baza_time_freeze(task: () => void): void;
}

declare namespace $ {
    type $giper_baza_face_data = Iterable<readonly [peer: string, face: $giper_baza_face]>;
    class $giper_baza_face extends Object {
        time: number;
        tick: number;
        summ: number;
        static length(): 16;
        constructor(time?: number, tick?: number, summ?: number);
        clone(): $giper_baza_face;
        get moment(): $mol_time_moment;
        get time_tick(): number;
        sync_time(time: number, tick: number): void;
        sync_summ(summ: number): void;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
    }
    class $giper_baza_face_map extends Map<string, $giper_baza_face> {
        stat: $giper_baza_face;
        constructor(entries?: $giper_baza_face_data);
        clone(): $giper_baza_face_map;
        sync(right: $giper_baza_face_data): void;
        peer_time(peer: string, time: number, tick: number): void;
        peer_summ(peer: string, summ: number): void;
        peer_summ_shift(peer: string, diff: number): void;
        tick(): $giper_baza_face;
        toJSON(): {
            [k: string]: $giper_baza_face;
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $mol_wire_dict<Key, Value> extends Map<Key, Value> {
        pub: $mol_wire_pub;
        has(key: Key): boolean;
        get(key: Key): Value | undefined;
        entries(): MapIterator<[Key, Value]>;
        keys(): MapIterator<Key>;
        values(): MapIterator<Value>;
        forEach(task: (value: Value, key: Key, dict: Map<Key, Value>) => void, self?: any): void;
        [Symbol.iterator](): MapIterator<[Key, Value]>;
        get size(): number;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        clear(): void;
        item(key: Key, next?: Value | null): NonNullable<Value> | null;
    }
}

declare namespace $ {
    function $mol_hash_numbers(buff: ArrayLike<number>, seed?: number): number;
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string;
    }
}

declare namespace $ {
    function $mol_bigint_encode(num: bigint): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_charset_ucf_encode(str: string): Uint8Array<ArrayBuffer>;
    function $mol_charset_ucf_encode_to(str: string, buf: Uint8Array<ArrayBuffer>, from?: number): number;
    function $mol_charset_ucf_decode(buffer: Uint8Array<ArrayBuffer>, mode?: number): string;
}

declare namespace $ {
    function $mol_bigint_decode(buf: Uint8Array<ArrayBuffer>): bigint;
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    enum $mol_vary_tip {
        uint = 0,
        link = 32,
        spec = 64,
        list = 96,
        blob = 128,
        text = 160,
        tupl = 192,
        sint = 224
    }
    enum $mol_vary_len {
        L1 = 28,
        L2 = 29,
        L4 = 30,
        L8 = 31,
        LA = 32
    }
    enum $mol_vary_spec {
        none,
        true,
        fake,
        both,
        fp16,
        fp32,
        fp64,
        f128,
        f256
    }
    class $mol_vary_class extends Object {
        lean_symbol: symbol;
        array: Uint8Array<ArrayBuffer>;
        buffer: DataView<ArrayBuffer>;
        pack(data: readonly unknown[]): Uint8Array<ArrayBuffer>;
        take(array: Uint8Array<ArrayBuffer>): unknown;
        rich_index: Map<string | null, any>;
        zone(): $mol_vary_class;
        rich_node(keys: readonly string[]): Map<string | null, any>;
        lean_find(val: any): any;
        type<const Instance extends object, const Keys extends readonly any[], const Vals extends readonly any[]>({ type, keys, rich, lean }: {
            type: new (...vals: any[]) => Instance;
            keys: Keys;
            lean: (obj: Instance) => Vals;
            rich: (vals: Vals) => Instance;
        }): void;
    }
    let $mol_vary: $mol_vary_class;
}

declare namespace $ {
    type $giper_baza_vary_type = null | boolean | number | bigint | string | Uint8Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | BigUint64Array<ArrayBuffer> | Int8Array<ArrayBuffer> | Int16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | BigInt64Array<ArrayBuffer> | Float64Array<ArrayBuffer> | Float32Array<ArrayBuffer> | Float64Array<ArrayBuffer> | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | $giper_baza_link | Element | readonly $giper_baza_vary_type[] | Readonly<{
        [key in string]: $giper_baza_vary_type;
    }>;
    let $giper_baza_vary: $mol_vary_class;
    function $giper_baza_vary_switch<Ways extends {
        none: (vary: null) => any;
        blob: (vary: ArrayBufferView<ArrayBuffer>) => any;
        bool: (vary: boolean) => any;
        bint: (vary: bigint) => any;
        real: (vary: number) => any;
        link: (vary: $giper_baza_link) => any;
        text: (vary: string) => any;
        time: (vary: $mol_time_moment) => any;
        dura: (vary: $mol_time_duration) => any;
        span: (vary: $mol_time_interval) => any;
        dict: (vary: {}) => any;
        list: (vary: any[]) => any;
        elem: (vary: Element) => any;
        tree: (vary: $mol_tree2) => any;
    }>(vary: $giper_baza_vary_type, ways: Ways): $mol_type_result<Ways[keyof Ways]>;
}

declare namespace $ {
    function $mol_tree2_bin_to_bytes(tree: $mol_tree2): Uint8Array<ArrayBuffer>;
    function $mol_tree2_bin_from_bytes(bytes: ArrayLike<number>, span?: $mol_span): $mol_tree2;
    function $mol_tree2_bin_from_string(str: string, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_xml_from_dom(dom: Node): $mol_tree2;
}

declare namespace $ {
    function $giper_baza_vary_cast_blob(vary: $giper_baza_vary_type): ArrayLike<number | bigint> | null;
    function $giper_baza_vary_cast_bool(vary: $giper_baza_vary_type): boolean | null;
    function $giper_baza_vary_cast_bint(vary: $giper_baza_vary_type): bigint | null;
    function $giper_baza_vary_cast_real(vary: $giper_baza_vary_type): number | null;
    function $giper_baza_vary_cast_link(vary: $giper_baza_vary_type): $giper_baza_link | null;
    function $giper_baza_vary_cast_text(vary: $giper_baza_vary_type): string | null;
    function $giper_baza_vary_cast_time(vary: $giper_baza_vary_type): $mol_time_moment | null;
    function $giper_baza_vary_cast_dura(vary: $giper_baza_vary_type): $mol_time_duration | null;
    function $giper_baza_vary_cast_span(vary: $giper_baza_vary_type): $mol_time_interval | null;
    function $giper_baza_vary_cast_dict(vary: $giper_baza_vary_type): {} | null;
    function $giper_baza_vary_cast_list(vary: $giper_baza_vary_type): readonly any[] | null;
    function $giper_baza_vary_cast_elem(vary: $giper_baza_vary_type): Element | null;
    function $giper_baza_vary_cast_tree(vary: $giper_baza_vary_type): $mol_tree2 | null;
    const $giper_baza_vary_cast_funcs: {
        readonly none: () => null;
        readonly blob: typeof $giper_baza_vary_cast_blob;
        readonly bool: typeof $giper_baza_vary_cast_bool;
        readonly bint: typeof $giper_baza_vary_cast_bint;
        readonly real: typeof $giper_baza_vary_cast_real;
        readonly link: typeof $giper_baza_vary_cast_link;
        readonly text: typeof $giper_baza_vary_cast_text;
        readonly time: typeof $giper_baza_vary_cast_time;
        readonly dura: typeof $giper_baza_vary_cast_dura;
        readonly span: typeof $giper_baza_vary_cast_span;
        readonly dict: typeof $giper_baza_vary_cast_dict;
        readonly list: typeof $giper_baza_vary_cast_list;
        readonly elem: typeof $giper_baza_vary_cast_elem;
        readonly tree: typeof $giper_baza_vary_cast_tree;
    };
}

declare namespace $ {
    class $giper_baza_pawn extends $mol_object {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        static meta: null | $giper_baza_link;
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): InstanceType<Pawn>;
        pawns<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn | null): readonly InstanceType<Pawn>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    class $giper_baza_fund<Pawn> extends $mol_object {
        readonly item_make: (head: $giper_baza_link) => Pawn;
        constructor(item_make: (head: $giper_baza_link) => Pawn);
        Head(head: $giper_baza_link): Pawn;
        Data(): Pawn;
        Tine(): Pawn;
    }
}

declare namespace $ {
    class $mol_bus<Data> extends $mol_object {
        readonly name: string;
        readonly handle: (data: Data) => void;
        readonly channel: null | BroadcastChannel;
        constructor(name: string, handle: (data: Data) => void);
        destructor(): void;
        send(data: Data): void;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static prolog: string;
        static separator: string;
        static href(next?: string): string;
        static href_normal(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static make_link(next: Record<string, string | null>): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static commit(): void;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    function $giper_baza_log(this: $): boolean;
}

declare namespace $ {
    const $giper_baza_land_root: {
        data: $giper_baza_link;
        tine: $giper_baza_link;
    };
    class $giper_baza_land extends $mol_object {
        link(): $giper_baza_link;
        auth(): $giper_baza_auth;
        faces: $giper_baza_face_map;
        _pass: $mol_wire_dict<string, $giper_baza_auth_pass>;
        _seal_item: $mol_wire_dict<string, $giper_baza_unit_seal>;
        _seal_shot: $mol_wire_dict<string, $giper_baza_unit_seal>;
        _gift: $mol_wire_dict<string, $giper_baza_unit_gift>;
        _sand: $mol_wire_dict<string, $mol_wire_dict<string, $mol_wire_dict<string, $giper_baza_unit_sand>>>;
        pass_add(pass: $giper_baza_auth_pass): void;
        seal_add(seal: $giper_baza_unit_seal): void;
        gift_add(gift: $giper_baza_unit_gift): void;
        sand_add(sand: $giper_baza_unit_sand): void;
        units_reaping: Set<$giper_baza_unit_base>;
        unit_reap(unit: $giper_baza_unit_base): void;
        unit_seal_inc(unit: $giper_baza_unit_base): void;
        unit_seal_dec(unit: $giper_baza_unit_base): void;
        seal_del(seal: $giper_baza_unit_seal): void;
        gift_del(gift: $giper_baza_unit_gift): void;
        sand_del(sand: $giper_baza_unit_sand): void;
        lord_pass(lord: $giper_baza_link): $giper_baza_auth_pass | null;
        unit_seal(unit: $giper_baza_unit_base): $giper_baza_unit_seal | null;
        sand_get(head: $giper_baza_link, lord: $giper_baza_link, self: $giper_baza_link): $giper_baza_unit_sand | null;
        _self_all: $mol_wire_dict<string, $giper_baza_unit_sand | null>;
        self_make(idea?: number): $giper_baza_link;
        area_make(idea?: number): $giper_baza_land;
        sync_rights(): $mol_wire_atom<unknown, [], void> | undefined;
        inherit(): void;
        Data<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): InstanceType<Pawn>;
        Tine(): $giper_baza_list_link;
        Pawn<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn): $giper_baza_fund<InstanceType<Pawn>>;
        total(): number;
        king_pass(): $giper_baza_auth_pass;
        pass_rank(pass: $giper_baza_auth_pass | null, next?: typeof $giper_baza_rank.Value): typeof $giper_baza_rank.Value;
        lord_tier(lord: $giper_baza_link): $giper_baza_rank_tier;
        lord_rate(lord: $giper_baza_link): $giper_baza_rank_rate;
        lord_rank(lord: $giper_baza_link | null, next?: typeof $giper_baza_rank.Value): number & {
            $giper_baza_rank: number;
        };
        diff_units(skip_faces?: $giper_baza_face_map): $giper_baza_unit[];
        diff_part(skip_faces?: $giper_baza_face_map): $giper_baza_pack_part;
        diff_parts(skip_faces?: $giper_baza_face_map): $giper_baza_pack_parts;
        face_pack(): $giper_baza_pack;
        diff_apply(units: readonly $giper_baza_unit[], skip_load?: 'skip_load'): readonly $giper_baza_unit[] | undefined;
        units_steal(donor: $giper_baza_land): void;
        rank_audit(): void;
        fork(preset?: $giper_baza_rank_preset): $giper_baza_land;
        sand_ordered({ head, peer }: {
            head: $giper_baza_link;
            peer: $giper_baza_link | null;
        }): $giper_baza_unit_sand[];
        join(): void;
        give(mate_pass: $giper_baza_auth_pass | null, rank: typeof $giper_baza_rank.Value): $giper_baza_unit_gift;
        post(lead: $giper_baza_link, head: $giper_baza_link, self: $giper_baza_link | null, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): $giper_baza_unit_sand;
        sand_move(sand: $giper_baza_unit_sand, head: $giper_baza_link, seat: number, peer?: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        sand_wipe(sand: $giper_baza_unit_sand, peer?: $giper_baza_link | null): $giper_baza_unit_sand;
        broadcast(): void;
        sync(): this;
        destructor(): void;
        mine(): $giper_baza_mine_temp;
        sync_mine(): $mol_wire_atom<unknown, [], void> | undefined;
        sync_yard(): $mol_wire_atom<unknown, [], void>;
        bus(): $mol_bus<ArrayBuffer>;
        loading(): void;
        sand_encoding(): void;
        units_unsigned(): $giper_baza_unit_base[];
        units_signing(): void;
        units_unsaved(): $giper_baza_unit[];
        units_saving(): void;
        units_save(units: readonly $giper_baza_unit[]): Promise<void>;
        units_sign(units: readonly $giper_baza_unit_base[]): Promise<$giper_baza_unit_seal[]>;
        sand_encode(sand: $giper_baza_unit_sand): Promise<$giper_baza_unit_sand>;
        sand_load(sand: $giper_baza_unit_sand): void;
        sand_decode(sand: $giper_baza_unit_sand): $giper_baza_vary_type;
        sand_decrypt(sand: $giper_baza_unit_sand): Uint8Array<ArrayBuffer>;
        encryptable(): boolean;
        encrypted(next?: boolean): boolean;
        secret(): $mol_crypto_sacred | null;
        dump(): {
            land: $giper_baza_link;
            units: $giper_baza_unit_base[];
        };
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    enum $giper_baza_unit_kind {
        sand = 252,
        gift = 253,
        seal = 254,
        pass = 255
    }
    let $giper_baza_unit_trusted: WeakSet<$giper_baza_unit_base>;
    function $giper_baza_unit_trusted_grant(unit: $giper_baza_unit): void;
    function $giper_baza_unit_trusted_check(unit: $giper_baza_unit): boolean;
    type $giper_baza_unit = $giper_baza_unit_base | $giper_baza_auth_pass;
    function $giper_baza_unit_sort(units: readonly $giper_baza_unit[]): $giper_baza_unit[];
    class $giper_baza_unit_base extends $mol_buffer {
        static compare(left: $giper_baza_unit_base | undefined, right: $giper_baza_unit_base | undefined): number;
        static narrow(buf: ArrayBuffer): $giper_baza_auth_pass | $giper_baza_unit_gift | $giper_baza_unit_seal | $giper_baza_unit_sand;
        constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);
        kind(next?: keyof typeof $giper_baza_unit_kind): Exclude<keyof typeof $giper_baza_unit_kind, 'pass'>;
        choose<Res>(ways: {
            gift: (unit: $giper_baza_unit_gift) => Res;
            sand: (unit: $giper_baza_unit_sand) => Res;
            seal: (unit: $giper_baza_unit_seal) => Res;
        }): Res;
        path(): string;
        id6(offset: number, next?: $giper_baza_link): $giper_baza_link;
        id12(offset: number, next?: $giper_baza_link): $giper_baza_link;
        time(next?: number): number;
        moment(): $mol_time_moment;
        tick(next?: number): number;
        time_tick(next?: number): number;
        _lord: $giper_baza_link | null;
        lord(next?: $giper_baza_link): $giper_baza_link;
        salt(): Uint8Array<ArrayBuffer>;
        hash(): $giper_baza_link;
        tier_min(): $giper_baza_rank_tier;
        encoded(): boolean;
        _land: null | $giper_baza_land;
        dump(): {};
        inspect(): string;
        toJSON(): string;
        toString(): string;
    }
}

declare namespace $ {
    type Block = {
        from: number;
        size: number;
        next: Block;
    };
    export class $mol_memory_pool extends Object {
        _free: Block;
        constructor(size?: number);
        acquire(size: number): number;
        release(from: number, size: number): void;
        empty(): boolean;
        acquired(): void;
    }
    export {};
}

declare namespace $ {
    let $giper_baza_unit_seal_limit: number;
    class $giper_baza_unit_seal extends $giper_baza_unit_base {
        static length(size: number): number;
        static make(size: number, wide: boolean): $giper_baza_unit_seal;
        meta(next?: {
            size: number;
            wide: boolean;
        }): number;
        size(): number;
        wide(): boolean;
        alive_items: Set<string>;
        alive_full(): boolean;
        alive_list(): $giper_baza_link[];
        hash_item(index: number, next?: $giper_baza_link): $giper_baza_link;
        _hash_list: readonly $giper_baza_link[];
        hash_list(next?: $giper_baza_link[]): $giper_baza_link[];
        shot(): $giper_baza_link;
        sign(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        work(): number;
        rate_min(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
        tier_min(): $giper_baza_rank_tier;
        rank_min(): number;
        path(): string;
        inspect(): string;
        toString(): string;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    enum $giper_baza_unit_sand_tag {
        term = 0,
        solo = 64,
        vals = 128,
        keys = 192
    }
    class $giper_baza_unit_sand extends $giper_baza_unit_base {
        static size_equator: number;
        static size_max: number;
        _vary: undefined | $giper_baza_vary_type;
        _open: Uint8Array<ArrayBuffer> | null;
        static length(size: number): number;
        static length_ball(size: number): number;
        static make(size: number, tag?: keyof typeof $giper_baza_unit_sand_tag): $giper_baza_unit_sand;
        tag(): keyof typeof $giper_baza_unit_sand_tag;
        big(): boolean;
        size(): number;
        dead(): boolean;
        _self: $giper_baza_link;
        self(next?: $giper_baza_link): $giper_baza_link;
        _head: $giper_baza_link;
        head(next?: $giper_baza_link): $giper_baza_link;
        _lead: $giper_baza_link;
        lead(next?: $giper_baza_link): $giper_baza_link;
        path(): string;
        _shot: $giper_baza_link;
        shot(next?: $giper_baza_link): $giper_baza_link;
        _data: Uint8Array<ArrayBuffer>;
        data(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        _ball: Uint8Array<ArrayBuffer>;
        ball(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        encoded(): true;
        hash(): $giper_baza_link;
        idea_seed(): number;
        dump(): {
            kind: "sand" | "gift" | "seal";
            lord: $giper_baza_link;
            lead: $giper_baza_link;
            head: $giper_baza_link;
            self: $giper_baza_link;
            tag: "keys" | "term" | "solo" | "vals";
            size: number;
            time: string;
        };
        tier_min(): $giper_baza_rank_tier.post | $giper_baza_rank_tier.pull;
        inspect(): string;
        toString(): string;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    function $giper_baza_unit_gift_sort(gifts: $giper_baza_unit_gift[]): $giper_baza_unit_gift[];
    class $giper_baza_unit_gift extends $giper_baza_unit_base {
        static length(): number;
        static make(): $giper_baza_unit_gift;
        rank(next?: typeof $giper_baza_rank.Value): number & {
            $giper_baza_rank: number;
        };
        tier(): $giper_baza_rank_tier;
        rate(): $giper_baza_rank_rate;
        mate(next?: $giper_baza_link): $giper_baza_link;
        path(): string;
        _code: Uint8Array<ArrayBuffer>;
        code(): Uint8Array<ArrayBuffer>;
        code_exists(): boolean;
        dump(): {
            kind: "sand" | "gift" | "seal";
            lord: $giper_baza_link;
            mate: $giper_baza_link;
            tier: string;
            rate: $giper_baza_rank_rate;
            time: string;
        };
        tier_min(): $giper_baza_rank_tier;
        inspect(): string;
        toString(): string;
        [$mol_dev_format_head](): any[];
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, replace, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
        replace?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    export class $giper_baza_list_vary extends $giper_baza_pawn {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn extends typeof $giper_baza_pawn>(Pawn: Pawn, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn>;
        [$mol_dev_format_head](): any[];
    }
    export function $giper_baza_list<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        items(next?: readonly ReturnType<Parse>[]): readonly ReturnType<Parse>[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: Parse;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    const $giper_baza_list_bin_base: (abstract new () => {
        items(next?: readonly (ArrayLike<number | bigint> | null)[] | undefined): readonly (ArrayLike<number | bigint> | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_blob;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_bin extends $giper_baza_list_bin_base {
    }
    const $giper_baza_list_bool_base: (abstract new () => {
        items(next?: readonly (boolean | null)[] | undefined): readonly (boolean | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_bool;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_bool extends $giper_baza_list_bool_base {
    }
    const $giper_baza_list_int_base: (abstract new () => {
        items(next?: readonly (bigint | null)[] | undefined): readonly (bigint | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_bint;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_int extends $giper_baza_list_int_base {
    }
    const $giper_baza_list_real_base: (abstract new () => {
        items(next?: readonly (number | null)[] | undefined): readonly (number | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_real;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_real extends $giper_baza_list_real_base {
    }
    const $giper_baza_list_link_base_1: (abstract new () => {
        items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_link;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_link extends $giper_baza_list_link_base_1 {
    }
    const $giper_baza_list_str_base: (abstract new () => {
        items(next?: readonly (string | null)[] | undefined): readonly (string | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_text;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_str extends $giper_baza_list_str_base {
    }
    const $giper_baza_list_time_base: (abstract new () => {
        items(next?: readonly ($mol_time_moment | null)[] | undefined): readonly ($mol_time_moment | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_time;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_time extends $giper_baza_list_time_base {
    }
    const $giper_baza_list_dur_base: (abstract new () => {
        items(next?: readonly ($mol_time_duration | null)[] | undefined): readonly ($mol_time_duration | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_dura;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_dur extends $giper_baza_list_dur_base {
    }
    const $giper_baza_list_range_base: (abstract new () => {
        items(next?: readonly ($mol_time_interval | null)[] | undefined): readonly ($mol_time_interval | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_span;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_range extends $giper_baza_list_range_base {
    }
    const $giper_baza_list_json_base: (abstract new () => {
        items(next?: readonly ({} | null)[] | undefined): readonly ({} | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_dict;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_json extends $giper_baza_list_json_base {
    }
    const $giper_baza_list_jsan_base: (abstract new () => {
        items(next?: readonly (readonly any[] | null)[] | undefined): readonly (readonly any[] | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_list;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_jsan extends $giper_baza_list_jsan_base {
    }
    const $giper_baza_list_dom_base: (abstract new () => {
        items(next?: readonly (Element | null)[] | undefined): readonly (Element | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_elem;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_dom extends $giper_baza_list_dom_base {
    }
    const $giper_baza_list_tree_base: (abstract new () => {
        items(next?: readonly ($mol_tree2 | null)[] | undefined): readonly ($mol_tree2 | null)[];
        items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
        splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
        has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
        add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
        cut(vary: $giper_baza_vary_type): void;
        move(from: number, to: number): void;
        wipe(seat: number): void;
        pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_tree;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_list_tree extends $giper_baza_list_tree_base {
    }
    export class $giper_baza_list_link_base extends $giper_baza_list_link {
    }
    export function $giper_baza_list_link_to<const Value extends any, Vals extends readonly any[] = readonly $mol_type_result<$mol_type_result<Value>>[]>(Value: Value): {
        new (): {
            remote_list(next?: Vals): Vals;
            remote_add(item: Vals[number]): void;
            make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): Vals[number];
            items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
            items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
            splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
            has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
            add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            cut(vary: $giper_baza_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
            [$mol_dev_format_head](): any[];
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
            pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
            meta(next?: $giper_baza_link): $giper_baza_link | null;
            meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            authors(): $giper_baza_auth_pass[];
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
            [Symbol.dispose](): void;
        };
        Value: Value;
        toString(): any;
        parse: typeof $giper_baza_vary_cast_link;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export {};
}

declare namespace $ {
    type $giper_baza_mine_diff = {
        ins: readonly $giper_baza_unit[];
        del: readonly $giper_baza_unit[];
    };
    class $giper_baza_mine_temp extends $mol_object {
        static land(land: $giper_baza_link): $giper_baza_mine_temp;
        land(): $giper_baza_link;
        unit_deletes: number;
        unit_inserts: number;
        ball_inserts: number;
        ball_deletes: number;
        units_persisted: WeakSet<$giper_baza_unit>;
        units_save(diff: $giper_baza_mine_diff): void;
        units_load(): readonly $giper_baza_unit[];
        ball_load(sand: $giper_baza_unit_sand): Uint8Array<ArrayBuffer>;
    }
    let $giper_baza_mine: typeof $giper_baza_mine_temp;
}

declare namespace $ {
    class $giper_baza_mine_fs_yym_act extends $mol_object2 {
        yym: $giper_baza_mine_fs_yym;
        constructor(yym: $giper_baza_mine_fs_yym);
        transaction: $mol_file_transaction;
        offsets_del: WeakMap<ArrayBuffer, number>;
        offsets_ins: WeakMap<ArrayBuffer, number>;
        save(...data: [ArrayBufferView<ArrayBuffer>, ...ArrayBufferView<ArrayBuffer>[]]): number;
        free(data: ArrayBufferView<ArrayBuffer>, size?: number): undefined;
    }
    class $giper_baza_mine_fs_yym extends $mol_object2 {
        readonly sides: [$mol_file, $mol_file];
        pool(reset?: null): $mol_memory_pool;
        offsets(reset?: null): Map<ArrayBuffer, number>;
        constructor(sides: [$mol_file, $mol_file]);
        destructor(): void;
        load_init(): void;
        load(): Uint8Array<ArrayBuffer>;
        atomic(task: (act: $giper_baza_mine_fs_yym_act) => void): void;
        save_init(): void;
        empty(): boolean;
    }
    class $giper_baza_mine_fs extends $giper_baza_mine_temp {
        store(): $giper_baza_mine_fs_yym;
        store_init(): void;
        units_save(diff: $giper_baza_mine_diff): void;
        units_load(): readonly $giper_baza_unit[];
        destructor(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $giper_baza_dict extends $giper_baza_list_vary {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        keys(): readonly $giper_baza_vary_type[];
        dive<Pawn extends typeof $giper_baza_pawn>(key: $giper_baza_vary_type, Pawn: Pawn, auto?: any): InstanceType<Pawn> | null;
        static schema: Record<string, typeof $giper_baza_pawn>;
        static with<This extends typeof $giper_baza_dict, const Schema extends Record<string, {
            tag: keyof typeof $giper_baza_unit_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema, path?: string): Omit<This, "prototype"> & {
            new (...args: any[]): $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>;
            path: string;
        } & {
            schema: {
                [x: string]: typeof $giper_baza_pawn;
            } & Schema;
        };
        [$mol_dev_format_head](): any[];
    }
    function $giper_baza_dict_to<Value extends {
        tag: keyof typeof $giper_baza_unit_sand_tag;
        new (): {};
    }>(Value: Value): {
        new (): {
            Value: Value;
            key(key: $giper_baza_vary_type, auto?: any): InstanceType<Value>;
            keys(): readonly $giper_baza_vary_type[];
            dive<Pawn_1 extends typeof $giper_baza_pawn>(key: $giper_baza_vary_type, Pawn: Pawn_1, auto?: any): InstanceType<Pawn_1> | null;
            [$mol_dev_format_head](): any[];
            items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
            splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
            has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
            add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
            cut(vary: $giper_baza_vary_type): void;
            move(from: number, to: number): void;
            wipe(seat: number): void;
            pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
            pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
            meta(next?: $giper_baza_link): $giper_baza_link | null;
            meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            authors(): $giper_baza_auth_pass[];
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
            [Symbol.dispose](): void;
        };
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        schema: Record<string, typeof $giper_baza_pawn>;
        with<This extends typeof $giper_baza_dict, const Schema extends Record<string, {
            tag: keyof typeof $giper_baza_unit_sand_tag;
            new (): {};
        }>>(this: This, schema: Schema, path?: string): Omit<This, "prototype"> & {
            new (...args: any[]): $mol_type_override<InstanceType<This>, { readonly [Key in keyof Schema]: (auto?: any) => InstanceType<Schema[Key]> | null; }>;
            path: string;
        } & {
            schema: {
                [x: string]: typeof $giper_baza_pawn;
            } & Schema;
        };
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
}

declare namespace $ {
    const $giper_baza_pack_four_code: Uint8Array<ArrayBuffer>;
    const $giper_baza_pack_head_size: number;
    type $giper_baza_pack_parts = [string, $giper_baza_pack_part][];
    class $giper_baza_pack_part extends $mol_object {
        units: readonly $giper_baza_unit[];
        faces: $giper_baza_face_map;
        constructor(units?: readonly $giper_baza_unit[], faces?: $giper_baza_face_map);
        static from(units: $giper_baza_unit[], faces?: $giper_baza_face_map): $giper_baza_pack_part;
        [Symbol.iterator](): Generator<never, {
            units: readonly $giper_baza_unit[];
            faces: $giper_baza_face_map;
        }, unknown>;
    }
    class $giper_baza_pack extends $mol_buffer {
        toBlob(): Blob;
        parts(offsets?: WeakMap<ArrayBuffer, number>, pool?: $mol_memory_pool): [string, $giper_baza_pack_part][];
        static length(parts: $giper_baza_pack_parts): number;
        static make(parts: $giper_baza_pack_parts): $giper_baza_pack;
    }
}

declare namespace $ {
    class $giper_baza_yard extends $mol_object {
        glob(): $giper_baza_glob;
        lands_news: $mol_wire_set<string>;
        static masters_default: string[];
        static masters(): string[];
        master_cursor(next?: number): number;
        master_current(): string;
        master_next(): void;
        reconnects(reset?: null): number;
        master(): $mol_rest_port | null;
        slaves: $mol_wire_set<$mol_rest_port>;
        sync(): void;
        sync_news(): void;
        sync_port(): void;
        sync_port_lands(port: $mol_rest_port): void;
        ports(): $mol_rest_port[];
        masters(): $mol_rest_port[];
        port_lands_active(port: $mol_rest_port): $mol_wire_set<string>;
        port_lands_passive(port: $mol_rest_port): Set<string>;
        port_income(port: $mol_rest_port, msg: Uint8Array<ArrayBuffer>): void;
        face_port_sync(port: $mol_rest_port, income: $giper_baza_pack_parts): void;
        sync_land(land: $giper_baza_link): void;
        forget_land(land: $giper_baza_land): void;
        sync_port_land([port, land]: [$mol_rest_port, $giper_baza_link]): void;
        init_port_land([port, land]: [$mol_rest_port, $giper_baza_link]): void;
        face_port_land([port, land]: [$mol_rest_port, $giper_baza_link], next?: null | $giper_baza_face_map): $giper_baza_face_map | null;
    }
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {
    export class $giper_baza_atom_vary extends $giper_baza_pawn {
        static tag: keyof typeof $giper_baza_unit_sand_tag;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
    }
    export class $giper_baza_atom_enum_base extends $giper_baza_atom_vary {
        static options: readonly $giper_baza_vary_type[];
    }
    export function $giper_baza_atom_enum<const Options extends readonly $giper_baza_vary_type[]>(options: Options): (abstract new () => {
        val(next?: Options[number]): Options[number] | null;
        val_of(peer: $giper_baza_link | null, next?: Options[number]): Options[number] | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        options: Options;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export function $giper_baza_atom<Parse extends $mol_data_value>(parse: Parse): (abstract new () => {
        val(next?: ReturnType<Parse>): ReturnType<Parse> | null;
        val_of(peer: $giper_baza_link | null, next?: ReturnType<Parse>): ReturnType<Parse> | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: Parse;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    const $giper_baza_atom_blob_base: (abstract new () => {
        val(next?: ArrayLike<number | bigint> | null | undefined): ArrayLike<number | bigint> | null;
        val_of(peer: $giper_baza_link | null, next?: ArrayLike<number | bigint> | null | undefined): ArrayLike<number | bigint> | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_blob;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_blob extends $giper_baza_atom_blob_base {
    }
    const $giper_baza_atom_bool_base: (abstract new () => {
        val(next?: boolean | null | undefined): boolean | null;
        val_of(peer: $giper_baza_link | null, next?: boolean | null | undefined): boolean | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_bool;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_bool extends $giper_baza_atom_bool_base {
    }
    const $giper_baza_atom_bint_base: (abstract new () => {
        val(next?: bigint | null | undefined): bigint | null;
        val_of(peer: $giper_baza_link | null, next?: bigint | null | undefined): bigint | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_bint;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_bint extends $giper_baza_atom_bint_base {
    }
    const $giper_baza_atom_real_base: (abstract new () => {
        val(next?: number | null | undefined): number | null;
        val_of(peer: $giper_baza_link | null, next?: number | null | undefined): number | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_real;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_real extends $giper_baza_atom_real_base {
    }
    const $giper_baza_atom_link_base_1: (abstract new () => {
        val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
        val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_link;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_link extends $giper_baza_atom_link_base_1 {
    }
    const $giper_baza_atom_text_base: (abstract new () => {
        val(next?: string | null | undefined): string | null;
        val_of(peer: $giper_baza_link | null, next?: string | null | undefined): string | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_text;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_text extends $giper_baza_atom_text_base {
        selection(lord: $giper_baza_link, next?: readonly [begin: number, end: number]): number[] | readonly [begin: number, end: number];
    }
    const $giper_baza_atom_time_base: (abstract new () => {
        val(next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
        val_of(peer: $giper_baza_link | null, next?: $mol_time_moment | null | undefined): $mol_time_moment | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_time;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_time extends $giper_baza_atom_time_base {
    }
    const $giper_baza_atom_dura_base: (abstract new () => {
        val(next?: $mol_time_duration | null | undefined): $mol_time_duration | null;
        val_of(peer: $giper_baza_link | null, next?: $mol_time_duration | null | undefined): $mol_time_duration | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_dura;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_dura extends $giper_baza_atom_dura_base {
    }
    const $giper_baza_atom_span_base: (abstract new () => {
        val(next?: $mol_time_interval | null | undefined): $mol_time_interval | null;
        val_of(peer: $giper_baza_link | null, next?: $mol_time_interval | null | undefined): $mol_time_interval | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_span;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_span extends $giper_baza_atom_span_base {
    }
    const $giper_baza_atom_dict_base: (abstract new () => {
        val(next?: {} | null | undefined): {} | null;
        val_of(peer: $giper_baza_link | null, next?: {} | null | undefined): {} | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_dict;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_dict extends $giper_baza_atom_dict_base {
    }
    const $giper_baza_atom_list_base: (abstract new () => {
        val(next?: readonly any[] | null | undefined): readonly any[] | null;
        val_of(peer: $giper_baza_link | null, next?: readonly any[] | null | undefined): readonly any[] | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_list;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_list extends $giper_baza_atom_list_base {
    }
    const $giper_baza_atom_elem_base: (abstract new () => {
        val(next?: Element | null | undefined): Element | null;
        val_of(peer: $giper_baza_link | null, next?: Element | null | undefined): Element | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_elem;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_elem extends $giper_baza_atom_elem_base {
    }
    const $giper_baza_atom_tree_base: (abstract new () => {
        val(next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
        val_of(peer: $giper_baza_link | null, next?: $mol_tree2 | null | undefined): $mol_tree2 | null;
        pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
        vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
        vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
        [$mol_dev_format_head](): any[];
        land(): $giper_baza_land;
        head(): $giper_baza_link;
        land_link(): $giper_baza_link;
        link(): $giper_baza_link;
        toJSON(): string;
        cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
        pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
        units(): $giper_baza_unit_sand[];
        units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
        meta(next?: $giper_baza_link): $giper_baza_link | null;
        meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
        filled(): boolean;
        can_change(): boolean;
        last_change(): $mol_time_moment | null;
        authors(): $giper_baza_auth_pass[];
        get $(): $;
        set $(next: $);
        destructor(): void;
        toString(): string;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        [Symbol.dispose](): void;
    }) & {
        parse: typeof $giper_baza_vary_cast_tree;
        toString(): any;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_atom_tree extends $giper_baza_atom_tree_base {
    }
    export class $giper_baza_atom_link_base extends $giper_baza_atom_link {
        static Value: typeof $giper_baza_dict;
    }
    export function $giper_baza_atom_link_to<const Value extends any>(Value: Value): {
        new (): {
            Value: Value;
            remote(next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            remote_of(peer: $giper_baza_link | null, next?: $mol_type_result<$mol_type_result<Value>> | null | undefined): $mol_type_result<$mol_type_result<Value>> | null;
            ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $mol_type_result<$mol_type_result<Value>> | null;
            ensure_here(peer: $giper_baza_link | null): void;
            ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
            ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
            remote_ensure(preset?: $giper_baza_rank_preset): $mol_type_result<$mol_type_result<Value>> | null;
            local_ensure(): $mol_type_result<$mol_type_result<Value>> | null;
            val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
            val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
            pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
            vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
            vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
            [$mol_dev_format_head](): any[];
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
            pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
            meta(next?: $giper_baza_link): $giper_baza_link | null;
            meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            authors(): $giper_baza_auth_pass[];
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
            [Symbol.dispose](): void;
        };
        toString(): any;
        Value: typeof $giper_baza_dict;
        parse: typeof $giper_baza_vary_cast_link;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export {};
}

declare namespace $ {
    class $giper_baza_stat_series extends $giper_baza_atom_list {
        tick(key: number, val: number, count: number): void;
        _initial: number;
        initial(): number;
        max(): number;
        values(next?: number[]): number[];
    }
}

declare namespace $ {
    const $giper_baza_stat_ranges_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Seconds: (auto?: any) => $giper_baza_stat_series | null;
            readonly Minutes: (auto?: any) => $giper_baza_stat_series | null;
            readonly Hours: (auto?: any) => $giper_baza_stat_series | null;
            readonly Days: (auto?: any) => $giper_baza_stat_series | null;
            readonly Months: (auto?: any) => $giper_baza_stat_series | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Seconds: typeof $giper_baza_stat_series;
            readonly Minutes: typeof $giper_baza_stat_series;
            readonly Hours: typeof $giper_baza_stat_series;
            readonly Days: typeof $giper_baza_stat_series;
            readonly Months: typeof $giper_baza_stat_series;
        };
    };
    export class $giper_baza_stat_ranges extends $giper_baza_stat_ranges_base {
        _last_instant: number;
        tick_instant(val: number): void;
        tick_integral(val: number): void;
        series(): number[];
    }
    export {};
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {
    type $mol_report_handler_type = (event: Event | string, url?: string, line?: number, col?: number, error?: Error) => void;
    const $mol_report_handler_all: Set<$mol_report_handler_type>;
}

declare namespace $ {
    const $giper_baza_app_stat_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Uptime: (auto?: any) => $giper_baza_atom_dura | null;
            readonly Cpu_user: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Cpu_system: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Mem_used: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Mem_free: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Fs_free: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Fs_reads: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Fs_writes: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Port_slaves: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Port_masters: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Land_active: (auto?: any) => $giper_baza_stat_ranges | null;
            readonly Errors: (auto?: any) => $giper_baza_stat_ranges | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Uptime: typeof $giper_baza_atom_dura;
            readonly Cpu_user: typeof $giper_baza_stat_ranges;
            readonly Cpu_system: typeof $giper_baza_stat_ranges;
            readonly Mem_used: typeof $giper_baza_stat_ranges;
            readonly Mem_free: typeof $giper_baza_stat_ranges;
            readonly Fs_free: typeof $giper_baza_stat_ranges;
            readonly Fs_reads: typeof $giper_baza_stat_ranges;
            readonly Fs_writes: typeof $giper_baza_stat_ranges;
            readonly Port_slaves: typeof $giper_baza_stat_ranges;
            readonly Port_masters: typeof $giper_baza_stat_ranges;
            readonly Land_active: typeof $giper_baza_stat_ranges;
            readonly Errors: typeof $giper_baza_stat_ranges;
        };
    };
    export class $giper_baza_app_stat extends $giper_baza_app_stat_base {
        freshness(): number | null;
        uptime(next?: $mol_time_duration): $mol_time_duration;
        init(): {
            destructor: () => boolean;
        };
        tick(): void;
    }
    export {};
}

declare namespace $ {
    export const $giper_baza_flex_deck_link: $giper_baza_link;
    const $giper_baza_flex_subj_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Name: (auto?: any) => $giper_baza_atom_text | null;
            readonly Icon: (auto?: any) => $giper_baza_atom_text | null;
            readonly Hint: (auto?: any) => $giper_baza_atom_text | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Name: typeof $giper_baza_atom_text;
            readonly Icon: typeof $giper_baza_atom_text;
            readonly Hint: typeof $giper_baza_atom_text;
        };
    };
    export class $giper_baza_flex_subj extends $giper_baza_flex_subj_base {
        static meta: $giper_baza_link;
        name(next?: string): string;
        icon(next?: string): string;
        hint(next?: string): string;
    }
    const $giper_baza_flex_subj_link_base: {
        new (): {
            Value: () => typeof $giper_baza_flex_subj;
            remote(next?: $giper_baza_flex_subj | null | undefined): $giper_baza_flex_subj | null;
            remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_subj | null | undefined): $giper_baza_flex_subj | null;
            ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_subj | null;
            ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_subj | null;
            ensure_here(peer: $giper_baza_link | null): void;
            ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
            ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
            remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_subj | null;
            local_ensure(): $giper_baza_flex_subj | null;
            val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
            val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
            pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
            vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
            vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
            [$mol_dev_format_head](): any[];
            land(): $giper_baza_land;
            head(): $giper_baza_link;
            land_link(): $giper_baza_link;
            link(): $giper_baza_link;
            toJSON(): string;
            cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
            pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
            units(): $giper_baza_unit_sand[];
            units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
            meta(next?: $giper_baza_link): $giper_baza_link | null;
            meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
            filled(): boolean;
            can_change(): boolean;
            last_change(): $mol_time_moment | null;
            authors(): $giper_baza_auth_pass[];
            get $(): $;
            set $(next: $);
            destructor(): void;
            toString(): string;
            [Symbol.toStringTag]: string;
            [$mol_ambient_ref]: $;
            [Symbol.dispose](): void;
        };
        toString(): any;
        Value: typeof $giper_baza_dict;
        parse: typeof $giper_baza_vary_cast_link;
        tag: keyof typeof $giper_baza_unit_sand_tag;
        meta: null | $giper_baza_link;
        make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
        $: $;
        create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        toJSON(): any;
        destructor(): void;
        [Symbol.toPrimitive](): any;
        [$mol_key_handle](): any;
    };
    export class $giper_baza_flex_subj_link extends $giper_baza_flex_subj_link_base {
    }
    const $giper_baza_flex_meta_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Pulls: (auto?: any) => {
                remote_list(next?: readonly $giper_baza_flex_subj[] | undefined): readonly $giper_baza_flex_subj[];
                remote_add(item: $giper_baza_flex_subj): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_subj;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Props: (auto?: any) => {
                remote_list(next?: readonly $giper_baza_flex_prop[] | undefined): readonly $giper_baza_flex_prop[];
                remote_add(item: $giper_baza_flex_prop): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_prop;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Pulls: {
                new (): {
                    remote_list(next?: readonly $giper_baza_flex_subj[] | undefined): readonly $giper_baza_flex_subj[];
                    remote_add(item: $giper_baza_flex_subj): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_subj;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Props: {
                new (): {
                    remote_list(next?: readonly $giper_baza_flex_prop[] | undefined): readonly $giper_baza_flex_prop[];
                    remote_add(item: $giper_baza_flex_prop): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_prop;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
        };
    };
    export class $giper_baza_flex_meta extends $giper_baza_flex_meta_base {
        static meta: $giper_baza_link;
        prop_new(key: string, type: string, kind?: $giper_baza_flex_meta, vars?: $giper_baza_list_vary, base?: $giper_baza_vary_type): $giper_baza_flex_prop;
        prop_add(prop: $giper_baza_flex_prop): void;
        prop_all(): readonly $giper_baza_flex_prop[];
        pull_add(meta: $giper_baza_flex_meta): void;
        pull_all(): $giper_baza_flex_meta[];
    }
    const $giper_baza_flex_prop_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Path: (auto?: any) => $giper_baza_atom_text | null;
            readonly Type: (auto?: any) => $giper_baza_atom_text | null;
            readonly Kind: (auto?: any) => {
                Value: Value;
                remote(next?: $giper_baza_flex_meta | null | undefined): $giper_baza_flex_meta | null;
                remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_meta | null | undefined): $giper_baza_flex_meta | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_meta | null;
                local_ensure(): $giper_baza_flex_meta | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Enum: (auto?: any) => {
                Value: Value;
                remote(next?: $giper_baza_list_vary | null | undefined): $giper_baza_list_vary | null;
                remote_of(peer: $giper_baza_link | null, next?: $giper_baza_list_vary | null | undefined): $giper_baza_list_vary | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_list_vary | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_list_vary | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_list_vary | null;
                local_ensure(): $giper_baza_list_vary | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Base: (auto?: any) => $giper_baza_atom_vary | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Path: typeof $giper_baza_atom_text;
            readonly Type: typeof $giper_baza_atom_text;
            readonly Kind: {
                new (): {
                    Value: () => typeof $giper_baza_flex_meta;
                    remote(next?: $giper_baza_flex_meta | null | undefined): $giper_baza_flex_meta | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_meta | null | undefined): $giper_baza_flex_meta | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_meta | null;
                    local_ensure(): $giper_baza_flex_meta | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Enum: {
                new (): {
                    Value: () => typeof $giper_baza_list_vary;
                    remote(next?: $giper_baza_list_vary | null | undefined): $giper_baza_list_vary | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_list_vary | null | undefined): $giper_baza_list_vary | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_list_vary | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_list_vary | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_list_vary | null;
                    local_ensure(): $giper_baza_list_vary | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Base: typeof $giper_baza_atom_vary;
        };
    };
    export class $giper_baza_flex_prop extends $giper_baza_flex_prop_base {
        static meta: $giper_baza_link;
        path(next?: string): string;
        type(next?: string): string;
        base(next?: $giper_baza_vary_type): string | number | bigint | boolean | Element | Uint8Array<ArrayBuffer> | Uint16Array<ArrayBuffer> | Uint32Array<ArrayBuffer> | BigUint64Array<ArrayBuffer> | Int8Array<ArrayBuffer> | Int16Array<ArrayBuffer> | Int32Array<ArrayBuffer> | BigInt64Array<ArrayBuffer> | Float64Array<ArrayBuffer> | Float32Array<ArrayBuffer> | $mol_time_moment | $mol_time_duration | $mol_time_interval | $mol_tree2 | $giper_baza_link | readonly $giper_baza_vary_type[] | Readonly<{
            [x: string]: $giper_baza_vary_type;
        }> | null;
        kind(next?: $giper_baza_flex_meta): $giper_baza_flex_meta | null;
        enum(next?: $giper_baza_list_vary): $giper_baza_list_vary | null;
    }
    const $giper_baza_flex_deck_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Metas: (auto?: any) => {
                remote_list(next?: readonly $giper_baza_flex_meta[] | undefined): readonly $giper_baza_flex_meta[];
                remote_add(item: $giper_baza_flex_meta): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Types: (auto?: any) => $giper_baza_list_str | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Metas: {
                new (): {
                    remote_list(next?: readonly $giper_baza_flex_meta[] | undefined): readonly $giper_baza_flex_meta[];
                    remote_add(item: $giper_baza_flex_meta): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_meta;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Types: typeof $giper_baza_list_str;
        };
    };
    export class $giper_baza_flex_deck extends $giper_baza_flex_deck_base {
        static meta: $giper_baza_link;
        meta_new(key: string, icon: string, hint: string): $giper_baza_flex_meta;
        meta_for(Meta: typeof $giper_baza_flex_subj, icon: string, hint: string): $giper_baza_flex_meta;
    }
    const $giper_baza_flex_seed_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Deck: (auto?: any) => {
                Value: Value;
                remote(next?: $giper_baza_flex_deck | null | undefined): $giper_baza_flex_deck | null;
                remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_deck | null | undefined): $giper_baza_flex_deck | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_deck | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_deck | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_deck | null;
                local_ensure(): $giper_baza_flex_deck | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Peers: (auto?: any) => {
                remote_list(next?: readonly $giper_baza_flex_peer[] | undefined): readonly $giper_baza_flex_peer[];
                remote_add(item: $giper_baza_flex_peer): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_peer;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Deck: {
                new (): {
                    Value: () => typeof $giper_baza_flex_deck;
                    remote(next?: $giper_baza_flex_deck | null | undefined): $giper_baza_flex_deck | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_flex_deck | null | undefined): $giper_baza_flex_deck | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_deck | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_deck | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_flex_deck | null;
                    local_ensure(): $giper_baza_flex_deck | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Peers: {
                new (): {
                    remote_list(next?: readonly $giper_baza_flex_peer[] | undefined): readonly $giper_baza_flex_peer[];
                    remote_add(item: $giper_baza_flex_peer): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_flex_peer;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
        };
    };
    export class $giper_baza_flex_seed extends $giper_baza_flex_seed_base {
        static meta: $giper_baza_link;
        deck(): $giper_baza_flex_deck | null;
        peers(next?: readonly $giper_baza_flex_peer[]): readonly $giper_baza_flex_peer[];
    }
    const $giper_baza_flex_peer_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Urls: (auto?: any) => $giper_baza_list_str | null;
            readonly Stat: (auto?: any) => {
                Value: Value;
                remote(next?: $giper_baza_app_stat | null | undefined): $giper_baza_app_stat | null;
                remote_of(peer: $giper_baza_link | null, next?: $giper_baza_app_stat | null | undefined): $giper_baza_app_stat | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_app_stat | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_app_stat | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_app_stat | null;
                local_ensure(): $giper_baza_app_stat | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Urls: typeof $giper_baza_list_str;
            readonly Stat: {
                new (): {
                    Value: () => typeof $giper_baza_app_stat;
                    remote(next?: $giper_baza_app_stat | null | undefined): $giper_baza_app_stat | null;
                    remote_of(peer: $giper_baza_link | null, next?: $giper_baza_app_stat | null | undefined): $giper_baza_app_stat | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_app_stat | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $giper_baza_app_stat | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $giper_baza_app_stat | null;
                    local_ensure(): $giper_baza_app_stat | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
        };
    };
    export class $giper_baza_flex_peer extends $giper_baza_flex_peer_base {
        static meta: $giper_baza_link;
        stat(auto?: any): $giper_baza_app_stat | null;
        urls(next?: string[]): string[];
    }
    type Point = readonly [head: string, x: number, y: number];
    type Selection = readonly [from: Point, to: Point];
    const $giper_baza_flex_user_base: Omit<typeof $giper_baza_flex_subj, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_flex_subj, {
            readonly Caret: (auto?: any) => $giper_baza_atom_list | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Caret: typeof $giper_baza_atom_list;
        };
    };
    export class $giper_baza_flex_user extends $giper_baza_flex_user_base {
        static meta: $giper_baza_link;
        caret(next?: Selection): Selection | null;
    }
    export function $giper_baza_flex_init(this: $): $giper_baza_flex_seed;
    export {};
}

declare namespace $ {
    class $giper_baza_glob extends $mol_object {
        static lands_touched: $mol_wire_set<string>;
        static yard(): $giper_baza_yard;
        static home<Home extends typeof $giper_baza_flex_subj = typeof $giper_baza_flex_subj>(Home?: Home): InstanceType<Home>;
        static king_grab(preset?: $giper_baza_rank_preset): $giper_baza_auth;
        static land_grab(preset?: $giper_baza_rank_preset): $giper_baza_land;
        static Land(link: $giper_baza_link): $giper_baza_land;
        static Pawn<Pawn extends typeof $giper_baza_pawn>(link: $giper_baza_link, Pawn: Pawn): InstanceType<Pawn>;
        static Seed(): $giper_baza_flex_seed;
        static boot(): void;
        static apply_pack(pack: $giper_baza_pack): void;
        static apply_parts(parts: $giper_baza_pack_parts): void;
    }
}

declare namespace $ {
    const $giper_baza_entity_base: Omit<typeof $giper_baza_dict, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_dict, {
            readonly Title: (auto?: any) => $giper_baza_atom_text | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Title: typeof $giper_baza_atom_text;
        };
    };
    export class $giper_baza_entity extends $giper_baza_entity_base {
        title(next?: string): string;
    }
    export {};
}

declare namespace $ {
    const $bog_tracker_mpit_neolo_user_base: Omit<typeof $giper_baza_entity, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_entity, {
            readonly username: (auto?: any) => $giper_baza_atom_text | null;
            readonly name: (auto?: any) => $giper_baza_atom_text | null;
            readonly surname: (auto?: any) => $giper_baza_atom_text | null;
            readonly school: (auto?: any) => $giper_baza_atom_text | null;
            readonly role: (auto?: any) => $giper_baza_atom_text | null;
            readonly user_id: (auto?: any) => $giper_baza_atom_bint | null;
            readonly children_ids: (auto?: any) => $giper_baza_list_str | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly username: typeof $giper_baza_atom_text;
            readonly name: typeof $giper_baza_atom_text;
            readonly surname: typeof $giper_baza_atom_text;
            readonly school: typeof $giper_baza_atom_text;
            readonly role: typeof $giper_baza_atom_text;
            readonly user_id: typeof $giper_baza_atom_bint;
            readonly children_ids: typeof $giper_baza_list_str;
        };
    };
    export class $bog_tracker_mpit_neolo_user extends $bog_tracker_mpit_neolo_user_base {
    }
    export {};
}

declare namespace $ {
    const $bog_tracker_mpit_neolo_task_base: Omit<typeof $giper_baza_entity, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_entity, {
            readonly title: (auto?: any) => $giper_baza_atom_text | null;
            readonly desc: (auto?: any) => $giper_baza_atom_text | null;
            readonly date: (auto?: any) => $giper_baza_atom_text | null;
            readonly time: (auto?: any) => $giper_baza_atom_text | null;
            readonly source: (auto?: any) => $giper_baza_atom_text | null;
            readonly status: (auto?: any) => $giper_baza_atom_text | null;
            readonly teacher_file: (auto?: any) => $giper_baza_atom_text | null;
            readonly student_file: (auto?: any) => $giper_baza_atom_text | null;
            readonly owner_username: (auto?: any) => $giper_baza_atom_text | null;
            readonly owner_id: (auto?: any) => $giper_baza_atom_bint | null;
            readonly author_id: (auto?: any) => $giper_baza_atom_bint | null;
            readonly class_id: (auto?: any) => $giper_baza_atom_text | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly title: typeof $giper_baza_atom_text;
            readonly desc: typeof $giper_baza_atom_text;
            readonly date: typeof $giper_baza_atom_text;
            readonly time: typeof $giper_baza_atom_text;
            readonly source: typeof $giper_baza_atom_text;
            readonly status: typeof $giper_baza_atom_text;
            readonly teacher_file: typeof $giper_baza_atom_text;
            readonly student_file: typeof $giper_baza_atom_text;
            readonly owner_username: typeof $giper_baza_atom_text;
            readonly owner_id: typeof $giper_baza_atom_bint;
            readonly author_id: typeof $giper_baza_atom_bint;
            readonly class_id: typeof $giper_baza_atom_text;
        };
    };
    export class $bog_tracker_mpit_neolo_task extends $bog_tracker_mpit_neolo_task_base {
    }
    export {};
}

declare namespace $ {
    const $bog_tracker_mpit_neolo_class_base: Omit<typeof $giper_baza_entity, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_entity, {
            readonly name: (auto?: any) => $giper_baza_atom_text | null;
            readonly subject: (auto?: any) => $giper_baza_atom_text | null;
            readonly teacher_id: (auto?: any) => $giper_baza_atom_bint | null;
            readonly student_ids: (auto?: any) => $giper_baza_list_str | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly name: typeof $giper_baza_atom_text;
            readonly subject: typeof $giper_baza_atom_text;
            readonly teacher_id: typeof $giper_baza_atom_bint;
            readonly student_ids: typeof $giper_baza_list_str;
        };
    };
    export class $bog_tracker_mpit_neolo_class extends $bog_tracker_mpit_neolo_class_base {
    }
    export {};
}

declare namespace $ {
    const $bog_tracker_mpit_neolo_invitation_base: Omit<typeof $giper_baza_entity, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_entity, {
            readonly class_id: (auto?: any) => $giper_baza_atom_text | null;
            readonly class_name: (auto?: any) => $giper_baza_atom_text | null;
            readonly from_teacher_name: (auto?: any) => $giper_baza_atom_text | null;
            readonly from_teacher_id: (auto?: any) => $giper_baza_atom_bint | null;
            readonly status: (auto?: any) => $giper_baza_atom_text | null;
            readonly created_iso: (auto?: any) => $giper_baza_atom_text | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly class_id: typeof $giper_baza_atom_text;
            readonly class_name: typeof $giper_baza_atom_text;
            readonly from_teacher_name: typeof $giper_baza_atom_text;
            readonly from_teacher_id: typeof $giper_baza_atom_bint;
            readonly status: typeof $giper_baza_atom_text;
            readonly created_iso: typeof $giper_baza_atom_text;
        };
    };
    export class $bog_tracker_mpit_neolo_invitation extends $bog_tracker_mpit_neolo_invitation_base {
    }
    export {};
}

declare namespace $ {
    const $bog_tracker_mpit_neolo_registry_base: Omit<typeof $giper_baza_entity, "prototype"> & {
        new (...args: any[]): $mol_type_override<$giper_baza_entity, {
            readonly Profile: (auto?: any) => {
                Value: Value;
                remote(next?: $bog_tracker_mpit_neolo_user | null | undefined): $bog_tracker_mpit_neolo_user | null;
                remote_of(peer: $giper_baza_link | null, next?: $bog_tracker_mpit_neolo_user | null | undefined): $bog_tracker_mpit_neolo_user | null;
                ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_user | null;
                ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_user | null;
                ensure_here(peer: $giper_baza_link | null): void;
                ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                remote_ensure(preset?: $giper_baza_rank_preset): $bog_tracker_mpit_neolo_user | null;
                local_ensure(): $bog_tracker_mpit_neolo_user | null;
                val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Tasks: (auto?: any) => {
                remote_list(next?: readonly $bog_tracker_mpit_neolo_task[] | undefined): readonly $bog_tracker_mpit_neolo_task[];
                remote_add(item: $bog_tracker_mpit_neolo_task): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_task;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Classes: (auto?: any) => {
                remote_list(next?: readonly $bog_tracker_mpit_neolo_class[] | undefined): readonly $bog_tracker_mpit_neolo_class[];
                remote_add(item: $bog_tracker_mpit_neolo_class): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_class;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
            readonly Invitations: (auto?: any) => {
                remote_list(next?: readonly $bog_tracker_mpit_neolo_invitation[] | undefined): readonly $bog_tracker_mpit_neolo_invitation[];
                remote_add(item: $bog_tracker_mpit_neolo_invitation): void;
                make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_invitation;
                items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                cut(vary: $giper_baza_vary_type): void;
                move(from: number, to: number): void;
                wipe(seat: number): void;
                pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                [$mol_dev_format_head](): any[];
                land(): $giper_baza_land;
                head(): $giper_baza_link;
                land_link(): $giper_baza_link;
                link(): $giper_baza_link;
                toJSON(): string;
                cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                units(): $giper_baza_unit_sand[];
                units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                meta(next?: $giper_baza_link): $giper_baza_link | null;
                meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                filled(): boolean;
                can_change(): boolean;
                last_change(): $mol_time_moment | null;
                authors(): $giper_baza_auth_pass[];
                get $(): $;
                set $(next: $);
                destructor(): void;
                toString(): string;
                [Symbol.toStringTag]: string;
                [$mol_ambient_ref]: $;
                [Symbol.dispose](): void;
            } | null;
        }>;
        path: string;
    } & {
        schema: {
            [x: string]: typeof $giper_baza_pawn;
        } & {
            readonly Profile: {
                new (): {
                    Value: () => typeof $bog_tracker_mpit_neolo_user;
                    remote(next?: $bog_tracker_mpit_neolo_user | null | undefined): $bog_tracker_mpit_neolo_user | null;
                    remote_of(peer: $giper_baza_link | null, next?: $bog_tracker_mpit_neolo_user | null | undefined): $bog_tracker_mpit_neolo_user | null;
                    ensure(config?: null | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_user | null;
                    ensure_of(peer: $giper_baza_link | null, config?: null | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_user | null;
                    ensure_here(peer: $giper_baza_link | null): void;
                    ensure_area(peer: $giper_baza_link | null, land: $giper_baza_land): void;
                    ensure_lord(peer: $giper_baza_link | null, preset: $giper_baza_rank_preset): void;
                    remote_ensure(preset?: $giper_baza_rank_preset): $bog_tracker_mpit_neolo_user | null;
                    local_ensure(): $bog_tracker_mpit_neolo_user | null;
                    val(next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    val_of(peer: $giper_baza_link | null, next?: $giper_baza_link | null | undefined): $giper_baza_link | null;
                    pick_unit(peer: $giper_baza_link | null): $giper_baza_unit_sand | undefined;
                    vary(next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    vary_of(peer: $giper_baza_link | null, next?: $giper_baza_vary_type): $giper_baza_vary_type;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                toString(): any;
                Value: typeof $giper_baza_dict;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Tasks: {
                new (): {
                    remote_list(next?: readonly $bog_tracker_mpit_neolo_task[] | undefined): readonly $bog_tracker_mpit_neolo_task[];
                    remote_add(item: $bog_tracker_mpit_neolo_task): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_task;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Classes: {
                new (): {
                    remote_list(next?: readonly $bog_tracker_mpit_neolo_class[] | undefined): readonly $bog_tracker_mpit_neolo_class[];
                    remote_add(item: $bog_tracker_mpit_neolo_class): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_class;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
            readonly Invitations: {
                new (): {
                    remote_list(next?: readonly $bog_tracker_mpit_neolo_invitation[] | undefined): readonly $bog_tracker_mpit_neolo_invitation[];
                    remote_add(item: $bog_tracker_mpit_neolo_invitation): void;
                    make(config: null | number | $giper_baza_rank_preset | $giper_baza_land): $bog_tracker_mpit_neolo_invitation;
                    items(next?: readonly ($giper_baza_link | null)[] | undefined): readonly ($giper_baza_link | null)[];
                    items_vary(next?: readonly $giper_baza_vary_type[], tag?: keyof typeof $giper_baza_unit_sand_tag): readonly $giper_baza_vary_type[];
                    splice(next: readonly $giper_baza_vary_type[], from?: number, to?: number, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    find(vary: $giper_baza_vary_type): $giper_baza_unit_sand | null;
                    has(vary: $giper_baza_vary_type, next?: boolean, tag?: keyof typeof $giper_baza_unit_sand_tag): boolean;
                    add(vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): void;
                    cut(vary: $giper_baza_vary_type): void;
                    move(from: number, to: number): void;
                    wipe(seat: number): void;
                    pawn_make<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1, vary: $giper_baza_vary_type, tag?: keyof typeof $giper_baza_unit_sand_tag): InstanceType<Pawn_1>;
                    [$mol_dev_format_head](): any[];
                    land(): $giper_baza_land;
                    head(): $giper_baza_link;
                    land_link(): $giper_baza_link;
                    link(): $giper_baza_link;
                    toJSON(): string;
                    cast<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1): InstanceType<Pawn_1>;
                    pawns<Pawn_1 extends typeof $giper_baza_pawn>(Pawn: Pawn_1 | null): readonly InstanceType<Pawn_1>[];
                    units(): $giper_baza_unit_sand[];
                    units_of(peer: $giper_baza_link | null): $giper_baza_unit_sand[];
                    meta(next?: $giper_baza_link): $giper_baza_link | null;
                    meta_of(peer: $giper_baza_link | null): $giper_baza_link | null;
                    filled(): boolean;
                    can_change(): boolean;
                    last_change(): $mol_time_moment | null;
                    authors(): $giper_baza_auth_pass[];
                    get $(): $;
                    set $(next: $);
                    destructor(): void;
                    toString(): string;
                    [Symbol.toStringTag]: string;
                    [$mol_ambient_ref]: $;
                    [Symbol.dispose](): void;
                };
                Value: Value;
                toString(): any;
                parse: typeof $giper_baza_vary_cast_link;
                tag: keyof typeof $giper_baza_unit_sand_tag;
                meta: null | $giper_baza_link;
                make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
                $: $;
                create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
                toJSON(): any;
                destructor(): void;
                [Symbol.toPrimitive](): any;
                [$mol_key_handle](): any;
            };
        };
    };
    export class $bog_tracker_mpit_neolo_registry extends $bog_tracker_mpit_neolo_registry_base {
    }
    export {};
}

declare namespace $ {
    class $mol_rest_message extends $mol_object {
        port: $mol_rest_port;
        method(): string;
        uri(): URL;
        type(): $mol_rest_port_mime;
        origin(): string;
        address(): string;
        protocols(): readonly string[];
        data(): null | string | Uint8Array<ArrayBuffer> | Element | object;
        bin(): Uint8Array<ArrayBuffer>;
        text(): string;
        reply(data: null | string | Uint8Array<ArrayBuffer> | Element | object, meta?: {
            type?: $mol_rest_port_mime;
            code?: $mol_rest_code;
        }): void;
        route(uri: URL): $mol_rest_message;
        derive(method: string, data: null | string | Uint8Array<ArrayBuffer> | Element | object): $mol_rest_message;
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    class $mol_rest_resource extends $mol_object {
        REQUEST(msg: $mol_rest_message): any;
        _protocols: readonly string[];
        OPEN(msg: $mol_rest_message): string;
        CLOSE(msg: $mol_rest_message): void;
        HEAD(msg: $mol_rest_message): void;
        GET(msg: $mol_rest_message): void;
        PUT(msg: $mol_rest_message): void;
        PATCH(msg: $mol_rest_message): void;
        POST(msg: $mol_rest_message): void;
        DELETE(msg: $mol_rest_message): void;
        _auto(): void;
        static port(port: number): $mol_rest_server;
        static serve(): $mol_rest_server | null;
    }
}

declare namespace $ {
    let $mol_file_extensions: Record<string, $mol_rest_port_mime>;
}

declare namespace $ {
    class $mol_rest_port_http extends $mol_rest_port {
        output: InstanceType<$node['http']['ServerResponse']>;
        send_code(code: $mol_rest_code): void;
        send_type(mime: $mol_rest_port_mime): void;
        send_bin(data: Uint8Array<ArrayBuffer>): void;
    }
}

declare namespace $ {
    class $mol_rest_message_http extends $mol_rest_message {
        input: InstanceType<$node['http']['IncomingMessage']>;
        method(): string;
        uri(): URL;
        type(): $mol_rest_port_mime;
        origin(): string;
        address(): string;
        protocols(): string[];
        data(): null | string | Uint8Array<ArrayBuffer> | Element | object;
        route(uri: URL): $mol_rest_message_http;
    }
}

declare namespace $ {
    class $mol_rest_server extends $mol_object {
        log(): boolean;
        port(): number;
        start(): void;
        http_server(): import("node:http").Server<typeof import("node:http").IncomingMessage, typeof import("node:http").ServerResponse>;
        http_income(req: InstanceType<$node['http']['IncomingMessage']>, res: InstanceType<$node['http']['ServerResponse']>): void;
        ws_upgrade(req: InstanceType<$node['http']['IncomingMessage']>, socket: InstanceType<$node['stream']['Duplex']>, head: Buffer<ArrayBuffer>): void;
        _ws_income_chunks: WeakMap<import("node:stream").Duplex, Uint8Array<ArrayBuffer>[]>;
        _ws_income_frames: WeakMap<import("node:stream").Duplex, (string | Uint8Array<ArrayBuffer>)[]>;
        ws_income(chunk: Buffer<ArrayBuffer>, upgrade: $mol_rest_message, sock: InstanceType<typeof $node.stream.Duplex>): Promise<void>;
        root(resource?: $mol_rest_resource): $mol_rest_resource;
    }
}

declare namespace $ {
    class $mol_rest_resource_fs extends $mol_rest_resource {
        _root(): $mol_file;
        GET(msg: $mol_rest_message): void;
    }
}

declare namespace $ {
    class $giper_baza_app_home extends $giper_baza_flex_peer {
        init(): void;
        tick(): void;
    }
}

declare namespace $ {
    class $giper_baza_app_home_node extends $giper_baza_app_home {
        init(): void;
    }
}

declare namespace $ {
    class $giper_baza_app_node extends $mol_rest_resource_fs {
        link(): $giper_baza_app_node_link;
        _protocols: string[];
        OPEN(msg: $mol_rest_message): string;
        POST(msg: $mol_rest_message): void;
        CLOSE(msg: $mol_rest_message): void;
        _auto(): void;
        _home(): $giper_baza_app_home;
        _stat_update(): void;
    }
    class $giper_baza_app_node_link extends $mol_rest_resource {
        GET(msg: $mol_rest_message): void;
    }
}

declare namespace $ {
    class $bog_tracker_mpit_neolo_store extends $mol_object {
        glob(): typeof $giper_baza_glob;
        home_land(): $giper_baza_land;
        registry(): $bog_tracker_mpit_neolo_registry;
        profile(): $bog_tracker_mpit_neolo_user | null;
        tasks_all(): $bog_tracker_mpit_neolo_task[];
        classes_all(): $bog_tracker_mpit_neolo_class[];
        invitations_all(): $bog_tracker_mpit_neolo_invitation[];
    }
}

declare namespace $ {
    const $bog_tracker_mpit_neolo_tokens: {
        readonly g0: "#ffffff";
        readonly g1: "#f2f7f2";
        readonly g2: "#ddeedd";
        readonly g3: "#a8cca8";
        readonly g4: "#2ecc5a";
        readonly g5: "#1aa843";
        readonly g6: "#0f7a30";
        readonly b0: "#111111";
        readonly b1: "#222222";
        readonly b2: "#444444";
        readonly b3: "#666666";
        readonly b4: "#999999";
        readonly shadow: "0 16px 34px #00280a1a";
        readonly radius_base: "22px";
        readonly p1: "#667eea";
        readonly p2: "#764ba2";
        readonly gold: "#ffd700";
        readonly red: "#c0392b";
        readonly red_soft: "#ffeaea";
        readonly red_badge: "#f8d7da";
        readonly red_badge_text: "#842029";
        readonly blue: "#0a58ca";
        readonly blue_soft: "#e8f4ff";
        readonly blue_badge: "#cfe2ff";
        readonly yellow: "#fff3cd";
        readonly yellow_text: "#856404";
        readonly orange: "#e67e22";
        readonly orange_soft: "#fff3e8";
        readonly orange_text: "#b85c00";
        readonly green_done_bg: "#d1e7dd";
        readonly green_done_text: "#0a3622";
        readonly grey_soft: "#e2e3e5";
        readonly grey_text: "#41464b";
    };
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | `:not(${string})` | `:nth-child(${string})` | `:nth-last-child(${string})` | `:nth-of-type(${string})` | `:nth-last-of-type(${string})` | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends '@starting-style' ? $mol_style_guard<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_auth_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_switch__value_bog_tracker_mpit_neolo_auth_4 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['mode'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_bog_tracker_mpit_neolo_auth_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['mode_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_auth_6 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_auth_error_visible': ReturnType< $bog_tracker_mpit_neolo_auth['has_error'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_auth_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_auth_9 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['login_username'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_auth_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_auth_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_auth_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__type_bog_tracker_mpit_neolo_auth_13 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_auth_14 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['login_password'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_auth_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_auth_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_auth_17 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['login_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__enabled_bog_tracker_mpit_neolo_auth_18 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['login_enabled'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_auth_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_auth_20 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_auth_form_visible': ReturnType< $bog_tracker_mpit_neolo_auth['is_login_mode'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_auth_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_auth_23 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['reg_username'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_auth_24 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_auth_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_auth_26 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__type_bog_tracker_mpit_neolo_auth_27 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_auth_28 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['reg_password'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_auth_29 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_auth_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_auth_31 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__type_bog_tracker_mpit_neolo_auth_32 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_auth_33 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['reg_password2'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_auth_34 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_auth_35 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_auth_36 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_auth_37 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['reg_name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_auth_38 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_auth_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_auth_40 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_auth_41 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['reg_surname'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_auth_42 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_auth_43 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_45 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_key_bog_tracker_mpit_neolo_auth_46 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_key'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_icon_bog_tracker_mpit_neolo_auth_47 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_icon'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_label_bog_tracker_mpit_neolo_auth_48 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_label'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__selected_bog_tracker_mpit_neolo_auth_49 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['role_student_selected'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['selected'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__click_bog_tracker_mpit_neolo_auth_50 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['role_student_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['click'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_key_bog_tracker_mpit_neolo_auth_51 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_key'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_icon_bog_tracker_mpit_neolo_auth_52 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_icon'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_label_bog_tracker_mpit_neolo_auth_53 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_label'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__selected_bog_tracker_mpit_neolo_auth_54 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['role_teacher_selected'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['selected'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__click_bog_tracker_mpit_neolo_auth_55 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['role_teacher_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['click'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_key_bog_tracker_mpit_neolo_auth_56 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_key'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_icon_bog_tracker_mpit_neolo_auth_57 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_icon'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__role_label_bog_tracker_mpit_neolo_auth_58 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['role_label'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__selected_bog_tracker_mpit_neolo_auth_59 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['role_parent_selected'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['selected'] >
	>
	type $bog_tracker_mpit_neolo_auth_role_button__click_bog_tracker_mpit_neolo_auth_60 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['role_parent_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_auth_role_button['click'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_61 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_auth_62 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_auth_63 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['reg_school'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__attr_bog_tracker_mpit_neolo_auth_64 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_auth_school_visible': ReturnType< $bog_tracker_mpit_neolo_auth['needs_school_field'] >,
		})  & ReturnType< $mol_labeler['attr'] >
		,
		ReturnType< $mol_labeler['attr'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_auth_65 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_auth_66 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_auth_67 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['register_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__enabled_bog_tracker_mpit_neolo_auth_68 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_auth['register_enabled'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_auth_69 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_auth_70 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_auth_form_visible': ReturnType< $bog_tracker_mpit_neolo_auth['is_register_mode'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_71 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_72 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_auth extends $mol_view {
		Brand_accent( ): $mol_view
		Brand( ): $mol_view
		Sub( ): $mol_view
		mode( next?: string ): string
		Tabs( ): $mol_switch
		has_error( ): boolean
		Error_view( ): $mol_view
		is_login_mode( ): boolean
		login_username( next?: string ): string
		Login_username_input( ): $mol_string
		Login_username_field( ): $mol_labeler
		login_password( next?: string ): string
		Login_password_input( ): $mol_string
		Login_password_field( ): $mol_labeler
		login_click( next?: any ): any
		login_enabled( ): boolean
		login_label( ): string
		Login_submit( ): $mol_button_major
		Login_form( ): $mol_view
		is_register_mode( ): boolean
		reg_username( next?: string ): string
		Reg_username_input( ): $mol_string
		Reg_username_field( ): $mol_labeler
		reg_password( next?: string ): string
		Reg_password_input( ): $mol_string
		Reg_password_field( ): $mol_labeler
		reg_password2( next?: string ): string
		Reg_password2_input( ): $mol_string
		Reg_password2_field( ): $mol_labeler
		reg_name( next?: string ): string
		Reg_name_input( ): $mol_string
		Reg_name_field( ): $mol_labeler
		reg_surname( next?: string ): string
		Reg_surname_input( ): $mol_string
		Reg_surname_field( ): $mol_labeler
		Reg_two_col( ): $mol_view
		Reg_role_label( ): $mol_view
		role_student_selected( ): boolean
		role_student_click( next?: any ): any
		Role_student( ): $bog_tracker_mpit_neolo_auth_role_button
		role_teacher_selected( ): boolean
		role_teacher_click( next?: any ): any
		Role_teacher( ): $bog_tracker_mpit_neolo_auth_role_button
		role_parent_selected( ): boolean
		role_parent_click( next?: any ): any
		Role_parent( ): $bog_tracker_mpit_neolo_auth_role_button
		Reg_role_grid( ): $mol_view
		needs_school_field( ): boolean
		reg_school( next?: string ): string
		Reg_school_input( ): $mol_string
		Reg_school_field( ): $mol_labeler
		register_click( next?: any ): any
		register_enabled( ): boolean
		register_label( ): string
		Reg_submit( ): $mol_button_major
		Register_form( ): $mol_view
		Card( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		mode_options( ): ({ 
			'login': string,
			'register': string,
		}) 
		role( next?: string ): string
		error( next?: string ): string
		busy( next?: boolean ): boolean
		attr( ): ({ 
			'bog_tracker_mpit_neolo_auth_busy': ReturnType< $bog_tracker_mpit_neolo_auth['busy'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_role_button_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_auth_role_button_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_auth_role_button extends $mol_button_minor {
		Role_icon( ): $mol_view
		Role_label( ): $mol_view
		role_key( ): string
		role_icon( ): string
		role_label( ): string
		selected( ): boolean
		attr( ): ({ 
			'bog_tracker_mpit_neolo_auth_role_button_selected': ReturnType< $bog_tracker_mpit_neolo_auth_role_button['selected'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=auth.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_auth extends $.$bog_tracker_mpit_neolo_auth {
        mode(next?: string): string;
        error(next?: string): string;
        busy(next?: boolean): boolean;
        role(next?: string): string;
        has_error(): boolean;
        is_login_mode(): boolean;
        is_register_mode(): boolean;
        needs_school_field(): boolean;
        role_student_selected(): boolean;
        role_teacher_selected(): boolean;
        role_parent_selected(): boolean;
        role_student_click(next?: any): any;
        role_teacher_click(next?: any): any;
        role_parent_click(next?: any): any;
        login_enabled(): boolean;
        register_enabled(): boolean;
        login_label(): "Входим..." | "Войти";
        register_label(): "Регистрируем..." | "Зарегистрироваться";
        login_click(next?: any): any;
        register_click(next?: any): any;
        do_login(): void;
        do_register(): void;
        hash_id(source: string): bigint;
    }
    class $bog_tracker_mpit_neolo_auth_role_button extends $.$bog_tracker_mpit_neolo_auth_role_button {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $bog_tracker_mpit_neolo_api extends $mol_object {
        base(): string;
        post(path: string, body: any): Promise<any>;
        predict_time(text: string): Promise<{
            ok: boolean;
            minutes?: number;
            error?: string;
        }>;
        ai_generate_test(title: string, desc: string, file_name: string): Promise<any>;
        ai_explain(title: string, desc: string): Promise<any>;
        ai_ask(topic: string, question: string, history: any[]): Promise<any>;
        stats_advice(payload: {
            overdue: any[];
            rejected: any[];
            done_count: number;
            total_count: number;
        }, on_token: (text: string) => void): Promise<{
            ok: boolean;
            error?: string;
        }>;
        speech_to_text(audio: Blob): Promise<{
            ok: boolean;
            text?: string;
            error?: string;
        }>;
        upload_student_file(username: string, task_id: number, file: File): Promise<any>;
        upload_teacher_file(username: string, task_id: number, file: File): Promise<any>;
    }
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_bog_tracker_mpit_neolo_student_tasks_3 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_tasks_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['add_task_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_tasks_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__task_id_bog_tracker_mpit_neolo_student_tasks_10 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_id_value'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['task_id'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__task_title_bog_tracker_mpit_neolo_student_tasks_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['task_title'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__task_desc_bog_tracker_mpit_neolo_student_tasks_12 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_desc'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['task_desc'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__source_label_bog_tracker_mpit_neolo_student_tasks_13 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_source_label'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['source_label'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__source_cls_bog_tracker_mpit_neolo_student_tasks_14 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_source_cls'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['source_cls'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__status_label_bog_tracker_mpit_neolo_student_tasks_15 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_status_label'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['status_label'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__status_cls_bog_tracker_mpit_neolo_student_tasks_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_status_cls'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['status_cls'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__deadline_bog_tracker_mpit_neolo_student_tasks_17 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['task_deadline'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['deadline'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks_card__click_bog_tracker_mpit_neolo_student_tasks_18 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['open_task'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['click'] >
	>
	export class $bog_tracker_mpit_neolo_student_tasks extends $mol_view {
		task_id_value( id: any): string
		task_title( id: any): string
		task_desc( id: any): string
		task_source_label( id: any): string
		task_source_cls( id: any): string
		task_status_label( id: any): string
		task_status_cls( id: any): string
		task_deadline( id: any): string
		open_task( id: any, next?: any ): any
		Title( ): $mol_view
		Section_title( ): $mol_view
		Tasks_group( ): $mol_list
		Add_title( ): $mol_view
		add_task_click( next?: any ): any
		Add_icon( ): $mol_view
		Add_text( ): $mol_view
		Add_trigger( ): $mol_button_minor
		Add_box( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		title_label( ): string
		nearest_label( ): string
		add_label( ): string
		add_trigger_label( ): string
		task_ids( ): readonly(string)[]
		task_rows( ): readonly(any)[]
		Card( id: any): $bog_tracker_mpit_neolo_student_tasks_card
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_card_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_card_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_student_tasks_card_3 = $mol_type_enforce<
		Record<string, any> & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_card_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_student_tasks_card_5 = $mol_type_enforce<
		Record<string, any> & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_card_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_card_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_card_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_tasks_card_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_student_tasks_card extends $mol_button_minor {
		source_cls( ): string
		status_cls( ): string
		Bullet( ): $mol_view
		Name( ): $mol_view
		Desc( ): $mol_view
		Source_badge( ): $mol_view
		Status_badge( ): $mol_view
		Meta_row( ): $mol_view
		Inner( ): $mol_view
		Deadline( ): $mol_view
		task_id( ): string
		task_title( ): string
		task_desc( ): string
		source_label( ): string
		status_label( ): string
		deadline( ): string
		click( next?: any ): any
		attr( ): ({ 
			'bog_tracker_mpit_neolo_student_tasks_card_source': ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['source_cls'] >,
			'bog_tracker_mpit_neolo_student_tasks_card_status': ReturnType< $bog_tracker_mpit_neolo_student_tasks_card['status_cls'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=tasks.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_student_tasks extends $.$bog_tracker_mpit_neolo_student_tasks {
        tasks_sorted(): $bog_tracker_mpit_neolo_task[];
        task_ids(): string[];
        task_by_id(id: string): $bog_tracker_mpit_neolo_task | null;
        task_id_value(id: string): string;
        task_title(id: string): string;
        task_desc(id: string): string;
        task_source_label(id: string): string;
        task_source_cls(id: string): string;
        task_status_label(id: string): string;
        task_status_cls(id: string): string;
        task_deadline(id: string): string;
        task_rows(): $bog_tracker_mpit_neolo_student_tasks_card[];
        add_task_click(next?: any): any;
        open_task(id: string, next?: any): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_calendar_2 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['prev_month'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_calendar_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_calendar_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['next_month'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_calendar_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_calendar_8 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['create_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_calendar_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['grid_cells'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_bog_tracker_mpit_neolo_student_calendar_14 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['day_tasks'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_student_calendar_15 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_calendar_empty': ReturnType< $bog_tracker_mpit_neolo_student_calendar['day_is_empty'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_bog_tracker_mpit_neolo_student_calendar_19 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['upcoming'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_cell__date_id_bog_tracker_mpit_neolo_student_calendar_23 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['cell_date_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['date_id'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_cell__day_number_bog_tracker_mpit_neolo_student_calendar_24 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['cell_day'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['day_number'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_cell__count_bog_tracker_mpit_neolo_student_calendar_25 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['cell_count'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['count'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_cell__has_count_bog_tracker_mpit_neolo_student_calendar_26 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['cell_has_count'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['has_count'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_cell__is_selected_bog_tracker_mpit_neolo_student_calendar_27 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['cell_is_selected'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['is_selected'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_cell__is_today_bog_tracker_mpit_neolo_student_calendar_28 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['cell_is_today'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['is_today'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_cell__is_empty_bog_tracker_mpit_neolo_student_calendar_29 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['cell_is_empty'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['is_empty'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_cell__click_bog_tracker_mpit_neolo_student_calendar_30 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['select_day'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['click'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_31 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_day_task__task_id_bog_tracker_mpit_neolo_student_calendar_32 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['day_task_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_day_task['task_id'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_day_task__time_bog_tracker_mpit_neolo_student_calendar_33 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['day_task_time'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_day_task['time'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_day_task__task_title_bog_tracker_mpit_neolo_student_calendar_34 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['day_task_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_day_task['task_title'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_day_task__meta_bog_tracker_mpit_neolo_student_calendar_35 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['day_task_meta'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_day_task['meta'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_day_task__click_bog_tracker_mpit_neolo_student_calendar_36 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['open_task'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_day_task['click'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_upcoming_row__task_id_bog_tracker_mpit_neolo_student_calendar_37 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['upcoming_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_upcoming_row['task_id'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_upcoming_row__upcoming_date_bog_tracker_mpit_neolo_student_calendar_38 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['upcoming_date'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_upcoming_row['upcoming_date'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_upcoming_row__upcoming_time_bog_tracker_mpit_neolo_student_calendar_39 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['upcoming_time'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_upcoming_row['upcoming_time'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_upcoming_row__upcoming_title_bog_tracker_mpit_neolo_student_calendar_40 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['upcoming_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_upcoming_row['upcoming_title'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar_upcoming_row__click_bog_tracker_mpit_neolo_student_calendar_41 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['open_task'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_upcoming_row['click'] >
	>
	export class $bog_tracker_mpit_neolo_student_calendar extends $mol_view {
		cell_date_id( id: any): string
		cell_day( id: any): string
		cell_count( id: any): string
		cell_has_count( id: any): boolean
		cell_is_selected( id: any): boolean
		cell_is_today( id: any): boolean
		cell_is_empty( id: any): boolean
		select_day( id: any, next?: any ): any
		weekday_label( id: any): string
		day_task_id( id: any): string
		day_task_time( id: any): string
		day_task_title( id: any): string
		day_task_meta( id: any): string
		open_task( id: any, next?: any ): any
		upcoming_id( id: any): string
		upcoming_date( id: any): string
		upcoming_time( id: any): string
		upcoming_title( id: any): string
		Title( ): $mol_view
		prev_month( next?: any ): any
		Prev_btn( ): $mol_button_minor
		Month_label( ): $mol_view
		next_month( next?: any ): any
		Next_btn( ): $mol_button_minor
		Nav( ): $mol_view
		create_click( next?: any ): any
		Create_btn( ): $mol_button_minor
		Toolbar( ): $mol_view
		Grid( ): $mol_view
		Day_box_title( ): $mol_view
		Selected_label( ): $mol_view
		Day_list( ): $mol_list
		day_is_empty( ): boolean
		Empty_note( ): $mol_view
		Day_box( ): $mol_view
		Upcoming_title( ): $mol_view
		Upcoming_list( ): $mol_list
		Upcoming_box( ): $mol_view
		Bottom( ): $mol_view
		Calendar_layout( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		title_label( ): string
		month_label( ): string
		view_month( next?: number ): number
		view_year( next?: number ): number
		selected_date( next?: string ): string
		add_label( ): string
		today_label( ): string
		upcoming_label( ): string
		empty_note( ): string
		weekday_ids( ): readonly(any)[]
		cell_ids( ): readonly(string)[]
		selected_label( ): string
		day_task_ids( ): readonly(string)[]
		upcoming_ids( ): readonly(string)[]
		grid_cells( ): readonly(any)[]
		day_tasks( ): readonly(any)[]
		upcoming( ): readonly(any)[]
		Cell( id: any): $bog_tracker_mpit_neolo_student_calendar_cell
		Weekday( id: any): $mol_view
		Day_task( id: any): $bog_tracker_mpit_neolo_student_calendar_day_task
		Upcoming_row( id: any): $bog_tracker_mpit_neolo_student_calendar_upcoming_row
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_cell_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_student_calendar_cell_2 = $mol_type_enforce<
		Record<string, any> & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_cell_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_student_calendar_cell extends $mol_button_minor {
		is_selected( ): boolean
		is_today( ): boolean
		is_empty( ): boolean
		has_count( ): boolean
		Day_number( ): $mol_view
		Badge( ): $mol_view
		date_id( ): string
		day_number( ): string
		count( ): string
		click( next?: any ): any
		attr( ): ({ 
			'bog_tracker_mpit_neolo_student_calendar_cell_selected': ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['is_selected'] >,
			'bog_tracker_mpit_neolo_student_calendar_cell_today': ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['is_today'] >,
			'bog_tracker_mpit_neolo_student_calendar_cell_empty': ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['is_empty'] >,
			'bog_tracker_mpit_neolo_student_calendar_cell_has_count': ReturnType< $bog_tracker_mpit_neolo_student_calendar_cell['has_count'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_day_task_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_day_task_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_day_task_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_day_task_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_student_calendar_day_task extends $mol_button_minor {
		Time_chip( ): $mol_view
		Title_row( ): $mol_view
		Meta_row( ): $mol_view
		Inner( ): $mol_view
		task_id( ): string
		time( ): string
		task_title( ): string
		meta( ): string
		click( next?: any ): any
		sub( ): readonly(any)[]
	}
	
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_calendar_upcoming_row_1 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_calendar_upcoming_row['click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_calendar_upcoming_row_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_calendar_upcoming_row_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_student_calendar_upcoming_row extends $mol_view {
		Dot( ): $mol_view
		click( next?: any ): any
		Title_btn( ): $mol_button_minor
		Text( ): $mol_view
		task_id( ): string
		upcoming_date( ): string
		upcoming_time( ): string
		upcoming_title( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_student_calendar extends $.$bog_tracker_mpit_neolo_student_calendar {
        view_month(next?: number): number;
        view_year(next?: number): number;
        selected_date(next?: string): string;
        month_label(): string;
        tasks_all(): $bog_tracker_mpit_neolo_task[];
        tasks_for_date(id: string): $bog_tracker_mpit_neolo_task[];
        cell_ids(): string[];
        cell_date_id(id: string): string;
        cell_is_empty(id: string): boolean;
        cell_day(id: string): string;
        cell_count(id: string): string;
        cell_has_count(id: string): boolean;
        cell_is_selected(id: string): boolean;
        cell_is_today(id: string): boolean;
        weekday_ids(): readonly any[];
        weekday_label(id: string): string;
        grid_cells(): any[];
        selected_label(): string;
        day_tasks_sorted(): $bog_tracker_mpit_neolo_task[];
        day_task_ids(): string[];
        day_is_empty(): boolean;
        day_task_by_id(id: string): $bog_tracker_mpit_neolo_task | null;
        day_task_id(id: string): string;
        day_task_time(id: string): string;
        day_task_title(id: string): string;
        day_task_meta(id: string): string;
        day_tasks(): $bog_tracker_mpit_neolo_student_calendar_day_task[];
        upcoming_list_sorted(): $bog_tracker_mpit_neolo_task[];
        upcoming_ids(): string[];
        upcoming_by_id(id: string): $bog_tracker_mpit_neolo_task | null;
        upcoming_id(id: string): string;
        upcoming_date(id: string): string;
        upcoming_time(id: string): string;
        upcoming_title(id: string): string;
        upcoming(): $bog_tracker_mpit_neolo_student_calendar_upcoming_row[];
        prev_month(next?: any): any;
        next_month(next?: any): any;
        create_click(next?: any): any;
        select_day(id: string, next?: any): any;
        open_task(id: string, next?: any): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_bog_tracker_mpit_neolo_student_stats_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['invitation_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_stats_19 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['ai_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_stats_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_student_stats_22 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_stats_ai_visible': ReturnType< $bog_tracker_mpit_neolo_student_stats['ai_visible'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_24 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_invitation__invitation_id_bog_tracker_mpit_neolo_student_stats_30 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['invitation_id_value'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_invitation['invitation_id'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_invitation__invitation_title_bog_tracker_mpit_neolo_student_stats_31 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['invitation_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_invitation['invitation_title'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_invitation__invitation_sub_bog_tracker_mpit_neolo_student_stats_32 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['invitation_sub'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_invitation['invitation_sub'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_invitation__accept_click_bog_tracker_mpit_neolo_student_stats_33 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['inv_accept'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_invitation['accept_click'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_invitation__reject_click_bog_tracker_mpit_neolo_student_stats_34 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['inv_reject'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_invitation['reject_click'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__line_path_bog_tracker_mpit_neolo_student_stats_35 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['done_line_path'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['line_path'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__fill_path_bog_tracker_mpit_neolo_student_stats_36 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['done_fill_path'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['fill_path'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__color_bog_tracker_mpit_neolo_student_stats_37 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['color'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__line_path_bog_tracker_mpit_neolo_student_stats_38 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['work_line_path'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['line_path'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__fill_path_bog_tracker_mpit_neolo_student_stats_39 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['work_fill_path'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['fill_path'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__color_bog_tracker_mpit_neolo_student_stats_40 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['color'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__line_path_bog_tracker_mpit_neolo_student_stats_41 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['overdue_line_path'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['line_path'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__fill_path_bog_tracker_mpit_neolo_student_stats_42 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['overdue_fill_path'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['fill_path'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__color_bog_tracker_mpit_neolo_student_stats_43 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['color'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__line_path_bog_tracker_mpit_neolo_student_stats_44 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['rejected_line_path'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['line_path'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__fill_path_bog_tracker_mpit_neolo_student_stats_45 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['rejected_fill_path'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['fill_path'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_chart__color_bog_tracker_mpit_neolo_student_stats_46 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['color'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__card_title_bog_tracker_mpit_neolo_student_stats_47 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['done_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['card_title'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__count_bog_tracker_mpit_neolo_student_stats_48 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['done_count'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['count'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__accent_bog_tracker_mpit_neolo_student_stats_49 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['accent'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__Chart_bog_tracker_mpit_neolo_student_stats_50 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['Done_chart'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['Chart'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__card_title_bog_tracker_mpit_neolo_student_stats_51 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['work_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['card_title'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__count_bog_tracker_mpit_neolo_student_stats_52 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['work_count'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['count'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__accent_bog_tracker_mpit_neolo_student_stats_53 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['accent'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__Chart_bog_tracker_mpit_neolo_student_stats_54 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['Work_chart'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['Chart'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__card_title_bog_tracker_mpit_neolo_student_stats_55 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['overdue_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['card_title'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__count_bog_tracker_mpit_neolo_student_stats_56 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['overdue_count'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['count'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__accent_bog_tracker_mpit_neolo_student_stats_57 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['accent'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__Chart_bog_tracker_mpit_neolo_student_stats_58 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['Overdue_chart'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['Chart'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__card_title_bog_tracker_mpit_neolo_student_stats_59 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['rejected_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['card_title'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__count_bog_tracker_mpit_neolo_student_stats_60 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['rejected_count'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['count'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__accent_bog_tracker_mpit_neolo_student_stats_61 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['accent'] >
	>
	type $bog_tracker_mpit_neolo_student_stats_card__Chart_bog_tracker_mpit_neolo_student_stats_62 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats['Rejected_chart'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats_card['Chart'] >
	>
	export class $bog_tracker_mpit_neolo_student_stats extends $mol_view {
		invitation_id_value( id: any): string
		invitation_title( id: any): string
		invitation_sub( id: any): string
		inv_accept( id: any, next?: any ): any
		inv_reject( id: any, next?: any ): any
		done_line_path( ): string
		done_fill_path( ): string
		work_line_path( ): string
		work_fill_path( ): string
		overdue_line_path( ): string
		overdue_fill_path( ): string
		rejected_line_path( ): string
		rejected_fill_path( ): string
		Profile_title( ): $mol_view
		L_name( ): $mol_view
		V_name( ): $mol_view
		L_surname( ): $mol_view
		V_surname( ): $mol_view
		L_login( ): $mol_view
		V_login( ): $mol_view
		L_role( ): $mol_view
		V_role( ): $mol_view
		L_school( ): $mol_view
		V_school( ): $mol_view
		L_id( ): $mol_view
		V_id( ): $mol_view
		Profile_table( ): $mol_view
		Inv_title( ): $mol_view
		Inv_list( ): $mol_list
		Inv_section( ): $mol_view
		Ai_heading( ): $mol_view
		ai_click( next?: any ): any
		Ai_btn( ): $mol_button_minor
		ai_visible( next?: boolean ): boolean
		Ai_content( ): $mol_view
		Ai_block( ): $mol_view
		Ai_section( ): $mol_view
		Profile_card( ): $mol_view
		Stats_title( ): $mol_view
		Stats_column( ): $mol_view
		Stats_side( ): $mol_view
		Stats_layout( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		profile_title( ): string
		label_name( ): string
		label_surname( ): string
		label_login( ): string
		label_role( ): string
		label_school( ): string
		label_id( ): string
		value_name( ): string
		value_surname( ): string
		value_login( ): string
		value_role( ): string
		value_school( ): string
		value_id( ): string
		invitations_title( ): string
		ai_title( ): string
		ai_button_label( ): string
		stats_title( ): string
		done_title( ): string
		work_title( ): string
		overdue_title( ): string
		rejected_title( ): string
		done_count( ): string
		work_count( ): string
		overdue_count( ): string
		rejected_count( ): string
		invitation_ids( ): readonly(string)[]
		invitation_rows( ): readonly(any)[]
		ai_text( next?: string ): string
		Invitation_row( id: any): $bog_tracker_mpit_neolo_student_stats_invitation
		Done_chart( ): $bog_tracker_mpit_neolo_student_stats_chart
		Work_chart( ): $bog_tracker_mpit_neolo_student_stats_chart
		Overdue_chart( ): $bog_tracker_mpit_neolo_student_stats_chart
		Rejected_chart( ): $bog_tracker_mpit_neolo_student_stats_chart
		Done_card( ): $bog_tracker_mpit_neolo_student_stats_card
		Work_card( ): $bog_tracker_mpit_neolo_student_stats_card
		Overdue_card( ): $bog_tracker_mpit_neolo_student_stats_card
		Rejected_card( ): $bog_tracker_mpit_neolo_student_stats_card
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_card_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_card_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_card_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_card_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_student_stats_card extends $mol_view {
		accent( ): string
		Card_title( ): $mol_view
		Big_number( ): $mol_view
		Chart_holder( ): $mol_view
		Main( ): $mol_view
		card_title( ): string
		count( ): string
		Chart( ): any
		attr( ): ({ 
			'bog_tracker_mpit_neolo_student_stats_card_accent': ReturnType< $bog_tracker_mpit_neolo_student_stats_card['accent'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_invitation_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_invitation_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_stats_invitation_3 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats_invitation['accept_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_stats_invitation_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_stats_invitation_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats_invitation['reject_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_stats_invitation_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_stats_invitation_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_student_stats_invitation extends $mol_view {
		Inv_title( ): $mol_view
		Inv_sub( ): $mol_view
		accept_click( next?: any ): any
		Accept_btn( ): $mol_button_minor
		reject_click( next?: any ): any
		Reject_btn( ): $mol_button_minor
		Inv_actions( ): $mol_view
		invitation_id( ): string
		invitation_title( ): string
		invitation_sub( ): string
		accept_label( ): string
		reject_label( ): string
		sub( ): readonly(any)[]
	}
	
	type $mol_svg_path__geometry_bog_tracker_mpit_neolo_student_stats_chart_1 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['fill_path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry_bog_tracker_mpit_neolo_student_stats_chart_2 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['line_path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $bog_tracker_mpit_neolo_student_stats_chart extends $mol_svg_root {
		color( ): string
		Fill( ): $mol_svg_path
		Line( ): $mol_svg_path
		view_box( ): string
		aspect( ): string
		line_path( ): string
		fill_path( ): string
		style( ): ({ 
			'fill': ReturnType< $bog_tracker_mpit_neolo_student_stats_chart['color'] >,
		}) 
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=stats.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_student_stats extends $.$bog_tracker_mpit_neolo_student_stats {
        profile(): $bog_tracker_mpit_neolo_user | null;
        value_name(): string;
        value_surname(): string;
        value_login(): string;
        value_role(): string;
        value_school(): string;
        value_id(): string;
        tasks_all(): $bog_tracker_mpit_neolo_task[];
        done_tasks(): $bog_tracker_mpit_neolo_task[];
        work_tasks(): $bog_tracker_mpit_neolo_task[];
        overdue_tasks(): $bog_tracker_mpit_neolo_task[];
        rejected_tasks(): $bog_tracker_mpit_neolo_task[];
        done_count(): string;
        work_count(): string;
        overdue_count(): string;
        rejected_count(): string;
        done_paths(): {
            line: string;
            fill: string;
        };
        work_paths(): {
            line: string;
            fill: string;
        };
        overdue_paths(): {
            line: string;
            fill: string;
        };
        rejected_paths(): {
            line: string;
            fill: string;
        };
        done_line_path(): string;
        done_fill_path(): string;
        work_line_path(): string;
        work_fill_path(): string;
        overdue_line_path(): string;
        overdue_fill_path(): string;
        rejected_line_path(): string;
        rejected_fill_path(): string;
        invitations_pending(): $bog_tracker_mpit_neolo_invitation[];
        invitation_ids(): string[];
        invitation_by_id(id: string): $bog_tracker_mpit_neolo_invitation | null;
        invitation_id_value(id: string): string;
        invitation_title(id: string): string;
        invitation_sub(id: string): string;
        invitation_rows(): $bog_tracker_mpit_neolo_student_stats_invitation[];
        inv_accept(id: string, next?: any): any;
        inv_reject(id: string, next?: any): any;
        ai_text(next?: string): string;
        ai_visible(next?: boolean): boolean;
        ai_click(next?: any): any;
    }
}

declare namespace $ {

	type $mol_view__attr_bog_tracker_mpit_neolo_student_sidebar_1 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_sidebar_circle': ReturnType< $bog_tracker_mpit_neolo_student_sidebar['calendar_circle'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__attr_bog_tracker_mpit_neolo_student_sidebar_4 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_sidebar_active': ReturnType< $bog_tracker_mpit_neolo_student_sidebar['is_calendar'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		,
		ReturnType< $mol_button_minor['attr'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_sidebar_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['pick_calendar'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_sidebar_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_student_sidebar_7 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_sidebar_circle': ReturnType< $bog_tracker_mpit_neolo_student_sidebar['tasks_circle'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__attr_bog_tracker_mpit_neolo_student_sidebar_10 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_sidebar_active': ReturnType< $bog_tracker_mpit_neolo_student_sidebar['is_tasks'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		,
		ReturnType< $mol_button_minor['attr'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_sidebar_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['pick_tasks'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_sidebar_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_student_sidebar_13 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_sidebar_circle': ReturnType< $bog_tracker_mpit_neolo_student_sidebar['cabinet_circle'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_student_sidebar_16 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_sidebar_badge_visible': ReturnType< $bog_tracker_mpit_neolo_student_sidebar['has_invitations'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__attr_bog_tracker_mpit_neolo_student_sidebar_18 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_sidebar_active': ReturnType< $bog_tracker_mpit_neolo_student_sidebar['is_stats'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		,
		ReturnType< $mol_button_minor['attr'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_sidebar_19 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['pick_stats'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_sidebar_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_sidebar_22 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['open_about'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_sidebar_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_sidebar_24 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['open_terms'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_sidebar_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_sidebar_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_student_sidebar extends $mol_view {
		is_calendar( ): boolean
		pick_calendar( next?: any ): any
		calendar_circle( ): string
		Circle_calendar( ): $mol_view
		Label_calendar( ): $mol_view
		Item_calendar( ): $mol_button_minor
		is_tasks( ): boolean
		pick_tasks( next?: any ): any
		tasks_circle( ): string
		Circle_tasks( ): $mol_view
		Label_tasks( ): $mol_view
		Item_tasks( ): $mol_button_minor
		is_stats( ): boolean
		pick_stats( next?: any ): any
		cabinet_circle( ): string
		Circle_cabinet( ): $mol_view
		Label_cabinet( ): $mol_view
		has_invitations( ): boolean
		Badge( ): $mol_view
		Item_cabinet( ): $mol_button_minor
		Stack( ): $mol_view
		open_about( next?: any ): any
		About_btn( ): $mol_button_minor
		open_terms( next?: any ): any
		Terms_btn( ): $mol_button_minor
		Footer( ): $mol_view
		screen( next?: string ): string
		invitations_count( ): number
		about_label( ): string
		terms_label( ): string
		calendar_label( ): string
		tasks_label( ): string
		cabinet_label( ): string
		calendar_icon( ): string
		tasks_icon( ): string
		cabinet_icon( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=sidebar.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_student_sidebar extends $.$bog_tracker_mpit_neolo_student_sidebar {
        screen(next?: string): string;
        is_tasks(): boolean;
        is_calendar(): boolean;
        is_stats(): boolean;
        has_invitations(): boolean;
        pick_tasks(next?: any): any;
        pick_calendar(next?: any): any;
        pick_stats(next?: any): any;
        open_about(next?: any): any;
        open_terms(next?: any): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_student_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_student_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['logout'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_student_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks__attr_bog_tracker_mpit_neolo_student_8 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_screen_visible': ReturnType< $bog_tracker_mpit_neolo_student['is_tasks'] >,
		})  & ReturnType< $bog_tracker_mpit_neolo_student_tasks['attr'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['attr'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks__store_bog_tracker_mpit_neolo_student_9 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['store'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks__api_bog_tracker_mpit_neolo_student_10 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['api'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks__open_task_bog_tracker_mpit_neolo_student_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['open_task'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['open_task'] >
	>
	type $bog_tracker_mpit_neolo_student_tasks__add_task_click_bog_tracker_mpit_neolo_student_12 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['add_task_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_tasks['add_task_click'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__attr_bog_tracker_mpit_neolo_student_13 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_screen_visible': ReturnType< $bog_tracker_mpit_neolo_student['is_calendar'] >,
		})  & ReturnType< $bog_tracker_mpit_neolo_student_calendar['attr'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['attr'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__store_bog_tracker_mpit_neolo_student_14 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['store'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__api_bog_tracker_mpit_neolo_student_15 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['api'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__view_month_bog_tracker_mpit_neolo_student_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['view_month'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['view_month'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__view_year_bog_tracker_mpit_neolo_student_17 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['view_year'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['view_year'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__selected_date_bog_tracker_mpit_neolo_student_18 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['selected_date'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['selected_date'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__prev_month_bog_tracker_mpit_neolo_student_19 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['prev_month'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['prev_month'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__next_month_bog_tracker_mpit_neolo_student_20 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['next_month'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['next_month'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__create_click_bog_tracker_mpit_neolo_student_21 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['create_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['create_click'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__select_day_bog_tracker_mpit_neolo_student_22 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['select_day'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['select_day'] >
	>
	type $bog_tracker_mpit_neolo_student_calendar__open_task_bog_tracker_mpit_neolo_student_23 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['open_task'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_calendar['open_task'] >
	>
	type $bog_tracker_mpit_neolo_student_stats__attr_bog_tracker_mpit_neolo_student_24 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_student_screen_visible': ReturnType< $bog_tracker_mpit_neolo_student['is_stats'] >,
		})  & ReturnType< $bog_tracker_mpit_neolo_student_stats['attr'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats['attr'] >
	>
	type $bog_tracker_mpit_neolo_student_stats__store_bog_tracker_mpit_neolo_student_25 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats['store'] >
	>
	type $bog_tracker_mpit_neolo_student_stats__api_bog_tracker_mpit_neolo_student_26 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_stats['api'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_student_sidebar__screen_bog_tracker_mpit_neolo_student_28 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['screen'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['screen'] >
	>
	type $bog_tracker_mpit_neolo_student_sidebar__invitations_count_bog_tracker_mpit_neolo_student_29 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['invitations_count'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['invitations_count'] >
	>
	type $bog_tracker_mpit_neolo_student_sidebar__open_about_bog_tracker_mpit_neolo_student_30 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['open_about'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['open_about'] >
	>
	type $bog_tracker_mpit_neolo_student_sidebar__open_terms_bog_tracker_mpit_neolo_student_31 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_student['open_terms'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student_sidebar['open_terms'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_student_33 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_student extends $mol_view {
		Brand_accent( ): $mol_view
		Brand( ): $mol_view
		logout( next?: any ): any
		Logout_icon( ): $mol_view
		Logout_text( ): $mol_view
		Logout_btn( ): $mol_button_minor
		Topbar( ): $mol_view
		is_tasks( ): boolean
		open_task( id: any, next?: any ): any
		add_task_click( next?: any ): any
		Tasks_screen( ): $bog_tracker_mpit_neolo_student_tasks
		is_calendar( ): boolean
		view_month( next?: number ): number
		view_year( next?: number ): number
		selected_date( next?: string ): string
		prev_month( next?: any ): any
		next_month( next?: any ): any
		create_click( next?: any ): any
		select_day( id: any, next?: any ): any
		Calendar_screen( ): $bog_tracker_mpit_neolo_student_calendar
		is_stats( ): boolean
		Stats_screen( ): $bog_tracker_mpit_neolo_student_stats
		Main_area( ): $mol_view
		screen( next?: string ): string
		invitations_count( ): number
		open_about( next?: any ): any
		open_terms( next?: any ): any
		Sidebar( ): $bog_tracker_mpit_neolo_student_sidebar
		Layout( ): $mol_view
		Shell( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		brand_plain( ): string
		brand_accent( ): string
		logout_label( ): string
		logout_icon( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=student.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_student extends $.$bog_tracker_mpit_neolo_student {
        screen(next?: string): string;
        is_tasks(): boolean;
        is_calendar(): boolean;
        is_stats(): boolean;
        selected_date(next?: string): string;
        view_month(next?: number): number;
        view_year(next?: number): number;
        invitations_count(): number;
        logout(next?: any): any;
        add_task_click(next?: any): any;
        prev_month(next?: any): any;
        next_month(next?: any): any;
        create_click(next?: any): any;
        open_task(id: string, next?: any): any;
        open_about(next?: any): any;
        open_terms(next?: any): any;
        select_day(id: string, next?: any): any;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_teacher_classes_2 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['create_class_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_teacher_classes_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['grid_sub'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_teacher_classes_card__name_bog_tracker_mpit_neolo_teacher_classes_10 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['class_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes_card['name'] >
	>
	type $bog_tracker_mpit_neolo_teacher_classes_card__subject_bog_tracker_mpit_neolo_teacher_classes_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['class_subject'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes_card['subject'] >
	>
	type $bog_tracker_mpit_neolo_teacher_classes_card__count_text_bog_tracker_mpit_neolo_teacher_classes_12 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['class_count_text'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes_card['count_text'] >
	>
	type $bog_tracker_mpit_neolo_teacher_classes_card__id_tail_bog_tracker_mpit_neolo_teacher_classes_13 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['class_id_tail'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes_card['id_tail'] >
	>
	type $bog_tracker_mpit_neolo_teacher_classes_card__click_bog_tracker_mpit_neolo_teacher_classes_14 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['open_class_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes_card['click'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_classes extends $mol_view {
		class_name( id: any): string
		class_subject( id: any): string
		class_count_text( id: any): string
		class_id_tail( id: any): string
		open_class_click( id: any, next?: any ): any
		Count_label( ): $mol_view
		create_class_click( next?: any ): any
		Create_btn( ): $mol_button_major
		Header( ): $mol_view
		Grid( ): $mol_view
		Empty_icon( ): $mol_view
		Empty_text( ): $mol_view
		Empty_sub( ): $mol_view
		Empty( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		teacher_classes( ): readonly(any)[]
		classes_count( ): number
		classes_count_text( ): string
		empty_visible( ): boolean
		class_ids( ): readonly(string)[]
		grid_sub( ): readonly(any)[]
		Card( id: any): $bog_tracker_mpit_neolo_teacher_classes_card
		sub( ): readonly(any)[]
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_classes_empty': ReturnType< $bog_tracker_mpit_neolo_teacher_classes['empty_visible'] >,
		})  & ReturnType< $mol_view['attr'] >
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_card_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_card_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_card_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_card_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_card_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_classes_card_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_classes_card extends $mol_button_minor {
		Icon( ): $mol_view
		Name( ): $mol_view
		Subject( ): $mol_view
		Count_badge( ): $mol_view
		Id_badge( ): $mol_view
		Meta( ): $mol_view
		name( ): string
		subject( ): string
		count_text( ): string
		id_tail( ): string
		attr( ): Record<string, any> & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=classes.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_teacher_classes extends $.$bog_tracker_mpit_neolo_teacher_classes {
        teacher_classes(): $bog_tracker_mpit_neolo_class[];
        classes_count(): number;
        classes_count_text(): string;
        empty_visible(): boolean;
        class_ids(): readonly string[];
        class_by_id(id: string): $bog_tracker_mpit_neolo_class | null;
        class_name(id: string): string;
        class_subject(id: string): string;
        class_count_text(id: string): string;
        class_id_tail(id: string): string;
        grid_sub(): any[];
    }
    class $bog_tracker_mpit_neolo_teacher_classes_card extends $.$bog_tracker_mpit_neolo_teacher_classes_card {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_button_minor__click_bog_tracker_mpit_neolo_teacher_detail_1 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['back_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_teacher_detail_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_teacher_detail_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['assign_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_teacher_detail_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_teacher_detail_9 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['invite_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_teacher_detail_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_teacher_detail_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['delete_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_teacher_detail_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail_tab__label_bog_tracker_mpit_neolo_teacher_detail_15 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_tab['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail_tab__active_bog_tracker_mpit_neolo_teacher_detail_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['students_tab_active'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_tab['active'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail_tab__click_bog_tracker_mpit_neolo_teacher_detail_17 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['students_tab_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_tab['click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail_tab__label_bog_tracker_mpit_neolo_teacher_detail_18 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_tab['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail_tab__active_bog_tracker_mpit_neolo_teacher_detail_19 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['stats_tab_active'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_tab['active'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail_tab__click_bog_tracker_mpit_neolo_teacher_detail_20 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['stats_tab_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_tab['click'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_22 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['body_sub'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail_student_row__display_id_bog_tracker_mpit_neolo_teacher_detail_23 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['student_id_label'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_student_row['display_id'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail_student_row__remove_click_bog_tracker_mpit_neolo_teacher_detail_24 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['remove_student'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_student_row['remove_click'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_detail extends $mol_view {
		student_id_label( id: any): string
		remove_student( id: any, next?: any ): any
		back_click( next?: any ): any
		Back_btn( ): $mol_button_minor
		Icon( ): $mol_view
		Class_name( ): $mol_view
		Class_summary( ): $mol_view
		Header_info( ): $mol_view
		assign_click( next?: any ): any
		Assign_btn( ): $mol_button_major
		invite_click( next?: any ): any
		Invite_btn( ): $mol_button_major
		delete_click( next?: any ): any
		Delete_btn( ): $mol_button_minor
		Header_actions( ): $mol_view
		Header( ): $mol_view
		students_tab_click( next?: any ): any
		Tab_students( ): $bog_tracker_mpit_neolo_teacher_detail_tab
		stats_tab_click( next?: any ): any
		Tab_stats( ): $bog_tracker_mpit_neolo_teacher_detail_tab
		Tab_row( ): $mol_view
		Body( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		class_id( ): string
		tab( next?: string ): string
		class_name( ): string
		class_subject( ): string
		class_summary( ): string
		students_count( ): number
		students_count_text( ): string
		students_tab_active( ): boolean
		stats_tab_active( ): boolean
		students_empty_visible( ): boolean
		students_ids( ): readonly(string)[]
		body_sub( ): readonly(any)[]
		Student_row( id: any): $bog_tracker_mpit_neolo_teacher_detail_student_row
		sub( ): readonly(any)[]
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_detail_students_empty': ReturnType< $bog_tracker_mpit_neolo_teacher_detail['students_empty_visible'] >,
		})  & ReturnType< $mol_view['attr'] >
	}
	
	export class $bog_tracker_mpit_neolo_teacher_detail_tab extends $mol_button_minor {
		label( ): string
		active( ): boolean
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_detail_tab_active': ReturnType< $bog_tracker_mpit_neolo_teacher_detail_tab['active'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_student_row_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_student_row_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_student_row_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_detail_student_row_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_teacher_detail_student_row_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail_student_row['remove_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_teacher_detail_student_row_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_detail_student_row extends $mol_view {
		Avatar( ): $mol_view
		Name( ): $mol_view
		Role( ): $mol_view
		Name_col( ): $mol_view
		remove_click( next?: any ): any
		Remove_btn( ): $mol_button_minor
		display_id( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=detail.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_teacher_detail extends $.$bog_tracker_mpit_neolo_teacher_detail {
        current_class(): $bog_tracker_mpit_neolo_class | null;
        tab(next?: string): string;
        students_tab_active(): boolean;
        stats_tab_active(): boolean;
        students_tab_click(next?: any): any;
        stats_tab_click(next?: any): any;
        class_name(): string;
        class_subject(): string;
        students_count(): number;
        students_count_text(): string;
        class_summary(): string;
        students_empty_visible(): boolean;
        students_ids(): readonly string[];
        student_id_label(id: string): string;
        body_sub(): any[];
        remove_student(id: string, next?: any): any;
    }
    class $bog_tracker_mpit_neolo_teacher_detail_tab extends $.$bog_tracker_mpit_neolo_teacher_detail_tab {
    }
    class $bog_tracker_mpit_neolo_teacher_detail_student_row extends $.$bog_tracker_mpit_neolo_teacher_detail_student_row {
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_2 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['cards_sub'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review_card__title_bog_tracker_mpit_neolo_teacher_review_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['task_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['title'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review_card__meta_bog_tracker_mpit_neolo_teacher_review_8 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['task_meta'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['meta'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review_card__desc_bog_tracker_mpit_neolo_teacher_review_9 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['task_desc'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['desc'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review_card__file_name_bog_tracker_mpit_neolo_teacher_review_10 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['task_file_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['file_name'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review_card__file_url_bog_tracker_mpit_neolo_teacher_review_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['task_file_url'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['file_url'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review_card__file_visible_bog_tracker_mpit_neolo_teacher_review_12 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['task_file_visible'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['file_visible'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review_card__accept_click_bog_tracker_mpit_neolo_teacher_review_13 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['accept'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['accept_click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review_card__reject_click_bog_tracker_mpit_neolo_teacher_review_14 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['reject'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['reject_click'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_review extends $mol_view {
		task_title( id: any): string
		task_meta( id: any): string
		task_desc( id: any): string
		task_file_name( id: any): string
		task_file_url( id: any): string
		task_file_visible( id: any): boolean
		accept( id: any, next?: any ): any
		reject( id: any, next?: any ): any
		Header( ): $mol_view
		Cards( ): $mol_view
		Empty_icon( ): $mol_view
		Empty_text( ): $mol_view
		Empty_sub( ): $mol_view
		Empty( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		review_tasks_list( ): readonly(any)[]
		task_ids( ): readonly(string)[]
		header_text( ): string
		empty_visible( ): boolean
		cards_sub( ): readonly(any)[]
		api_base( ): string
		Card( id: any): $bog_tracker_mpit_neolo_teacher_review_card
		sub( ): readonly(any)[]
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_review_empty': ReturnType< $bog_tracker_mpit_neolo_teacher_review['empty_visible'] >,
		})  & ReturnType< $mol_view['attr'] >
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_card_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_card_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_card_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_card_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_card_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_card_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__uri_bog_tracker_mpit_neolo_teacher_review_card_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['file_url'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_bog_tracker_mpit_neolo_teacher_review_card_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_card_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_teacher_review_card_10 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['accept_click'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_teacher_review_card_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_teacher_review_card_12 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['reject_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_teacher_review_card_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_review_card_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_review_card extends $mol_view {
		Title( ): $mol_view
		Meta( ): $mol_view
		Desc( ): $mol_view
		File_icon( ): $mol_view
		File_name( ): $mol_view
		File_hint( ): $mol_view
		File_row( ): $mol_link
		File_missing( ): $mol_view
		accept_click( next?: any ): any
		Accept_btn( ): $mol_button_major
		reject_click( next?: any ): any
		Reject_btn( ): $mol_button_minor
		Actions( ): $mol_view
		title( ): string
		meta( ): string
		desc( ): string
		file_name( ): string
		file_url( ): string
		file_visible( ): boolean
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_review_card_file': ReturnType< $bog_tracker_mpit_neolo_teacher_review_card['file_visible'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=review.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_teacher_review extends $.$bog_tracker_mpit_neolo_teacher_review {
        review_tasks_list(): $bog_tracker_mpit_neolo_task[];
        task_ids(): readonly string[];
        task_by_id(id: string): $bog_tracker_mpit_neolo_task | null;
        task_title(id: string): string;
        task_meta(id: string): string;
        task_desc(id: string): string;
        task_file_name(id: string): string;
        task_file_visible(id: string): boolean;
        task_file_url(id: string): string;
        empty_visible(): boolean;
        header_text(): string;
        cards_sub(): any[];
    }
    class $bog_tracker_mpit_neolo_teacher_review_card extends $.$bog_tracker_mpit_neolo_teacher_review_card {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_1 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_stats['cards_sub'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_teacher_stats_card__name_bog_tracker_mpit_neolo_teacher_stats_6 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_stats['class_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_stats_card['name'] >
	>
	type $bog_tracker_mpit_neolo_teacher_stats_card__summary_bog_tracker_mpit_neolo_teacher_stats_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_stats['class_summary'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_stats_card['summary'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_stats extends $mol_view {
		class_name( id: any): string
		class_summary( id: any): string
		Cards( ): $mol_view
		Empty_icon( ): $mol_view
		Empty_text( ): $mol_view
		Empty_sub( ): $mol_view
		Empty( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		teacher_classes( ): readonly(any)[]
		class_ids( ): readonly(string)[]
		empty_visible( ): boolean
		cards_sub( ): readonly(any)[]
		Card( id: any): $bog_tracker_mpit_neolo_teacher_stats_card
		sub( ): readonly(any)[]
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_stats_empty': ReturnType< $bog_tracker_mpit_neolo_teacher_stats['empty_visible'] >,
		})  & ReturnType< $mol_view['attr'] >
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_card_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_card_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_card_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_card_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_card_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_stats_card_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_stats_card extends $mol_view {
		Icon( ): $mol_view
		Name( ): $mol_view
		Summary( ): $mol_view
		Info( ): $mol_view
		Head( ): $mol_view
		Placeholder( ): $mol_view
		name( ): string
		summary( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=stats.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_teacher_stats extends $.$bog_tracker_mpit_neolo_teacher_stats {
        teacher_classes(): $bog_tracker_mpit_neolo_class[];
        class_by_id(id: string): $bog_tracker_mpit_neolo_class | null;
        class_ids(): readonly string[];
        class_name(id: string): string;
        class_summary(id: string): string;
        empty_visible(): boolean;
        cards_sub(): any[];
    }
    class $bog_tracker_mpit_neolo_teacher_stats_card extends $.$bog_tracker_mpit_neolo_teacher_stats_card {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_profile_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__label_bog_tracker_mpit_neolo_teacher_profile_2 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__value_bog_tracker_mpit_neolo_teacher_profile_3 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile['teacher_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['value'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__label_bog_tracker_mpit_neolo_teacher_profile_4 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__value_bog_tracker_mpit_neolo_teacher_profile_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile['teacher_surname'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['value'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__label_bog_tracker_mpit_neolo_teacher_profile_6 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__value_bog_tracker_mpit_neolo_teacher_profile_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile['teacher_username'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['value'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__label_bog_tracker_mpit_neolo_teacher_profile_8 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__value_bog_tracker_mpit_neolo_teacher_profile_9 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['value'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__label_bog_tracker_mpit_neolo_teacher_profile_10 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__value_bog_tracker_mpit_neolo_teacher_profile_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile['teacher_school'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['value'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__label_bog_tracker_mpit_neolo_teacher_profile_12 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__value_bog_tracker_mpit_neolo_teacher_profile_13 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile['teacher_id_text'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['value'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile_box__highlighted_bog_tracker_mpit_neolo_teacher_profile_14 = $mol_type_enforce<
		boolean
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['highlighted'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_profile_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_profile_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_profile_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_profile extends $mol_view {
		Title( ): $mol_view
		Name_box( ): $bog_tracker_mpit_neolo_teacher_profile_box
		Surname_box( ): $bog_tracker_mpit_neolo_teacher_profile_box
		Username_box( ): $bog_tracker_mpit_neolo_teacher_profile_box
		Role_box( ): $bog_tracker_mpit_neolo_teacher_profile_box
		School_box( ): $bog_tracker_mpit_neolo_teacher_profile_box
		Id_box( ): $bog_tracker_mpit_neolo_teacher_profile_box
		Grid( ): $mol_view
		Footer_text( ): $mol_view
		Card( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		classes_count( ): number
		teacher_name( ): string
		teacher_surname( ): string
		teacher_username( ): string
		teacher_school( ): string
		teacher_id_text( ): string
		classes_count_text( ): string
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_profile_box_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_profile_box_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_profile_box extends $mol_view {
		Label( ): $mol_view
		Value( ): $mol_view
		label( ): string
		value( ): string
		highlighted( ): boolean
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_profile_box_highlighted': ReturnType< $bog_tracker_mpit_neolo_teacher_profile_box['highlighted'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=profile.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_teacher_profile extends $.$bog_tracker_mpit_neolo_teacher_profile {
        classes_count(): number;
        profile(): $bog_tracker_mpit_neolo_user | null;
        teacher_name(): string;
        teacher_surname(): string;
        teacher_username(): string;
        teacher_school(): string;
        teacher_id_text(): string;
        classes_count_text(): string;
    }
    class $bog_tracker_mpit_neolo_teacher_profile_box extends $.$bog_tracker_mpit_neolo_teacher_profile_box {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_teacher_6 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['logout'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_teacher_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__icon_bog_tracker_mpit_neolo_teacher_12 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__icon_kind_bog_tracker_mpit_neolo_teacher_13 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon_kind'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__label_bog_tracker_mpit_neolo_teacher_14 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__active_bog_tracker_mpit_neolo_teacher_15 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['side_classes_active'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['active'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__badge_text_bog_tracker_mpit_neolo_teacher_16 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_text'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__badge_hidden_bog_tracker_mpit_neolo_teacher_17 = $mol_type_enforce<
		boolean
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_hidden'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__click_bog_tracker_mpit_neolo_teacher_18 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['side_classes_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__icon_bog_tracker_mpit_neolo_teacher_19 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__icon_kind_bog_tracker_mpit_neolo_teacher_20 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon_kind'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__label_bog_tracker_mpit_neolo_teacher_21 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__active_bog_tracker_mpit_neolo_teacher_22 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['side_review_active'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['active'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__badge_text_bog_tracker_mpit_neolo_teacher_23 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['review_badge_text'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_text'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__badge_hidden_bog_tracker_mpit_neolo_teacher_24 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['review_badge_hidden'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_hidden'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__click_bog_tracker_mpit_neolo_teacher_25 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['side_review_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__icon_bog_tracker_mpit_neolo_teacher_26 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__icon_kind_bog_tracker_mpit_neolo_teacher_27 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon_kind'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__label_bog_tracker_mpit_neolo_teacher_28 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__active_bog_tracker_mpit_neolo_teacher_29 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['side_stats_active'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['active'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__badge_text_bog_tracker_mpit_neolo_teacher_30 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_text'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__badge_hidden_bog_tracker_mpit_neolo_teacher_31 = $mol_type_enforce<
		boolean
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_hidden'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__click_bog_tracker_mpit_neolo_teacher_32 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['side_stats_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__icon_bog_tracker_mpit_neolo_teacher_33 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__icon_kind_bog_tracker_mpit_neolo_teacher_34 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon_kind'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__label_bog_tracker_mpit_neolo_teacher_35 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['label'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__active_bog_tracker_mpit_neolo_teacher_36 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['side_profile_active'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['active'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__badge_text_bog_tracker_mpit_neolo_teacher_37 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_text'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__badge_hidden_bog_tracker_mpit_neolo_teacher_38 = $mol_type_enforce<
		boolean
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_hidden'] >
	>
	type $bog_tracker_mpit_neolo_teacher_side_item__click_bog_tracker_mpit_neolo_teacher_39 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['side_profile_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['click'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_40 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_42 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_43 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_45 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_teacher_create_class_modal__hidden_bog_tracker_mpit_neolo_teacher_46 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['create_class_modal_hidden'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['hidden'] >
	>
	type $bog_tracker_mpit_neolo_teacher_create_class_modal__name_bog_tracker_mpit_neolo_teacher_47 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['new_class_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['name'] >
	>
	type $bog_tracker_mpit_neolo_teacher_create_class_modal__subject_bog_tracker_mpit_neolo_teacher_48 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['new_class_subject'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['subject'] >
	>
	type $bog_tracker_mpit_neolo_teacher_create_class_modal__error_bog_tracker_mpit_neolo_teacher_49 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['create_class_error'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['error'] >
	>
	type $bog_tracker_mpit_neolo_teacher_create_class_modal__close_bog_tracker_mpit_neolo_teacher_50 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['create_class_close'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['close'] >
	>
	type $bog_tracker_mpit_neolo_teacher_create_class_modal__submit_bog_tracker_mpit_neolo_teacher_51 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['create_class_submit'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['submit'] >
	>
	type $bog_tracker_mpit_neolo_teacher_invite_modal__hidden_bog_tracker_mpit_neolo_teacher_52 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['invite_modal_hidden'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['hidden'] >
	>
	type $bog_tracker_mpit_neolo_teacher_invite_modal__student_id_bog_tracker_mpit_neolo_teacher_53 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['invite_student_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['student_id'] >
	>
	type $bog_tracker_mpit_neolo_teacher_invite_modal__result_bog_tracker_mpit_neolo_teacher_54 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['invite_result'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['result'] >
	>
	type $bog_tracker_mpit_neolo_teacher_invite_modal__close_bog_tracker_mpit_neolo_teacher_55 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['invite_close'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['close'] >
	>
	type $bog_tracker_mpit_neolo_teacher_invite_modal__submit_bog_tracker_mpit_neolo_teacher_56 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['invite_submit'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['submit'] >
	>
	type $bog_tracker_mpit_neolo_teacher_classes__store_bog_tracker_mpit_neolo_teacher_57 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['store'] >
	>
	type $bog_tracker_mpit_neolo_teacher_classes__create_class_click_bog_tracker_mpit_neolo_teacher_58 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['create_class_open_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['create_class_click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_classes__open_class_click_bog_tracker_mpit_neolo_teacher_59 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['open_class_id_set'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_classes['open_class_click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail__store_bog_tracker_mpit_neolo_teacher_60 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['store'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail__api_bog_tracker_mpit_neolo_teacher_61 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['api'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail__class_id_bog_tracker_mpit_neolo_teacher_62 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['open_class_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['class_id'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail__tab_bog_tracker_mpit_neolo_teacher_63 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['open_class_tab'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['tab'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail__back_click_bog_tracker_mpit_neolo_teacher_64 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['close_class_detail'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['back_click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail__invite_click_bog_tracker_mpit_neolo_teacher_65 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['invite_open_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['invite_click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail__assign_click_bog_tracker_mpit_neolo_teacher_66 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['assign_open_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['assign_click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_detail__delete_click_bog_tracker_mpit_neolo_teacher_67 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['delete_class_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_detail['delete_click'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review__store_bog_tracker_mpit_neolo_teacher_68 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['store'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review__api_bog_tracker_mpit_neolo_teacher_69 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['api'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review__accept_bog_tracker_mpit_neolo_teacher_70 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['review_accept'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['accept'] >
	>
	type $bog_tracker_mpit_neolo_teacher_review__reject_bog_tracker_mpit_neolo_teacher_71 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['review_reject'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_review['reject'] >
	>
	type $bog_tracker_mpit_neolo_teacher_stats__store_bog_tracker_mpit_neolo_teacher_72 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_stats['store'] >
	>
	type $bog_tracker_mpit_neolo_teacher_profile__store_bog_tracker_mpit_neolo_teacher_73 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher_profile['store'] >
	>
	export class $bog_tracker_mpit_neolo_teacher extends $mol_view {
		create_class_open_click( next?: any ): any
		open_class_id_set( id: any, next?: any ): any
		open_class_tab( next?: string ): string
		close_class_detail( next?: any ): any
		invite_open_click( next?: any ): any
		assign_open_click( next?: any ): any
		delete_class_click( next?: any ): any
		review_accept( id: any, next?: any ): any
		review_reject( id: any, next?: any ): any
		Brand_accent( ): $mol_view
		Role_badge( ): $mol_view
		Brand( ): $mol_view
		logout( next?: any ): any
		Logout_icon( ): $mol_view
		Logout_label( ): $mol_view
		Logout( ): $mol_button_minor
		Topbar( ): $mol_view
		Screen_title( ): $mol_view
		Screen_content( ): $mol_view
		Main( ): $mol_view
		side_classes_click( next?: any ): any
		Side_classes( ): $bog_tracker_mpit_neolo_teacher_side_item
		side_review_click( next?: any ): any
		Side_review( ): $bog_tracker_mpit_neolo_teacher_side_item
		side_stats_click( next?: any ): any
		Side_stats( ): $bog_tracker_mpit_neolo_teacher_side_item
		side_profile_click( next?: any ): any
		Side_profile( ): $bog_tracker_mpit_neolo_teacher_side_item
		Side_stack( ): $mol_view
		Side_id( ): $mol_view
		Side_footer( ): $mol_view
		Sidebar( ): $mol_view
		Layout( ): $mol_view
		Shell( ): $mol_view
		new_class_name( next?: string ): string
		new_class_subject( next?: string ): string
		create_class_close( next?: any ): any
		create_class_submit( next?: any ): any
		Create_class_modal( ): $bog_tracker_mpit_neolo_teacher_create_class_modal
		invite_student_id( next?: string ): string
		invite_close( next?: any ): any
		invite_submit( next?: any ): any
		Invite_modal( ): $bog_tracker_mpit_neolo_teacher_invite_modal
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		screen( next?: string ): string
		open_class_id( next?: string ): string
		create_class_error( ): string
		invite_result( ): string
		teacher_side_id_text( ): string
		screen_title_text( ): string
		side_classes_active( ): boolean
		side_review_active( ): boolean
		side_stats_active( ): boolean
		side_profile_active( ): boolean
		review_badge_text( ): string
		review_badge_hidden( ): boolean
		create_class_modal_hidden( ): boolean
		invite_modal_hidden( ): boolean
		active_screen( ): any
		Classes_screen( ): $bog_tracker_mpit_neolo_teacher_classes
		Detail_screen( ): $bog_tracker_mpit_neolo_teacher_detail
		Review_screen( ): $bog_tracker_mpit_neolo_teacher_review
		Stats_screen( ): $bog_tracker_mpit_neolo_teacher_stats
		Profile_screen( ): $bog_tracker_mpit_neolo_teacher_profile
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_side_item_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_side_item_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_side_item_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_side_item extends $mol_button_minor {
		Circle( ): $mol_view
		Label( ): $mol_view
		Badge( ): $mol_view
		icon( ): string
		icon_kind( ): string
		label( ): string
		active( ): boolean
		badge_text( ): string
		badge_hidden( ): boolean
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_side_item_active': ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['active'] >,
			'bog_tracker_mpit_neolo_teacher_side_item_kind': ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['icon_kind'] >,
			'bog_tracker_mpit_neolo_teacher_side_item_badge_hidden': ReturnType< $bog_tracker_mpit_neolo_teacher_side_item['badge_hidden'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_create_class_modal_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_teacher_create_class_modal_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_teacher_create_class_modal_3 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['name'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_teacher_create_class_modal_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_teacher_create_class_modal_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_teacher_create_class_modal_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_teacher_create_class_modal_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['subject'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_teacher_create_class_modal_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_teacher_create_class_modal_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_create_class_modal_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_teacher_create_class_modal_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_teacher_create_class_modal_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_teacher_create_class_modal_13 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_teacher_create_class_modal_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_create_class_modal_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_create_class_modal_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_create_class_modal extends $mol_view {
		Modal_title( ): $mol_view
		name( next?: string ): string
		Name_input( ): $mol_string
		Name_field( ): $mol_labeler
		subject( next?: string ): string
		Subject_input( ): $mol_string
		Subject_field( ): $mol_labeler
		Error_view( ): $mol_view
		close( next?: any ): any
		Cancel_btn( ): $mol_button_minor
		submit( next?: any ): any
		Submit_btn( ): $mol_button_major
		Buttons( ): $mol_view
		Modal_body( ): $mol_view
		hidden( ): boolean
		error( ): string
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_modal_hidden': ReturnType< $bog_tracker_mpit_neolo_teacher_create_class_modal['hidden'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_invite_modal_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_invite_modal_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_teacher_invite_modal_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_teacher_invite_modal_4 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['student_id'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_teacher_invite_modal_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_teacher_invite_modal_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_invite_modal_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_teacher_invite_modal_8 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_teacher_invite_modal_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_teacher_invite_modal_10 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_teacher_invite_modal_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_invite_modal_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_teacher_invite_modal_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_teacher_invite_modal extends $mol_view {
		Modal_title( ): $mol_view
		Hint( ): $mol_view
		student_id( next?: string ): string
		Id_input( ): $mol_string
		Id_field( ): $mol_labeler
		Result_view( ): $mol_view
		close( next?: any ): any
		Cancel_btn( ): $mol_button_minor
		submit( next?: any ): any
		Submit_btn( ): $mol_button_major
		Buttons( ): $mol_view
		Modal_body( ): $mol_view
		hidden( ): boolean
		result( ): string
		attr( ): ({ 
			'bog_tracker_mpit_neolo_teacher_modal_hidden': ReturnType< $bog_tracker_mpit_neolo_teacher_invite_modal['hidden'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=teacher.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_teacher extends $.$bog_tracker_mpit_neolo_teacher {
        screen(next?: string): string;
        open_class_id(next?: string): string;
        open_class_tab(next?: string): string;
        new_class_name(next?: string): string;
        new_class_subject(next?: string): string;
        create_class_error(): string;
        create_class_error_state(next?: string): string;
        invite_student_id(next?: string): string;
        invite_result(): string;
        invite_result_state(next?: string): string;
        create_class_open(next?: boolean): boolean;
        invite_open(next?: boolean): boolean;
        create_class_modal_hidden(): boolean;
        invite_modal_hidden(): boolean;
        current_teacher_id(): bigint;
        teacher_side_id_text(): string;
        screen_title_text(): string;
        side_classes_active(): boolean;
        side_review_active(): boolean;
        side_stats_active(): boolean;
        side_profile_active(): boolean;
        review_badge_hidden(): boolean;
        review_badge_text(): string;
        review_count(): number;
        active_screen(): any;
        side_classes_click(next?: any): any;
        side_review_click(next?: any): any;
        side_stats_click(next?: any): any;
        side_profile_click(next?: any): any;
        logout(next?: any): any;
        open_class_id_set(id: string, next?: any): any;
        close_class_detail(next?: any): any;
        create_class_open_click(next?: any): any;
        create_class_close(next?: any): any;
        create_class_submit(next?: any): any;
        invite_open_click(next?: any): any;
        invite_close(next?: any): any;
        invite_submit(next?: any): any;
        assign_open_click(next?: any): any;
        delete_class_click(next?: any): any;
        current_open_class(): $bog_tracker_mpit_neolo_class | null;
        review_tasks(): $bog_tracker_mpit_neolo_task[];
        my_classes(): $bog_tracker_mpit_neolo_class[];
        review_accept(id: string, next?: any): any;
        review_reject(id: string, next?: any): any;
        Classes_screen(): $.$bog_tracker_mpit_neolo_teacher_classes;
        Detail_screen(): $.$bog_tracker_mpit_neolo_teacher_detail;
        Review_screen(): $.$bog_tracker_mpit_neolo_teacher_review;
        Stats_screen(): $.$bog_tracker_mpit_neolo_teacher_stats;
        Profile_screen(): $.$bog_tracker_mpit_neolo_teacher_profile;
    }
    class $bog_tracker_mpit_neolo_teacher_side_item extends $.$bog_tracker_mpit_neolo_teacher_side_item {
    }
    class $bog_tracker_mpit_neolo_teacher_create_class_modal extends $.$bog_tracker_mpit_neolo_teacher_create_class_modal {
    }
    class $bog_tracker_mpit_neolo_teacher_invite_modal extends $.$bog_tracker_mpit_neolo_teacher_invite_modal {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_child_1 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['back'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_child_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_parent_child_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['create_task'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_parent_child_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__num_bog_tracker_mpit_neolo_parent_child_10 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['stat_total'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['num'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__label_bog_tracker_mpit_neolo_parent_child_11 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__kind_bog_tracker_mpit_neolo_parent_child_12 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['kind'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__num_bog_tracker_mpit_neolo_parent_child_13 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['stat_done'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['num'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__label_bog_tracker_mpit_neolo_parent_child_14 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__kind_bog_tracker_mpit_neolo_parent_child_15 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['kind'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__num_bog_tracker_mpit_neolo_parent_child_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['stat_progress'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['num'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__label_bog_tracker_mpit_neolo_parent_child_17 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__kind_bog_tracker_mpit_neolo_parent_child_18 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['kind'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__num_bog_tracker_mpit_neolo_parent_child_19 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['stat_review'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['num'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__label_bog_tracker_mpit_neolo_parent_child_20 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__kind_bog_tracker_mpit_neolo_parent_child_21 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['kind'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__num_bog_tracker_mpit_neolo_parent_child_22 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['stat_overdue'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['num'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__label_bog_tracker_mpit_neolo_parent_child_23 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__kind_bog_tracker_mpit_neolo_parent_child_24 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['kind'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__num_bog_tracker_mpit_neolo_parent_child_25 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['stat_pending'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['num'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__label_bog_tracker_mpit_neolo_parent_child_26 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_stat__kind_bog_tracker_mpit_neolo_parent_child_27 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['kind'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_task_row__title_bog_tracker_mpit_neolo_parent_child_31 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['task_title'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_task_row['title'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_task_row__desc_bog_tracker_mpit_neolo_parent_child_32 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['task_desc'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_task_row['desc'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_task_row__date_bog_tracker_mpit_neolo_parent_child_33 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['task_date'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_task_row['date'] >
	>
	type $bog_tracker_mpit_neolo_parent_child_task_row__status_bog_tracker_mpit_neolo_parent_child_34 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['task_status'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_task_row['status'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_35 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child['task_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_child extends $mol_view {
		back( next?: any ): any
		back_label( ): string
		Back_btn( ): $mol_button_minor
		avatar_letter( ): string
		Avatar( ): $mol_view
		child_name( ): string
		Name( ): $mol_view
		child_meta( ): string
		Meta( ): $mol_view
		Info( ): $mol_view
		create_task( next?: any ): any
		create_task_label( ): string
		Create_task_btn( ): $mol_button_major
		Header( ): $mol_view
		stat_total( ): string
		Stat_total( ): $bog_tracker_mpit_neolo_parent_child_stat
		stat_done( ): string
		Stat_done( ): $bog_tracker_mpit_neolo_parent_child_stat
		stat_progress( ): string
		Stat_progress( ): $bog_tracker_mpit_neolo_parent_child_stat
		stat_review( ): string
		Stat_review( ): $bog_tracker_mpit_neolo_parent_child_stat
		stat_overdue( ): string
		Stat_overdue( ): $bog_tracker_mpit_neolo_parent_child_stat
		stat_pending( ): string
		Stat_pending( ): $bog_tracker_mpit_neolo_parent_child_stat
		Stats( ): $mol_view
		Section_title( ): $mol_view
		Task_empty( ): $mol_view
		task_title( id: any): string
		task_desc( id: any): string
		task_date( id: any): string
		task_status( id: any): string
		Task_row( id: any): $bog_tracker_mpit_neolo_parent_child_task_row
		task_rows( ): readonly(any)[]
		Tasks_list( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		child_id( ): string
		children( ): readonly(any)[]
		task_ids( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_stat_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_stat_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_child_stat extends $mol_view {
		Stat_num( ): $mol_view
		Stat_lbl( ): $mol_view
		num( ): string
		label( ): string
		kind( ): string
		attr( ): ({ 
			'bog_tracker_mpit_neolo_parent_child_stat_kind': ReturnType< $bog_tracker_mpit_neolo_parent_child_stat['kind'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
	export class $bog_tracker_mpit_neolo_parent_child_task_dot extends $mol_view {
		status( ): string
		attr( ): ({ 
			'bog_tracker_mpit_neolo_parent_child_task_dot_status': ReturnType< $bog_tracker_mpit_neolo_parent_child_task_dot['status'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $bog_tracker_mpit_neolo_parent_child_task_dot__status_bog_tracker_mpit_neolo_parent_child_task_row_1 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_child_task_row['status'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child_task_dot['status'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_task_row_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_task_row_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_task_row_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_child_task_row_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_child_task_row extends $mol_view {
		Dot( ): $bog_tracker_mpit_neolo_parent_child_task_dot
		Title( ): $mol_view
		Meta( ): $mol_view
		Info( ): $mol_view
		Date_view( ): $mol_view
		title( ): string
		desc( ): string
		date( ): string
		status( ): string
		attr( ): ({ 
			'bog_tracker_mpit_neolo_parent_child_task_row_status': ReturnType< $bog_tracker_mpit_neolo_parent_child_task_row['status'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=child.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_parent_child extends $.$bog_tracker_mpit_neolo_parent_child {
        children_list(): readonly $bog_tracker_mpit_neolo_parent_child_summary[];
        current_child(): $bog_tracker_mpit_neolo_parent_child_summary | null;
        avatar_letter(): string;
        child_name(): string;
        child_meta(): string;
        child_tasks(): readonly $bog_tracker_mpit_neolo_task[];
        task_ids(): readonly string[];
        task(key: string): $bog_tracker_mpit_neolo_task | null;
        task_title(key: string): string;
        task_desc(key: string): string;
        task_date(key: string): string;
        task_status(key: string): string;
        stat_total(): string;
        stats_by_kind(): Record<string, number>;
        stat_done(): string;
        stat_progress(): string;
        stat_review(): string;
        stat_overdue(): string;
        stat_pending(): string;
        task_rows(): readonly any[];
    }
    class $bog_tracker_mpit_neolo_parent_child_stat extends $.$bog_tracker_mpit_neolo_parent_child_stat {
    }
    class $bog_tracker_mpit_neolo_parent_child_task_dot extends $.$bog_tracker_mpit_neolo_parent_child_task_dot {
    }
    class $bog_tracker_mpit_neolo_parent_child_task_row extends $.$bog_tracker_mpit_neolo_parent_child_task_row {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_parent_children_2 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children['open_add'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_parent_children_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_parent_children_8 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children['open_add'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_parent_children_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_parent_children_card__initial_bog_tracker_mpit_neolo_parent_children_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children['child_initial'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children_card['initial'] >
	>
	type $bog_tracker_mpit_neolo_parent_children_card__name_bog_tracker_mpit_neolo_parent_children_12 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children['child_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children_card['name'] >
	>
	type $bog_tracker_mpit_neolo_parent_children_card__meta_bog_tracker_mpit_neolo_parent_children_13 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children['child_meta'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children_card['meta'] >
	>
	type $bog_tracker_mpit_neolo_parent_children_card__open_bog_tracker_mpit_neolo_parent_children_14 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children['card_open'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children_card['open'] >
	>
	type $bog_tracker_mpit_neolo_parent_children_card__remove_bog_tracker_mpit_neolo_parent_children_15 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children['card_remove'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children_card['remove'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children['cards'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_children extends $mol_view {
		count_label( ): string
		Count_label( ): $mol_view
		open_add( next?: any ): any
		add_label( ): string
		Add_btn( ): $mol_button_major
		Header_bar( ): $mol_view
		Empty_icon( ): $mol_view
		Empty_text( ): $mol_view
		Empty_sub( ): $mol_view
		empty_add_label( ): string
		Empty_add_btn( ): $mol_button_major
		Empty( ): $mol_view
		child_initial( id: any): string
		child_name( id: any): string
		child_meta( id: any): string
		card_open( id: any, next?: any ): any
		card_remove( id: any, next?: any ): any
		Card( id: any): $bog_tracker_mpit_neolo_parent_children_card
		cards( ): readonly(any)[]
		Grid( ): $mol_view
		rows( ): readonly(any)[]
		children( ): readonly(any)[]
		open_child( next?: any ): any
		remove_child( next?: any ): any
		child_ids( ): readonly(string)[]
		sub( ): ReturnType< $bog_tracker_mpit_neolo_parent_children['rows'] >
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_card_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_card_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_card_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_children_card_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_children_card_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children_card['open'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_children_card_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_children_card_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_children_card['remove'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_children_card_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_children_card extends $mol_view {
		open( next?: any ): any
		Avatar( ): $mol_view
		Name( ): $mol_view
		Meta( ): $mol_view
		Info( ): $mol_view
		Card_body( ): $mol_button_minor
		remove( next?: any ): any
		remove_label( ): string
		Remove_btn( ): $mol_button_minor
		initial( ): string
		name( ): string
		meta( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=children.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_parent_children extends $.$bog_tracker_mpit_neolo_parent_children {
        children_list(): readonly $bog_tracker_mpit_neolo_parent_child_summary[];
        child_ids(): readonly string[];
        has_children(): boolean;
        count_label(): string;
        child(id: string): $bog_tracker_mpit_neolo_parent_child_summary | null;
        child_initial(id: string): string;
        child_name(id: string): string;
        child_meta(id: string): string;
        card_open(id: string, next?: any): any;
        card_remove(id: string, next?: any): any;
        cards(): readonly any[];
        rows(): readonly any[];
    }
    class $bog_tracker_mpit_neolo_parent_children_card extends $.$bog_tracker_mpit_neolo_parent_children_card {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_calendar_1 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['prev_month_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_calendar_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_calendar_4 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['next_month_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_calendar_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_parent_calendar_day__day_label_bog_tracker_mpit_neolo_parent_calendar_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['day_label'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar_day['day_label'] >
	>
	type $bog_tracker_mpit_neolo_parent_calendar_day__count_bog_tracker_mpit_neolo_parent_calendar_17 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['day_count'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar_day['count'] >
	>
	type $bog_tracker_mpit_neolo_parent_calendar_day__state_bog_tracker_mpit_neolo_parent_calendar_18 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['day_state'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar_day['state'] >
	>
	type $bog_tracker_mpit_neolo_parent_calendar_day__click_bog_tracker_mpit_neolo_parent_calendar_19 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['cell_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar_day['click'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_20 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['day_cells'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_24 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_29 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['selected_tasks_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_31 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_33 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_35 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_36 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['upcoming_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_37 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_38 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_calendar extends $mol_view {
		prev_month_click( next?: any ): any
		prev_label( ): string
		Prev_btn( ): $mol_button_minor
		month_label( ): string
		Month_label( ): $mol_view
		next_month_click( next?: any ): any
		next_label( ): string
		Next_btn( ): $mol_button_minor
		Nav( ): $mol_view
		Toolbar( ): $mol_view
		Wd_mon( ): $mol_view
		Wd_tue( ): $mol_view
		Wd_wed( ): $mol_view
		Wd_thu( ): $mol_view
		Wd_fri( ): $mol_view
		Wd_sat( ): $mol_view
		Wd_sun( ): $mol_view
		Weekdays( ): $mol_view
		day_label( id: any): string
		day_count( id: any): string
		day_state( id: any): string
		cell_click( id: any, next?: any ): any
		Day_cell( id: any): $bog_tracker_mpit_neolo_parent_calendar_day
		day_cells( ): readonly(any)[]
		Grid( ): $mol_view
		Selected_title( ): $mol_view
		selected_date_label( ): string
		Selected_date_label( ): $mol_view
		Selected_empty( ): $mol_view
		selected_task_time( id: any): string
		Selected_task_time( id: any): $mol_view
		selected_task_title( id: any): string
		Selected_task_title( id: any): $mol_view
		selected_task_meta( id: any): string
		Selected_task_meta( id: any): $mol_view
		Selected_task_info( id: any): $mol_view
		Selected_task( id: any): $mol_view
		selected_tasks_rows( ): readonly(any)[]
		Selected_tasks( ): $mol_view
		Selected_info( ): $mol_view
		Upcoming_title( ): $mol_view
		Upcoming_empty( ): $mol_view
		Event_dot( id: any): $mol_view
		event_body( id: any): string
		Event_body( id: any): $mol_view
		Event_row( id: any): $mol_view
		upcoming_rows( ): readonly(any)[]
		Upcoming_list( ): $mol_view
		Upcoming_info( ): $mol_view
		Bottom( ): $mol_view
		store( ): $bog_tracker_mpit_neolo_store
		children( ): readonly(any)[]
		view_year( next?: number ): number
		view_month( next?: number ): number
		selected_date( next?: string ): string
		day_click( next?: string ): string
		day_ids( ): readonly(string)[]
		event_ids( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_day_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_calendar_day_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_calendar_day extends $mol_button_minor {
		Day_number( ): $mol_view
		Day_badge( ): $mol_view
		day_label( ): string
		count( ): string
		state( ): string
		click( next?: any ): any
		attr( ): ({ 
			'bog_tracker_mpit_neolo_parent_calendar_day_state': ReturnType< $bog_tracker_mpit_neolo_parent_calendar_day['state'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_parent_calendar extends $.$bog_tracker_mpit_neolo_parent_calendar {
        view_year(next?: number): number;
        view_month(next?: number): number;
        selected_date(next?: string): string;
        children_list(): readonly $bog_tracker_mpit_neolo_parent_child_summary[];
        all_tasks(): readonly $bog_tracker_mpit_neolo_task[];
        tasks_by_date(): ReadonlyMap<string, readonly $bog_tracker_mpit_neolo_task[]>;
        month_label(): string;
        prev_month_click(next?: any): any;
        next_month_click(next?: any): any;
        day_ids(): readonly string[];
        cell_iso(id: string): string;
        day_label(id: string): string;
        day_count(id: string): string;
        day_state(id: string): string;
        cell_click(id: string, next?: any): any;
        day_cells(): readonly any[];
        selected_date_label(): string;
        selected_tasks(): readonly {
            task: $bog_tracker_mpit_neolo_task;
            child_name: string;
        }[];
        selected_task_count(): number;
        selected_tasks_rows(): readonly any[];
        selected_task_time(id: string): string;
        selected_task_title(id: string): string;
        selected_task_meta(id: string): string;
        upcoming_events(): readonly {
            task: $bog_tracker_mpit_neolo_task;
            child_name: string;
        }[];
        upcoming_count(): number;
        event_ids(): readonly string[];
        upcoming_rows(): readonly any[];
        event_body(id: string): string;
    }
    class $bog_tracker_mpit_neolo_parent_calendar_day extends $.$bog_tracker_mpit_neolo_parent_calendar_day {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__label_bog_tracker_mpit_neolo_parent_profile_2 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__value_bog_tracker_mpit_neolo_parent_profile_3 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['profile_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['value'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__label_bog_tracker_mpit_neolo_parent_profile_4 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__value_bog_tracker_mpit_neolo_parent_profile_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['profile_surname_or_dash'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['value'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__label_bog_tracker_mpit_neolo_parent_profile_6 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__value_bog_tracker_mpit_neolo_parent_profile_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['profile_username_at'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['value'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__label_bog_tracker_mpit_neolo_parent_profile_8 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__value_bog_tracker_mpit_neolo_parent_profile_9 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['value'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__label_bog_tracker_mpit_neolo_parent_profile_10 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_row__value_bog_tracker_mpit_neolo_parent_profile_11 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['profile_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_row['value'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_child_row__initial_bog_tracker_mpit_neolo_parent_profile_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['child_initial'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_child_row['initial'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_child_row__name_bog_tracker_mpit_neolo_parent_profile_17 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['child_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_child_row['name'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_child_row__meta_bog_tracker_mpit_neolo_parent_profile_18 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['child_meta'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_child_row['meta'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile_child_row__remove_bog_tracker_mpit_neolo_parent_profile_19 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['child_remove'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_child_row['remove'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_20 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['children_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_parent_profile_21 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['open_add'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_parent_profile_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_profile extends $mol_view {
		Card_title( ): $mol_view
		profile_name( ): string
		Row_name( ): $bog_tracker_mpit_neolo_parent_profile_row
		profile_surname_or_dash( ): string
		Row_surname( ): $bog_tracker_mpit_neolo_parent_profile_row
		profile_username_at( ): string
		Row_username( ): $bog_tracker_mpit_neolo_parent_profile_row
		Row_role( ): $bog_tracker_mpit_neolo_parent_profile_row
		profile_id( ): string
		Row_id( ): $bog_tracker_mpit_neolo_parent_profile_row
		Table( ): $mol_view
		Card( ): $mol_view
		Manage_title( ): $mol_view
		Children_empty( ): $mol_view
		child_initial( id: any): string
		child_name( id: any): string
		child_meta( id: any): string
		child_remove( id: any, next?: any ): any
		Child_row( id: any): $bog_tracker_mpit_neolo_parent_profile_child_row
		children_rows( ): readonly(any)[]
		Children_block( ): $mol_view
		open_add( next?: any ): any
		add_label( ): string
		Add_btn( ): $mol_button_major
		Manage( ): $mol_view
		profile_surname( ): string
		profile_username( ): string
		children( ): readonly(any)[]
		remove_child( next?: string ): string
		child_ids( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_row_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_row_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_profile_row extends $mol_view {
		Label( ): $mol_view
		Value( ): $mol_view
		label( ): string
		value( ): string
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_child_row_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_child_row_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_child_row_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_profile_child_row_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_profile_child_row_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_profile_child_row['remove'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_profile_child_row_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_profile_child_row extends $mol_view {
		Avatar( ): $mol_view
		Name( ): $mol_view
		Meta( ): $mol_view
		Info( ): $mol_view
		remove( next?: any ): any
		remove_label( ): string
		Remove_btn( ): $mol_button_minor
		initial( ): string
		name( ): string
		meta( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=profile.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo_parent_profile extends $.$bog_tracker_mpit_neolo_parent_profile {
        children_list(): readonly $bog_tracker_mpit_neolo_parent_child_summary[];
        child_ids(): readonly string[];
        has_children(): boolean;
        profile_surname_or_dash(): string;
        profile_username_at(): string;
        child(id: string): $bog_tracker_mpit_neolo_parent_child_summary | null;
        child_initial(id: string): string;
        child_name(id: string): string;
        child_meta(id: string): string;
        child_remove(id: string, next?: any): any;
        children_rows(): readonly any[];
    }
    class $bog_tracker_mpit_neolo_parent_profile_row extends $.$bog_tracker_mpit_neolo_parent_profile_row {
    }
    class $bog_tracker_mpit_neolo_parent_profile_child_row extends $.$bog_tracker_mpit_neolo_parent_profile_child_row {
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_bog_tracker_mpit_neolo_parent_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_4 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['logout_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__icon_bog_tracker_mpit_neolo_parent_10 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['icon'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__label_bog_tracker_mpit_neolo_parent_11 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__selected_bog_tracker_mpit_neolo_parent_12 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['side_children_selected'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['selected'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__click_bog_tracker_mpit_neolo_parent_13 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['goto_children'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['click'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__icon_bog_tracker_mpit_neolo_parent_14 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['icon'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__label_bog_tracker_mpit_neolo_parent_15 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__selected_bog_tracker_mpit_neolo_parent_16 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['side_calendar_selected'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['selected'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__click_bog_tracker_mpit_neolo_parent_17 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['goto_calendar'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['click'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__icon_bog_tracker_mpit_neolo_parent_18 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['icon'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__label_bog_tracker_mpit_neolo_parent_19 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['label'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__selected_bog_tracker_mpit_neolo_parent_20 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['side_profile_selected'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['selected'] >
	>
	type $bog_tracker_mpit_neolo_parent_side_item__click_bog_tracker_mpit_neolo_parent_21 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['goto_profile'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_side_item['click'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_24 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_tracker_mpit_neolo_parent_add_child_modal__open_bog_tracker_mpit_neolo_parent_27 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['add_child_modal_open'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['open'] >
	>
	type $bog_tracker_mpit_neolo_parent_add_child_modal__id_input_bog_tracker_mpit_neolo_parent_28 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['add_child_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['id_input'] >
	>
	type $bog_tracker_mpit_neolo_parent_add_child_modal__result_bog_tracker_mpit_neolo_parent_29 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['add_child_result'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['result'] >
	>
	type $bog_tracker_mpit_neolo_parent_add_child_modal__result_kind_bog_tracker_mpit_neolo_parent_30 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['add_child_result_kind'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['result_kind'] >
	>
	type $bog_tracker_mpit_neolo_parent_add_child_modal__submit_bog_tracker_mpit_neolo_parent_31 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['add_child_submit'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['submit'] >
	>
	type $bog_tracker_mpit_neolo_parent_add_child_modal__close_bog_tracker_mpit_neolo_parent_32 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['add_child_close'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['close'] >
	>
	type $bog_tracker_mpit_neolo_parent_children__children_bog_tracker_mpit_neolo_parent_33 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['children_summaries'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children['children'] >
	>
	type $bog_tracker_mpit_neolo_parent_children__open_child_bog_tracker_mpit_neolo_parent_34 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['children_open_child'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children['open_child'] >
	>
	type $bog_tracker_mpit_neolo_parent_children__open_add_bog_tracker_mpit_neolo_parent_35 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['open_add_child_modal'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children['open_add'] >
	>
	type $bog_tracker_mpit_neolo_parent_children__remove_child_bog_tracker_mpit_neolo_parent_36 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['children_remove_child'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_children['remove_child'] >
	>
	type $bog_tracker_mpit_neolo_parent_child__store_bog_tracker_mpit_neolo_parent_37 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child['store'] >
	>
	type $bog_tracker_mpit_neolo_parent_child__api_bog_tracker_mpit_neolo_parent_38 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child['api'] >
	>
	type $bog_tracker_mpit_neolo_parent_child__child_id_bog_tracker_mpit_neolo_parent_39 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['open_child_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child['child_id'] >
	>
	type $bog_tracker_mpit_neolo_parent_child__children_bog_tracker_mpit_neolo_parent_40 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['children_summaries'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child['children'] >
	>
	type $bog_tracker_mpit_neolo_parent_child__back_bog_tracker_mpit_neolo_parent_41 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['back_to_children'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child['back'] >
	>
	type $bog_tracker_mpit_neolo_parent_child__create_task_bog_tracker_mpit_neolo_parent_42 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['create_task_click'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_child['create_task'] >
	>
	type $bog_tracker_mpit_neolo_parent_calendar__store_bog_tracker_mpit_neolo_parent_43 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['store'] >
	>
	type $bog_tracker_mpit_neolo_parent_calendar__children_bog_tracker_mpit_neolo_parent_44 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['children_summaries'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_calendar['children'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile__profile_name_bog_tracker_mpit_neolo_parent_45 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['profile_name'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['profile_name'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile__profile_surname_bog_tracker_mpit_neolo_parent_46 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['profile_surname'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['profile_surname'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile__profile_username_bog_tracker_mpit_neolo_parent_47 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['profile_username'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['profile_username'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile__profile_id_bog_tracker_mpit_neolo_parent_48 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['profile_id'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['profile_id'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile__children_bog_tracker_mpit_neolo_parent_49 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['children_summaries'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['children'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile__open_add_bog_tracker_mpit_neolo_parent_50 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['open_add_child_modal'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['open_add'] >
	>
	type $bog_tracker_mpit_neolo_parent_profile__remove_child_bog_tracker_mpit_neolo_parent_51 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent['children_remove_child'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent_profile['remove_child'] >
	>
	export class $bog_tracker_mpit_neolo_parent extends $mol_view {
		Brand_em( ): $mol_view
		Brand_badge( ): $mol_view
		Brand( ): $mol_view
		logout_click( next?: any ): any
		logout_label( ): string
		Logout_btn( ): $mol_button_minor
		Topbar( ): $mol_view
		screen_title( ): string
		Screen_title( ): $mol_view
		active_screen( ): any
		Screen_content( ): $mol_view
		Main( ): $mol_view
		side_children_selected( ): boolean
		goto_children( next?: any ): any
		Side_children( ): $bog_tracker_mpit_neolo_parent_side_item
		side_calendar_selected( ): boolean
		goto_calendar( next?: any ): any
		Side_calendar( ): $bog_tracker_mpit_neolo_parent_side_item
		side_profile_selected( ): boolean
		goto_profile( next?: any ): any
		Side_profile( ): $bog_tracker_mpit_neolo_parent_side_item
		Side_stack( ): $mol_view
		side_id( ): string
		Side_id( ): $mol_view
		Side_footer( ): $mol_view
		Sidebar( ): $mol_view
		Layout( ): $mol_view
		add_child_modal_open( next?: boolean ): boolean
		add_child_id( next?: string ): string
		add_child_result( next?: string ): string
		add_child_result_kind( next?: string ): string
		add_child_submit( next?: any ): any
		add_child_close( next?: any ): any
		Add_child_modal( ): $bog_tracker_mpit_neolo_parent_add_child_modal
		children_summaries( ): readonly(any)[]
		children_open_child( next?: string ): string
		open_add_child_modal( next?: any ): any
		children_remove_child( next?: string ): string
		Children_screen( ): $bog_tracker_mpit_neolo_parent_children
		open_child_id( next?: string ): string
		back_to_children( next?: any ): any
		create_task_click( next?: any ): any
		Child_screen( ): $bog_tracker_mpit_neolo_parent_child
		Calendar_screen( ): $bog_tracker_mpit_neolo_parent_calendar
		profile_name( ): string
		profile_surname( ): string
		profile_username( ): string
		profile_id( ): string
		Profile_screen( ): $bog_tracker_mpit_neolo_parent_profile
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		screen_id( next?: string ): string
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_side_item_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_side_item_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_side_item extends $mol_button_minor {
		Side_circle( ): $mol_view
		Side_label( ): $mol_view
		icon( ): string
		label( ): string
		selected( ): boolean
		attr( ): ({ 
			'bog_tracker_mpit_neolo_parent_side_item_selected': ReturnType< $bog_tracker_mpit_neolo_parent_side_item['selected'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_add_child_modal_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_add_child_modal_2 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_add_child_modal_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_add_child_modal_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_add_child_modal_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__hint_bog_tracker_mpit_neolo_parent_add_child_modal_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value_bog_tracker_mpit_neolo_parent_add_child_modal_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['id_input'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_labeler__title_bog_tracker_mpit_neolo_parent_add_child_modal_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_bog_tracker_mpit_neolo_parent_add_child_modal_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_view__attr_bog_tracker_mpit_neolo_parent_add_child_modal_10 = $mol_type_enforce<
		({ 
			'bog_tracker_mpit_neolo_parent_add_child_modal_result_kind': ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['result_kind'] >,
		})  & ReturnType< $mol_view['attr'] >
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_add_child_modal_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_bog_tracker_mpit_neolo_parent_add_child_modal_12 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_tracker_mpit_neolo_parent_add_child_modal_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_major__click_bog_tracker_mpit_neolo_parent_add_child_modal_14 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_bog_tracker_mpit_neolo_parent_add_child_modal_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_add_child_modal_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_add_child_modal_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_tracker_mpit_neolo_parent_add_child_modal_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_tracker_mpit_neolo_parent_add_child_modal extends $mol_view {
		Head_title( ): $mol_view
		close( next?: any ): any
		close_label( ): string
		Close_btn( ): $mol_button_minor
		Head( ): $mol_view
		Hint( ): $mol_view
		id_input( next?: string ): string
		Id_input( ): $mol_string
		Id_field( ): $mol_labeler
		Result_view( ): $mol_view
		cancel_label( ): string
		Cancel_btn( ): $mol_button_minor
		submit( next?: any ): any
		submit_label( ): string
		Submit_btn( ): $mol_button_major
		Actions( ): $mol_view
		Dialog( ): $mol_view
		Backdrop( ): $mol_view
		open( next?: boolean ): boolean
		result( ): string
		result_kind( ): string
		attr( ): ({ 
			'bog_tracker_mpit_neolo_parent_add_child_modal_open': ReturnType< $bog_tracker_mpit_neolo_parent_add_child_modal['open'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=parent.view.tree.d.ts.map
declare namespace $.$$ {
    type $bog_tracker_mpit_neolo_parent_child_summary = {
        id: number;
        username: string;
        name: string;
        surname: string;
        school: string;
    };
    class $bog_tracker_mpit_neolo_parent extends $.$bog_tracker_mpit_neolo_parent {
        screen_id(next?: string): string;
        open_child_id(next?: string): string;
        add_child_modal_open(next?: boolean): boolean;
        add_child_id(next?: string): string;
        add_child_result(next?: string): string;
        add_child_result_kind(next?: string): string;
        profile_name(): string;
        profile_surname(): string;
        profile_username(): string;
        profile_id(): string;
        children_raw_list(): readonly string[];
        children_summaries(): readonly $bog_tracker_mpit_neolo_parent_child_summary[];
        side_id(): string;
        screen_title(): string;
        side_children_selected(): boolean;
        side_calendar_selected(): boolean;
        side_profile_selected(): boolean;
        goto_children(next?: any): any;
        goto_calendar(next?: any): any;
        goto_profile(next?: any): any;
        logout_click(next?: any): any;
        children_open_child(next?: string): string;
        children_remove_child(next?: string): string;
        do_remove_child(child_id: string): void;
        back_to_children(next?: any): any;
        open_add_child_modal(next?: any): any;
        add_child_close(next?: any): any;
        add_child_submit(next?: any): any;
        do_add_child(): void;
        create_task_click(next?: any): any;
        active_screen(): any;
    }
    class $bog_tracker_mpit_neolo_parent_side_item extends $.$bog_tracker_mpit_neolo_parent_side_item {
    }
    class $bog_tracker_mpit_neolo_parent_add_child_modal extends $.$bog_tracker_mpit_neolo_parent_add_child_modal {
        open(next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_offline(): void;
}

declare namespace $ {
}

declare namespace $ {

	type $bog_tracker_mpit_neolo_auth__store_bog_tracker_mpit_neolo_1 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_auth['store'] >
	>
	type $bog_tracker_mpit_neolo_student__store_bog_tracker_mpit_neolo_2 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student['store'] >
	>
	type $bog_tracker_mpit_neolo_student__api_bog_tracker_mpit_neolo_3 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_student['api'] >
	>
	type $bog_tracker_mpit_neolo_teacher__store_bog_tracker_mpit_neolo_4 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher['store'] >
	>
	type $bog_tracker_mpit_neolo_teacher__api_bog_tracker_mpit_neolo_5 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_teacher['api'] >
	>
	type $bog_tracker_mpit_neolo_parent__store_bog_tracker_mpit_neolo_6 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo['store'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent['store'] >
	>
	type $bog_tracker_mpit_neolo_parent__api_bog_tracker_mpit_neolo_7 = $mol_type_enforce<
		ReturnType< $bog_tracker_mpit_neolo['api'] >
		,
		ReturnType< $bog_tracker_mpit_neolo_parent['api'] >
	>
	export class $bog_tracker_mpit_neolo extends $mol_view {
		Auth( ): $bog_tracker_mpit_neolo_auth
		Student( ): $bog_tracker_mpit_neolo_student
		Teacher( ): $bog_tracker_mpit_neolo_teacher
		Parent( ): $bog_tracker_mpit_neolo_parent
		active_view( ): any
		title( ): string
		store( ): $bog_tracker_mpit_neolo_store
		api( ): $bog_tracker_mpit_neolo_api
		profile( ): any
		auth_view( ): ReturnType< $bog_tracker_mpit_neolo['Auth'] >
		student_view( ): ReturnType< $bog_tracker_mpit_neolo['Student'] >
		teacher_view( ): ReturnType< $bog_tracker_mpit_neolo['Teacher'] >
		parent_view( ): ReturnType< $bog_tracker_mpit_neolo['Parent'] >
		sub( ): readonly(any)[]
		attr( ): ({ 
			'mol_theme': string,
		}) 
	}
	
}

//# sourceMappingURL=neolo.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_tracker_mpit_neolo extends $.$bog_tracker_mpit_neolo {
        profile(): $bog_tracker_mpit_neolo_user | null;
        active_view(): any;
    }
}

declare namespace $ {
}

export = $;
//# sourceMappingURL=node.d.ts.map
