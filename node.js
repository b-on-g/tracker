#!/usr/bin/env node
"use strict";
var exports = void 0;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const mod = require('module');
    const internals = mod.builtinModules;
    function $node_internal_check(name) {
        if (name.startsWith('node:'))
            return true;
        return internals.includes(name);
    }
    $.$node_internal_check = $node_internal_check;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const catched = new WeakSet();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.has(error))
            return false;
        catched.add(error);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        $mol_try(() => { $mol_fail_hidden(error); });
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const path = require('path');
    const mod = require('module');
    const localRequire = mod.createRequire(path.join(process.cwd(), 'package.json'));
    function $node_autoinstall(name) {
        try {
            localRequire.resolve(name);
        }
        catch {
            this.$mol_run.spawn({ command: ['npm', 'install', '--omit=dev', name], dir: '.' });
            try {
                this.$mol_run.spawn({ command: ['npm', 'install', '--omit=dev', '@types/' + name], dir: '.' });
            }
            catch (e) {
                if (this.$mol_promise_like(e))
                    this.$mol_fail_hidden(e);
                this.$mol_fail_log(e);
            }
        }
    }
    $.$node_autoinstall = $node_autoinstall;
})($ || ($ = {}));

;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        if ($.$node_internal_check(name))
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        $.$node_autoinstall(name);
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function cause_serialize(cause) {
        return JSON.stringify(cause, null, '  ')
            .replace(/\(/, '<')
            .replace(/\)/, ' >');
    }
    function frame_normalize(frame) {
        return (typeof frame === 'string' ? frame : cause_serialize(frame))
            .trim()
            .replace(/at /gm, '   at ')
            .replace(/^(?!    +at )(.*)/gm, '    at | $1 (#)');
    }
    class $mol_error_mix extends AggregateError {
        cause;
        name = $$.$mol_func_name(this.constructor).replace(/^\$/, '') + '_Error';
        constructor(message, cause = {}, ...errors) {
            super(errors, message, { cause });
            this.cause = cause;
            const desc = Object.getOwnPropertyDescriptor(this, 'stack');
            const stack_get = () => desc?.get?.() ?? super.stack ?? desc?.value ?? this.message;
            Object.defineProperty(this, 'stack', {
                get: () => stack_get() + '\n' + [
                    this.cause ?? 'no cause',
                    ...this.errors.flatMap(e => [
                        String(e.stack),
                        ...e instanceof $mol_error_mix || !e.cause ? [] : [e.cause]
                    ])
                ].map(frame_normalize).join('\n')
            });
            Object.defineProperty(this, 'cause', {
                get: () => cause
            });
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        static make(...params) {
            return new this(...params);
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_key_handle = Symbol.for('$mol_key_handle');
    $.$mol_key_store = new WeakMap();
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if (!Symbol.dispose)
        Symbol.dispose = Symbol('Symbol.dispose');
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || this.constructor.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        static [$mol_key_handle]() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        [Symbol.dispose]() {
            this.destructor();
        }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        constructor(id = `$mol_wire_pub:${$mol_guid()}`) {
            super();
            this[Symbol.toStringTag] = id;
        }
        [Symbol.toStringTag];
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant, this.data[i + 1]);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    function $mol_dev_format_button(label, click) {
        return $mol_dev_format_auto({
            [$.$mol_dev_format_head]() {
                return $.$mol_dev_format_span({ color: 'cornflowerblue' }, label);
            },
            [$.$mol_dev_format_body]() {
                Promise.resolve().then(click);
                return $.$mol_dev_format_span({});
            }
        });
    }
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (val instanceof Error) {
                return $.$mol_dev_format_span({}, $mol_dev_format_native(val), ' ', $mol_dev_format_button('throw', () => $mol_fail_hidden(val)));
            }
            if (val instanceof Promise) {
                return $.$mol_dev_format_shade($mol_dev_format_native(val), ' ', val[Symbol.toStringTag] ?? '');
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: (val, config = false) => {
            if (config)
                return false;
            if (!val)
                return false;
            if (val[$.$mol_dev_format_body])
                return true;
            return false;
        },
        body: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_body in val) {
                try {
                    return val[$.$mol_dev_format_body]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            return null;
        },
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    $.$mol_dev_format_span = $mol_dev_format_element.bind(null, 'span');
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $.$mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $.$mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $.$mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $.$mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
    class Stack extends Array {
        toString() {
            return this.join('\n');
        }
    }
    class Call extends Object {
        type;
        function;
        method;
        eval;
        source;
        offset;
        pos;
        object;
        flags;
        [Symbol.toStringTag];
        constructor(call) {
            super();
            this.type = call.getTypeName() ?? '';
            this.function = call.getFunctionName() ?? '';
            this.method = call.getMethodName() ?? '';
            if (this.method === this.function)
                this.method = '';
            this.pos = [call.getEnclosingLineNumber() ?? 0, call.getEnclosingColumnNumber() ?? 0];
            this.eval = call.getEvalOrigin() ?? '';
            this.source = call.getScriptNameOrSourceURL() ?? '';
            this.object = call.getThis();
            this.offset = call.getPosition();
            const flags = [];
            if (call.isAsync())
                flags.push('async');
            if (call.isConstructor())
                flags.push('constructor');
            if (call.isEval())
                flags.push('eval');
            if (call.isNative())
                flags.push('native');
            if (call.isPromiseAll())
                flags.push('PromiseAll');
            if (call.isToplevel())
                flags.push('top');
            this.flags = flags;
            const type = this.type ? this.type + '.' : '';
            const func = this.function || '<anon>';
            const method = this.method ? ' [' + this.method + '] ' : '';
            this[Symbol.toStringTag] = `${type}${func}${method}`;
        }
        [Symbol.toPrimitive]() {
            return this.toString();
        }
        toString() {
            const object = this.object || '';
            const label = this[Symbol.toStringTag];
            const source = `${this.source}:${this.pos.join(':')} #${this.offset}`;
            return `\tat ${object}${label} (${source})`;
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_div({}, $mol_dev_format_native(this), $.$mol_dev_format_shade(' '), ...this.object ? [
                $mol_dev_format_native(this.object),
            ] : [], ...this.method ? [$.$mol_dev_format_shade(' ', ' [', this.method, ']')] : [], $.$mol_dev_format_shade(' ', this.flags.join(', ')));
        }
    }
    Error.prepareStackTrace ??= (error, stack) => new Stack(...stack.map(call => new Call(call)));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.stale;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale, pos = -1) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super(id);
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_shade(cursor)
                : $mol_dev_format_shade(this[Symbol.toStringTag], cursor), $mol_dev_format_auto(this.cache));
        }
        [$mol_dev_format_body]() { return null; }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        const put = (v) => {
                            if (this.cache === result)
                                this.absorb();
                            return v;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            $mol_wire_fiber.planning.delete(this);
            if (!$mol_owning_check(this, this.cache))
                return;
            try {
                this.cache.destructor();
            }
            catch (result) {
                if ($mol_promise_like(result)) {
                    const error = new Error(`Promise in ${this}.destructor()`);
                    Object.defineProperty(result, 'stack', { get: () => error.stack });
                }
                $mol_fail_hidden(result);
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && $mol_compare_deep(left.stack, right.stack);
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, right.byteOffset, right.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this.$;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = this.uri + ('#' + this.row + ':' + this.col + '/' + this.length);
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, 0);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message} (${this})`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(this.error(`Begin value '${begin}' out of range`, RangeError));
            if (end < 0 || end > len)
                this.$.$mol_fail(this.error(`End value '${end}' out of range`, RangeError));
            if (end < begin)
                this.$.$mol_fail(this.error(`End value '${end}' can't be less than begin value`, RangeError));
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            return this.update($mol_maybe(value), ...path)[0];
        }
        update(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.flatMap((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.update(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(...this.struct(type, []).update(value, ...path.slice(1)));
                }
                return [this.clone(sub)];
            }
            else if (typeof type === 'number') {
                const ins = (this.kids[type] || this.list([]))
                    .update(value, ...path.slice(1));
                return [this.clone([
                        ...this.kids.slice(0, type),
                        ...ins,
                        ...this.kids.slice(type + 1),
                    ])];
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .flatMap(item => item.update(value, ...path.slice(1)));
                return [this.clone(kids)];
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack_self(belt, context = {}) {
            let handle = belt[this.type] || belt[''];
            if (!handle || handle === Object.prototype[this.type]) {
                handle = (input, belt, context) => [
                    input.clone(input.hack(belt, context), context.span)
                ];
            }
            try {
                return handle(this, belt, context);
            }
            catch (error) {
                error.message += `\n${this.clone([])}${this.span}`;
                $mol_fail_hidden(error);
            }
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => child.hack_self(belt, context)));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_array_chunks(array, rule) {
        const br = typeof rule === 'number' ? (_, i) => i % rule === 0 : rule;
        let chunk = [];
        const chunks = [];
        for (let i = 0; i < array.length; ++i) {
            const item = array[i];
            if (br(item, i)) {
                if (chunk.length)
                    chunks.push(chunk);
                chunk = [];
            }
            chunk.push(item);
        }
        if (chunk.length)
            chunks.push(chunk);
        return chunks;
    }
    $.$mol_array_chunks = $mol_array_chunks;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            const codes = [...buf].map(b => b.toString(16).toUpperCase().padStart(2, '0'));
            const str = $mol_array_chunks(codes, 8).map(c => c.join(' ')).join('\n');
            return $mol_tree2.data(str, [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (json.toString !== Object.prototype.toString) {
            return $mol_tree2.data(json.toString(), [], span);
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static Gray = (str) => this.inverse(this.gray(str));
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { ...event, time: new Date().toISOString() };
            let tree = this.$mol_tree2_from_json(event);
            tree = tree.struct(type, tree.kids);
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                let cause = '';
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.task !== task) {
                        cause = 'task';
                        break reuse;
                    }
                    if (existen.host !== host) {
                        cause = 'host';
                        break reuse;
                    }
                    if (!$mol_compare_deep(existen.args, args)) {
                        cause = 'args';
                        break reuse;
                    }
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Different ${cause} on restart`,
                        sub,
                        prev: existen,
                        next,
                        hint: 'Maybe required additional memoization',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
        destructor() {
            super.destructor();
            this.cursor = $mol_wire_cursor.final;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    const getters = new WeakMap();
    function get_prop(host, field) {
        let props = getters.get(host);
        let get_val = props?.[field];
        if (get_val)
            return get_val;
        get_val = (next) => {
            if (next !== undefined)
                host[field] = next;
            return host[field];
        };
        Object.defineProperty(get_val, 'name', { value: field });
        if (!props) {
            props = {};
            getters.set(host, props);
        }
        props[field] = get_val;
        return get_val;
    }
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                const temp = $mol_wire_task.getter(typeof val === 'function' ? val : get_prop(obj, field));
                if (typeof val !== 'function')
                    return temp(obj, []).sync();
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            set(obj, field, next) {
                const temp = $mol_wire_task.getter(get_prop(obj, field));
                temp(obj, [next]).sync();
                return true;
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_run_error extends $mol_error_mix {
    }
    $.$mol_run_error = $mol_run_error;
    $.$mol_run_spawn = (...args) => $node['child_process'].spawn(...args);
    $.$mol_run_spawn_sync = (...args) => $node['child_process'].spawnSync(...args);
    class $mol_run extends $mol_object {
        static async_enabled() {
            return Boolean(this.$.$mol_env()['MOL_RUN_ASYNC']);
        }
        static spawn(options) {
            const sync = !this.async_enabled() || !Boolean($mol_wire_auto());
            const env = options.env ?? this.$.$mol_env();
            return $mol_wire_sync(this).spawn_async({ ...options, sync, env });
        }
        static spawn_async({ dir, sync, timeout, command, env }) {
            const args_raw = typeof command === 'string' ? command.split(' ') : command;
            const [app, ...args] = args_raw;
            const opts = { shell: true, cwd: dir, env };
            const log_object = {
                place: `${this}.spawn()`,
                message: 'Run',
                command: args_raw.join(' '),
                dir: $node.path.relative('', dir),
            };
            if (sync) {
                this.$.$mol_log3_come({
                    hint: 'Run inside fiber',
                    ...log_object
                });
                let error;
                let res;
                try {
                    res = this.$.$mol_run_spawn_sync(app, args, opts);
                    error = res.error;
                }
                catch (err) {
                    error = err;
                }
                if (!res || error || res.status) {
                    throw new $mol_run_error(this.error_message(res), { ...log_object, status: res?.status, signal: res?.signal }, ...(error ? [error] : []));
                }
                return res;
            }
            let sub;
            try {
                sub = this.$.$mol_run_spawn(app, args, {
                    ...opts,
                    stdio: ['pipe', 'inherit', 'inherit'],
                });
            }
            catch (error) {
                throw new $mol_run_error(this.error_message(undefined), log_object, error);
            }
            const pid = sub.pid ?? 0;
            this.$.$mol_log3_come({
                ...log_object,
                pid,
            });
            let timeout_kill = false;
            let timer;
            const std_data = [];
            const error_data = [];
            const add = (std_chunk, error_chunk) => {
                if (std_chunk)
                    std_data.push(std_chunk);
                if (error_chunk)
                    error_data.push(error_chunk);
                if (!timeout)
                    return;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const signal = timeout_kill ? 'SIGKILL' : 'SIGTERM';
                    timeout_kill = true;
                    add();
                    sub.kill(signal);
                }, timeout);
            };
            add();
            sub.stdout?.on('data', data => add(data));
            sub.stderr?.on('data', data => add(undefined, data));
            const result_promise = new Promise((done, fail) => {
                const close = (error, status = null, signal = null) => {
                    if (!timer && timeout)
                        return;
                    clearTimeout(timer);
                    timer = undefined;
                    const res = {
                        pid,
                        signal,
                        get stdout() { return Buffer.concat(std_data); },
                        get stderr() { return Buffer.concat(error_data); }
                    };
                    if (error || status || timeout_kill)
                        return fail(new $mol_run_error(this.error_message(res) + (timeout_kill ? ', timeout' : ''), { ...log_object, pid, status, signal, timeout_kill }, ...error ? [error] : []));
                    this.$.$mol_log3_done({
                        ...log_object,
                        pid,
                    });
                    done(res);
                };
                sub.on('disconnect', () => close(new Error('Disconnected')));
                sub.on('error', err => close(err));
                sub.on('exit', (status, signal) => close(null, status, signal));
            });
            return Object.assign(result_promise, { destructor: () => {
                    clearTimeout(timer);
                    sub.kill('SIGKILL');
                } });
        }
        static error_message(res) {
            return res?.stderr.toString() || res?.stdout.toString() || 'Run error';
        }
    }
    $.$mol_run = $mol_run;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise extends Promise {
        done;
        fail;
        constructor(executor) {
            let done;
            let fail;
            super((d, f) => {
                done = d;
                fail = f;
                executor?.(d, f);
            });
            this.done = done;
            this.fail = fail;
        }
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise_blocker extends $mol_promise {
        static [Symbol.toStringTag] = '$mol_promise_blocker';
    }
    $.$mol_promise_blocker = $mol_promise_blocker;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static radial_gradient(value) {
            return new $mol_style_func('radial-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
        'spirit',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 240deg;\n\t--mol_theme_hue_spread: 90deg;\n\tcolor-scheme: dark light;\n}\n\nbody, :where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\t--mol_theme_spirit: hsl( 0deg, 0%, 0%, .75 );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\t\n\t--mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 30% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 15% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 60% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 70% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 70% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t--mol_theme_spirit: hsl( 0deg, 0%, 100%, .75 );\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t--mol_theme_back: oklch( 92% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 99% .01 var(--mol_theme_hue) / .5 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 50% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 60% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 40% .15 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 50% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 50% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 25% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 85% .075 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 98% .03 var(--mol_theme_hue) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 35% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 45% .15 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 83% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'page',
        'block',
        'text',
        'emoji',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_page: 3rem;\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_emoji: .5rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            return {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    function $mol_key(value) {
        primitives: {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return `Symbol(${value.description})`;
            if (!value)
                return JSON.stringify(value);
            if (typeof value !== 'object' && typeof value !== 'function')
                return JSON.stringify(value);
        }
        caching: {
            let key = $mol_key_store.get(value);
            if (key)
                return key;
        }
        objects: {
            if (value instanceof TypedArray) {
                return `${value[Symbol.toStringTag]}([${[...value].map(v => $mol_key(v))}])`;
            }
            if (Array.isArray(value))
                return `[${value.map(v => $mol_key(v))}]`;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof Date)
                return `Date(${value.valueOf()})`;
        }
        structures: {
            const proto = Reflect.getPrototypeOf(value);
            if (!proto || !Reflect.getPrototypeOf(proto)) {
                return `{${Object.entries(value).map(([k, v]) => JSON.stringify(k) + ':' + $mol_key(v))}}`;
            }
        }
        handlers: {
            if ($mol_key_handle in value) {
                return value[$mol_key_handle]();
            }
        }
        containers: {
            const key = JSON.stringify('#' + $mol_guid());
            $mol_key_store.set(value, key);
            return key;
        }
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + task.name + '<>');
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            for (let cursor = this.pub_from; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                if (pub && pub instanceof $mol_wire_task) {
                    pub.destructor();
                }
            }
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                const key = $mol_key(this.args[0]);
                const map = (this.host ?? this.task)[this.field()];
                if (!map.has(key))
                    this.$.$mol_log3_warn({
                        place: this,
                        message: 'Absent key on destruction',
                        hint: 'Check for $mol_key(key) is not changed',
                    });
                map.delete(key);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element?.shadowRoot) {
                element = element.shadowRoot.activeElement;
            }
            while (element) {
                parents.push(element);
                const parent = element.parentNode;
                if (parent instanceof ShadowRoot)
                    element = parent.host;
                else
                    element = parent;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr = Reflect.getOwnPropertyDescriptor(obj, name)) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_error_message(error) {
        return String((error instanceof Error ? error.message : null) || error) || 'Unknown';
    }
    $.$mol_error_message = $mol_error_message;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "@view-transition {\n\tnavigation: auto;\n}\n\n[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform, scale, translate, rotate;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: system-ui, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\t/* background: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text); */\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\t/*overscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"], [mol_view_error=\"$mol_promise_blocker\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"$mol_promise_blocker\"]),\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        static roots() {
            return [...$mol_dom.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])')].map((node, index) => {
                const name = node.getAttribute('mol_view_root');
                const View = this.$[name];
                if (!View) {
                    $mol_fail_log(new Error(`Autobind unknown view class`, { cause: { name } }));
                    return null;
                }
                const view = View.Root(index);
                view.dom_node(node);
                return view;
            }).filter($mol_guard_defined);
        }
        static auto() {
            const roots = this.roots();
            if (!roots.length)
                return;
            for (const root of roots) {
                try {
                    root.dom_tree();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            try {
                document.title = roots[0].title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            descr: try {
                const descr = roots[0].hint();
                if (!descr)
                    break descr;
                const head = $mol_dom.document.head;
                let node = head.querySelector('meta[name="description"]');
                if (node)
                    node.content = descr;
                else
                    head.append($mol_jsx("meta", { name: "description", content: descr }));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        hint() {
            return '';
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error)
                    ? error.constructor[Symbol.toStringTag] ?? 'Promise'
                    : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    ;
                    node.innerText = this.$.$mol_error_message(error).replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return [];
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (path.length === 0 && check(this))
                return yield [this];
            try {
                const checked = new Set();
                const sub = this.sub();
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (!check(item))
                        continue;
                    checked.add(item);
                    yield [...path, this, item];
                }
                for (const item of sub) {
                    if (!(item instanceof $mol_view))
                        continue;
                    if (checked.has(item))
                        continue;
                    yield* item.view_find(check, [...path, this]);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            finally {
                view.dom_node().scrollIntoView({ block: align });
            }
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_timeout(0, () => {
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "roots", null);
    __decorate([
        $mol_mem
    ], $mol_view, "auto", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		value(){
			return null;
		}
		theme(){
			return "$mol_theme_accent";
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.2rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .75rem;\n\tvertical-align: sub;\n\tpadding: 0 .2rem;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: .9;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n\tbox-shadow: 0 0 3px rgba(0,0,0,.5);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		activate(next){
			return (this.event_activate(next));
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		key_press(next){
			return (this.event_key_press(next));
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		status(next){
			if(next !== undefined) return next;
			return [];
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "status"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const error = this.status()?.[0];
                if (!error)
                    return '';
                if ($mol_promise_like(error)) {
                    return $mol_fail_hidden(error);
                }
                return this.$.$mol_error_message(error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n\tmin-width: 2.5rem;\n\tmin-height: 2.5rem;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus-visible {\n\tbox-shadow: inset 0 0 0 100vmax var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor]:where(:not([disabled])) {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_dom_event extends $mol_object {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        prevented(next) {
            if (next)
                this.native.preventDefault();
            return this.native.defaultPrevented;
        }
        static wrap(event) {
            return new this.$.$mol_dom_event(event);
        }
    }
    __decorate([
        $mol_action
    ], $mol_dom_event.prototype, "prevented", null);
    __decorate([
        $mol_action
    ], $mol_dom_event, "wrap", null);
    $.$mol_dom_event = $mol_dom_event;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                const event = next ? $mol_dom_event.wrap(next) : null;
                if (event?.prevented())
                    return;
                event?.prevented(true);
                this.checked(!this.checked());
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check_list) = class $mol_check_list extends ($.$mol_view) {
		option_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		option_title(id){
			return "";
		}
		option_label(id){
			return [(this.option_title(id))];
		}
		enabled(){
			return true;
		}
		option_enabled(id){
			return (this.enabled());
		}
		option_hint(id){
			return "";
		}
		items(){
			return [];
		}
		dictionary(){
			return {};
		}
		Option(id){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.option_checked(id, next)));
			(obj.label) = () => ((this.option_label(id)));
			(obj.enabled) = () => ((this.option_enabled(id)));
			(obj.hint) = () => ((this.option_hint(id)));
			(obj.minimal_height) = () => (24);
			return obj;
		}
		options(){
			return {};
		}
		keys(){
			return [];
		}
		sub(){
			return (this.items());
		}
	};
	($mol_mem_key(($.$mol_check_list.prototype), "option_checked"));
	($mol_mem_key(($.$mol_check_list.prototype), "Option"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            dictionary(next) {
                return next ?? {};
            }
            option_checked(id, next) {
                const prev = this.dictionary();
                if (next === undefined)
                    return prev[id] ?? null;
                const next_rec = { ...prev, [id]: next };
                if (next === null)
                    delete next_rec[id];
                return this.dictionary(next_rec)[id] ?? null;
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
	($.$mol_switch) = class $mol_switch extends ($.$mol_check_list) {
		value(next){
			if(next !== undefined) return next;
			return "";
		}
	};
	($mol_mem(($.$mol_switch.prototype), "value"));


;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};
	($mol_mem(($.$mol_hotkey.prototype), "keydown"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_string) = class $mol_string extends ($.$mol_view) {
		selection_watcher(){
			return null;
		}
		error_report(){
			return null;
		}
		disabled(){
			return false;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.value(next));
		}
		hint(){
			return "";
		}
		hint_visible(){
			return (this.hint());
		}
		spellcheck(){
			return true;
		}
		autocomplete_native(){
			return "";
		}
		selection_end(){
			return 0;
		}
		selection_start(){
			return 0;
		}
		keyboard(){
			return "text";
		}
		enter(){
			return "go";
		}
		length_max(){
			return +Infinity;
		}
		type(next){
			if(next !== undefined) return next;
			return "text";
		}
		event_change(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return false;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_ctrl) = () => ((this.submit_with_ctrl()));
			(obj.key) = () => ({"enter": (next) => (this.submit(next))});
			return obj;
		}
		dom_name(){
			return "input";
		}
		enabled(){
			return true;
		}
		minimal_height(){
			return 40;
		}
		autocomplete(){
			return false;
		}
		selection(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		auto(){
			return [(this.selection_watcher()), (this.error_report())];
		}
		field(){
			return {
				...(super.field()), 
				"disabled": (this.disabled()), 
				"value": (this.value_changed()), 
				"placeholder": (this.hint_visible()), 
				"spellcheck": (this.spellcheck()), 
				"autocomplete": (this.autocomplete_native()), 
				"selectionEnd": (this.selection_end()), 
				"selectionStart": (this.selection_start()), 
				"inputMode": (this.keyboard()), 
				"enterkeyhint": (this.enter())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"maxlength": (this.length_max()), 
				"type": (this.type())
			};
		}
		event(){
			return {...(super.event()), "input": (next) => (this.event_change(next))};
		}
		plugins(){
			return [(this.Submit())];
		}
	};
	($mol_mem(($.$mol_string.prototype), "value"));
	($mol_mem(($.$mol_string.prototype), "type"));
	($mol_mem(($.$mol_string.prototype), "event_change"));
	($mol_mem(($.$mol_string.prototype), "submit"));
	($mol_mem(($.$mol_string.prototype), "Submit"));
	($mol_mem(($.$mol_string.prototype), "selection"));


;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = this.dom_node();
                const from = el.selectionStart;
                const to = el.selectionEnd;
                try {
                    el.value = this.value_changed(el.value);
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                    $mol_fail_hidden(error);
                }
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            error_report() {
                try {
                    if (this.focused())
                        this.value();
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                }
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
                if (to !== from && el.selectionEnd === el.selectionStart) {
                    el.selectionEnd = to;
                }
            }
            selection_start() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionStart == null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionEnd == null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_action
        ], $mol_string.prototype, "event_change", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "error_report", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wait_user_async() {
        return new Promise(done => $mol_dom.addEventListener('click', function onclick() {
            $mol_dom.removeEventListener('click', onclick);
            done(null);
        }));
    }
    $.$mol_wait_user_async = $mol_wait_user_async;
    function $mol_wait_user() {
        return this.$mol_wire_sync(this).$mol_wait_user_async();
    }
    $.$mol_wait_user = $mol_wait_user;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                this.$.$mol_wait_user_async()
                    .then(() => native.persist())
                    .then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let buf = new Uint8Array(2 ** 12);
    function $mol_charset_buffer(size) {
        if (buf.byteLength < size)
            buf = new Uint8Array(size);
        return buf;
    }
    $.$mol_charset_buffer = $mol_charset_buffer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_charset_encode(str) {
        const buf = $mol_charset_buffer(str.length * 3);
        return buf.slice(0, $mol_charset_encode_to(str, buf));
    }
    $.$mol_charset_encode = $mol_charset_encode;
    function $mol_charset_encode_to(str, buf, from = 0) {
        let pos = from;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80) {
                buf[pos++] = code;
            }
            else if (code < 0x800) {
                buf[pos++] = 0xc0 | (code >> 6);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else if (code < 0xd800 || code >= 0xe000) {
                buf[pos++] = 0xe0 | (code >> 12);
                buf[pos++] = 0x80 | ((code >> 6) & 0x3f);
                buf[pos++] = 0x80 | (code & 0x3f);
            }
            else {
                const point = ((code - 0xd800) << 10) + str.charCodeAt(++i) + 0x2400;
                buf[pos++] = 0xf0 | (point >> 18);
                buf[pos++] = 0x80 | ((point >> 12) & 0x3f);
                buf[pos++] = 0x80 | ((point >> 6) & 0x3f);
                buf[pos++] = 0x80 | (point & 0x3f);
            }
        }
        return pos - from;
    }
    $.$mol_charset_encode_to = $mol_charset_encode_to;
    function $mol_charset_encode_size(str) {
        let size = 0;
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code < 0x80)
                size += 1;
            else if (code < 0x800)
                size += 2;
            else if (code < 0xd800 || code >= 0xe000)
                size += 3;
            else
                size += 4;
        }
        return size;
    }
    $.$mol_charset_encode_size = $mol_charset_encode_size;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            throw new Error('Not implemented');
        }
        read() {
            throw new Error('Not implemented');
        }
        truncate(size) {
            throw new Error('Not implemented');
        }
        flush() {
            throw new Error('Not implemented');
        }
        close() {
            throw new Error('Not implemented');
        }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let file_modes;
    (function (file_modes) {
        file_modes[file_modes["create"] = $node.fs.constants.O_CREAT] = "create";
        file_modes[file_modes["exists_truncate"] = $node.fs.constants.O_TRUNC] = "exists_truncate";
        file_modes[file_modes["exists_fail"] = $node.fs.constants.O_EXCL] = "exists_fail";
        file_modes[file_modes["read_only"] = $node.fs.constants.O_RDONLY] = "read_only";
        file_modes[file_modes["write_only"] = $node.fs.constants.O_WRONLY] = "write_only";
        file_modes[file_modes["read_write"] = $node.fs.constants.O_RDWR] = "read_write";
        file_modes[file_modes["append"] = $node.fs.constants.O_APPEND] = "append";
    })(file_modes || (file_modes = {}));
    function mode_mask(modes) {
        return modes.reduce((res, mode) => res | file_modes[mode], 0);
    }
    class $mol_file_transaction_node extends $mol_file_transaction {
        descr() {
            $mol_wire_solid();
            return $node.fs.openSync(this.path(), mode_mask(this.modes()));
        }
        write({ buffer, offset = 0, length, position = null }) {
            if (Array.isArray(buffer)) {
                return $node.fs.writevSync(this.descr(), buffer, position ?? undefined);
            }
            if (typeof buffer === 'string') {
                return $node.fs.writeSync(this.descr(), buffer, position);
            }
            length = length ?? buffer.byteLength;
            return $node.fs.writeSync(this.descr(), buffer, offset, length, position);
        }
        truncate(size) {
            $node.fs.ftruncateSync(this.descr());
        }
        read() {
            return $mol_file_node_buffer_normalize($node.fs.readFileSync(this.descr()));
        }
        flush() {
            $node.fs.fsyncSync(this.descr());
        }
        close() {
            $node.fs.closeSync(this.descr());
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_transaction_node.prototype, "descr", null);
    $.$mol_file_transaction_node = $mol_file_transaction_node;
    $.$mol_file_transaction = $mol_file_transaction_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            if (!this.root()) {
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            this.changed.add(file);
            if (!this.watching)
                return;
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        static watch_debounce() { return 500; }
        static flush() {
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            this.flush();
            this.watching = false;
            this.changed.add(this.absolute(path));
        }
        static unwatched(side_effect, affected_dir) {
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        buffer(next) {
            let readed = new Uint8Array();
            if (next === undefined) {
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        watcher() {
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function $mol_file_node_buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    $.$mol_file_node_buffer_normalize = $mol_file_node_buffer_normalize;
    class $mol_file_node extends $mol_file {
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher(reset) {
            const path = this.path();
            const root = this.root();
            if (!root && !this.exists())
                return super.watcher();
            let watcher;
            try {
                watcher = $node.fs.watch(path);
            }
            catch (error) {
                if (!(error instanceof Error))
                    error = new Error('Unknown watch error', { cause: error });
                error.message += '\n' + path;
                if (root || error.code !== 'ENOENT') {
                    this.$.$mol_fail_log(error);
                }
                return super.watcher();
            }
            watcher.on('change', (type, name) => {
                if (!name)
                    return;
                const path = $node.path.join(this.path(), name.toString());
                this.constructor.changed_add(type, path);
            });
            watcher.on('error', e => this.$.$mol_fail_log(e));
            let destructed = false;
            watcher.on('close', () => {
                if (!destructed)
                    setTimeout(() => $mol_wire_async(this).watcher(null), 500);
            });
            return {
                destructor() {
                    destructed = true;
                    watcher.close();
                }
            };
        }
        info(path) {
            try {
                return stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    if (error.code === 'ENOENT')
                        return null;
                    if (error.code === 'EPERM')
                        return null;
                    error.message += '\n' + path;
                    this.$.$mol_fail_hidden(error);
                }
            }
            return null;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path, { recursive: true });
                return null;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'EEXIST')
                        return null;
                    e.message += '\n' + path;
                    this.$.$mol_fail_hidden(e);
                }
            }
        }
        copy(to) {
            $node.fs.copyFileSync(this.path(), to);
        }
        drop() {
            $node.fs.unlinkSync(this.path());
        }
        read() {
            const path = this.path();
            try {
                return $mol_file_node_buffer_normalize($node.fs.readFileSync(path));
            }
            catch (error) {
                if (!$mol_promise_like(error)) {
                    error.message += '\n' + path;
                }
                $mol_fail_hidden(error);
            }
        }
        write(buffer) {
            const path = this.path();
            try {
                $node.fs.writeFileSync(path, buffer);
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    error.message += '\n' + path;
                }
                return this.$.$mol_fail_hidden(error);
            }
        }
        kids() {
            const path = this.path();
            try {
                const kids = $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
                return kids;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'ENOENT')
                        return [];
                    e.message += '\n' + path;
                }
                $mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor
                .relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        readable(opts) {
            const { Readable } = $node['node:stream'];
            const stream = $node.fs.createReadStream(this.path(), {
                flags: 'r',
                autoClose: true,
                start: opts?.start,
                end: opts?.end,
                encoding: 'binary',
            });
            return Readable.toWeb(stream);
        }
        writable(opts) {
            const { Writable } = $node['node:stream'];
            const stream = $node.fs.createWriteStream(this.path(), {
                flags: 'w+',
                autoClose: true,
                start: opts?.start,
                encoding: 'binary',
            });
            return Writable.toWeb(stream);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "info", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "copy", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "drop", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "read", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "write", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node.prototype, "readable", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "writable", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local_node extends $mol_state_local {
        static dir() {
            const base = process.env.XDG_DATA_HOME || ($node.os.homedir() + '/.local/share');
            return $mol_file.absolute(base).resolve('./mol_state_local');
        }
        static value(key, next) {
            const file = this.dir().resolve(encodeURIComponent(key) + '.json');
            if (next === null) {
                file.exists(false);
                return null;
            }
            const arg = next === undefined ? undefined : JSON.stringify(next);
            return JSON.parse(file.text(arg) || 'null');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local_node, "dir", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local_node, "value", null);
    $.$mol_state_local_node = $mol_state_local_node;
    $.$mol_state_local = $mol_state_local_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));

;
	($.$mol_list) = class $mol_list extends ($.$mol_view) {
		gap_before(){
			return 0;
		}
		Gap_before(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_before())});
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		gap_after(){
			return 0;
		}
		Gap_after(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_after())});
			return obj;
		}
		rows(){
			return [
				(this.Gap_before()), 
				(this.Empty()), 
				(this.Gap_after())
			];
		}
		render_visible_only(){
			return true;
		}
		render_over(){
			return 0.1;
		}
		sub(){
			return (this.rows());
		}
		item_height_min(id){
			return 1;
		}
		item_width_min(id){
			return 1;
		}
		view_window_shift(next){
			if(next !== undefined) return next;
			return 0;
		}
		view_window(){
			return [0, 0];
		}
	};
	($mol_mem(($.$mol_list.prototype), "Gap_before"));
	($mol_mem(($.$mol_list.prototype), "Empty"));
	($mol_mem(($.$mol_list.prototype), "Gap_after"));
	($mol_mem(($.$mol_list.prototype), "view_window_shift"));


;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                const next = (rows.length === 0) ? [this.Empty()] : rows;
                const prev = $mol_mem_cached(() => this.sub());
                const [start, end] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                if (prev && $mol_mem_cached(() => prev[start] !== next[start])) {
                    const index = $mol_mem_cached(() => next.indexOf(prev[start])) ?? -1;
                    if (index >= 0)
                        this.view_window_shift(index - start);
                }
                return next;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                const shift = this.view_window_shift();
                this.view_window_shift(0);
                min += shift;
                max += shift;
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = this.item_height_min(min);
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top < limit_top) && (bottom < limit_bottom) && (max < kids.length)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom > limit_bottom) && (top > limit_top) && (min > 0)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (anchoring && ((top2 > limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= this.item_height_min(min2);
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += this.item_height_min(max2);
                    ++max2;
                }
                return [min2, max2];
            }
            item_height_min(index) {
                try {
                    return this.sub()[index]?.minimal_height() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            row_width_min(index) {
                try {
                    return this.sub()[index]?.minimal_width() ?? 0;
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 0;
                }
            }
            gap_before() {
                let gap = 0;
                const skipped = this.view_window()[0];
                for (let i = 0; i < skipped; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            gap_after() {
                let gap = 0;
                const from = this.view_window()[1];
                const to = this.sub().length;
                for (let i = from; i < to; ++i)
                    gap += this.item_height_min(i);
                return gap;
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                let height = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    height += this.item_height_min(i);
                return height;
            }
            minimal_width() {
                let width = 0;
                const len = this.sub().length;
                for (let i = 0; i < len; ++i)
                    width = Math.max(width, this.item_width_min(i));
                return width;
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_width", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: 1.5rem;\n\t/* will-change: contents; */\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_labeler) = class $mol_labeler extends ($.$mol_list) {
		label(){
			return [(this.title())];
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (32);
			(obj.sub) = () => ((this.label()));
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (24);
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_labeler.prototype), "Label"));
	($mol_mem(($.$mol_labeler.prototype), "Content"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n\tmin-height: 2.5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_major) = class $mol_button_major extends ($.$mol_button_minor) {
		theme(){
			return "$mol_theme_base";
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_wire_set extends Set {
        pub = new $mol_wire_pub;
        has(value) {
            this.pub.promote();
            return super.has(value);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        add(value) {
            if (super.has(value))
                return this;
            super.add(value);
            this.pub.emit();
            return this;
        }
        delete(value) {
            const res = super.delete(value);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(val, next) {
            if (next === undefined)
                return this.has(val);
            if (next)
                this.add(val);
            else
                this.delete(val);
            return next;
        }
    }
    $.$mol_wire_set = $mol_wire_set;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_rest_code;
    (function ($mol_rest_code) {
        $mol_rest_code[$mol_rest_code["Continue"] = 100] = "Continue";
        $mol_rest_code[$mol_rest_code["Switching protocols"] = 101] = "Switching protocols";
        $mol_rest_code[$mol_rest_code["Processing"] = 102] = "Processing";
        $mol_rest_code[$mol_rest_code["OK"] = 200] = "OK";
        $mol_rest_code[$mol_rest_code["Created"] = 201] = "Created";
        $mol_rest_code[$mol_rest_code["Accepted"] = 202] = "Accepted";
        $mol_rest_code[$mol_rest_code["Non-Authoritative Information"] = 203] = "Non-Authoritative Information";
        $mol_rest_code[$mol_rest_code["No Content"] = 204] = "No Content";
        $mol_rest_code[$mol_rest_code["Reset Content"] = 205] = "Reset Content";
        $mol_rest_code[$mol_rest_code["Partial Content"] = 206] = "Partial Content";
        $mol_rest_code[$mol_rest_code["Multi Status"] = 207] = "Multi Status";
        $mol_rest_code[$mol_rest_code["Already Reported"] = 208] = "Already Reported";
        $mol_rest_code[$mol_rest_code["IM Used"] = 226] = "IM Used";
        $mol_rest_code[$mol_rest_code["Multiple Choices"] = 300] = "Multiple Choices";
        $mol_rest_code[$mol_rest_code["Moved Permanently"] = 301] = "Moved Permanently";
        $mol_rest_code[$mol_rest_code["Found"] = 302] = "Found";
        $mol_rest_code[$mol_rest_code["See Other"] = 303] = "See Other";
        $mol_rest_code[$mol_rest_code["Not Modified"] = 304] = "Not Modified";
        $mol_rest_code[$mol_rest_code["Use Proxy"] = 305] = "Use Proxy";
        $mol_rest_code[$mol_rest_code["Temporary Redirect"] = 307] = "Temporary Redirect";
        $mol_rest_code[$mol_rest_code["Bad Request"] = 400] = "Bad Request";
        $mol_rest_code[$mol_rest_code["Unauthorized"] = 401] = "Unauthorized";
        $mol_rest_code[$mol_rest_code["Payment Required"] = 402] = "Payment Required";
        $mol_rest_code[$mol_rest_code["Forbidden"] = 403] = "Forbidden";
        $mol_rest_code[$mol_rest_code["Not Found"] = 404] = "Not Found";
        $mol_rest_code[$mol_rest_code["Method Not Allowed"] = 405] = "Method Not Allowed";
        $mol_rest_code[$mol_rest_code["Not Acceptable"] = 406] = "Not Acceptable";
        $mol_rest_code[$mol_rest_code["Proxy Authentication Required"] = 407] = "Proxy Authentication Required";
        $mol_rest_code[$mol_rest_code["Request Timeout"] = 408] = "Request Timeout";
        $mol_rest_code[$mol_rest_code["Conflict"] = 409] = "Conflict";
        $mol_rest_code[$mol_rest_code["Gone"] = 410] = "Gone";
        $mol_rest_code[$mol_rest_code["Length Required"] = 411] = "Length Required";
        $mol_rest_code[$mol_rest_code["Precondition Failed"] = 412] = "Precondition Failed";
        $mol_rest_code[$mol_rest_code["Request Entity Too Large"] = 413] = "Request Entity Too Large";
        $mol_rest_code[$mol_rest_code["Request URI Too Long"] = 414] = "Request URI Too Long";
        $mol_rest_code[$mol_rest_code["Unsupported Media Type"] = 415] = "Unsupported Media Type";
        $mol_rest_code[$mol_rest_code["Requested Range Not Satisfiable"] = 416] = "Requested Range Not Satisfiable";
        $mol_rest_code[$mol_rest_code["Expectation Failed"] = 417] = "Expectation Failed";
        $mol_rest_code[$mol_rest_code["Teapot"] = 418] = "Teapot";
        $mol_rest_code[$mol_rest_code["Unprocessable Entity"] = 422] = "Unprocessable Entity";
        $mol_rest_code[$mol_rest_code["Locked"] = 423] = "Locked";
        $mol_rest_code[$mol_rest_code["Failed Dependency"] = 424] = "Failed Dependency";
        $mol_rest_code[$mol_rest_code["Upgrade Required"] = 426] = "Upgrade Required";
        $mol_rest_code[$mol_rest_code["Precondition Required"] = 428] = "Precondition Required";
        $mol_rest_code[$mol_rest_code["Too Many Requests"] = 429] = "Too Many Requests";
        $mol_rest_code[$mol_rest_code["Request Header Fields Too Large"] = 431] = "Request Header Fields Too Large";
        $mol_rest_code[$mol_rest_code["Unavailable For Legal Reasons"] = 451] = "Unavailable For Legal Reasons";
        $mol_rest_code[$mol_rest_code["Internal Server Error"] = 500] = "Internal Server Error";
        $mol_rest_code[$mol_rest_code["Not Implemented"] = 501] = "Not Implemented";
        $mol_rest_code[$mol_rest_code["Bad Gateway"] = 502] = "Bad Gateway";
        $mol_rest_code[$mol_rest_code["Service Unavailable"] = 503] = "Service Unavailable";
        $mol_rest_code[$mol_rest_code["Gateway Timeout"] = 504] = "Gateway Timeout";
        $mol_rest_code[$mol_rest_code["HTTP Version Not Supported"] = 505] = "HTTP Version Not Supported";
        $mol_rest_code[$mol_rest_code["Insufficient Storage"] = 507] = "Insufficient Storage";
        $mol_rest_code[$mol_rest_code["Loop Detected"] = 508] = "Loop Detected";
        $mol_rest_code[$mol_rest_code["Not Extended"] = 510] = "Not Extended";
        $mol_rest_code[$mol_rest_code["Network Authentication Required"] = 511] = "Network Authentication Required";
        $mol_rest_code[$mol_rest_code["Network Read Timeout Error"] = 598] = "Network Read Timeout Error";
        $mol_rest_code[$mol_rest_code["Network Connect Timeout Error"] = 599] = "Network Connect Timeout Error";
    })($mol_rest_code = $.$mol_rest_code || ($.$mol_rest_code = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port extends $mol_object {
        send_code(code) { }
        send_type(mime) { }
        send_data(data) {
            if (data === null)
                return this.send_nil();
            if (typeof data === 'string')
                return this.send_text(data);
            if (data instanceof Uint8Array)
                return this.send_bin(data);
            if (data instanceof $mol_dom_context.Element)
                return this.send_dom(data);
            return this.send_json(data);
        }
        send_nil() {
            this.send_code(204);
        }
        send_bin(data) {
            this.send_code(200);
            this.send_type('application/octet-stream');
        }
        send_text(data) {
            this.send_code(200);
            this.send_type('text/plain;charset=utf-8');
            this.send_bin($mol_charset_encode(data));
        }
        send_json(data) {
            this.send_code(200);
            this.send_type('application/json');
            this.send_text(JSON.stringify(data));
        }
        send_dom(data) {
            this.send_code(200);
            this.send_type('text/html;charset=utf-8');
            this.send_text($mol_dom_serialize(data));
        }
        static make(config) {
            return super.make(config);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_data", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_text", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_json", null);
    __decorate([
        $mol_action
    ], $mol_rest_port.prototype, "send_dom", null);
    __decorate([
        ($mol_action)
    ], $mol_rest_port, "make", null);
    $.$mol_rest_port = $mol_rest_port;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        return src.toBase64();
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode_node(str) {
        if (!str)
            return '';
        const buf = Buffer.isBuffer(str) ? str : Buffer.from(str);
        return buf.toString('base64');
    }
    $.$mol_base64_encode_node = $mol_base64_encode_node;
    if (!('toBase64' in Uint8Array.prototype)) {
        $.$mol_base64_encode = $mol_base64_encode_node;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        return Uint8Array.fromBase64(base64);
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_node(base64Str) {
        const buffer = Buffer.from(base64Str, 'base64');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_decode_node = $mol_base64_decode_node;
    if (!('fromBase64' in Uint8Array)) {
        $.$mol_base64_decode = $mol_base64_decode_node;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_ae_encode(buffer) {
        return $mol_base64_encode(buffer).replace(/\+/g, 'æ').replace(/\//g, 'Æ').replace(/=/g, '');
    }
    $.$mol_base64_ae_encode = $mol_base64_ae_encode;
    function $mol_base64_ae_decode(str) {
        return $mol_base64_decode(str.replace(/æ/g, '+').replace(/Æ/g, '/'));
    }
    $.$mol_base64_ae_decode = $mol_base64_ae_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_buffer extends DataView {
        [Symbol.toStringTag] = this.constructor.name + '<>';
        static from(array) {
            if (typeof array === 'number')
                array = new Uint8Array(array);
            if (typeof array === 'string')
                array = $mol_base64_ae_decode(array);
            if (!ArrayBuffer.isView(array))
                array = new Uint8Array(array);
            return new this(array.buffer, array.byteOffset, array.byteLength);
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        getUint48(offset, LE = false) {
            if (offset % 4) {
                return this.getUint16(offset, LE) + this.getUint32(offset + 2, LE) * 2 ** 16;
            }
            else {
                return this.getUint32(offset, LE) + this.getUint16(offset + 4, LE) * 2 ** 32;
            }
        }
        setUint48(offset, value, LE = false) {
            if (offset % 4) {
                this.setUint16(offset, value & ((1 << 16) - 1), LE);
                this.setUint32(offset + 2, (value / 2 ** 16) | 0, LE);
            }
            else {
                this.setUint32(offset, value | 0, LE);
                this.setUint16(offset + 4, (value / 2 ** 32) | 0, LE);
            }
        }
        int8(offset, next) {
            if (next === undefined)
                return this.getInt8(offset);
            if (next >= -(2 ** 7) && next < 2 ** 7)
                return this.setInt8(offset, next), next;
            $mol_fail(new Error(`Wrong int8 value ${next}`));
        }
        uint8(offset, next) {
            if (next === undefined)
                return this.getUint8(offset);
            if (next >= 0 && next < 2 ** 8)
                return this.setUint8(offset, next), next;
            $mol_fail(new Error(`Wrong uint8 value ${next}`));
        }
        int16(offset, next) {
            if (next === undefined)
                return this.getInt16(offset, true);
            if (next >= -(2 ** 15) && next < 2 ** 15)
                return this.setInt16(offset, next, true), next;
            $mol_fail(new Error(`Wrong int16 value ${next}`));
        }
        uint16(offset, next) {
            if (next === undefined)
                return this.getUint16(offset, true);
            if (next >= 0 && next < 2 ** 16)
                return this.setUint16(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint16 value ${next}`));
        }
        int32(offset, next) {
            if (next === undefined)
                return this.getInt32(offset, true);
            if (next >= -(2 ** 31) && next < 2 ** 31)
                return this.setInt32(offset, next, true), next;
            $mol_fail(new Error(`Wrong int32 value ${next}`));
        }
        uint32(offset, next) {
            if (next === undefined)
                return this.getUint32(offset, true);
            if (next >= 0 && next < 2 ** 32)
                return this.setUint32(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint32 value ${next}`));
        }
        int64(offset, next) {
            if (next === undefined)
                return this.getBigInt64(offset, true);
            if (next >= -(2n ** 63n) && next < 2n ** 63n)
                return this.setBigInt64(offset, next, true), next;
            $mol_fail(new Error(`Wrong int64 value ${next}`));
        }
        uint48(offset, next) {
            if (next === undefined)
                return this.getUint48(offset, true);
            if (next >= 0 && next < 2 ** 48)
                return this.setUint48(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint48 value ${next}`));
        }
        uint64(offset, next) {
            if (next === undefined)
                return this.getBigUint64(offset, true);
            if (next >= 0n && next < 2n ** 64n)
                return this.setBigUint64(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint64 value ${next}`));
        }
        float16(offset, next) {
            if (next !== undefined)
                this.setFloat16(offset, next, true);
            return this.getFloat16(offset, true);
        }
        float32(offset, next) {
            if (next !== undefined)
                this.setFloat32(offset, next, true);
            return this.getFloat32(offset, true);
        }
        float64(offset, next) {
            if (next !== undefined)
                this.setFloat64(offset, next, true);
            return this.getFloat64(offset, true);
        }
        asArray() {
            return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
        }
        toString() {
            return $mol_base64_ae_encode(this.asArray());
        }
    }
    $.$mol_buffer = $mol_buffer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_url_encode(buffer) {
        return buffer.toBase64({ alphabet: 'base64url', omitPadding: true });
    }
    $.$mol_base64_url_encode = $mol_base64_url_encode;
    function $mol_base64_url_decode(str) {
        return Uint8Array.fromBase64(str, { alphabet: 'base64url' });
    }
    $.$mol_base64_url_decode = $mol_base64_url_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_url_encode_node(str) {
        if (!str)
            return '';
        const buf = Buffer.isBuffer(str) ? str : Buffer.from(str);
        return buf.toString('base64url').replace(/=/g, '');
    }
    $.$mol_base64_url_encode_node = $mol_base64_url_encode_node;
    if (!('toBase64' in Uint8Array.prototype)) {
        $.$mol_base64_url_encode = $mol_base64_url_encode_node;
    }
    function $mol_base64_url_decode_node(str) {
        const buffer = Buffer.from(str, 'base64url');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_url_decode_node = $mol_base64_url_decode_node;
    if (!('fromBase64' in Uint8Array)) {
        $.$mol_base64_url_decode = $mol_base64_url_decode_node;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto2_key extends $mol_buffer {
        static size_str = 43;
        static size_bin = 32;
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array(serial.match(/.{43}/g)
                    ?.flatMap(chunk => [...$mol_base64_url_decode(chunk)])
                    ?? $mol_fail(new Error('Str key too short', { cause: {
                            min: 43,
                            real: serial.length,
                        } })));
            }
            return super.from(serial);
        }
        asArray() {
            const size = this.constructor.size_bin;
            if (this.byteLength < size) {
                return $mol_fail(new Error('Bin key too short', { cause: {
                        min: size,
                        real: this.byteLength,
                    } }));
            }
            return new Uint8Array(this.buffer, this.byteOffset, size);
        }
        toString() {
            return $mol_base64_url_encode(this.asArray());
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_key.prototype, "toString", null);
    $.$mol_crypto2_key = $mol_crypto2_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_native = $node.crypto.webcrypto;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto_restack(error) {
        error = new Error(error instanceof Error ? error.message : String(error), { cause: error });
        $mol_fail_hidden(error);
    }
    $.$mol_crypto_restack = $mol_crypto_restack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto2_auditor extends $mol_crypto2_key {
        async native() {
            return $mol_crypto_native.subtle.importKey('jwk', {
                crv: "Ed25519",
                ext: true,
                key_ops: ['verify'],
                kty: "OKP",
                x: this.toString(),
            }, "Ed25519", Boolean('extractable'), ['verify']).catch($mol_crypto_restack);
        }
        async verify(data, sign) {
            return await $mol_crypto_native.subtle.verify("Ed25519", await this.native(), sign, data).catch($mol_crypto_restack);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_auditor.prototype, "native", null);
    $.$mol_crypto2_auditor = $mol_crypto2_auditor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto2_socket extends $mol_crypto2_key {
        async native() {
            return await $mol_crypto_native.subtle.importKey('jwk', {
                crv: 'X25519',
                ext: true,
                kty: 'OKP',
                key_ops: [],
                x: this.toString(),
            }, "X25519", true, []).catch($mol_crypto_restack);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_socket.prototype, "native", null);
    $.$mol_crypto2_socket = $mol_crypto2_socket;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto2_public extends $mol_crypto2_key {
        static size_str = 86;
        static size_bin = 64;
        auditor() {
            return $mol_crypto2_auditor.from(this.asArray().subarray(0, 32));
        }
        socket() {
            return $mol_crypto2_socket.from(this.asArray().subarray(32, 64));
        }
        toString() {
            return this.auditor().toString() + this.socket().toString();
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_public.prototype, "auditor", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_public.prototype, "socket", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_public.prototype, "toString", null);
    $.$mol_crypto2_public = $mol_crypto2_public;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let sponge = new Uint32Array(80);
    function $mol_crypto2_hash(input) {
        const data = input instanceof Uint8Array
            ? input
            : new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        const bits = data.byteLength << 3;
        const kbits = bits >> 5;
        const kword = 0x80 << (24 - bits & 0b11111);
        const bytes = 16 + ((bits + 64) >>> 9 << 4);
        const klens = bytes - 1;
        const wlen = data.byteLength >> 2 << 2;
        let tail = 0;
        for (let i = wlen; i < data.length; ++i) {
            tail |= data[i] << ((3 - i & 0b11) << 3);
        }
        const hash = new Int32Array([1732584193, -271733879, -1732584194, 271733878, -1009589776]);
        for (let i = 0; i < bytes; i += 16) {
            let h0 = hash[0];
            let h1 = hash[1];
            let h2 = hash[2];
            let h3 = hash[3];
            let h4 = hash[4];
            for (let j = 0; j < 16; ++j) {
                const k = i + j;
                if (k === klens) {
                    sponge[j] = bits;
                }
                else {
                    const pos = k << 2;
                    let word = pos === wlen ? tail :
                        pos > wlen ? 0 :
                            (data[pos] << 24 | data[pos + 1] << 16 | data[pos + 2] << 8 | data[pos + 3]);
                    if (k === kbits)
                        word |= kword;
                    sponge[j] = word;
                }
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 16; j < 20; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 20; j < 40; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) + 1859775393 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 40; j < 60; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | h1 & h3 | h2 & h3) - 1894007588 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 60; j < 80; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) - 899497514 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            hash[0] += h0;
            hash[1] += h1;
            hash[2] += h2;
            hash[3] += h3;
            hash[4] += h4;
        }
        for (let i = 0; i < 20; ++i) {
            const word = hash[i];
            hash[i] = word << 24 | word << 8 & 0xFF0000 | word >>> 8 & 0xFF00 | word >>> 24 & 0xFF;
        }
        return new Uint8Array(hash.buffer);
    }
    $.$mol_crypto2_hash = $mol_crypto2_hash;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_hash = $mol_crypto2_hash;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_link_compare(left, right) {
        return (right.str > left.str ? 1 : right.str < left.str ? -1 : 0);
    }
    $.$giper_baza_link_compare = $giper_baza_link_compare;
    class $giper_baza_link extends Object {
        str;
        constructor(str) {
            super();
            this.str = str;
            if (!/^(([a-zæA-ZÆ0-9]{8})?_){0,3}([a-zæA-ZÆ0-9]{8})?$/.test(str)) {
                $mol_fail(new Error(`Wrong Link (${str})`));
            }
            this.str = str.replace(/AAAAAAAA/g, '').replace(/_+$/, '');
        }
        static hole = new this('');
        static check(val) {
            try {
                new this(val);
                return val;
            }
            catch {
                return null;
            }
        }
        [$mol_key_handle]() {
            return this.str;
        }
        toString() {
            return this.str;
        }
        toJSON() {
            return this.str;
        }
        [Symbol.toPrimitive]() {
            return this.str;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({ 'color': 'darkorange' }, this.str || '_');
        }
        toBin() {
            const str = this.relate(_base).str;
            const norm = str && str
                .replace(/^___/, '')
                .split('_')
                .map(numb => numb || 'AAAAAAAA')
                .join('');
            return $mol_base64_ae_decode(norm);
        }
        static from_int(int) {
            return new this($mol_base64_ae_encode(new Uint8Array(new BigUint64Array([BigInt(int)]).buffer, 0, 6)));
        }
        static from_bin(bin) {
            const str = [...$mol_base64_ae_encode(bin).match(/(.{8})/g) ?? []].join('_');
            return new this(str).resolve(_base);
        }
        static _hash_cache = new WeakMap();
        static hash_bin(bin) {
            let link = this._hash_cache.get(bin);
            if (link)
                return link;
            const hash = $mol_crypto_hash(bin);
            link = this.from_bin(new Uint8Array(hash.buffer, 0, 12));
            this._hash_cache.set(bin, link);
            return link;
        }
        static hash_str(str) {
            return this.hash_bin($mol_charset_encode(str));
        }
        peer() {
            return new $giper_baza_link(this.str.split('_')[0] ?? '');
        }
        area() {
            return new $giper_baza_link(this.str.split('_')[2] ?? '');
        }
        head() {
            return new $giper_baza_link(this.str.split('_')[3] ?? '');
        }
        lord() {
            return new $giper_baza_link(this.str.split('_').slice(0, 2).join('_'));
        }
        land() {
            return new $giper_baza_link(this.str.split('_').slice(0, 3).join('_'));
        }
        relate(base) {
            if (base.str === '')
                return this;
            base = base.land();
            if (this.land().str !== base.str)
                return this;
            const head = this.head();
            return new $giper_baza_link('___' + head);
        }
        resolve(base) {
            if (base.str === '')
                return this;
            if (this.str === '')
                return base.land();
            if (this.str.length > 16)
                return this;
            const parts = base.land().toString().split('_');
            while (parts.length < 3)
                parts.push('');
            parts.push(this.str.replace(/^___/, ''));
            return new $giper_baza_link(parts.join('_'));
        }
        mix(mixin) {
            if (mixin instanceof $giper_baza_link)
                mixin = mixin.toBin();
            const mix = this.toBin();
            for (let i = 0; i < mix.length; ++i)
                mix[i] ^= mixin[i];
            return mix;
        }
    }
    $.$giper_baza_link = $giper_baza_link;
    let _base = $giper_baza_link.hole;
    function $giper_baza_link_base(base, task) {
        const prev = _base;
        _base = base;
        try {
            return task();
        }
        finally {
            _base = prev;
        }
    }
    $.$giper_baza_link_base = $giper_baza_link_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto2_signer extends $mol_crypto2_auditor {
        static size_sign = 64;
        static async generate() {
            const pair = await $mol_crypto_native.subtle.generateKey("Ed25519", Boolean('extractable'), ['sign', 'verify']).catch($mol_crypto_restack);
            const { x, d } = await $mol_crypto_native.subtle.exportKey('jwk', pair.privateKey).catch($mol_crypto_restack);
            return this.from(x + d);
        }
        async nativePrivate() {
            return await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "Ed25519",
                ext: true,
                key_ops: ['sign'],
                kty: "OKP",
                x: this.toString(),
                d: this.toStringPrivate(),
            }, "Ed25519", Boolean('extractable'), ['sign']).catch($mol_crypto_restack);
        }
        asArrayPrivate() {
            return new Uint8Array(this.buffer, this.byteOffset + 32, 32);
        }
        toStringPrivate() {
            return $mol_base64_url_encode(this.asArrayPrivate());
        }
        auditor() {
            return $mol_crypto2_auditor.from(this.asArray());
        }
        async sign(data) {
            return new Uint8Array(await $mol_crypto_native.subtle.sign("Ed25519", await this.nativePrivate(), data).catch($mol_crypto_restack));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_signer.prototype, "nativePrivate", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_signer.prototype, "toStringPrivate", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_signer.prototype, "auditor", null);
    $.$mol_crypto2_signer = $mol_crypto2_signer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto2_nonce() {
        return $mol_crypto_native.getRandomValues(new Uint8Array(16));
    }
    $.$mol_crypto2_nonce = $mol_crypto2_nonce;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_salt = $mol_crypto2_nonce;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto_sacred extends $mol_buffer {
        static size = 16;
        static make() {
            return this.from($mol_crypto_salt());
        }
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array([
                    ...$mol_base64_url_decode(serial),
                ]);
            }
            if (!(serial instanceof Uint8Array)) {
                serial = new Uint8Array(serial.buffer, serial.byteOffset, serial.byteLength);
            }
            ;
            serial[0] = 0xFF;
            const sacred = super.from(serial);
            return sacred;
        }
        static async from_native(native) {
            const buf = await $mol_crypto_native.subtle.exportKey('raw', native).catch($mol_crypto_restack);
            const sacred = this.from(new Uint8Array(buf));
            sacred._native = native;
            return sacred;
        }
        constructor(buffer, byteOffset, byteLength) {
            super(buffer, byteOffset, byteLength);
            if (this.getUint8(0) !== 0xFF)
                $mol_fail(new Error('Buffer should starts with 0xFF byte'));
        }
        toString() {
            return $mol_base64_url_encode(this.asArray());
        }
        _native;
        async native() {
            return this._native ?? (this._native = await $mol_crypto_native.subtle.importKey('raw', this, {
                name: 'AES-CBC',
                length: 128,
            }, true, ['encrypt', 'decrypt']).catch($mol_crypto_restack));
        }
        async encrypt(open, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.encrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), open).catch($mol_crypto_restack));
        }
        async decrypt(closed, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.decrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), closed).catch($mol_crypto_restack));
        }
        async close(opened, salt) {
            if (opened.getUint8(0) !== 0xFF)
                throw new Error('Closable buffer should starts with 0xFF');
            const trimed = new Uint8Array(opened.buffer, opened.byteOffset + 1, opened.byteLength - 1);
            return this.encrypt(trimed, salt);
        }
        async open(closed, salt) {
            const trimed = await this.decrypt(closed, salt);
            if (trimed.byteLength !== closed.byteLength - 1)
                throw new Error('Length of opened buffer should be ' + (closed.byteLength - 1));
            const opened = new Uint8Array(closed.byteLength);
            opened[0] = 0xFF;
            opened.set(trimed, 1);
            return opened;
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_sacred.prototype, "toString", null);
    $.$mol_crypto_sacred = $mol_crypto_sacred;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto2_cipher extends $mol_crypto2_socket {
        static size_secret = 16;
        static async generate() {
            const pair = await $mol_crypto_native.subtle.generateKey("X25519", Boolean('extractable'), ['deriveKey']).catch($mol_crypto_restack);
            const { x, d } = await $mol_crypto_native.subtle.exportKey('jwk', pair.privateKey).catch($mol_crypto_restack);
            return this.from(x + d);
        }
        async nativePrivate() {
            return $mol_crypto_native.subtle.importKey('jwk', {
                crv: 'X25519',
                ext: true,
                kty: 'OKP',
                key_ops: ['deriveKey', 'deriveBits'],
                x: this.toString(),
                d: this.toStringPrivate(),
            }, "X25519", Boolean('extractable'), ['deriveKey', 'deriveBits']).catch($mol_crypto_restack);
        }
        asArrayPrivate() {
            return new Uint8Array(this.buffer, this.byteOffset + 32, 32);
        }
        toStringPrivate() {
            return $mol_base64_url_encode(this.asArrayPrivate());
        }
        socket() {
            return $mol_crypto2_socket.from(this.asArray());
        }
        async secret(pub) {
            return $mol_crypto_sacred.from(new Uint8Array(await $mol_crypto_native.subtle.deriveBits({
                name: "X25519",
                public: await pub.native(),
            }, await this.nativePrivate(), $mol_crypto_sacred.size * 8).catch($mol_crypto_restack)));
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_cipher.prototype, "nativePrivate", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_cipher.prototype, "toStringPrivate", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_cipher.prototype, "socket", null);
    $.$mol_crypto2_cipher = $mol_crypto2_cipher;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_crypto2_private extends $mol_crypto2_public {
        static async generate() {
            const [signer, cipher] = await Promise.all([
                $mol_crypto2_signer.generate(),
                $mol_crypto2_cipher.generate(),
            ]);
            const key = $mol_crypto2_private.from($mol_crypto2_public.size_bin + $mol_crypto2_private.size_bin);
            key.asArray().set(signer.asArray(), 0);
            key.asArray().set(cipher.asArray(), 32);
            key.asArrayPrivate().set(signer.asArrayPrivate(), 0);
            key.asArrayPrivate().set(cipher.asArrayPrivate(), 32);
            return key;
        }
        signer() {
            const signer = $mol_crypto2_signer.from($mol_crypto2_auditor.size_bin + $mol_crypto2_signer.size_bin);
            signer.asArray().set(this.asArray().subarray(0, 32));
            signer.asArrayPrivate().set(this.asArrayPrivate().subarray(0, 32));
            return signer;
        }
        cipher() {
            const cipher = $mol_crypto2_cipher.from($mol_crypto2_socket.size_bin + $mol_crypto2_cipher.size_bin);
            cipher.asArray().set(this.asArray().subarray(32, 64));
            cipher.asArrayPrivate().set(this.asArrayPrivate().subarray(32, 64));
            return cipher;
        }
        public() {
            return $mol_crypto2_public.from(this.asArray());
        }
        asArrayPrivate() {
            return new Uint8Array(this.buffer, this.byteOffset + 64, 64);
        }
        toStringPrivate() {
            return this.signer().toStringPrivate() + this.cipher().toStringPrivate();
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_private.prototype, "signer", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_private.prototype, "cipher", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_private.prototype, "public", null);
    __decorate([
        $mol_memo.method
    ], $mol_crypto2_private.prototype, "toStringPrivate", null);
    $.$mol_crypto2_private = $mol_crypto2_private;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_auth_pass extends $mol_crypto2_public {
        static like(bin) {
            const pass = this.from(bin);
            if (pass.byteLength !== $giper_baza_auth_pass.size_bin)
                return null;
            if (pass.uint8(0) !== 0xFF)
                return null;
            return pass;
        }
        hash() {
            return $giper_baza_link.hash_bin(this.asArray());
        }
        path() {
            return `pass:${this.hash().str}`;
        }
        lord() {
            return this.hash().lord();
        }
        peer() {
            return this.hash().peer();
        }
        toJSON() {
            return '@' + this.lord().str;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 🎫');
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "hash", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "path", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "lord", null);
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth_pass.prototype, "peer", null);
    $.$giper_baza_auth_pass = $giper_baza_auth_pass;
    class $giper_baza_auth extends $mol_crypto2_private {
        static current(next) {
            $mol_wire_solid();
            if (next === undefined) {
                const key = String($mol_state_local.value('$giper_baza_auth') ?? '');
                if (key) {
                    const auth = $giper_baza_auth.from(key);
                    if (auth.byteLength === 128)
                        return auth;
                    $$.$mol_log3_warn({
                        message: 'Wrong Auth size',
                        hint: 'Relax. Right Auth is created.',
                        place: `${this}.current()`,
                    });
                }
            }
            if (!next)
                next = this.grab();
            $mol_state_local.value('$giper_baza_auth', next.toString() + next.toStringPrivate());
            return next;
        }
        static embryos = [];
        static grab() {
            if (this.embryos.length)
                return this.from(this.embryos.pop());
            return $mol_wire_sync(this).generate();
        }
        static async generate() {
            for (let i = 0; i < 4096; ++i) {
                const auth = this.from(await super.generate());
                if (auth.uint8(0) !== 0xFF)
                    continue;
                if (/[æÆ]/.test(auth.pass().lord().str))
                    continue;
                return auth;
            }
            $mol_fail(new Error(`Too long key generation`));
        }
        pass() {
            return $giper_baza_auth_pass.from(this.public());
        }
        secret_mutual(pass) {
            return $mol_wire_sync(this.cipher()).secret(pass.socket());
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.pass().lord()), ' 🔑');
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_auth.prototype, "pass", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_auth.prototype, "secret_mutual", null);
    __decorate([
        $mol_mem
    ], $giper_baza_auth, "current", null);
    __decorate([
        $mol_action
    ], $giper_baza_auth, "grab", null);
    $.$giper_baza_auth = $giper_baza_auth;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws extends $mol_rest_port {
    }
    $.$mol_rest_port_ws = $mol_rest_port_ws;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_websocket_frame_op;
    (function ($mol_websocket_frame_op) {
        $mol_websocket_frame_op[$mol_websocket_frame_op["con"] = 0] = "con";
        $mol_websocket_frame_op[$mol_websocket_frame_op["txt"] = 1] = "txt";
        $mol_websocket_frame_op[$mol_websocket_frame_op["bin"] = 2] = "bin";
        $mol_websocket_frame_op[$mol_websocket_frame_op["stop"] = 8] = "stop";
        $mol_websocket_frame_op[$mol_websocket_frame_op["ping"] = 9] = "ping";
        $mol_websocket_frame_op[$mol_websocket_frame_op["pong"] = 10] = "pong";
    })($mol_websocket_frame_op = $.$mol_websocket_frame_op || ($.$mol_websocket_frame_op = {}));
    class $mol_websocket_frame extends $mol_buffer {
        kind(next) {
            if (next) {
                this.setUint8(0, Number(next.fin) << 7 | $mol_websocket_frame_op[next.op]);
                return next;
            }
            else {
                const state = this.getUint8(0);
                const fin = state >> 7;
                const op = $mol_websocket_frame_op[state & 0b1111];
                if (op === undefined)
                    $mol_fail(new Error(`Wrong op (${state.toString(2)})`));
                return { op, fin };
            }
        }
        data(next) {
            if (next === undefined) {
                const state = this.getUint8(1);
                const mask = state >> 7;
                let size = state & 0b0111_1111;
                if (size === 126)
                    size = this.getUint16(2);
                else if (size === 127)
                    size = this.getUint32(6);
                return { size, mask };
            }
            else {
                if (next.size >= 2 ** 16) {
                    this.setUint8(1, 127 | Number(next.mask) << 7);
                    this.setUint32(6, next.size);
                }
                else if (next.size >= 126) {
                    this.setUint8(1, 126 | Number(next.mask) << 7);
                    this.setUint16(2, next.size);
                }
                else {
                    this.setUint8(1, next.size | Number(next.mask) << 7);
                }
                return next;
            }
        }
        size() {
            const short = this.getUint8(1) & 0b0111_1111;
            const mask = this.getUint8(1) >> 7;
            return (short === 127 ? 10 : short === 126 ? 4 : 2) + (mask ? 4 : 0);
        }
        mask() {
            return new Uint8Array(this.buffer, this.byteOffset + this.size() - 4, 4);
        }
        toString() {
            const { op, fin } = this.kind();
            const { size, mask } = this.data();
            return `${op}${fin ? '!' : '+'}${size}${mask ? '@' : '#'}`;
        }
        static make(op, size = 0, mask = false, fin = true) {
            const head = (size >= 2 ** 16 ? 10 : size >= 126 ? 4 : 2) + (mask ? 4 : 0);
            const frame = $mol_websocket_frame.from(head);
            frame.kind({ op, fin });
            frame.data({ size, mask });
            return frame;
        }
    }
    $.$mol_websocket_frame = $mol_websocket_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws_std extends $mol_rest_port_ws {
        socket;
        send_nil() {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            this.socket.send('');
        }
        send_bin(data) {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            this.socket.send(data);
        }
        send_text(data) {
            if (this.socket.readyState !== this.socket.OPEN)
                return;
            const bin = $mol_charset_encode(data);
            this.socket.send(bin);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_std.prototype, "send_text", null);
    $.$mol_rest_port_ws_std = $mol_rest_port_ws_std;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_ws_node extends $mol_rest_port_ws {
        socket;
        send_nil() {
            if (this.socket.writableEnded)
                return;
            this.socket.write($mol_websocket_frame.make('pong', 0).asArray());
        }
        send_bin(data) {
            if (this.socket.writableEnded)
                return;
            this.socket.write($mol_websocket_frame.make('bin', data.byteLength).asArray());
            this.socket.write(data);
        }
        send_text(data) {
            if (this.socket.writableEnded)
                return;
            const bin = $mol_charset_encode(data);
            this.socket.write($mol_websocket_frame.make('txt', bin.byteLength).asArray());
            this.socket.write(bin);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_nil", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_bin", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_ws_node.prototype, "send_text", null);
    $.$mol_rest_port_ws_node = $mol_rest_port_ws_node;
    $.$mol_rest_port_ws = $mol_rest_port_ws_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_slot_kind;
    (function ($giper_baza_slot_kind) {
        $giper_baza_slot_kind[$giper_baza_slot_kind["free"] = 0] = "free";
        $giper_baza_slot_kind[$giper_baza_slot_kind["land"] = 76] = "land";
        $giper_baza_slot_kind[$giper_baza_slot_kind["sand"] = 252] = "sand";
        $giper_baza_slot_kind[$giper_baza_slot_kind["gift"] = 253] = "gift";
        $giper_baza_slot_kind[$giper_baza_slot_kind["seal"] = 254] = "seal";
        $giper_baza_slot_kind[$giper_baza_slot_kind["pass"] = 255] = "pass";
    })($giper_baza_slot_kind = $.$giper_baza_slot_kind || ($.$giper_baza_slot_kind = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_graph {
        nodes = new Set();
        edges_out = new Map();
        edges_in = new Map();
        link(from, to, edge) {
            this.link_out(from, to, edge);
            this.link_in(to, from, edge);
        }
        unlink(from, to) {
            this.edges_in.get(to)?.delete(from);
            this.edges_out.get(from)?.delete(to);
        }
        link_out(from, to, edge) {
            let pair = this.edges_out.get(from);
            if (!pair) {
                pair = new Map();
                this.edges_out.set(from, pair);
                this.nodes.add(from);
            }
            pair.set(to, edge);
            this.nodes.add(to);
        }
        link_in(to, from, edge) {
            let pair = this.edges_in.get(to);
            if (!pair) {
                pair = new Map();
                this.edges_in.set(to, pair);
                this.nodes.add(to);
            }
            pair.set(from, edge);
            this.nodes.add(to);
        }
        edge(from, to) {
            return this.edge_out(from, to) ?? this.edge_in(to, from);
        }
        edge_out(from, to) {
            return this.edges_out.get(from)?.get(to) ?? null;
        }
        edge_in(to, from) {
            return this.edges_in.get(to)?.get(from) ?? null;
        }
        acyclic(get_weight) {
            const checked = [];
            for (const start of this.nodes) {
                const path = [];
                const visit = (from) => {
                    if (checked.includes(from))
                        return Number.MAX_SAFE_INTEGER;
                    const index = path.lastIndexOf(from);
                    if (index > -1) {
                        const cycle = path.slice(index);
                        return cycle.reduce((weight, node, index) => Math.min(weight, get_weight(this.edge_out(node, cycle[(index + 1) % cycle.length]))), Number.MAX_SAFE_INTEGER);
                    }
                    path.push(from);
                    dive: try {
                        const deps = this.edges_out.get(from);
                        if (!deps)
                            break dive;
                        for (const [to, edge] of deps) {
                            if (to === from) {
                                this.unlink(from, to);
                                continue;
                            }
                            const weight_out = get_weight(edge);
                            const min = visit(to);
                            if (weight_out > min)
                                return min;
                            if (weight_out === min) {
                                this.unlink(from, to);
                                if (path.length > 1) {
                                    const enter = path[path.length - 2];
                                    this.link(enter, to, edge);
                                }
                            }
                        }
                    }
                    finally {
                        path.pop();
                    }
                    checked.push(from);
                    return Number.MAX_SAFE_INTEGER;
                };
                visit(start);
            }
        }
        get sorted() {
            const sorted = new Set();
            const visit = (node) => {
                if (sorted.has(node))
                    return;
                const deps = this.edges_out.get(node);
                if (deps) {
                    for (const [dep] of deps)
                        visit(dep);
                }
                sorted.add(node);
            };
            for (const node of this.nodes) {
                visit(node);
            }
            return sorted;
        }
        get roots() {
            const roots = [];
            for (const node of this.nodes) {
                if (this.edges_in.get(node)?.size)
                    continue;
                roots.push(node);
            }
            return roots;
        }
        nodes_depth(select) {
            const stat = new Map();
            const visit = (node, depth = 0) => {
                if (stat.has(node))
                    stat.set(node, select(depth, stat.get(node)));
                else
                    stat.set(node, depth);
                for (const kid of this.edges_out.get(node)?.keys() ?? [])
                    visit(kid, depth + 1);
            };
            for (const root of this.roots)
                visit(root);
            return stat;
        }
        depth_nodes(select) {
            const groups = [];
            for (const [node, depth] of this.nodes_depth(select).entries()) {
                if (groups[depth])
                    groups[depth].push(node);
                else
                    groups[depth] = [node];
            }
            return groups;
        }
    }
    $.$mol_graph = $mol_graph;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                if (!Number.isFinite(config))
                    throw new RangeError(`Wrong ms count`);
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^(-?)P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    const sign = found[1] ? -1 : 1;
                    if (found[2])
                        this.year = sign * Number(found[2]);
                    if (found[3])
                        this.month = sign * Number(found[3]);
                    if (found[4])
                        this.day = sign * Number(found[4]);
                    if (found[5])
                        this.hour = sign * Number(found[5]);
                    if (found[6])
                        this.minute = sign * Number(found[6]);
                    if (found[7])
                        this.second = sign * Number(found[7]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            if (config instanceof Array) {
                ;
                [this.year, this.month, this.day, this.hour, this.minute, this.second] = config;
                return;
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        get normal() {
            let second = this.second ?? 0;
            let minute = this.minute ?? 0;
            let hour = this.hour ?? 0;
            let day = this.day ?? 0;
            minute += Math.trunc(second / 60);
            second = second % 60;
            hour += Math.trunc(minute / 60);
            minute = minute % 60;
            day += Math.trunc(hour / 24);
            hour = hour % 24;
            return new $mol_time_duration({
                year: this.year,
                month: this.month,
                day: day,
                hour: hour,
                minute: minute,
                second: second,
            });
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        toArray() {
            return [this.year, this.month, this.day, this.hour, this.minute, this.second];
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number') {
                config = new Date(config);
                if (Number.isNaN(config.valueOf()))
                    throw new RangeError(`Wrong ms count`);
            }
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                this.offset = new $mol_time_duration({ minute: -config.getTimezoneOffset() });
                return;
            }
            if (config instanceof Array) {
                ;
                [this.year, this.month, this.day, this.hour, this.minute, this.second] = config;
                if (config[6] !== undefined)
                    this.offset = new $mol_time_duration(config[6] * 60_000);
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const second = Math.floor(this.second ?? 0);
            const current = new Date();
            const native = new Date(this.year ?? current.getFullYear(), this.month ?? (this.year === undefined ? current.getMonth() : 0), (this.day ?? (this.year === undefined && this.month === undefined ? current.getDate() - 1 : 0)) + 1, this.hour ?? 0, this.minute ?? 0, second, Math.floor(((this.second ?? 0) - second) * 1000));
            const offset = -native.getTimezoneOffset();
            shift: if (this.offset) {
                const target = this.offset.count('PT1m');
                if (target === offset)
                    break shift;
                native.setMinutes(native.getMinutes() + offset - target);
            }
            return this._native = native;
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native).toOffset(this.offset);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year ?? 0,
                month: this.month ?? 0,
                day: this.day ?? 0,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('0001-01-01T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        toArray() {
            return [this.year, this.month, this.day, this.hour, this.minute, this.second, this.offset?.count('PT1m')];
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_accent(this.toString('YYYY-MM-DD hh:mm:ss.sss Z')));
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
            'Z': (moment) => {
                const offset = moment.offset?.normal;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + hour.toString().padStart(2, '0') + ':' + offset.minute.toString().padStart(2, '0');
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_tagged(config) {
        return config;
    }
    $.$mol_data_tagged = $mol_data_tagged;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_integer(val) {
        const val2 = $mol_data_number(val);
        if (Math.floor(val2) === val2)
            return val2;
        return $mol_fail(new $mol_data_error(`${val} is not an integer`));
    }
    $.$mol_data_integer = $mol_data_integer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_rank = $mol_data_tagged({
        $giper_baza_rank: $mol_data_pipe($mol_data_integer, (rank) => {
            if (rank >= $.$giper_baza_rank_deny && rank <= $.$giper_baza_rank_rule)
                return rank;
            $mol_fail(new $mol_data_error(`${rank} is out of Ran range`));
        }),
    }).$giper_baza_rank;
    function $giper_baza_rank_make(tier, fame) {
        return ($giper_baza_rank_tier[tier] | $giper_baza_rank_rate[fame]);
    }
    $.$giper_baza_rank_make = $giper_baza_rank_make;
    let $giper_baza_rank_tier;
    (function ($giper_baza_rank_tier) {
        $giper_baza_rank_tier[$giper_baza_rank_tier["deny"] = 0] = "deny";
        $giper_baza_rank_tier[$giper_baza_rank_tier["read"] = 16] = "read";
        $giper_baza_rank_tier[$giper_baza_rank_tier["post"] = 48] = "post";
        $giper_baza_rank_tier[$giper_baza_rank_tier["pull"] = 112] = "pull";
        $giper_baza_rank_tier[$giper_baza_rank_tier["rule"] = 240] = "rule";
    })($giper_baza_rank_tier = $.$giper_baza_rank_tier || ($.$giper_baza_rank_tier = {}));
    function $giper_baza_rank_tier_of(rank) {
        return rank & 0b1111_0000;
    }
    $.$giper_baza_rank_tier_of = $giper_baza_rank_tier_of;
    $.$giper_baza_rank_work_rates = [
        0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF,
        0xE, 0xE, 0xE, 0xE, 0xD, 0xD, 0xD, 0xD,
        0xC, 0xC, 0xB, 0xB, 0xA, 0xA, 0x9, 0x9,
        0x8, 0x7, 0x6, 0x5, 0x4, 0x3, 0x2, 0x1,
        0x0,
    ];
    let $giper_baza_rank_rate;
    (function ($giper_baza_rank_rate) {
        $giper_baza_rank_rate[$giper_baza_rank_rate["late"] = 0] = "late";
        $giper_baza_rank_rate[$giper_baza_rank_rate["long"] = 12] = "long";
        $giper_baza_rank_rate[$giper_baza_rank_rate["slow"] = 13] = "slow";
        $giper_baza_rank_rate[$giper_baza_rank_rate["fast"] = 14] = "fast";
        $giper_baza_rank_rate[$giper_baza_rank_rate["just"] = 15] = "just";
    })($giper_baza_rank_rate = $.$giper_baza_rank_rate || ($.$giper_baza_rank_rate = {}));
    function $giper_baza_rank_rate_of(rank) {
        return rank & 0b0000_1111;
    }
    $.$giper_baza_rank_rate_of = $giper_baza_rank_rate_of;
    $.$giper_baza_rank_deny = $giper_baza_rank_make('deny', 'late');
    $.$giper_baza_rank_read = $giper_baza_rank_make('read', 'late');
    $.$giper_baza_rank_rule = $giper_baza_rank_make('rule', 'just');
    function $giper_baza_rank_pull(rate) {
        return $giper_baza_rank_make('pull', rate);
    }
    $.$giper_baza_rank_pull = $giper_baza_rank_pull;
    function $giper_baza_rank_post(rate) {
        return $giper_baza_rank_make('post', rate);
    }
    $.$giper_baza_rank_post = $giper_baza_rank_post;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_time_moment(time) {
        const stamp = time * 1000;
        return new $mol_time_moment(stamp);
    }
    $.$giper_baza_time_moment = $giper_baza_time_moment;
    function $giper_baza_time_dump(time, tick) {
        let res = $giper_baza_time_moment(time).toString('YYYY-MM-DD hh:mm:ss Z');
        if (tick !== undefined)
            res += ' !' + tick.toString(16).toUpperCase().padStart(2, '0');
        return res;
    }
    $.$giper_baza_time_dump = $giper_baza_time_dump;
    function $giper_baza_time_now() {
        return now || Math.floor(Date.now() / 1000);
    }
    $.$giper_baza_time_now = $giper_baza_time_now;
    let now = 0;
    function $giper_baza_time_freeze(task) {
        if (now)
            return task();
        now = $giper_baza_time_now();
        try {
            return task();
        }
        finally {
            now = 0;
        }
    }
    $.$giper_baza_time_freeze = $giper_baza_time_freeze;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_face extends Object {
        time;
        tick;
        summ;
        static length() {
            return 16;
        }
        constructor(time = 0, tick = 0, summ = 0) {
            super();
            this.time = time;
            this.tick = tick;
            this.summ = summ;
        }
        clone() {
            return new $giper_baza_face(this.time, this.tick, this.summ);
        }
        get moment() {
            return $giper_baza_time_moment(this.time);
        }
        get time_tick() {
            return this.time * 2 ** 16 + this.tick;
        }
        sync_time(time, tick) {
            if (this.time < time) {
                this.time = time;
                this.tick = tick;
            }
            else if (this.time === time && this.tick < tick) {
                this.tick = tick;
            }
        }
        sync_summ(summ) {
            if (this.summ < summ)
                this.summ = summ;
        }
        toJSON() {
            const time = $giper_baza_time_dump(this.time, this.tick);
            const summ = '%' + this.summ;
            return `${time} ${summ}`;
        }
        ;
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return $mol_term_color.blue('$giper_baza_face ')
                + $mol_term_color.gray($giper_baza_time_dump(this.time, this.tick)
                    + ' %' + this.summ);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(' ', $giper_baza_time_dump(this.time, this.tick), ' %', this.summ));
        }
    }
    $.$giper_baza_face = $giper_baza_face;
    class $giper_baza_face_map extends Map {
        stat = new $giper_baza_face;
        constructor(entries) {
            super();
            if (entries)
                this.sync(entries);
        }
        clone() {
            return new $giper_baza_face_map(this);
        }
        sync(right) {
            if (right instanceof $giper_baza_face_map)
                this.stat = right.stat.clone();
            for (const [peer, face] of right) {
                this.peer_time(peer, face.time, face.tick);
                this.peer_summ(peer, face.summ);
            }
        }
        peer_time(peer, time, tick) {
            this.stat.sync_time(time, tick);
            let prev = this.get(peer);
            if (prev)
                prev.sync_time(time, tick);
            else
                this.set(peer, new $giper_baza_face(time, tick));
        }
        peer_summ(peer, summ) {
            this.stat.sync_summ(summ);
            let prev = this.get(peer);
            if (prev)
                prev.sync_summ(summ);
            else
                this.set(peer, new $giper_baza_face(0, 0, summ));
        }
        peer_summ_shift(peer, diff) {
            this.peer_summ(peer, (this.get(peer)?.summ ?? 0) + diff);
        }
        tick() {
            const now = $giper_baza_time_now();
            if (this.stat.time < now) {
                this.stat.time = now;
                this.stat.tick = 0;
            }
            else {
                this.stat.tick += 1;
                this.stat.tick %= 2 ** 16;
                if (!this.stat.tick)
                    ++this.stat.time;
            }
            return this.stat;
        }
        toJSON() {
            return Object.fromEntries(this.entries());
        }
        ;
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return $mol_term_color.blue('$giper_baza_face_map ')
                + $mol_term_color.gray(this.stat.toJSON());
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.stat));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_face_map.prototype, "tick", null);
    $.$giper_baza_face_map = $giper_baza_face_map;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_dict extends Map {
        pub = new $mol_wire_pub;
        has(key) {
            this.pub.promote();
            return super.has(key);
        }
        get(key) {
            this.pub.promote();
            return super.get(key);
        }
        entries() {
            this.pub.promote();
            return super.entries();
        }
        keys() {
            this.pub.promote();
            return super.keys();
        }
        values() {
            this.pub.promote();
            return super.values();
        }
        forEach(task, self) {
            this.pub.promote();
            super.forEach(task, self);
        }
        [Symbol.iterator]() {
            this.pub.promote();
            return super[Symbol.iterator]();
        }
        get size() {
            this.pub.promote();
            return super.size;
        }
        set(key, value) {
            if (super.get(key) === value)
                return this;
            super.set(key, value);
            this.pub?.emit();
            return this;
        }
        delete(key) {
            const res = super.delete(key);
            if (res)
                this.pub.emit();
            return res;
        }
        clear() {
            if (!super.size)
                return;
            super.clear();
            this.pub.emit();
        }
        item(key, next) {
            if (next === undefined)
                return this.get(key) ?? null;
            if (next === null)
                this.delete(key);
            else
                this.set(key, next);
            return next;
        }
    }
    $.$mol_wire_dict = $mol_wire_dict;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_hash_numbers(buff, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < buff.length; ++i) {
            const item = buff[i];
            h1 = Math.imul(h1 ^ item, 2654435761);
            h2 = Math.imul(h2 ^ item, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_numbers = $mol_hash_numbers;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
        [Symbol.toPrimitive](mode) {
            return this.toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_bigint_encode(num) {
        const minus = num < 0n ? 255 : 0;
        num = minus ? -num - 1n : num;
        const bytes = [];
        do {
            let byte = minus ^ Number(num & 255n);
            bytes.push(byte);
            if (num >>= 8n)
                continue;
            if ((minus & 128) !== (byte & 128))
                bytes.push(minus);
            break;
        } while (num);
        return new Uint8Array(bytes);
    }
    $.$mol_bigint_encode = $mol_bigint_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const ascii_set = [...`0123456789.,:;()'"- \n`].map(c => c.charCodeAt(0));
    const ascii_map = new Array(0x80).fill(0);
    for (let i = 0; i < ascii_set.length; ++i)
        ascii_map[ascii_set[i]] = i | 0x80;
    const diacr_set = [
        0x00, 0x01, 0x0F, 0x0B, 0x07, 0x08, 0x12, 0x13,
        0x02, 0x0C, 0x06, 0x11, 0x03, 0x09, 0x0A, 0x04,
        0x28, 0x31, 0x27, 0x26, 0x23,
    ];
    const diacr_map = new Array(0x80).fill(0);
    for (let i = 0; i < diacr_set.length; ++i)
        diacr_map[diacr_set[i]] = i | 0x80;
    const wide_offset = 0x0E_00;
    const wide_limit = 128 * 128 * 8 + wide_offset;
    const tiny_limit = 128 * 98;
    const full_mode = 0x95;
    const wide_mode = 0x96;
    const tiny_mode = 0x9E;
    function $mol_charset_ucf_encode(str) {
        const buf = $mol_charset_buffer(str.length * 3);
        return buf.slice(0, $mol_charset_ucf_encode_to(str, buf));
    }
    $.$mol_charset_ucf_encode = $mol_charset_ucf_encode;
    function $mol_charset_ucf_encode_to(str, buf, from = 0) {
        let pos = from;
        let mode = tiny_mode;
        const write_high = (code) => {
            buf[pos++] = ((code + 128 - mode) & 0x7F) | 0x80;
        };
        const write_remap = (code) => {
            const fast = ascii_map[code];
            if (fast)
                write_high(fast);
            else
                buf[pos++] = code;
        };
        const write_mode = (m) => {
            write_high(m);
            mode = m;
        };
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code >= 0xD8_00 && code < 0xDC_00)
                code = ((code - 0xd800) << 10) + str.charCodeAt(++i) + 0x2400;
            if (code < 0x80) {
                if (mode !== tiny_mode) {
                    const fast = ascii_map[code];
                    if (!fast)
                        write_mode(tiny_mode);
                }
                buf[pos++] = code;
            }
            else if (code < tiny_limit) {
                const page = (code >> 7) + tiny_mode;
                code &= 0x7F;
                if (page === 164) {
                    const fast = diacr_map[code];
                    if (fast) {
                        if (mode !== tiny_mode)
                            write_mode(tiny_mode);
                        write_high(fast);
                        continue;
                    }
                }
                if (mode !== page)
                    write_mode(page);
                write_remap(code);
            }
            else if (code < wide_limit) {
                code -= wide_offset;
                const page = (code >> 14) + wide_mode;
                if (mode !== page)
                    write_mode(page);
                write_remap(code & 0x7F);
                write_remap((code >> 7) & 0x7F);
            }
            else {
                if (mode !== full_mode)
                    write_mode(full_mode);
                write_remap(code & 0x7F);
                write_remap((code >> 7) & 0x7F);
                write_remap(code >> 14);
            }
        }
        if (mode !== tiny_mode)
            write_mode(tiny_mode);
        return pos - from;
    }
    $.$mol_charset_ucf_encode_to = $mol_charset_ucf_encode_to;
    function $mol_charset_ucf_decode(buffer, mode = tiny_mode) {
        let text = '';
        let pos = 0;
        let page_offset = 0;
        const read_code = () => {
            let code = buffer[pos++];
            if (code > 0x80)
                code = ((mode + code) & 0x7F) | 0x80;
            return code;
        };
        const read_remap = () => {
            let code = read_code();
            if (code >= 0x80)
                code = ascii_set[code - 0x80];
            if (code === undefined)
                $mol_fail(new Error('Wrong byte', { cause: { text, pos: pos - 1 } }));
            return code;
        };
        while (pos < buffer.length) {
            let code = read_code();
            if (code < full_mode) {
                if (mode === tiny_mode) {
                    if (code > 0x80) {
                        code = diacr_set[code - 0x080] | (6 << 7);
                    }
                }
                else if (!ascii_map[code]) {
                    if (code >= 0x80)
                        code = ascii_set[code - 0x80];
                    if (mode < tiny_mode)
                        code |= read_remap() << 7;
                    if (mode === full_mode)
                        code |= read_remap() << 14;
                    code += page_offset;
                }
                text += String.fromCodePoint(code);
            }
            else if (code >= tiny_mode) {
                mode = code;
                page_offset = (mode - tiny_mode) << 7;
            }
            else if (code === full_mode) {
                mode = code;
                page_offset = 0;
            }
            else {
                mode = code;
                page_offset = ((mode - wide_mode) << 14) + wide_offset;
            }
        }
        if (mode !== tiny_mode) {
            return $mol_fail(new Error('Wrong ending', { cause: { text, mode } }));
        }
        return text;
    }
    $.$mol_charset_ucf_decode = $mol_charset_ucf_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_bigint_decode(buf) {
        if (buf.length === 8)
            return new BigInt64Array(buf.buffer, buf.byteOffset, 1)[0];
        if (buf.length === 4)
            return BigInt(new Int32Array(buf.buffer, buf.byteOffset, 1)[0]);
        if (buf.length === 2)
            return BigInt(new Int16Array(buf.buffer, buf.byteOffset, 1)[0]);
        if (buf.length === 1)
            return BigInt(new Int8Array(buf.buffer, buf.byteOffset, 1)[0]);
        const minus = (buf.at(-1) & 128) ? 255 : 0;
        let result = 0n;
        let offset = 0n;
        for (let i = 0; i < buf.length; i++, offset += 8n) {
            result |= BigInt(buf[i] ^ minus) << offset;
        }
        if (minus)
            result = (result + 1n) * -1n;
        return result;
    }
    $.$mol_bigint_decode = $mol_bigint_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_vary_tip;
    (function ($mol_vary_tip) {
        $mol_vary_tip[$mol_vary_tip["uint"] = 0] = "uint";
        $mol_vary_tip[$mol_vary_tip["link"] = 32] = "link";
        $mol_vary_tip[$mol_vary_tip["spec"] = 64] = "spec";
        $mol_vary_tip[$mol_vary_tip["list"] = 96] = "list";
        $mol_vary_tip[$mol_vary_tip["blob"] = 128] = "blob";
        $mol_vary_tip[$mol_vary_tip["text"] = 160] = "text";
        $mol_vary_tip[$mol_vary_tip["tupl"] = 192] = "tupl";
        $mol_vary_tip[$mol_vary_tip["sint"] = 224] = "sint";
    })($mol_vary_tip = $.$mol_vary_tip || ($.$mol_vary_tip = {}));
    let $mol_vary_len;
    (function ($mol_vary_len) {
        $mol_vary_len[$mol_vary_len["L1"] = 28] = "L1";
        $mol_vary_len[$mol_vary_len["L2"] = 29] = "L2";
        $mol_vary_len[$mol_vary_len["L4"] = 30] = "L4";
        $mol_vary_len[$mol_vary_len["L8"] = 31] = "L8";
        $mol_vary_len[$mol_vary_len["LA"] = 32] = "LA";
    })($mol_vary_len = $.$mol_vary_len || ($.$mol_vary_len = {}));
    let $mol_vary_spec;
    (function ($mol_vary_spec) {
        $mol_vary_spec[$mol_vary_spec["none"] = 'N'.charCodeAt(0)] = "none";
        $mol_vary_spec[$mol_vary_spec["true"] = 'T'.charCodeAt(0)] = "true";
        $mol_vary_spec[$mol_vary_spec["fake"] = 'F'.charCodeAt(0)] = "fake";
        $mol_vary_spec[$mol_vary_spec["both"] = 'B'.charCodeAt(0)] = "both";
        $mol_vary_spec[$mol_vary_spec["fp16"] = 'H'.charCodeAt(0)] = "fp16";
        $mol_vary_spec[$mol_vary_spec["fp32"] = 'S'.charCodeAt(0)] = "fp32";
        $mol_vary_spec[$mol_vary_spec["fp64"] = 'D'.charCodeAt(0)] = "fp64";
        $mol_vary_spec[$mol_vary_spec["f128"] = 'Q'.charCodeAt(0)] = "f128";
        $mol_vary_spec[$mol_vary_spec["f256"] = 'O'.charCodeAt(0)] = "f256";
    })($mol_vary_spec = $.$mol_vary_spec || ($.$mol_vary_spec = {}));
    const pojo_maker = (keys) => (vals) => {
        const obj = {};
        for (let i = 0; i < keys.length; ++i)
            obj[keys[i]] = vals[i];
        return obj;
    };
    class $mol_vary_class extends Object {
        lean_symbol = Symbol('$mol_vary_lean');
        array = new Uint8Array(256);
        buffer = new DataView(this.array.buffer);
        pack(data) {
            let pos = 0;
            let capacity = 0;
            const offsets = new Map();
            const stack = [];
            const acquire = (size) => {
                if (size < 0)
                    return;
                capacity += size;
                if (this.array.byteLength >= capacity)
                    return;
                const buffer2 = new Uint8Array(Math.ceil(capacity / 4096) * 4096);
                buffer2.set(this.array);
                this.array = buffer2;
                this.buffer = new DataView(this.array.buffer);
            };
            const release = (size) => {
                capacity -= size;
            };
            const calc_size = (val) => {
                if (val < $mol_vary_len.L1)
                    return 1;
                if (val < 2 ** 8)
                    return 2;
                if (val < 2 ** 16)
                    return 3;
                if (val < 2 ** 32)
                    return 5;
                if (val < 2n ** 64n)
                    return 9;
                return $mol_fail(new Error('Too large number'));
            };
            const dump_unum = (tip, val, max = val) => {
                if (max < $mol_vary_len.L1) {
                    this.array[pos++] = tip | Number(val);
                    release(8);
                    return;
                }
                if (tip == $mol_vary_tip.uint) {
                    const offset = offsets.get(val);
                    if (offset !== undefined)
                        return dump_unum($mol_vary_tip.link, offset);
                }
                if (max < 2 ** 8) {
                    this.array[pos++] = tip | $mol_vary_len.L1;
                    this.array[pos++] = Number(val);
                    release(7);
                }
                else if (max < 2 ** 16) {
                    this.array[pos++] = tip | $mol_vary_len.L2;
                    this.buffer.setUint16(pos, Number(val), true);
                    pos += 2;
                    release(6);
                }
                else if (max < 2 ** 32) {
                    this.array[pos++] = tip | $mol_vary_len.L4;
                    this.buffer.setUint32(pos, Number(val), true);
                    pos += 4;
                    release(4);
                }
                else if (max < 2n ** 64n) {
                    this.array[pos++] = tip | $mol_vary_len.L8;
                    this.buffer.setBigUint64(pos, BigInt(val), true);
                    pos += 8;
                }
                else {
                    dump_bint(val);
                }
                if (tip == $mol_vary_tip.uint)
                    offsets.set(val, offsets.size);
            };
            const dump_snum = (val) => {
                if (val > -$mol_vary_len.L1) {
                    this.array[pos++] = Number(val);
                    release(8);
                    return;
                }
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                if (val >= -(2 ** 7)) {
                    this.array[pos++] = -$mol_vary_len.L1;
                    this.array[pos++] = Number(val);
                    release(7);
                }
                else if (val >= -(2 ** 15)) {
                    this.array[pos++] = -$mol_vary_len.L2;
                    this.buffer.setInt16(pos, Number(val), true);
                    pos += 2;
                    release(6);
                }
                else if (val >= -(2 ** 31)) {
                    this.array[pos++] = -$mol_vary_len.L4;
                    this.buffer.setInt32(pos, Number(val), true);
                    pos += 4;
                    release(4);
                }
                else if (val >= -(2n ** 63n)) {
                    this.array[pos++] = -$mol_vary_len.L8;
                    this.buffer.setBigInt64(pos, BigInt(val), true);
                    pos += 8;
                }
                else {
                    dump_bint(val);
                }
                offsets.set(val, offsets.size);
            };
            const dump_bint = (val) => {
                const buf = $mol_bigint_encode(val);
                if (buf.byteLength > (2 ** 16 + 8))
                    $mol_fail(new Error('Number too high', { cause: { val } }));
                acquire(buf.byteLength - 6);
                this.array[pos++] = -$mol_vary_len.LA;
                this.buffer.setUint16(pos, buf.byteLength - 9, true);
                pos += 2;
                this.array.set(buf, pos);
                pos += buf.byteLength;
            };
            const dump_float = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                this.array[pos++] = $mol_vary_spec.fp64;
                this.buffer.setFloat64(pos, val, true);
                pos += 8;
                offsets.set(val, offsets.size);
            };
            const dump_string = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                const len_max = val.length * 3;
                const len_size = calc_size(len_max);
                acquire(len_max);
                const len = $mol_charset_ucf_encode_to(val, this.array, pos + len_size);
                dump_unum($mol_vary_tip.text, len, len_max);
                pos += len;
                release(len_max - len);
                offsets.set(val, offsets.size);
                return;
            };
            const dump_buffer = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                dump_unum($mol_vary_tip.blob, val.byteLength);
                acquire(1 + val.byteLength);
                if (val instanceof Uint8Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L1;
                else if (val instanceof Uint16Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L2;
                else if (val instanceof Uint32Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L4;
                else if (val instanceof BigUint64Array)
                    this.array[pos++] = $mol_vary_tip.uint | $mol_vary_len.L8;
                else if (val instanceof Int8Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L1;
                else if (val instanceof Int16Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L2;
                else if (val instanceof Int32Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L4;
                else if (val instanceof BigInt64Array)
                    this.array[pos++] = $mol_vary_tip.sint | ~$mol_vary_len.L8;
                else if (typeof Float16Array === 'function' && val instanceof Float16Array)
                    this.array[pos++] = $mol_vary_spec.fp16;
                else if (val instanceof Float32Array)
                    this.array[pos++] = $mol_vary_spec.fp32;
                else if (val instanceof Float64Array)
                    this.array[pos++] = $mol_vary_spec.fp64;
                else
                    $mol_fail(new Error(`Unsupported type`));
                const src = (val instanceof Uint8Array) ? val : new Uint8Array(val.buffer, val.byteOffset, val.byteLength);
                this.array.set(src, pos);
                pos += val.byteLength;
                offsets.set(val, offsets.size);
            };
            const dump_list = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                dump_unum($mol_vary_tip.list, val.length);
                acquire(val.length * 9);
                if (stack.includes(val))
                    $mol_fail(new Error('Cyclic refs', { cause: { stack, val } }));
                stack.push(val);
                for (let i = 0; i < val.length; ++i)
                    dump(val[i]);
                if (stack.at(-1) !== val)
                    $mol_fail(new Error('Broken stack', { cause: { stack, val } }));
                stack.pop();
                offsets.set(val, offsets.size);
            };
            const shapes = new Map();
            const shape = (val) => {
                const keys1 = Object.keys(val);
                const key = keys1.join('\0');
                const keys2 = shapes.get(key);
                if (keys2)
                    return keys2;
                shapes.set(key, keys1);
                return keys1;
            };
            const dump_object = (val) => {
                const offset = offsets.get(val);
                if (offset !== undefined)
                    return dump_unum($mol_vary_tip.link, offset);
                const { 0: keys, 1: vals } = this.lean_find(val)?.(val) ?? [shape(val), Object.values(val)];
                dump_unum($mol_vary_tip.tupl, vals.length);
                acquire((vals.length + 1) * 9);
                dump_list(keys);
                if (stack.includes(val))
                    $mol_fail(new Error('Cyclic refs', { cause: { stack, val } }));
                stack.push(val);
                for (let i = 0; i < vals.length; ++i)
                    dump(vals[i]);
                if (stack.at(-1) !== val)
                    $mol_fail(new Error('Broken stack', { cause: { stack, val } }));
                stack.pop();
                offsets.set(val, offsets.size);
            };
            const dumpers = {
                undefined: () => {
                    this.array[pos++] = $mol_vary_spec.both;
                    capacity -= 8;
                },
                boolean: val => {
                    this.array[pos++] = val ? $mol_vary_spec.true : $mol_vary_spec.fake;
                    capacity -= 8;
                },
                number: val => {
                    if (!Number.isInteger(val))
                        dump_float(val);
                    else
                        dumpers.bigint(val);
                },
                bigint: val => {
                    if (val < 0) {
                        dump_snum(val);
                    }
                    else {
                        dump_unum($mol_vary_tip.uint, val);
                    }
                },
                string: val => dump_string(val),
                object: val => {
                    if (!val) {
                        capacity -= 8;
                        return this.array[pos++] = $mol_vary_spec.none;
                    }
                    if (Array.isArray(val))
                        return dump_list(val);
                    if (ArrayBuffer.isView(val))
                        return dump_buffer(val);
                    return dump_object(val);
                }
            };
            const dump = (val) => {
                const dumper = dumpers[typeof val];
                if (!dumper)
                    $mol_fail(new Error(`Unsupported type`));
                dumper(val);
            };
            for (let i = 0; i < data.length; ++i) {
                capacity += 9;
                dump(data[i]);
                if (stack.length)
                    $mol_fail(new Error('Stack underflow', { cause: { stack, item: data[i] } }));
                offsets.clear();
            }
            if (pos !== capacity)
                $mol_fail(new Error('Wrong reserved capacity', { cause: { capacity, size: pos, data } }));
            return this.array.slice(0, pos);
        }
        take(array) {
            const buffer = new DataView(array.buffer, array.byteOffset, array.byteLength);
            const stream = [];
            let pos = 0;
            const read_unum = (kind) => {
                ++pos;
                const num = kind & 0b11111;
                if (num < $mol_vary_len.L1)
                    return num;
                let res = 0;
                if (num === $mol_vary_len.L1) {
                    res = buffer.getUint8(pos++);
                }
                else if (num === $mol_vary_len.L2) {
                    res = buffer.getUint16(pos, true);
                    pos += 2;
                }
                else if (num === $mol_vary_len.L4) {
                    res = buffer.getUint32(pos, true);
                    pos += 4;
                }
                else if (num === $mol_vary_len.L8) {
                    res = buffer.getBigUint64(pos, true);
                    if (res <= Number.MAX_SAFE_INTEGER)
                        res = Number(res);
                    pos += 8;
                }
                else {
                    $mol_fail(new Error('Unsupported unum', { cause: { num } }));
                }
                if ((kind & 0b111_00000) === $mol_vary_tip.uint)
                    stream.push(res);
                return res;
            };
            const read_snum = (kind) => {
                const num = buffer.getInt8(pos++);
                if (num > -$mol_vary_len.L1)
                    return num;
                let res = 0;
                if (num === -$mol_vary_len.L1) {
                    res = buffer.getInt8(pos++);
                }
                else if (num === -$mol_vary_len.L2) {
                    res = buffer.getInt16(pos, true);
                    pos += 2;
                }
                else if (num === -$mol_vary_len.L4) {
                    res = buffer.getInt32(pos, true);
                    pos += 4;
                }
                else if (num === -$mol_vary_len.L8) {
                    res = buffer.getBigInt64(pos, true);
                    if (res >= Number.MIN_SAFE_INTEGER && res <= Number.MAX_SAFE_INTEGER)
                        res = Number(res);
                    pos += 8;
                }
                else if (num === -$mol_vary_len.LA) {
                    const len = buffer.getUint16(pos, true) + 9;
                    pos += 2;
                    res = $mol_bigint_decode(new Uint8Array(buffer.buffer, buffer.byteOffset + pos, len));
                    pos += len;
                }
                else {
                    $mol_fail(new Error('Unsupported snum', { cause: { num } }));
                }
                stream.push(res);
                return res;
            };
            const read_text = (kind) => {
                const len = read_unum(kind);
                const text = $mol_charset_ucf_decode(new Uint8Array(array.buffer, array.byteOffset + pos, len));
                pos += len;
                stream.push(text);
                return text;
            };
            const read_buffer = (len, TypedArray) => {
                const bin = new TypedArray(array.slice(pos, pos + len).buffer);
                pos += len;
                stream.push(bin);
                return bin;
            };
            const read_blob = (kind) => {
                const len = read_unum(kind);
                const kind_item = buffer.getUint8(pos++);
                switch (kind_item) {
                    case $mol_vary_len.L1: return read_buffer(len, Uint8Array);
                    case $mol_vary_len.L2: return read_buffer(len, Uint16Array);
                    case $mol_vary_len.L4: return read_buffer(len, Uint32Array);
                    case $mol_vary_len.L8: return read_buffer(len, BigUint64Array);
                    case ~$mol_vary_len.L1 + 256: return read_buffer(len, Int8Array);
                    case ~$mol_vary_len.L2 + 256: return read_buffer(len, Int16Array);
                    case ~$mol_vary_len.L4 + 256: return read_buffer(len, Int32Array);
                    case ~$mol_vary_len.L8 + 256: return read_buffer(len, BigInt64Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp16: return read_buffer(len, Float16Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp32: return read_buffer(len, Float32Array);
                    case $mol_vary_tip.spec | $mol_vary_spec.fp64: return read_buffer(len, Float64Array);
                    default:
                        $mol_fail(new Error('Unsupported blob item kind', { cause: { kind_item } }));
                }
            };
            const read_list = (kind) => {
                const len = read_unum(kind);
                const list = new Array(len);
                for (let i = 0; i < len; ++i)
                    list[i] = read_vary();
                stream.push(list);
                return list;
            };
            const read_link = (kind) => {
                const index = read_unum(kind);
                if (index >= stream.length)
                    $mol_fail(new Error('Too large index', { cause: { index, exists: stream.length } }));
                return stream[index];
            };
            const read_tupl = (kind) => {
                const len = read_unum(kind);
                const keys = read_vary();
                const vals = new Array(len);
                for (let i = 0; i < len; ++i)
                    vals[i] = read_vary();
                const node = this.rich_node(keys);
                let rich = node.get(null);
                if (!rich)
                    node.set(null, rich = pojo_maker(keys));
                const obj = rich(vals);
                stream.push(obj);
                return obj;
            };
            const read_spec = (kind) => {
                switch (kind) {
                    case $mol_vary_spec.none:
                        ++pos;
                        return null;
                    case $mol_vary_spec.fake:
                        ++pos;
                        return false;
                    case $mol_vary_spec.true:
                        ++pos;
                        return true;
                    case $mol_vary_spec.both:
                        ++pos;
                        return undefined;
                    case $mol_vary_spec.fp64: {
                        const val = buffer.getFloat64(++pos, true);
                        stream.push(val);
                        pos += 8;
                        return val;
                    }
                    case $mol_vary_spec.fp32: {
                        const val = buffer.getFloat32(++pos, true);
                        stream.push(val);
                        pos += 4;
                        return val;
                    }
                    case $mol_vary_spec.fp16: {
                        const val = buffer.getFloat16(++pos, true);
                        stream.push(val);
                        pos += 2;
                        return val;
                    }
                    default:
                        $mol_fail(new Error('Unsupported spec', { cause: { kind } }));
                }
            };
            const read_vary = () => {
                const kind = buffer.getUint8(pos);
                const tip = kind & 0b111_00000;
                switch (tip) {
                    case $mol_vary_tip.uint: return read_unum(kind);
                    case $mol_vary_tip.sint: return read_snum(kind);
                    case $mol_vary_tip.link: return read_link(kind);
                    case $mol_vary_tip.text: return read_text(kind);
                    case $mol_vary_tip.list: return read_list(kind);
                    case $mol_vary_tip.blob: return read_blob(kind);
                    case $mol_vary_tip.tupl: return read_tupl(kind);
                    case $mol_vary_tip.spec: return read_spec(kind);
                    default: $mol_fail(new Error('Unsupported tip', { cause: { tip } }));
                }
            };
            const result = [];
            while (pos < array.byteLength) {
                result.push(read_vary());
                stream.length = 0;
            }
            return result;
        }
        rich_index = new Map([
            [null, () => ({})]
        ]);
        zone() {
            const room = new $mol_vary_class;
            Object.setPrototypeOf(room, this);
            const index_clone = (map) => new Map([...map].map(([k, v]) => [k, k === null ? v : index_clone(v)]));
            room.rich_index = index_clone(this.rich_index);
            return room;
        }
        rich_node(keys) {
            let node = this.rich_index;
            for (let i = 0; i < keys.length; ++i) {
                let sub = node.get(keys[i]);
                if (sub)
                    node = sub;
                else
                    node.set(keys[i], node = new Map);
            }
            return node;
        }
        lean_find(val) {
            const lean = val[this.lean_symbol];
            if (lean)
                return lean;
            const sup = Object.getPrototypeOf(this);
            if (sup === Object.prototype)
                return;
            return sup.lean_find(val);
        }
        type({ type, keys, rich, lean }) {
            this.rich_node(keys).set(null, rich);
            type.prototype[this.lean_symbol] = (val) => [keys, lean(val)];
        }
    }
    $.$mol_vary_class = $mol_vary_class;
    $.$mol_vary = new $mol_vary_class;
    $.$mol_vary.type({
        type: Map,
        keys: ['keys', 'vals'],
        lean: obj => [[...obj.keys()], [...obj.values()]],
        rich: ([keys, vals]) => new Map(keys.map((k, i) => [k, vals[i]])),
    });
    $.$mol_vary.type({
        type: Set,
        keys: ['set'],
        lean: obj => [[...obj.values()]],
        rich: ([vals]) => new Set(vals),
    });
    $.$mol_vary.type({
        type: Date,
        keys: ['unix_time'],
        lean: obj => [obj.valueOf() / 1000],
        rich: ([ts]) => new Date(ts * 1000),
    });
    if ('Element' in $mol_dom) {
        $.$mol_vary.type({
            type: $mol_dom.Element,
            keys: ['XML'],
            lean: node => [$mol_dom_serialize(node)],
            rich: ([text]) => $mol_dom_parse(text, 'application/xml').documentElement,
        });
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_vary = $mol_vary.zone();
    $.$giper_baza_vary.type({
        type: $giper_baza_link,
        keys: ['link'],
        lean: obj => [obj.toBin()],
        rich: ([bin]) => $giper_baza_link.from_bin(bin),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_duration,
        keys: ['dura'],
        lean: obj => obj.toArray(),
        rich: data => new $mol_time_duration(data),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_moment,
        keys: ['time'],
        lean: obj => obj.toArray(),
        rich: data => new $mol_time_moment(data),
    });
    $.$giper_baza_vary.type({
        type: $mol_time_interval,
        keys: ['span'],
        lean: obj => [obj.toString()],
        rich: ([str]) => new $mol_time_interval(str),
    });
    $.$giper_baza_vary.type({
        type: $mol_tree2,
        keys: ['tree'],
        lean: obj => [$$.$mol_tree2_to_string(obj)],
        rich: ([str]) => $$.$mol_tree2_from_string(str),
    });
    function $giper_baza_vary_switch(vary, ways) {
        if (vary === null)
            return ways.none(vary);
        switch (typeof vary) {
            case "boolean": return ways.bool(vary);
            case "bigint": return ways.bint(vary);
            case "number": return ways.real(vary);
            case "string": return ways.text(vary);
        }
        if (ArrayBuffer.isView(vary))
            return ways.blob(vary);
        switch (Reflect.getPrototypeOf(vary)) {
            case Object.prototype: return ways.dict(vary);
            case Array.prototype: return ways.list(vary);
            case $giper_baza_link.prototype: return ways.link(vary);
            case $mol_time_moment.prototype: return ways.time(vary);
            case $mol_time_duration.prototype: return ways.dura(vary);
            case $mol_time_interval.prototype: return ways.span(vary);
            case $mol_tree2.prototype: return ways.tree(vary);
        }
        if (vary instanceof $mol_dom_context.Element)
            return ways.elem(vary);
        return $mol_fail(new TypeError(`Unsupported vary type`, { cause: { vary } }));
    }
    $.$giper_baza_vary_switch = $giper_baza_vary_switch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_bin_to_bytes(tree) {
        return Uint8Array.from(tree.kids, kid => parseInt(kid.value, 16));
    }
    $.$mol_tree2_bin_to_bytes = $mol_tree2_bin_to_bytes;
    function $mol_tree2_bin_from_bytes(bytes, span = $mol_span.unknown) {
        return $mol_tree2.list(Array.from(bytes, code => {
            return $mol_tree2.data(code.toString(16).padStart(2, '0'), [], span);
        }), span);
    }
    $.$mol_tree2_bin_from_bytes = $mol_tree2_bin_from_bytes;
    function $mol_tree2_bin_from_string(str, span = $mol_span.unknown) {
        return $mol_tree2_bin_from_bytes([...new TextEncoder().encode(str)], span);
    }
    $.$mol_tree2_bin_from_string = $mol_tree2_bin_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_xml_from_dom(dom) {
        switch (dom.nodeType) {
            case dom.DOCUMENT_NODE: {
                let kids = [];
                for (const kid of dom.childNodes) {
                    kids.push($mol_tree2_xml_from_dom(kid));
                }
                return $mol_tree2.list(kids);
            }
            case dom.PROCESSING_INSTRUCTION_NODE: {
                return $mol_tree2.struct('?', [
                    $mol_tree2.struct(dom.nodeName, dom.nodeValue.split(' ').map(chunk => {
                        const [, name, value] = /^(.*?)(?:="(.*?)")?$/.exec(chunk);
                        const kids = value ? [$mol_tree2.data(value)] : [];
                        return $mol_tree2.struct(name, kids);
                    }))
                ]);
            }
            case dom.DOCUMENT_TYPE_NODE: {
                const dom2 = dom;
                return $mol_tree2.struct('!', [
                    $mol_tree2.struct('DOCTYPE', [
                        $mol_tree2.struct(dom2.name)
                    ])
                ]);
            }
            case dom.ELEMENT_NODE: {
                let kids = [];
                for (const attr of dom.attributes) {
                    kids.push($mol_tree2.struct('@', [
                        $mol_tree2.struct(attr.nodeName, [
                            $mol_tree2.data(attr.nodeValue)
                        ])
                    ]));
                }
                for (const kid of dom.childNodes) {
                    const k = $mol_tree2_xml_from_dom(kid);
                    if (k.type || k.value)
                        kids.push(k);
                }
                return $mol_tree2.struct(dom.nodeName, kids);
            }
            case dom.COMMENT_NODE: {
                return $mol_tree2.struct('--', [
                    $mol_tree2.data(dom.nodeValue)
                ]);
            }
            case dom.TEXT_NODE: {
                if (!dom.nodeValue.trim())
                    return $mol_tree2.list([]);
                return $mol_tree2.data(dom.nodeValue.replace(/\s+/g, ' '));
            }
        }
        return $mol_fail(new Error(`Unsupported node ${dom.nodeName}`));
    }
    $.$mol_tree2_xml_from_dom = $mol_tree2_xml_from_dom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_vary_cast_blob(vary) {
        return ArrayBuffer.isView(vary) ? vary : null;
    }
    $.$giper_baza_vary_cast_blob = $giper_baza_vary_cast_blob;
    function $giper_baza_vary_cast_bool(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => Boolean(vary.byteLength),
            bool: vary => vary,
            bint: vary => Boolean(vary),
            real: vary => Boolean(vary),
            link: vary => vary.str !== '',
            text: vary => Boolean(vary),
            time: vary => Boolean(vary.valueOf()),
            dura: vary => Boolean(vary.valueOf()),
            span: vary => Boolean(vary.duration.valueOf()),
            dict: vary => Boolean(Reflect.ownKeys(vary).length),
            list: vary => Boolean(vary.length),
            elem: vary => Boolean(vary.attributes.length + vary.childNodes.length),
            tree: vary => Boolean(vary.value || vary.kids.length),
        });
    }
    $.$giper_baza_vary_cast_bool = $giper_baza_vary_cast_bool;
    function $giper_baza_vary_cast_bint(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => BigInt(vary.length),
            bool: vary => BigInt(vary),
            bint: vary => vary,
            real: vary => Number.isFinite(vary) ? BigInt(Math.trunc(vary)) : null,
            link: vary => null,
            text: vary => {
                try {
                    return vary ? BigInt(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => BigInt(vary.valueOf()),
            dura: vary => BigInt(vary.valueOf()),
            span: vary => BigInt(vary.duration.valueOf()),
            dict: vary => BigInt(Reflect.ownKeys(vary).length),
            list: vary => BigInt(vary.length),
            elem: vary => BigInt(vary.attributes.length + vary.childNodes.length),
            tree: vary => {
                try {
                    return BigInt(vary.value);
                }
                catch {
                    return BigInt(vary.kids.length);
                }
            },
        });
    }
    $.$giper_baza_vary_cast_bint = $giper_baza_vary_cast_bint;
    function $giper_baza_vary_cast_real(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => vary.length,
            bool: vary => Number(vary),
            bint: vary => Number(vary),
            real: vary => vary,
            link: vary => null,
            text: vary => vary ? Number(vary) : null,
            time: vary => vary.valueOf(),
            dura: vary => vary.valueOf(),
            span: vary => vary.duration.valueOf(),
            dict: vary => Reflect.ownKeys(vary).length,
            list: vary => vary.length,
            elem: vary => Number(vary.attributes.length + vary.childNodes.length),
            tree: vary => Number(vary.value || vary.kids.length),
        });
    }
    $.$giper_baza_vary_cast_real = $giper_baza_vary_cast_real;
    function $giper_baza_vary_cast_link(vary) {
        return vary instanceof $giper_baza_link ? vary : null;
    }
    $.$giper_baza_vary_cast_link = $giper_baza_vary_cast_link;
    function $giper_baza_vary_cast_text(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => $mol_base64_ae_encode(new Uint8Array(vary.buffer, vary.byteOffset, vary.byteLength)),
            bool: vary => String(vary),
            bint: vary => String(vary),
            real: vary => String(vary),
            link: vary => vary.str,
            text: vary => vary,
            time: vary => String(vary),
            dura: vary => String(vary),
            span: vary => String(vary),
            dict: vary => JSON.stringify(vary),
            list: vary => JSON.stringify(vary),
            elem: vary => $mol_dom_serialize(vary),
            tree: vary => String(vary),
        });
    }
    $.$giper_baza_vary_cast_text = $giper_baza_vary_cast_text;
    function $giper_baza_vary_cast_time(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => new $mol_time_moment(Number(vary & 0xffffffffffffn)),
            real: vary => {
                try {
                    return new $mol_time_moment(vary);
                }
                catch {
                    return null;
                }
            },
            link: vary => null,
            text: vary => {
                try {
                    return vary ? new $mol_time_moment(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => vary,
            dura: vary => null,
            span: vary => null,
            dict: vary => {
                try {
                    return new $mol_time_moment(vary);
                }
                catch {
                    return null;
                }
            },
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_time = $giper_baza_vary_cast_time;
    function $giper_baza_vary_cast_dura(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => new $mol_time_duration(Number(vary & 0xffffffffffffn)),
            real: vary => {
                try {
                    return new $mol_time_duration(vary);
                }
                catch {
                    return null;
                }
            },
            link: vary => null,
            text: vary => {
                try {
                    return new $mol_time_duration(vary);
                }
                catch {
                    return null;
                }
            },
            time: vary => null,
            dura: vary => vary,
            span: vary => null,
            dict: vary => new $mol_time_duration(vary),
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_dura = $giper_baza_vary_cast_dura;
    function $giper_baza_vary_cast_span(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => null,
            real: vary => null,
            link: vary => null,
            text: vary => {
                try {
                    return vary ? new $mol_time_interval(vary) : null;
                }
                catch {
                    return null;
                }
            },
            time: vary => new $mol_time_interval({ start: vary, duration: 0 }),
            dura: vary => null,
            span: vary => vary,
            dict: vary => {
                try {
                    return new $mol_time_interval(vary);
                }
                catch {
                    return null;
                }
            },
            list: vary => null,
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_span = $giper_baza_vary_cast_span;
    function $giper_baza_vary_cast_dict(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => null,
            bool: vary => null,
            bint: vary => null,
            real: vary => null,
            link: vary => null,
            text: vary => {
                if (!vary)
                    return null;
                try {
                    const res = JSON.parse(vary);
                    if (typeof res === 'object')
                        return res;
                    return null;
                }
                catch {
                    return null;
                }
            },
            time: vary => ({ ...vary }),
            dura: vary => ({ ...vary }),
            span: vary => ({ ...vary }),
            dict: vary => vary,
            list: vary => Object(vary[0]),
            elem: vary => null,
            tree: vary => null,
        });
    }
    $.$giper_baza_vary_cast_dict = $giper_baza_vary_cast_dict;
    function $giper_baza_vary_cast_list(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => [...vary],
            bool: vary => [vary],
            bint: vary => [vary.toString()],
            real: vary => Number.isFinite(vary) ? [vary] : null,
            link: vary => [vary.str],
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return [].concat(JSON.parse(vary));
                }
                catch {
                    return [vary];
                }
            },
            time: vary => [vary.toJSON()],
            dura: vary => [vary.toJSON()],
            span: vary => [vary.toJSON()],
            dict: vary => [vary],
            list: vary => vary,
            elem: vary => [$mol_dom_serialize(vary)],
            tree: vary => [vary.toString()],
        });
    }
    $.$giper_baza_vary_cast_list = $giper_baza_vary_cast_list;
    function $giper_baza_vary_cast_elem(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => $mol_jsx("body", null, $giper_baza_vary_cast_text(vary)),
            bool: vary => $mol_jsx("body", null, vary),
            bint: vary => $mol_jsx("body", null, vary),
            real: vary => $mol_jsx("body", null, vary),
            link: vary => $mol_jsx("body", null, vary.str),
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return vary ? $mol_dom_parse(vary, 'application/xhtml+xml').documentElement : null;
                }
                catch {
                    return $mol_jsx("body", null, vary);
                }
            },
            time: vary => $mol_jsx("body", null, vary),
            dura: vary => $mol_jsx("body", null, vary),
            span: vary => $mol_jsx("body", null, vary),
            dict: vary => $mol_jsx("body", null, JSON.stringify(vary)),
            list: vary => $mol_jsx("body", null, JSON.stringify(vary)),
            elem: vary => vary,
            tree: vary => $mol_jsx("body", null, vary),
        });
    }
    $.$giper_baza_vary_cast_elem = $giper_baza_vary_cast_elem;
    function $giper_baza_vary_cast_tree(vary) {
        return $giper_baza_vary_switch(vary, {
            none: vary => null,
            blob: vary => vary instanceof Uint8Array ? $mol_tree2_bin_from_bytes(vary) : null,
            bool: vary => $mol_tree2.struct(vary.toString()),
            bint: vary => $mol_tree2.struct(vary.toString()),
            real: vary => $mol_tree2.struct(vary.toString()),
            link: vary => $mol_tree2.struct(vary.str),
            text: vary => {
                if (!vary)
                    return null;
                try {
                    return $$.$mol_tree2_from_string(vary);
                }
                catch {
                    return $$.$mol_tree2.data(vary);
                }
            },
            time: vary => $mol_tree2.struct(vary.toString()),
            dura: vary => $mol_tree2.struct(vary.toString()),
            span: vary => $mol_tree2.struct(vary.toString()),
            dict: vary => $$.$mol_tree2_from_json(vary),
            list: vary => $$.$mol_tree2_from_json(vary),
            elem: vary => $$.$mol_tree2_xml_from_dom(vary),
            tree: vary => vary,
        });
    }
    $.$giper_baza_vary_cast_tree = $giper_baza_vary_cast_tree;
    $.$giper_baza_vary_cast_funcs = {
        none: () => null,
        blob: $giper_baza_vary_cast_blob,
        bool: $giper_baza_vary_cast_bool,
        bint: $giper_baza_vary_cast_bint,
        real: $giper_baza_vary_cast_real,
        link: $giper_baza_vary_cast_link,
        text: $giper_baza_vary_cast_text,
        time: $giper_baza_vary_cast_time,
        dura: $giper_baza_vary_cast_dura,
        span: $giper_baza_vary_cast_span,
        dict: $giper_baza_vary_cast_dict,
        list: $giper_baza_vary_cast_list,
        elem: $giper_baza_vary_cast_elem,
        tree: $giper_baza_vary_cast_tree,
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_pawn extends $mol_object {
        static tag = 'vals';
        static meta = null;
        land() {
            return null;
        }
        head() {
            return $giper_baza_link.hole;
        }
        land_link() {
            return this.land()?.link() ?? this.$.$giper_baza_auth.current().pass().lord();
        }
        link() {
            return new $giper_baza_link('___' + this.head()).resolve(this.land_link());
        }
        toJSON() {
            return this.link().str;
        }
        cast(Pawn) {
            return this.land().Pawn(Pawn).Head(this.head());
        }
        pawns(Pawn) {
            const land = this.land();
            const map = {
                term: () => land.Pawn(Pawn || $giper_baza_atom_vary),
                solo: () => land.Pawn(Pawn || $giper_baza_atom_vary),
                vals: () => land.Pawn(Pawn || $giper_baza_list_vary),
                keys: () => land.Pawn(Pawn || $giper_baza_dict),
            };
            return this.units().map(unit => map[unit.tag()]().Head(unit.self()));
        }
        units() {
            return this.units_of($giper_baza_link.hole);
        }
        units_of(peer) {
            const head = this.head();
            return this.land().sand_ordered({ head, peer }).filter(unit => !unit.dead() && unit.self().str !== '');
        }
        meta(next) {
            const prev = this.meta_of($giper_baza_link.hole);
            if (!next)
                return prev;
            if (prev?.str === next?.str)
                return prev;
            const head = this.head();
            this.land().post($giper_baza_link.hole, head, $giper_baza_link.hole, next);
            return next;
        }
        meta_of(peer) {
            const head = this.head();
            const unit = this.land().sand_ordered({ head, peer }).find(unit => !unit.dead() && unit.self().str === '') ?? null;
            return unit ? $giper_baza_vary_cast_link(this.land().sand_decode(unit)) : null;
        }
        filled() {
            return this.units().length > 0;
        }
        can_change() {
            return this.land().pass_rank(this.land().auth().pass()) >= $giper_baza_rank_post('late');
        }
        last_change() {
            const land = this.land();
            let last = 0;
            const visit = (sand) => {
                if (sand.time() > last)
                    last = sand.time();
                if (sand.tag() === 'term')
                    return;
                land.Pawn($giper_baza_pawn).Head(sand.self()).units().forEach(visit);
            };
            this.units().forEach(visit);
            return last ? $giper_baza_time_moment(last) : null;
        }
        authors() {
            const land = this.land();
            const peers = new Set();
            const visit = (sand) => {
                peers.add(land.lord_pass(sand.lord()));
                if (sand.tag() === 'term')
                    return;
                land.Pawn($giper_baza_pawn).Head(sand.self()).units_of(null).forEach(visit);
            };
            this.units_of(null).forEach(visit);
            return [...peers];
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head());
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_pawn.prototype, "link", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_pawn.prototype, "cast", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_pawn.prototype, "pawns", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_pawn.prototype, "units_of", null);
    __decorate([
        $mol_mem
    ], $giper_baza_pawn.prototype, "meta", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_pawn.prototype, "meta_of", null);
    __decorate([
        $mol_mem
    ], $giper_baza_pawn.prototype, "last_change", null);
    __decorate([
        $mol_mem
    ], $giper_baza_pawn.prototype, "authors", null);
    $.$giper_baza_pawn = $giper_baza_pawn;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_fund extends $mol_object {
        item_make;
        constructor(item_make) {
            super();
            this.item_make = item_make;
        }
        Head(head) {
            return this.item_make(head);
        }
        Data() {
            return this.Head($giper_baza_land_root.data);
        }
        Tine() {
            return this.Head($giper_baza_land_root.tine);
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_fund.prototype, "Head", null);
    $.$giper_baza_fund = $giper_baza_fund;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_bus extends $mol_object {
        name;
        handle;
        channel = null;
        constructor(name, handle) {
            super();
            this.name = name;
            this.handle = handle;
            try {
                this.channel = new BroadcastChannel(name);
                this.channel.onmessage = (event) => this.handle(event.data);
            }
            catch (error) {
                console.warn(error);
            }
        }
        destructor() {
            this.channel?.close();
        }
        send(data) {
            this.channel?.postMessage(data);
        }
    }
    $.$mol_bus = $mol_bus;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static prolog = '';
        static separator = ' ';
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            const params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            const chunks = [];
            for (const key in next) {
                if (next[key] !== null) {
                    chunks.push([key, next[key]].map(encodeURIComponent).join('='));
                }
            }
            return chunks.join(' ');
        }
        static go(next) {
            this.href(this.link(next));
        }
        static commit() { }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            const prefix = this.prefix;
            const dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_log() {
        return this.$mol_state_arg.value('giper_baza_log') !== null;
    }
    $.$giper_baza_log = $giper_baza_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function batch(host, items, task) {
        items.call(host);
        const skip = new Set();
        while (true) {
            const snap = $mol_wire_sync(items).call(host);
            const news = snap.filter(item => !skip.has(item));
            if (!news.length)
                break;
            $mol_wire_sync(task).call(host, news);
            for (const item of news)
                skip.add(item);
        }
    }
    $.$giper_baza_land_root = {
        data: new $giper_baza_link(''),
        tine: new $giper_baza_link('AQAAAAAA'),
    };
    class $giper_baza_land extends $mol_object {
        link() {
            return this.auth().pass().lord();
        }
        auth() {
            return this.$.$giper_baza_auth.current();
        }
        faces = new $giper_baza_face_map;
        _pass = new $mol_wire_dict();
        _seal_item = new $mol_wire_dict();
        _seal_shot = new $mol_wire_dict();
        _gift = new $mol_wire_dict();
        _sand = new $mol_wire_dict();
        pass_add(pass) {
            if (this._pass.has(pass.lord().str))
                return;
            this._pass.set(pass.lord().str, pass);
        }
        seal_add(seal) {
            const prev = this._seal_shot.get(seal.shot().str);
            if (prev)
                return;
            for (const hash of seal.hash_list()) {
                const prev = this._seal_item.get(hash.str);
                if ($giper_baza_unit_seal.compare(prev, seal) <= 0)
                    continue;
                if (prev?.alive_items.has(hash.str)) {
                    seal.alive_items.add(hash.str);
                    prev.alive_items.delete(hash.str);
                    if (!prev.alive_items.size)
                        this.seal_del(prev);
                }
                this._seal_item.set(hash.str, seal);
            }
            const peer = seal.lord().peer();
            this.faces.peer_time(peer.str, seal.time(), seal.tick());
            this._seal_shot.set(seal.shot().str, seal);
            this.faces.peer_summ_shift(peer.str, +1);
        }
        gift_add(gift) {
            const mate = gift.mate();
            const prev = this._gift.get(mate.str);
            if ($giper_baza_unit_gift.compare(prev, gift) <= 0)
                return;
            const peer = gift.lord().peer();
            if (prev)
                this.gift_del(prev);
            this.faces.peer_summ_shift(peer.str, +1);
            this._gift.set(mate.str, gift);
            this.faces.peer_time(peer.str, gift.time(), gift.tick());
            this.unit_seal_inc(gift);
            if ((prev?.rank() ?? $giper_baza_rank_deny) > gift.rank())
                this.rank_audit();
        }
        sand_add(sand) {
            let peers = this._sand.get(sand.head().str);
            if (!peers)
                this._sand.set(sand.head().str, peers = new $mol_wire_dict);
            let sands = peers.get(sand.lord().str);
            if (!sands)
                peers.set(sand.lord().str, sands = new $mol_wire_dict);
            const prev = sands.get(sand.self().str);
            if ($giper_baza_unit_sand.compare(prev, sand) <= 0)
                return;
            const peer = sand.lord().peer();
            if (prev)
                this.sand_del(prev);
            this.faces.peer_summ_shift(peer.str, +1);
            sands.set(sand.self().str, sand);
            this.faces.peer_time(peer.str, sand.time(), sand.tick());
            if (sand.encoded())
                this.unit_seal_inc(sand);
        }
        units_reaping = new Set();
        unit_reap(unit) {
            if (!this.mine().units_persisted.has(unit))
                return;
            this.units_reaping.add(unit);
        }
        unit_seal_inc(unit) {
            const seal = this.unit_seal(unit);
            if (!seal)
                return;
            seal.alive_items.add(unit.hash().str);
        }
        unit_seal_dec(unit) {
            const seal = this.unit_seal(unit);
            if (!seal)
                return;
            seal.alive_items.delete(unit.hash().str);
            if (!seal.alive_items.size)
                this.seal_del(seal);
        }
        seal_del(seal) {
            const shot = seal.shot();
            if (!this._seal_shot.has(shot.str))
                return;
            this._seal_shot.delete(shot.str);
            this.faces.peer_summ_shift(seal.lord().peer().str, -1);
            for (const hash of seal.hash_list()) {
                if (this._seal_item.get(hash.str) === seal) {
                    this._seal_item.delete(hash.str);
                }
            }
            this.unit_reap(seal);
        }
        gift_del(gift) {
            const prev = this._gift.get(gift.mate().str);
            if (prev !== gift)
                return;
            this._gift.delete(gift.mate().str);
            this.faces.peer_summ_shift(gift.lord().peer().str, -1);
            this.unit_reap(gift);
            this.unit_seal_dec(gift);
        }
        sand_del(sand) {
            const peers = this._sand.get(sand.head().str);
            if (!peers)
                return;
            const sands = peers.get(sand.lord().str);
            if (!sands)
                return;
            const prev = sands.get(sand.self().str);
            if (prev !== sand)
                return;
            sands.delete(sand.self().str);
            this.faces.peer_summ_shift(sand.lord().peer().str, -1);
            this.unit_reap(sand);
            if (sand.encoded())
                this.unit_seal_dec(sand);
        }
        lord_pass(lord) {
            return this._pass.get(lord.str) ?? null;
        }
        unit_seal(unit) {
            if (!unit.encoded())
                return null;
            const seal = this._seal_item.get(unit.hash().str);
            if (!seal)
                return null;
            if (seal.lord().str != unit.lord().str)
                return null;
            return seal;
        }
        sand_get(head, lord, self) {
            return this._sand.get(head.str)?.get(lord.str)?.get(self.str) ?? null;
        }
        _self_all = new $mol_wire_dict();
        self_make(idea = Math.floor(Math.random() * 2 ** 48)) {
            const auth = this.auth();
            const rank = this.pass_rank(auth.pass());
            if (rank < $giper_baza_rank_tier.post)
                $mol_fail(new Error(`Rank too low (${rank})`));
            for (let i = 0; i < 4096; ++i) {
                idea = $mol_hash_numbers([idea]);
                if (!idea)
                    continue;
                const idea_link = $giper_baza_link.from_int(idea);
                if (/[æÆ]/.test(idea_link.str))
                    continue;
                if (this._self_all.has(idea_link.str))
                    continue;
                this._self_all.set(idea_link.str, null);
                return idea_link;
            }
            $mol_fail(new Error(`Too long self generation`));
        }
        area_make(idea = Math.floor($mol_wire_sync(Math).random() * 2 ** 48)) {
            let id = '';
            while (true) {
                idea = $mol_hash_numbers([idea]);
                if (!idea)
                    continue;
                id = $giper_baza_link.from_int(idea).str;
                if (/[æÆ]/.test(id))
                    continue;
                break;
            }
            const link = new $giper_baza_link(this.link().lord().str + '_' + id);
            const area = this.$.$giper_baza_glob.Land(link);
            area.inherit();
            area.bus();
            area.sync_mine();
            area.sync_yard();
            return area;
        }
        sync_rights() {
            return new $mol_wire_atom('', () => this.inherit()).fresh();
        }
        inherit() {
            const area = this.link();
            const lord = this.link().lord();
            if (area.str === lord.str)
                return;
            const Lord = this.$.$giper_baza_glob.Land(lord);
            Lord.units_saving();
            const units = new Set();
            for (const gift of Lord._gift.values()) {
                const prev = $mol_wire_sync(this._gift).get(gift.mate().str);
                if ($giper_baza_unit_gift.compare(prev, gift) <= 0)
                    continue;
                const seal = Lord.unit_seal(gift);
                if (!seal)
                    continue;
                units.add(gift);
                units.add(seal);
                units.add(Lord.lord_pass(gift.lord()));
                const mate = gift.mate();
                if (mate.str)
                    units.add(Lord.lord_pass(mate));
            }
            let part = $giper_baza_pack_part.from([...units]);
            const pack = $giper_baza_pack.make([[this.link().str, part]]);
            part = pack.parts()[0][1];
            this.diff_apply(part.units);
        }
        Data(Pawn) {
            return this.Pawn(Pawn).Head($.$giper_baza_land_root.data);
        }
        Tine() {
            return this.Pawn($giper_baza_list_link).Head($.$giper_baza_land_root.tine);
        }
        Pawn(Pawn) {
            return new $giper_baza_fund((head) => {
                return Pawn.make({
                    land: $mol_const(this),
                    head: $mol_const(head),
                });
            });
        }
        total() {
            let total = this._gift.size + this._seal_item.size;
            for (const peers of this._sand.values()) {
                for (const units of peers.values()) {
                    total += units.size;
                }
            }
            return total;
        }
        king_pass() {
            return this.lord_pass(this.link().lord());
        }
        pass_rank(pass, next) {
            const prev = this.lord_rank(pass?.lord() ?? null);
            if (next === undefined)
                return prev;
            if (next === prev)
                return prev;
            this.give(pass, next);
            return next;
        }
        lord_tier(lord) {
            return $giper_baza_rank_tier_of(this.lord_rank(lord));
        }
        lord_rate(lord) {
            return $giper_baza_rank_rate_of(this.lord_rank(lord));
        }
        lord_rank(lord, next) {
            if (lord?.str === this.link().lord().str)
                return $giper_baza_rank_rule;
            if (next === undefined) {
                return this._gift.get(lord?.str ?? '')?.rank()
                    ?? this._gift.get($giper_baza_link.hole.str)?.rank()
                    ?? (this.encrypted() ? $giper_baza_rank_deny : $giper_baza_rank_read);
            }
            const pass = lord ? this.lord_pass(lord) : null;
            return this.pass_rank(pass, next);
        }
        diff_units(skip_faces = new $giper_baza_face_map) {
            this.units_signing();
            const skipped = new Map();
            const delta = new Set();
            const passes = new Set();
            function collect(unit) {
                const peer = unit.lord().peer().str;
                const face_limit = skip_faces.get(peer)?.time_tick ?? 0;
                if (unit.time_tick() > face_limit)
                    return delta.add(unit);
                const skipped_units = skipped.get(peer);
                if (skipped_units)
                    skipped_units.add(unit);
                else
                    skipped.set(peer, new Set([unit]));
            }
            for (const seal of this._seal_item.values()) {
                if (!seal.alive_items.size)
                    continue;
                collect(seal);
            }
            for (const gift of this._gift.values()) {
                collect(gift);
                if (gift.mate().str) {
                    if (skip_faces.has(gift.lord().peer().str))
                        continue;
                    const mate_pass = this.lord_pass(gift.mate());
                    if (mate_pass)
                        passes.add(mate_pass);
                }
            }
            for (const kids of this._sand.values()) {
                for (const peers of kids.values()) {
                    for (const sand of peers.values()) {
                        this.sand_load(sand);
                        collect(sand);
                    }
                }
            }
            for (const [peer, face] of skip_faces) {
                const skipped_units = skipped.get(peer);
                const skip_mass = skipped_units?.size ?? 0;
                if (skip_mass <= face.summ)
                    continue;
                $mol_wire_sync(this.$).$mol_log3_warn({
                    place: this,
                    message: 'Fail Summ',
                    hint: 'Relax and wait for full peer resync',
                    peer,
                    skip_mass,
                    peer_face: face,
                    self_face: this.faces.get(peer),
                });
                if (skipped_units)
                    for (const unit of skipped_units)
                        delta.add(unit);
            }
            for (const unit of delta) {
                if (skip_faces.has(unit.lord().peer().str))
                    continue;
                const pass = this.lord_pass(unit.lord());
                if (!pass)
                    return $mol_fail(new Error('No pass for lord'));
                passes.add(pass);
            }
            return [...passes, ...delta];
        }
        diff_part(skip_faces = new $giper_baza_face_map) {
            const units = this.diff_units(skip_faces);
            const faces = new $giper_baza_face_map;
            for (const unit of units) {
                const peer = unit.lord().peer();
                if (faces.has(peer.str))
                    continue;
                const face = this.faces.get(peer.str);
                if (!face)
                    continue;
                faces.set(peer.str, face.clone());
            }
            return new $giper_baza_pack_part(units, faces);
        }
        diff_parts(skip_faces = new $giper_baza_face_map) {
            return [[this.link().str, this.diff_part(skip_faces)]];
        }
        face_pack() {
            return $giper_baza_pack.make([[
                    this.link().str,
                    new $giper_baza_pack_part([], this.faces.clone()),
                ]]);
        }
        diff_apply(units, skip_load) {
            if (units.length === 0)
                return;
            if (!skip_load)
                this.loading();
            units = $mol_wire_sync(this.$).$giper_baza_unit_sort(units);
            const passes = new Map();
            const mixin_area = this.link().toBin();
            const mixin_lord = this.link().lord().toBin();
            for (const unit of units) {
                if (unit instanceof $giper_baza_auth_pass) {
                    passes.set(unit.hash().str, unit);
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_unit_seal) {
                    const lord_pass = this.lord_pass(unit.lord()) ?? passes.get(unit.lord().str);
                    if (!lord_pass)
                        return this.$.$mol_fail(new Error(`No Pass for Lord`, { cause: unit.lord() }));
                    if (!this.$.$giper_baza_unit_trusted_check(unit)) {
                        const mixin = unit.wide() ? mixin_lord : mixin_area;
                        const sens = unit.shot().mix(mixin);
                        const checked = $mol_wire_sync(lord_pass.auditor()).verify(sens, unit.sign());
                        if (!checked)
                            return $mol_fail(new Error(`Wrong Sign`));
                    }
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_unit_seal) {
                    $giper_baza_unit_trusted_grant(unit);
                }
            }
            for (const unit of units) {
                if (unit instanceof $giper_baza_auth_pass)
                    continue;
                if (this.lord_tier(unit.lord()) < unit.tier_min()) {
                    this.$.$mol_log3_warn({
                        message: 'Too low Tier',
                        tier_min: unit.tier_min().toString(2),
                        tier_actual: this.lord_tier(unit.lord()).toString(2),
                        hint: 'Relax. Unit is skipped.',
                        place: `${this}.diff_apply()`,
                    });
                    continue;
                }
                const lord_pass = this.lord_pass(unit.lord()) ?? passes.get(unit.lord().str);
                if (!lord_pass)
                    return this.$.$mol_fail(new Error(`No Pass for Lord`, { cause: unit.lord() }));
                switch (unit.kind()) {
                    case 'seal': {
                        const seal = unit;
                        if (this.lord_rate(unit.lord()) < seal.rate_min()) {
                            return this.$.$mol_fail(new Error('Too low Rate'));
                        }
                        this.seal_add(seal);
                        break;
                    }
                    case 'gift': {
                        const gift = unit;
                        if (!this.$.$giper_baza_unit_trusted_check(gift)) {
                            const seal = this.unit_seal(gift);
                            if (!seal)
                                return this.$.$mol_fail(new Error(`No Seal for Gift`, { cause: gift }));
                        }
                        if (gift.mate().str) {
                            const mate_pass = this.lord_pass(gift.mate()) ?? passes.get(gift.mate().str);
                            if (!mate_pass)
                                return this.$.$mol_fail(new Error(`No Pass for Mate`, { cause: gift }));
                            this.pass_add(mate_pass);
                        }
                        this.gift_add(gift);
                        break;
                    }
                    case 'sand': {
                        const sand = unit;
                        if (!this.$.$giper_baza_unit_trusted_check(sand)) {
                            const seal = this.unit_seal(sand);
                            if (!seal)
                                return this.$.$mol_fail(new Error(`No Seal for Sand`, { cause: sand }));
                        }
                        this.sand_add(sand);
                        break;
                    }
                    default: {
                        return this.$.$mol_fail(new Error(`Unsupported Kind`));
                    }
                }
                this.pass_add(lord_pass);
            }
            return units;
        }
        units_steal(donor) {
            this.diff_apply(donor.diff_units(), 'skip_load');
        }
        rank_audit() {
            start: while (true) {
                for (const [shot, seal] of this._seal_shot) {
                    const rank = this.lord_rank(seal.lord());
                    if (rank >= seal.rank_min())
                        continue;
                    this.seal_del(seal);
                }
                for (const [lord, gift] of this._gift) {
                    const tier = this.lord_tier(gift.lord());
                    if (tier >= gift.tier_min())
                        continue;
                    this.gift_del(gift);
                    continue start;
                }
                for (const [head, peers] of this._sand) {
                    for (const [peer, sands] of peers) {
                        for (const [self, sand] of sands) {
                            const tier = this.lord_tier(sand.lord());
                            if (tier >= sand.tier_min())
                                continue;
                            this.sand_del(sand);
                        }
                    }
                }
                break;
            }
        }
        fork(preset = [[null, $giper_baza_rank_read]]) {
            const land = this.$.$giper_baza_glob.land_grab(preset);
            land.Tine().items_vary([this.link()]);
            return land;
        }
        sand_ordered({ head, peer }) {
            this.sync();
            const queue = (peer?.str)
                ? [...this._sand.get(head.str)?.get(peer.str)?.values() ?? []]
                : [...this._sand.get(head.str)?.values() ?? []].flatMap(units => [...units.values()]);
            const slices = new Map;
            for (const sand of queue)
                slices.set(sand, 0);
            merge: if (head.str !== $.$giper_baza_land_root.tine.str) {
                const tines = (this.Tine()?.items_vary().slice().reverse() ?? [])
                    .map($giper_baza_vary_cast_link)
                    .filter($mol_guard_defined);
                if (!tines.length)
                    break merge;
                const exists = new Set(queue.map(sand => sand.self().str));
                const glob = this.$.$giper_baza_glob;
                let slice = 0;
                for (const link of tines) {
                    ++slice;
                    const land = glob.Land(link);
                    for (const sand of land.sand_ordered({ head, peer })) {
                        if (exists.has(sand.self().str))
                            continue;
                        queue.push(sand);
                        exists.add(sand.self().str);
                        slices.set(sand, slice);
                    }
                }
            }
            if (queue.length < 2)
                return queue;
            const compare = (left, right) => {
                return (slices.get(left) - slices.get(right)) || $giper_baza_unit_sand.compare(left, right);
            };
            queue.sort(compare);
            let entry = {
                sand: null,
                next: null,
                prev: null,
            };
            const key = peer === null ? (sand) => sand.path() : (sand) => sand.self().str;
            const by_key = new Map([[entry.prev, entry]]);
            const by_self = new Map([[entry.prev, entry]]);
            while (queue.length) {
                const last = queue.pop();
                by_key.get(entry.prev).next = key(last);
                const item = { sand: last, next: null, prev: entry.prev };
                by_key.set(key(last), item);
                const exists = by_self.get(last.self().str);
                if (!exists || compare(exists.sand, last) < 0) {
                    by_self.set(last.self().str, item);
                }
                entry.prev = key(last);
                for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                    const kid = queue[cursor];
                    let lead = by_self.get(kid.lead().str || null);
                    if (!lead)
                        continue;
                    while (lead.next && (compare(by_key.get(lead.next).sand, kid) < 0))
                        lead = by_key.get(lead.next);
                    const exists1 = by_key.get(key(kid));
                    if (exists1) {
                        if ((lead.sand ? key(lead.sand) : null) === exists1.prev) {
                            exists1.sand = kid;
                            if (cursor === queue.length - 1)
                                queue.pop();
                            continue;
                        }
                        by_key.get(exists1.prev).next = exists1.next;
                        by_key.get(exists1.next).prev = exists1.prev;
                    }
                    const follower = by_key.get(lead.next);
                    follower.prev = key(kid);
                    const item = { sand: kid, next: lead.next, prev: lead.sand ? key(lead.sand) : null };
                    by_key.set(key(kid), item);
                    const exists2 = by_self.get(kid.self().str);
                    if (!exists2 || compare(exists2.sand, kid) < 0) {
                        by_self.set(kid.self().str, item);
                    }
                    lead.next = key(kid);
                    if (cursor === queue.length - 1)
                        queue.pop();
                    cursor = queue.length;
                }
            }
            const res = [];
            while (entry.next !== null) {
                entry = by_key.get(entry.next);
                res.push(entry.sand);
            }
            return res;
        }
        join() {
            this.encrypted(this.encrypted());
        }
        give(mate_pass, rank) {
            this.join();
            const gift = $giper_baza_unit_gift.make();
            const lord_pass = this.auth().pass();
            gift._land = this;
            gift.lord(lord_pass.lord());
            gift.rank(rank);
            gift.time_tick(this.faces.tick().time_tick);
            if (mate_pass)
                gift.mate(mate_pass.lord());
            if (rank >= $giper_baza_rank_read) {
                const secret_land = this.secret();
                if (secret_land) {
                    if (!mate_pass)
                        return $mol_fail(new Error(`Encrypted land can't be shared to everyone`));
                    const secret_mutual = this.auth().secret_mutual(mate_pass);
                    if (secret_mutual) {
                        const code = $mol_wire_sync(secret_mutual).close(secret_land, gift.salt());
                        gift.code().set(code);
                    }
                }
            }
            else {
                if (!this.encrypted())
                    $mol_fail(new Error('Unencrypted Land is always public'));
            }
            $giper_baza_unit_trusted_grant(gift);
            this.diff_apply([lord_pass, ...$mol_maybe(mate_pass), gift]);
            this.broadcast();
            return gift;
        }
        post(lead, head, self, vary, tag = 'term') {
            this.join();
            const lord_pass = this.auth().pass();
            const encrypted = vary === null ? false : this.encrypted();
            let open = $giper_baza_link_base(this.link(), () => $giper_baza_vary.pack([vary]));
            const length = encrypted ? Math.ceil((open.byteLength + 1) / 16) * 16 : open.byteLength;
            const sand = $giper_baza_unit_sand.make(length, tag);
            sand._open = open;
            sand._land = this;
            $giper_baza_unit_trusted_grant(sand);
            sand.time_tick(this.faces.tick().time_tick);
            sand.lord(lord_pass.lord());
            sand.lead(lead);
            sand.head(head);
            sand._vary = vary;
            sand.self(self ?? this.self_make($mol_hash_numbers(open, sand.idea_seed())));
            this.diff_apply([lord_pass, sand]);
            this.broadcast();
            return sand;
        }
        sand_move(sand, head, seat, peer = $giper_baza_link.hole) {
            if (sand.dead())
                $mol_fail(new RangeError(`Can't move wiped sand`));
            const units = this.sand_ordered({ head, peer }).filter(unit => !unit.dead());
            if (seat > units.length)
                $mol_fail(new RangeError(`Seat (${seat}) out of units length (${units.length})`));
            const lead = seat ? units[seat - 1].self() : $giper_baza_link.hole;
            const vary = this.sand_decode(sand);
            if (sand.head() === head) {
                const seat_prev = units.indexOf(sand);
                if (seat === seat_prev)
                    return;
                if (seat === seat_prev + 1)
                    return;
                const prev = seat_prev ? units[seat_prev - 1].self() : $giper_baza_link.hole;
                const next = units[seat_prev + 1];
                if (next)
                    this.post(prev, head, next.self(), this.sand_decode(next), next.tag());
            }
            else {
                this.sand_wipe(sand);
            }
            return this.post(lead, head, sand.self(), vary, sand.tag());
        }
        sand_wipe(sand, peer = $giper_baza_link.hole) {
            const head = sand.head();
            const units = this.sand_ordered({ head, peer }).filter(unit => !unit.dead());
            const seat = units.indexOf(sand);
            if (seat < 0)
                return sand;
            return this.post(seat ? units[seat - 1].self() : $giper_baza_link.hole, head, sand.self(), null, 'term');
        }
        broadcast() {
            this.$.$giper_baza_glob.yard().lands_news.add(this.link().str);
        }
        sync() {
            this.loading();
            this.sync_rights();
            this.bus();
            this.sync_mine();
            this.sync_yard();
            return this;
        }
        destructor() {
            Promise.resolve().then(() => {
                this.$.$giper_baza_glob.yard().forget_land(this);
            });
        }
        mine() {
            $mol_wire_solid();
            return this.$.$giper_baza_mine.land(this.link());
        }
        sync_mine() {
            return new $mol_wire_atom('', () => this.units_saving()).fresh();
        }
        sync_yard() {
            const root = new $mol_wire_atom('sync_yard', () => this.$.$giper_baza_glob.yard().sync_land(this.link()));
            setTimeout(() => root.fresh());
            return root;
        }
        bus() {
            return new this.$.$mol_bus(`$giper_baza_land:${this.link()}`, $mol_wire_async(buf => {
                const pack = new $giper_baza_pack(buf);
                const part = new Map(pack.parts()).get(this.link().str);
                for (const unit of part.units) {
                    $giper_baza_unit_trusted_grant(unit);
                    this.mine().units_persisted.add(unit);
                }
                this.diff_apply(part.units);
            }));
        }
        loading() {
            $mol_wire_solid();
            let units = $mol_wire_sync(this.mine()).units_load();
            if (this.$.$giper_baza_log())
                $mol_wire_sync(this.$).$mol_log3_rise({
                    place: this,
                    message: 'Load Unit',
                    units: units,
                });
            $mol_wire_sync(this).diff_apply(units, 'skip_load');
        }
        sand_encoding() {
            this.loading();
            const sync = $mol_wire_sync(this);
            for (const kids of this._sand.values()) {
                for (const units of kids.values()) {
                    for (const sand of units.values()) {
                        const sync_sand = $mol_wire_sync(sand);
                        if (sync_sand._vary === undefined)
                            continue;
                        if (sync_sand._ball)
                            continue;
                        sync.sand_encode(sand);
                    }
                }
            }
        }
        units_unsigned() {
            const signing = [];
            for (const gift of this._gift.values()) {
                if (this.unit_seal(gift))
                    continue;
                signing.push(gift);
            }
            for (const kids of this._sand.values()) {
                for (const units of kids.values()) {
                    for (const sand of units.values()) {
                        if (this.unit_seal(sand))
                            continue;
                        signing.push(sand);
                    }
                }
            }
            return signing;
        }
        units_signing() {
            this.sand_encoding();
            batch(this, this.units_unsigned, this.units_sign);
        }
        units_unsaved() {
            const mine = this.mine();
            const persisting = new Set();
            const check_lord = (lord) => {
                const pass = this.lord_pass(lord);
                if (!pass)
                    return;
                if (mine.units_persisted.has(pass))
                    return;
                persisting.add(pass);
            };
            for (const gift of this._gift.values()) {
                if (mine.units_persisted.has(gift))
                    continue;
                persisting.add(gift);
                check_lord(gift.lord());
                check_lord(gift.mate());
            }
            for (const kids of this._sand.values()) {
                for (const units of kids.values()) {
                    for (const sand of units.values()) {
                        if ($mol_wire_sync(mine.units_persisted).has(sand))
                            continue;
                        persisting.add(sand);
                        check_lord(sand.lord());
                    }
                }
            }
            for (const seal of this._seal_shot.values()) {
                if (!seal.alive_items.size)
                    continue;
                if (mine.units_persisted.has(seal))
                    continue;
                persisting.add(seal);
            }
            return [...persisting];
        }
        units_saving() {
            this.units_signing();
            batch(this, this.units_unsaved, this.units_save);
        }
        async units_save(units) {
            const mine = this.mine();
            const part = new $giper_baza_pack_part(units);
            const pack = $giper_baza_pack.make([[this.link().str, part]]);
            this.bus().send(pack.buffer);
            const reaping = [...this.units_reaping];
            this.units_reaping.clear();
            await $mol_wire_async(mine).units_save({ ins: units, del: reaping });
            if (this.$.$giper_baza_log())
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Save Unit',
                    ins: units,
                    del: reaping,
                });
        }
        async units_sign(units) {
            await Promise.resolve();
            const lands = new Map();
            for (const unit of units) {
                if (!unit._land)
                    continue;
                let us = lands.get(unit._land);
                if (us)
                    us.push(unit.hash());
                else
                    lands.set(unit._land, [unit.hash()]);
            }
            const me = this.auth().pass().lord().str;
            for (const seal of this._seal_shot.values()) {
                if (seal.alive_full())
                    continue;
                if (seal.lord().str !== me)
                    continue;
                seal._land ??= this;
                let us = lands.get(this);
                if (!us)
                    lands.set(seal._land, us = []);
                const hashes = seal.alive_list();
                us.push(...hashes);
            }
            const threads = [...lands.entries()].flatMap(([land, hashes]) => {
                const auth = land.auth();
                const rate = $giper_baza_rank_rate_of(land.pass_rank(auth.pass()));
                const wide = Boolean(land.link().area().str);
                return $mol_array_chunks(hashes, $giper_baza_unit_seal_limit).map(async (hashes) => {
                    const seal = $giper_baza_unit_seal.make(hashes.length, wide);
                    seal.lord(auth.pass().lord());
                    seal.hash_list(hashes);
                    seal._land = this;
                    do {
                        seal.time_tick(this.faces.tick().time_tick);
                        const sens = seal.shot().mix(this.link());
                        const sign = await auth.signer().sign(sens);
                        seal.sign(sign);
                    } while (seal.rate_min() > rate);
                    return seal;
                });
            });
            const seals = await Promise.all(threads);
            for (const seal of seals) {
                for (const hash of seal.hash_list())
                    seal.alive_items.add(hash.str);
                this.seal_add(seal);
            }
            return seals;
        }
        async sand_encode(sand) {
            let bin = sand._open;
            if (sand._vary !== null) {
                const secret = sand._land.secret();
                if (secret)
                    bin = await secret.encrypt(bin, sand.salt());
            }
            sand.ball(bin);
            return sand;
        }
        sand_load(sand) {
            if (sand._ball)
                return;
            sand._ball = sand.big() ? $mol_wire_sync(this.mine()).ball_load(sand) : sand.data();
        }
        sand_decode(sand) {
            try {
                const open = this.sand_decrypt(sand);
                return $giper_baza_link_base(this.link(), () => $giper_baza_vary.take(open)[0]);
            }
            catch (error) {
                if (error instanceof Promise)
                    return $mol_fail_hidden(error);
                this.$.$mol_fail_log(error);
                return null;
            }
        }
        sand_decrypt(sand) {
            if (this.sand_get(sand.head(), sand.lord(), sand.self()) !== sand) {
                for (const id of this.Tine().items_vary() ?? []) {
                    const open = this.$.$giper_baza_glob.Land($giper_baza_vary_cast_link(id)).sand_decrypt(sand);
                    if (open)
                        return open;
                }
                return undefined;
            }
            const secret = this.secret();
            if (sand._open)
                return sand._open;
            if (!sand._ball)
                sand._ball = sand.big() ? $mol_wire_sync(this.mine()).ball_load(sand) : sand.data();
            if (secret && sand._ball && !sand.dead()) {
                try {
                    sand._open = $mol_wire_sync(secret).decrypt(sand._ball, sand.salt());
                }
                catch (error) {
                    if ($mol_fail_catch(error)) {
                        if (error.message)
                            $mol_fail_hidden(error);
                        else
                            $mol_fail_hidden(new Error(`Can't decrypt`, { cause: error }));
                    }
                }
            }
            else {
                sand._open = sand._ball;
            }
            return sand._open;
        }
        encryptable() {
            return !this._sand.size;
        }
        encrypted(next) {
            $mol_wire_solid();
            const gift = this._gift.get(this.link().str);
            const prev = gift?.code_exists() ?? false;
            if (next === undefined)
                return prev;
            if (this.faces.size) {
                if (prev === next)
                    return prev;
                $mol_fail(new Error(`Change encryption is forbidden`));
            }
            const auth = this.auth();
            const unit = $mol_wire_sync($giper_baza_unit_gift).make();
            $giper_baza_unit_trusted_grant(unit);
            unit.rank($giper_baza_rank_rule);
            unit.time_tick(this.faces.tick().time_tick);
            unit.lord(auth.pass().lord());
            unit.mate(auth.pass().lord());
            unit._land = this;
            if (next) {
                const secret = $mol_wire_sync($mol_crypto_sacred).make();
                const secret_mutual = auth.secret_mutual(auth.pass());
                const secret_closed = $mol_wire_sync(secret_mutual).close(secret, unit.salt());
                unit.code().set(secret_closed);
            }
            this.diff_apply([auth.pass(), unit]);
            return next;
        }
        secret() {
            if (!this.encrypted())
                return null;
            const auth = this.auth();
            const gift = this._gift.get(auth.pass().lord().str);
            if (!gift)
                return $mol_fail(new Error(`Access denied`));
            if (!gift.code_exists())
                return $mol_fail(new Error(`No key to decrypt`));
            const secret_mutual = auth.secret_mutual(this.lord_pass(gift.lord()));
            if (!secret_mutual)
                return $mol_fail(new Error(`Can't decrypt secret`));
            return new $mol_crypto_sacred($mol_wire_sync(secret_mutual).open(gift.code(), gift.salt()).buffer);
        }
        dump() {
            this.units_saving();
            const units = [];
            for (const gift of this._gift.values())
                units.push(gift);
            for (const heads of this._sand.values()) {
                for (const sands of heads.values()) {
                    for (const sand of sands.values()) {
                        units.push(sand);
                    }
                }
            }
            return {
                land: this.link(),
                units
            };
        }
        ;
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return $mol_term_color.blue('$giper_baza_land')
                + $mol_term_color.magenta(` @` + this.link());
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_auto(this.faces.stat));
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "lord_pass", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "self_make", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "area_make", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync_rights", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "inherit", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "Data", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "Tine", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "Pawn", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "total", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "king_pass", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "pass_rank", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "face_pack", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "diff_apply", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "units_steal", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "fork", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_ordered", null);
    __decorate([
        $mol_mem,
        $mol_action
    ], $giper_baza_land.prototype, "join", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "give", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "post", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "sand_move", null);
    __decorate([
        $mol_action
    ], $giper_baza_land.prototype, "sand_wipe", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "mine", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync_mine", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sync_yard", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "bus", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "loading", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "sand_encoding", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "units_unsigned", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "units_signing", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "units_unsaved", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "units_saving", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_load", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_decode", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_land.prototype, "sand_decrypt", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "encryptable", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "encrypted", null);
    __decorate([
        $mol_mem
    ], $giper_baza_land.prototype, "secret", null);
    $.$giper_baza_land = $giper_baza_land;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_unit_kind;
    (function ($giper_baza_unit_kind) {
        $giper_baza_unit_kind[$giper_baza_unit_kind["sand"] = $giper_baza_slot_kind.sand] = "sand";
        $giper_baza_unit_kind[$giper_baza_unit_kind["gift"] = $giper_baza_slot_kind.gift] = "gift";
        $giper_baza_unit_kind[$giper_baza_unit_kind["seal"] = $giper_baza_slot_kind.seal] = "seal";
        $giper_baza_unit_kind[$giper_baza_unit_kind["pass"] = $giper_baza_slot_kind.pass] = "pass";
    })($giper_baza_unit_kind = $.$giper_baza_unit_kind || ($.$giper_baza_unit_kind = {}));
    $.$giper_baza_unit_trusted = new WeakSet();
    function $giper_baza_unit_trusted_grant(unit) {
        if (unit instanceof $giper_baza_auth_pass)
            return;
        $.$giper_baza_unit_trusted.add(unit);
    }
    $.$giper_baza_unit_trusted_grant = $giper_baza_unit_trusted_grant;
    function $giper_baza_unit_trusted_check(unit) {
        if (unit instanceof $giper_baza_auth_pass)
            return true;
        return $.$giper_baza_unit_trusted.has(unit);
    }
    $.$giper_baza_unit_trusted_check = $giper_baza_unit_trusted_check;
    function $giper_baza_unit_sort(units) {
        const nodes = new Map();
        const graph = new $mol_graph();
        for (const unit of units) {
            if (unit instanceof $giper_baza_auth_pass) {
                nodes.set(unit.lord().str, unit);
            }
            else {
                if (unit instanceof $giper_baza_unit_sand && !unit.encoded())
                    continue;
                const self = unit.hash().str;
                nodes.set(self, unit);
            }
        }
        for (const unit of units) {
            if (unit instanceof $giper_baza_auth_pass)
                continue;
            unit.choose({
                gift: gift => {
                    graph.link(gift, nodes.get(gift.lord().str) ?? null, 1);
                    graph.link(gift, null, 0);
                    if (gift.lord().str === gift.mate().str)
                        return;
                    graph.link(nodes.get(gift.mate().str) ?? null, gift, 1);
                },
                sand: sand => {
                    graph.link(sand, nodes.get(sand.lord().str) ?? null, 1);
                    graph.link(sand, null, 1);
                },
                seal: seal => {
                    graph.link(seal, nodes.get(seal.lord().str) ?? null, 0);
                    graph.link(seal, null, 0);
                    for (const hash of seal.hash_list()) {
                        graph.link(nodes.get(hash.str) ?? null, seal, 1);
                    }
                }
            });
        }
        graph.acyclic(e => e);
        return [...graph.sorted].filter(Boolean);
    }
    $.$giper_baza_unit_sort = $giper_baza_unit_sort;
    class $giper_baza_unit_base extends $mol_buffer {
        static compare(left, right) {
            if (!left && !right)
                return 0;
            if (!left)
                return +1;
            if (!right)
                return -1;
            return (right.time() - left.time())
                || $giper_baza_link_compare(left.lord(), right.lord())
                || (right.tick() - left.tick());
        }
        static narrow(buf) {
            const kind = $giper_baza_unit_kind[new $mol_buffer(buf).uint8(0)];
            const Type = {
                sand: $giper_baza_unit_sand,
                gift: $giper_baza_unit_gift,
                seal: $giper_baza_unit_seal,
                pass: $giper_baza_auth_pass,
            }[kind];
            return new Type(buf);
        }
        constructor(buffer, byteOffset = 0, byteLength = buffer.byteLength) {
            super(buffer, byteOffset, byteLength);
        }
        kind(next) {
            const val = this.uint8(0, next && $giper_baza_unit_kind[next]);
            const kind = $giper_baza_unit_kind[val];
            if (kind)
                return kind;
            $mol_fail(new Error(`Unknown unit kind (${val})`));
        }
        choose(ways) {
            return ways[this.kind()](this);
        }
        path() {
            throw new Error('Unimplemented');
        }
        id6(offset, next) {
            if (next === undefined) {
                return $giper_baza_link.from_bin(new Uint8Array(this.buffer, this.byteOffset + offset, 6));
            }
            else {
                const bin = next.toBin();
                if (bin.byteLength === 0)
                    return next;
                if (bin.byteLength !== 6)
                    $mol_fail(new Error(`Wrong Link size (${next})`));
                this.asArray().set(bin, this.byteOffset + offset);
                return next;
            }
        }
        id12(offset, next) {
            if (next === undefined) {
                return $giper_baza_link.from_bin(new Uint8Array(this.buffer, this.byteOffset + offset, 12));
            }
            else {
                const bin = next.toBin();
                if (bin.byteLength === 0)
                    return next;
                if (bin.byteLength !== 12)
                    $mol_fail(new Error(`Wrong Link size (${next})`));
                this.asArray().set(bin, this.byteOffset + offset);
                return next;
            }
        }
        time(next) {
            return this.uint32(4, next);
        }
        moment() {
            return new $mol_time_moment(Number(this.time() * 1000));
        }
        tick(next) {
            return this.uint16(2, next);
        }
        time_tick(next) {
            if (!next)
                return this.tick() + this.time() * 2 ** 16;
            this.tick(next % 2 ** 16);
            this.time(Math.floor(next / 2 ** 16));
            return next;
        }
        _lord = null;
        lord(next) {
            if (next)
                return this._lord = this.id12(8, next);
            return this._lord ?? (this._lord = this.id12(8));
        }
        salt() {
            return new Uint8Array(this.buffer, this.byteOffset + 2, 16);
        }
        hash() {
            return $giper_baza_link.hash_bin(this.asArray());
        }
        tier_min() {
            return $giper_baza_rank_tier.rule;
        }
        encoded() {
            return true;
        }
        _land = null;
        dump() {
            return {};
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return this.inspect();
        }
        inspect() {
            const hash = $mol_term_color.cyan('#' + this.hash().str);
            const lord = $mol_term_color.magenta('@' + this.lord().str);
            const time = $mol_term_color.gray($giper_baza_time_dump(this.time(), this.tick()));
            return `${lord} ${hash} ${time}`;
        }
        toJSON() {
            return this.toString();
        }
        toString() {
            const hash = '#' + this.hash().str;
            const lord = '@' + this.lord().str;
            const time = $giper_baza_time_dump(this.time(), this.tick());
            return `${lord} ${hash} ${time}`;
        }
    }
    $.$giper_baza_unit_base = $giper_baza_unit_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memory_pool extends Object {
        _free;
        constructor(size = Number.POSITIVE_INFINITY) {
            super();
            this._free = {
                from: -1,
                size: 0,
                next: {
                    from: 0,
                    size,
                    next: null,
                }
            };
        }
        acquire(size) {
            let prev = this._free;
            let next = prev.next;
            let max = 0;
            while (next.size < size) {
                if (next.size > max)
                    max = next.size;
                prev = next;
                next = next.next;
                if (!next)
                    $mol_fail(new Error(`No free space\nneed: ${size}\nhave: ${max}`));
            }
            const from = next.from;
            if (next.size === size) {
                prev.next = next.next;
            }
            else {
                next.from += size;
                next.size -= size;
            }
            return from;
        }
        release(from, size) {
            let prev = this._free;
            let next = prev.next;
            while (next.from < from) {
                prev = next;
                next = next.next;
                if (!next)
                    $mol_fail(new Error('Release out of allocated', { cause: { last: prev, from, size } }));
            }
            if ((from + size > next.from) || (prev.from + prev.size > from)) {
                $mol_fail(new Error('Double release', { cause: { prev, next, from, size } }));
            }
            const begin = prev.from + prev.size === from;
            const end = from + size === next.from;
            if (begin) {
                if (end) {
                    prev.size += size + next.size;
                    prev.next = next.next;
                }
                else {
                    prev.size += size;
                }
            }
            else {
                if (end) {
                    next.from -= size;
                    next.size += size;
                }
                else {
                    prev.next = { from, size, next };
                }
            }
        }
        empty() {
            const first = this._free.next;
            return first.next === null && first.from === 0;
        }
        acquired() {
        }
    }
    $.$mol_memory_pool = $mol_memory_pool;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_unit_seal_limit = 10;
    class $giper_baza_unit_seal extends $giper_baza_unit_base {
        static length(size) {
            return Math.ceil((84 + size * 12) / 8) * 8;
        }
        static make(size, wide) {
            const seal = this.from(this.length(size));
            seal.kind('seal');
            seal.meta({ size, wide });
            return seal;
        }
        meta(next) {
            return this.uint8(1, next && (next.size | (next.wide ? 0b1000_0000 : 0)));
        }
        size() {
            return this.meta() & 0b1111;
        }
        wide() {
            return Boolean(this.meta() & 0b1000_0000);
        }
        alive_items = new Set;
        alive_full() {
            return this.alive_items.size === $.$giper_baza_unit_seal_limit;
        }
        alive_list() {
            const alive = this.alive_items;
            return this.hash_list().filter(hash => alive.has(hash.str));
        }
        hash_item(index, next) {
            return this.id12(20 + index * 12, next);
        }
        _hash_list;
        hash_list(next) {
            if (next) {
                for (let i = 0; i < next.length; ++i) {
                    this.hash_item(i, next[i]);
                }
                return this._hash_list = next;
            }
            else {
                const list = [];
                const count = this.size();
                for (let i = 0; i < count; ++i) {
                    list.push(this.hash_item(i));
                }
                return this._hash_list = list;
            }
        }
        shot() {
            return $giper_baza_link.hash_bin(new Uint8Array(this.buffer, this.byteOffset, this.byteLength - 64));
        }
        sign(next) {
            const buf = new Uint8Array(this.buffer, this.byteOffset + this.byteLength - 64, 64);
            if (next)
                buf.set(next);
            return buf;
        }
        work() {
            let int = new Uint32Array(this.hash().toBin().buffer)[0];
            let count = 0;
            while (int & 1) {
                int >>>= 1;
                ++count;
            }
            return count;
        }
        rate_min() {
            return $giper_baza_rank_work_rates[this.work()];
        }
        tier_min() {
            return $giper_baza_rank_tier.post;
        }
        rank_min() {
            return this.tier_min() | this.rate_min();
        }
        path() {
            return `seal:${this.lord()}/${this.hash().str}`;
        }
        inspect() {
            const items = this.hash_list().map(hash => $mol_term_color.cyan('#' + hash.str)).join(', ');
            const kind = $mol_term_color.green('%');
            return `${super.inspect()} ${kind} ${items}`;
        }
        toString() {
            const items = this.hash_list().map(hash => '#' + hash.str).join(', ');
            return `${super.toString()} % ${items}`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' ✍ ', $mol_dev_format_shade($giper_baza_time_dump(this.time(), this.tick())), ' #', $mol_dev_format_auto(this.hash()), ' ', $mol_dev_format_auto(this.hash_list()));
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_unit_seal.prototype, "sign", null);
    __decorate([
        $mol_action
    ], $giper_baza_unit_seal, "make", null);
    $.$giper_baza_unit_seal = $giper_baza_unit_seal;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $giper_baza_unit_sand_tag;
    (function ($giper_baza_unit_sand_tag) {
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["term"] = 0] = "term";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["solo"] = 64] = "solo";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["vals"] = 128] = "vals";
        $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag["keys"] = 192] = "keys";
    })($giper_baza_unit_sand_tag = $.$giper_baza_unit_sand_tag || ($.$giper_baza_unit_sand_tag = {}));
    class $giper_baza_unit_sand extends $giper_baza_unit_base {
        static size_equator = 63;
        static size_max = 2 ** 16;
        _vary = undefined;
        _open = null;
        static length(size) {
            if (size > 2 ** 16)
                throw new Error(`Size too large (${size})`);
            return size > $giper_baza_unit_sand.size_equator ? 52 : Math.ceil((38 + size) / 8) * 8;
        }
        static length_ball(size) {
            if (size > 2 ** 16)
                throw new Error(`Size too large (${size})`);
            return size > $giper_baza_unit_sand.size_equator ? Math.ceil((size - 4) / 8) * 8 + 4 : 0;
        }
        static make(size, tag = 'term') {
            if (size >= 2 ** 16)
                throw new Error(`Size too large (${size})`);
            const sand = this.from(this.length(size));
            sand.kind('sand');
            if (size > $giper_baza_unit_sand.size_equator) {
                sand.uint16(38, size % 2 ** 16);
                size = 0;
            }
            sand.uint8(1, size | $giper_baza_unit_sand_tag[tag]);
            return sand;
        }
        tag() {
            return $giper_baza_unit_sand_tag[this.uint8(1) & 0b11_00_0000];
        }
        big() {
            return this.size() > $giper_baza_unit_sand.size_equator;
        }
        size() {
            let hint = this.uint8(1) & 0b111_111;
            return hint || this.uint16(38) || 2 ** 16;
        }
        dead() {
            if (this._vary === null)
                return true;
            if (this.size() > 1)
                return false;
            if (this.uint8(38) !== 78)
                return false;
            return true;
        }
        _self;
        self(next) {
            if (next === undefined && this._self !== undefined)
                return this._self;
            else
                return this._self = this.id6(20, next);
        }
        _head;
        head(next) {
            if (next === undefined && this._head !== undefined)
                return this._head;
            else
                return this._head = this.id6(26, next);
        }
        _lead;
        lead(next) {
            if (next === undefined && this._lead !== undefined)
                return this._lead;
            else
                return this._lead = this.id6(32, next);
        }
        path() {
            return `sand:${this.head().str || '__root__'}/${this.lord()}/${this.self().str || '__meta__'}`;
        }
        _shot;
        shot(next) {
            if (!this.big())
                throw new Error('Access to Shot of small Sand is unavailable');
            if (next)
                return this._shot = this.id12(40, next);
            else
                return this._shot = this._shot ?? this.id12(40);
        }
        _data;
        data(next) {
            if (this.big())
                throw new Error('Access to Data of large Sand is unavailable');
            const data = this._data ?? new Uint8Array(this.buffer, this.byteOffset + 38, this.size());
            if (next)
                data.set(next);
            return data;
        }
        _ball;
        ball(next) {
            if (next === undefined) {
                if (this._ball)
                    return this._ball;
                if (this.big())
                    return this._ball;
                return this._ball = this.data();
            }
            else {
                if (this.big()) {
                    this.shot($giper_baza_link.hash_bin(next));
                    return this._ball = next;
                }
                else {
                    return this._ball = this.data(next);
                }
            }
        }
        encoded() {
            return !this._open || !!this._ball;
        }
        hash() {
            if (!this.encoded())
                return $mol_fail(new Error('No Hash for incompleted Sand', { cause: { sand: this } }));
            return super.hash();
        }
        idea_seed() {
            return $mol_hash_numbers(new Uint8Array(this.buffer, this.byteOffset + 26, 12));
        }
        dump() {
            return {
                kind: this.kind(),
                lord: this.lord(),
                lead: this.lead(),
                head: this.head(),
                self: this.self(),
                tag: this.tag(),
                size: this.size(),
                time: this.moment().toString('YYYY-MM-DD hh:mm:ss'),
            };
        }
        tier_min() {
            return (this.head().str === $giper_baza_land_root.tine.str)
                ? $giper_baza_rank_tier.pull
                : $giper_baza_rank_tier.post;
        }
        inspect() {
            const lead = $mol_term_color.blue(this.lead().str || '__knot__');
            const head = $mol_term_color.blue(this.head().str || '__root__');
            const self = $mol_term_color.blue(this.self().str || '__meta__');
            const tag = $mol_term_color.green({
                term: 'T',
                solo: 'S',
                vals: 'V',
                keys: 'K',
            }[this.tag()]);
            const vary = this._vary === undefined ? '' : $mol_term_color.yellow(String(this._vary));
            return `${super.inspect()} ${tag} ${lead}\\${head}/${self} ${vary}`;
        }
        toString() {
            const lead = this.lead().str || '__knot__';
            const head = this.head().str || '__root__';
            const self = this.self().str || '__meta__';
            const tag = {
                term: 'T',
                solo: 'S',
                vals: 'V',
                keys: 'K',
            }[this.tag()];
            const vary = this._vary === undefined ? '' : String(this._vary);
            return `${super.toString()} ${tag} ${lead}\\${head}/${self} ${vary}`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 📦 ', $mol_dev_format_shade($giper_baza_time_dump(this.time(), this.tick())), ' #', $mol_dev_format_auto(this.hash()), ' ', this.lead().str || '__knot__', $mol_dev_format_shade('\\'), $mol_dev_format_accent(this.head().str || '__root__'), $mol_dev_format_shade('/'), this.self().str || '__meta__', ' ', {
                term: '💼',
                solo: '1️⃣',
                vals: '🎹',
                keys: '🔑',
            }[this.tag()], ' ', $mol_dev_format_auto(this._vary));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_unit_sand, "make", null);
    $.$giper_baza_unit_sand = $giper_baza_unit_sand;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $giper_baza_unit_gift_sort(gifts) {
        const dict = new Map();
        const graph = new $mol_graph();
        for (const gift of gifts) {
            const key = gift.mate().str;
            dict.set(key, gift);
            graph.link(key, gift.lord().str);
            graph.link(key, '');
        }
        graph.acyclic(() => 1);
        const keys = [...graph.sorted];
        return keys.map(key => dict.get(key)).filter(Boolean);
    }
    $.$giper_baza_unit_gift_sort = $giper_baza_unit_gift_sort;
    class $giper_baza_unit_gift extends $giper_baza_unit_base {
        static length() {
            return 48;
        }
        static make() {
            const sand = this.from(this.length());
            sand.kind('gift');
            return sand;
        }
        rank(next) {
            if (next !== undefined)
                this.uint8(0, $giper_baza_unit_kind.gift);
            const res = this.uint8(1, next);
            if (res < $giper_baza_rank_deny || res > $giper_baza_rank_rule) {
                $mol_fail(new RangeError(`Wrong rank ${res}`));
            }
            return res;
        }
        tier() {
            return (this.rank() & $giper_baza_rank_tier.rule);
        }
        rate() {
            return (this.rank() & $giper_baza_rank_rate.just);
        }
        mate(next) {
            return this.id12(20, next);
        }
        path() {
            return `gift:${this.mate().str || '______every______'}`;
        }
        _code;
        code() {
            return this._code ?? (this._code = new Uint8Array(this.buffer, this.byteOffset + 32, 16));
        }
        code_exists() {
            return this.code().some(b => b);
        }
        dump() {
            return {
                kind: this.kind(),
                lord: this.lord(),
                mate: this.mate(),
                tier: $giper_baza_rank_tier[this.tier()],
                rate: this.rate(),
                time: this.moment().toString('YYYY-MM-DD hh:mm:ss'),
            };
        }
        tier_min() {
            return $giper_baza_rank_tier.rule;
        }
        inspect() {
            const mate = $mol_term_color.magenta('@' + (this.mate().str || '______every______'));
            const read = $mol_term_color.green(this.code().some(v => v) ? 'X' : 'O');
            const rank = $mol_term_color.cyan($giper_baza_rank_tier[this.tier()] + ':' + this.rate().toString(16).toUpperCase());
            return `${super.inspect()} ${read} ${mate} ${rank}`;
        }
        toString() {
            const mate = '@' + (this.mate().str || '______every______');
            const read = this.code().some(v => v) ? 'X' : 'O';
            const rank = $giper_baza_rank_tier[this.tier()] + ':' + this.rate().toString(16).toUpperCase();
            return `${super.toString()} ${read} ${mate} ${rank}`;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' 👾', $mol_dev_format_auto(this.lord()), ' 🏅', ' ', $mol_dev_format_shade($giper_baza_time_dump(this.time(), this.tick())), ' #', $mol_dev_format_auto(this.hash()), ' 👾', $mol_dev_format_accent(this.mate().str || '______every______'), this.code().some(v => v) ? ' 🔐' : ' 👀', $giper_baza_rank_tier[this.tier()], ':', this.rate().toString(16).toUpperCase());
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_unit_gift, "make", null);
    $.$giper_baza_unit_gift = $giper_baza_unit_gift;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, replace, }) {
        if (!update)
            update = (next, prev, lead) => prev;
        if (!replace)
            replace = (next, prev, lead) => insert(next, drop(prev, lead));
        if (to > prev.length)
            to = prev.length;
        if (from > to)
            from = to;
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = replace(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_list_vary extends $giper_baza_pawn {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.vals];
        items_vary(next, tag = 'term') {
            const units = this.units();
            if (next === undefined)
                return units.map(unit => this.land().sand_decode(unit));
            this.splice(next, 0, units.length, tag);
            return this.items_vary();
        }
        splice(next, from = this.units().length, to = from, tag = 'term') {
            const land = this.land();
            $mol_reconcile({
                prev: this.units(),
                from,
                to,
                next,
                equal: (next, prev) => $mol_compare_deep(this.land().sand_decode(prev), next),
                drop: (prev, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), null),
                insert: (next, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, this.head(), land.self_make(), next, tag),
                replace: (next, prev, lead) => this.land().post(lead?.self() ?? $giper_baza_link.hole, prev.head(), prev.self(), next, prev.tag()),
            });
        }
        find(vary) {
            for (const unit of this.units()) {
                if ($mol_compare_deep(this.land().sand_decode(unit), vary))
                    return unit;
            }
            return null;
        }
        has(vary, next, tag = 'term') {
            if (next === undefined)
                return Boolean(this.find(vary));
            if (next)
                this.add(vary, tag);
            else
                this.cut(vary);
            return next;
        }
        add(vary, tag = 'term') {
            if (this.has(vary))
                return;
            this.land().post($giper_baza_link.hole, this.head(), null, vary, tag);
        }
        cut(vary) {
            const units = [...this.units()];
            for (let i = 0; i < units.length; ++i) {
                if (!$mol_compare_deep(this.land().sand_decode(units[i]), vary))
                    continue;
                this.land().post(units[i - 1]?.self() ?? $giper_baza_link.hole, units[i].head(), units[i].self(), null);
                units.splice(i, 1);
                --i;
            }
        }
        move(from, to) {
            this.land().sand_move(this.units()[from], this.head(), to);
        }
        wipe(seat) {
            this.land().sand_wipe(this.units()[seat]);
        }
        pawn_make(Pawn, vary, tag = 'term') {
            this.splice([vary], undefined, undefined, tag);
            return this.land().Pawn(Pawn).Head(this.units().at(-1).self());
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(this.items_vary()));
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_list_vary.prototype, "items_vary", null);
    __decorate([
        $mol_action
    ], $giper_baza_list_vary.prototype, "splice", null);
    $.$giper_baza_list_vary = $giper_baza_list_vary;
    function $giper_baza_list(parse) {
        class $giper_baza_list extends $giper_baza_list_vary {
            static parse = parse;
            items(next) {
                return this.items_vary(next?.map(parse)).map(parse);
            }
            static toString() {
                return this === $giper_baza_list ? '$giper_baza_list<' + this.$.$mol_func_name(parse) + '>' : super.toString();
            }
        }
        __decorate([
            $mol_mem
        ], $giper_baza_list.prototype, "items", null);
        return $giper_baza_list;
    }
    $.$giper_baza_list = $giper_baza_list;
    class $giper_baza_list_bin extends $giper_baza_list($giper_baza_vary_cast_blob) {
    }
    $.$giper_baza_list_bin = $giper_baza_list_bin;
    class $giper_baza_list_bool extends $giper_baza_list($giper_baza_vary_cast_bool) {
    }
    $.$giper_baza_list_bool = $giper_baza_list_bool;
    class $giper_baza_list_int extends $giper_baza_list($giper_baza_vary_cast_bint) {
    }
    $.$giper_baza_list_int = $giper_baza_list_int;
    class $giper_baza_list_real extends $giper_baza_list($giper_baza_vary_cast_real) {
    }
    $.$giper_baza_list_real = $giper_baza_list_real;
    class $giper_baza_list_link extends $giper_baza_list($giper_baza_vary_cast_link) {
    }
    $.$giper_baza_list_link = $giper_baza_list_link;
    class $giper_baza_list_str extends $giper_baza_list($giper_baza_vary_cast_text) {
    }
    $.$giper_baza_list_str = $giper_baza_list_str;
    class $giper_baza_list_time extends $giper_baza_list($giper_baza_vary_cast_time) {
    }
    $.$giper_baza_list_time = $giper_baza_list_time;
    class $giper_baza_list_dur extends $giper_baza_list($giper_baza_vary_cast_dura) {
    }
    $.$giper_baza_list_dur = $giper_baza_list_dur;
    class $giper_baza_list_range extends $giper_baza_list($giper_baza_vary_cast_span) {
    }
    $.$giper_baza_list_range = $giper_baza_list_range;
    class $giper_baza_list_json extends $giper_baza_list($giper_baza_vary_cast_dict) {
    }
    $.$giper_baza_list_json = $giper_baza_list_json;
    class $giper_baza_list_jsan extends $giper_baza_list($giper_baza_vary_cast_list) {
    }
    $.$giper_baza_list_jsan = $giper_baza_list_jsan;
    class $giper_baza_list_dom extends $giper_baza_list($giper_baza_vary_cast_elem) {
    }
    $.$giper_baza_list_dom = $giper_baza_list_dom;
    class $giper_baza_list_tree extends $giper_baza_list($giper_baza_vary_cast_tree) {
    }
    $.$giper_baza_list_tree = $giper_baza_list_tree;
    class $giper_baza_list_link_base extends $giper_baza_list_link {
    }
    $.$giper_baza_list_link_base = $giper_baza_list_link_base;
    function $giper_baza_list_link_to(Value) {
        class $giper_baza_list_link_to extends $giper_baza_list_link_base {
            static Value = $mol_memo.func(Value);
            static toString() {
                return this === $giper_baza_list_link_to ? '$giper_baza_list_link_to[ []=> ' + Value() + ' ]' : super.toString();
            }
            remote_list(next) {
                const glob = this.$.$giper_baza_glob;
                const Pawn = Value();
                return this.items_vary(next?.map(item => item.link()))
                    .map($giper_baza_vary_cast_link)
                    .filter($mol_guard_defined)
                    .map(link => glob.Pawn(link, Pawn));
            }
            remote_add(item) {
                this.add(item.link());
            }
            make(config) {
                const Pawn = Value();
                let pawn;
                if (config === null || typeof config === 'number') {
                    const self = this.land().self_make(config || undefined);
                    pawn = this.land().Pawn(Pawn).Head(self);
                    this.splice([pawn.link()]);
                }
                else if (config instanceof $giper_baza_land) {
                    const land = config.area_make();
                    this.splice([land.link()]);
                    pawn = land.Pawn(Pawn).Data();
                }
                else if (config) {
                    const land = this.$.$giper_baza_glob.land_grab(config);
                    this.splice([land.link()]);
                    pawn = land.Pawn(Pawn).Data();
                }
                else {
                    return $mol_fail(new Error('Wrong config'));
                }
                if (Pawn.meta)
                    pawn.meta(Pawn.meta);
                return pawn;
            }
        }
        __decorate([
            $mol_mem
        ], $giper_baza_list_link_to.prototype, "remote_list", null);
        __decorate([
            $mol_action
        ], $giper_baza_list_link_to.prototype, "remote_add", null);
        __decorate([
            $mol_action
        ], $giper_baza_list_link_to.prototype, "make", null);
        return $giper_baza_list_link_to;
    }
    $.$giper_baza_list_link_to = $giper_baza_list_link_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_mine_temp extends $mol_object {
        static land(land) {
            return this.make({
                land: $mol_const(land)
            });
        }
        land() {
            return $giper_baza_link.hole;
        }
        unit_deletes = 0;
        unit_inserts = 0;
        ball_inserts = 0;
        ball_deletes = 0;
        units_persisted = new WeakSet();
        units_save(diff) { }
        units_load() {
            return [];
        }
        ball_load(sand) {
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_mine_temp, "land", null);
    $.$giper_baza_mine_temp = $giper_baza_mine_temp;
    $.$giper_baza_mine = $giper_baza_mine_temp;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_mine_fs_yym_act extends $mol_object2 {
        yym;
        constructor(yym) {
            super();
            this.yym = yym;
        }
        transaction;
        offsets_del = new WeakMap;
        offsets_ins = new WeakMap;
        save(...data) {
            let offset = this.offsets_ins.get(data[0].buffer);
            if (offset === undefined) {
                offset = this.yym.offsets().get(data[0].buffer);
                if (offset)
                    return offset;
                let size = data.reduce((sum, buf) => sum + buf.byteLength, 0);
                size = Math.ceil(size / 8) * 8;
                offset = this.yym.pool().acquire(size);
                this.offsets_ins.set(data[0].buffer, offset);
                this.yym.offsets().set(data[0].buffer, offset);
            }
            this.transaction.write({
                buffer: data,
                position: offset,
            });
            return offset;
        }
        free(data, size = data.byteLength) {
            size = Math.ceil(size / 8) * 8;
            let offset = this.offsets_del.get(data.buffer);
            if (offset === undefined) {
                offset = this.yym.offsets().get(data.buffer);
                if (!offset) {
                    return $mol_fail(new Error('Try to free non saved', { cause: { data, size } }));
                }
                this.offsets_del.set(data.buffer, offset);
                this.yym.pool().release(offset, size);
                this.yym.offsets().delete(data.buffer);
            }
            this.transaction.write({
                buffer: new Uint8Array(size),
                position: offset,
            });
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_mine_fs_yym_act.prototype, "save", null);
    __decorate([
        $mol_action
    ], $giper_baza_mine_fs_yym_act.prototype, "free", null);
    $.$giper_baza_mine_fs_yym_act = $giper_baza_mine_fs_yym_act;
    class $giper_baza_mine_fs_yym extends $mol_object2 {
        sides;
        pool(reset) {
            $mol_wire_solid();
            return new $mol_memory_pool;
        }
        offsets(reset) {
            $mol_wire_solid();
            return new Map;
        }
        constructor(sides) {
            super();
            this.sides = sides;
        }
        destructor() {
            if (!this.sides[1].exists())
                return;
            this.sides[1].open('write_only').flush();
            this.sides[0].exists(false);
            this.pool(null);
            this.offsets(null);
        }
        load_init() {
            const version = (file) => file.modified()?.valueOf() ?? 0;
            if (version(this.sides[0]) < version(this.sides[1]))
                this.sides.reverse();
        }
        load() {
            this.load_init();
            try {
                const tx = this.sides[0].open('read_only');
                const data = tx.read();
                tx.destructor();
                this.pool().acquire(data.byteLength);
                return data;
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    return new Uint8Array();
                return $mol_fail_hidden(error);
            }
        }
        atomic(task) {
            this.save_init();
            const act = new $giper_baza_mine_fs_yym_act(this);
            const tx1 = act.transaction = this.sides[1].open('create', 'write_only');
            task(act);
            tx1.flush();
            tx1.destructor();
            this.sides.reverse();
            const tx2 = act.transaction = this.sides[1].open('create', 'write_only');
            task(act);
            tx2.destructor();
        }
        save_init() {
            $mol_wire_solid();
            this.load_init();
            if (this.sides[1].exists()) {
                $mol_wire_sync(this.$).$mol_log3_rise({
                    place: this,
                    message: 'Reset mirror',
                    file: this.sides[1].path(),
                });
            }
            this.sides[0].clone(this.sides[1].path());
        }
        empty() {
            this.load_init();
            return this.pool().empty();
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_mine_fs_yym.prototype, "pool", null);
    __decorate([
        $mol_mem
    ], $giper_baza_mine_fs_yym.prototype, "offsets", null);
    __decorate([
        $mol_mem,
        $mol_action
    ], $giper_baza_mine_fs_yym.prototype, "load_init", null);
    __decorate([
        $mol_mem
    ], $giper_baza_mine_fs_yym.prototype, "save_init", null);
    $.$giper_baza_mine_fs_yym = $giper_baza_mine_fs_yym;
    class $giper_baza_mine_fs extends $giper_baza_mine_temp {
        store() {
            $mol_wire_solid();
            const land = this.land();
            const area = land.area();
            const root = this.$.$mol_file.relative('.baza');
            let dir = root.resolve(land.str.slice(0, 2));
            if (area.str)
                dir = dir.resolve(area.str.slice(-2));
            dir.exists(true);
            return new $giper_baza_mine_fs_yym([
                dir.resolve(land.str + '.yin.baza'),
                dir.resolve(land.str + '.yan.baza'),
            ]);
        }
        store_init() {
            if (!this.store().empty())
                return;
            const head = $giper_baza_pack.make([[this.land().str, new $giper_baza_pack_part]]);
            this.store().atomic(side => side.save(head));
        }
        units_save(diff) {
            this.store_init();
            this.store().atomic(side => {
                for (const unit of diff.del) {
                    if (unit instanceof $giper_baza_unit_sand && unit.big()) {
                        side.free(unit, unit.byteLength + unit.size());
                    }
                    else {
                        side.free(unit);
                    }
                }
                for (const unit of diff.ins) {
                    if (unit instanceof $giper_baza_unit_sand && unit.big())
                        side.save(unit, unit.ball());
                    else
                        side.save(unit);
                }
            });
            for (const unit of diff.ins) {
                this.units_persisted.add(unit);
            }
        }
        units_load() {
            this.store().pool(null);
            const buf = this.store().load();
            if (!buf.length)
                return [];
            const pack = $giper_baza_pack.from(buf);
            const parts = new Map(pack.parts(this.store().offsets(), this.store().pool()));
            if (parts.size > 1)
                return $mol_fail(new Error('Wrong lands count', { cause: { count: parts.size } }));
            for (const [land, part] of parts) {
                if (land !== this.land().str)
                    return $mol_fail(new Error('Unexpected land', { cause: { expected: this.land().str, existen: land } }));
                for (const unit of part.units) {
                    this.units_persisted.add(unit);
                }
                return part.units;
            }
            return [];
        }
        destructor() {
            this.store().destructor();
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_mine_fs.prototype, "store", null);
    __decorate([
        $mol_mem
    ], $giper_baza_mine_fs.prototype, "store_init", null);
    __decorate([
        $mol_action
    ], $giper_baza_mine_fs.prototype, "units_save", null);
    __decorate([
        $mol_action
    ], $giper_baza_mine_fs.prototype, "units_load", null);
    $.$giper_baza_mine_fs = $giper_baza_mine_fs;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_mine = $giper_baza_mine_fs;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_dict extends $giper_baza_list_vary {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.keys];
        keys() {
            return this.items_vary();
        }
        dive(key, Pawn, auto) {
            if (this.can_change() && auto !== undefined)
                this.has(key, true, Pawn.tag);
            const unit = this.find(key);
            return unit ? this.land().Pawn(Pawn).Head(unit.self()) : null;
        }
        static schema = {};
        static with(schema, path = '') {
            const prefix = path ? path + ':' : '';
            const $giper_baza_dict_with = class $giper_baza_dict_with extends this {
                static path = path;
                static toString() {
                    if (this !== $giper_baza_dict_with)
                        return super.toString();
                    const params = Object.entries(schema).map(([name, type]) => `${name}: ${type}`);
                    return '$giper_baza_dict.with<{' + params.join(', ') + '}>';
                }
            };
            for (const Field in schema) {
                Object.defineProperty($giper_baza_dict_with.prototype, Field, {
                    value: function (auto) {
                        return this.dive(prefix + Field, schema[Field], auto);
                    }
                });
            }
            return Object.assign($giper_baza_dict_with, { schema: { ...this.schema, ...schema } });
        }
        ;
        [$mol_dev_format_head]() {
            const keys = $mol_wire_probe(() => this.keys());
            const pawns = $mol_wire_probe(() => this.pawns(null)) ?? [];
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(keys?.map((key, index) => new Pair(key, pawns[index]))));
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_dict.prototype, "keys", null);
    $.$giper_baza_dict = $giper_baza_dict;
    class Pair {
        key;
        val;
        constructor(key, val) {
            this.key = key;
            this.val = val;
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_tr({}, $mol_dev_format_td({}, $mol_dev_format_auto(this.key)), $mol_dev_format_td({}, ': '), $mol_dev_format_td({}, $mol_dev_format_auto(this.val)));
        }
    }
    function $giper_baza_dict_to(Value) {
        return class $giper_baza_dict_to extends $giper_baza_dict {
            Value = Value;
            key(key, auto) {
                return this.dive(key, this.Value, auto);
            }
            static toString() {
                return this === $giper_baza_dict_to ? '$giper_baza_dict_to<' + Value + '>' : super.toString();
            }
        };
    }
    $.$giper_baza_dict_to = $giper_baza_dict_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_pack_four_code = $mol_charset_encode('LAND');
    $.$giper_baza_pack_head_size = 4 + 12 + 6 + 2;
    class $giper_baza_pack_part extends $mol_object {
        units;
        faces;
        constructor(units = [], faces = new $giper_baza_face_map) {
            super();
            this.units = units;
            this.faces = faces;
        }
        static from(units, faces = new $giper_baza_face_map) {
            return new this(units, faces);
        }
        *[Symbol.iterator]() {
            return {
                units: this.units,
                faces: this.faces,
            };
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_pack_part, "from", null);
    $.$giper_baza_pack_part = $giper_baza_pack_part;
    class $giper_baza_pack extends $mol_buffer {
        toBlob() {
            return new Blob([this], { type: 'application/vnd.giper_baza_pack.v1' });
        }
        parts(offsets, pool) {
            const parts = new Map;
            let part = null;
            const buf = this.asArray();
            for (let offset = 0; offset < this.byteLength;) {
                const kind = this.uint8(offset);
                switch ($giper_baza_slot_kind[kind]) {
                    case 'free': {
                        pool?.release(offset, 8);
                        offset += 8;
                        continue;
                    }
                    case 'land': {
                        const link = $giper_baza_link.from_bin(new Uint8Array(buf.buffer, buf.byteOffset + offset + 4, 18));
                        part = parts.get(link.str);
                        if (!part)
                            parts.set(link.str, part = new $giper_baza_pack_part);
                        const size = this.uint16(offset + 22);
                        offset += 24;
                        for (let i = 0; i < size; ++i) {
                            const peer = $giper_baza_link.from_bin(new Uint8Array(buf.buffer, buf.byteOffset + offset, 6));
                            const tick = this.uint16(offset + 6);
                            const time = this.uint32(offset + 8);
                            const summ = this.uint32(offset + 12);
                            part.faces.peer_time(peer.str, time, tick);
                            part.faces.peer_summ(peer.str, summ);
                            offset += $giper_baza_face.length();
                        }
                        continue;
                    }
                    case 'pass': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const pass = $giper_baza_auth_pass.from(buf.slice(offset, offset + 64));
                        offsets?.set(pass.buffer, offset);
                        part.units.push(pass);
                        offset += pass.byteLength;
                        continue;
                    }
                    case 'seal': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const size = new $giper_baza_unit_seal(this.buffer, this.byteOffset + offset, this.byteLength - offset).size();
                        const length = $giper_baza_unit_seal.length(size);
                        const seal = $giper_baza_unit_seal.from(buf.slice(offset, offset + length));
                        offsets?.set(seal.buffer, offset);
                        part.units.push(seal);
                        offset += seal.byteLength;
                        continue;
                    }
                    case 'sand': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const size = new $giper_baza_unit_sand(this.buffer, this.byteOffset + offset, 40).size();
                        const length_sand = $giper_baza_unit_sand.length(size);
                        const length_ball = $giper_baza_unit_sand.length_ball(size);
                        const sand = $giper_baza_unit_sand.from(buf.slice(offset, offset + length_sand));
                        offsets?.set(sand.buffer, offset);
                        offset += sand.byteLength;
                        if (length_ball) {
                            sand._ball = buf.slice(offset, offset + size);
                            offset += length_ball;
                        }
                        ;
                        part.units.push(sand);
                        continue;
                    }
                    case 'gift': {
                        if (!part)
                            $mol_fail(new Error('Land is undefined'));
                        const length = $giper_baza_unit_gift.length();
                        const gift = $giper_baza_unit_gift.from(buf.slice(offset, offset + length));
                        offsets?.set(gift.buffer, offset);
                        part.units.push(gift);
                        offset += gift.byteLength;
                        continue;
                    }
                    default: return $mol_fail(new Error('Unknown Kind', { cause: { kind, offset } }));
                }
            }
            return [...parts];
        }
        static length(parts) {
            let size = 0;
            for (const [land, { units, faces }] of parts) {
                size += $.$giper_baza_pack_head_size;
                size += faces.size * $giper_baza_face.length();
                for (const unit of units) {
                    size += unit.byteLength;
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    unit.choose({
                        gift: gift => { },
                        seal: seal => { },
                        sand: sand => size += $giper_baza_unit_sand.length_ball(sand.ball().byteLength),
                    });
                }
            }
            return size;
        }
        static make(parts) {
            let length = this.length(parts);
            if (length === 0)
                $mol_fail(new Error('Empty Pack'));
            const buff = new Uint8Array(length);
            const pack = new $giper_baza_pack(buff.buffer);
            let offset = 0;
            for (const [id, { units, faces }] of parts) {
                buff.set($.$giper_baza_pack_four_code, offset);
                buff.set(new $giper_baza_link(id).toBin(), offset + 4);
                pack.uint16(offset + 22, faces.size);
                offset += 24;
                for (const [peer, face] of faces) {
                    buff.set(new $giper_baza_link(peer).toBin(), offset);
                    pack.uint16(offset + 6, face.tick);
                    pack.uint32(offset + 8, face.time);
                    pack.uint32(offset + 12, face.summ);
                    offset += $giper_baza_face.length();
                }
                for (const unit of units) {
                    buff.set(unit.asArray(), offset);
                    offset += unit.byteLength;
                    if (unit instanceof $giper_baza_auth_pass)
                        continue;
                    unit.choose({
                        gift: gift => { },
                        seal: seal => { },
                        sand: sand => {
                            if (!sand.big())
                                return;
                            buff.set(sand.ball(), offset);
                            offset += $giper_baza_unit_sand.length_ball(sand.size());
                        },
                    });
                }
            }
            return pack;
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_pack.prototype, "parts", null);
    __decorate([
        $mol_action
    ], $giper_baza_pack, "make", null);
    $.$giper_baza_pack = $giper_baza_pack;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const Passives = new WeakMap();
    class $giper_baza_yard extends $mol_object {
        glob() {
            return null;
        }
        lands_news = new $mol_wire_set();
        static masters_default = [];
        static masters() {
            const all = this.$.$giper_baza_glob.Seed().peers();
            const self = this.$.$giper_baza_auth.current().pass().lord();
            const pos = all.findLastIndex(peer => peer.link().str === self.str);
            const links = all.slice(pos + 1).flatMap(peer => peer.urls());
            return [...this.masters_default, ...links];
        }
        master_cursor(next = 0) {
            return next;
        }
        master_current() {
            return this.$.$giper_baza_yard.masters()[this.master_cursor()];
        }
        master_next() {
            this.master_cursor((this.master_cursor() + 1) % this.$.$giper_baza_yard.masters().length);
        }
        reconnects(reset) {
            return ($mol_wire_probe(() => this.reconnects()) ?? 0) + 1;
        }
        master() {
            this.reconnects();
            const link = this.master_current();
            if (!link)
                return null;
            const socket = new $mol_dom_context.WebSocket(link.replace(/^http/, 'ws'), ['$giper_baza_yard']);
            socket.binaryType = 'arraybuffer';
            const port = $mol_rest_port_ws_std.make({ socket });
            socket.onmessage = async (event) => {
                if (event.data instanceof ArrayBuffer) {
                    if (!event.data.byteLength)
                        return;
                    await $mol_wire_async(this).port_income(port, new Uint8Array(event.data));
                }
                else {
                    this.$.$mol_log3_fail({
                        place: this,
                        message: 'Wrong data',
                        data: event.data
                    });
                }
            };
            let interval;
            socket.onclose = () => {
                clearInterval(interval);
                setTimeout(() => this.reconnects(null), 1000);
            };
            Object.assign(socket, {
                destructor: () => {
                    socket.onclose = () => { };
                    clearInterval(interval);
                    socket.close();
                }
            });
            return new Promise((done, fail) => {
                socket.onopen = () => {
                    this.$.$mol_log3_come({
                        place: this,
                        message: 'Connected',
                        port: $mol_key(port),
                        server: link,
                    });
                    interval = setInterval(() => socket.send(new Uint8Array), 30000);
                    done(port);
                };
                socket.onerror = () => {
                    socket.onclose = event => {
                        fail(new Error(`Master (${link}) is unavailable (${event.code})`));
                        clearInterval(interval);
                        interval = setTimeout(() => {
                            this.master_next();
                            this.reconnects(null);
                        }, 1000);
                    };
                };
            });
        }
        slaves = new $mol_wire_set();
        sync() {
            this.sync_news();
            this.sync_port();
        }
        sync_news() {
            const glob = this.$.$giper_baza_glob;
            const lands = [...this.lands_news].map(link => glob.Land(new $giper_baza_link(link)));
            try {
                for (const port of this.masters()) {
                    for (const land of lands) {
                        this.sync_port_land([port, land.link()]);
                    }
                }
                for (const land of lands)
                    land.units_saving();
                this.lands_news.clear();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        sync_port() {
            for (const port of this.ports())
                this.sync_port_lands(port);
        }
        sync_port_lands(port) {
            const masters = this.masters();
            for (const land of this.port_lands_active(port)) {
                const land_link = new $giper_baza_link(land);
                this.sync_port_land([port, land_link]);
                for (const master of masters)
                    this.sync_port_land([master, land_link]);
            }
        }
        ports() {
            return [...this.masters(), ...this.slaves];
        }
        masters() {
            try {
                return [this.master()].filter($mol_guard_defined);
            }
            catch (error) {
                $mol_fail_log(error);
                return [];
            }
        }
        port_lands_active(port) {
            return new $mol_wire_set();
        }
        port_lands_passive(port) {
            let passives = Passives.get(port);
            if (!passives)
                Passives.set(port, passives = new Set);
            return passives;
        }
        port_income(port, msg) {
            const pack = $mol_wire_sync($giper_baza_pack).from(msg);
            const parts = $mol_wire_sync(pack).parts();
            for (const [land, part] of parts) {
                const Land = this.$.$giper_baza_glob.Land(new $giper_baza_link(land));
                forget: {
                    if (part.units.length)
                        break forget;
                    if (part.faces.size)
                        break forget;
                    if (!this.port_lands_active(port).has(land))
                        break forget;
                    this.port_lands_active(port).delete(land);
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_done({
                            place: this,
                            message: 'Take Free',
                            port: $mol_key(port),
                            land: Land,
                        });
                    continue;
                }
                this.face_port_sync(port, [[land, part]]);
                if (part.units.length) {
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_rise({
                            place: this,
                            message: 'Take Unit',
                            port: $mol_key(port),
                            land: Land,
                            units: part.units,
                        });
                    Land.diff_apply(part.units);
                }
                else {
                    if (this.$.$giper_baza_log())
                        $mol_wire_sync(this.$).$mol_log3_rise({
                            place: this,
                            message: 'Take Face',
                            port: $mol_key(port),
                            land: Land,
                            faces: part.faces,
                        });
                }
            }
        }
        face_port_sync(port, income) {
            const actives = this.port_lands_active(port);
            const passives = this.port_lands_passive(port);
            for (const [land, part] of income) {
                const land_link = new $giper_baza_link(land);
                if (!passives.has(land))
                    actives.add(land);
                const faces = part.faces;
                let port_faces = this.face_port_land([port, land_link]);
                if (!port_faces)
                    this.face_port_land([port, land_link], port_faces = new $giper_baza_face_map);
                port_faces.sync(faces);
            }
        }
        sync_land(land) {
            for (const port of this.masters()) {
                this.port_lands_passive(port).add(land.str);
                this.sync_port_land([port, land]);
            }
            this.sync();
        }
        forget_land(land) {
            const faces = new $giper_baza_face_map;
            faces.stat = land.faces.stat.clone();
            const pack = $giper_baza_pack.make([[
                    land.link().str,
                    new $giper_baza_pack_part([], faces)
                ]]).asArray();
            for (const port of this.ports()) {
                if (!this.port_lands_passive(port).has(land.link().str))
                    continue;
                this.port_lands_passive(port).delete(land.link().str);
                if (this.$.$giper_baza_log())
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Send Free',
                        port: $mol_key(port),
                        land,
                    });
                port.send_bin(pack);
            }
        }
        sync_port_land([port, land]) {
            try {
                this.init_port_land([port, land]);
                const faces = this.face_port_land([port, land]);
                if (!faces)
                    return;
                const Land = this.$.$giper_baza_glob.Land(land);
                Land.units_saving();
                const part = Land.diff_part(faces);
                if (!part.units.length)
                    return;
                if (this.$.$giper_baza_log())
                    this.$.$mol_log3_rise({
                        place: this,
                        message: 'Send Unit',
                        port: $mol_key(port),
                        land: Land,
                        part,
                    });
                const pack = $giper_baza_pack.make([[Land.link().str, part]]);
                port.send_bin(pack.asArray());
                faces.sync(part.faces);
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        init_port_land([port, land]) {
            const Land = this.$.$giper_baza_glob.Land(land);
            Land.loading();
            if (this.$.$giper_baza_log())
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Send Face',
                    port: $mol_key(port),
                    land: Land,
                    faces: Land.faces,
                });
            port.send_bin(Land.face_pack().asArray());
        }
        face_port_land([port, land], next = null) {
            $mol_wire_solid();
            return next;
        }
        ;
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return $mol_term_color.blue(`$giper_baza_yard`);
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "glob", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master_cursor", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master_current", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "master_next", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "reconnects", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "master", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync_news", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "sync_port", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_port_lands", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "ports", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard.prototype, "masters", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "port_lands_active", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "port_income", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "face_port_sync", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_land", null);
    __decorate([
        $mol_action
    ], $giper_baza_yard.prototype, "forget_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "sync_port_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "init_port_land", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_yard.prototype, "face_port_land", null);
    __decorate([
        $mol_mem
    ], $giper_baza_yard, "masters", null);
    $.$giper_baza_yard = $giper_baza_yard;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let nums = new Array(str.length);
        for (let i = 0; i < str.length; ++i)
            nums[i] = str.charCodeAt(i);
        return $mol_hash_numbers(nums);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_atom_vary extends $giper_baza_pawn {
        static tag = $giper_baza_unit_sand_tag[$giper_baza_unit_sand_tag.solo];
        pick_unit(peer) {
            return this.units_of(peer).at(0);
        }
        vary(next) {
            return this.vary_of($giper_baza_link.hole, next);
        }
        vary_of(peer, next) {
            let unit_prev = this.pick_unit(peer);
            let prev = unit_prev ? this.land().sand_decode(unit_prev) : null;
            if (next === undefined)
                return prev;
            if ($mol_compare_deep(prev, next))
                return next;
            this.land().post($giper_baza_link.hole, unit_prev?.head() ?? this.head(), unit_prev?.self() ?? null, next);
            return this.vary_of(peer);
        }
        ;
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', this.head(), ' ', $mol_dev_format_auto(this.vary()));
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_atom_vary.prototype, "vary_of", null);
    $.$giper_baza_atom_vary = $giper_baza_atom_vary;
    class $giper_baza_atom_enum_base extends $giper_baza_atom_vary {
        static options = [];
    }
    $.$giper_baza_atom_enum_base = $giper_baza_atom_enum_base;
    function $giper_baza_atom_enum(options) {
        class $giper_baza_atom_enum extends $giper_baza_atom_enum_base {
            static options = options;
            static toString() {
                return this === $giper_baza_atom_enum ? '$giper_baza_atom_enum<' + options.map($giper_baza_vary_cast_text) + '>' : super.toString();
            }
            val(next) {
                return this.val_of($giper_baza_link.hole, next);
            }
            val_of(peer, next) {
                validate: if (next !== undefined) {
                    for (const option of options) {
                        if ($mol_compare_deep(option, next))
                            break validate;
                    }
                    $mol_fail(new Error(`Wrong value (${$giper_baza_vary_cast_text(next)})`));
                }
                const val = this.vary_of(peer, next);
                for (const option of options) {
                    if ($mol_compare_deep(option, val))
                        return val;
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom_enum.prototype, "val_of", null);
        return $giper_baza_atom_enum;
    }
    $.$giper_baza_atom_enum = $giper_baza_atom_enum;
    function $giper_baza_atom(parse) {
        class $giper_baza_atom extends $giper_baza_atom_vary {
            static parse = parse;
            val(next) {
                return this.val_of($giper_baza_link.hole, next);
            }
            val_of(peer, next) {
                if (next !== undefined)
                    parse(next);
                const res = this.vary_of(peer, next);
                try {
                    return parse(res);
                }
                catch {
                    return null;
                }
            }
            static toString() {
                return this === $giper_baza_atom ? '$giper_baza_atom<' + this.$.$mol_func_name(parse) + '>' : super.toString();
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom.prototype, "val_of", null);
        return $giper_baza_atom;
    }
    $.$giper_baza_atom = $giper_baza_atom;
    class $giper_baza_atom_blob extends $giper_baza_atom($giper_baza_vary_cast_blob) {
    }
    $.$giper_baza_atom_blob = $giper_baza_atom_blob;
    class $giper_baza_atom_bool extends $giper_baza_atom($giper_baza_vary_cast_bool) {
    }
    $.$giper_baza_atom_bool = $giper_baza_atom_bool;
    class $giper_baza_atom_bint extends $giper_baza_atom($giper_baza_vary_cast_bint) {
    }
    $.$giper_baza_atom_bint = $giper_baza_atom_bint;
    class $giper_baza_atom_real extends $giper_baza_atom($giper_baza_vary_cast_real) {
    }
    $.$giper_baza_atom_real = $giper_baza_atom_real;
    class $giper_baza_atom_link extends $giper_baza_atom($giper_baza_vary_cast_link) {
    }
    $.$giper_baza_atom_link = $giper_baza_atom_link;
    class $giper_baza_atom_text extends $giper_baza_atom($giper_baza_vary_cast_text) {
        selection(lord, next) {
            const link = this.link().head().str;
            const user = this.$.$giper_baza_glob.Land(lord).Data($giper_baza_flex_user);
            if (next) {
                user.caret([[link, next[0], 0], [link, next[1], 0]]);
                return next;
            }
            else {
                this.val();
                const selection = user.caret();
                if (!selection)
                    return [0, 0];
                if (selection[0][0] !== link)
                    return [0, 0];
                if (selection[1][0] !== link)
                    return [0, 0];
                return [selection[0][1], selection[0][1]];
            }
        }
    }
    __decorate([
        $mol_mem_key
    ], $giper_baza_atom_text.prototype, "selection", null);
    $.$giper_baza_atom_text = $giper_baza_atom_text;
    class $giper_baza_atom_time extends $giper_baza_atom($giper_baza_vary_cast_time) {
    }
    $.$giper_baza_atom_time = $giper_baza_atom_time;
    class $giper_baza_atom_dura extends $giper_baza_atom($giper_baza_vary_cast_dura) {
    }
    $.$giper_baza_atom_dura = $giper_baza_atom_dura;
    class $giper_baza_atom_span extends $giper_baza_atom($giper_baza_vary_cast_span) {
    }
    $.$giper_baza_atom_span = $giper_baza_atom_span;
    class $giper_baza_atom_dict extends $giper_baza_atom($giper_baza_vary_cast_dict) {
    }
    $.$giper_baza_atom_dict = $giper_baza_atom_dict;
    class $giper_baza_atom_list extends $giper_baza_atom($giper_baza_vary_cast_list) {
    }
    $.$giper_baza_atom_list = $giper_baza_atom_list;
    class $giper_baza_atom_elem extends $giper_baza_atom($giper_baza_vary_cast_elem) {
    }
    $.$giper_baza_atom_elem = $giper_baza_atom_elem;
    class $giper_baza_atom_tree extends $giper_baza_atom($giper_baza_vary_cast_tree) {
    }
    $.$giper_baza_atom_tree = $giper_baza_atom_tree;
    class $giper_baza_atom_link_base extends $giper_baza_atom_link {
        static Value = $giper_baza_dict;
    }
    $.$giper_baza_atom_link_base = $giper_baza_atom_link_base;
    function $giper_baza_atom_link_to(Value) {
        class $giper_baza_atom_link_to extends $giper_baza_atom_link_base {
            Value = $mol_memo.func(Value);
            static toString() {
                return this === $giper_baza_atom_link_to ? '$giper_baza_atom_link_to[ []=> ' + Value() + ' ]' : super.toString();
            }
            remote(next) {
                return this.remote_of($giper_baza_link.hole, next);
            }
            remote_of(peer, next) {
                let link = next?.link() ?? next;
                link = $giper_baza_vary_cast_link(this.vary_of(peer, link));
                if (!link)
                    return null;
                return this.$.$giper_baza_glob.Pawn(link, Value());
            }
            ensure(config) {
                return this.ensure_of($giper_baza_link.hole, config);
            }
            ensure_of(peer, config) {
                if (!this.val_of(peer)) {
                    if (config === null)
                        this.ensure_here(peer);
                    else if (config instanceof $giper_baza_land)
                        this.ensure_area(peer, config);
                    else if (config)
                        this.ensure_lord(peer, config);
                    else
                        return null;
                }
                return this.remote_of(peer);
            }
            ensure_here(peer) {
                const Pawn = Value();
                const idea = $mol_hash_string(this.link().str);
                const head = this.land().self_make(idea);
                const pawn = this.land().Pawn(Pawn).Head(head);
                if (Pawn.meta)
                    pawn.meta(Pawn.meta);
                this.remote_of(peer, pawn);
            }
            ensure_area(peer, land) {
                const Pawn = Value();
                const idea = $mol_hash_string(this.link().str);
                const area = land.area_make(idea);
                const pawn = area.Data(Pawn);
                if (Pawn.meta)
                    pawn.meta(Pawn.meta);
                this.val_of(peer, pawn.link());
            }
            ensure_lord(peer, preset) {
                const Pawn = Value();
                const land = this.$.$giper_baza_glob.land_grab(preset);
                const pawn = land.Data(Pawn);
                if (Pawn.meta)
                    pawn.meta(Pawn.meta);
                this.val_of(peer, pawn.link());
            }
            remote_ensure(preset) {
                return this.ensure(preset);
            }
            local_ensure() {
                return this.ensure(null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $giper_baza_atom_link_to.prototype, "remote_of", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_here", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_area", null);
        __decorate([
            $mol_action
        ], $giper_baza_atom_link_to.prototype, "ensure_lord", null);
        return $giper_baza_atom_link_to;
    }
    $.$giper_baza_atom_link_to = $giper_baza_atom_link_to;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_stat_series extends $giper_baza_atom_list {
        tick(key, val, count) {
            let vals = this.values().slice();
            while (vals.length < count)
                vals.push(0);
            vals[key] = val + this.initial();
            vals = [...vals.slice(key + 1), ...vals.slice(0, key + 1)];
            for (let i = 1; i < count; ++i)
                if (vals[i] < vals[i - 1])
                    vals[i] = vals[i - 1];
            vals = [...vals.slice(-1 - key), ...vals.slice(0, -1 - key)];
            this.values(vals);
        }
        _initial;
        initial() {
            return this._initial
                ?? (this._initial = this.max());
        }
        max() {
            let max = 0;
            for (const val of this.values())
                if (val > max)
                    max = val;
            return max;
        }
        values(next) {
            if (next) {
                let last = 0;
                next = next.map(v => ([v, last] = [v - last, v])[0]);
            }
            let last = 0;
            return (this.val(next) ?? []).map(v => last += v);
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_stat_series.prototype, "tick", null);
    __decorate([
        $mol_action
    ], $giper_baza_stat_series.prototype, "initial", null);
    __decorate([
        $mol_mem
    ], $giper_baza_stat_series.prototype, "max", null);
    __decorate([
        $mol_mem
    ], $giper_baza_stat_series.prototype, "values", null);
    $.$giper_baza_stat_series = $giper_baza_stat_series;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_stat_ranges extends $giper_baza_dict.with({
        Seconds: $giper_baza_stat_series,
        Minutes: $giper_baza_stat_series,
        Hours: $giper_baza_stat_series,
        Days: $giper_baza_stat_series,
        Months: $giper_baza_stat_series,
    }) {
        _last_instant = 0;
        tick_instant(val) {
            this.tick_integral(this._last_instant += val);
        }
        tick_integral(val) {
            let now = new $mol_time_moment;
            this.Seconds(null).tick(Math.floor(now.second), val, 60);
            this.Minutes(null).tick(now.minute, val, 60);
            this.Hours(null).tick(now.hour, val, 24);
            this.Days(null).tick(now.day, val, 31);
            this.Months(null).tick(now.month, val, 12);
        }
        series() {
            function pick(Series, length, range) {
                const values = Series?.values() ?? [0];
                let series = Array.from({ length }, (_, i) => values[i]);
                let start = 0;
                let max = 0;
                for (let i = 0; i < series.length; ++i) {
                    if (series[i] < max)
                        continue;
                    max = series[i];
                    start = i + 1;
                }
                if (start)
                    series = [...series.slice(start), ...series.slice(0, start - 1)];
                let last = series[0];
                series = series.slice(1).map(val => {
                    try {
                        if (last === 0 || val < last)
                            return 0;
                        return (val - last) / range;
                    }
                    finally {
                        last = Math.max(val, last);
                    }
                });
                return series;
            }
            const months = pick(this.Days(), 12, 60 * 60 * 24 * 31);
            const days = pick(this.Days(), 31, 60 * 60 * 24);
            const hours = pick(this.Hours(), 24, 60 * 60);
            const minutes = pick(this.Minutes(), 60, 60);
            const seconds = pick(this.Seconds(), 60, 1);
            return [...months, ...days, ...hours, ...minutes, ...seconds].reverse();
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_stat_ranges.prototype, "series", null);
    $.$giper_baza_stat_ranges = $giper_baza_stat_ranges;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_report_handler_all = new Set();
    function handler(event, url, line, col, error) {
        for (const handler of $.$mol_report_handler_all) {
            try {
                handler(event, url, line, col, error);
            }
            catch (e) { }
        }
    }
    const handler_promise = (event) => handler('Unhandled Rejection', '', 0, 0, event.reason);
    if ('addEventListener' in globalThis) {
        globalThis.addEventListener('error', handler);
        globalThis.addEventListener('unhandledrejection', handler_promise);
    }
    if ('process' in globalThis) {
        process.on('uncaughtExceptionMonitor', handler);
        process.on('unhandledrejection', handler_promise);
    }
    const console_error = console.error;
    console.error = function console_error_custom(...args) {
        const format = (val) => typeof val === 'string'
            ? val.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
            : JSON.stringify(val);
        const secondary = args.slice(1);
        const first = typeof args[0] === 'string'
            ? args[0].replaceAll(/%(?:\.\d+)?[disfcoO]/g, spec => spec === '%c' ? (secondary.shift(), '') : secondary.shift())
            : args[0];
        secondary.unshift(first);
        const result = secondary.map(format).join(' ');
        handler(result);
        console_error.apply(console, args);
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_app_stat extends $giper_baza_dict.with({
        Uptime: $giper_baza_atom_dura,
        Cpu_user: $giper_baza_stat_ranges,
        Cpu_system: $giper_baza_stat_ranges,
        Mem_used: $giper_baza_stat_ranges,
        Mem_free: $giper_baza_stat_ranges,
        Fs_free: $giper_baza_stat_ranges,
        Fs_reads: $giper_baza_stat_ranges,
        Fs_writes: $giper_baza_stat_ranges,
        Port_slaves: $giper_baza_stat_ranges,
        Port_masters: $giper_baza_stat_ranges,
        Land_active: $giper_baza_stat_ranges,
        Errors: $giper_baza_stat_ranges,
    }) {
        freshness() {
            const last = this.last_change();
            if (!last)
                return null;
            const range = new $mol_time_interval({
                start: last,
                end: new $mol_time_moment(this.$.$mol_state_time.now(1000)),
            });
            return range.duration.count('PT1s');
        }
        uptime(next) {
            return this.Uptime(next)?.val(next) ?? new $mol_time_duration(0);
        }
        init() {
            this.Errors(null).tick_instant(1);
            let handler = () => this.Errors(null).tick_instant(1);
            $mol_report_handler_all.add(handler);
            return { destructor: () => $mol_report_handler_all.delete(handler) };
        }
        tick() {
            this.init();
            if (this.$.$giper_baza_log()) {
                this.$.$mol_log3_warn({
                    place: this,
                    message: 'Stat disabled due logging',
                    hint: 'Disable $giper_baza_log to start monitoring'
                });
                return;
            }
            this.$.$mol_state_time.now(1000);
            this.uptime(new $mol_time_duration({ second: Math.floor(process.uptime()) }).normal);
            const res = process.resourceUsage();
            this.Cpu_user(null).tick_integral(Math.ceil(res.userCPUTime / 1e4));
            this.Cpu_system(null).tick_integral(Math.ceil(res.systemCPUTime / 1e4));
            this.Fs_reads(null).tick_integral(res.fsRead);
            this.Fs_writes(null).tick_integral(res.fsWrite);
            const mem_total = $node.os.totalmem();
            this.Mem_used(null).tick_instant(Math.ceil((res.maxRSS - res.sharedMemorySize) * 1024 / mem_total * 100));
            this.Mem_free(null).tick_instant(Math.floor($node.os.freemem() / mem_total * 100));
            const fs = $node.fs.statfsSync('.');
            this.Fs_free(null).tick_instant(Math.floor(Number(fs.bfree) / Number(fs.blocks) * 100));
            const yard = $mol_wire_sync(this.$.$giper_baza_glob.yard());
            const masters = yard.masters().length;
            this.Port_masters(null).tick_instant(masters);
            const ports = yard.ports();
            this.Port_slaves(null).tick_instant(ports.length - masters);
            const lands = ports.reduce((sum, port) => sum + yard.port_lands_active(port).size, 0);
            this.Land_active(null).tick_instant(lands);
            this.Errors(null).tick_instant(0);
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_app_stat.prototype, "freshness", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_stat.prototype, "uptime", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_stat.prototype, "init", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_stat.prototype, "tick", null);
    $.$giper_baza_app_stat = $giper_baza_app_stat;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$giper_baza_flex_deck_link = new $giper_baza_link('AyiXyvOr_k8TaNSel_TkJWFugO');
    class $giper_baza_flex_subj extends $giper_baza_dict.with({
        Name: $giper_baza_atom_text,
        Icon: $giper_baza_atom_text,
        Hint: $giper_baza_atom_text,
    }, 'Subj') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_link.str}_U2e5XejQ`);
        name(next) {
            return this.Name(next)?.val(next) ?? this.link().str;
        }
        icon(next) {
            return this.Icon(next)?.val(next) ?? '💫';
        }
        hint(next) {
            return this.Hint(next)?.val(next) ?? '';
        }
    }
    $.$giper_baza_flex_subj = $giper_baza_flex_subj;
    class $giper_baza_flex_subj_link extends $giper_baza_atom_link_to(() => $giper_baza_flex_subj) {
    }
    $.$giper_baza_flex_subj_link = $giper_baza_flex_subj_link;
    class $giper_baza_flex_meta extends $giper_baza_flex_subj.with({
        Pulls: $giper_baza_list_link_to(() => $giper_baza_flex_subj),
        Props: $giper_baza_list_link_to(() => $giper_baza_flex_prop),
    }, 'Meta') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_link.str}_Atd6Ty7F`);
        prop_new(key, type, kind, vars, base) {
            const prop = this.Props(null).make($mol_hash_string(key));
            prop.path(this.name() + ':' + key);
            prop.name(key);
            prop.type(type);
            if (kind)
                prop.kind(kind);
            if (vars)
                prop.enum(vars);
            if (base !== undefined)
                prop.base(base);
            return prop;
        }
        prop_add(prop) {
            this.Props(prop).add(prop.link());
        }
        prop_all() {
            return [
                ...this.pull_all().flatMap(meta => meta.prop_all()),
                ...this.Props()?.remote_list() ?? [],
            ];
        }
        pull_add(meta) {
            this.Pulls(meta).add(meta.link());
        }
        pull_all() {
            return (this.Pulls()?.remote_list() ?? []).map(subj => subj.cast($giper_baza_flex_meta));
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_flex_meta.prototype, "prop_new", null);
    __decorate([
        $mol_action
    ], $giper_baza_flex_meta.prototype, "prop_add", null);
    __decorate([
        $mol_mem
    ], $giper_baza_flex_meta.prototype, "prop_all", null);
    __decorate([
        $mol_action
    ], $giper_baza_flex_meta.prototype, "pull_add", null);
    __decorate([
        $mol_mem
    ], $giper_baza_flex_meta.prototype, "pull_all", null);
    $.$giper_baza_flex_meta = $giper_baza_flex_meta;
    class $giper_baza_flex_prop extends $giper_baza_flex_subj.with({
        Path: $giper_baza_atom_text,
        Type: $giper_baza_atom_text,
        Kind: $giper_baza_atom_link_to(() => $giper_baza_flex_meta),
        Enum: $giper_baza_atom_link_to(() => $giper_baza_list_vary),
        Base: $giper_baza_atom_vary,
    }, 'Prop') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_link.str}_DOnW7Ah9`);
        path(next) {
            return this.Path(next)?.val(next) ?? '';
        }
        type(next) {
            return this.Type(next)?.val(next) ?? '';
        }
        base(next) {
            return this.Base(next)?.vary(next) ?? null;
        }
        kind(next) {
            return this.Kind(next)?.remote(next) ?? null;
        }
        enum(next) {
            return this.Enum(next)?.remote(next) ?? null;
        }
    }
    $.$giper_baza_flex_prop = $giper_baza_flex_prop;
    class $giper_baza_flex_deck extends $giper_baza_flex_subj.with({
        Metas: $giper_baza_list_link_to(() => $giper_baza_flex_meta),
        Types: $giper_baza_list_str,
    }, 'Deck') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_link.str}_3AvnmQ4q`);
        meta_new(key, icon, hint) {
            const meta = this.Metas(null).make($mol_hash_string(key));
            meta.name(key);
            meta.icon(icon);
            meta.hint(hint);
            return meta;
        }
        meta_for(Meta, icon, hint) {
            const meta = this.meta_new(Meta.path, icon, hint);
            Meta.meta = meta.link();
            return meta;
        }
    }
    __decorate([
        $mol_action
    ], $giper_baza_flex_deck.prototype, "meta_new", null);
    __decorate([
        $mol_action
    ], $giper_baza_flex_deck.prototype, "meta_for", null);
    $.$giper_baza_flex_deck = $giper_baza_flex_deck;
    class $giper_baza_flex_seed extends $giper_baza_flex_subj.with({
        Deck: $giper_baza_atom_link_to(() => $giper_baza_flex_deck),
        Peers: $giper_baza_list_link_to(() => $giper_baza_flex_peer),
    }, 'Seed') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_link.str}_nrUK4ZIW`);
        deck() {
            return this.Deck(null).ensure(this.land());
        }
        peers(next) {
            return this.Peers(next)?.remote_list(next) ?? [];
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_flex_seed.prototype, "deck", null);
    __decorate([
        $mol_mem
    ], $giper_baza_flex_seed.prototype, "peers", null);
    $.$giper_baza_flex_seed = $giper_baza_flex_seed;
    class $giper_baza_flex_peer extends $giper_baza_flex_subj.with({
        Urls: $giper_baza_list_str,
        Stat: $giper_baza_atom_link_to(() => $giper_baza_app_stat),
    }, 'Peer') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_link.str}_xEibvNCP`);
        stat(auto) {
            return this.Stat(auto)?.ensure(this.land()) ?? null;
        }
        urls(next) {
            return (this.Urls(next)?.items(next) ?? []).filter($mol_guard_defined);
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_flex_peer.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $giper_baza_flex_peer.prototype, "urls", null);
    $.$giper_baza_flex_peer = $giper_baza_flex_peer;
    class $giper_baza_flex_user extends $giper_baza_flex_subj.with({
        Caret: $giper_baza_atom_list,
    }, 'User') {
        static meta = new $giper_baza_link(`${$.$giper_baza_flex_deck_link.str}_csm0VtAK`);
        caret(next) {
            return this.Caret(next)?.val(next) ?? null;
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_flex_user.prototype, "caret", null);
    $.$giper_baza_flex_user = $giper_baza_flex_user;
    function $giper_baza_flex_init() {
        const seed_land = this.$.$giper_baza_glob.land_grab();
        const seed = seed_land.Data($giper_baza_flex_seed);
        seed.name('Base Seed');
        const deck = seed.deck();
        deck.name('Base Deck');
        deck.Types(null).items_vary(['vary', 'enum', 'bool', 'int', 'real', 'str', 'link', 'time', 'dict', 'text', 'list']);
        const Meta = deck.meta_for($giper_baza_flex_meta, '✨', 'Meta schema of entities');
        Meta.meta(Meta.link());
        const Subj = deck.meta_for($giper_baza_flex_subj, '💎', 'Named entity');
        const Seed = deck.meta_for($giper_baza_flex_seed, '🌱', 'Seed of network');
        const Prop = deck.meta_for($giper_baza_flex_prop, '🔖', 'Property schema');
        const Deck = deck.meta_for($giper_baza_flex_deck, '📚', 'Collection of Metas');
        const Peer = deck.meta_for($giper_baza_flex_peer, '🔆', 'Peer of network');
        const User = deck.meta_for($giper_baza_flex_user, '👤', 'Profile of user');
        seed.meta(Seed.link());
        deck.meta(Deck.link());
        Meta.pull_add(Subj);
        Seed.pull_add(Subj);
        Prop.pull_add(Subj);
        Deck.pull_add(Subj);
        Peer.pull_add(Subj);
        User.pull_add(Subj);
        Subj.prop_new('Name', 'str', undefined, undefined, '');
        Subj.prop_new('Icon', 'str', undefined, undefined, '💫');
        Subj.prop_new('Hint', 'str', undefined, undefined, '');
        Meta.prop_new('Pulls', 'list', Meta, deck.Metas());
        Meta.prop_new('Props', 'list', Prop);
        Seed.prop_new('Deck', 'link', Deck);
        Seed.prop_new('Peers', 'list', Peer);
        Prop.prop_new('Path', 'str');
        Prop.prop_new('Type', 'enum', undefined, deck.Types(), 'vary');
        Prop.prop_new('Kind', 'link', Meta, deck.Metas(), Subj.link());
        Prop.prop_new('Enum', 'link', Subj);
        Prop.prop_new('Base', 'vary', Subj);
        Deck.prop_new('Metas', 'list', Meta);
        Deck.prop_new('Types', 'list');
        Peer.prop_new('Urls', 'list');
        Peer.prop_new('Stat', 'link');
        User.prop_new('Caret', 'list');
        return seed;
    }
    $.$giper_baza_flex_init = $giper_baza_flex_init;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_glob extends $mol_object {
        static lands_touched = new $mol_wire_set();
        static yard() {
            return new this.$.$giper_baza_yard;
        }
        static home(Home) {
            const home = this.Land(this.$.$giper_baza_auth.current().pass().lord()).Data(Home ?? this.$.$giper_baza_flex_subj);
            if (Home?.meta && !home.meta())
                home.meta(Home.meta);
            return home;
        }
        static king_grab(preset = [[null, this.$.$giper_baza_rank_read]]) {
            const mapping = new Map(preset);
            const king = this.$.$giper_baza_auth.grab();
            const colony = $mol_wire_sync(this.$.$giper_baza_land).make({ $: this.$ });
            colony.auth = $mol_const(king);
            colony.encrypted((mapping.get(null) ?? this.$.$giper_baza_rank_deny) === this.$.$giper_baza_rank_deny);
            const self = this.$.$giper_baza_auth.current().pass();
            colony.give(self, this.$.$giper_baza_rank_rule);
            for (const [key, rank] of mapping)
                colony.give(key, rank);
            this.Land(colony.link()).units_steal(colony);
            return king;
        }
        static land_grab(preset = [[null, this.$.$giper_baza_rank_read]]) {
            return this.Land(this.king_grab(preset).pass().lord());
        }
        static Land(link) {
            if (!link.str)
                $mol_fail(new Error('Empty Land Link'));
            this.lands_touched.add(link.str);
            return this.$.$giper_baza_land.make({
                link: $mol_const(link),
            });
        }
        static Pawn(link, Pawn) {
            const land = this.Land(link.land());
            return land.Pawn(Pawn).Head(link.head());
        }
        static Seed() {
            const link = $giper_baza_flex_deck_link.lord();
            const seed = this.Pawn(link, $giper_baza_flex_seed);
            this.boot();
            return seed;
        }
        static boot() {
            const file = $mol_file.relative('web.baza');
            const pack = $mol_wire_sync($giper_baza_pack).from(file.buffer());
            this.apply_pack(pack);
        }
        static apply_pack(pack) {
            return this.apply_parts(pack.parts());
        }
        static apply_parts(parts) {
            for (const [land_id, part] of parts) {
                const land = this.Land(new this.$.$giper_baza_link(land_id));
                land.diff_apply(part.units);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_glob, "yard", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "king_grab", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "land_grab", null);
    __decorate([
        $mol_mem_key
    ], $giper_baza_glob, "Land", null);
    __decorate([
        $mol_mem
    ], $giper_baza_glob, "Seed", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "boot", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "apply_pack", null);
    __decorate([
        $mol_action
    ], $giper_baza_glob, "apply_parts", null);
    $.$giper_baza_glob = $giper_baza_glob;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_entity extends $giper_baza_dict.with({
        Title: $giper_baza_atom_text,
    }) {
        title(next) {
            return this.Title(next)?.val(next) ?? '';
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_entity.prototype, "title", null);
    $.$giper_baza_entity = $giper_baza_entity;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_tracker_mpit_neolo_user extends $giper_baza_entity.with({
        username: $giper_baza_atom_text,
        name: $giper_baza_atom_text,
        surname: $giper_baza_atom_text,
        school: $giper_baza_atom_text,
        role: $giper_baza_atom_text,
        user_id: $giper_baza_atom_bint,
        children_ids: $giper_baza_list_str,
    }) {
    }
    $.$bog_tracker_mpit_neolo_user = $bog_tracker_mpit_neolo_user;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_tracker_mpit_neolo_task extends $giper_baza_entity.with({
        title: $giper_baza_atom_text,
        desc: $giper_baza_atom_text,
        date: $giper_baza_atom_text,
        time: $giper_baza_atom_text,
        source: $giper_baza_atom_text,
        status: $giper_baza_atom_text,
        teacher_file: $giper_baza_atom_text,
        student_file: $giper_baza_atom_text,
        owner_username: $giper_baza_atom_text,
        owner_id: $giper_baza_atom_bint,
        author_id: $giper_baza_atom_bint,
        class_id: $giper_baza_atom_text,
    }) {
    }
    $.$bog_tracker_mpit_neolo_task = $bog_tracker_mpit_neolo_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_tracker_mpit_neolo_class extends $giper_baza_entity.with({
        name: $giper_baza_atom_text,
        subject: $giper_baza_atom_text,
        teacher_id: $giper_baza_atom_bint,
        student_ids: $giper_baza_list_str,
    }) {
    }
    $.$bog_tracker_mpit_neolo_class = $bog_tracker_mpit_neolo_class;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_tracker_mpit_neolo_invitation extends $giper_baza_entity.with({
        class_id: $giper_baza_atom_text,
        class_name: $giper_baza_atom_text,
        from_teacher_name: $giper_baza_atom_text,
        from_teacher_id: $giper_baza_atom_bint,
        status: $giper_baza_atom_text,
        created_iso: $giper_baza_atom_text,
    }) {
    }
    $.$bog_tracker_mpit_neolo_invitation = $bog_tracker_mpit_neolo_invitation;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_tracker_mpit_neolo_registry extends $giper_baza_entity.with({
        Profile: $giper_baza_atom_link_to(() => $bog_tracker_mpit_neolo_user),
        Tasks: $giper_baza_list_link_to(() => $bog_tracker_mpit_neolo_task),
        Classes: $giper_baza_list_link_to(() => $bog_tracker_mpit_neolo_class),
        Invitations: $giper_baza_list_link_to(() => $bog_tracker_mpit_neolo_invitation),
    }) {
    }
    $.$bog_tracker_mpit_neolo_registry = $bog_tracker_mpit_neolo_registry;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_message extends $mol_object {
        port;
        method() {
            return 'POST';
        }
        uri() {
            return new URL(`rest://localhost/`);
        }
        type() {
            return 'application/octet-stream';
        }
        origin() {
            return 'unknown';
        }
        address() {
            return 'unknown';
        }
        protocols() {
            return [];
        }
        data() {
            return null;
        }
        bin() {
            let data = this.data();
            if (data instanceof Uint8Array)
                return data;
            if (data instanceof $mol_dom_context.Element)
                data = $mol_dom_serialize(data);
            if (typeof data !== 'string')
                data = JSON.stringify(data);
            return $mol_charset_encode(data);
        }
        text() {
            const data = this.data();
            if (typeof data === 'string')
                return data;
            if (data instanceof Uint8Array)
                return $mol_charset_decode(data);
            if (data instanceof $mol_dom_context.Element)
                return $mol_dom_serialize(data);
            return JSON.stringify(data);
        }
        reply(data, meta) {
            if (meta?.code)
                this.port.send_code(meta.code);
            if (meta?.type)
                this.port.send_type(meta.type);
            this.port.send_data(data);
        }
        route(uri) {
            return $mol_rest_message.make({
                port: this.port,
                method: () => this.method(),
                uri: $mol_const(uri),
                protocols: () => this.protocols(),
                type: () => this.type(),
                origin: () => this.origin(),
                data: () => this.data(),
            });
        }
        derive(method, data) {
            return $mol_rest_message.make({
                port: this.port,
                method: $mol_const(method),
                uri: () => this.uri(),
                protocols: () => this.protocols(),
                type: () => this.type(),
                origin: () => this.origin(),
                data: $mol_const(data),
            });
        }
        static make(config) {
            return super.make(config);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "bin", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_rest_message.prototype, "route", null);
    __decorate([
        $mol_action
    ], $mol_rest_message.prototype, "derive", null);
    __decorate([
        ($mol_action)
    ], $mol_rest_message, "make", null);
    $.$mol_rest_message = $mol_rest_message;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const makeURL = $mol_wire_sync((url, base) => new URL(url, base));
    class $mol_rest_resource extends $mol_object {
        REQUEST(msg) {
            const [path, nest, tail] = /^\/([a-zA-Z][^/]*)(.*)$/.exec(msg.uri().pathname) ?? [];
            const field = nest?.toLowerCase();
            if (field && field in this && !(field in $mol_rest_resource.prototype)) {
                const uri2 = makeURL(msg.uri().toString());
                uri2.pathname = tail ?? msg.uri().pathname;
                const msg2 = msg.route(uri2);
                return this[field]().REQUEST(msg2);
            }
            return $mol_wire_sync(this)[msg.method()](msg);
        }
        _protocols = [];
        OPEN(msg) {
            const protocols = msg.protocols();
            for (const protocol of protocols) {
                if (this._protocols.includes(protocol))
                    return protocol;
            }
            return '';
        }
        CLOSE(msg) { }
        HEAD(msg) { }
        GET(msg) { }
        PUT(msg) { }
        PATCH(msg) { }
        POST(msg) { }
        DELETE(msg) { }
        _auto() { }
        static port(port) {
            const server = $mol_rest_server.make({
                port: () => port,
            });
            server.root(this.make({}));
            server.start();
            new $mol_wire_atom(`${server.root()}._auto<>`, () => {
                try {
                    server.root()._auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }).fresh();
            return server;
        }
        static serve() {
            const port = Number(this.$.$mol_state_arg.value('port'));
            return port ? this.port(port) : null;
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_resource.prototype, "REQUEST", null);
    __decorate([
        $mol_mem_key
    ], $mol_rest_resource, "port", null);
    $.$mol_rest_resource = $mol_rest_resource;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_file_extensions = {
        'css': 'text/css;charset=utf-8',
        'csv': 'text/csv;charset=utf-8',
        'htm': 'text/html;charset=utf-8',
        'html': 'text/html;charset=utf-8',
        'ics': 'text/calendar;charset=utf-8',
        'js': 'text/javascript;charset=utf-8',
        'jsx': 'text/javascript;charset=utf-8',
        'md': 'text/plain;charset=utf-8',
        'mjs': 'text/javascript;charset=utf-8',
        'ts': 'text/typescript;charset=utf-8',
        'tsx': 'text/typescript;charset=utf-8',
        'txt': 'text/plain;charset=utf-8',
        'aac': 'audio/aac',
        'mid': 'audio/midi',
        'midi': 'audio/midi',
        'mp3': 'audio/mpeg',
        'oga': 'audio/ogg',
        'opus': 'audio/opus',
        'wav': 'audio/wav',
        'weba': 'audio/webm',
        'apng': 'image/apng',
        'avif': 'image/avif',
        'bmp': 'image/bmp',
        'gif': 'image/gif',
        'ico': 'image/vnd.microsoft.icon',
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'svg': 'image/svg+xml',
        'tiff': 'image/tiff',
        'tif': 'image/tiff',
        'webp': 'image/webp',
        'avi': 'video/x-msvideo',
        'mpeg': 'video/mpeg',
        'mp4': 'video/mp4',
        'ogv': 'video/ogg',
        'webm': 'video/webm',
        '3gp': 'video/3gpp',
        '3g2': 'video/3gpp2',
        'otf': 'font/otf',
        'ttf': 'font/ttf',
        'woff': 'font/woff',
        'woff2': 'font/woff2',
        'abw': 'application/x-abiword',
        'arc': 'application/x-freearc',
        'azw': 'application/vnd.amazon.ebook',
        'bin': 'application/octet-stream',
        'bz': 'application/x-bzip',
        'bz2': 'application/x-bzip2',
        'cda': 'application/x-cdf',
        'crus': 'application/x-crus',
        'csh': 'application/x-csh',
        'doc': 'application/msword',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'eot': 'application/vnd.ms-fontobject',
        'epub': 'application/epub+zip',
        'gz': 'application/gzip',
        'jar': 'application/java-archive',
        'json': 'application/json',
        'jsonld': 'application/ld+json',
        'map': 'application/json',
        'mpkg': 'application/vnd.apple.installer+xml',
        'odp': 'application/vnd.oasis.opendocument.presentation',
        'ods': 'application/vnd.oasis.opendocument.spreadsheet',
        'odt': 'application/vnd.oasis.opendocument.text',
        'ogx': 'application/ogg',
        'pdf': 'application/pdf',
        'php': 'application/x-httpd-php',
        'ppt': 'application/vnd.ms-powerpoint',
        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'rar': 'application/vnd.rar',
        'rtf': 'application/rtf',
        'sh': 'application/x-sh',
        'tar': 'application/x-tar',
        'tree': 'application/x-tree',
        'vsd': 'application/vnd.visio',
        'xhtml': 'application/xhtml+xml',
        'xls': 'application/vnd.ms-excel',
        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'xml': 'application/xml',
        'xul': 'application/vnd.mozilla.xul+xml',
        'zip': 'application/zip',
        '7z': 'application/x-7z-compressed',
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_port_http extends $mol_rest_port {
        output;
        send_code(code) {
            if (this.output.writableEnded)
                return;
            if (this.output.statusCode !== 400)
                return;
            this.output.statusCode = code;
        }
        send_type(mime) {
            if (this.output.writableEnded)
                return;
            if (this.output.getHeader('content-type'))
                return;
            this.output.setHeader('content-type', mime);
        }
        send_bin(data) {
            if (this.output.writableEnded)
                return;
            super.send_bin(data);
            this.output.write(data);
        }
    }
    __decorate([
        $mol_action
    ], $mol_rest_port_http.prototype, "send_code", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_http.prototype, "send_type", null);
    __decorate([
        $mol_action
    ], $mol_rest_port_http.prototype, "send_bin", null);
    $.$mol_rest_port_http = $mol_rest_port_http;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_message_http extends $mol_rest_message {
        input;
        method() {
            return this.input.method ?? super.method();
        }
        uri() {
            const addr = this.input.socket?.localAddress ?? '::1';
            const port = this.input.socket?.localPort ?? '80';
            return new URL(this.input.url, `http://[${addr}]:${port}/`);
        }
        type() {
            return (this.input.headers['content-type'] ?? 'application/octet-stream');
        }
        origin() {
            return this.input.headers['origin'] ?? super.origin();
        }
        address() {
            return String(this.input.headers['x-forwarded-for'] ?? '') || this.input.socket?.remoteAddress || super.address();
        }
        protocols() {
            return String(this.input.headers['sec-websocket-protocol'] ?? '').split(',').map(p => p.trim()).filter(Boolean);
        }
        data() {
            const consume = $mol_wire_sync($node['stream/consumers']);
            if (this.type().startsWith('text/')) {
                const text = consume.text(this.input);
                if (this.type() === 'text/html') {
                    return $mol_dom_parse(text, 'application/xhtml+xml').documentElement;
                }
                return text;
            }
            else {
                if (this.type() === 'application/json') {
                    return consume.json(this.input);
                }
                else {
                    return new Uint8Array(consume.arrayBuffer(this.input));
                }
            }
        }
        route(uri) {
            return $mol_rest_message_http.make({
                port: this.port,
                input: this.input,
                uri: $mol_const(uri),
                data: () => this.data(),
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "method", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "uri", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "origin", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "address", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "protocols", null);
    __decorate([
        $mol_mem
    ], $mol_rest_message_http.prototype, "data", null);
    __decorate([
        $mol_action
    ], $mol_rest_message_http.prototype, "route", null);
    $.$mol_rest_message_http = $mol_rest_message_http;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_server extends $mol_object {
        log() {
            return this.$.$mol_state_arg.value('mol_rest_server_log') !== null;
        }
        port() {
            return 0;
        }
        start() {
            this.http_server();
        }
        http_server() {
            const server = $node.http.createServer((req, res) => {
                res.statusCode = 400;
                $mol_wire_async(this).http_income(req, res);
            });
            server.on('upgrade', (req, sock, head) => $mol_wire_async(this).ws_upgrade(req, sock, head));
            server.listen(this.port(), () => {
                const ifaces = Object.entries($node.os.networkInterfaces())
                    .flatMap(([type, ifaces]) => ifaces?.map(iface => iface.family === 'IPv6' ? `[${iface.address}]` : iface.address) ?? []);
                this.$.$mol_log3_done({
                    place: this,
                    message: 'HTTP Server Started',
                    links: ifaces.map(iface => `http://${iface}:${this.port()}/`),
                });
            });
            return server;
        }
        http_income(req, res) {
            const port = $mol_rest_port_http.make({ output: res });
            const msg = $mol_rest_message_http.make({ port, input: req });
            if (this.log())
                $mol_wire_sync(this.$).$mol_log3_rise({
                    place: this,
                    message: msg.method(),
                    url: msg.uri(),
                    origin: msg.origin(),
                    remote: req.socket.remoteAddress + ':' + req.socket.remotePort
                });
            $mol_wire_sync(res).setHeader('Access-Control-Allow-Origin', '*');
            $mol_wire_sync(res).setHeader('Access-Control-Allow-Methods', '*');
            $mol_wire_sync(res).setHeader('Access-Control-Allow-Headers', '*');
            try {
                $mol_wire_sync(this.root()).REQUEST(msg);
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_wire_sync($$).$mol_log3_fail({
                    place: this,
                    message: error.message ?? '',
                    origin: msg.origin(),
                    address: msg.address(),
                    cause: error.cause,
                    stack: error.stack,
                });
                $mol_wire_sync(res).writeHead(500, error.name || 'Server Error');
            }
            res.end();
        }
        ws_upgrade(req, socket, head) {
            const port = $mol_rest_port_ws_node.make({ socket });
            const upgrade = $mol_rest_message_http.make({ port, input: req });
            let protocol = '';
            try {
                protocol = $mol_wire_sync(this.root()).REQUEST(upgrade.derive('OPEN', null));
                if (!protocol) {
                    socket.write('HTTP/1.1 400 Bad Request\r\n' +
                        '\r\n' +
                        `Unsupported Protocols: ${upgrade.protocols()}`);
                    socket.end();
                    return;
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_wire_sync($$).$mol_log3_fail({
                    place: this,
                    message: error.message ?? '',
                    origin: upgrade.origin(),
                    address: upgrade.address(),
                    cause: error.cause,
                    stack: error.stack,
                });
                socket.end();
                return;
            }
            const onclose = $mol_wire_async(() => {
                if (this.log())
                    $mol_wire_sync(this.$).$mol_log3_done({
                        place: this,
                        message: 'CLOSE',
                        url: upgrade.uri(),
                        origin: upgrade.origin(),
                        port: $mol_key(port),
                    });
                try {
                    $mol_wire_sync(this.root()).REQUEST(upgrade.derive('CLOSE', null));
                }
                catch (error) {
                    if ($mol_promise_like(error))
                        $mol_fail_hidden(error);
                    $mol_wire_sync($$).$mol_log3_fail({
                        place: this,
                        message: error.message ?? '',
                        origin: upgrade.origin(),
                        address: upgrade.address(),
                        cause: error.cause,
                        stack: error.stack,
                    });
                    return;
                }
            });
            socket.on('end', onclose);
            socket.on('error', onclose);
            socket.on('data', (chunk) => this.ws_income(chunk, upgrade, socket));
            const key_in = req.headers["sec-websocket-key"];
            const magic = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
            const key_out = $mol_base64_encode($mol_crypto_hash($mol_charset_encode(key_in + magic)));
            socket.write('HTTP/1.1 101 WS Handshaked\r\n' +
                'Upgrade: WebSocket\r\n' +
                'Connection: Upgrade\r\n' +
                `Sec-WebSocket-Accept: ${key_out}\r\n` +
                `Sec-WebSocket-Protocol: ${protocol}\r\n` +
                '\r\n');
            if (this.log())
                $mol_wire_sync(this.$).$mol_log3_come({
                    place: this,
                    message: 'OPEN',
                    url: upgrade.uri(),
                    origin: upgrade.origin(),
                    port: $mol_key(port),
                });
        }
        _ws_income_chunks = new WeakMap;
        _ws_income_frames = new WeakMap;
        async ws_income(chunk, upgrade, sock) {
            sock.pause();
            try {
                let chunks = this._ws_income_chunks.get(sock);
                if (!chunks)
                    this._ws_income_chunks.set(sock, chunks = []);
                chunks.push(chunk);
                const patial_size = chunks.reduce((sum, buf) => sum + buf.byteLength, 0);
                let frame = $mol_websocket_frame.from(chunks[0]);
                const msg_size = frame.size() + frame.data().size;
                if (msg_size > patial_size) {
                    setTimeout(() => sock.resume());
                    return;
                }
                chunk = Buffer.alloc(patial_size);
                let offset = 0;
                for (const buf of chunks.splice(0)) {
                    chunk.set(buf, offset);
                    offset += buf.byteLength;
                }
                frame = $mol_websocket_frame.from(chunk);
                if (msg_size < chunk.byteLength) {
                    const tail = new Uint8Array(chunk.buffer, chunk.byteOffset + msg_size);
                    sock.unshift(tail);
                }
                let data = new Uint8Array(chunk.buffer, chunk.byteOffset + frame.size(), frame.data().size);
                if (frame.data().mask) {
                    const mask = frame.mask();
                    for (let i = 0; i < data.length; ++i) {
                        data[i] ^= mask[i % 4];
                    }
                }
                const op = frame.kind().op;
                if (op === 'txt')
                    data = $mol_charset_decode(data);
                let frames = this._ws_income_frames.get(sock);
                if (!frames)
                    this._ws_income_frames.set(sock, frames = []);
                if (!frame.kind().fin) {
                    frames.push(data);
                    setTimeout(() => sock.resume());
                    return;
                }
                if (frames.length) {
                    frames.push(data);
                    if (typeof frames[0] === 'string') {
                        data = frames.join('');
                    }
                    else {
                        const size = frames.reduce((s, f) => s + f.byteLength, 0);
                        data = new Uint8Array(size);
                        let offset = 0;
                        for (const frame of frames) {
                            data.set(frame, offset);
                            offset += frame.byteLength;
                        }
                    }
                    frames.length = 0;
                }
                if (op !== 'txt' && op !== 'bin' && op !== 'con') {
                    setTimeout(() => sock.resume());
                    return;
                }
                const message = upgrade.derive('POST', data);
                if (data.length !== 0) {
                    if (this.log())
                        this.$.$mol_log3_rise({
                            place: this,
                            message: message.method(),
                            port: $mol_key(message.port),
                            url: message.uri(),
                            origin: message.origin(),
                            frame: frame.toString(),
                        });
                    await $mol_wire_async(this.root()).REQUEST(message);
                }
                setTimeout(() => sock.resume());
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $$.$mol_log3_fail({
                    place: this,
                    message: error.message ?? '',
                    origin: upgrade.origin(),
                    address: upgrade.address(),
                    cause: error.cause,
                    stack: error.stack,
                });
                sock.end();
            }
        }
        root(resource) {
            $mol_wire_solid();
            return resource ?? $mol_rest_resource.make({});
        }
        ;
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return $mol_term_color.blue('$mol_rest_server');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_rest_server.prototype, "port", null);
    __decorate([
        $mol_mem
    ], $mol_rest_server.prototype, "start", null);
    __decorate([
        $mol_mem
    ], $mol_rest_server.prototype, "http_server", null);
    __decorate([
        $mol_action
    ], $mol_rest_server.prototype, "http_income", null);
    __decorate([
        $mol_action
    ], $mol_rest_server.prototype, "ws_upgrade", null);
    __decorate([
        $mol_mem
    ], $mol_rest_server.prototype, "root", null);
    $.$mol_rest_server = $mol_rest_server;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_rest_resource_fs extends $mol_rest_resource {
        _root() { return $mol_file.relative(__dirname); }
        GET(msg) {
            const root = this._root();
            const file = root.resolve(msg.uri().pathname);
            if (!file.exists())
                return msg.reply(null, { code: 404 });
            switch (file.type()) {
                case 'file': {
                    return msg.reply(file.buffer(), {
                        type: $mol_file_extensions[file.ext().replace(/^.*\./, '')],
                    });
                }
                case 'dir': {
                    const index = file.resolve('./index.html');
                    if (index.exists())
                        return msg.reply(index.buffer(), { type: 'text/html' });
                    const resources = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
                    return msg.reply($mol_jsx("body", null,
                        $mol_jsx("style", null, `
							body { background: black; font: 1rem/1.5rem monospace }
							a { color: royalblue; text-decoration: none }
							a:hover { color: skyblue }
						`),
                        resources.map(res => {
                            if (res === 'constructor')
                                return null;
                            if (!/^[a-z][a-z_-]*$/.test(res))
                                return null;
                            const uri = root.resolve(res);
                            return $mol_jsx("a", { href: uri.relate(file) + '/' },
                                "/",
                                res,
                                "/",
                                $mol_jsx("br", null));
                        }),
                        $mol_jsx("a", { href: "../" },
                            "../",
                            $mol_jsx("br", null)),
                        file.sub().map(kid => {
                            const uri = kid.name() + (kid.type() === 'dir' ? '/' : '');
                            return $mol_jsx("a", { href: uri },
                                uri,
                                $mol_jsx("br", null));
                        })));
                }
            }
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_rest_resource_fs.prototype, "_root", null);
    $.$mol_rest_resource_fs = $mol_rest_resource_fs;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_app_home extends $giper_baza_flex_peer {
        init() {
            this.meta($giper_baza_flex_peer.meta);
        }
        tick() {
            this.init();
            this.stat(null).tick();
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_app_home.prototype, "init", null);
    $.$giper_baza_app_home = $giper_baza_app_home;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_app_home_node extends $giper_baza_app_home {
        init() {
            super.init();
            if (process.env.GIPER_BAZA_ADMIN) {
                const pass = $giper_baza_auth_pass.from(process.env.GIPER_BAZA_ADMIN);
                this.land().give(pass, $giper_baza_rank_rule);
            }
            const host = process.env.GIPER_BAZA_DOMAIN || $node.os.hostname();
            this.name(host.replace(/\.ip\..*$/, ''));
            this.urls([`https://${host}/`]);
        }
    }
    __decorate([
        $mol_mem
    ], $giper_baza_app_home_node.prototype, "init", null);
    $.$giper_baza_app_home_node = $giper_baza_app_home_node;
    $.$giper_baza_app_home = $giper_baza_app_home_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $giper_baza_app_node extends $mol_rest_resource_fs {
        link() {
            return new $giper_baza_app_node_link;
        }
        _protocols = ['$giper_baza_yard'];
        OPEN(msg) {
            const protocol = super.OPEN(msg);
            if (!protocol)
                return '';
            this.$.$giper_baza_glob.yard().slaves.add(msg.port);
            return protocol;
        }
        POST(msg) {
            this.$.$giper_baza_glob.yard().port_income(msg.port, msg.bin());
        }
        CLOSE(msg) {
            this.$.$giper_baza_glob.yard().slaves.delete(msg.port);
            super.CLOSE(msg);
        }
        _auto() {
            this._stat_update();
            this.$.$giper_baza_glob.yard().sync();
        }
        _home() {
            return this.$.$giper_baza_glob.home($giper_baza_app_home);
        }
        _stat_update() {
            this._home().tick();
        }
    }
    __decorate([
        $mol_memo.method
    ], $giper_baza_app_node.prototype, "link", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_node.prototype, "_home", null);
    __decorate([
        $mol_mem
    ], $giper_baza_app_node.prototype, "_stat_update", null);
    $.$giper_baza_app_node = $giper_baza_app_node;
    class $giper_baza_app_node_link extends $mol_rest_resource {
        GET(msg) {
            msg.reply(this.$.$giper_baza_auth.current().pass().lord().str);
        }
    }
    $.$giper_baza_app_node_link = $giper_baza_app_node_link;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_tracker_mpit_neolo_store extends $mol_object {
        glob() {
            return this.$.$giper_baza_glob;
        }
        home_land() {
            return this.glob().home().land();
        }
        registry() {
            return this.home_land().Data($bog_tracker_mpit_neolo_registry);
        }
        profile() {
            const reg = this.registry();
            if (!reg)
                return null;
            return (reg.Profile()?.remote() ?? null);
        }
        tasks_all() {
            const reg = this.registry();
            if (!reg)
                return [];
            return (reg.Tasks()?.remote_list() ?? []);
        }
        classes_all() {
            const reg = this.registry();
            if (!reg)
                return [];
            return (reg.Classes()?.remote_list() ?? []);
        }
        invitations_all() {
            const reg = this.registry();
            if (!reg)
                return [];
            return (reg.Invitations()?.remote_list() ?? []);
        }
    }
    $.$bog_tracker_mpit_neolo_store = $bog_tracker_mpit_neolo_store;
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_auth) = class $bog_tracker_mpit_neolo_auth extends ($.$mol_view) {
		Brand_accent(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Plan"]);
			return obj;
		}
		Brand(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["School", (this.Brand_accent())]);
			return obj;
		}
		Sub(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Планировщик для школьников"]);
			return obj;
		}
		mode(next){
			if(next !== undefined) return next;
			return "login";
		}
		Tabs(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.mode(next)));
			(obj.options) = () => ((this.mode_options()));
			return obj;
		}
		has_error(){
			return false;
		}
		Error_view(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_auth_error_visible": (this.has_error())});
			(obj.sub) = () => ([(this.error())]);
			return obj;
		}
		is_login_mode(){
			return true;
		}
		login_username(next){
			if(next !== undefined) return next;
			return "";
		}
		Login_username_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Login_username_input_hint")));
			(obj.value) = (next) => ((this.login_username(next)));
			return obj;
		}
		Login_username_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Login_username_field_title")));
			(obj.content) = () => ([(this.Login_username_input())]);
			return obj;
		}
		login_password(next){
			if(next !== undefined) return next;
			return "";
		}
		Login_password_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Login_password_input_hint")));
			(obj.type) = () => ("password");
			(obj.value) = (next) => ((this.login_password(next)));
			return obj;
		}
		Login_password_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Login_password_field_title")));
			(obj.content) = () => ([(this.Login_password_input())]);
			return obj;
		}
		login_click(next){
			if(next !== undefined) return next;
			return null;
		}
		login_enabled(){
			return true;
		}
		login_label(){
			return "Войти";
		}
		Login_submit(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.login_click(next)));
			(obj.enabled) = () => ((this.login_enabled()));
			(obj.sub) = () => ([(this.login_label())]);
			return obj;
		}
		Login_form(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_auth_form_visible": (this.is_login_mode())});
			(obj.sub) = () => ([
				(this.Login_username_field()), 
				(this.Login_password_field()), 
				(this.Login_submit())
			]);
			return obj;
		}
		is_register_mode(){
			return false;
		}
		reg_username(next){
			if(next !== undefined) return next;
			return "";
		}
		Reg_username_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_username_input_hint")));
			(obj.value) = (next) => ((this.reg_username(next)));
			return obj;
		}
		Reg_username_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_username_field_title")));
			(obj.content) = () => ([(this.Reg_username_input())]);
			return obj;
		}
		reg_password(next){
			if(next !== undefined) return next;
			return "";
		}
		Reg_password_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_password_input_hint")));
			(obj.type) = () => ("password");
			(obj.value) = (next) => ((this.reg_password(next)));
			return obj;
		}
		Reg_password_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_password_field_title")));
			(obj.content) = () => ([(this.Reg_password_input())]);
			return obj;
		}
		reg_password2(next){
			if(next !== undefined) return next;
			return "";
		}
		Reg_password2_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_password2_input_hint")));
			(obj.type) = () => ("password");
			(obj.value) = (next) => ((this.reg_password2(next)));
			return obj;
		}
		Reg_password2_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_password2_field_title")));
			(obj.content) = () => ([(this.Reg_password2_input())]);
			return obj;
		}
		reg_name(next){
			if(next !== undefined) return next;
			return "";
		}
		Reg_name_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_name_input_hint")));
			(obj.value) = (next) => ((this.reg_name(next)));
			return obj;
		}
		Reg_name_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_name_field_title")));
			(obj.content) = () => ([(this.Reg_name_input())]);
			return obj;
		}
		reg_surname(next){
			if(next !== undefined) return next;
			return "";
		}
		Reg_surname_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_surname_input_hint")));
			(obj.value) = (next) => ((this.reg_surname(next)));
			return obj;
		}
		Reg_surname_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_surname_field_title")));
			(obj.content) = () => ([(this.Reg_surname_input())]);
			return obj;
		}
		Reg_two_col(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Reg_name_field()), (this.Reg_surname_field())]);
			return obj;
		}
		Reg_role_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Кто вы?"]);
			return obj;
		}
		role_student_selected(){
			return false;
		}
		role_student_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Role_student(){
			const obj = new this.$.$bog_tracker_mpit_neolo_auth_role_button();
			(obj.role_key) = () => ("student");
			(obj.role_icon) = () => ("🎒");
			(obj.role_label) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Role_student_role_label")));
			(obj.selected) = () => ((this.role_student_selected()));
			(obj.click) = (next) => ((this.role_student_click(next)));
			return obj;
		}
		role_teacher_selected(){
			return false;
		}
		role_teacher_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Role_teacher(){
			const obj = new this.$.$bog_tracker_mpit_neolo_auth_role_button();
			(obj.role_key) = () => ("teacher");
			(obj.role_icon) = () => ("📚");
			(obj.role_label) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Role_teacher_role_label")));
			(obj.selected) = () => ((this.role_teacher_selected()));
			(obj.click) = (next) => ((this.role_teacher_click(next)));
			return obj;
		}
		role_parent_selected(){
			return false;
		}
		role_parent_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Role_parent(){
			const obj = new this.$.$bog_tracker_mpit_neolo_auth_role_button();
			(obj.role_key) = () => ("parent");
			(obj.role_icon) = () => ("👨‍👩‍👧");
			(obj.role_label) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Role_parent_role_label")));
			(obj.selected) = () => ((this.role_parent_selected()));
			(obj.click) = (next) => ((this.role_parent_click(next)));
			return obj;
		}
		Reg_role_grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Role_student()), 
				(this.Role_teacher()), 
				(this.Role_parent())
			]);
			return obj;
		}
		needs_school_field(){
			return false;
		}
		reg_school(next){
			if(next !== undefined) return next;
			return "";
		}
		Reg_school_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_school_input_hint")));
			(obj.value) = (next) => ((this.reg_school(next)));
			return obj;
		}
		Reg_school_field(){
			const obj = new this.$.$mol_labeler();
			(obj.attr) = () => ({...(this.$.$mol_labeler.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_auth_school_visible": (this.needs_school_field())});
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_Reg_school_field_title")));
			(obj.content) = () => ([(this.Reg_school_input())]);
			return obj;
		}
		register_click(next){
			if(next !== undefined) return next;
			return null;
		}
		register_enabled(){
			return true;
		}
		register_label(){
			return "Зарегистрироваться";
		}
		Reg_submit(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.register_click(next)));
			(obj.enabled) = () => ((this.register_enabled()));
			(obj.sub) = () => ([(this.register_label())]);
			return obj;
		}
		Register_form(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_auth_form_visible": (this.is_register_mode())});
			(obj.sub) = () => ([
				(this.Reg_username_field()), 
				(this.Reg_password_field()), 
				(this.Reg_password2_field()), 
				(this.Reg_two_col()), 
				(this.Reg_role_label()), 
				(this.Reg_role_grid()), 
				(this.Reg_school_field()), 
				(this.Reg_submit())
			]);
			return obj;
		}
		Card(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Brand()), 
				(this.Sub()), 
				(this.Tabs()), 
				(this.Error_view()), 
				(this.Login_form()), 
				(this.Register_form())
			]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		mode_options(){
			return {"login": (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_mode_options_login")), "register": (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_auth_mode_options_register"))};
		}
		role(next){
			if(next !== undefined) return next;
			return "";
		}
		error(next){
			if(next !== undefined) return next;
			return "";
		}
		busy(next){
			if(next !== undefined) return next;
			return false;
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_auth_busy": (this.busy())};
		}
		sub(){
			return [(this.Card())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Brand_accent"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Brand"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Sub"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "mode"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Tabs"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Error_view"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "login_username"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Login_username_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Login_username_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "login_password"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Login_password_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Login_password_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "login_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Login_submit"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Login_form"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "reg_username"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_username_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_username_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "reg_password"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_password_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_password_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "reg_password2"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_password2_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_password2_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "reg_name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_name_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_name_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "reg_surname"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_surname_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_surname_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_two_col"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_role_label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "role_student_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Role_student"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "role_teacher_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Role_teacher"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "role_parent_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Role_parent"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_role_grid"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "reg_school"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_school_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_school_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "register_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Reg_submit"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Register_form"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "Card"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "role"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "error"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth.prototype), "busy"));
	($.$bog_tracker_mpit_neolo_auth_role_button) = class $bog_tracker_mpit_neolo_auth_role_button extends ($.$mol_button_minor) {
		Role_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.role_icon())]);
			return obj;
		}
		Role_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.role_label())]);
			return obj;
		}
		role_key(){
			return "";
		}
		role_icon(){
			return "";
		}
		role_label(){
			return "";
		}
		selected(){
			return false;
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_auth_role_button_selected": (this.selected())};
		}
		sub(){
			return [(this.Role_icon()), (this.Role_label())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_auth_role_button.prototype), "Role_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_auth_role_button.prototype), "Role_label"));


;
"use strict";
var $;
(function ($) {
    $.$bog_tracker_mpit_neolo_tokens = {
        g0: '#ffffff',
        g1: '#f2f7f2',
        g2: '#ddeedd',
        g3: '#a8cca8',
        g4: '#2ecc5a',
        g5: '#1aa843',
        g6: '#0f7a30',
        b0: '#111111',
        b1: '#222222',
        b2: '#444444',
        b3: '#666666',
        b4: '#999999',
        shadow: '0 16px 34px #00280a1a',
        radius_base: '22px',
        p1: '#667eea',
        p2: '#764ba2',
        gold: '#ffd700',
        red: '#c0392b',
        red_soft: '#ffeaea',
        red_badge: '#f8d7da',
        red_badge_text: '#842029',
        blue: '#0a58ca',
        blue_soft: '#e8f4ff',
        blue_badge: '#cfe2ff',
        yellow: '#fff3cd',
        yellow_text: '#856404',
        orange: '#e67e22',
        orange_soft: '#fff3e8',
        orange_text: '#b85c00',
        green_done_bg: '#d1e7dd',
        green_done_text: '#0a3622',
        grey_soft: '#e2e3e5',
        grey_text: '#41464b',
    };
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix of Object.keys(val).reverse()) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type of Object.keys(types).reverse()) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name of Object.keys(attrs).reverse()) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query of Object.keys(media).reverse()) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else if (key === '@starting-style') {
                    const styles = config[key];
                    rules.push('}\n');
                    make_class(prefix, path, styles);
                    rules.push(`${key} {\n`);
                }
                else if (key[0] === '[' && key[key.length - 1] === ']') {
                    const attr = key.slice(1, -1);
                    const vals = config[key];
                    for (let val of Object.keys(vals).reverse()) {
                        make_class(selector(prefix, path) + ':where([' + attr + '=' + JSON.stringify(val) + '])', [], vals[val]);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_auth extends $.$bog_tracker_mpit_neolo_auth {
            mode(next) {
                if (next !== undefined) {
                    this.error('');
                }
                return super.mode(next) ?? 'login';
            }
            error(next) {
                return super.error(next) ?? '';
            }
            busy(next) {
                return super.busy(next) ?? false;
            }
            role(next) {
                return super.role(next) ?? '';
            }
            has_error() {
                return this.error().length > 0;
            }
            is_login_mode() {
                return this.mode() === 'login';
            }
            is_register_mode() {
                return this.mode() === 'register';
            }
            needs_school_field() {
                if (!this.is_register_mode())
                    return false;
                const r = this.role();
                return r === 'student' || r === 'teacher';
            }
            role_student_selected() {
                return this.role() === 'student';
            }
            role_teacher_selected() {
                return this.role() === 'teacher';
            }
            role_parent_selected() {
                return this.role() === 'parent';
            }
            role_student_click(next) {
                this.role('student');
                this.error('');
                return null;
            }
            role_teacher_click(next) {
                this.role('teacher');
                this.error('');
                return null;
            }
            role_parent_click(next) {
                this.role('parent');
                this.error('');
                return null;
            }
            login_enabled() {
                if (this.busy())
                    return false;
                return this.login_username().trim().length > 0 && this.login_password().length > 0;
            }
            register_enabled() {
                return !this.busy();
            }
            login_label() {
                return this.busy() && this.is_login_mode() ? 'Входим...' : 'Войти';
            }
            register_label() {
                return this.busy() && this.is_register_mode() ? 'Регистрируем...' : 'Зарегистрироваться';
            }
            login_click(next) {
                this.do_login();
                return null;
            }
            register_click(next) {
                this.do_register();
                return null;
            }
            do_login() {
                this.error('');
                const username = this.login_username().trim();
                const password = this.login_password();
                if (!username || !password) {
                    this.error('Введите логин и пароль.');
                    return;
                }
                const profile = this.store().profile();
                if (!profile) {
                    this.error('Профиль не найден. Пройдите регистрацию.');
                    return;
                }
            }
            do_register() {
                this.error('');
                const username = this.reg_username().trim();
                const password = this.reg_password();
                const password2 = this.reg_password2();
                const name = this.reg_name().trim();
                const surname = this.reg_surname().trim();
                const school = this.reg_school().trim();
                const role = this.role();
                if (!username || username.length < 3) {
                    this.error('Логин — не менее 3 символов.');
                    return;
                }
                if (!password || password.length < 4) {
                    this.error('Пароль — не менее 4 символов.');
                    return;
                }
                if (password !== password2) {
                    this.error('Пароли не совпадают.');
                    return;
                }
                if (!name) {
                    this.error('Введите имя.');
                    return;
                }
                if (!surname) {
                    this.error('Введите фамилию.');
                    return;
                }
                if (!role) {
                    this.error('Выберите роль.');
                    return;
                }
                if ((role === 'student' || role === 'teacher') && !school) {
                    this.error('Введите название школы.');
                    return;
                }
                this.busy(true);
                try {
                    const store = this.store();
                    const registry = store.registry();
                    if (!registry) {
                        this.error('Не удалось получить доступ к базе.');
                        return;
                    }
                    const profile_ref = registry.Profile(null);
                    if (!profile_ref) {
                        this.error('Не удалось создать профиль.');
                        return;
                    }
                    const profile = profile_ref.ensure(null);
                    if (!profile) {
                        this.error('Не удалось создать профиль.');
                        return;
                    }
                    profile.username(null).val(username);
                    profile.name(null).val(name);
                    profile.surname(null).val(surname);
                    profile.role(null).val(role);
                    if (school)
                        profile.school(null).val(school);
                    profile.user_id(null).val(this.hash_id(username));
                    this.reg_username('');
                    this.reg_password('');
                    this.reg_password2('');
                    this.reg_name('');
                    this.reg_surname('');
                    this.reg_school('');
                    this.role('');
                }
                catch (e) {
                    this.error('Не удалось зарегистрироваться: ' + String(e));
                }
                finally {
                    this.busy(false);
                }
            }
            hash_id(source) {
                let h = 1469598103934665603n;
                const prime = 1099511628211n;
                const mask = (1n << 63n) - 1n;
                for (let i = 0; i < source.length; ++i) {
                    h = (h ^ BigInt(source.charCodeAt(i))) * prime;
                    h = h & mask;
                }
                return h;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "mode", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "error", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "busy", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "role", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "has_error", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "is_login_mode", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "is_register_mode", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "needs_school_field", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "role_student_selected", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "role_teacher_selected", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "role_parent_selected", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_auth.prototype, "role_student_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_auth.prototype, "role_teacher_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_auth.prototype, "role_parent_click", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "login_enabled", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "register_enabled", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "login_label", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_auth.prototype, "register_label", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_auth.prototype, "login_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_auth.prototype, "register_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_auth.prototype, "do_login", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_auth.prototype, "do_register", null);
        $$.$bog_tracker_mpit_neolo_auth = $bog_tracker_mpit_neolo_auth;
        class $bog_tracker_mpit_neolo_auth_role_button extends $.$bog_tracker_mpit_neolo_auth_role_button {
        }
        $$.$bog_tracker_mpit_neolo_auth_role_button = $bog_tracker_mpit_neolo_auth_role_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_auth, {
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        align: { items: 'center' },
        justify: { content: 'center' },
        padding: { top: '24px', bottom: '24px', left: '24px', right: '24px' },
        boxSizing: 'border-box',
        background: {
            image: [[`linear-gradient(135deg, ${t.g6} 0%, ${t.g5} 55%, ${t.g4} 100%)`]],
        },
        font: {
            family: '"Segoe UI", Arial, sans-serif',
        },
        color: t.b0,
        Card: {
            display: 'flex',
            flex: { direction: 'column' },
            width: '100%',
            maxWidth: '460px',
            maxHeight: '93vh',
            overflow: { y: 'auto' },
            background: { color: t.g0 },
            borderRadius: '28px',
            boxSizing: 'border-box',
            padding: { top: '36px', bottom: '32px', left: '32px', right: '32px' },
            box: {
                shadow: [{ x: 0, y: '32px', blur: '80px', spread: 0, color: '#00000038' }],
            },
        },
        Brand: {
            display: 'flex',
            flex: { direction: 'row', wrap: 'nowrap' },
            font: {
                size: '28px',
                weight: 800,
            },
            color: t.g5,
            margin: { bottom: '4px' },
        },
        Brand_accent: {
            display: 'inline',
            color: t.b0,
        },
        Sub: {
            display: 'block',
            font: { size: '14px' },
            color: t.b3,
            margin: { bottom: '26px' },
        },
        Tabs: {
            display: 'flex',
            flex: { direction: 'row' },
            background: { color: t.g2 },
            borderRadius: '12px',
            padding: { top: '4px', bottom: '4px', left: '4px', right: '4px' },
            margin: { bottom: '22px' },
            gap: '4px',
        },
        Error_view: {
            background: { color: '#fff0f0' },
            color: t.red,
            borderRadius: '10px',
            padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
            font: { size: '14px', weight: 600 },
            margin: { bottom: '14px' },
            '@': {
                bog_tracker_mpit_neolo_auth_error_visible: {
                    true: { display: 'block' },
                    false: { display: 'none' },
                },
            },
        },
        Login_form: {
            flex: { direction: 'column' },
            gap: 0,
            '@': {
                bog_tracker_mpit_neolo_auth_form_visible: {
                    true: { display: 'flex' },
                    false: { display: 'none' },
                },
            },
        },
        Register_form: {
            flex: { direction: 'column' },
            gap: 0,
            '@': {
                bog_tracker_mpit_neolo_auth_form_visible: {
                    true: { display: 'flex' },
                    false: { display: 'none' },
                },
            },
        },
        Reg_two_col: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            margin: { bottom: '14px' },
        },
        Reg_role_label: {
            display: 'block',
            font: { size: '13px', weight: 700 },
            color: t.b2,
            margin: { top: '6px', bottom: '8px' },
        },
        Reg_role_grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            margin: { bottom: '14px' },
        },
        Reg_school_field: {
            '@': {
                bog_tracker_mpit_neolo_auth_school_visible: {
                    true: { display: 'flex' },
                    false: { display: 'none' },
                },
            },
        },
        Login_submit: {
            width: '100%',
            padding: { top: '13px', bottom: '13px', left: 0, right: 0 },
            borderRadius: '13px',
            background: { color: t.g5 },
            color: t.g0,
            font: { weight: 800, size: '16px' },
            justify: { content: 'center' },
            margin: { top: '6px' },
            ':hover': {
                background: { color: t.g6 },
            },
        },
        Reg_submit: {
            width: '100%',
            padding: { top: '13px', bottom: '13px', left: 0, right: 0 },
            borderRadius: '13px',
            background: { color: t.g5 },
            color: t.g0,
            font: { weight: 800, size: '16px' },
            justify: { content: 'center' },
            margin: { top: '6px' },
            ':hover': {
                background: { color: t.g6 },
            },
        },
        $mol_labeler: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '6px',
            margin: { bottom: '14px' },
        },
        $mol_string: {
            width: '100%',
            boxSizing: 'border-box',
            padding: { top: '11px', bottom: '11px', left: '14px', right: '14px' },
            border: {
                width: '1.5px',
                style: 'solid',
                color: t.g2,
            },
            borderRadius: '11px',
            background: { color: t.g0 },
            font: { size: '15px' },
            outline: 'none',
            ':focus': {
                border: { color: t.g4 },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_auth_role_button, {
        display: 'flex',
        flex: { direction: 'column' },
        align: { items: 'center' },
        justify: { content: 'center' },
        gap: '8px',
        padding: { top: '14px', bottom: '14px', left: '8px', right: '8px' },
        borderRadius: '14px',
        border: {
            width: '2px',
            style: 'solid',
            color: t.g2,
        },
        background: { color: t.g1 },
        font: { weight: 700, size: '13px' },
        color: t.b2,
        cursor: 'pointer',
        '@': {
            bog_tracker_mpit_neolo_auth_role_button_selected: {
                true: {
                    border: { color: t.g4 },
                    background: { color: '#e4f7eb' },
                    color: t.g6,
                },
            },
        },
        Role_icon: {
            font: { size: '26px' },
            display: 'block',
        },
        Role_label: {
            display: 'block',
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $bog_tracker_mpit_neolo_api extends $mol_object {
        base() {
            return 'http://localhost:5000/api';
        }
        async post(path, body) {
            const r = await fetch(this.base() + path, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            if (!r.ok) {
                const j = await r.json().catch(() => ({}));
                return { ok: false, error: j.error || `HTTP ${r.status}` };
            }
            return r.json();
        }
        async predict_time(text) {
            return this.post('/predict_time', { text });
        }
        async ai_generate_test(title, desc, file_name) {
            return this.post('/ai/generate_test', { title, desc, file_name });
        }
        async ai_explain(title, desc) {
            return this.post('/ai/explain', { title, desc });
        }
        async ai_ask(topic, question, history) {
            return this.post('/ai/ask', { topic, question, history });
        }
        async stats_advice(payload, on_token) {
            try {
                const r = await fetch(this.base() + '/ai/stats_advice', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
                if (!r.ok || !r.body)
                    return { ok: false, error: `HTTP ${r.status}` };
                const reader = r.body.getReader();
                const decoder = new TextDecoder();
                let buf = '';
                while (true) {
                    const { done, value } = await reader.read();
                    if (done)
                        break;
                    buf += decoder.decode(value, { stream: true });
                    const lines = buf.split('\n');
                    buf = lines.pop() ?? '';
                    for (const line of lines) {
                        if (!line.startsWith('data:'))
                            continue;
                        const payload = line.slice(5).trim();
                        if (payload === '[DONE]')
                            return { ok: true };
                        try {
                            const obj = JSON.parse(payload);
                            if (obj.error)
                                return { ok: false, error: obj.error };
                            if (obj.token)
                                on_token(obj.token);
                        }
                        catch { }
                    }
                }
                return { ok: true };
            }
            catch (e) {
                return { ok: false, error: e.message || String(e) };
            }
        }
        async speech_to_text(audio) {
            const fd = new FormData();
            fd.append('audio', audio, 'voice.webm');
            try {
                const r = await fetch(this.base() + '/speech', { method: 'POST', body: fd });
                return r.json();
            }
            catch (e) {
                return { ok: false, error: e.message };
            }
        }
        async upload_student_file(username, task_id, file) {
            const fd = new FormData();
            fd.append('file', file);
            try {
                const r = await fetch(`${this.base()}/tasks/${username}/${task_id}/file`, { method: 'POST', body: fd });
                return r.json();
            }
            catch (e) {
                return { ok: false, error: e.message };
            }
        }
        async upload_teacher_file(username, task_id, file) {
            const fd = new FormData();
            fd.append('file', file);
            fd.append('task_id', String(task_id));
            fd.append('username', username);
            try {
                const r = await fetch(`${this.base()}/teacher/task_file`, { method: 'POST', body: fd });
                return r.json();
            }
            catch (e) {
                return { ok: false, error: e.message };
            }
        }
    }
    $.$bog_tracker_mpit_neolo_api = $bog_tracker_mpit_neolo_api;
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_student_tasks) = class $bog_tracker_mpit_neolo_student_tasks extends ($.$mol_view) {
		task_id_value(id){
			return "";
		}
		task_title(id){
			return "";
		}
		task_desc(id){
			return "";
		}
		task_source_label(id){
			return "";
		}
		task_source_cls(id){
			return "src-self";
		}
		task_status_label(id){
			return "";
		}
		task_status_cls(id){
			return "status-pending";
		}
		task_deadline(id){
			return "";
		}
		open_task(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title_label())]);
			return obj;
		}
		Section_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.nearest_label())]);
			return obj;
		}
		Tasks_group(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.task_rows()));
			return obj;
		}
		Add_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.add_label())]);
			return obj;
		}
		add_task_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["+"]);
			return obj;
		}
		Add_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.add_trigger_label())]);
			return obj;
		}
		Add_trigger(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.add_task_click(next)));
			(obj.sub) = () => ([(this.Add_icon()), (this.Add_text())]);
			return obj;
		}
		Add_box(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Add_title()), (this.Add_trigger())]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		title_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_tasks_title_label"));
		}
		nearest_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_tasks_nearest_label"));
		}
		add_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_tasks_add_label"));
		}
		add_trigger_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_tasks_add_trigger_label"));
		}
		task_ids(){
			return [];
		}
		task_rows(){
			return [];
		}
		Card(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_tasks_card();
			(obj.task_id) = (id) => ((this.task_id_value(id)));
			(obj.task_title) = () => ((this.task_title(id)));
			(obj.task_desc) = () => ((this.task_desc(id)));
			(obj.source_label) = () => ((this.task_source_label(id)));
			(obj.source_cls) = () => ((this.task_source_cls(id)));
			(obj.status_label) = () => ((this.task_status_label(id)));
			(obj.status_cls) = () => ((this.task_status_cls(id)));
			(obj.deadline) = () => ((this.task_deadline(id)));
			(obj.click) = (next) => ((this.open_task(id, next)));
			return obj;
		}
		sub(){
			return [
				(this.Title()), 
				(this.Section_title()), 
				(this.Tasks_group()), 
				(this.Add_box())
			];
		}
	};
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "open_task"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Section_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Tasks_group"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Add_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "add_task_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Add_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Add_text"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Add_trigger"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Add_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "api"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_tasks.prototype), "Card"));
	($.$bog_tracker_mpit_neolo_student_tasks_card) = class $bog_tracker_mpit_neolo_student_tasks_card extends ($.$mol_button_minor) {
		source_cls(){
			return "src-self";
		}
		status_cls(){
			return "status-pending";
		}
		Bullet(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.task_title())]);
			return obj;
		}
		Desc(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.task_desc())]);
			return obj;
		}
		Source_badge(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj))});
			(obj.sub) = () => ([(this.source_label())]);
			return obj;
		}
		Status_badge(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj))});
			(obj.sub) = () => ([(this.status_label())]);
			return obj;
		}
		Meta_row(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Source_badge()), (this.Status_badge())]);
			return obj;
		}
		Inner(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Name()), 
				(this.Desc()), 
				(this.Meta_row())
			]);
			return obj;
		}
		Deadline(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.deadline())]);
			return obj;
		}
		task_id(){
			return "";
		}
		task_title(){
			return "";
		}
		task_desc(){
			return "";
		}
		source_label(){
			return "";
		}
		status_label(){
			return "";
		}
		deadline(){
			return "";
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		attr(){
			return {
				...(super.attr()), 
				"bog_tracker_mpit_neolo_student_tasks_card_source": (this.source_cls()), 
				"bog_tracker_mpit_neolo_student_tasks_card_status": (this.status_cls())
			};
		}
		sub(){
			return [
				(this.Bullet()), 
				(this.Inner()), 
				(this.Deadline())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "Bullet"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "Name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "Desc"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "Source_badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "Status_badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "Meta_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "Inner"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "Deadline"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_tasks_card.prototype), "click"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const STATUS_META = {
            pending: { label: 'Ожидает', cls: 'status-pending' },
            progress: { label: 'Выполняется', cls: 'status-progress' },
            review: { label: 'На проверке', cls: 'status-review' },
            done: { label: 'Выполнено', cls: 'status-done' },
            rejected: { label: 'Непринято', cls: 'status-rejected' },
            overdue: { label: 'Просрочено', cls: 'status-overdue' },
        };
        function task_status(task) {
            const st = task.status()?.val() ?? 'pending';
            if (st === 'done' || st === 'rejected' || st === 'review' || st === 'progress')
                return st;
            const today = new Date().toISOString().slice(0, 10);
            const date = task.date()?.val() ?? '';
            if (date && date < today)
                return 'overdue';
            return st;
        }
        function task_dt(task) {
            const time = (task.time()?.val() ?? '').split(/[–\-]/)[0]?.trim() ?? '';
            const tm = /^\d{2}:\d{2}$/.test(time) ? time : '00:00';
            return `${task.date()?.val() ?? ''}T${tm}:00`;
        }
        function src_label(source) {
            if (source === 'teacher')
                return 'От учителя';
            if (source === 'parent')
                return 'От родителя';
            return 'Задача';
        }
        function src_cls(source) {
            if (source === 'teacher')
                return 'src-teacher';
            if (source === 'parent')
                return 'src-parent';
            return 'src-self';
        }
        function fmt_deadline(task) {
            const date = task.date()?.val() ?? '';
            const time = task.time()?.val() ?? '—';
            if (!date)
                return time;
            const d = new Date(date + 'T12:00:00');
            if (isNaN(d.getTime()))
                return time;
            const dd = String(d.getDate()).padStart(2, '0');
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            return `${time} · ${dd}.${mm}`;
        }
        class $bog_tracker_mpit_neolo_student_tasks extends $.$bog_tracker_mpit_neolo_student_tasks {
            tasks_sorted() {
                const all = this.store().tasks_all();
                const copy = all.slice();
                copy.sort((a, b) => task_dt(a).localeCompare(task_dt(b)));
                return copy.slice(0, 5);
            }
            task_ids() {
                return this.tasks_sorted().map(t => t.link().str);
            }
            task_by_id(id) {
                const all = this.store().tasks_all();
                return all.find(t => t.link().str === id) ?? null;
            }
            task_id_value(id) {
                return id;
            }
            task_title(id) {
                return this.task_by_id(id)?.title()?.val() ?? '';
            }
            task_desc(id) {
                return this.task_by_id(id)?.desc()?.val() ?? '';
            }
            task_source_label(id) {
                const src = this.task_by_id(id)?.source()?.val() ?? 'self';
                return src_label(src);
            }
            task_source_cls(id) {
                const src = this.task_by_id(id)?.source()?.val() ?? 'self';
                return src_cls(src);
            }
            task_status_label(id) {
                const t = this.task_by_id(id);
                if (!t)
                    return STATUS_META.pending.label;
                return STATUS_META[task_status(t)]?.label ?? STATUS_META.pending.label;
            }
            task_status_cls(id) {
                const t = this.task_by_id(id);
                if (!t)
                    return STATUS_META.pending.cls;
                return STATUS_META[task_status(t)]?.cls ?? STATUS_META.pending.cls;
            }
            task_deadline(id) {
                const t = this.task_by_id(id);
                return t ? fmt_deadline(t) : '';
            }
            task_rows() {
                return this.task_ids().map(id => this.Card(id));
            }
            add_task_click(next) {
                return null;
            }
            open_task(id, next) {
                return null;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "tasks_sorted", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_by_id", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_id_value", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_desc", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_source_label", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_source_cls", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_status_label", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_status_cls", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_deadline", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "task_rows", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "add_task_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_tasks.prototype, "open_task", null);
        $$.$bog_tracker_mpit_neolo_student_tasks = $bog_tracker_mpit_neolo_student_tasks;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const t = $bog_tracker_mpit_neolo_tokens;
        $mol_style_define($bog_tracker_mpit_neolo_student_tasks, {
            display: 'flex',
            flex: { direction: 'column' },
            minHeight: '100%',
            borderRadius: '22px',
            padding: { top: '22px', bottom: '22px', left: '24px', right: '24px' },
            overflow: { x: 'hidden', y: 'auto' },
            background: { color: t.g4 },
            color: t.b0,
            gap: '12px',
            Title: {
                display: 'block',
                font: { size: '36px', weight: 800 },
                margin: { bottom: '16px' },
            },
            Section_title: {
                display: 'block',
                margin: { top: '20px', bottom: '12px' },
                font: { size: '20px', weight: 700 },
                color: '#00000099',
            },
            Tasks_group: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '12px',
            },
            Add_box: {
                display: 'flex',
                flex: { direction: 'column' },
                margin: { top: '22px' },
            },
            Add_title: {
                display: 'block',
                margin: { top: '20px', bottom: '12px' },
                font: { size: '20px', weight: 700 },
                color: '#00000099',
            },
            Add_trigger: {
                display: 'flex',
                align: { items: 'center' },
                gap: '14px',
                minWidth: '100%',
                padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
                background: { color: t.g0 },
                borderRadius: '14px',
                box: {
                    shadow: [{ x: 0, y: '6px', blur: '16px', spread: 0, color: '#00000017' }],
                },
            },
            Add_icon: {
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                minWidth: '28px',
                minHeight: '28px',
                borderRadius: '999px',
                border: { width: '2px', style: 'solid', color: t.g5 },
                color: t.g5,
                font: { size: '18px', weight: 800 },
            },
            Add_text: {
                display: 'block',
                font: { size: '14px', weight: 700 },
                color: t.g6,
            },
        });
        $mol_style_define($bog_tracker_mpit_neolo_student_tasks_card, {
            display: 'grid',
            gridTemplateColumns: 'auto minmax(0, 1fr) auto',
            gap: '14px',
            align: { items: 'start' },
            minWidth: '100%',
            padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
            textAlign: 'left',
            background: { color: t.g0 },
            borderRadius: '14px',
            box: {
                shadow: [{ x: 0, y: '6px', blur: '16px', spread: 0, color: '#00000017' }],
            },
            Bullet: {
                minWidth: '18px',
                minHeight: '18px',
                borderRadius: '999px',
                border: { width: '2.5px', style: 'solid', color: t.g5 },
                background: { color: t.g0 },
                margin: { top: '3px' },
            },
            Inner: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '4px',
                minWidth: 0,
            },
            Name: {
                font: { size: '17px', weight: 700 },
                color: t.b0,
                whiteSpace: 'normal',
                overflow: { x: 'hidden' },
                textOverflow: 'ellipsis',
            },
            Desc: {
                font: { size: '13px' },
                color: t.b3,
                whiteSpace: 'normal',
            },
            Meta_row: {
                display: 'flex',
                align: { items: 'center' },
                gap: '6px',
                flex: { wrap: 'wrap' },
                margin: { top: '4px' },
            },
            Source_badge: {
                display: 'inline-flex',
                font: { size: '11px', weight: 700 },
                padding: { top: '2px', bottom: '2px', left: '7px', right: '7px' },
                borderRadius: '999px',
                whiteSpace: 'nowrap',
            },
            Status_badge: {
                display: 'inline-flex',
                align: { items: 'center' },
                gap: '5px',
                font: { size: '12px', weight: 700 },
                padding: { top: '3px', bottom: '3px', left: '10px', right: '10px' },
                borderRadius: '999px',
                whiteSpace: 'nowrap',
            },
            Deadline: {
                font: { size: '13px', weight: 700 },
                color: t.b2,
                whiteSpace: 'nowrap',
            },
            '@': {
                bog_tracker_mpit_neolo_student_tasks_card_source: {
                    'src-teacher': {
                        background: { color: t.blue_soft },
                        color: t.blue,
                    },
                    'src-parent': {
                        background: { color: t.orange_soft },
                        color: t.orange_text,
                    },
                    'src-self': {
                        background: { color: t.g2 },
                        color: t.g6,
                    },
                },
                bog_tracker_mpit_neolo_student_tasks_card_status: {
                    'status-pending': {
                        background: { color: t.yellow },
                        color: t.yellow_text,
                    },
                    'status-progress': {
                        background: { color: t.blue_badge },
                        color: t.blue,
                    },
                    'status-review': {
                        background: { color: t.red_badge },
                        color: t.red_badge_text,
                    },
                    'status-done': {
                        background: { color: t.green_done_bg },
                        color: t.green_done_text,
                    },
                    'status-rejected': {
                        background: { color: t.grey_soft },
                        color: t.grey_text,
                    },
                    'status-overdue': {
                        background: { color: t.red_badge },
                        color: t.red_badge_text,
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_student_calendar) = class $bog_tracker_mpit_neolo_student_calendar extends ($.$mol_view) {
		cell_date_id(id){
			return "";
		}
		cell_day(id){
			return "";
		}
		cell_count(id){
			return "";
		}
		cell_has_count(id){
			return false;
		}
		cell_is_selected(id){
			return false;
		}
		cell_is_today(id){
			return false;
		}
		cell_is_empty(id){
			return false;
		}
		select_day(id, next){
			if(next !== undefined) return next;
			return null;
		}
		weekday_label(id){
			return "";
		}
		day_task_id(id){
			return "";
		}
		day_task_time(id){
			return "";
		}
		day_task_title(id){
			return "";
		}
		day_task_meta(id){
			return "";
		}
		open_task(id, next){
			if(next !== undefined) return next;
			return null;
		}
		upcoming_id(id){
			return "";
		}
		upcoming_date(id){
			return "";
		}
		upcoming_time(id){
			return "";
		}
		upcoming_title(id){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title_label())]);
			return obj;
		}
		prev_month(next){
			if(next !== undefined) return next;
			return null;
		}
		Prev_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.prev_month(next)));
			(obj.sub) = () => (["‹"]);
			return obj;
		}
		Month_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.month_label())]);
			return obj;
		}
		next_month(next){
			if(next !== undefined) return next;
			return null;
		}
		Next_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.next_month(next)));
			(obj.sub) = () => (["›"]);
			return obj;
		}
		Nav(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Prev_btn()), 
				(this.Month_label()), 
				(this.Next_btn())
			]);
			return obj;
		}
		create_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Create_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.create_click(next)));
			(obj.sub) = () => ([(this.add_label())]);
			return obj;
		}
		Toolbar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Nav()), (this.Create_btn())]);
			return obj;
		}
		Grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.grid_cells()));
			return obj;
		}
		Day_box_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.today_label())]);
			return obj;
		}
		Selected_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.selected_label())]);
			return obj;
		}
		Day_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.day_tasks()));
			return obj;
		}
		day_is_empty(){
			return false;
		}
		Empty_note(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_calendar_empty": (this.day_is_empty())});
			(obj.sub) = () => ([(this.empty_note())]);
			return obj;
		}
		Day_box(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Day_box_title()), 
				(this.Selected_label()), 
				(this.Day_list()), 
				(this.Empty_note())
			]);
			return obj;
		}
		Upcoming_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.upcoming_label())]);
			return obj;
		}
		Upcoming_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.upcoming()));
			return obj;
		}
		Upcoming_box(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Upcoming_title()), (this.Upcoming_list())]);
			return obj;
		}
		Bottom(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Day_box()), (this.Upcoming_box())]);
			return obj;
		}
		Calendar_layout(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Toolbar()), 
				(this.Grid()), 
				(this.Bottom())
			]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		title_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_calendar_title_label"));
		}
		month_label(){
			return "";
		}
		view_month(next){
			if(next !== undefined) return next;
			return 0;
		}
		view_year(next){
			if(next !== undefined) return next;
			return 0;
		}
		selected_date(next){
			if(next !== undefined) return next;
			return "";
		}
		add_label(){
			return "+ Добавить задачу";
		}
		today_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_calendar_today_label"));
		}
		upcoming_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_calendar_upcoming_label"));
		}
		empty_note(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_calendar_empty_note"));
		}
		weekday_ids(){
			return [
				"Пн", 
				"Вт", 
				"Ср", 
				"Чт", 
				"Пт", 
				"Сб", 
				"Вс"
			];
		}
		cell_ids(){
			return [];
		}
		selected_label(){
			return "";
		}
		day_task_ids(){
			return [];
		}
		upcoming_ids(){
			return [];
		}
		grid_cells(){
			return [];
		}
		day_tasks(){
			return [];
		}
		upcoming(){
			return [];
		}
		Cell(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_calendar_cell();
			(obj.date_id) = (id) => ((this.cell_date_id(id)));
			(obj.day_number) = () => ((this.cell_day(id)));
			(obj.count) = () => ((this.cell_count(id)));
			(obj.has_count) = () => ((this.cell_has_count(id)));
			(obj.is_selected) = () => ((this.cell_is_selected(id)));
			(obj.is_today) = () => ((this.cell_is_today(id)));
			(obj.is_empty) = () => ((this.cell_is_empty(id)));
			(obj.click) = (next) => ((this.select_day(id, next)));
			return obj;
		}
		Weekday(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.weekday_label(id))]);
			return obj;
		}
		Day_task(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_calendar_day_task();
			(obj.task_id) = (id) => ((this.day_task_id(id)));
			(obj.time) = () => ((this.day_task_time(id)));
			(obj.task_title) = () => ((this.day_task_title(id)));
			(obj.meta) = () => ((this.day_task_meta(id)));
			(obj.click) = (next) => ((this.open_task(id, next)));
			return obj;
		}
		Upcoming_row(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_calendar_upcoming_row();
			(obj.task_id) = (id) => ((this.upcoming_id(id)));
			(obj.upcoming_date) = () => ((this.upcoming_date(id)));
			(obj.upcoming_time) = () => ((this.upcoming_time(id)));
			(obj.upcoming_title) = () => ((this.upcoming_title(id)));
			(obj.click) = (next) => ((this.open_task(id, next)));
			return obj;
		}
		sub(){
			return [(this.Title()), (this.Calendar_layout())];
		}
	};
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "select_day"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "open_task"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "prev_month"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Prev_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Month_label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "next_month"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Next_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Nav"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "create_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Create_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Toolbar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Grid"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Day_box_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Selected_label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Day_list"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Empty_note"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Day_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Upcoming_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Upcoming_list"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Upcoming_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Bottom"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Calendar_layout"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "api"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "view_month"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "view_year"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "selected_date"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Cell"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Weekday"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Day_task"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_calendar.prototype), "Upcoming_row"));
	($.$bog_tracker_mpit_neolo_student_calendar_cell) = class $bog_tracker_mpit_neolo_student_calendar_cell extends ($.$mol_button_minor) {
		is_selected(){
			return false;
		}
		is_today(){
			return false;
		}
		is_empty(){
			return false;
		}
		has_count(){
			return false;
		}
		Day_number(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.day_number())]);
			return obj;
		}
		Badge(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj))});
			(obj.sub) = () => ([(this.count())]);
			return obj;
		}
		date_id(){
			return "";
		}
		day_number(){
			return "";
		}
		count(){
			return "";
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		attr(){
			return {
				...(super.attr()), 
				"bog_tracker_mpit_neolo_student_calendar_cell_selected": (this.is_selected()), 
				"bog_tracker_mpit_neolo_student_calendar_cell_today": (this.is_today()), 
				"bog_tracker_mpit_neolo_student_calendar_cell_empty": (this.is_empty()), 
				"bog_tracker_mpit_neolo_student_calendar_cell_has_count": (this.has_count())
			};
		}
		sub(){
			return [(this.Day_number()), (this.Badge())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_cell.prototype), "Day_number"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_cell.prototype), "Badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_cell.prototype), "click"));
	($.$bog_tracker_mpit_neolo_student_calendar_day_task) = class $bog_tracker_mpit_neolo_student_calendar_day_task extends ($.$mol_button_minor) {
		Time_chip(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.time())]);
			return obj;
		}
		Title_row(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.task_title())]);
			return obj;
		}
		Meta_row(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.meta())]);
			return obj;
		}
		Inner(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Title_row()), (this.Meta_row())]);
			return obj;
		}
		task_id(){
			return "";
		}
		time(){
			return "";
		}
		task_title(){
			return "";
		}
		meta(){
			return "";
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		sub(){
			return [(this.Time_chip()), (this.Inner())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_day_task.prototype), "Time_chip"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_day_task.prototype), "Title_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_day_task.prototype), "Meta_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_day_task.prototype), "Inner"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_day_task.prototype), "click"));
	($.$bog_tracker_mpit_neolo_student_calendar_upcoming_row) = class $bog_tracker_mpit_neolo_student_calendar_upcoming_row extends ($.$mol_view) {
		Dot(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		Title_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.click(next)));
			(obj.sub) = () => ([(this.upcoming_title())]);
			return obj;
		}
		Text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.upcoming_date()), 
				" ·", 
				(this.upcoming_time()), 
				" —", 
				(this.Title_btn())
			]);
			return obj;
		}
		task_id(){
			return "";
		}
		upcoming_date(){
			return "";
		}
		upcoming_time(){
			return "";
		}
		upcoming_title(){
			return "";
		}
		sub(){
			return [(this.Dot()), (this.Text())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_upcoming_row.prototype), "Dot"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_upcoming_row.prototype), "click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_upcoming_row.prototype), "Title_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_calendar_upcoming_row.prototype), "Text"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const MONTH_NAMES = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
        ];
        function task_dt(task) {
            const time = (task.time()?.val() ?? '').split(/[–\-]/)[0]?.trim() ?? '';
            const tm = /^\d{2}:\d{2}$/.test(time) ? time : '00:00';
            return `${task.date()?.val() ?? ''}T${tm}:00`;
        }
        function src_label(source) {
            if (source === 'teacher')
                return 'От учителя';
            if (source === 'parent')
                return 'От родителя';
            return 'Задача';
        }
        function fmt_date_ru(iso) {
            if (!iso)
                return '';
            const d = new Date(iso + 'T12:00:00');
            if (isNaN(d.getTime()))
                return iso;
            return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'long' });
        }
        function fmt_upcoming_date(iso) {
            if (!iso)
                return '';
            const d = new Date(iso + 'T12:00:00');
            if (isNaN(d.getTime()))
                return iso;
            return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
        }
        class $bog_tracker_mpit_neolo_student_calendar extends $.$bog_tracker_mpit_neolo_student_calendar {
            view_month(next) {
                const cur = super.view_month(next);
                if (cur !== undefined && cur !== null)
                    return cur;
                return new Date().getMonth();
            }
            view_year(next) {
                const cur = super.view_year(next);
                if (cur !== undefined && cur !== null && cur > 0)
                    return cur;
                return new Date().getFullYear();
            }
            selected_date(next) {
                const cur = super.selected_date(next);
                if (cur)
                    return cur;
                return new Date().toISOString().slice(0, 10);
            }
            month_label() {
                return `${MONTH_NAMES[this.view_month()]} ${this.view_year()}`;
            }
            tasks_all() {
                return this.store().tasks_all();
            }
            tasks_for_date(id) {
                const all = this.tasks_all();
                const out = [];
                for (const t of all) {
                    if ((t.date()?.val() ?? '') === id)
                        out.push(t);
                }
                return out;
            }
            cell_ids() {
                const m = this.view_month();
                const y = this.view_year();
                const first = new Date(y, m, 1);
                const offset = (first.getDay() + 6) % 7;
                const days = new Date(y, m + 1, 0).getDate();
                const ids = [];
                for (let i = 0; i < offset; i++)
                    ids.push(`empty-${i}`);
                for (let d = 1; d <= days; d++) {
                    const mm = String(m + 1).padStart(2, '0');
                    const dd = String(d).padStart(2, '0');
                    ids.push(`${y}-${mm}-${dd}`);
                }
                return ids;
            }
            cell_date_id(id) {
                return id;
            }
            cell_is_empty(id) {
                return id.startsWith('empty-');
            }
            cell_day(id) {
                if (id.startsWith('empty-'))
                    return '';
                const parts = id.split('-');
                return String(Number(parts[2]));
            }
            cell_count(id) {
                if (id.startsWith('empty-'))
                    return '';
                const tasks = this.tasks_for_date(id);
                return tasks.length ? String(tasks.length) : '';
            }
            cell_has_count(id) {
                return !!this.cell_count(id);
            }
            cell_is_selected(id) {
                if (id.startsWith('empty-'))
                    return false;
                return id === this.selected_date();
            }
            cell_is_today(id) {
                if (id.startsWith('empty-'))
                    return false;
                return id === new Date().toISOString().slice(0, 10);
            }
            weekday_ids() {
                return super.weekday_ids();
            }
            weekday_label(id) {
                return id;
            }
            grid_cells() {
                const weekdays = this.weekday_ids().map(id => this.Weekday(id));
                const cells = this.cell_ids().map(id => this.Cell(id));
                return [...weekdays, ...cells];
            }
            selected_label() {
                return fmt_date_ru(this.selected_date());
            }
            day_tasks_sorted() {
                const d = this.selected_date();
                const list = this.tasks_for_date(d);
                return list.slice().sort((a, b) => (a.time()?.val() ?? '').localeCompare(b.time()?.val() ?? ''));
            }
            day_task_ids() {
                return this.day_tasks_sorted().map(t => t.link().str);
            }
            day_is_empty() {
                return this.day_task_ids().length === 0;
            }
            day_task_by_id(id) {
                return this.tasks_all().find(t => t.link().str === id) ?? null;
            }
            day_task_id(id) { return id; }
            day_task_time(id) {
                return this.day_task_by_id(id)?.time()?.val() ?? '—';
            }
            day_task_title(id) {
                return this.day_task_by_id(id)?.title()?.val() ?? '';
            }
            day_task_meta(id) {
                const t = this.day_task_by_id(id);
                if (!t)
                    return '';
                const desc = t.desc()?.val() ?? '';
                const src = t.source()?.val() ?? 'self';
                return `${desc} · ${src_label(src)}`;
            }
            day_tasks() {
                return this.day_task_ids().map(id => this.Day_task(id));
            }
            upcoming_list_sorted() {
                const all = this.tasks_all().slice();
                all.sort((a, b) => task_dt(a).localeCompare(task_dt(b)));
                return all.slice(0, 6);
            }
            upcoming_ids() {
                return this.upcoming_list_sorted().map(t => t.link().str);
            }
            upcoming_by_id(id) {
                return this.tasks_all().find(t => t.link().str === id) ?? null;
            }
            upcoming_id(id) { return id; }
            upcoming_date(id) {
                return fmt_upcoming_date(this.upcoming_by_id(id)?.date()?.val() ?? '');
            }
            upcoming_time(id) {
                return this.upcoming_by_id(id)?.time()?.val() ?? '—';
            }
            upcoming_title(id) {
                return this.upcoming_by_id(id)?.title()?.val() ?? '';
            }
            upcoming() {
                return this.upcoming_ids().map(id => this.Upcoming_row(id));
            }
            prev_month(next) { return null; }
            next_month(next) { return null; }
            create_click(next) { return null; }
            select_day(id, next) {
                if (next !== undefined) {
                    if (!id.startsWith('empty-'))
                        this.selected_date(id);
                }
                return null;
            }
            open_task(id, next) { return null; }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "view_month", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "view_year", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "selected_date", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "month_label", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "tasks_all", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "tasks_for_date", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "cell_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "cell_date_id", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "cell_is_empty", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "cell_day", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "cell_count", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "cell_has_count", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "cell_is_selected", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "cell_is_today", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "weekday_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "weekday_label", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "grid_cells", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "selected_label", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_tasks_sorted", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_task_ids", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_is_empty", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_task_by_id", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_task_id", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_task_time", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_task_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_task_meta", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "day_tasks", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "upcoming_list_sorted", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "upcoming_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "upcoming_by_id", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "upcoming_id", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "upcoming_date", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "upcoming_time", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "upcoming_title", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "upcoming", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "prev_month", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "next_month", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "create_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "select_day", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_calendar.prototype, "open_task", null);
        $$.$bog_tracker_mpit_neolo_student_calendar = $bog_tracker_mpit_neolo_student_calendar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const t = $bog_tracker_mpit_neolo_tokens;
        $mol_style_define($bog_tracker_mpit_neolo_student_calendar, {
            display: 'flex',
            flex: { direction: 'column' },
            minHeight: '100%',
            borderRadius: '22px',
            padding: { top: '22px', bottom: '22px', left: '24px', right: '24px' },
            overflow: { x: 'hidden', y: 'auto' },
            background: { color: t.b0 },
            color: t.g0,
            gap: '12px',
            Title: {
                display: 'block',
                font: { size: '36px', weight: 800 },
                margin: { bottom: '16px' },
            },
            Calendar_layout: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '22px',
            },
            Toolbar: {
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'space-between' },
                gap: '12px',
                margin: { bottom: '14px' },
            },
            Nav: {
                display: 'flex',
                align: { items: 'center' },
                gap: '14px',
            },
            Prev_btn: {
                background: { color: 'transparent' },
                color: t.g4,
                font: { size: '34px' },
                padding: { left: '4px', right: '4px' },
            },
            Next_btn: {
                background: { color: 'transparent' },
                color: t.g4,
                font: { size: '34px' },
                padding: { left: '4px', right: '4px' },
            },
            Month_label: {
                display: 'inline-flex',
                font: { size: '22px', weight: 800 },
                color: t.g4,
            },
            Create_btn: {
                background: { color: t.g4 },
                color: t.b0,
                padding: { top: '11px', bottom: '11px', left: '16px', right: '16px' },
                borderRadius: '12px',
                font: { weight: 800 },
            },
            Grid: {
                display: 'grid',
                gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                gap: '8px',
            },
            Weekday: {
                font: { size: '13px', weight: 700 },
                color: t.g4,
                padding: { bottom: '4px' },
                textAlign: 'center',
            },
            Bottom: {
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
                gap: '16px',
            },
            Day_box: {
                display: 'flex',
                flex: { direction: 'column' },
                padding: '18px',
                borderRadius: '16px',
                background: { color: '#ffffff0f' },
                border: { width: '1px', style: 'solid', color: '#ffffff21' },
                gap: '8px',
            },
            Upcoming_box: {
                display: 'flex',
                flex: { direction: 'column' },
                padding: '18px',
                borderRadius: '16px',
                background: { color: '#ffffff0f' },
                border: { width: '1px', style: 'solid', color: '#ffffff21' },
                gap: '8px',
            },
            Day_box_title: {
                font: { size: '18px', weight: 800 },
                color: t.g4,
                margin: { bottom: '12px' },
            },
            Upcoming_title: {
                font: { size: '18px', weight: 800 },
                color: t.g4,
                margin: { bottom: '12px' },
            },
            Selected_label: {
                font: { size: '15px', weight: 700 },
                color: '#ffffffb3',
                margin: { bottom: '4px' },
            },
            Day_list: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '10px',
            },
            Upcoming_list: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '10px',
            },
            Empty_note: {
                padding: '14px',
                borderRadius: '12px',
                background: { color: '#ffffff12' },
                color: '#ffffffa6',
                font: { size: '14px' },
            },
            '@': {
                bog_tracker_mpit_neolo_student_calendar_empty: {
                    true: { display: 'flex' },
                    false: { display: 'none' },
                },
            },
        });
        $mol_style_define($bog_tracker_mpit_neolo_student_calendar_cell, {
            display: 'flex',
            flex: { direction: 'column' },
            align: { items: 'flex-start' },
            justify: { content: 'space-between' },
            minHeight: '82px',
            gap: '4px',
            padding: '9px',
            borderRadius: '16px',
            background: { color: '#ffffff0d' },
            border: { width: '1px', style: 'solid', color: 'transparent' },
            color: '#ffffffd9',
            textAlign: 'left',
            Day_number: {
                font: { size: '18px', weight: 800 },
                color: '#ffffffd9',
            },
            Badge: {
                display: 'inline-flex',
                align: { items: 'center', self: 'flex-end' },
                justify: { content: 'center' },
                minWidth: '24px',
                minHeight: '24px',
                padding: { left: '6px', right: '6px' },
                borderRadius: '999px',
                background: { color: t.g4 },
                color: t.b0,
                font: { size: '12px', weight: 800 },
            },
            '@': {
                bog_tracker_mpit_neolo_student_calendar_cell_selected: {
                    true: {
                        background: { color: '#2ecc5a2e' },
                        border: { width: '1px', style: 'solid', color: t.g4 },
                    },
                },
                bog_tracker_mpit_neolo_student_calendar_cell_today: {
                    true: {
                        color: t.g4,
                    },
                },
                bog_tracker_mpit_neolo_student_calendar_cell_empty: {
                    true: {
                        visibility: 'hidden',
                    },
                },
                bog_tracker_mpit_neolo_student_calendar_cell_has_count: {
                    false: {
                        display: 'none',
                    },
                },
            },
        });
        $mol_style_define($bog_tracker_mpit_neolo_student_calendar_day_task, {
            display: 'grid',
            gridTemplateColumns: 'auto minmax(0, 1fr)',
            gap: '12px',
            align: { items: 'start' },
            minWidth: '100%',
            padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
            borderRadius: '13px',
            background: { color: '#fffffff2' },
            color: t.b0,
            textAlign: 'left',
            Time_chip: {
                display: 'inline-flex',
                align: { items: 'center' },
                padding: { top: '5px', bottom: '5px', left: '9px', right: '9px' },
                borderRadius: '999px',
                background: { color: t.g4 },
                color: t.b0,
                font: { size: '12px', weight: 800 },
                whiteSpace: 'nowrap',
            },
            Inner: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '3px',
                minWidth: 0,
            },
            Title_row: {
                font: { size: '15px', weight: 800 },
            },
            Meta_row: {
                font: { size: '12px' },
                color: t.b3,
            },
        });
        $mol_style_define($bog_tracker_mpit_neolo_student_calendar_upcoming_row, {
            display: 'flex',
            align: { items: 'center' },
            gap: '12px',
            font: { size: '15px' },
            Dot: {
                minWidth: '10px',
                minHeight: '10px',
                borderRadius: '999px',
                background: { color: t.g4 },
                flex: { grow: 0, shrink: 0 },
            },
            Text: {
                display: 'flex',
                align: { items: 'center' },
                gap: '4px',
                flex: { wrap: 'wrap' },
            },
            Title_btn: {
                background: { color: 'transparent' },
                color: 'inherit',
                padding: 0,
                textAlign: 'left',
                font: { weight: 700 },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";

;
	($.$bog_tracker_mpit_neolo_student_stats) = class $bog_tracker_mpit_neolo_student_stats extends ($.$mol_view) {
		invitation_id_value(id){
			return "";
		}
		invitation_title(id){
			return "";
		}
		invitation_sub(id){
			return "";
		}
		inv_accept(id, next){
			if(next !== undefined) return next;
			return null;
		}
		inv_reject(id, next){
			if(next !== undefined) return next;
			return null;
		}
		done_line_path(){
			return "";
		}
		done_fill_path(){
			return "";
		}
		work_line_path(){
			return "";
		}
		work_fill_path(){
			return "";
		}
		overdue_line_path(){
			return "";
		}
		overdue_fill_path(){
			return "";
		}
		rejected_line_path(){
			return "";
		}
		rejected_fill_path(){
			return "";
		}
		Profile_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.profile_title())]);
			return obj;
		}
		L_name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label_name())]);
			return obj;
		}
		V_name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value_name())]);
			return obj;
		}
		L_surname(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label_surname())]);
			return obj;
		}
		V_surname(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value_surname())]);
			return obj;
		}
		L_login(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label_login())]);
			return obj;
		}
		V_login(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value_login())]);
			return obj;
		}
		L_role(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label_role())]);
			return obj;
		}
		V_role(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value_role())]);
			return obj;
		}
		L_school(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label_school())]);
			return obj;
		}
		V_school(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value_school())]);
			return obj;
		}
		L_id(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label_id())]);
			return obj;
		}
		V_id(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value_id())]);
			return obj;
		}
		Profile_table(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.L_name()), 
				(this.V_name()), 
				(this.L_surname()), 
				(this.V_surname()), 
				(this.L_login()), 
				(this.V_login()), 
				(this.L_role()), 
				(this.V_role()), 
				(this.L_school()), 
				(this.V_school()), 
				(this.L_id()), 
				(this.V_id())
			]);
			return obj;
		}
		Inv_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.invitations_title())]);
			return obj;
		}
		Inv_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.invitation_rows()));
			return obj;
		}
		Inv_section(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Inv_title()), (this.Inv_list())]);
			return obj;
		}
		Ai_heading(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.ai_title())]);
			return obj;
		}
		ai_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Ai_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.ai_click(next)));
			(obj.sub) = () => ([(this.ai_button_label())]);
			return obj;
		}
		ai_visible(next){
			if(next !== undefined) return next;
			return false;
		}
		Ai_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.ai_text())]);
			return obj;
		}
		Ai_block(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_stats_ai_visible": (this.ai_visible())});
			(obj.sub) = () => ([(this.Ai_content())]);
			return obj;
		}
		Ai_section(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Ai_heading()), 
				(this.Ai_btn()), 
				(this.Ai_block())
			]);
			return obj;
		}
		Profile_card(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Profile_title()), 
				(this.Profile_table()), 
				(this.Inv_section()), 
				(this.Ai_section())
			]);
			return obj;
		}
		Stats_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.stats_title())]);
			return obj;
		}
		Stats_column(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Done_card()), 
				(this.Work_card()), 
				(this.Overdue_card()), 
				(this.Rejected_card())
			]);
			return obj;
		}
		Stats_side(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Stats_title()), (this.Stats_column())]);
			return obj;
		}
		Stats_layout(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Profile_card()), (this.Stats_side())]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		profile_title(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_profile_title"));
		}
		label_name(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_label_name"));
		}
		label_surname(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_label_surname"));
		}
		label_login(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_label_login"));
		}
		label_role(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_label_role"));
		}
		label_school(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_label_school"));
		}
		label_id(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_label_id"));
		}
		value_name(){
			return "—";
		}
		value_surname(){
			return "—";
		}
		value_login(){
			return "—";
		}
		value_role(){
			return "—";
		}
		value_school(){
			return "—";
		}
		value_id(){
			return "—";
		}
		invitations_title(){
			return "📬 Приглашения";
		}
		ai_title(){
			return "🤖 ИИ-наставник";
		}
		ai_button_label(){
			return "Получить советы";
		}
		stats_title(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_stats_title"));
		}
		done_title(){
			return "✅ Выполненные задания";
		}
		work_title(){
			return "⏳ Задания в работе";
		}
		overdue_title(){
			return "⚠️ Просроченные задания";
		}
		rejected_title(){
			return "❌ Отклонённые задания";
		}
		done_count(){
			return "0";
		}
		work_count(){
			return "0";
		}
		overdue_count(){
			return "0";
		}
		rejected_count(){
			return "0";
		}
		invitation_ids(){
			return [];
		}
		invitation_rows(){
			return [];
		}
		ai_text(next){
			if(next !== undefined) return next;
			return "";
		}
		Invitation_row(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_invitation();
			(obj.invitation_id) = (id) => ((this.invitation_id_value(id)));
			(obj.invitation_title) = () => ((this.invitation_title(id)));
			(obj.invitation_sub) = () => ((this.invitation_sub(id)));
			(obj.accept_click) = (next) => ((this.inv_accept(id, next)));
			(obj.reject_click) = (next) => ((this.inv_reject(id, next)));
			return obj;
		}
		Done_chart(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_chart();
			(obj.line_path) = () => ((this.done_line_path()));
			(obj.fill_path) = () => ((this.done_fill_path()));
			(obj.color) = () => ("#1aa843");
			return obj;
		}
		Work_chart(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_chart();
			(obj.line_path) = () => ((this.work_line_path()));
			(obj.fill_path) = () => ((this.work_fill_path()));
			(obj.color) = () => ("#111111");
			return obj;
		}
		Overdue_chart(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_chart();
			(obj.line_path) = () => ((this.overdue_line_path()));
			(obj.fill_path) = () => ((this.overdue_fill_path()));
			(obj.color) = () => ("#c0392b");
			return obj;
		}
		Rejected_chart(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_chart();
			(obj.line_path) = () => ((this.rejected_line_path()));
			(obj.fill_path) = () => ((this.rejected_fill_path()));
			(obj.color) = () => ("#e67e22");
			return obj;
		}
		Done_card(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_card();
			(obj.card_title) = () => ((this.done_title()));
			(obj.count) = () => ((this.done_count()));
			(obj.accent) = () => ("green");
			(obj.Chart) = () => ((this.Done_chart()));
			return obj;
		}
		Work_card(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_card();
			(obj.card_title) = () => ((this.work_title()));
			(obj.count) = () => ((this.work_count()));
			(obj.accent) = () => ("black");
			(obj.Chart) = () => ((this.Work_chart()));
			return obj;
		}
		Overdue_card(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_card();
			(obj.card_title) = () => ((this.overdue_title()));
			(obj.count) = () => ((this.overdue_count()));
			(obj.accent) = () => ("red");
			(obj.Chart) = () => ((this.Overdue_chart()));
			return obj;
		}
		Rejected_card(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats_card();
			(obj.card_title) = () => ((this.rejected_title()));
			(obj.count) = () => ((this.rejected_count()));
			(obj.accent) = () => ("orange");
			(obj.Chart) = () => ((this.Rejected_chart()));
			return obj;
		}
		sub(){
			return [(this.Stats_layout())];
		}
	};
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_stats.prototype), "inv_accept"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_stats.prototype), "inv_reject"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Profile_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "L_name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "V_name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "L_surname"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "V_surname"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "L_login"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "V_login"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "L_role"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "V_role"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "L_school"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "V_school"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "L_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "V_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Profile_table"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Inv_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Inv_list"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Inv_section"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Ai_heading"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "ai_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Ai_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "ai_visible"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Ai_content"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Ai_block"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Ai_section"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Profile_card"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Stats_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Stats_column"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Stats_side"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Stats_layout"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "api"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "ai_text"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Invitation_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Done_chart"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Work_chart"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Overdue_chart"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Rejected_chart"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Done_card"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Work_card"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Overdue_card"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats.prototype), "Rejected_card"));
	($.$bog_tracker_mpit_neolo_student_stats_card) = class $bog_tracker_mpit_neolo_student_stats_card extends ($.$mol_view) {
		accent(){
			return "green";
		}
		Card_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.card_title())]);
			return obj;
		}
		Big_number(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.count())]);
			return obj;
		}
		Chart_holder(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Chart())]);
			return obj;
		}
		Main(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Big_number()), (this.Chart_holder())]);
			return obj;
		}
		card_title(){
			return "";
		}
		count(){
			return "0";
		}
		Chart(){
			return null;
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_student_stats_card_accent": (this.accent())};
		}
		sub(){
			return [(this.Card_title()), (this.Main())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_card.prototype), "Card_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_card.prototype), "Big_number"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_card.prototype), "Chart_holder"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_card.prototype), "Main"));
	($.$bog_tracker_mpit_neolo_student_stats_invitation) = class $bog_tracker_mpit_neolo_student_stats_invitation extends ($.$mol_view) {
		Inv_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.invitation_title())]);
			return obj;
		}
		Inv_sub(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.invitation_sub())]);
			return obj;
		}
		accept_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Accept_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.accept_click(next)));
			(obj.sub) = () => ([(this.accept_label())]);
			return obj;
		}
		reject_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Reject_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.reject_click(next)));
			(obj.sub) = () => ([(this.reject_label())]);
			return obj;
		}
		Inv_actions(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Accept_btn()), (this.Reject_btn())]);
			return obj;
		}
		invitation_id(){
			return "";
		}
		invitation_title(){
			return "";
		}
		invitation_sub(){
			return "";
		}
		accept_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_invitation_accept_label"));
		}
		reject_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_stats_invitation_reject_label"));
		}
		sub(){
			return [
				(this.Inv_title()), 
				(this.Inv_sub()), 
				(this.Inv_actions())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_invitation.prototype), "Inv_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_invitation.prototype), "Inv_sub"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_invitation.prototype), "accept_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_invitation.prototype), "Accept_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_invitation.prototype), "reject_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_invitation.prototype), "Reject_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_invitation.prototype), "Inv_actions"));
	($.$bog_tracker_mpit_neolo_student_stats_chart) = class $bog_tracker_mpit_neolo_student_stats_chart extends ($.$mol_svg_root) {
		color(){
			return "#1aa843";
		}
		Fill(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.fill_path()));
			return obj;
		}
		Line(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.line_path()));
			return obj;
		}
		view_box(){
			return "0 0 400 90";
		}
		aspect(){
			return "none";
		}
		line_path(){
			return "";
		}
		fill_path(){
			return "";
		}
		style(){
			return {"fill": (this.color())};
		}
		sub(){
			return [(this.Fill()), (this.Line())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_chart.prototype), "Fill"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_stats_chart.prototype), "Line"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const t = $bog_tracker_mpit_neolo_tokens;
        $mol_style_define($bog_tracker_mpit_neolo_student_stats, {
            display: 'flex',
            flex: { direction: 'column' },
            minHeight: '100%',
            borderRadius: '22px',
            padding: { top: '22px', bottom: '22px', left: '24px', right: '24px' },
            overflow: { x: 'hidden', y: 'auto' },
            background: { color: t.g6 },
            color: t.g0,
            Stats_layout: {
                display: 'grid',
                gridTemplateColumns: 'minmax(240px, .8fr) minmax(0, 1.2fr)',
                gap: '28px',
            },
            Profile_card: {
                display: 'flex',
                flex: { direction: 'column' },
                padding: { right: '18px' },
                border: { width: '1px', style: 'solid', color: 'transparent' },
                gap: '12px',
            },
            Profile_title: {
                font: { size: '22px', weight: 800 },
                color: t.g4,
                margin: { bottom: '16px' },
            },
            Profile_table: {
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '22px',
                font: { size: '16px' },
            },
            L_name: { color: '#ffffff99' },
            L_surname: { color: '#ffffff99' },
            L_login: { color: '#ffffff99' },
            L_role: { color: '#ffffff99' },
            L_school: { color: '#ffffff99' },
            L_id: { color: '#ffffff99' },
            V_name: { color: t.g0, font: { weight: 600 } },
            V_surname: { color: t.g0, font: { weight: 600 } },
            V_login: { color: t.g0, font: { weight: 600 } },
            V_role: { color: t.g0, font: { weight: 600 } },
            V_school: { color: t.g0, font: { weight: 600 } },
            V_id: { color: t.g0, font: { weight: 600 } },
            Inv_section: {
                display: 'flex',
                flex: { direction: 'column' },
                margin: { top: '20px' },
                gap: '10px',
            },
            Inv_title: {
                font: { size: '17px', weight: 800 },
                color: t.g4,
                margin: { bottom: '10px' },
            },
            Inv_list: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '10px',
            },
            Ai_section: {
                display: 'flex',
                flex: { direction: 'column' },
                margin: { top: '24px' },
                gap: '10px',
            },
            Ai_heading: {
                font: { size: '17px', weight: 800 },
                color: t.g4,
                margin: { bottom: '10px' },
            },
            Ai_btn: {
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                gap: '8px',
                minWidth: '100%',
                padding: { top: '12px', bottom: '12px', left: '16px', right: '16px' },
                borderRadius: '13px',
                background: { color: t.g5 },
                color: t.g0,
                font: { size: '14px', weight: 800 },
            },
            Ai_block: {
                margin: { top: '14px' },
                background: { color: '#ffffff1a' },
                border: { width: '1px', style: 'solid', color: '#ffffff33' },
                borderRadius: '14px',
                padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
                maxHeight: '240px',
                overflow: { y: 'auto' },
            },
            Ai_content: {
                font: { size: '14px' },
                color: t.g0,
                whiteSpace: 'pre-wrap',
            },
            Stats_side: {
                display: 'flex',
                flex: { direction: 'column' },
            },
            Stats_title: {
                font: { size: '22px', weight: 800 },
                color: t.g4,
                margin: { bottom: '16px' },
            },
            Stats_column: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '14px',
            },
            '@': {
                bog_tracker_mpit_neolo_student_stats_ai_visible: {
                    true: { display: 'flex' },
                    false: { display: 'none' },
                },
            },
        });
        $mol_style_define($bog_tracker_mpit_neolo_student_stats_card, {
            display: 'flex',
            flex: { direction: 'column' },
            padding: { top: '16px', bottom: '16px', left: '18px', right: '18px' },
            color: t.b0,
            borderRadius: '16px',
            position: 'relative',
            overflow: { x: 'hidden', y: 'hidden' },
            background: { color: t.g0 },
            borderLeft: '4px solid #2ecc5a',
            '@': {
                bog_tracker_mpit_neolo_student_stats_card_accent: {
                    green: { borderLeft: '4px solid #1aa843' },
                    black: { borderLeft: '4px solid #111111' },
                    red: { borderLeft: '4px solid #c0392b' },
                    orange: { borderLeft: '4px solid #e67e22' },
                },
            },
        });
        $mol_style_define($bog_tracker_mpit_neolo_student_stats_invitation, {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '8px',
            padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
            background: { color: '#ffffff1a' },
            border: { width: '1px', style: 'solid', color: '#ffffff33' },
            borderRadius: '14px',
            Inv_title: {
                font: { size: '15px', weight: 800 },
                color: t.g0,
            },
            Inv_sub: {
                font: { size: '13px' },
                color: '#ffffffb3',
            },
            Inv_actions: {
                display: 'flex',
                gap: '8px',
            },
            Accept_btn: {
                padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
                borderRadius: '9px',
                background: { color: t.g4 },
                color: t.b0,
                font: { size: '13px', weight: 800 },
            },
            Reject_btn: {
                padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
                borderRadius: '9px',
                background: { color: '#ffffff26' },
                color: '#ffffffcc',
                font: { size: '13px', weight: 700 },
            },
        });
        $mol_style_define($bog_tracker_mpit_neolo_student_stats_chart, {
            display: 'block',
            minWidth: '100%',
            minHeight: '90px',
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const ROLE_LABELS = {
            student: 'Ученик',
            teacher: 'Учитель',
            parent: 'Родитель',
        };
        function task_status(task) {
            const st = task.status()?.val() ?? 'pending';
            if (st === 'done' || st === 'rejected' || st === 'review' || st === 'progress')
                return st;
            const today = new Date().toISOString().slice(0, 10);
            const date = task.date()?.val() ?? '';
            if (date && date < today)
                return 'overdue';
            return st;
        }
        function build_cum(tasks, predicate) {
            const now = new Date();
            const y = now.getFullYear();
            const mo = now.getMonth();
            const td = now.getDate();
            const dim = new Date(y, mo + 1, 0).getDate();
            const per_day = new Array(dim + 1).fill(0);
            for (const t of tasks) {
                const raw = t.date()?.val() ?? '';
                if (!raw)
                    continue;
                const d = new Date(raw + 'T12:00:00');
                if (d.getFullYear() === y && d.getMonth() === mo && predicate(t)) {
                    per_day[d.getDate()] += 1;
                }
            }
            const pts = [];
            let cum = 0;
            for (let d = 1; d <= td; d++) {
                cum += per_day[d];
                pts.push({ day: d, value: cum });
            }
            return pts;
        }
        function build_paths(points) {
            if (points.length === 0)
                return { line: '', fill: '' };
            const W = 400, H = 90, padL = 10, padR = 10, padT = 12, padB = 18;
            const innerW = W - padL - padR;
            const innerH = H - padT - padB;
            const baseline = padT + innerH;
            const has_data = points.some(p => p.value > 0);
            if (!has_data)
                return { line: '', fill: '' };
            const n = points.length;
            const max_val = Math.max(...points.map(p => p.value), 1);
            const sx = (i) => padL + i / Math.max(n - 1, 1) * innerW;
            const sy = (v) => baseline - Math.max(0, Math.min(1, v / max_val)) * innerH;
            const px = points.map((_, i) => sx(i));
            const py = points.map(p => sy(p.value));
            const m = new Array(n).fill(0);
            const delta = [];
            for (let i = 0; i < n - 1; i++)
                delta.push((py[i + 1] - py[i]) / (px[i + 1] - px[i]));
            if (n >= 2) {
                m[0] = delta[0];
                for (let i = 1; i < n - 1; i++)
                    m[i] = (delta[i - 1] + delta[i]) / 2;
                m[n - 1] = delta[n - 2];
            }
            for (let i = 0; i < n - 1; i++) {
                if (Math.abs(delta[i]) < 1e-10) {
                    m[i] = 0;
                    m[i + 1] = 0;
                    continue;
                }
                const a = m[i] / delta[i], b = m[i + 1] / delta[i];
                const h = Math.sqrt(a * a + b * b);
                if (h > 3) {
                    m[i] = 3 * a / h * delta[i];
                    m[i + 1] = 3 * b / h * delta[i];
                }
            }
            let line = `M${px[0].toFixed(2)},${py[0].toFixed(2)}`;
            for (let i = 0; i < n - 1; i++) {
                const dx = (px[i + 1] - px[i]) / 3;
                const cp1x = px[i] + dx, cp1y = py[i] + m[i] * dx;
                const cp2x = px[i + 1] - dx, cp2y = py[i + 1] - m[i + 1] * dx;
                line += ` C${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${px[i + 1].toFixed(2)},${py[i + 1].toFixed(2)}`;
            }
            const fill = `${line} L${px[n - 1].toFixed(2)},${baseline} L${px[0].toFixed(2)},${baseline} Z`;
            return { line, fill };
        }
        class $bog_tracker_mpit_neolo_student_stats extends $.$bog_tracker_mpit_neolo_student_stats {
            profile() {
                return this.store().profile();
            }
            value_name() {
                return this.profile()?.name()?.val() ?? '—';
            }
            value_surname() {
                return this.profile()?.surname()?.val() ?? '—';
            }
            value_login() {
                return this.profile()?.username()?.val() ?? '—';
            }
            value_role() {
                const r = this.profile()?.role()?.val() ?? '';
                return ROLE_LABELS[r] ?? r ?? '—';
            }
            value_school() {
                return this.profile()?.school()?.val() ?? '—';
            }
            value_id() {
                const v = this.profile()?.user_id()?.val();
                return v == null ? '—' : String(v);
            }
            tasks_all() {
                return this.store().tasks_all();
            }
            done_tasks() {
                return this.tasks_all().filter(t => task_status(t) === 'done');
            }
            work_tasks() {
                return this.tasks_all().filter(t => {
                    const s = task_status(t);
                    return s !== 'done' && s !== 'rejected' && s !== 'overdue';
                });
            }
            overdue_tasks() {
                return this.tasks_all().filter(t => task_status(t) === 'overdue');
            }
            rejected_tasks() {
                return this.tasks_all().filter(t => {
                    const s = task_status(t);
                    return s === 'rejected' || (t.status()?.val() ?? '') === 'rejected';
                });
            }
            done_count() { return String(this.done_tasks().length); }
            work_count() { return String(this.work_tasks().length); }
            overdue_count() { return String(this.overdue_tasks().length); }
            rejected_count() { return String(this.rejected_tasks().length); }
            done_paths() {
                return build_paths(build_cum(this.tasks_all(), t => task_status(t) === 'done'));
            }
            work_paths() {
                return build_paths(build_cum(this.tasks_all(), t => {
                    const s = task_status(t);
                    return s !== 'done' && s !== 'rejected' && s !== 'overdue';
                }));
            }
            overdue_paths() {
                return build_paths(build_cum(this.tasks_all(), t => task_status(t) === 'overdue'));
            }
            rejected_paths() {
                return build_paths(build_cum(this.tasks_all(), t => {
                    const s = task_status(t);
                    return s === 'rejected' || (t.status()?.val() ?? '') === 'rejected';
                }));
            }
            done_line_path() { return this.done_paths().line; }
            done_fill_path() { return this.done_paths().fill; }
            work_line_path() { return this.work_paths().line; }
            work_fill_path() { return this.work_paths().fill; }
            overdue_line_path() { return this.overdue_paths().line; }
            overdue_fill_path() { return this.overdue_paths().fill; }
            rejected_line_path() { return this.rejected_paths().line; }
            rejected_fill_path() { return this.rejected_paths().fill; }
            invitations_pending() {
                return this.store().invitations_all().filter(inv => (inv.status()?.val() ?? 'pending') === 'pending');
            }
            invitation_ids() {
                return this.invitations_pending().map(inv => inv.link().str);
            }
            invitation_by_id(id) {
                return this.store().invitations_all().find(inv => inv.link().str === id) ?? null;
            }
            invitation_id_value(id) { return id; }
            invitation_title(id) {
                const inv = this.invitation_by_id(id);
                if (!inv)
                    return '';
                const cls = inv.class_name()?.val() ?? '';
                return `Приглашение в класс «${cls}»`;
            }
            invitation_sub(id) {
                const inv = this.invitation_by_id(id);
                if (!inv)
                    return '';
                return `От: ${inv.from_teacher_name()?.val() ?? '—'}`;
            }
            invitation_rows() {
                return this.invitation_ids().map(id => this.Invitation_row(id));
            }
            inv_accept(id, next) {
                if (next !== undefined) {
                    const inv = this.invitation_by_id(id);
                    if (inv)
                        inv.status(null).val('accepted');
                }
                return null;
            }
            inv_reject(id, next) {
                if (next !== undefined) {
                    const inv = this.invitation_by_id(id);
                    if (inv)
                        inv.status(null).val('rejected');
                }
                return null;
            }
            ai_text(next) {
                return super.ai_text(next) ?? '';
            }
            ai_visible(next) {
                return super.ai_visible(next) ?? false;
            }
            ai_click(next) {
                if (next === undefined)
                    return null;
                this.ai_visible(true);
                this.ai_text('✨ Генерирую советы...');
                const overdue = this.overdue_tasks().map(t => ({
                    title: t.title()?.val() ?? '',
                    desc: t.desc()?.val() ?? '',
                    date: t.date()?.val() ?? '',
                }));
                const rejected = this.rejected_tasks().map(t => ({
                    title: t.title()?.val() ?? '',
                    desc: t.desc()?.val() ?? '',
                    date: t.date()?.val() ?? '',
                }));
                const payload = {
                    overdue,
                    rejected,
                    done_count: this.done_tasks().length,
                    total_count: this.tasks_all().length,
                };
                let acc = '';
                this.api().stats_advice(payload, (token) => {
                    acc += token;
                    this.ai_text(acc);
                }).then(res => {
                    if (!res.ok)
                        this.ai_text(`Ошибка: ${res.error ?? 'неизвестно'}`);
                    else if (!acc)
                        this.ai_text('Нет ответа от модели');
                });
                return null;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "profile", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "value_name", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "value_surname", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "value_login", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "value_role", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "value_school", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "value_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "tasks_all", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "done_tasks", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "work_tasks", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "overdue_tasks", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "rejected_tasks", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "done_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "work_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "overdue_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "rejected_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "done_paths", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "work_paths", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "overdue_paths", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "rejected_paths", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "done_line_path", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "done_fill_path", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "work_line_path", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "work_fill_path", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "overdue_line_path", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "overdue_fill_path", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "rejected_line_path", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "rejected_fill_path", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "invitations_pending", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "invitation_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "invitation_by_id", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "invitation_id_value", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "invitation_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "invitation_sub", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "invitation_rows", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "inv_accept", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "inv_reject", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "ai_text", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "ai_visible", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_stats.prototype, "ai_click", null);
        $$.$bog_tracker_mpit_neolo_student_stats = $bog_tracker_mpit_neolo_student_stats;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_student_sidebar) = class $bog_tracker_mpit_neolo_student_sidebar extends ($.$mol_view) {
		is_calendar(){
			return false;
		}
		pick_calendar(next){
			if(next !== undefined) return next;
			return null;
		}
		calendar_circle(){
			return "bk";
		}
		Circle_calendar(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_sidebar_circle": (this.calendar_circle())});
			(obj.sub) = () => ([(this.calendar_icon())]);
			return obj;
		}
		Label_calendar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.calendar_label())]);
			return obj;
		}
		Item_calendar(){
			const obj = new this.$.$mol_button_minor();
			(obj.attr) = () => ({...(this.$.$mol_button_minor.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_sidebar_active": (this.is_calendar())});
			(obj.click) = (next) => ((this.pick_calendar(next)));
			(obj.sub) = () => ([(this.Circle_calendar()), (this.Label_calendar())]);
			return obj;
		}
		is_tasks(){
			return false;
		}
		pick_tasks(next){
			if(next !== undefined) return next;
			return null;
		}
		tasks_circle(){
			return "g";
		}
		Circle_tasks(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_sidebar_circle": (this.tasks_circle())});
			(obj.sub) = () => ([(this.tasks_icon())]);
			return obj;
		}
		Label_tasks(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.tasks_label())]);
			return obj;
		}
		Item_tasks(){
			const obj = new this.$.$mol_button_minor();
			(obj.attr) = () => ({...(this.$.$mol_button_minor.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_sidebar_active": (this.is_tasks())});
			(obj.click) = (next) => ((this.pick_tasks(next)));
			(obj.sub) = () => ([(this.Circle_tasks()), (this.Label_tasks())]);
			return obj;
		}
		is_stats(){
			return false;
		}
		pick_stats(next){
			if(next !== undefined) return next;
			return null;
		}
		cabinet_circle(){
			return "dg";
		}
		Circle_cabinet(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_sidebar_circle": (this.cabinet_circle())});
			(obj.sub) = () => ([(this.cabinet_icon())]);
			return obj;
		}
		Label_cabinet(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.cabinet_label())]);
			return obj;
		}
		has_invitations(){
			return false;
		}
		Badge(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_sidebar_badge_visible": (this.has_invitations())});
			(obj.sub) = () => (["!"]);
			return obj;
		}
		Item_cabinet(){
			const obj = new this.$.$mol_button_minor();
			(obj.attr) = () => ({...(this.$.$mol_button_minor.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_sidebar_active": (this.is_stats())});
			(obj.click) = (next) => ((this.pick_stats(next)));
			(obj.sub) = () => ([
				(this.Circle_cabinet()), 
				(this.Label_cabinet()), 
				(this.Badge())
			]);
			return obj;
		}
		Stack(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Item_calendar()), 
				(this.Item_tasks()), 
				(this.Item_cabinet())
			]);
			return obj;
		}
		open_about(next){
			if(next !== undefined) return next;
			return null;
		}
		About_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.open_about(next)));
			(obj.sub) = () => ([(this.about_label())]);
			return obj;
		}
		open_terms(next){
			if(next !== undefined) return next;
			return null;
		}
		Terms_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.open_terms(next)));
			(obj.sub) = () => ([(this.terms_label())]);
			return obj;
		}
		Footer(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.About_btn()), (this.Terms_btn())]);
			return obj;
		}
		screen(next){
			if(next !== undefined) return next;
			return "tasks";
		}
		invitations_count(){
			return 0;
		}
		about_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_sidebar_about_label"));
		}
		terms_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_sidebar_terms_label"));
		}
		calendar_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_sidebar_calendar_label"));
		}
		tasks_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_sidebar_tasks_label"));
		}
		cabinet_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_sidebar_cabinet_label"));
		}
		calendar_icon(){
			return "🗓";
		}
		tasks_icon(){
			return "📋";
		}
		cabinet_icon(){
			return "👤";
		}
		sub(){
			return [(this.Stack()), (this.Footer())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "pick_calendar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Circle_calendar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Label_calendar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Item_calendar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "pick_tasks"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Circle_tasks"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Label_tasks"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Item_tasks"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "pick_stats"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Circle_cabinet"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Label_cabinet"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Item_cabinet"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Stack"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "open_about"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "About_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "open_terms"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Terms_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "Footer"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student_sidebar.prototype), "screen"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_student_sidebar extends $.$bog_tracker_mpit_neolo_student_sidebar {
            screen(next) {
                return super.screen(next) ?? 'tasks';
            }
            is_tasks() { return this.screen() === 'tasks'; }
            is_calendar() { return this.screen() === 'calendar'; }
            is_stats() { return this.screen() === 'stats'; }
            has_invitations() {
                return this.invitations_count() > 0;
            }
            pick_tasks(next) {
                if (next !== undefined)
                    this.screen('tasks');
                return null;
            }
            pick_calendar(next) {
                if (next !== undefined)
                    this.screen('calendar');
                return null;
            }
            pick_stats(next) {
                if (next !== undefined)
                    this.screen('stats');
                return null;
            }
            open_about(next) { return null; }
            open_terms(next) { return null; }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "screen", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "is_tasks", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "is_calendar", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "is_stats", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "has_invitations", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "pick_tasks", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "pick_calendar", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "pick_stats", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "open_about", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student_sidebar.prototype, "open_terms", null);
        $$.$bog_tracker_mpit_neolo_student_sidebar = $bog_tracker_mpit_neolo_student_sidebar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const t = $bog_tracker_mpit_neolo_tokens;
        $mol_style_define($bog_tracker_mpit_neolo_student_sidebar, {
            display: 'flex',
            flex: { direction: 'column' },
            justify: { content: 'space-between' },
            align: { items: 'center' },
            background: { color: t.g2 },
            borderRadius: '22px',
            padding: { top: '18px', bottom: '18px', left: '12px', right: '12px' },
            Stack: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '16px',
                minWidth: '100%',
            },
            Footer: {
                display: 'flex',
                flex: { direction: 'column' },
                gap: '6px',
                minWidth: '100%',
                padding: { left: '4px', right: '4px' },
            },
            Item_calendar: {
                position: 'relative',
                display: 'flex',
                flex: { direction: 'column' },
                align: { items: 'center' },
                gap: '8px',
                padding: { top: '8px', bottom: '8px', left: '4px', right: '4px' },
                background: { color: 'transparent' },
                borderRadius: '16px',
            },
            Item_tasks: {
                position: 'relative',
                display: 'flex',
                flex: { direction: 'column' },
                align: { items: 'center' },
                gap: '8px',
                padding: { top: '8px', bottom: '8px', left: '4px', right: '4px' },
                background: { color: 'transparent' },
                borderRadius: '16px',
            },
            Item_cabinet: {
                position: 'relative',
                display: 'flex',
                flex: { direction: 'column' },
                align: { items: 'center' },
                gap: '8px',
                padding: { top: '8px', bottom: '8px', left: '4px', right: '4px' },
                background: { color: 'transparent' },
                borderRadius: '16px',
            },
            Circle_calendar: {
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                minWidth: '64px',
                minHeight: '64px',
                borderRadius: '999px',
                font: { size: '28px' },
                background: { color: t.b0 },
                color: t.g0,
            },
            Circle_tasks: {
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                minWidth: '64px',
                minHeight: '64px',
                borderRadius: '999px',
                font: { size: '28px' },
                background: { color: t.g4 },
                color: t.b0,
            },
            Circle_cabinet: {
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                minWidth: '64px',
                minHeight: '64px',
                borderRadius: '999px',
                font: { size: '28px' },
                background: { color: t.g6 },
                color: t.g0,
            },
            Label_calendar: {
                font: { size: '13px', weight: 700 },
                textAlign: 'center',
                color: t.b1,
            },
            Label_tasks: {
                font: { size: '13px', weight: 700 },
                textAlign: 'center',
                color: t.b1,
            },
            Label_cabinet: {
                font: { size: '13px', weight: 700 },
                textAlign: 'center',
                color: t.b1,
            },
            Badge: {
                position: 'absolute',
                top: '4px',
                right: '8px',
                minWidth: '20px',
                minHeight: '20px',
                borderRadius: '999px',
                background: { color: '#e74c3c' },
                color: t.g0,
                font: { size: '11px', weight: 800 },
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'center' },
                padding: { left: '4px', right: '4px' },
            },
            About_btn: {
                display: 'flex',
                justify: { content: 'center' },
                minWidth: '100%',
                background: { color: 'transparent' },
                padding: { top: '8px', bottom: '8px', left: '6px', right: '6px' },
                borderRadius: '10px',
                font: { size: '11px', weight: 700 },
                color: t.b2,
                textAlign: 'center',
            },
            Terms_btn: {
                display: 'flex',
                justify: { content: 'center' },
                minWidth: '100%',
                background: { color: 'transparent' },
                padding: { top: '8px', bottom: '8px', left: '6px', right: '6px' },
                borderRadius: '10px',
                font: { size: '11px', weight: 700 },
                color: t.b2,
                textAlign: 'center',
            },
            '@': {
                bog_tracker_mpit_neolo_student_sidebar_active: {
                    true: {
                        background: { color: '#ffffff99' },
                    },
                },
                bog_tracker_mpit_neolo_student_sidebar_badge_visible: {
                    true: { display: 'flex' },
                    false: { display: 'none' },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_student) = class $bog_tracker_mpit_neolo_student extends ($.$mol_view) {
		Brand_accent(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.brand_accent())]);
			return obj;
		}
		Brand(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.brand_plain()), (this.Brand_accent())]);
			return obj;
		}
		logout(next){
			if(next !== undefined) return next;
			return null;
		}
		Logout_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.logout_icon())]);
			return obj;
		}
		Logout_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.logout_label())]);
			return obj;
		}
		Logout_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.logout(next)));
			(obj.sub) = () => ([(this.Logout_icon()), (this.Logout_text())]);
			return obj;
		}
		Topbar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Brand()), (this.Logout_btn())]);
			return obj;
		}
		is_tasks(){
			return false;
		}
		open_task(id, next){
			if(next !== undefined) return next;
			return null;
		}
		add_task_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Tasks_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_tasks();
			(obj.attr) = () => ({...(this.$.$bog_tracker_mpit_neolo_student_tasks.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_screen_visible": (this.is_tasks())});
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			(obj.open_task) = (id, next) => ((this.open_task(id, next)));
			(obj.add_task_click) = (next) => ((this.add_task_click(next)));
			return obj;
		}
		is_calendar(){
			return false;
		}
		view_month(next){
			if(next !== undefined) return next;
			return 0;
		}
		view_year(next){
			if(next !== undefined) return next;
			return 0;
		}
		selected_date(next){
			if(next !== undefined) return next;
			return "";
		}
		prev_month(next){
			if(next !== undefined) return next;
			return null;
		}
		next_month(next){
			if(next !== undefined) return next;
			return null;
		}
		create_click(next){
			if(next !== undefined) return next;
			return null;
		}
		select_day(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Calendar_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_calendar();
			(obj.attr) = () => ({...(this.$.$bog_tracker_mpit_neolo_student_calendar.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_screen_visible": (this.is_calendar())});
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			(obj.view_month) = (next) => ((this.view_month(next)));
			(obj.view_year) = (next) => ((this.view_year(next)));
			(obj.selected_date) = (next) => ((this.selected_date(next)));
			(obj.prev_month) = (next) => ((this.prev_month(next)));
			(obj.next_month) = (next) => ((this.next_month(next)));
			(obj.create_click) = (next) => ((this.create_click(next)));
			(obj.select_day) = (id, next) => ((this.select_day(id, next)));
			(obj.open_task) = (id, next) => ((this.open_task(id, next)));
			return obj;
		}
		is_stats(){
			return false;
		}
		Stats_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_stats();
			(obj.attr) = () => ({...(this.$.$bog_tracker_mpit_neolo_student_stats.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_student_screen_visible": (this.is_stats())});
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			return obj;
		}
		Main_area(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Tasks_screen()), 
				(this.Calendar_screen()), 
				(this.Stats_screen())
			]);
			return obj;
		}
		screen(next){
			if(next !== undefined) return next;
			return "tasks";
		}
		invitations_count(){
			return 0;
		}
		open_about(next){
			if(next !== undefined) return next;
			return null;
		}
		open_terms(next){
			if(next !== undefined) return next;
			return null;
		}
		Sidebar(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student_sidebar();
			(obj.screen) = (next) => ((this.screen(next)));
			(obj.invitations_count) = () => ((this.invitations_count()));
			(obj.open_about) = (next) => ((this.open_about(next)));
			(obj.open_terms) = (next) => ((this.open_terms(next)));
			return obj;
		}
		Layout(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Main_area()), (this.Sidebar())]);
			return obj;
		}
		Shell(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Topbar()), (this.Layout())]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		brand_plain(){
			return "School";
		}
		brand_accent(){
			return "Plan";
		}
		logout_label(){
			return (this.$.$mol_locale.text("$bog_tracker_mpit_neolo_student_logout_label"));
		}
		logout_icon(){
			return "↪";
		}
		sub(){
			return [(this.Shell())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Brand_accent"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Brand"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "logout"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Logout_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Logout_text"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Logout_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Topbar"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student.prototype), "open_task"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "add_task_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Tasks_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "view_month"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "view_year"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "selected_date"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "prev_month"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "next_month"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "create_click"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_student.prototype), "select_day"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Calendar_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Stats_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Main_area"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "open_about"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "open_terms"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Sidebar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Layout"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "Shell"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_student.prototype), "api"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_student extends $.$bog_tracker_mpit_neolo_student {
            screen(next) {
                return super.screen(next) ?? 'tasks';
            }
            is_tasks() {
                return this.screen() === 'tasks';
            }
            is_calendar() {
                return this.screen() === 'calendar';
            }
            is_stats() {
                return this.screen() === 'stats';
            }
            selected_date(next) {
                const cur = super.selected_date(next);
                if (cur)
                    return cur;
                return new Date().toISOString().slice(0, 10);
            }
            view_month(next) {
                const cur = super.view_month(next);
                if (cur !== undefined && cur !== null)
                    return cur;
                return new Date().getMonth();
            }
            view_year(next) {
                const cur = super.view_year(next);
                if (cur !== undefined && cur !== null && cur > 0)
                    return cur;
                return new Date().getFullYear();
            }
            invitations_count() {
                const invs = this.store().invitations_all();
                let count = 0;
                for (const inv of invs) {
                    const s = inv.status()?.val() ?? 'pending';
                    if (s === 'pending')
                        count++;
                }
                return count;
            }
            logout(next) {
                if (next !== undefined) {
                }
                return null;
            }
            add_task_click(next) {
                if (next !== undefined) {
                    this.screen('calendar');
                    this.create_click({});
                }
                return null;
            }
            prev_month(next) {
                if (next !== undefined) {
                    let m = this.view_month() - 1;
                    let y = this.view_year();
                    if (m < 0) {
                        m = 11;
                        y -= 1;
                    }
                    this.view_month(m);
                    this.view_year(y);
                }
                return null;
            }
            next_month(next) {
                if (next !== undefined) {
                    let m = this.view_month() + 1;
                    let y = this.view_year();
                    if (m > 11) {
                        m = 0;
                        y += 1;
                    }
                    this.view_month(m);
                    this.view_year(y);
                }
                return null;
            }
            create_click(next) {
                return null;
            }
            open_task(id, next) {
                return null;
            }
            open_about(next) {
                return null;
            }
            open_terms(next) {
                return null;
            }
            select_day(id, next) {
                if (next !== undefined) {
                    this.selected_date(id);
                }
                return null;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student.prototype, "screen", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student.prototype, "is_tasks", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student.prototype, "is_calendar", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student.prototype, "is_stats", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student.prototype, "selected_date", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student.prototype, "view_month", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student.prototype, "view_year", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_student.prototype, "invitations_count", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "logout", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "add_task_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "prev_month", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "next_month", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "create_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "open_task", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "open_about", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "open_terms", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_student.prototype, "select_day", null);
        $$.$bog_tracker_mpit_neolo_student = $bog_tracker_mpit_neolo_student;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const t = $bog_tracker_mpit_neolo_tokens;
        $mol_style_define($bog_tracker_mpit_neolo_student, {
            display: 'block',
            minWidth: '100%',
            minHeight: '100vh',
            padding: '12px',
            background: { color: t.g1 },
            color: t.b0,
            Shell: {
                display: 'flex',
                flex: { direction: 'column' },
                minHeight: '100vh',
                background: { color: t.g0 },
                borderRadius: '28px',
                box: {
                    shadow: [{ x: 0, y: '16px', blur: '34px', spread: 0, color: '#00280a1a' }],
                },
                padding: '14px',
                gap: '12px',
            },
            Topbar: {
                display: 'flex',
                align: { items: 'center' },
                justify: { content: 'space-between' },
                gap: '16px',
                padding: { left: '6px', right: '6px' },
            },
            Brand: {
                display: 'inline-flex',
                font: { size: '24px', weight: 800 },
                color: t.b0,
            },
            Brand_accent: {
                display: 'inline-flex',
                color: t.g5,
                font: { style: 'normal' },
            },
            Logout_btn: {
                display: 'inline-flex',
                align: { items: 'center' },
                gap: '10px',
                background: { color: t.b0 },
                color: t.g0,
                padding: { top: '11px', bottom: '11px', left: '18px', right: '18px' },
                borderRadius: '12px',
                font: { weight: 700 },
                ':hover': {
                    background: { color: t.b1 },
                },
            },
            Layout: {
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) 132px',
                gap: '12px',
                minHeight: '100vh',
            },
            Main_area: {
                display: 'block',
                minWidth: 0,
                minHeight: '100%',
            },
            '@': {
                bog_tracker_mpit_neolo_student_screen_visible: {
                    true: { display: 'flex' },
                    false: { display: 'none' },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_teacher_classes) = class $bog_tracker_mpit_neolo_teacher_classes extends ($.$mol_view) {
		class_name(id){
			return "";
		}
		class_subject(id){
			return "";
		}
		class_count_text(id){
			return "";
		}
		class_id_tail(id){
			return "";
		}
		open_class_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Count_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.classes_count_text())]);
			return obj;
		}
		create_class_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Create_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.create_class_click(next)));
			(obj.sub) = () => (["+ Создать класс"]);
			return obj;
		}
		Header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Count_label()), (this.Create_btn())]);
			return obj;
		}
		Grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.grid_sub()));
			return obj;
		}
		Empty_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["🏫"]);
			return obj;
		}
		Empty_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Классов пока нет"]);
			return obj;
		}
		Empty_sub(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Создайте первый класс"]);
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Empty_icon()), 
				(this.Empty_text()), 
				(this.Empty_sub())
			]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		teacher_classes(){
			return [];
		}
		classes_count(){
			return 0;
		}
		classes_count_text(){
			return "";
		}
		empty_visible(){
			return true;
		}
		class_ids(){
			return [];
		}
		grid_sub(){
			return [];
		}
		Card(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_classes_card();
			(obj.name) = () => ((this.class_name(id)));
			(obj.subject) = () => ((this.class_subject(id)));
			(obj.count_text) = () => ((this.class_count_text(id)));
			(obj.id_tail) = () => ((this.class_id_tail(id)));
			(obj.click) = (next) => ((this.open_class_click(id, next)));
			return obj;
		}
		sub(){
			return [
				(this.Header()), 
				(this.Grid()), 
				(this.Empty())
			];
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_classes_empty": (this.empty_visible())};
		}
	};
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "open_class_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Count_label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "create_class_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Create_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Header"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Grid"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Empty_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Empty_text"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Empty_sub"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Empty"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "store"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher_classes.prototype), "Card"));
	($.$bog_tracker_mpit_neolo_teacher_classes_card) = class $bog_tracker_mpit_neolo_teacher_classes_card extends ($.$mol_button_minor) {
		Icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["🏫"]);
			return obj;
		}
		Name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.name())]);
			return obj;
		}
		Subject(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.subject())]);
			return obj;
		}
		Count_badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.count_text())]);
			return obj;
		}
		Id_badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.id_tail())]);
			return obj;
		}
		Meta(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Count_badge()), (this.Id_badge())]);
			return obj;
		}
		name(){
			return "";
		}
		subject(){
			return "";
		}
		count_text(){
			return "";
		}
		id_tail(){
			return "";
		}
		attr(){
			return {...(super.attr())};
		}
		sub(){
			return [
				(this.Icon()), 
				(this.Name()), 
				(this.Subject()), 
				(this.Meta())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes_card.prototype), "Icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes_card.prototype), "Name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes_card.prototype), "Subject"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes_card.prototype), "Count_badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes_card.prototype), "Id_badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_classes_card.prototype), "Meta"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_teacher_classes extends $.$bog_tracker_mpit_neolo_teacher_classes {
            teacher_classes() {
                return [];
            }
            classes_count() {
                return this.teacher_classes().length;
            }
            classes_count_text() {
                return `${this.classes_count()} кл.`;
            }
            empty_visible() {
                return this.classes_count() === 0;
            }
            class_ids() {
                return this.teacher_classes().map(c => c.link().toString());
            }
            class_by_id(id) {
                for (const c of this.teacher_classes()) {
                    if (c.link().toString() === id)
                        return c;
                }
                return null;
            }
            class_name(id) {
                return this.class_by_id(id)?.name()?.val() ?? '';
            }
            class_subject(id) {
                const c = this.class_by_id(id);
                const s = c?.subject()?.val() ?? '';
                return s || 'Без предмета';
            }
            class_count_text(id) {
                const c = this.class_by_id(id);
                const n = c?.student_ids()?.items().length ?? 0;
                return `👥 ${n} уч.`;
            }
            class_id_tail(id) {
                return 'ID: ' + id.slice(-6);
            }
            grid_sub() {
                const ids = this.class_ids();
                return ids.map(id => this.Card(id));
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "classes_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "classes_count_text", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "empty_visible", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "class_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "class_name", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "class_subject", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "class_count_text", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "class_id_tail", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_classes.prototype, "grid_sub", null);
        $$.$bog_tracker_mpit_neolo_teacher_classes = $bog_tracker_mpit_neolo_teacher_classes;
        class $bog_tracker_mpit_neolo_teacher_classes_card extends $.$bog_tracker_mpit_neolo_teacher_classes_card {
        }
        $$.$bog_tracker_mpit_neolo_teacher_classes_card = $bog_tracker_mpit_neolo_teacher_classes_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_teacher_classes, {
        display: 'flex',
        flex: { direction: 'column' },
        gap: '16px',
        Header: {
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'space-between' },
            gap: '10px',
        },
        Count_label: {
            font: { size: '15px', weight: 600 },
            color: t.b3,
        },
        Grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
        },
        Empty: {
            display: 'flex',
            flex: { direction: 'column' },
            align: { items: 'center' },
            justify: { content: 'center' },
            gap: '6px',
            padding: { top: '48px', bottom: '48px', left: '24px', right: '24px' },
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            color: t.b3,
        },
        Empty_icon: {
            font: { size: '48px' },
        },
        Empty_text: {
            font: { size: '18px', weight: 700 },
            color: t.b1,
        },
        Empty_sub: {
            font: { size: '13px' },
            color: t.b3,
        },
        '@': {
            bog_tracker_mpit_neolo_teacher_classes_empty: {
                false: {
                    Empty: { display: 'none' },
                },
                true: {
                    Grid: { display: 'none' },
                },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_classes_card, {
        display: 'flex',
        flex: { direction: 'column' },
        align: { items: 'flex-start' },
        gap: '6px',
        padding: { top: '18px', bottom: '18px', left: '18px', right: '18px' },
        background: { color: t.g0 },
        borderRadius: t.radius_base,
        box: {
            shadow: [{ x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' }],
        },
        cursor: 'pointer',
        textAlign: 'left',
        Icon: {
            font: { size: '36px' },
        },
        Name: {
            font: { size: '18px', weight: 800 },
            color: t.b0,
        },
        Subject: {
            font: { size: '13px', weight: 600 },
            color: t.b3,
        },
        Meta: {
            display: 'flex',
            gap: '6px',
            flex: { wrap: 'wrap' },
            margin: { top: '4px', bottom: 0, left: 0, right: 0 },
        },
        Count_badge: {
            font: { size: '12px', weight: 700 },
            color: t.g5,
            background: { color: t.g2 },
            padding: { top: '3px', bottom: '3px', left: '8px', right: '8px' },
            borderRadius: '10px',
        },
        Id_badge: {
            font: { size: '12px', weight: 700 },
            color: t.b2,
            background: { color: t.g1 },
            padding: { top: '3px', bottom: '3px', left: '8px', right: '8px' },
            borderRadius: '10px',
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_teacher_detail) = class $bog_tracker_mpit_neolo_teacher_detail extends ($.$mol_view) {
		student_id_label(id){
			return "";
		}
		remove_student(id, next){
			if(next !== undefined) return next;
			return null;
		}
		back_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Back_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.back_click(next)));
			(obj.sub) = () => (["← Назад к классам"]);
			return obj;
		}
		Icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["🏫"]);
			return obj;
		}
		Class_name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.class_name())]);
			return obj;
		}
		Class_summary(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.class_summary())]);
			return obj;
		}
		Header_info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Class_name()), (this.Class_summary())]);
			return obj;
		}
		assign_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Assign_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.assign_click(next)));
			(obj.sub) = () => (["📝 Задать задание"]);
			return obj;
		}
		invite_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Invite_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.invite_click(next)));
			(obj.sub) = () => (["+ Добавить ученика"]);
			return obj;
		}
		delete_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Delete_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.delete_click(next)));
			(obj.sub) = () => (["🗑 Удалить класс"]);
			return obj;
		}
		Header_actions(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Assign_btn()), 
				(this.Invite_btn()), 
				(this.Delete_btn())
			]);
			return obj;
		}
		Header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Icon()), 
				(this.Header_info()), 
				(this.Header_actions())
			]);
			return obj;
		}
		students_tab_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Tab_students(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_detail_tab();
			(obj.label) = () => ("Ученики");
			(obj.active) = () => ((this.students_tab_active()));
			(obj.click) = (next) => ((this.students_tab_click(next)));
			return obj;
		}
		stats_tab_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Tab_stats(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_detail_tab();
			(obj.label) = () => ("Статистика класса");
			(obj.active) = () => ((this.stats_tab_active()));
			(obj.click) = (next) => ((this.stats_tab_click(next)));
			return obj;
		}
		Tab_row(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Tab_students()), (this.Tab_stats())]);
			return obj;
		}
		Body(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.body_sub()));
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		class_id(){
			return "";
		}
		tab(next){
			if(next !== undefined) return next;
			return "students";
		}
		class_name(){
			return "";
		}
		class_subject(){
			return "";
		}
		class_summary(){
			return "";
		}
		students_count(){
			return 0;
		}
		students_count_text(){
			return "";
		}
		students_tab_active(){
			return true;
		}
		stats_tab_active(){
			return false;
		}
		students_empty_visible(){
			return true;
		}
		students_ids(){
			return [];
		}
		body_sub(){
			return [];
		}
		Student_row(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_detail_student_row();
			(obj.display_id) = () => ((this.student_id_label(id)));
			(obj.remove_click) = (next) => ((this.remove_student(id, next)));
			return obj;
		}
		sub(){
			return [
				(this.Back_btn()), 
				(this.Header()), 
				(this.Tab_row()), 
				(this.Body())
			];
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_detail_students_empty": (this.students_empty_visible())};
		}
	};
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "remove_student"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "back_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Back_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Class_name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Class_summary"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Header_info"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "assign_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Assign_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "invite_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Invite_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "delete_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Delete_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Header_actions"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Header"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "students_tab_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Tab_students"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "stats_tab_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Tab_stats"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Tab_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Body"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "api"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "tab"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher_detail.prototype), "Student_row"));
	($.$bog_tracker_mpit_neolo_teacher_detail_tab) = class $bog_tracker_mpit_neolo_teacher_detail_tab extends ($.$mol_button_minor) {
		label(){
			return "";
		}
		active(){
			return false;
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_detail_tab_active": (this.active())};
		}
		sub(){
			return [(this.label())];
		}
	};
	($.$bog_tracker_mpit_neolo_teacher_detail_student_row) = class $bog_tracker_mpit_neolo_teacher_detail_student_row extends ($.$mol_view) {
		Avatar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["👤"]);
			return obj;
		}
		Name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.display_id())]);
			return obj;
		}
		Role(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Ученик"]);
			return obj;
		}
		Name_col(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Name()), (this.Role())]);
			return obj;
		}
		remove_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Remove_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.remove_click(next)));
			(obj.sub) = () => (["Удалить"]);
			return obj;
		}
		display_id(){
			return "";
		}
		sub(){
			return [
				(this.Avatar()), 
				(this.Name_col()), 
				(this.Remove_btn())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail_student_row.prototype), "Avatar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail_student_row.prototype), "Name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail_student_row.prototype), "Role"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail_student_row.prototype), "Name_col"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail_student_row.prototype), "remove_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_detail_student_row.prototype), "Remove_btn"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_teacher_detail extends $.$bog_tracker_mpit_neolo_teacher_detail {
            current_class() {
                return null;
            }
            tab(next) {
                return super.tab(next) ?? 'students';
            }
            students_tab_active() {
                return this.tab() === 'students';
            }
            stats_tab_active() {
                return this.tab() === 'stats';
            }
            students_tab_click(next) {
                if (next === undefined)
                    return null;
                this.tab('students');
                return null;
            }
            stats_tab_click(next) {
                if (next === undefined)
                    return null;
                this.tab('stats');
                return null;
            }
            class_name() {
                return this.current_class()?.name()?.val() ?? 'Класс не найден';
            }
            class_subject() {
                const s = this.current_class()?.subject()?.val() ?? '';
                return s || 'Без предмета';
            }
            students_count() {
                return this.current_class()?.student_ids()?.items().length ?? 0;
            }
            students_count_text() {
                const n = this.students_count();
                return `${n} учеников`;
            }
            class_summary() {
                return `${this.class_subject()} · ${this.students_count_text()}`;
            }
            students_empty_visible() {
                return this.tab() === 'students' && this.students_count() === 0;
            }
            students_ids() {
                return (this.current_class()?.student_ids()?.items() ?? []).filter((s) => !!s);
            }
            student_id_label(id) {
                return `ID: ${id}`;
            }
            body_sub() {
                if (this.tab() === 'stats') {
                    return [`Учеников в классе: ${this.students_count()}`];
                }
                if (this.students_empty_visible()) {
                    return [
                        '👥 Учеников пока нет. Нажмите «Добавить ученика» и введите его ID.',
                    ];
                }
                return this.students_ids().map(id => this.Student_row(id));
            }
            remove_student(id, next) {
                if (next === undefined)
                    return null;
                if (!confirm('Удалить ученика из класса?'))
                    return null;
                const cls = this.current_class();
                if (!cls)
                    return null;
                cls.student_ids(null).cut(id);
                return null;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "tab", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "students_tab_active", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "stats_tab_active", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "students_tab_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "stats_tab_click", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "class_name", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "class_subject", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "students_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "students_count_text", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "class_summary", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "students_empty_visible", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "students_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "student_id_label", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "body_sub", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher_detail.prototype, "remove_student", null);
        $$.$bog_tracker_mpit_neolo_teacher_detail = $bog_tracker_mpit_neolo_teacher_detail;
        class $bog_tracker_mpit_neolo_teacher_detail_tab extends $.$bog_tracker_mpit_neolo_teacher_detail_tab {
        }
        $$.$bog_tracker_mpit_neolo_teacher_detail_tab = $bog_tracker_mpit_neolo_teacher_detail_tab;
        class $bog_tracker_mpit_neolo_teacher_detail_student_row extends $.$bog_tracker_mpit_neolo_teacher_detail_student_row {
        }
        $$.$bog_tracker_mpit_neolo_teacher_detail_student_row = $bog_tracker_mpit_neolo_teacher_detail_student_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_teacher_detail, {
        display: 'flex',
        flex: { direction: 'column' },
        gap: '14px',
        Back_btn: {
            align: { self: 'flex-start' },
            font: { size: '14px', weight: 700 },
            color: t.g5,
        },
        Header: {
            display: 'flex',
            align: { items: 'center' },
            gap: '14px',
            flex: { wrap: 'wrap' },
            padding: { top: '18px', bottom: '18px', left: '18px', right: '18px' },
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            box: {
                shadow: [{ x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' }],
            },
        },
        Icon: {
            font: { size: '42px' },
        },
        Header_info: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '4px',
            minWidth: '200px',
        },
        Class_name: {
            font: { size: '24px', weight: 800 },
            color: t.b0,
        },
        Class_summary: {
            font: { size: '14px', weight: 600 },
            color: t.b3,
        },
        Header_actions: {
            display: 'flex',
            gap: '8px',
            flex: { wrap: 'wrap' },
        },
        Delete_btn: {
            color: t.red,
        },
        Tab_row: {
            display: 'flex',
            gap: '8px',
        },
        Body: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '10px',
            padding: { top: '14px', bottom: '14px', left: '14px', right: '14px' },
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            box: {
                shadow: [{ x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' }],
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_detail_tab, {
        padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
        borderRadius: '10px',
        font: { size: '14px', weight: 700 },
        color: t.b2,
        background: { color: 'transparent' },
        cursor: 'pointer',
        '@': {
            bog_tracker_mpit_neolo_teacher_detail_tab_active: {
                true: {
                    background: { color: t.g2 },
                    color: t.g5,
                },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_detail_student_row, {
        display: 'flex',
        align: { items: 'center' },
        gap: '12px',
        padding: { top: '10px', bottom: '10px', left: '12px', right: '12px' },
        background: { color: t.g1 },
        borderRadius: '14px',
        Avatar: {
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            background: { color: t.g2 },
            font: { size: '14px' },
        },
        Name_col: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '2px',
        },
        Name: {
            font: { size: '14px', weight: 700 },
            color: t.b0,
        },
        Role: {
            font: { size: '12px' },
            color: t.b3,
        },
        Remove_btn: {
            color: t.red,
            font: { size: '12px', weight: 700 },
            padding: { top: '6px', bottom: '6px', left: '10px', right: '10px' },
        },
    });
})($ || ($ = {}));

;
	($.$mol_link) = class $mol_link extends ($.$mol_view) {
		uri_toggle(){
			return "";
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		target(){
			return "_self";
		}
		file_name(){
			return "";
		}
		current(){
			return false;
		}
		relation(){
			return "";
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		click(next){
			return (this.event_click(next));
		}
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		uri_off(){
			return "";
		}
		uri_native(){
			return null;
		}
		external(){
			return false;
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri_toggle()), 
				"title": (this.hint_safe()), 
				"target": (this.target()), 
				"download": (this.file_name()), 
				"mol_link_current": (this.current()), 
				"rel": (this.relation())
			};
		}
		sub(){
			return [(this.title())];
		}
		arg(){
			return {};
		}
		event(){
			return {...(super.event()), "click": (next) => (this.click(next))};
		}
	};
	($mol_mem(($.$mol_link.prototype), "event_click"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    if (error instanceof Error)
                        return '💥' + error.message;
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        minHeight: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
        },
        ':focus-visible': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_teacher_review) = class $bog_tracker_mpit_neolo_teacher_review extends ($.$mol_view) {
		task_title(id){
			return "";
		}
		task_meta(id){
			return "";
		}
		task_desc(id){
			return "";
		}
		task_file_name(id){
			return "";
		}
		task_file_url(id){
			return "";
		}
		task_file_visible(id){
			return false;
		}
		accept(id, next){
			if(next !== undefined) return next;
			return null;
		}
		reject(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.header_text())]);
			return obj;
		}
		Cards(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.cards_sub()));
			return obj;
		}
		Empty_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["📥"]);
			return obj;
		}
		Empty_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Нет работ на проверку"]);
			return obj;
		}
		Empty_sub(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Когда ученик сдаст задание, оно появится здесь"]);
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Empty_icon()), 
				(this.Empty_text()), 
				(this.Empty_sub())
			]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		review_tasks_list(){
			return [];
		}
		task_ids(){
			return [];
		}
		header_text(){
			return "";
		}
		empty_visible(){
			return true;
		}
		cards_sub(){
			return [];
		}
		api_base(){
			return "";
		}
		Card(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_review_card();
			(obj.title) = () => ((this.task_title(id)));
			(obj.meta) = () => ((this.task_meta(id)));
			(obj.desc) = () => ((this.task_desc(id)));
			(obj.file_name) = () => ((this.task_file_name(id)));
			(obj.file_url) = () => ((this.task_file_url(id)));
			(obj.file_visible) = () => ((this.task_file_visible(id)));
			(obj.accept_click) = (next) => ((this.accept(id, next)));
			(obj.reject_click) = (next) => ((this.reject(id, next)));
			return obj;
		}
		sub(){
			return [
				(this.Header()), 
				(this.Cards()), 
				(this.Empty())
			];
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_review_empty": (this.empty_visible())};
		}
	};
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "accept"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "reject"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "Header"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "Cards"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "Empty_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "Empty_text"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "Empty_sub"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "Empty"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "api"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher_review.prototype), "Card"));
	($.$bog_tracker_mpit_neolo_teacher_review_card) = class $bog_tracker_mpit_neolo_teacher_review_card extends ($.$mol_view) {
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		Meta(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.meta())]);
			return obj;
		}
		Desc(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.desc())]);
			return obj;
		}
		File_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["📄"]);
			return obj;
		}
		File_name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.file_name())]);
			return obj;
		}
		File_hint(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["⬇ Скачать"]);
			return obj;
		}
		File_row(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.file_url()));
			(obj.sub) = () => ([
				(this.File_icon()), 
				(this.File_name()), 
				(this.File_hint())
			]);
			return obj;
		}
		File_missing(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Файл не прикреплён"]);
			return obj;
		}
		accept_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Accept_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.accept_click(next)));
			(obj.sub) = () => (["✓ Принять"]);
			return obj;
		}
		reject_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Reject_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.reject_click(next)));
			(obj.sub) = () => (["✕ Отклонить"]);
			return obj;
		}
		Actions(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Accept_btn()), (this.Reject_btn())]);
			return obj;
		}
		title(){
			return "";
		}
		meta(){
			return "";
		}
		desc(){
			return "";
		}
		file_name(){
			return "";
		}
		file_url(){
			return "";
		}
		file_visible(){
			return false;
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_review_card_file": (this.file_visible())};
		}
		sub(){
			return [
				(this.Title()), 
				(this.Meta()), 
				(this.Desc()), 
				(this.File_row()), 
				(this.File_missing()), 
				(this.Actions())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "Title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "Meta"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "Desc"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "File_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "File_name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "File_hint"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "File_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "File_missing"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "accept_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "Accept_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "reject_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "Reject_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_review_card.prototype), "Actions"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_teacher_review extends $.$bog_tracker_mpit_neolo_teacher_review {
            review_tasks_list() {
                return [];
            }
            task_ids() {
                return this.review_tasks_list().map(t => t.link().toString());
            }
            task_by_id(id) {
                for (const t of this.review_tasks_list()) {
                    if (t.link().toString() === id)
                        return t;
                }
                return null;
            }
            task_title(id) {
                return this.task_by_id(id)?.title()?.val() ?? '';
            }
            task_meta(id) {
                const t = this.task_by_id(id);
                if (!t)
                    return '';
                const uname = t.owner_username()?.val() ?? '';
                const date = t.date()?.val() ?? '';
                const owner_id = t.owner_id()?.val() ?? 0n;
                const owner_label = uname ? `@${uname}` : `ID: ${owner_id}`;
                return `👤 ${owner_label} · Срок: ${date}`;
            }
            task_desc(id) {
                return this.task_by_id(id)?.desc()?.val() ?? '';
            }
            task_file_name(id) {
                return this.task_by_id(id)?.student_file()?.val() ?? '';
            }
            task_file_visible(id) {
                return !!this.task_file_name(id);
            }
            task_file_url(id) {
                const t = this.task_by_id(id);
                if (!t)
                    return '';
                const file = t.student_file()?.val() ?? '';
                if (!file)
                    return '';
                const uname = t.owner_username()?.val() ?? '';
                if (!uname)
                    return '';
                const tid = t.owner_id()?.val()?.toString() ?? '0';
                return `${this.api().base()}/tasks/${uname}/${tid}/file`;
            }
            empty_visible() {
                return this.review_tasks_list().length === 0;
            }
            header_text() {
                const n = this.review_tasks_list().length;
                if (n === 0)
                    return '';
                return `${n} работ ожидают проверки`;
            }
            cards_sub() {
                return this.task_ids().map(id => this.Card(id));
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "task_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "task_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "task_meta", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "task_desc", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "task_file_name", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "task_file_visible", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "task_file_url", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "empty_visible", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "header_text", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_review.prototype, "cards_sub", null);
        $$.$bog_tracker_mpit_neolo_teacher_review = $bog_tracker_mpit_neolo_teacher_review;
        class $bog_tracker_mpit_neolo_teacher_review_card extends $.$bog_tracker_mpit_neolo_teacher_review_card {
        }
        $$.$bog_tracker_mpit_neolo_teacher_review_card = $bog_tracker_mpit_neolo_teacher_review_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_teacher_review, {
        display: 'flex',
        flex: { direction: 'column' },
        gap: '14px',
        Header: {
            font: { size: '15px', weight: 700 },
            color: t.b2,
        },
        Cards: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '14px',
        },
        Empty: {
            display: 'flex',
            flex: { direction: 'column' },
            align: { items: 'center' },
            justify: { content: 'center' },
            gap: '6px',
            padding: { top: '48px', bottom: '48px', left: '24px', right: '24px' },
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            color: t.b3,
        },
        Empty_icon: {
            font: { size: '48px' },
        },
        Empty_text: {
            font: { size: '18px', weight: 700 },
            color: t.b1,
        },
        Empty_sub: {
            font: { size: '13px' },
            color: t.b3,
        },
        '@': {
            bog_tracker_mpit_neolo_teacher_review_empty: {
                false: {
                    Empty: { display: 'none' },
                },
                true: {
                    Header: { display: 'none' },
                    Cards: { display: 'none' },
                },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_review_card, {
        display: 'flex',
        flex: { direction: 'column' },
        gap: '8px',
        padding: { top: '16px', bottom: '16px', left: '16px', right: '16px' },
        background: { color: t.g0 },
        borderRadius: t.radius_base,
        box: {
            shadow: [{ x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' }],
        },
        Title: {
            font: { size: '17px', weight: 800 },
            color: t.b0,
        },
        Meta: {
            font: { size: '13px', weight: 600 },
            color: t.b3,
        },
        Desc: {
            font: { size: '13px' },
            color: t.b2,
        },
        File_row: {
            display: 'flex',
            align: { items: 'center' },
            gap: '8px',
            padding: { top: '8px', bottom: '8px', left: '12px', right: '12px' },
            background: { color: t.g1 },
            borderRadius: '12px',
            color: t.g5,
            font: { size: '13px', weight: 600 },
            textDecoration: 'none',
        },
        File_icon: {
            font: { size: '18px' },
        },
        File_name: {
            flex: { grow: 1 },
        },
        File_hint: {
            font: { size: '13px', weight: 700 },
            color: t.g5,
        },
        File_missing: {
            font: { size: '12px' },
            color: t.b3,
        },
        Actions: {
            display: 'flex',
            gap: '10px',
            margin: { top: '6px', bottom: 0, left: 0, right: 0 },
        },
        '@': {
            bog_tracker_mpit_neolo_teacher_review_card_file: {
                true: {
                    File_missing: { display: 'none' },
                },
                false: {
                    File_row: { display: 'none' },
                },
            },
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_teacher_stats) = class $bog_tracker_mpit_neolo_teacher_stats extends ($.$mol_view) {
		class_name(id){
			return "";
		}
		class_summary(id){
			return "";
		}
		Cards(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.cards_sub()));
			return obj;
		}
		Empty_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["📊"]);
			return obj;
		}
		Empty_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Нет классов"]);
			return obj;
		}
		Empty_sub(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Создайте классы, чтобы видеть статистику"]);
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Empty_icon()), 
				(this.Empty_text()), 
				(this.Empty_sub())
			]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		teacher_classes(){
			return [];
		}
		class_ids(){
			return [];
		}
		empty_visible(){
			return true;
		}
		cards_sub(){
			return [];
		}
		Card(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_stats_card();
			(obj.name) = () => ((this.class_name(id)));
			(obj.summary) = () => ((this.class_summary(id)));
			return obj;
		}
		sub(){
			return [(this.Cards()), (this.Empty())];
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_stats_empty": (this.empty_visible())};
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats.prototype), "Cards"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats.prototype), "Empty_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats.prototype), "Empty_text"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats.prototype), "Empty_sub"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats.prototype), "Empty"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats.prototype), "store"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher_stats.prototype), "Card"));
	($.$bog_tracker_mpit_neolo_teacher_stats_card) = class $bog_tracker_mpit_neolo_teacher_stats_card extends ($.$mol_view) {
		Icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["🏫"]);
			return obj;
		}
		Name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.name())]);
			return obj;
		}
		Summary(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.summary())]);
			return obj;
		}
		Info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Name()), (this.Summary())]);
			return obj;
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Icon()), (this.Info())]);
			return obj;
		}
		Placeholder(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Данные о выполнении заданий будут показаны здесь"]);
			return obj;
		}
		name(){
			return "";
		}
		summary(){
			return "";
		}
		sub(){
			return [(this.Head()), (this.Placeholder())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats_card.prototype), "Icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats_card.prototype), "Name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats_card.prototype), "Summary"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats_card.prototype), "Info"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats_card.prototype), "Head"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_stats_card.prototype), "Placeholder"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_teacher_stats extends $.$bog_tracker_mpit_neolo_teacher_stats {
            teacher_classes() {
                return [];
            }
            class_by_id(id) {
                for (const c of this.teacher_classes()) {
                    if (c.link().toString() === id)
                        return c;
                }
                return null;
            }
            class_ids() {
                return this.teacher_classes().map(c => c.link().toString());
            }
            class_name(id) {
                return this.class_by_id(id)?.name()?.val() ?? '';
            }
            class_summary(id) {
                const c = this.class_by_id(id);
                if (!c)
                    return '';
                const n = c.student_ids()?.items().length ?? 0;
                const subject = c.subject()?.val() || 'Без предмета';
                return `${n} учеников · ${subject}`;
            }
            empty_visible() {
                return this.teacher_classes().length === 0;
            }
            cards_sub() {
                return this.class_ids().map(id => this.Card(id));
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_stats.prototype, "class_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_stats.prototype, "class_name", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_teacher_stats.prototype, "class_summary", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_stats.prototype, "empty_visible", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_stats.prototype, "cards_sub", null);
        $$.$bog_tracker_mpit_neolo_teacher_stats = $bog_tracker_mpit_neolo_teacher_stats;
        class $bog_tracker_mpit_neolo_teacher_stats_card extends $.$bog_tracker_mpit_neolo_teacher_stats_card {
        }
        $$.$bog_tracker_mpit_neolo_teacher_stats_card = $bog_tracker_mpit_neolo_teacher_stats_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_teacher_stats, {
        display: 'flex',
        flex: { direction: 'column' },
        gap: '14px',
        Cards: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '14px',
        },
        Empty: {
            display: 'flex',
            flex: { direction: 'column' },
            align: { items: 'center' },
            justify: { content: 'center' },
            gap: '6px',
            padding: { top: '48px', bottom: '48px', left: '24px', right: '24px' },
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            color: t.b3,
        },
        Empty_icon: {
            font: { size: '48px' },
        },
        Empty_text: {
            font: { size: '18px', weight: 700 },
            color: t.b1,
        },
        Empty_sub: {
            font: { size: '13px' },
            color: t.b3,
        },
        '@': {
            bog_tracker_mpit_neolo_teacher_stats_empty: {
                true: {
                    Cards: { display: 'none' },
                },
                false: {
                    Empty: { display: 'none' },
                },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_stats_card, {
        display: 'flex',
        flex: { direction: 'column' },
        gap: '12px',
        padding: { top: '22px', bottom: '22px', left: '22px', right: '22px' },
        background: { color: t.g0 },
        borderRadius: t.radius_base,
        box: {
            shadow: [{ x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' }],
        },
        Head: {
            display: 'flex',
            align: { items: 'center' },
            gap: '12px',
            flex: { wrap: 'wrap' },
        },
        Icon: {
            font: { size: '28px' },
        },
        Info: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '2px',
        },
        Name: {
            font: { size: '20px', weight: 800 },
            color: t.b0,
        },
        Summary: {
            font: { size: '13px' },
            color: t.b3,
        },
        Placeholder: {
            font: { size: '13px' },
            color: t.b3,
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_teacher_profile) = class $bog_tracker_mpit_neolo_teacher_profile extends ($.$mol_view) {
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Личный кабинет"]);
			return obj;
		}
		Name_box(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_profile_box();
			(obj.label) = () => ("Имя");
			(obj.value) = () => ((this.teacher_name()));
			return obj;
		}
		Surname_box(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_profile_box();
			(obj.label) = () => ("Фамилия");
			(obj.value) = () => ((this.teacher_surname()));
			return obj;
		}
		Username_box(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_profile_box();
			(obj.label) = () => ("Логин");
			(obj.value) = () => ((this.teacher_username()));
			return obj;
		}
		Role_box(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_profile_box();
			(obj.label) = () => ("Роль");
			(obj.value) = () => ("📚 Учитель");
			return obj;
		}
		School_box(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_profile_box();
			(obj.label) = () => ("Школа");
			(obj.value) = () => ((this.teacher_school()));
			return obj;
		}
		Id_box(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_profile_box();
			(obj.label) = () => ("Мой ID");
			(obj.value) = () => ((this.teacher_id_text()));
			(obj.highlighted) = () => (true);
			return obj;
		}
		Grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Name_box()), 
				(this.Surname_box()), 
				(this.Username_box()), 
				(this.Role_box()), 
				(this.School_box()), 
				(this.Id_box())
			]);
			return obj;
		}
		Footer_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.classes_count_text())]);
			return obj;
		}
		Card(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Title()), 
				(this.Grid()), 
				(this.Footer_text())
			]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		classes_count(){
			return 0;
		}
		teacher_name(){
			return "";
		}
		teacher_surname(){
			return "";
		}
		teacher_username(){
			return "";
		}
		teacher_school(){
			return "";
		}
		teacher_id_text(){
			return "";
		}
		classes_count_text(){
			return "";
		}
		sub(){
			return [(this.Card())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Name_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Surname_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Username_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Role_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "School_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Id_box"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Grid"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Footer_text"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "Card"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile.prototype), "store"));
	($.$bog_tracker_mpit_neolo_teacher_profile_box) = class $bog_tracker_mpit_neolo_teacher_profile_box extends ($.$mol_view) {
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label())]);
			return obj;
		}
		Value(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value())]);
			return obj;
		}
		label(){
			return "";
		}
		value(){
			return "";
		}
		highlighted(){
			return false;
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_profile_box_highlighted": (this.highlighted())};
		}
		sub(){
			return [(this.Label()), (this.Value())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile_box.prototype), "Label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_profile_box.prototype), "Value"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_teacher_profile extends $.$bog_tracker_mpit_neolo_teacher_profile {
            classes_count() {
                return 0;
            }
            profile() {
                return this.store().profile();
            }
            teacher_name() {
                return this.profile()?.name()?.val() ?? '';
            }
            teacher_surname() {
                return this.profile()?.surname()?.val() ?? '—';
            }
            teacher_username() {
                const u = this.profile()?.username()?.val() ?? '';
                return u ? `@${u}` : '';
            }
            teacher_school() {
                return this.profile()?.school()?.val() ?? '—';
            }
            teacher_id_text() {
                const id = this.profile()?.user_id()?.val() ?? 0n;
                return id.toString();
            }
            classes_count_text() {
                const n = this.classes_count();
                return `Ваш ID используется учениками для записи к вам. Классов создано: ${n}`;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_profile.prototype, "teacher_name", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_profile.prototype, "teacher_surname", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_profile.prototype, "teacher_username", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_profile.prototype, "teacher_school", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_profile.prototype, "teacher_id_text", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher_profile.prototype, "classes_count_text", null);
        $$.$bog_tracker_mpit_neolo_teacher_profile = $bog_tracker_mpit_neolo_teacher_profile;
        class $bog_tracker_mpit_neolo_teacher_profile_box extends $.$bog_tracker_mpit_neolo_teacher_profile_box {
        }
        $$.$bog_tracker_mpit_neolo_teacher_profile_box = $bog_tracker_mpit_neolo_teacher_profile_box;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_teacher_profile, {
        display: 'flex',
        Card: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '16px',
            maxWidth: '600px',
            padding: { top: '26px', bottom: '26px', left: '26px', right: '26px' },
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            box: {
                shadow: [{ x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' }],
            },
        },
        Title: {
            font: { size: '22px', weight: 800 },
            color: t.g5,
        },
        Grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px',
        },
        Footer_text: {
            font: { size: '13px' },
            color: t.b3,
            lineHeight: '1.6',
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_profile_box, {
        display: 'flex',
        flex: { direction: 'column' },
        gap: '4px',
        padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
        background: { color: t.g1 },
        borderRadius: '14px',
        Label: {
            font: { size: '12px', weight: 700 },
            color: t.b3,
            textTransform: 'uppercase',
        },
        Value: {
            font: { size: '16px', weight: 700 },
            color: t.b0,
        },
        '@': {
            bog_tracker_mpit_neolo_teacher_profile_box_highlighted: {
                true: {
                    background: { color: t.g4 },
                    Label: { color: '#00000080' },
                    Value: { font: { size: '22px' }, color: t.g0 },
                },
            },
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_teacher) = class $bog_tracker_mpit_neolo_teacher extends ($.$mol_view) {
		create_class_open_click(next){
			if(next !== undefined) return next;
			return null;
		}
		open_class_id_set(id, next){
			if(next !== undefined) return next;
			return null;
		}
		open_class_tab(next){
			if(next !== undefined) return next;
			return "students";
		}
		close_class_detail(next){
			if(next !== undefined) return next;
			return null;
		}
		invite_open_click(next){
			if(next !== undefined) return next;
			return null;
		}
		assign_open_click(next){
			if(next !== undefined) return next;
			return null;
		}
		delete_class_click(next){
			if(next !== undefined) return next;
			return null;
		}
		review_accept(id, next){
			if(next !== undefined) return next;
			return null;
		}
		review_reject(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Brand_accent(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Plan"]);
			return obj;
		}
		Role_badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Учитель"]);
			return obj;
		}
		Brand(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				"School", 
				(this.Brand_accent()), 
				(this.Role_badge())
			]);
			return obj;
		}
		logout(next){
			if(next !== undefined) return next;
			return null;
		}
		Logout_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["↪"]);
			return obj;
		}
		Logout_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Выход"]);
			return obj;
		}
		Logout(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.logout(next)));
			(obj.sub) = () => ([(this.Logout_icon()), (this.Logout_label())]);
			return obj;
		}
		Topbar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Brand()), (this.Logout())]);
			return obj;
		}
		Screen_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.screen_title_text())]);
			return obj;
		}
		Screen_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.active_screen())]);
			return obj;
		}
		Main(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Screen_title()), (this.Screen_content())]);
			return obj;
		}
		side_classes_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Side_classes(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_side_item();
			(obj.icon) = () => ("🏫");
			(obj.icon_kind) = () => ("g");
			(obj.label) = () => ("Классы");
			(obj.active) = () => ((this.side_classes_active()));
			(obj.badge_text) = () => ("");
			(obj.badge_hidden) = () => (true);
			(obj.click) = (next) => ((this.side_classes_click(next)));
			return obj;
		}
		side_review_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Side_review(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_side_item();
			(obj.icon) = () => ("📥");
			(obj.icon_kind) = () => ("bk");
			(obj.label) = () => ("Проверка");
			(obj.active) = () => ((this.side_review_active()));
			(obj.badge_text) = () => ((this.review_badge_text()));
			(obj.badge_hidden) = () => ((this.review_badge_hidden()));
			(obj.click) = (next) => ((this.side_review_click(next)));
			return obj;
		}
		side_stats_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Side_stats(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_side_item();
			(obj.icon) = () => ("📊");
			(obj.icon_kind) = () => ("bk");
			(obj.label) = () => ("Статистика");
			(obj.active) = () => ((this.side_stats_active()));
			(obj.badge_text) = () => ("");
			(obj.badge_hidden) = () => (true);
			(obj.click) = (next) => ((this.side_stats_click(next)));
			return obj;
		}
		side_profile_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Side_profile(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_side_item();
			(obj.icon) = () => ("👤");
			(obj.icon_kind) = () => ("dg");
			(obj.label) = () => ("Кабинет");
			(obj.active) = () => ((this.side_profile_active()));
			(obj.badge_text) = () => ("");
			(obj.badge_hidden) = () => (true);
			(obj.click) = (next) => ((this.side_profile_click(next)));
			return obj;
		}
		Side_stack(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Side_classes()), 
				(this.Side_review()), 
				(this.Side_stats()), 
				(this.Side_profile())
			]);
			return obj;
		}
		Side_id(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.teacher_side_id_text())]);
			return obj;
		}
		Side_footer(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Side_id())]);
			return obj;
		}
		Sidebar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Side_stack()), (this.Side_footer())]);
			return obj;
		}
		Layout(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Main()), (this.Sidebar())]);
			return obj;
		}
		Shell(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Topbar()), (this.Layout())]);
			return obj;
		}
		new_class_name(next){
			if(next !== undefined) return next;
			return "";
		}
		new_class_subject(next){
			if(next !== undefined) return next;
			return "";
		}
		create_class_close(next){
			if(next !== undefined) return next;
			return null;
		}
		create_class_submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Create_class_modal(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_create_class_modal();
			(obj.hidden) = () => ((this.create_class_modal_hidden()));
			(obj.name) = (next) => ((this.new_class_name(next)));
			(obj.subject) = (next) => ((this.new_class_subject(next)));
			(obj.error) = () => ((this.create_class_error()));
			(obj.close) = (next) => ((this.create_class_close(next)));
			(obj.submit) = (next) => ((this.create_class_submit(next)));
			return obj;
		}
		invite_student_id(next){
			if(next !== undefined) return next;
			return "";
		}
		invite_close(next){
			if(next !== undefined) return next;
			return null;
		}
		invite_submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Invite_modal(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_invite_modal();
			(obj.hidden) = () => ((this.invite_modal_hidden()));
			(obj.student_id) = (next) => ((this.invite_student_id(next)));
			(obj.result) = () => ((this.invite_result()));
			(obj.close) = (next) => ((this.invite_close(next)));
			(obj.submit) = (next) => ((this.invite_submit(next)));
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		screen(next){
			if(next !== undefined) return next;
			return "classes";
		}
		open_class_id(next){
			if(next !== undefined) return next;
			return "";
		}
		create_class_error(){
			return "";
		}
		invite_result(){
			return "";
		}
		teacher_side_id_text(){
			return "";
		}
		screen_title_text(){
			return "";
		}
		side_classes_active(){
			return false;
		}
		side_review_active(){
			return false;
		}
		side_stats_active(){
			return false;
		}
		side_profile_active(){
			return false;
		}
		review_badge_text(){
			return "";
		}
		review_badge_hidden(){
			return true;
		}
		create_class_modal_hidden(){
			return true;
		}
		invite_modal_hidden(){
			return true;
		}
		active_screen(){
			return null;
		}
		Classes_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_classes();
			(obj.store) = () => ((this.store()));
			(obj.create_class_click) = (next) => ((this.create_class_open_click(next)));
			(obj.open_class_click) = (id, next) => ((this.open_class_id_set(id, next)));
			return obj;
		}
		Detail_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_detail();
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			(obj.class_id) = () => ((this.open_class_id()));
			(obj.tab) = (next) => ((this.open_class_tab(next)));
			(obj.back_click) = (next) => ((this.close_class_detail(next)));
			(obj.invite_click) = (next) => ((this.invite_open_click(next)));
			(obj.assign_click) = (next) => ((this.assign_open_click(next)));
			(obj.delete_click) = (next) => ((this.delete_class_click(next)));
			return obj;
		}
		Review_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_review();
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			(obj.accept) = (id, next) => ((this.review_accept(id, next)));
			(obj.reject) = (id, next) => ((this.review_reject(id, next)));
			return obj;
		}
		Stats_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_stats();
			(obj.store) = () => ((this.store()));
			return obj;
		}
		Profile_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher_profile();
			(obj.store) = () => ((this.store()));
			return obj;
		}
		sub(){
			return [
				(this.Shell()), 
				(this.Create_class_modal()), 
				(this.Invite_modal())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "create_class_open_click"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher.prototype), "open_class_id_set"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "open_class_tab"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "close_class_detail"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "invite_open_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "assign_open_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "delete_class_click"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher.prototype), "review_accept"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_teacher.prototype), "review_reject"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Brand_accent"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Role_badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Brand"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "logout"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Logout_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Logout_label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Logout"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Topbar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Screen_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Screen_content"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Main"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "side_classes_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Side_classes"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "side_review_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Side_review"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "side_stats_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Side_stats"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "side_profile_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Side_profile"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Side_stack"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Side_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Side_footer"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Sidebar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Layout"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Shell"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "new_class_name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "new_class_subject"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "create_class_close"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "create_class_submit"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Create_class_modal"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "invite_student_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "invite_close"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "invite_submit"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Invite_modal"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "api"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "open_class_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Classes_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Detail_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Review_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Stats_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher.prototype), "Profile_screen"));
	($.$bog_tracker_mpit_neolo_teacher_side_item) = class $bog_tracker_mpit_neolo_teacher_side_item extends ($.$mol_button_minor) {
		Circle(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.icon())]);
			return obj;
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label())]);
			return obj;
		}
		Badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.badge_text())]);
			return obj;
		}
		icon(){
			return "";
		}
		icon_kind(){
			return "g";
		}
		label(){
			return "";
		}
		active(){
			return false;
		}
		badge_text(){
			return "";
		}
		badge_hidden(){
			return true;
		}
		attr(){
			return {
				...(super.attr()), 
				"bog_tracker_mpit_neolo_teacher_side_item_active": (this.active()), 
				"bog_tracker_mpit_neolo_teacher_side_item_kind": (this.icon_kind()), 
				"bog_tracker_mpit_neolo_teacher_side_item_badge_hidden": (this.badge_hidden())
			};
		}
		sub(){
			return [
				(this.Circle()), 
				(this.Label()), 
				(this.Badge())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_side_item.prototype), "Circle"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_side_item.prototype), "Label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_side_item.prototype), "Badge"));
	($.$bog_tracker_mpit_neolo_teacher_create_class_modal) = class $bog_tracker_mpit_neolo_teacher_create_class_modal extends ($.$mol_view) {
		Modal_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Новый класс"]);
			return obj;
		}
		name(next){
			if(next !== undefined) return next;
			return "";
		}
		Name_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ("Например, 7А");
			(obj.value) = (next) => ((this.name(next)));
			return obj;
		}
		Name_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Название класса");
			(obj.content) = () => ([(this.Name_input())]);
			return obj;
		}
		subject(next){
			if(next !== undefined) return next;
			return "";
		}
		Subject_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ("Например, Математика");
			(obj.value) = (next) => ((this.subject(next)));
			return obj;
		}
		Subject_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("Предмет");
			(obj.content) = () => ([(this.Subject_input())]);
			return obj;
		}
		Error_view(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.error())]);
			return obj;
		}
		close(next){
			if(next !== undefined) return next;
			return null;
		}
		Cancel_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.close(next)));
			(obj.sub) = () => (["Отмена"]);
			return obj;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.submit(next)));
			(obj.sub) = () => (["Создать"]);
			return obj;
		}
		Buttons(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Cancel_btn()), (this.Submit_btn())]);
			return obj;
		}
		Modal_body(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Modal_title()), 
				(this.Name_field()), 
				(this.Subject_field()), 
				(this.Error_view()), 
				(this.Buttons())
			]);
			return obj;
		}
		hidden(){
			return true;
		}
		error(){
			return "";
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_modal_hidden": (this.hidden())};
		}
		sub(){
			return [(this.Modal_body())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Modal_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Name_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Name_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "subject"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Subject_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Subject_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Error_view"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "close"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Cancel_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "submit"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Submit_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Buttons"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_create_class_modal.prototype), "Modal_body"));
	($.$bog_tracker_mpit_neolo_teacher_invite_modal) = class $bog_tracker_mpit_neolo_teacher_invite_modal extends ($.$mol_view) {
		Modal_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Пригласить ученика"]);
			return obj;
		}
		Hint(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Введите ID ученика — ему придёт приглашение в класс."]);
			return obj;
		}
		student_id(next){
			if(next !== undefined) return next;
			return "";
		}
		Id_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ("Например, 1234567890");
			(obj.value) = (next) => ((this.student_id(next)));
			return obj;
		}
		Id_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ("ID ученика");
			(obj.content) = () => ([(this.Id_input())]);
			return obj;
		}
		Result_view(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.result())]);
			return obj;
		}
		close(next){
			if(next !== undefined) return next;
			return null;
		}
		Cancel_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.close(next)));
			(obj.sub) = () => (["Отмена"]);
			return obj;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.submit(next)));
			(obj.sub) = () => (["Отправить приглашение"]);
			return obj;
		}
		Buttons(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Cancel_btn()), (this.Submit_btn())]);
			return obj;
		}
		Modal_body(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Modal_title()), 
				(this.Hint()), 
				(this.Id_field()), 
				(this.Result_view()), 
				(this.Buttons())
			]);
			return obj;
		}
		hidden(){
			return true;
		}
		result(){
			return "";
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_teacher_modal_hidden": (this.hidden())};
		}
		sub(){
			return [(this.Modal_body())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Modal_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Hint"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "student_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Id_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Id_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Result_view"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "close"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Cancel_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "submit"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Submit_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Buttons"));
	($mol_mem(($.$bog_tracker_mpit_neolo_teacher_invite_modal.prototype), "Modal_body"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_teacher extends $.$bog_tracker_mpit_neolo_teacher {
            screen(next) {
                return super.screen(next) ?? 'classes';
            }
            open_class_id(next) {
                return super.open_class_id(next) ?? '';
            }
            open_class_tab(next) {
                return super.open_class_tab(next) ?? 'students';
            }
            new_class_name(next) {
                return super.new_class_name(next) ?? '';
            }
            new_class_subject(next) {
                return super.new_class_subject(next) ?? '';
            }
            create_class_error() {
                return this.create_class_error_state();
            }
            create_class_error_state(next) {
                return next ?? '';
            }
            invite_student_id(next) {
                return super.invite_student_id(next) ?? '';
            }
            invite_result() {
                return this.invite_result_state();
            }
            invite_result_state(next) {
                return next ?? '';
            }
            create_class_open(next) {
                return next ?? false;
            }
            invite_open(next) {
                return next ?? false;
            }
            create_class_modal_hidden() {
                return !this.create_class_open();
            }
            invite_modal_hidden() {
                return !this.invite_open();
            }
            current_teacher_id() {
                const profile = this.store().profile();
                if (!profile)
                    return 0n;
                return profile.user_id()?.val() ?? 0n;
            }
            teacher_side_id_text() {
                const id = this.current_teacher_id();
                if (id === 0n)
                    return '';
                return 'ID: ' + id.toString();
            }
            screen_title_text() {
                if (this.open_class_id()) {
                    const cls = this.current_open_class();
                    return cls?.name()?.val() ?? 'Класс';
                }
                const titles = {
                    classes: 'Мои классы',
                    review: 'Задания на проверку',
                    stats: 'Общая статистика',
                    profile: 'Личный кабинет',
                };
                return titles[this.screen()] ?? '';
            }
            side_classes_active() {
                return this.screen() === 'classes';
            }
            side_review_active() {
                return this.screen() === 'review';
            }
            side_stats_active() {
                return this.screen() === 'stats';
            }
            side_profile_active() {
                return this.screen() === 'profile';
            }
            review_badge_hidden() {
                return this.review_count() === 0;
            }
            review_badge_text() {
                const n = this.review_count();
                return n > 0 ? String(n) : '';
            }
            review_count() {
                return this.review_tasks().length;
            }
            active_screen() {
                if (this.open_class_id())
                    return this.Detail_screen();
                switch (this.screen()) {
                    case 'review': return this.Review_screen();
                    case 'stats': return this.Stats_screen();
                    case 'profile': return this.Profile_screen();
                    default: return this.Classes_screen();
                }
            }
            side_classes_click(next) {
                if (next === undefined)
                    return null;
                this.screen('classes');
                this.open_class_id('');
                return null;
            }
            side_review_click(next) {
                if (next === undefined)
                    return null;
                this.screen('review');
                this.open_class_id('');
                return null;
            }
            side_stats_click(next) {
                if (next === undefined)
                    return null;
                this.screen('stats');
                this.open_class_id('');
                return null;
            }
            side_profile_click(next) {
                if (next === undefined)
                    return null;
                this.screen('profile');
                this.open_class_id('');
                return null;
            }
            logout(next) {
                if (next === undefined)
                    return null;
                try {
                    localStorage.clear();
                    location.reload();
                }
                catch { }
                return null;
            }
            open_class_id_set(id, next) {
                if (next === undefined)
                    return null;
                this.open_class_id(id);
                return null;
            }
            close_class_detail(next) {
                if (next === undefined)
                    return null;
                this.open_class_id('');
                return null;
            }
            create_class_open_click(next) {
                if (next === undefined)
                    return null;
                this.new_class_name('');
                this.new_class_subject('');
                this.create_class_error_state('');
                this.create_class_open(true);
                return null;
            }
            create_class_close(next) {
                if (next === undefined)
                    return null;
                this.create_class_open(false);
                return null;
            }
            create_class_submit(next) {
                if (next === undefined)
                    return null;
                const name = this.new_class_name().trim();
                const subject = this.new_class_subject().trim();
                if (!name) {
                    this.create_class_error_state('Введите название класса');
                    return null;
                }
                this.create_class_error_state('');
                try {
                    const reg = this.store().registry();
                    if (!reg) {
                        this.create_class_error_state('Нет доступа к базе');
                        return null;
                    }
                    const classes_ref = reg.Classes(null);
                    if (!classes_ref) {
                        this.create_class_error_state('Не удалось открыть список классов');
                        return null;
                    }
                    const cls = classes_ref.make(null);
                    if (!cls) {
                        this.create_class_error_state('Не удалось создать класс');
                        return null;
                    }
                    cls.name(null).val(name);
                    if (subject)
                        cls.subject(null).val(subject);
                    cls.teacher_id(null).val(this.current_teacher_id());
                    this.create_class_open(false);
                    this.new_class_name('');
                    this.new_class_subject('');
                    this.open_class_id(cls.link().toString());
                }
                catch (e) {
                    this.create_class_error_state(String(e));
                }
                return null;
            }
            invite_open_click(next) {
                if (next === undefined)
                    return null;
                this.invite_student_id('');
                this.invite_result_state('');
                this.invite_open(true);
                return null;
            }
            invite_close(next) {
                if (next === undefined)
                    return null;
                this.invite_open(false);
                return null;
            }
            invite_submit(next) {
                if (next === undefined)
                    return null;
                const raw = this.invite_student_id().trim();
                if (!raw) {
                    this.invite_result_state('Введите ID ученика');
                    return null;
                }
                let sid_big;
                try {
                    sid_big = BigInt(raw);
                }
                catch {
                    this.invite_result_state('ID должен быть числом');
                    return null;
                }
                const cls = this.current_open_class();
                if (!cls) {
                    this.invite_result_state('Класс не выбран');
                    return null;
                }
                const existing = cls.student_ids()?.items() ?? [];
                if (existing.includes(raw)) {
                    this.invite_result_state('Этот ученик уже в классе');
                    return null;
                }
                try {
                    const reg = this.store().registry();
                    if (!reg) {
                        this.invite_result_state('Нет доступа к базе');
                        return null;
                    }
                    const invs_ref = reg.Invitations(null);
                    if (!invs_ref) {
                        this.invite_result_state('Не удалось открыть приглашения');
                        return null;
                    }
                    const inv = invs_ref.make(null);
                    if (!inv) {
                        this.invite_result_state('Не удалось создать приглашение');
                        return null;
                    }
                    const profile = this.store().profile();
                    inv.class_id(null).val(cls.link().toString());
                    inv.class_name(null).val(cls.name()?.val() ?? '');
                    inv.from_teacher_id(null).val(this.current_teacher_id());
                    const teacher_name = [profile?.name()?.val() ?? '', profile?.surname()?.val() ?? '']
                        .filter(s => s).join(' ').trim();
                    inv.from_teacher_name(null).val(teacher_name);
                    inv.status(null).val('pending');
                    inv.created_iso(null).val(new Date().toISOString());
                    cls.student_ids(null).add(sid_big.toString());
                    this.invite_result_state('Приглашение создано. Ученик увидит его у себя.');
                    setTimeout(() => this.invite_open(false), 1200);
                }
                catch (e) {
                    this.invite_result_state(String(e));
                }
                return null;
            }
            assign_open_click(next) {
                if (next === undefined)
                    return null;
                console.warn('assign_open_click: assign modal not yet wired');
                return null;
            }
            delete_class_click(next) {
                if (next === undefined)
                    return null;
                const cls = this.current_open_class();
                if (!cls)
                    return null;
                const name = cls.name()?.val() ?? '';
                if (!confirm(`Удалить класс «${name}»?`))
                    return null;
                try {
                    const reg = this.store().registry();
                    const classes_ref = reg?.Classes(null);
                    classes_ref?.cut(cls.link());
                    this.open_class_id('');
                }
                catch { }
                return null;
            }
            current_open_class() {
                const id = this.open_class_id();
                if (!id)
                    return null;
                const all = this.store().classes_all();
                for (const c of all) {
                    if (c.link().toString() === id)
                        return c;
                }
                return null;
            }
            review_tasks() {
                const tid = this.current_teacher_id();
                if (tid === 0n)
                    return [];
                const my_class_ids = new Set();
                for (const c of this.store().classes_all()) {
                    if (c.teacher_id()?.val() === tid)
                        my_class_ids.add(c.link().toString());
                }
                const out = [];
                for (const t of this.store().tasks_all()) {
                    if (t.source()?.val() !== 'teacher')
                        continue;
                    if (t.status()?.val() !== 'review')
                        continue;
                    const cid = t.class_id()?.val() ?? '';
                    if (!my_class_ids.has(cid))
                        continue;
                    out.push(t);
                }
                return out;
            }
            my_classes() {
                const tid = this.current_teacher_id();
                if (tid === 0n)
                    return [];
                return this.store().classes_all().filter(c => c.teacher_id()?.val() === tid);
            }
            review_accept(id, next) {
                if (next === undefined)
                    return null;
                const t = this.review_tasks().find(tk => tk.link().toString() === id);
                t?.status(null).val('done');
                return null;
            }
            review_reject(id, next) {
                if (next === undefined)
                    return null;
                const t = this.review_tasks().find(tk => tk.link().toString() === id);
                t?.status(null).val('rejected');
                return null;
            }
            Classes_screen() {
                const el = super.Classes_screen();
                el.teacher_classes = () => this.my_classes();
                return el;
            }
            Detail_screen() {
                const el = super.Detail_screen();
                el.current_class = () => this.current_open_class();
                return el;
            }
            Review_screen() {
                const el = super.Review_screen();
                el.review_tasks_list = () => this.review_tasks();
                return el;
            }
            Stats_screen() {
                const el = super.Stats_screen();
                el.teacher_classes = () => this.my_classes();
                return el;
            }
            Profile_screen() {
                const el = super.Profile_screen();
                el.classes_count = () => this.my_classes().length;
                return el;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "screen", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "open_class_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "open_class_tab", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "new_class_name", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "new_class_subject", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "create_class_error", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "create_class_error_state", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "invite_student_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "invite_result", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "invite_result_state", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "create_class_open", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "invite_open", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "create_class_modal_hidden", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "invite_modal_hidden", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "current_teacher_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "teacher_side_id_text", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "screen_title_text", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "side_classes_active", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "side_review_active", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "side_stats_active", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "side_profile_active", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "review_badge_hidden", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "review_badge_text", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "review_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "active_screen", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "side_classes_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "side_review_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "side_stats_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "side_profile_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "logout", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "open_class_id_set", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "close_class_detail", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "create_class_open_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "create_class_close", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "create_class_submit", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "invite_open_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "invite_close", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "invite_submit", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "assign_open_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "delete_class_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "review_accept", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_teacher.prototype, "review_reject", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "Classes_screen", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "Detail_screen", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "Review_screen", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "Stats_screen", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_teacher.prototype, "Profile_screen", null);
        $$.$bog_tracker_mpit_neolo_teacher = $bog_tracker_mpit_neolo_teacher;
        class $bog_tracker_mpit_neolo_teacher_side_item extends $.$bog_tracker_mpit_neolo_teacher_side_item {
        }
        $$.$bog_tracker_mpit_neolo_teacher_side_item = $bog_tracker_mpit_neolo_teacher_side_item;
        class $bog_tracker_mpit_neolo_teacher_create_class_modal extends $.$bog_tracker_mpit_neolo_teacher_create_class_modal {
        }
        $$.$bog_tracker_mpit_neolo_teacher_create_class_modal = $bog_tracker_mpit_neolo_teacher_create_class_modal;
        class $bog_tracker_mpit_neolo_teacher_invite_modal extends $.$bog_tracker_mpit_neolo_teacher_invite_modal {
        }
        $$.$bog_tracker_mpit_neolo_teacher_invite_modal = $bog_tracker_mpit_neolo_teacher_invite_modal;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_teacher, {
        display: 'flex',
        flex: { direction: 'column' },
        minHeight: '100vh',
        background: { color: t.g1 },
        color: t.b0,
        Shell: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            minHeight: '100vh',
        },
        Topbar: {
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'space-between' },
            padding: { top: '14px', bottom: '14px', left: '24px', right: '24px' },
            background: { color: t.g0 },
            box: {
                shadow: [{ x: 0, y: '2px', blur: '8px', spread: 0, color: '#00280a14' }],
            },
        },
        Brand: {
            display: 'flex',
            align: { items: 'center' },
            gap: '6px',
            font: { size: '22px', weight: 800 },
            color: t.g5,
        },
        Brand_accent: {
            color: t.g4,
            font: { style: 'italic', weight: 800 },
        },
        Role_badge: {
            font: { size: '14px', weight: 600 },
            color: t.g5,
            background: { color: t.g2 },
            padding: { top: '3px', bottom: '3px', left: '10px', right: '10px' },
            borderRadius: '8px',
            margin: { left: '6px' },
        },
        Logout: {
            display: 'flex',
            gap: '6px',
            align: { items: 'center' },
        },
        Layout: {
            display: 'flex',
            flex: { grow: 1 },
            padding: { top: '24px', bottom: '24px', left: '24px', right: '24px' },
            gap: '24px',
        },
        Main: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            minHeight: '100vh',
            gap: '18px',
        },
        Screen_title: {
            font: { size: '28px', weight: 800 },
            color: t.b0,
        },
        Screen_content: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '16px',
        },
        Sidebar: {
            display: 'flex',
            flex: { direction: 'column', shrink: 0 },
            justify: { content: 'space-between' },
            width: '220px',
            padding: { top: '18px', bottom: '18px', left: '14px', right: '14px' },
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            box: {
                shadow: [{ x: 0, y: '6px', blur: '18px', spread: 0, color: '#00280a14' }],
            },
        },
        Side_stack: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '8px',
        },
        Side_footer: {
            display: 'flex',
            flex: { direction: 'column' },
            padding: { top: '8px', bottom: 0, left: 0, right: 0 },
            borderTop: `1px solid ${t.g2}`,
        },
        Side_id: {
            font: { size: '11px', weight: 700 },
            color: t.b3,
            textAlign: 'center',
            padding: { top: '4px', bottom: '4px', left: 0, right: 0 },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_side_item, {
        display: 'flex',
        align: { items: 'center' },
        gap: '10px',
        width: '100%',
        padding: { top: '10px', bottom: '10px', left: '10px', right: '10px' },
        borderRadius: '14px',
        background: { color: 'transparent' },
        cursor: 'pointer',
        Circle: {
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
            width: '36px',
            height: '36px',
            borderRadius: '12px',
            font: { size: '18px' },
            color: t.g0,
            flex: { shrink: 0 },
        },
        Label: {
            flex: { grow: 1 },
            font: { size: '15px', weight: 700 },
            color: t.b1,
        },
        Badge: {
            minWidth: '22px',
            height: '22px',
            padding: { top: 0, bottom: 0, left: '6px', right: '6px' },
            borderRadius: '11px',
            background: { color: t.red },
            color: t.g0,
            font: { size: '12px', weight: 800 },
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
        },
        '@': {
            bog_tracker_mpit_neolo_teacher_side_item_active: {
                true: {
                    background: { color: t.g2 },
                },
            },
            bog_tracker_mpit_neolo_teacher_side_item_kind: {
                g: {
                    Circle: { background: { color: t.g4 } },
                },
                bk: {
                    Circle: { background: { color: t.b1 } },
                },
                dg: {
                    Circle: { background: { color: t.b3 } },
                },
            },
            bog_tracker_mpit_neolo_teacher_side_item_badge_hidden: {
                true: {
                    Badge: { display: 'none' },
                },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_create_class_modal, {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        align: { items: 'center' },
        justify: { content: 'center' },
        background: { color: '#00000080' },
        zIndex: 100,
        Modal_body: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '14px',
            minWidth: '340px',
            maxWidth: '520px',
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            padding: { top: '22px', bottom: '22px', left: '22px', right: '22px' },
            box: {
                shadow: [{ x: 0, y: '16px', blur: '34px', spread: 0, color: '#00280a1a' }],
            },
        },
        Modal_title: {
            font: { size: '20px', weight: 800 },
            color: t.g5,
        },
        Error_view: {
            color: t.red,
            font: { size: '13px', weight: 600 },
            minHeight: '1em',
        },
        Buttons: {
            display: 'flex',
            gap: '10px',
            justify: { content: 'flex-end' },
        },
        '@': {
            bog_tracker_mpit_neolo_teacher_modal_hidden: {
                true: {
                    display: 'none',
                },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_teacher_invite_modal, {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        align: { items: 'center' },
        justify: { content: 'center' },
        background: { color: '#00000080' },
        zIndex: 100,
        Modal_body: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '14px',
            minWidth: '340px',
            maxWidth: '520px',
            background: { color: t.g0 },
            borderRadius: t.radius_base,
            padding: { top: '22px', bottom: '22px', left: '22px', right: '22px' },
            box: {
                shadow: [{ x: 0, y: '16px', blur: '34px', spread: 0, color: '#00280a1a' }],
            },
        },
        Modal_title: {
            font: { size: '20px', weight: 800 },
            color: t.g5,
        },
        Hint: {
            font: { size: '13px' },
            color: t.b3,
        },
        Result_view: {
            font: { size: '13px', weight: 600 },
            minHeight: '1em',
            color: t.b2,
        },
        Buttons: {
            display: 'flex',
            gap: '10px',
            justify: { content: 'flex-end' },
        },
        '@': {
            bog_tracker_mpit_neolo_teacher_modal_hidden: {
                true: {
                    display: 'none',
                },
            },
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_parent_children) = class $bog_tracker_mpit_neolo_parent_children extends ($.$mol_view) {
		count_label(){
			return "";
		}
		Count_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.count_label())]);
			return obj;
		}
		open_add(next){
			if(next !== undefined) return next;
			return null;
		}
		add_label(){
			return "+ Добавить ребёнка";
		}
		Add_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.open_add(next)));
			(obj.sub) = () => ([(this.add_label())]);
			return obj;
		}
		Header_bar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Count_label()), (this.Add_btn())]);
			return obj;
		}
		Empty_icon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["👨‍👩‍👧"]);
			return obj;
		}
		Empty_text(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Детей пока нет"]);
			return obj;
		}
		Empty_sub(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Добавьте ребёнка по его ID, чтобы видеть задания и статистику"]);
			return obj;
		}
		empty_add_label(){
			return "+ Добавить ребёнка";
		}
		Empty_add_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.open_add(next)));
			(obj.sub) = () => ([(this.empty_add_label())]);
			return obj;
		}
		Empty(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Empty_icon()), 
				(this.Empty_text()), 
				(this.Empty_sub()), 
				(this.Empty_add_btn())
			]);
			return obj;
		}
		child_initial(id){
			return "";
		}
		child_name(id){
			return "";
		}
		child_meta(id){
			return "";
		}
		card_open(id, next){
			if(next !== undefined) return next;
			return null;
		}
		card_remove(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Card(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_children_card();
			(obj.initial) = () => ((this.child_initial(id)));
			(obj.name) = () => ((this.child_name(id)));
			(obj.meta) = () => ((this.child_meta(id)));
			(obj.open) = (next) => ((this.card_open(id, next)));
			(obj.remove) = (next) => ((this.card_remove(id, next)));
			return obj;
		}
		cards(){
			return [(this.Card(id))];
		}
		Grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.cards()));
			return obj;
		}
		rows(){
			return [
				(this.Header_bar()), 
				(this.Empty()), 
				(this.Grid())
			];
		}
		children(){
			return [];
		}
		open_child(next){
			if(next !== undefined) return next;
			return null;
		}
		remove_child(next){
			if(next !== undefined) return next;
			return null;
		}
		child_ids(){
			return [];
		}
		sub(){
			return (this.rows());
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Count_label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "open_add"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Add_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Header_bar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Empty_icon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Empty_text"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Empty_sub"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Empty_add_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Empty"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_children.prototype), "card_open"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_children.prototype), "card_remove"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Card"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "Grid"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "open_child"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children.prototype), "remove_child"));
	($.$bog_tracker_mpit_neolo_parent_children_card) = class $bog_tracker_mpit_neolo_parent_children_card extends ($.$mol_view) {
		open(next){
			if(next !== undefined) return next;
			return null;
		}
		Avatar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.initial())]);
			return obj;
		}
		Name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.name())]);
			return obj;
		}
		Meta(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.meta())]);
			return obj;
		}
		Info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Name()), (this.Meta())]);
			return obj;
		}
		Card_body(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.open(next)));
			(obj.sub) = () => ([(this.Avatar()), (this.Info())]);
			return obj;
		}
		remove(next){
			if(next !== undefined) return next;
			return null;
		}
		remove_label(){
			return "×";
		}
		Remove_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.remove(next)));
			(obj.sub) = () => ([(this.remove_label())]);
			return obj;
		}
		initial(){
			return "";
		}
		name(){
			return "";
		}
		meta(){
			return "";
		}
		sub(){
			return [(this.Card_body()), (this.Remove_btn())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children_card.prototype), "open"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children_card.prototype), "Avatar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children_card.prototype), "Name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children_card.prototype), "Meta"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children_card.prototype), "Info"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children_card.prototype), "Card_body"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children_card.prototype), "remove"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_children_card.prototype), "Remove_btn"));


;
	($.$bog_tracker_mpit_neolo_parent_child) = class $bog_tracker_mpit_neolo_parent_child extends ($.$mol_view) {
		back(next){
			if(next !== undefined) return next;
			return null;
		}
		back_label(){
			return "← Назад к детям";
		}
		Back_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.back(next)));
			(obj.sub) = () => ([(this.back_label())]);
			return obj;
		}
		avatar_letter(){
			return "";
		}
		Avatar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.avatar_letter())]);
			return obj;
		}
		child_name(){
			return "";
		}
		Name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.child_name())]);
			return obj;
		}
		child_meta(){
			return "";
		}
		Meta(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.child_meta())]);
			return obj;
		}
		Info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Name()), (this.Meta())]);
			return obj;
		}
		create_task(next){
			if(next !== undefined) return next;
			return null;
		}
		create_task_label(){
			return "+ Задание";
		}
		Create_task_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.create_task(next)));
			(obj.sub) = () => ([(this.create_task_label())]);
			return obj;
		}
		Header(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Avatar()), 
				(this.Info()), 
				(this.Create_task_btn())
			]);
			return obj;
		}
		stat_total(){
			return "0";
		}
		Stat_total(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child_stat();
			(obj.num) = () => ((this.stat_total()));
			(obj.label) = () => ("Всего заданий");
			(obj.kind) = () => ("neutral");
			return obj;
		}
		stat_done(){
			return "0";
		}
		Stat_done(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child_stat();
			(obj.num) = () => ((this.stat_done()));
			(obj.label) = () => ("Выполнено");
			(obj.kind) = () => ("done");
			return obj;
		}
		stat_progress(){
			return "0";
		}
		Stat_progress(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child_stat();
			(obj.num) = () => ((this.stat_progress()));
			(obj.label) = () => ("В работе");
			(obj.kind) = () => ("progress");
			return obj;
		}
		stat_review(){
			return "0";
		}
		Stat_review(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child_stat();
			(obj.num) = () => ((this.stat_review()));
			(obj.label) = () => ("На проверке");
			(obj.kind) = () => ("review");
			return obj;
		}
		stat_overdue(){
			return "0";
		}
		Stat_overdue(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child_stat();
			(obj.num) = () => ((this.stat_overdue()));
			(obj.label) = () => ("Просрочено");
			(obj.kind) = () => ("overdue");
			return obj;
		}
		stat_pending(){
			return "0";
		}
		Stat_pending(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child_stat();
			(obj.num) = () => ((this.stat_pending()));
			(obj.label) = () => ("Ожидают");
			(obj.kind) = () => ("pending");
			return obj;
		}
		Stats(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Stat_total()), 
				(this.Stat_done()), 
				(this.Stat_progress()), 
				(this.Stat_review()), 
				(this.Stat_overdue()), 
				(this.Stat_pending())
			]);
			return obj;
		}
		Section_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Задания ребёнка"]);
			return obj;
		}
		Task_empty(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["У ребёнка пока нет заданий"]);
			return obj;
		}
		task_title(id){
			return "";
		}
		task_desc(id){
			return "";
		}
		task_date(id){
			return "";
		}
		task_status(id){
			return "";
		}
		Task_row(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child_task_row();
			(obj.title) = () => ((this.task_title(id)));
			(obj.desc) = () => ((this.task_desc(id)));
			(obj.date) = () => ((this.task_date(id)));
			(obj.status) = () => ((this.task_status(id)));
			return obj;
		}
		task_rows(){
			return [(this.Task_empty()), (this.Task_row(id))];
		}
		Tasks_list(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.task_rows()));
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		child_id(){
			return "";
		}
		children(){
			return [];
		}
		task_ids(){
			return [];
		}
		sub(){
			return [
				(this.Back_btn()), 
				(this.Header()), 
				(this.Stats()), 
				(this.Section_title()), 
				(this.Tasks_list())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "back"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Back_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Avatar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Meta"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Info"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "create_task"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Create_task_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Header"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Stat_total"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Stat_done"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Stat_progress"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Stat_review"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Stat_overdue"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Stat_pending"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Stats"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Section_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Task_empty"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Task_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "Tasks_list"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child.prototype), "api"));
	($.$bog_tracker_mpit_neolo_parent_child_stat) = class $bog_tracker_mpit_neolo_parent_child_stat extends ($.$mol_view) {
		Stat_num(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.num())]);
			return obj;
		}
		Stat_lbl(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label())]);
			return obj;
		}
		num(){
			return "0";
		}
		label(){
			return "";
		}
		kind(){
			return "neutral";
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_parent_child_stat_kind": (this.kind())};
		}
		sub(){
			return [(this.Stat_num()), (this.Stat_lbl())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child_stat.prototype), "Stat_num"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child_stat.prototype), "Stat_lbl"));
	($.$bog_tracker_mpit_neolo_parent_child_task_dot) = class $bog_tracker_mpit_neolo_parent_child_task_dot extends ($.$mol_view) {
		status(){
			return "pending";
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_parent_child_task_dot_status": (this.status())};
		}
		sub(){
			return [];
		}
	};
	($.$bog_tracker_mpit_neolo_parent_child_task_row) = class $bog_tracker_mpit_neolo_parent_child_task_row extends ($.$mol_view) {
		Dot(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child_task_dot();
			(obj.status) = () => ((this.status()));
			return obj;
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		Meta(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.desc())]);
			return obj;
		}
		Info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Title()), (this.Meta())]);
			return obj;
		}
		Date_view(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.date())]);
			return obj;
		}
		title(){
			return "";
		}
		desc(){
			return "";
		}
		date(){
			return "";
		}
		status(){
			return "pending";
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_parent_child_task_row_status": (this.status())};
		}
		sub(){
			return [
				(this.Dot()), 
				(this.Info()), 
				(this.Date_view())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child_task_row.prototype), "Dot"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child_task_row.prototype), "Title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child_task_row.prototype), "Meta"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child_task_row.prototype), "Info"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_child_task_row.prototype), "Date_view"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function task_status_kind(task) {
            const s = task.status()?.val() ?? '';
            if (s === 'done')
                return 'done';
            if (s === 'rejected')
                return 'rejected';
            if (s === 'review')
                return 'review';
            if (s === 'progress')
                return 'progress';
            const date = task.date()?.val() ?? '';
            if (date) {
                const today = new Date().toISOString().slice(0, 10);
                if (date < today)
                    return 'overdue';
            }
            return 'pending';
        }
        class $bog_tracker_mpit_neolo_parent_child extends $.$bog_tracker_mpit_neolo_parent_child {
            children_list() {
                return this.children();
            }
            current_child() {
                const id = this.child_id();
                return this.children_list().find(c => String(c.id) === id) ?? null;
            }
            avatar_letter() {
                const c = this.current_child();
                return (c?.name?.[0] ?? '?').toUpperCase();
            }
            child_name() {
                const c = this.current_child();
                if (!c)
                    return 'Ребёнок';
                return `${c.name} ${c.surname}`.trim();
            }
            child_meta() {
                const c = this.current_child();
                if (!c)
                    return '';
                return `@${c.username} · ID: ${c.id} · ${c.school || '—'}`;
            }
            child_tasks() {
                const c = this.current_child();
                if (!c)
                    return [];
                const all = this.store().tasks_all();
                return all.filter(t => {
                    const oid = t.owner_id()?.val();
                    return oid !== null && oid !== undefined && Number(oid) === c.id;
                });
            }
            task_ids() {
                return this.child_tasks().map((_, i) => String(i));
            }
            task(key) {
                return this.child_tasks()[Number(key)] ?? null;
            }
            task_title(key) {
                return this.task(key)?.title()?.val() ?? '';
            }
            task_desc(key) {
                return this.task(key)?.desc()?.val() ?? '';
            }
            task_date(key) {
                return this.task(key)?.date()?.val() ?? '';
            }
            task_status(key) {
                const t = this.task(key);
                return t ? task_status_kind(t) : 'pending';
            }
            stat_total() {
                return String(this.child_tasks().length);
            }
            stats_by_kind() {
                const out = {
                    done: 0, progress: 0, review: 0, overdue: 0, pending: 0, rejected: 0,
                };
                for (const t of this.child_tasks()) {
                    const k = task_status_kind(t);
                    out[k] = (out[k] ?? 0) + 1;
                }
                return out;
            }
            stat_done() { return String(this.stats_by_kind().done ?? 0); }
            stat_progress() { return String(this.stats_by_kind().progress ?? 0); }
            stat_review() { return String(this.stats_by_kind().review ?? 0); }
            stat_overdue() { return String(this.stats_by_kind().overdue ?? 0); }
            stat_pending() { return String(this.stats_by_kind().pending ?? 0); }
            task_rows() {
                if (this.child_tasks().length === 0)
                    return [this.Task_empty()];
                return this.task_ids().map(id => this.Task_row(id));
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "children_list", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "current_child", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "avatar_letter", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "child_name", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "child_meta", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "task_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "task_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "task_desc", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "task_date", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "task_status", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "stat_total", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "stats_by_kind", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "stat_done", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "stat_progress", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "stat_review", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "stat_overdue", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "stat_pending", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_child.prototype, "task_rows", null);
        $$.$bog_tracker_mpit_neolo_parent_child = $bog_tracker_mpit_neolo_parent_child;
        class $bog_tracker_mpit_neolo_parent_child_stat extends $.$bog_tracker_mpit_neolo_parent_child_stat {
        }
        $$.$bog_tracker_mpit_neolo_parent_child_stat = $bog_tracker_mpit_neolo_parent_child_stat;
        class $bog_tracker_mpit_neolo_parent_child_task_dot extends $.$bog_tracker_mpit_neolo_parent_child_task_dot {
        }
        $$.$bog_tracker_mpit_neolo_parent_child_task_dot = $bog_tracker_mpit_neolo_parent_child_task_dot;
        class $bog_tracker_mpit_neolo_parent_child_task_row extends $.$bog_tracker_mpit_neolo_parent_child_task_row {
        }
        $$.$bog_tracker_mpit_neolo_parent_child_task_row = $bog_tracker_mpit_neolo_parent_child_task_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_parent_child, {
        display: 'flex',
        flex: { direction: 'column', grow: 1 },
        gap: '16px',
        color: t.g0,
        Back_btn: {
            align: { self: 'flex-start' },
            background: { color: '#ffffff1a' },
            color: t.g0,
            padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
            borderRadius: '10px',
            font: { weight: 'bold' },
        },
        Header: {
            display: 'flex',
            align: { items: 'center' },
            gap: '16px',
            padding: { top: '16px', bottom: '16px', left: '20px', right: '20px' },
            background: { color: '#ffffff1a' },
            borderRadius: '16px',
        },
        Avatar: {
            width: '72px',
            height: '72px',
            borderRadius: '999px',
            background: {
                image: [[`linear-gradient(135deg, ${t.p1}, ${t.p2})`]],
            },
            color: t.g0,
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
            font: {
                size: '32px',
                weight: 'bold',
            },
            flex: { shrink: 0 },
        },
        Info: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '4px',
            minWidth: 0,
        },
        Name: {
            font: {
                size: '22px',
                weight: 'bold',
            },
        },
        Meta: {
            font: { size: '13px' },
            color: '#ffffffb3',
        },
        Create_task_btn: {
            background: { color: t.g0 },
            color: t.p2,
            padding: { top: '10px', bottom: '10px', left: '18px', right: '18px' },
            borderRadius: '12px',
            font: { weight: 'bold' },
        },
        Stats: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '10px',
        },
        Section_title: {
            font: {
                size: '18px',
                weight: 'bold',
            },
            color: t.g0,
            padding: { top: '6px' },
        },
        Tasks_list: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '8px',
        },
        Task_empty: {
            padding: { top: '28px', bottom: '28px', left: '16px', right: '16px' },
            background: { color: '#ffffff12' },
            borderRadius: '14px',
            color: '#ffffffa6',
            textAlign: 'center',
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_child_stat, {
        display: 'flex',
        flex: { direction: 'column' },
        align: { items: 'center' },
        padding: { top: '14px', bottom: '14px', left: '10px', right: '10px' },
        background: { color: '#ffffff1a' },
        borderRadius: '12px',
        color: t.g0,
        Stat_num: {
            font: {
                size: '28px',
                weight: 'bold',
            },
        },
        Stat_lbl: {
            font: { size: '12px' },
            color: '#ffffffb3',
        },
        '@': {
            bog_tracker_mpit_neolo_parent_child_stat_kind: {
                done: { color: t.g4 },
                progress: { color: t.blue },
                review: { color: t.orange_text },
                overdue: { color: t.red },
                pending: { color: t.gold },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_child_task_dot, {
        width: '10px',
        height: '10px',
        minWidth: '10px',
        borderRadius: '999px',
        background: { color: t.gold },
        '@': {
            bog_tracker_mpit_neolo_parent_child_task_dot_status: {
                done: { background: { color: t.g4 } },
                overdue: { background: { color: t.red } },
                pending: { background: { color: t.gold } },
                progress: { background: { color: t.blue } },
                review: { background: { color: t.orange } },
                rejected: { background: { color: t.red } },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_child_task_row, {
        display: 'flex',
        align: { items: 'center' },
        gap: '12px',
        padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
        background: { color: '#ffffff1a' },
        borderRadius: '12px',
        color: t.g0,
        Info: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '2px',
            minWidth: 0,
        },
        Title: {
            font: {
                size: '15px',
                weight: 'bold',
            },
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: { x: 'hidden' },
        },
        Meta: {
            font: { size: '12px' },
            color: '#ffffffb3',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: { x: 'hidden' },
        },
        Date_view: {
            font: { size: '13px' },
            color: '#ffffffcc',
            whiteSpace: 'nowrap',
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_parent_children extends $.$bog_tracker_mpit_neolo_parent_children {
            children_list() {
                return this.children();
            }
            child_ids() {
                return this.children_list().map(c => String(c.id));
            }
            has_children() {
                return this.children_list().length > 0;
            }
            count_label() {
                const n = this.children_list().length;
                const word = n === 1 ? 'ребёнок' : (n < 5 ? 'ребёнка' : 'детей');
                return `${n} ${word}`;
            }
            child(id) {
                return this.children_list().find(c => String(c.id) === id) ?? null;
            }
            child_initial(id) {
                const c = this.child(id);
                return (c?.name?.[0] ?? '?').toUpperCase();
            }
            child_name(id) {
                const c = this.child(id);
                if (!c)
                    return '';
                return `${c.name} ${c.surname}`.trim();
            }
            child_meta(id) {
                const c = this.child(id);
                if (!c)
                    return '';
                return `@${c.username} · ${c.school || '—'}`;
            }
            card_open(id, next) {
                if (next !== undefined) {
                    this.open_child(id);
                }
                return null;
            }
            card_remove(id, next) {
                if (next !== undefined) {
                    if (!confirm('Удалить ребёнка из списка?'))
                        return null;
                    this.remove_child(id);
                }
                return null;
            }
            cards() {
                if (!this.has_children())
                    return [];
                return this.child_ids().map(id => this.Card(id));
            }
            rows() {
                if (!this.has_children())
                    return [this.Empty()];
                return [this.Header_bar(), this.Grid()];
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "children_list", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "child_ids", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "has_children", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "count_label", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "child", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "child_initial", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "child_name", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "child_meta", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "card_open", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "card_remove", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "cards", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_children.prototype, "rows", null);
        $$.$bog_tracker_mpit_neolo_parent_children = $bog_tracker_mpit_neolo_parent_children;
        class $bog_tracker_mpit_neolo_parent_children_card extends $.$bog_tracker_mpit_neolo_parent_children_card {
        }
        $$.$bog_tracker_mpit_neolo_parent_children_card = $bog_tracker_mpit_neolo_parent_children_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_parent_children, {
        display: 'flex',
        flex: { direction: 'column', grow: 1 },
        gap: '16px',
        Header_bar: {
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'space-between' },
            padding: { top: '12px', bottom: '12px', left: '16px', right: '16px' },
            background: { color: '#ffffff1a' },
            borderRadius: '14px',
            color: t.g0,
        },
        Count_label: {
            font: {
                size: '15px',
                weight: 'bold',
            },
            color: '#ffffffb3',
        },
        Add_btn: {
            background: { color: t.g0 },
            color: t.p2,
            padding: { top: '10px', bottom: '10px', left: '18px', right: '18px' },
            borderRadius: '12px',
            font: { weight: 'bold' },
        },
        Empty: {
            display: 'flex',
            flex: { direction: 'column' },
            align: { items: 'center' },
            justify: { content: 'center' },
            padding: { top: '60px', bottom: '60px', left: '20px', right: '20px' },
            gap: '12px',
            color: t.g0,
            textAlign: 'center',
        },
        Empty_icon: {
            font: { size: '64px' },
        },
        Empty_text: {
            font: {
                size: '20px',
                weight: 'bold',
            },
        },
        Empty_sub: {
            font: { size: '14px' },
            color: '#ffffffb3',
            maxWidth: '360px',
        },
        Empty_add_btn: {
            background: { color: t.g0 },
            color: t.p2,
            padding: { top: '12px', bottom: '12px', left: '20px', right: '20px' },
            borderRadius: '12px',
            font: { weight: 'bold' },
            margin: { top: '12px' },
        },
        Grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_children_card, {
        position: 'relative',
        display: 'flex',
        background: { color: '#ffffff1f' },
        borderRadius: '16px',
        padding: { top: '16px', bottom: '16px', left: '16px', right: '16px' },
        color: t.g0,
        Card_body: {
            display: 'flex',
            align: { items: 'center' },
            gap: '14px',
            flex: { grow: 1 },
            background: { color: 'transparent' },
            color: t.g0,
            padding: 0,
            textAlign: 'left',
        },
        Avatar: {
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            background: {
                image: [[`linear-gradient(135deg, ${t.p1}, ${t.p2})`]],
            },
            color: t.g0,
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
            font: {
                size: '20px',
                weight: 'bold',
            },
            flex: { shrink: 0 },
        },
        Info: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '4px',
            minWidth: 0,
        },
        Name: {
            font: {
                size: '16px',
                weight: 'bold',
            },
            color: t.g0,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: { x: 'hidden' },
        },
        Meta: {
            font: { size: '13px' },
            color: '#ffffffb3',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: { x: 'hidden' },
        },
        Remove_btn: {
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '28px',
            height: '28px',
            minWidth: '28px',
            padding: 0,
            borderRadius: '999px',
            background: { color: '#ffffff2e' },
            color: t.g0,
            font: {
                size: '16px',
                weight: 'bold',
            },
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_parent_calendar) = class $bog_tracker_mpit_neolo_parent_calendar extends ($.$mol_view) {
		prev_month_click(next){
			if(next !== undefined) return next;
			return null;
		}
		prev_label(){
			return "‹";
		}
		Prev_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.prev_month_click(next)));
			(obj.sub) = () => ([(this.prev_label())]);
			return obj;
		}
		month_label(){
			return "";
		}
		Month_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.month_label())]);
			return obj;
		}
		next_month_click(next){
			if(next !== undefined) return next;
			return null;
		}
		next_label(){
			return "›";
		}
		Next_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.next_month_click(next)));
			(obj.sub) = () => ([(this.next_label())]);
			return obj;
		}
		Nav(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Prev_btn()), 
				(this.Month_label()), 
				(this.Next_btn())
			]);
			return obj;
		}
		Toolbar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Nav())]);
			return obj;
		}
		Wd_mon(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Пн"]);
			return obj;
		}
		Wd_tue(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Вт"]);
			return obj;
		}
		Wd_wed(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Ср"]);
			return obj;
		}
		Wd_thu(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Чт"]);
			return obj;
		}
		Wd_fri(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Пт"]);
			return obj;
		}
		Wd_sat(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Сб"]);
			return obj;
		}
		Wd_sun(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Вс"]);
			return obj;
		}
		Weekdays(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Wd_mon()), 
				(this.Wd_tue()), 
				(this.Wd_wed()), 
				(this.Wd_thu()), 
				(this.Wd_fri()), 
				(this.Wd_sat()), 
				(this.Wd_sun())
			]);
			return obj;
		}
		day_label(id){
			return "";
		}
		day_count(id){
			return "";
		}
		day_state(id){
			return "empty";
		}
		cell_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Day_cell(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_calendar_day();
			(obj.day_label) = () => ((this.day_label(id)));
			(obj.count) = () => ((this.day_count(id)));
			(obj.state) = () => ((this.day_state(id)));
			(obj.click) = (next) => ((this.cell_click(id, next)));
			return obj;
		}
		day_cells(){
			return [(this.Day_cell(id))];
		}
		Grid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.day_cells()));
			return obj;
		}
		Selected_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Задания на день"]);
			return obj;
		}
		selected_date_label(){
			return "";
		}
		Selected_date_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.selected_date_label())]);
			return obj;
		}
		Selected_empty(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["На выбранный день задач нет."]);
			return obj;
		}
		selected_task_time(id){
			return "";
		}
		Selected_task_time(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.selected_task_time(id))]);
			return obj;
		}
		selected_task_title(id){
			return "";
		}
		Selected_task_title(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.selected_task_title(id))]);
			return obj;
		}
		selected_task_meta(id){
			return "";
		}
		Selected_task_meta(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.selected_task_meta(id))]);
			return obj;
		}
		Selected_task_info(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Selected_task_title(id)), (this.Selected_task_meta(id))]);
			return obj;
		}
		Selected_task(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Selected_task_time(id)), (this.Selected_task_info(id))]);
			return obj;
		}
		selected_tasks_rows(){
			return [(this.Selected_empty()), (this.Selected_task(id))];
		}
		Selected_tasks(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.selected_tasks_rows()));
			return obj;
		}
		Selected_info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Selected_title()), 
				(this.Selected_date_label()), 
				(this.Selected_tasks())
			]);
			return obj;
		}
		Upcoming_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Ближайшие события"]);
			return obj;
		}
		Upcoming_empty(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Нет предстоящих заданий"]);
			return obj;
		}
		Event_dot(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([]);
			return obj;
		}
		event_body(id){
			return "";
		}
		Event_body(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.event_body(id))]);
			return obj;
		}
		Event_row(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Event_dot(id)), (this.Event_body(id))]);
			return obj;
		}
		upcoming_rows(){
			return [(this.Upcoming_empty()), (this.Event_row(id))];
		}
		Upcoming_list(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.upcoming_rows()));
			return obj;
		}
		Upcoming_info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Upcoming_title()), (this.Upcoming_list())]);
			return obj;
		}
		Bottom(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Selected_info()), (this.Upcoming_info())]);
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		children(){
			return [];
		}
		view_year(next){
			if(next !== undefined) return next;
			return 2026;
		}
		view_month(next){
			if(next !== undefined) return next;
			return 0;
		}
		selected_date(next){
			if(next !== undefined) return next;
			return "";
		}
		day_click(next){
			if(next !== undefined) return next;
			return "";
		}
		day_ids(){
			return [];
		}
		event_ids(){
			return [];
		}
		sub(){
			return [
				(this.Toolbar()), 
				(this.Weekdays()), 
				(this.Grid()), 
				(this.Bottom())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "prev_month_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Prev_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Month_label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "next_month_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Next_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Nav"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Toolbar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Wd_mon"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Wd_tue"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Wd_wed"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Wd_thu"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Wd_fri"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Wd_sat"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Wd_sun"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Weekdays"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "cell_click"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Day_cell"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Grid"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_date_label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_empty"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_task_time"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_task_title"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_task_meta"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_task_info"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_task"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_tasks"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Selected_info"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Upcoming_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Upcoming_empty"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Event_dot"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Event_body"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Event_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Upcoming_list"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Upcoming_info"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "Bottom"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "view_year"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "view_month"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "selected_date"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar.prototype), "day_click"));
	($.$bog_tracker_mpit_neolo_parent_calendar_day) = class $bog_tracker_mpit_neolo_parent_calendar_day extends ($.$mol_button_minor) {
		Day_number(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.day_label())]);
			return obj;
		}
		Day_badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.count())]);
			return obj;
		}
		day_label(){
			return "";
		}
		count(){
			return "0";
		}
		state(){
			return "empty";
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_parent_calendar_day_state": (this.state())};
		}
		sub(){
			return [(this.Day_number()), (this.Day_badge())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar_day.prototype), "Day_number"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar_day.prototype), "Day_badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_calendar_day.prototype), "click"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const month_names = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
        ];
        function today_iso() {
            return new Date().toISOString().slice(0, 10);
        }
        function format_date_ru(iso) {
            if (!iso)
                return '';
            try {
                return new Date(iso + 'T12:00:00').toLocaleDateString('ru-RU', {
                    day: 'numeric', month: 'long', year: 'numeric',
                });
            }
            catch {
                return iso;
            }
        }
        class $bog_tracker_mpit_neolo_parent_calendar extends $.$bog_tracker_mpit_neolo_parent_calendar {
            view_year(next) {
                const cur = super.view_year(next);
                if (cur !== null && cur !== undefined)
                    return cur;
                return new Date().getFullYear();
            }
            view_month(next) {
                const cur = super.view_month(next);
                if (cur !== null && cur !== undefined)
                    return cur;
                return new Date().getMonth();
            }
            selected_date(next) {
                const cur = super.selected_date(next);
                return cur || today_iso();
            }
            children_list() {
                return this.children();
            }
            all_tasks() {
                const ids = new Set(this.children_list().map(c => c.id));
                return this.store().tasks_all().filter(t => {
                    const oid = t.owner_id()?.val();
                    return oid !== null && oid !== undefined && ids.has(Number(oid));
                });
            }
            tasks_by_date() {
                const out = new Map();
                for (const t of this.all_tasks()) {
                    const d = t.date()?.val() ?? '';
                    if (!d)
                        continue;
                    let arr = out.get(d);
                    if (!arr) {
                        arr = [];
                        out.set(d, arr);
                    }
                    arr.push(t);
                }
                return out;
            }
            month_label() {
                return `${month_names[this.view_month()]} ${this.view_year()}`;
            }
            prev_month_click(next) {
                if (next !== undefined) {
                    let m = this.view_month() - 1;
                    let y = this.view_year();
                    if (m < 0) {
                        m = 11;
                        y -= 1;
                    }
                    this.view_month(m);
                    this.view_year(y);
                }
                return null;
            }
            next_month_click(next) {
                if (next !== undefined) {
                    let m = this.view_month() + 1;
                    let y = this.view_year();
                    if (m > 11) {
                        m = 0;
                        y += 1;
                    }
                    this.view_month(m);
                    this.view_year(y);
                }
                return null;
            }
            day_ids() {
                const y = this.view_year();
                const m = this.view_month();
                const first = new Date(y, m, 1);
                const offset = (first.getDay() + 6) % 7;
                const days = new Date(y, m + 1, 0).getDate();
                const ids = [];
                for (let i = 0; i < offset; i++)
                    ids.push('pad-' + i);
                for (let d = 1; d <= days; d++) {
                    const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                    ids.push('day-' + iso);
                }
                return ids;
            }
            cell_iso(id) {
                return id.startsWith('day-') ? id.slice(4) : '';
            }
            day_label(id) {
                const iso = this.cell_iso(id);
                if (!iso)
                    return '';
                return String(Number(iso.slice(8, 10)));
            }
            day_count(id) {
                const iso = this.cell_iso(id);
                if (!iso)
                    return '';
                const n = this.tasks_by_date().get(iso)?.length ?? 0;
                return n > 0 ? String(n) : '';
            }
            day_state(id) {
                const iso = this.cell_iso(id);
                if (!iso)
                    return 'empty';
                if (iso === this.selected_date())
                    return 'selected';
                if (iso === today_iso())
                    return 'today';
                return 'day';
            }
            cell_click(id, next) {
                if (next !== undefined) {
                    const iso = this.cell_iso(id);
                    if (iso)
                        this.selected_date(iso);
                }
                return null;
            }
            day_cells() {
                return this.day_ids().map(id => this.Day_cell(id));
            }
            selected_date_label() {
                return format_date_ru(this.selected_date());
            }
            selected_tasks() {
                const iso = this.selected_date();
                const children_by_id = new Map(this.children_list().map(c => [c.id, c]));
                const out = [];
                for (const t of this.tasks_by_date().get(iso) ?? []) {
                    const oid = t.owner_id()?.val();
                    const cid = oid !== null && oid !== undefined ? Number(oid) : 0;
                    const c = children_by_id.get(cid);
                    out.push({ task: t, child_name: c?.name ?? '' });
                }
                out.sort((a, b) => (a.task.time()?.val() ?? '').localeCompare(b.task.time()?.val() ?? ''));
                return out;
            }
            selected_task_count() {
                return this.selected_tasks().length;
            }
            selected_tasks_rows() {
                if (this.selected_task_count() === 0)
                    return [this.Selected_empty()];
                const ids = this.selected_tasks().map((_, i) => String(i));
                return ids.map(id => this.Selected_task(id));
            }
            selected_task_time(id) {
                return this.selected_tasks()[Number(id)]?.task.time()?.val() ?? '—';
            }
            selected_task_title(id) {
                return this.selected_tasks()[Number(id)]?.task.title()?.val() ?? '';
            }
            selected_task_meta(id) {
                const item = this.selected_tasks()[Number(id)];
                if (!item)
                    return '';
                return `${item.task.desc()?.val() ?? ''} · ${item.child_name}`;
            }
            upcoming_events() {
                const children_by_id = new Map(this.children_list().map(c => [c.id, c]));
                const items = this.all_tasks().map(t => {
                    const oid = t.owner_id()?.val();
                    const cid = oid !== null && oid !== undefined ? Number(oid) : 0;
                    return { task: t, child_name: children_by_id.get(cid)?.name ?? '' };
                });
                items.sort((a, b) => {
                    const da = (a.task.date()?.val() ?? '') + 'T' + (a.task.time()?.val() ?? '');
                    const db = (b.task.date()?.val() ?? '') + 'T' + (b.task.time()?.val() ?? '');
                    return da.localeCompare(db);
                });
                return items.slice(0, 6);
            }
            upcoming_count() {
                return this.upcoming_events().length;
            }
            event_ids() {
                return this.upcoming_events().map((_, i) => String(i));
            }
            upcoming_rows() {
                if (this.upcoming_count() === 0)
                    return [this.Upcoming_empty()];
                return this.event_ids().map(id => this.Event_row(id));
            }
            event_body(id) {
                const item = this.upcoming_events()[Number(id)];
                if (!item)
                    return '';
                const date = item.task.date()?.val() ?? '';
                const time = item.task.time()?.val() ?? '—';
                const title = item.task.title()?.val() ?? '';
                let label = '';
                if (date) {
                    try {
                        label = new Date(date + 'T12:00:00').toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
                    }
                    catch {
                        label = date;
                    }
                }
                return `${label} · ${time} — ${title} (${item.child_name})`;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "view_year", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "view_month", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "selected_date", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "children_list", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "month_label", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "prev_month_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "next_month_click", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "day_ids", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "cell_iso", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "day_label", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "day_count", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "day_state", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "cell_click", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "day_cells", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "selected_date_label", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "selected_task_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "selected_tasks_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "selected_task_time", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "selected_task_title", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "selected_task_meta", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "upcoming_count", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "event_ids", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "upcoming_rows", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_calendar.prototype, "event_body", null);
        $$.$bog_tracker_mpit_neolo_parent_calendar = $bog_tracker_mpit_neolo_parent_calendar;
        class $bog_tracker_mpit_neolo_parent_calendar_day extends $.$bog_tracker_mpit_neolo_parent_calendar_day {
        }
        $$.$bog_tracker_mpit_neolo_parent_calendar_day = $bog_tracker_mpit_neolo_parent_calendar_day;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_parent_calendar, {
        display: 'flex',
        flex: { direction: 'column', grow: 1 },
        gap: '12px',
        color: t.g0,
        Toolbar: {
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'space-between' },
            padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
            background: { color: '#ffffff1a' },
            borderRadius: '14px',
        },
        Nav: {
            display: 'flex',
            align: { items: 'center' },
            gap: '10px',
        },
        Prev_btn: {
            background: { color: '#ffffff26' },
            color: t.g0,
            minWidth: '36px',
            height: '36px',
            padding: 0,
            borderRadius: '10px',
            font: { size: '18px', weight: 'bold' },
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
        },
        Next_btn: {
            background: { color: '#ffffff26' },
            color: t.g0,
            minWidth: '36px',
            height: '36px',
            padding: 0,
            borderRadius: '10px',
            font: { size: '18px', weight: 'bold' },
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
        },
        Month_label: {
            font: {
                size: '18px',
                weight: 'bold',
            },
            color: t.g0,
            minWidth: '180px',
            textAlign: 'center',
        },
        Weekdays: {
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '4px',
            padding: { top: '4px', bottom: '4px', left: '4px', right: '4px' },
            $mol_view: {
                font: { size: '12px', weight: 'bold' },
                color: '#ffffffb3',
                textAlign: 'center',
            },
        },
        Grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '4px',
        },
        Bottom: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
        },
        Selected_info: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '8px',
            padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
            background: { color: '#ffffff1a' },
            borderRadius: '14px',
        },
        Upcoming_info: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '8px',
            padding: { top: '14px', bottom: '14px', left: '16px', right: '16px' },
            background: { color: '#ffffff1a' },
            borderRadius: '14px',
        },
        Selected_title: {
            font: { size: '16px', weight: 'bold' },
        },
        Upcoming_title: {
            font: { size: '16px', weight: 'bold' },
        },
        Selected_date_label: {
            font: { size: '15px' },
            color: '#ffffffcc',
        },
        Selected_empty: {
            padding: { top: '12px', bottom: '12px', left: '14px', right: '14px' },
            background: { color: '#ffffff12' },
            borderRadius: '10px',
            color: '#ffffffa6',
            font: { size: '14px' },
        },
        Upcoming_empty: {
            padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
            color: '#ffffff80',
            font: { size: '14px' },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_calendar_day, {
        display: 'flex',
        flex: { direction: 'column' },
        align: { items: 'center' },
        justify: { content: 'space-between' },
        padding: { top: '6px', bottom: '6px', left: '4px', right: '4px' },
        minHeight: '52px',
        background: { color: '#ffffff12' },
        borderRadius: '8px',
        color: t.g0,
        font: { size: '14px' },
        cursor: 'pointer',
        Day_number: {
            font: { size: '14px', weight: 'bold' },
        },
        Day_badge: {
            font: { size: '10px', weight: 'bold' },
            color: t.p2,
            background: { color: t.gold },
            padding: { top: '1px', bottom: '1px', left: '6px', right: '6px' },
            borderRadius: '999px',
            minWidth: '18px',
            textAlign: 'center',
        },
        '@': {
            bog_tracker_mpit_neolo_parent_calendar_day_state: {
                empty: { visibility: 'hidden', background: { color: 'transparent' } },
                day: {},
                today: {
                    background: { color: '#ffffff33' },
                    border: { width: '2px', style: 'solid', color: t.gold },
                },
                selected: {
                    background: { color: t.gold },
                    color: t.p2,
                },
            },
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_parent_profile) = class $bog_tracker_mpit_neolo_parent_profile extends ($.$mol_view) {
		Card_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Личный кабинет"]);
			return obj;
		}
		profile_name(){
			return "";
		}
		Row_name(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_profile_row();
			(obj.label) = () => ("Имя");
			(obj.value) = () => ((this.profile_name()));
			return obj;
		}
		profile_surname_or_dash(){
			return "";
		}
		Row_surname(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_profile_row();
			(obj.label) = () => ("Фамилия");
			(obj.value) = () => ((this.profile_surname_or_dash()));
			return obj;
		}
		profile_username_at(){
			return "";
		}
		Row_username(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_profile_row();
			(obj.label) = () => ("Логин");
			(obj.value) = () => ((this.profile_username_at()));
			return obj;
		}
		Row_role(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_profile_row();
			(obj.label) = () => ("Роль");
			(obj.value) = () => ("👨‍👩‍👧 Родитель");
			return obj;
		}
		profile_id(){
			return "";
		}
		Row_id(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_profile_row();
			(obj.label) = () => ("ID");
			(obj.value) = () => ((this.profile_id()));
			return obj;
		}
		Table(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Row_name()), 
				(this.Row_surname()), 
				(this.Row_username()), 
				(this.Row_role()), 
				(this.Row_id())
			]);
			return obj;
		}
		Card(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Card_title()), (this.Table())]);
			return obj;
		}
		Manage_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Управление детьми"]);
			return obj;
		}
		Children_empty(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Нет добавленных детей"]);
			return obj;
		}
		child_initial(id){
			return "";
		}
		child_name(id){
			return "";
		}
		child_meta(id){
			return "";
		}
		child_remove(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Child_row(id){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_profile_child_row();
			(obj.initial) = () => ((this.child_initial(id)));
			(obj.name) = () => ((this.child_name(id)));
			(obj.meta) = () => ((this.child_meta(id)));
			(obj.remove) = (next) => ((this.child_remove(id, next)));
			return obj;
		}
		children_rows(){
			return [(this.Children_empty()), (this.Child_row(id))];
		}
		Children_block(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.children_rows()));
			return obj;
		}
		open_add(next){
			if(next !== undefined) return next;
			return null;
		}
		add_label(){
			return "+ Добавить ребёнка";
		}
		Add_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.open_add(next)));
			(obj.sub) = () => ([(this.add_label())]);
			return obj;
		}
		Manage(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Manage_title()), 
				(this.Children_block()), 
				(this.Add_btn())
			]);
			return obj;
		}
		profile_surname(){
			return "";
		}
		profile_username(){
			return "";
		}
		children(){
			return [];
		}
		remove_child(next){
			if(next !== undefined) return next;
			return "";
		}
		child_ids(){
			return [];
		}
		sub(){
			return [(this.Card()), (this.Manage())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Card_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Row_name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Row_surname"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Row_username"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Row_role"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Row_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Table"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Card"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Manage_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Children_empty"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "child_remove"));
	($mol_mem_key(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Child_row"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Children_block"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "open_add"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Add_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "Manage"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile.prototype), "remove_child"));
	($.$bog_tracker_mpit_neolo_parent_profile_row) = class $bog_tracker_mpit_neolo_parent_profile_row extends ($.$mol_view) {
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label())]);
			return obj;
		}
		Value(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value())]);
			return obj;
		}
		label(){
			return "";
		}
		value(){
			return "";
		}
		sub(){
			return [(this.Label()), (this.Value())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile_row.prototype), "Label"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile_row.prototype), "Value"));
	($.$bog_tracker_mpit_neolo_parent_profile_child_row) = class $bog_tracker_mpit_neolo_parent_profile_child_row extends ($.$mol_view) {
		Avatar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.initial())]);
			return obj;
		}
		Name(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.name())]);
			return obj;
		}
		Meta(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.meta())]);
			return obj;
		}
		Info(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Name()), (this.Meta())]);
			return obj;
		}
		remove(next){
			if(next !== undefined) return next;
			return null;
		}
		remove_label(){
			return "Удалить";
		}
		Remove_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.remove(next)));
			(obj.sub) = () => ([(this.remove_label())]);
			return obj;
		}
		initial(){
			return "";
		}
		name(){
			return "";
		}
		meta(){
			return "";
		}
		sub(){
			return [
				(this.Avatar()), 
				(this.Info()), 
				(this.Remove_btn())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile_child_row.prototype), "Avatar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile_child_row.prototype), "Name"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile_child_row.prototype), "Meta"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile_child_row.prototype), "Info"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile_child_row.prototype), "remove"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_profile_child_row.prototype), "Remove_btn"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo_parent_profile extends $.$bog_tracker_mpit_neolo_parent_profile {
            children_list() {
                return this.children();
            }
            child_ids() {
                return this.children_list().map(c => String(c.id));
            }
            has_children() {
                return this.children_list().length > 0;
            }
            profile_surname_or_dash() {
                return this.profile_surname() || '—';
            }
            profile_username_at() {
                const u = this.profile_username();
                return u ? '@' + u : '';
            }
            child(id) {
                return this.children_list().find(c => String(c.id) === id) ?? null;
            }
            child_initial(id) {
                const c = this.child(id);
                return (c?.name?.[0] ?? '?').toUpperCase();
            }
            child_name(id) {
                const c = this.child(id);
                if (!c)
                    return '';
                return `${c.name} ${c.surname}`.trim();
            }
            child_meta(id) {
                const c = this.child(id);
                if (!c)
                    return '';
                return `@${c.username} · ID: ${c.id}`;
            }
            child_remove(id, next) {
                if (next !== undefined) {
                    if (!confirm('Удалить ребёнка из списка?'))
                        return null;
                    this.remove_child(id);
                }
                return null;
            }
            children_rows() {
                if (!this.has_children())
                    return [this.Children_empty()];
                return this.child_ids().map(id => this.Child_row(id));
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "children_list", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "child_ids", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "profile_surname_or_dash", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "profile_username_at", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "child", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "child_initial", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "child_name", null);
        __decorate([
            $mol_mem_key
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "child_meta", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "child_remove", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_profile.prototype, "children_rows", null);
        $$.$bog_tracker_mpit_neolo_parent_profile = $bog_tracker_mpit_neolo_parent_profile;
        class $bog_tracker_mpit_neolo_parent_profile_row extends $.$bog_tracker_mpit_neolo_parent_profile_row {
        }
        $$.$bog_tracker_mpit_neolo_parent_profile_row = $bog_tracker_mpit_neolo_parent_profile_row;
        class $bog_tracker_mpit_neolo_parent_profile_child_row extends $.$bog_tracker_mpit_neolo_parent_profile_child_row {
        }
        $$.$bog_tracker_mpit_neolo_parent_profile_child_row = $bog_tracker_mpit_neolo_parent_profile_child_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_parent_profile, {
        display: 'flex',
        flex: { direction: 'column' },
        gap: '20px',
        color: t.g0,
        maxWidth: '600px',
        Card: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '14px',
            padding: { top: '20px', bottom: '20px', left: '22px', right: '22px' },
            background: { color: '#ffffff1a' },
            borderRadius: '18px',
        },
        Card_title: {
            font: {
                size: '20px',
                weight: 'bold',
            },
            color: t.g0,
        },
        Table: {
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            gap: '10px',
        },
        Manage: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '12px',
        },
        Manage_title: {
            font: {
                size: '16px',
                weight: 'bold',
            },
            color: t.g0,
        },
        Children_block: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '10px',
        },
        Children_empty: {
            color: '#ffffffb3',
            font: { size: '14px' },
        },
        Add_btn: {
            align: { self: 'flex-start' },
            background: { color: t.g0 },
            color: t.p2,
            padding: { top: '10px', bottom: '10px', left: '18px', right: '18px' },
            borderRadius: '12px',
            font: { weight: 'bold' },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_profile_row, {
        display: 'contents',
        Label: {
            font: {
                size: '13px',
                weight: 'bold',
            },
            color: '#ffffffb3',
        },
        Value: {
            font: {
                size: '14px',
                weight: 'bold',
            },
            color: t.g0,
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_profile_child_row, {
        display: 'flex',
        align: { items: 'center' },
        gap: '12px',
        padding: { top: '12px', bottom: '12px', left: '16px', right: '16px' },
        background: { color: '#ffffff1a' },
        borderRadius: '12px',
        color: t.g0,
        Avatar: {
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            background: {
                image: [[`linear-gradient(135deg, ${t.p1}, ${t.p2})`]],
            },
            color: t.g0,
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
            font: { weight: 'bold' },
            flex: { shrink: 0 },
        },
        Info: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '2px',
            minWidth: 0,
        },
        Name: {
            font: { weight: 'bold' },
            color: t.g0,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: { x: 'hidden' },
        },
        Meta: {
            font: { size: '12px' },
            color: '#ffffffb3',
        },
        Remove_btn: {
            background: { color: '#ffffff26' },
            color: t.g0,
            padding: { top: '6px', bottom: '6px', left: '12px', right: '12px' },
            borderRadius: '10px',
            font: { size: '12px', weight: 'bold' },
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo_parent) = class $bog_tracker_mpit_neolo_parent extends ($.$mol_view) {
		Brand_em(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Plan"]);
			return obj;
		}
		Brand_badge(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Родитель"]);
			return obj;
		}
		Brand(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				"School", 
				(this.Brand_em()), 
				(this.Brand_badge())
			]);
			return obj;
		}
		logout_click(next){
			if(next !== undefined) return next;
			return null;
		}
		logout_label(){
			return "↪ Выход";
		}
		Logout_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.logout_click(next)));
			(obj.sub) = () => ([(this.logout_label())]);
			return obj;
		}
		Topbar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Brand()), (this.Logout_btn())]);
			return obj;
		}
		screen_title(){
			return "Мои дети";
		}
		Screen_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.screen_title())]);
			return obj;
		}
		active_screen(){
			return null;
		}
		Screen_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.active_screen())]);
			return obj;
		}
		Main(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Screen_title()), (this.Screen_content())]);
			return obj;
		}
		side_children_selected(){
			return true;
		}
		goto_children(next){
			if(next !== undefined) return next;
			return null;
		}
		Side_children(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_side_item();
			(obj.icon) = () => ("👨‍👩‍👧");
			(obj.label) = () => ("Дети");
			(obj.selected) = () => ((this.side_children_selected()));
			(obj.click) = (next) => ((this.goto_children(next)));
			return obj;
		}
		side_calendar_selected(){
			return false;
		}
		goto_calendar(next){
			if(next !== undefined) return next;
			return null;
		}
		Side_calendar(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_side_item();
			(obj.icon) = () => ("🗓");
			(obj.label) = () => ("Календарь");
			(obj.selected) = () => ((this.side_calendar_selected()));
			(obj.click) = (next) => ((this.goto_calendar(next)));
			return obj;
		}
		side_profile_selected(){
			return false;
		}
		goto_profile(next){
			if(next !== undefined) return next;
			return null;
		}
		Side_profile(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_side_item();
			(obj.icon) = () => ("👤");
			(obj.label) = () => ("Кабинет");
			(obj.selected) = () => ((this.side_profile_selected()));
			(obj.click) = (next) => ((this.goto_profile(next)));
			return obj;
		}
		Side_stack(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Side_children()), 
				(this.Side_calendar()), 
				(this.Side_profile())
			]);
			return obj;
		}
		side_id(){
			return "";
		}
		Side_id(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.side_id())]);
			return obj;
		}
		Side_footer(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Side_id())]);
			return obj;
		}
		Sidebar(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Side_stack()), (this.Side_footer())]);
			return obj;
		}
		Layout(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Main()), (this.Sidebar())]);
			return obj;
		}
		add_child_modal_open(next){
			if(next !== undefined) return next;
			return false;
		}
		add_child_id(next){
			if(next !== undefined) return next;
			return "";
		}
		add_child_result(next){
			if(next !== undefined) return next;
			return "";
		}
		add_child_result_kind(next){
			if(next !== undefined) return next;
			return "";
		}
		add_child_submit(next){
			if(next !== undefined) return next;
			return null;
		}
		add_child_close(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_child_modal(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_add_child_modal();
			(obj.open) = () => ((this.add_child_modal_open()));
			(obj.id_input) = (next) => ((this.add_child_id(next)));
			(obj.result) = () => ((this.add_child_result()));
			(obj.result_kind) = () => ((this.add_child_result_kind()));
			(obj.submit) = (next) => ((this.add_child_submit(next)));
			(obj.close) = (next) => ((this.add_child_close(next)));
			return obj;
		}
		children_summaries(){
			return [];
		}
		children_open_child(next){
			if(next !== undefined) return next;
			return "";
		}
		open_add_child_modal(next){
			if(next !== undefined) return next;
			return null;
		}
		children_remove_child(next){
			if(next !== undefined) return next;
			return "";
		}
		Children_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_children();
			(obj.children) = () => ((this.children_summaries()));
			(obj.open_child) = (next) => ((this.children_open_child(next)));
			(obj.open_add) = (next) => ((this.open_add_child_modal(next)));
			(obj.remove_child) = (next) => ((this.children_remove_child(next)));
			return obj;
		}
		open_child_id(next){
			if(next !== undefined) return next;
			return "";
		}
		back_to_children(next){
			if(next !== undefined) return next;
			return null;
		}
		create_task_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Child_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_child();
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			(obj.child_id) = () => ((this.open_child_id()));
			(obj.children) = () => ((this.children_summaries()));
			(obj.back) = (next) => ((this.back_to_children(next)));
			(obj.create_task) = (next) => ((this.create_task_click(next)));
			return obj;
		}
		Calendar_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_calendar();
			(obj.store) = () => ((this.store()));
			(obj.children) = () => ((this.children_summaries()));
			return obj;
		}
		profile_name(){
			return "";
		}
		profile_surname(){
			return "";
		}
		profile_username(){
			return "";
		}
		profile_id(){
			return "";
		}
		Profile_screen(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent_profile();
			(obj.profile_name) = () => ((this.profile_name()));
			(obj.profile_surname) = () => ((this.profile_surname()));
			(obj.profile_username) = () => ((this.profile_username()));
			(obj.profile_id) = () => ((this.profile_id()));
			(obj.children) = () => ((this.children_summaries()));
			(obj.open_add) = (next) => ((this.open_add_child_modal(next)));
			(obj.remove_child) = (next) => ((this.children_remove_child(next)));
			return obj;
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		screen_id(next){
			if(next !== undefined) return next;
			return "children";
		}
		sub(){
			return [
				(this.Topbar()), 
				(this.Layout()), 
				(this.Add_child_modal()), 
				(this.Children_screen()), 
				(this.Child_screen()), 
				(this.Calendar_screen()), 
				(this.Profile_screen())
			];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Brand_em"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Brand_badge"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Brand"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "logout_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Logout_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Topbar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Screen_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Screen_content"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Main"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "goto_children"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Side_children"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "goto_calendar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Side_calendar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "goto_profile"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Side_profile"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Side_stack"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Side_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Side_footer"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Sidebar"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Layout"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "add_child_modal_open"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "add_child_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "add_child_result"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "add_child_result_kind"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "add_child_submit"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "add_child_close"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Add_child_modal"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "children_open_child"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "open_add_child_modal"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "children_remove_child"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Children_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "open_child_id"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "back_to_children"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "create_task_click"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Child_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Calendar_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "Profile_screen"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "api"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent.prototype), "screen_id"));
	($.$bog_tracker_mpit_neolo_parent_side_item) = class $bog_tracker_mpit_neolo_parent_side_item extends ($.$mol_button_minor) {
		Side_circle(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.icon())]);
			return obj;
		}
		Side_label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.label())]);
			return obj;
		}
		icon(){
			return "";
		}
		label(){
			return "";
		}
		selected(){
			return false;
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_parent_side_item_selected": (this.selected())};
		}
		sub(){
			return [(this.Side_circle()), (this.Side_label())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_side_item.prototype), "Side_circle"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_side_item.prototype), "Side_label"));
	($.$bog_tracker_mpit_neolo_parent_add_child_modal) = class $bog_tracker_mpit_neolo_parent_add_child_modal extends ($.$mol_view) {
		Head_title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Добавить ребёнка"]);
			return obj;
		}
		close(next){
			if(next !== undefined) return next;
			return null;
		}
		close_label(){
			return "×";
		}
		Close_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.close(next)));
			(obj.sub) = () => ([(this.close_label())]);
			return obj;
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Head_title()), (this.Close_btn())]);
			return obj;
		}
		Hint(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => (["Введите ID ребёнка. Ребёнок найдёт свой ID в разделе «Кабинет» → поле «ID»."]);
			return obj;
		}
		id_input(next){
			if(next !== undefined) return next;
			return "";
		}
		Id_input(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_parent_add_child_modal_Id_input_hint")));
			(obj.value) = (next) => ((this.id_input(next)));
			return obj;
		}
		Id_field(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$bog_tracker_mpit_neolo_parent_add_child_modal_Id_field_title")));
			(obj.content) = () => ([(this.Id_input())]);
			return obj;
		}
		Result_view(){
			const obj = new this.$.$mol_view();
			(obj.attr) = () => ({...(this.$.$mol_view.prototype.attr.call(obj)), "bog_tracker_mpit_neolo_parent_add_child_modal_result_kind": (this.result_kind())});
			(obj.sub) = () => ([(this.result())]);
			return obj;
		}
		cancel_label(){
			return "Отмена";
		}
		Cancel_btn(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.close(next)));
			(obj.sub) = () => ([(this.cancel_label())]);
			return obj;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_label(){
			return "Добавить";
		}
		Submit_btn(){
			const obj = new this.$.$mol_button_major();
			(obj.click) = (next) => ((this.submit(next)));
			(obj.sub) = () => ([(this.submit_label())]);
			return obj;
		}
		Actions(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Cancel_btn()), (this.Submit_btn())]);
			return obj;
		}
		Dialog(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Head()), 
				(this.Hint()), 
				(this.Id_field()), 
				(this.Result_view()), 
				(this.Actions())
			]);
			return obj;
		}
		Backdrop(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Dialog())]);
			return obj;
		}
		open(next){
			if(next !== undefined) return next;
			return false;
		}
		result(){
			return "";
		}
		result_kind(){
			return "";
		}
		attr(){
			return {...(super.attr()), "bog_tracker_mpit_neolo_parent_add_child_modal_open": (this.open())};
		}
		sub(){
			return [(this.Backdrop())];
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Head_title"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "close"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Close_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Head"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Hint"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "id_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Id_input"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Id_field"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Result_view"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Cancel_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "submit"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Submit_btn"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Actions"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Dialog"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "Backdrop"));
	($mol_mem(($.$bog_tracker_mpit_neolo_parent_add_child_modal.prototype), "open"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function encode_child(c) {
            return [
                String(c.id),
                c.username,
                c.name,
                c.surname,
                c.school,
            ].join('|');
        }
        function decode_child(raw) {
            const parts = raw.split('|');
            if (parts.length < 2)
                return null;
            const id = Number(parts[0]);
            if (!Number.isFinite(id))
                return null;
            return {
                id,
                username: parts[1] ?? '',
                name: parts[2] ?? '',
                surname: parts[3] ?? '',
                school: parts[4] ?? '',
            };
        }
        class $bog_tracker_mpit_neolo_parent extends $.$bog_tracker_mpit_neolo_parent {
            screen_id(next) {
                return super.screen_id(next) ?? 'children';
            }
            open_child_id(next) {
                return super.open_child_id(next) ?? '';
            }
            add_child_modal_open(next) {
                return super.add_child_modal_open(next) ?? false;
            }
            add_child_id(next) {
                return super.add_child_id(next) ?? '';
            }
            add_child_result(next) {
                return super.add_child_result(next) ?? '';
            }
            add_child_result_kind(next) {
                return super.add_child_result_kind(next) ?? '';
            }
            profile_name() {
                return this.store().profile()?.name()?.val() ?? '';
            }
            profile_surname() {
                return this.store().profile()?.surname()?.val() ?? '';
            }
            profile_username() {
                return this.store().profile()?.username()?.val() ?? '';
            }
            profile_id() {
                const id = this.store().profile()?.user_id()?.val();
                return id !== null && id !== undefined ? String(id) : '';
            }
            children_raw_list() {
                const profile = this.store().profile();
                if (!profile)
                    return [];
                return (profile.children_ids()?.items() ?? []).filter((s) => !!s);
            }
            children_summaries() {
                const out = [];
                for (const raw of this.children_raw_list()) {
                    const c = decode_child(raw);
                    if (c)
                        out.push(c);
                }
                return out;
            }
            side_id() {
                const id = this.profile_id();
                return id ? 'ID: ' + id : '';
            }
            screen_title() {
                const id = this.open_child_id();
                if (id) {
                    const c = this.children_summaries().find(ch => String(ch.id) === id);
                    return c ? `${c.name} ${c.surname}`.trim() : 'Ребёнок';
                }
                const s = this.screen_id();
                if (s === 'calendar')
                    return 'Календарь заданий';
                if (s === 'profile')
                    return 'Личный кабинет';
                return 'Мои дети';
            }
            side_children_selected() {
                return this.screen_id() === 'children';
            }
            side_calendar_selected() {
                return this.screen_id() === 'calendar';
            }
            side_profile_selected() {
                return this.screen_id() === 'profile';
            }
            goto_children(next) {
                if (next !== undefined) {
                    this.screen_id('children');
                    this.open_child_id('');
                }
                return null;
            }
            goto_calendar(next) {
                if (next !== undefined) {
                    this.screen_id('calendar');
                    this.open_child_id('');
                }
                return null;
            }
            goto_profile(next) {
                if (next !== undefined) {
                    this.screen_id('profile');
                    this.open_child_id('');
                }
                return null;
            }
            logout_click(next) {
                if (next !== undefined) {
                    try {
                        localStorage.clear();
                    }
                    catch { }
                    location.reload();
                }
                return null;
            }
            children_open_child(next) {
                if (next !== undefined && next) {
                    this.open_child_id(next);
                    this.screen_id('children');
                }
                return '';
            }
            children_remove_child(next) {
                if (next !== undefined && next) {
                    this.do_remove_child(next);
                }
                return '';
            }
            do_remove_child(child_id) {
                const profile = this.store().profile();
                if (!profile)
                    return;
                const list = profile.children_ids(null);
                if (!list)
                    return;
                for (const raw of this.children_raw_list()) {
                    const c = decode_child(raw);
                    if (c && String(c.id) === child_id) {
                        list.cut(raw);
                    }
                }
            }
            back_to_children(next) {
                if (next !== undefined) {
                    this.open_child_id('');
                    this.screen_id('children');
                }
                return null;
            }
            open_add_child_modal(next) {
                if (next !== undefined) {
                    this.add_child_id('');
                    this.add_child_result('');
                    this.add_child_result_kind('');
                    this.add_child_modal_open(true);
                }
                return null;
            }
            add_child_close(next) {
                if (next !== undefined) {
                    this.add_child_modal_open(false);
                }
                return null;
            }
            add_child_submit(next) {
                if (next === undefined)
                    return null;
                this.do_add_child();
                return null;
            }
            do_add_child() {
                const raw = this.add_child_id().trim();
                if (!raw) {
                    this.add_child_result('Введите ID ребёнка');
                    this.add_child_result_kind('error');
                    return;
                }
                const id = Number(raw);
                if (!Number.isFinite(id) || id <= 0) {
                    this.add_child_result('Некорректный ID');
                    this.add_child_result_kind('error');
                    return;
                }
                const already = this.children_summaries().some(c => c.id === id);
                if (already) {
                    this.add_child_result('Этот ребёнок уже добавлен');
                    this.add_child_result_kind('warn');
                    return;
                }
                const profile = this.store().profile();
                if (!profile) {
                    this.add_child_result('Профиль не найден');
                    this.add_child_result_kind('error');
                    return;
                }
                const summary = {
                    id,
                    username: 'user' + id,
                    name: 'Ребёнок',
                    surname: '#' + id,
                    school: '',
                };
                profile.children_ids(null).add(encode_child(summary));
                this.add_child_result(`Добавлен: ${summary.name} ${summary.surname} (ID ${id})`);
                this.add_child_result_kind('ok');
                setTimeout(() => {
                    try {
                        this.add_child_modal_open(false);
                    }
                    catch { }
                }, 1200);
            }
            create_task_click(next) {
                if (next !== undefined) {
                }
                return null;
            }
            active_screen() {
                if (this.open_child_id())
                    return this.Child_screen();
                const s = this.screen_id();
                if (s === 'calendar')
                    return this.Calendar_screen();
                if (s === 'profile')
                    return this.Profile_screen();
                return this.Children_screen();
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "screen_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "open_child_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "add_child_modal_open", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "add_child_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "add_child_result", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "add_child_result_kind", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "profile_name", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "profile_surname", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "profile_username", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "profile_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "children_raw_list", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "children_summaries", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "side_id", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "screen_title", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "side_children_selected", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "side_calendar_selected", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "side_profile_selected", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "goto_children", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "goto_calendar", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "goto_profile", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "logout_click", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "children_open_child", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "children_remove_child", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "back_to_children", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "open_add_child_modal", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "add_child_close", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "add_child_submit", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "do_add_child", null);
        __decorate([
            $mol_action
        ], $bog_tracker_mpit_neolo_parent.prototype, "create_task_click", null);
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent.prototype, "active_screen", null);
        $$.$bog_tracker_mpit_neolo_parent = $bog_tracker_mpit_neolo_parent;
        class $bog_tracker_mpit_neolo_parent_side_item extends $.$bog_tracker_mpit_neolo_parent_side_item {
        }
        $$.$bog_tracker_mpit_neolo_parent_side_item = $bog_tracker_mpit_neolo_parent_side_item;
        class $bog_tracker_mpit_neolo_parent_add_child_modal extends $.$bog_tracker_mpit_neolo_parent_add_child_modal {
            open(next) {
                return super.open(next) ?? false;
            }
        }
        __decorate([
            $mol_mem
        ], $bog_tracker_mpit_neolo_parent_add_child_modal.prototype, "open", null);
        $$.$bog_tracker_mpit_neolo_parent_add_child_modal = $bog_tracker_mpit_neolo_parent_add_child_modal;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo_parent, {
        display: 'flex',
        flex: { direction: 'column' },
        minHeight: '100vh',
        color: t.g0,
        background: {
            image: [[`linear-gradient(135deg, ${t.p1} 0%, ${t.p2} 100%)`]],
        },
        Topbar: {
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'space-between' },
            padding: { top: '14px', bottom: '14px', left: '24px', right: '24px' },
            background: { color: '#ffffff22' },
            color: t.g0,
        },
        Brand: {
            display: 'flex',
            align: { items: 'center' },
            font: {
                family: '"Segoe UI", Arial, sans-serif',
                size: '22px',
                weight: 'bold',
            },
        },
        Brand_em: {
            font: {
                weight: 'bold',
                style: 'italic',
            },
            color: t.gold,
        },
        Brand_badge: {
            font: {
                size: '14px',
                weight: 'bold',
            },
            color: t.p2,
            background: { color: '#ffffff' },
            padding: { top: '3px', bottom: '3px', left: '10px', right: '10px' },
            borderRadius: '8px',
            margin: { left: '10px' },
        },
        Logout_btn: {
            background: { color: '#ffffff1a' },
            color: t.g0,
            padding: { top: '8px', bottom: '8px', left: '14px', right: '14px' },
            borderRadius: '10px',
            font: { weight: 'bold' },
        },
        Layout: {
            display: 'flex',
            flex: { direction: 'row', grow: 1 },
            padding: { top: '20px', bottom: '20px', left: '24px', right: '24px' },
            gap: '20px',
        },
        Main: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
            gap: '16px',
            minWidth: 0,
        },
        Screen_title: {
            font: {
                size: '28px',
                weight: 'bold',
            },
            color: t.g0,
            padding: { bottom: '8px' },
        },
        Screen_content: {
            display: 'flex',
            flex: { direction: 'column', grow: 1 },
        },
        Sidebar: {
            display: 'flex',
            flex: { direction: 'column', shrink: 0 },
            justify: { content: 'space-between' },
            minWidth: '120px',
            maxWidth: '120px',
            padding: { top: '16px', bottom: '16px', left: '12px', right: '12px' },
            background: {
                image: [[`linear-gradient(180deg, ${t.p1} 0%, ${t.p2} 100%)`]],
            },
            borderRadius: '18px',
            box: {
                shadow: [{ x: 0, y: '8px', blur: '24px', spread: 0, color: '#00000033' }],
            },
        },
        Side_stack: {
            display: 'flex',
            flex: { direction: 'column' },
            gap: '12px',
        },
        Side_footer: {
            padding: { top: '12px' },
        },
        Side_id: {
            font: {
                size: '11px',
                weight: 'bold',
            },
            color: '#ffffffb3',
            textAlign: 'center',
        },
        Add_child_modal: {
            pointerEvents: 'none',
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_side_item, {
        display: 'flex',
        flex: { direction: 'column' },
        align: { items: 'center' },
        gap: '4px',
        padding: { top: '10px', bottom: '10px', left: '6px', right: '6px' },
        borderRadius: '12px',
        background: { color: 'transparent' },
        color: t.g0,
        cursor: 'pointer',
        Side_circle: {
            width: '40px',
            height: '40px',
            borderRadius: '999px',
            background: { color: '#ffffff33' },
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
            font: { size: '20px' },
            color: t.g0,
        },
        Side_label: {
            font: {
                size: '12px',
                weight: 'bold',
            },
            color: t.g0,
        },
        '@': {
            bog_tracker_mpit_neolo_parent_side_item_selected: {
                true: {
                    background: { color: '#ffffff26' },
                },
            },
        },
    });
    $mol_style_define($bog_tracker_mpit_neolo_parent_add_child_modal, {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'none',
        align: { items: 'center' },
        justify: { content: 'center' },
        zIndex: 1000,
        Backdrop: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: { color: '#00000099' },
            display: 'flex',
            align: { items: 'center' },
            justify: { content: 'center' },
        },
        Dialog: {
            background: { color: t.g0 },
            color: t.b0,
            padding: { top: '24px', bottom: '24px', left: '24px', right: '24px' },
            borderRadius: t.radius_base,
            minWidth: '360px',
            maxWidth: '520px',
            display: 'flex',
            flex: { direction: 'column' },
            gap: '14px',
            box: {
                shadow: [{ x: 0, y: '20px', blur: '60px', spread: 0, color: '#00000099' }],
            },
        },
        Head: {
            display: 'flex',
            justify: { content: 'space-between' },
            align: { items: 'center' },
        },
        Head_title: {
            font: {
                size: '18px',
                weight: 'bold',
            },
        },
        Hint: {
            font: { size: '13px' },
            color: t.b3,
        },
        Result_view: {
            font: {
                size: '14px',
                weight: 'bold',
            },
            padding: { top: '10px', bottom: '10px', left: '14px', right: '14px' },
            borderRadius: '10px',
            display: 'none',
            '@': {
                bog_tracker_mpit_neolo_parent_add_child_modal_result_kind: {
                    ok: {
                        display: 'block',
                        background: { color: '#e4f7eb' },
                        color: t.g6,
                    },
                    error: {
                        display: 'block',
                        background: { color: t.red_soft },
                        color: t.red,
                    },
                    warn: {
                        display: 'block',
                        background: { color: t.yellow },
                        color: t.yellow_text,
                    },
                },
            },
        },
        Actions: {
            display: 'flex',
            justify: { content: 'flex-end' },
            gap: '10px',
        },
        '@': {
            bog_tracker_mpit_neolo_parent_add_child_modal_open: {
                true: {
                    display: 'flex',
                },
            },
        },
    });
})($ || ($ = {}));

;
	($.$bog_tracker_mpit_neolo) = class $bog_tracker_mpit_neolo extends ($.$mol_view) {
		Auth(){
			const obj = new this.$.$bog_tracker_mpit_neolo_auth();
			(obj.store) = () => ((this.store()));
			return obj;
		}
		Student(){
			const obj = new this.$.$bog_tracker_mpit_neolo_student();
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			return obj;
		}
		Teacher(){
			const obj = new this.$.$bog_tracker_mpit_neolo_teacher();
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			return obj;
		}
		Parent(){
			const obj = new this.$.$bog_tracker_mpit_neolo_parent();
			(obj.store) = () => ((this.store()));
			(obj.api) = () => ((this.api()));
			return obj;
		}
		active_view(){
			return null;
		}
		title(){
			return "SchoolPlan";
		}
		store(){
			const obj = new this.$.$bog_tracker_mpit_neolo_store();
			return obj;
		}
		api(){
			const obj = new this.$.$bog_tracker_mpit_neolo_api();
			return obj;
		}
		profile(){
			return null;
		}
		auth_view(){
			return (this.Auth());
		}
		student_view(){
			return (this.Student());
		}
		teacher_view(){
			return (this.Teacher());
		}
		parent_view(){
			return (this.Parent());
		}
		sub(){
			return [(this.active_view())];
		}
		attr(){
			return {"mol_theme": "$mol_theme_light"};
		}
	};
	($mol_mem(($.$bog_tracker_mpit_neolo.prototype), "Auth"));
	($mol_mem(($.$bog_tracker_mpit_neolo.prototype), "Student"));
	($mol_mem(($.$bog_tracker_mpit_neolo.prototype), "Teacher"));
	($mol_mem(($.$bog_tracker_mpit_neolo.prototype), "Parent"));
	($mol_mem(($.$bog_tracker_mpit_neolo.prototype), "store"));
	($mol_mem(($.$bog_tracker_mpit_neolo.prototype), "api"));


;
"use strict";
var $;
(function ($) {
    function $mol_offline() { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $bog_tracker_mpit_neolo extends $.$bog_tracker_mpit_neolo {
            profile() {
                try {
                    return this.store().profile();
                }
                catch (e) {
                    if (e instanceof Promise)
                        $mol_fail_hidden(e);
                    return null;
                }
            }
            active_view() {
                const profile = this.profile();
                if (!profile)
                    return this.Auth();
                const role = profile.role()?.val() ?? '';
                if (role === 'teacher')
                    return this.Teacher();
                if (role === 'parent')
                    return this.Parent();
                return this.Student();
            }
        }
        $$.$bog_tracker_mpit_neolo = $bog_tracker_mpit_neolo;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const t = $bog_tracker_mpit_neolo_tokens;
    $mol_style_define($bog_tracker_mpit_neolo, {
        display: 'block',
        minHeight: '100vh',
        font: {
            family: '"Segoe UI", Arial, sans-serif',
        },
        background: { color: t.g1 },
        color: t.b0,
    });
})($ || ($ = {}));


//# sourceMappingURL=node.js.map
