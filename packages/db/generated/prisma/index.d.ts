
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model Balance
 * 
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>
/**
 * Model OnRampTranstion
 * 
 */
export type OnRampTranstion = $Result.DefaultSelection<Prisma.$OnRampTranstionPayload>
/**
 * Model p2pTransactions
 * 
 */
export type p2pTransactions = $Result.DefaultSelection<Prisma.$p2pTransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthType: {
  Google: 'Google',
  Github: 'Github'
};

export type AuthType = (typeof AuthType)[keyof typeof AuthType]


export const OnRampStatus: {
  Success: 'Success',
  Failed: 'Failed',
  Processing: 'Processing'
};

export type OnRampStatus = (typeof OnRampStatus)[keyof typeof OnRampStatus]

}

export type AuthType = $Enums.AuthType

export const AuthType: typeof $Enums.AuthType

export type OnRampStatus = $Enums.OnRampStatus

export const OnRampStatus: typeof $Enums.OnRampStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.onRampTranstion`: Exposes CRUD operations for the **OnRampTranstion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OnRampTranstions
    * const onRampTranstions = await prisma.onRampTranstion.findMany()
    * ```
    */
  get onRampTranstion(): Prisma.OnRampTranstionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.p2pTransactions`: Exposes CRUD operations for the **p2pTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more P2pTransactions
    * const p2pTransactions = await prisma.p2pTransactions.findMany()
    * ```
    */
  get p2pTransactions(): Prisma.p2pTransactionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Merchant: 'Merchant',
    Balance: 'Balance',
    OnRampTranstion: 'OnRampTranstion',
    p2pTransactions: 'p2pTransactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "merchant" | "balance" | "onRampTranstion" | "p2pTransactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MerchantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      Balance: {
        payload: Prisma.$BalancePayload<ExtArgs>
        fields: Prisma.BalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findFirst: {
            args: Prisma.BalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findMany: {
            args: Prisma.BalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          create: {
            args: Prisma.BalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          createMany: {
            args: Prisma.BalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          delete: {
            args: Prisma.BalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          update: {
            args: Prisma.BalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          deleteMany: {
            args: Prisma.BalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          upsert: {
            args: Prisma.BalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.BalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      OnRampTranstion: {
        payload: Prisma.$OnRampTranstionPayload<ExtArgs>
        fields: Prisma.OnRampTranstionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnRampTranstionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnRampTranstionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>
          }
          findFirst: {
            args: Prisma.OnRampTranstionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnRampTranstionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>
          }
          findMany: {
            args: Prisma.OnRampTranstionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>[]
          }
          create: {
            args: Prisma.OnRampTranstionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>
          }
          createMany: {
            args: Prisma.OnRampTranstionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnRampTranstionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>[]
          }
          delete: {
            args: Prisma.OnRampTranstionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>
          }
          update: {
            args: Prisma.OnRampTranstionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>
          }
          deleteMany: {
            args: Prisma.OnRampTranstionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnRampTranstionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OnRampTranstionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>[]
          }
          upsert: {
            args: Prisma.OnRampTranstionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTranstionPayload>
          }
          aggregate: {
            args: Prisma.OnRampTranstionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnRampTranstion>
          }
          groupBy: {
            args: Prisma.OnRampTranstionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnRampTranstionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnRampTranstionCountArgs<ExtArgs>
            result: $Utils.Optional<OnRampTranstionCountAggregateOutputType> | number
          }
        }
      }
      p2pTransactions: {
        payload: Prisma.$p2pTransactionsPayload<ExtArgs>
        fields: Prisma.p2pTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.p2pTransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.p2pTransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>
          }
          findFirst: {
            args: Prisma.p2pTransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.p2pTransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>
          }
          findMany: {
            args: Prisma.p2pTransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>[]
          }
          create: {
            args: Prisma.p2pTransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>
          }
          createMany: {
            args: Prisma.p2pTransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.p2pTransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>[]
          }
          delete: {
            args: Prisma.p2pTransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>
          }
          update: {
            args: Prisma.p2pTransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.p2pTransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.p2pTransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.p2pTransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>[]
          }
          upsert: {
            args: Prisma.p2pTransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$p2pTransactionsPayload>
          }
          aggregate: {
            args: Prisma.P2pTransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateP2pTransactions>
          }
          groupBy: {
            args: Prisma.p2pTransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<P2pTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.p2pTransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<P2pTransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    merchant?: MerchantOmit
    balance?: BalanceOmit
    onRampTranstion?: OnRampTranstionOmit
    p2pTransactions?: p2pTransactionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Balance: number
    onRampTranstion: number
    sentTransactions: number
    receivedTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | UserCountOutputTypeCountBalanceArgs
    onRampTranstion?: boolean | UserCountOutputTypeCountOnRampTranstionArgs
    sentTransactions?: boolean | UserCountOutputTypeCountSentTransactionsArgs
    receivedTransactions?: boolean | UserCountOutputTypeCountReceivedTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOnRampTranstionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnRampTranstionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransactionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    number: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    number: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    number: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    number?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    number?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    number?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string | null
    number: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    number?: boolean
    password?: boolean
    Balance?: boolean | User$BalanceArgs<ExtArgs>
    onRampTranstion?: boolean | User$onRampTranstionArgs<ExtArgs>
    sentTransactions?: boolean | User$sentTransactionsArgs<ExtArgs>
    receivedTransactions?: boolean | User$receivedTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    number?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    number?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    number?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "number" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | User$BalanceArgs<ExtArgs>
    onRampTranstion?: boolean | User$onRampTranstionArgs<ExtArgs>
    sentTransactions?: boolean | User$sentTransactionsArgs<ExtArgs>
    receivedTransactions?: boolean | User$receivedTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Balance: Prisma.$BalancePayload<ExtArgs>[]
      onRampTranstion: Prisma.$OnRampTranstionPayload<ExtArgs>[]
      sentTransactions: Prisma.$p2pTransactionsPayload<ExtArgs>[]
      receivedTransactions: Prisma.$p2pTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      number: string | null
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Balance<T extends User$BalanceArgs<ExtArgs> = {}>(args?: Subset<T, User$BalanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    onRampTranstion<T extends User$onRampTranstionArgs<ExtArgs> = {}>(args?: Subset<T, User$onRampTranstionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentTransactions<T extends User$sentTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedTransactions<T extends User$receivedTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Balance
   */
  export type User$BalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    cursor?: BalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * User.onRampTranstion
   */
  export type User$onRampTranstionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    where?: OnRampTranstionWhereInput
    orderBy?: OnRampTranstionOrderByWithRelationInput | OnRampTranstionOrderByWithRelationInput[]
    cursor?: OnRampTranstionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OnRampTranstionScalarFieldEnum | OnRampTranstionScalarFieldEnum[]
  }

  /**
   * User.sentTransactions
   */
  export type User$sentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    where?: p2pTransactionsWhereInput
    orderBy?: p2pTransactionsOrderByWithRelationInput | p2pTransactionsOrderByWithRelationInput[]
    cursor?: p2pTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransactionsScalarFieldEnum | P2pTransactionsScalarFieldEnum[]
  }

  /**
   * User.receivedTransactions
   */
  export type User$receivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    where?: p2pTransactionsWhereInput
    orderBy?: p2pTransactionsOrderByWithRelationInput | p2pTransactionsOrderByWithRelationInput[]
    cursor?: p2pTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2pTransactionsScalarFieldEnum | P2pTransactionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantAvgAggregateOutputType = {
    id: number | null
  }

  export type MerchantSumAggregateOutputType = {
    id: number | null
  }

  export type MerchantMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    auth_type: $Enums.AuthType | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    auth_type: $Enums.AuthType | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    email: number
    name: number
    auth_type: number
    _all: number
  }


  export type MerchantAvgAggregateInputType = {
    id?: true
  }

  export type MerchantSumAggregateInputType = {
    id?: true
  }

  export type MerchantMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    auth_type?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    auth_type?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    auth_type?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _avg?: MerchantAvgAggregateInputType
    _sum?: MerchantSumAggregateInputType
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: number
    email: string
    name: string
    auth_type: $Enums.AuthType
    _count: MerchantCountAggregateOutputType | null
    _avg: MerchantAvgAggregateOutputType | null
    _sum: MerchantSumAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    auth_type?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    auth_type?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    auth_type?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    auth_type?: boolean
  }

  export type MerchantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "auth_type", ExtArgs["result"]["merchant"]>

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      auth_type: $Enums.AuthType
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants and returns the data updated in the database.
     * @param {MerchantUpdateManyAndReturnArgs} args - Arguments to update many Merchants.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MerchantUpdateManyAndReturnArgs>(args: SelectSubset<T, MerchantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Merchant model
   */
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'Int'>
    readonly email: FieldRef<"Merchant", 'String'>
    readonly name: FieldRef<"Merchant", 'String'>
    readonly auth_type: FieldRef<"Merchant", 'AuthType'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to update.
     */
    limit?: number
  }

  /**
   * Merchant updateManyAndReturn
   */
  export type MerchantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to update.
     */
    limit?: number
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to delete.
     */
    limit?: number
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
  }


  /**
   * Model Balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    locked: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithAggregationInput | BalanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: number
    userId: number
    amount: number
    locked: number
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
  }

  export type BalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "locked", ExtArgs["result"]["balance"]>
  export type BalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      locked: number
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type BalanceGetPayload<S extends boolean | null | undefined | BalanceDefaultArgs> = $Result.GetResult<Prisma.$BalancePayload, S>

  type BalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balance'], meta: { name: 'Balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceFindUniqueArgs>(args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceFindFirstArgs>(args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceFindManyArgs>(args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends BalanceCreateArgs>(args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCreateManyArgs>(args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends BalanceDeleteArgs>(args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceUpdateArgs>(args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceDeleteManyArgs>(args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceUpdateManyArgs>(args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {BalanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends BalanceUpsertArgs>(args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balance model
   */
  readonly fields: BalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Balance model
   */
  interface BalanceFieldRefs {
    readonly id: FieldRef<"Balance", 'Int'>
    readonly userId: FieldRef<"Balance", 'Int'>
    readonly amount: FieldRef<"Balance", 'Int'>
    readonly locked: FieldRef<"Balance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Balance findUnique
   */
  export type BalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findFirst
   */
  export type BalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance create
   */
  export type BalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
  }

  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balance createManyAndReturn
   */
  export type BalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance update
   */
  export type BalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balance updateManyAndReturn
   */
  export type BalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
  }

  /**
   * Balance delete
   */
  export type BalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to delete.
     */
    limit?: number
  }

  /**
   * Balance without action
   */
  export type BalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
  }


  /**
   * Model OnRampTranstion
   */

  export type AggregateOnRampTranstion = {
    _count: OnRampTranstionCountAggregateOutputType | null
    _avg: OnRampTranstionAvgAggregateOutputType | null
    _sum: OnRampTranstionSumAggregateOutputType | null
    _min: OnRampTranstionMinAggregateOutputType | null
    _max: OnRampTranstionMaxAggregateOutputType | null
  }

  export type OnRampTranstionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type OnRampTranstionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type OnRampTranstionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    status: $Enums.OnRampStatus | null
    startTime: Date | null
    token: string | null
  }

  export type OnRampTranstionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    status: $Enums.OnRampStatus | null
    startTime: Date | null
    token: string | null
  }

  export type OnRampTranstionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    status: number
    startTime: number
    token: number
    _all: number
  }


  export type OnRampTranstionAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type OnRampTranstionSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type OnRampTranstionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    startTime?: true
    token?: true
  }

  export type OnRampTranstionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    startTime?: true
    token?: true
  }

  export type OnRampTranstionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    status?: true
    startTime?: true
    token?: true
    _all?: true
  }

  export type OnRampTranstionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnRampTranstion to aggregate.
     */
    where?: OnRampTranstionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTranstions to fetch.
     */
    orderBy?: OnRampTranstionOrderByWithRelationInput | OnRampTranstionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnRampTranstionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTranstions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTranstions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OnRampTranstions
    **/
    _count?: true | OnRampTranstionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OnRampTranstionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OnRampTranstionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnRampTranstionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnRampTranstionMaxAggregateInputType
  }

  export type GetOnRampTranstionAggregateType<T extends OnRampTranstionAggregateArgs> = {
        [P in keyof T & keyof AggregateOnRampTranstion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnRampTranstion[P]>
      : GetScalarType<T[P], AggregateOnRampTranstion[P]>
  }




  export type OnRampTranstionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnRampTranstionWhereInput
    orderBy?: OnRampTranstionOrderByWithAggregationInput | OnRampTranstionOrderByWithAggregationInput[]
    by: OnRampTranstionScalarFieldEnum[] | OnRampTranstionScalarFieldEnum
    having?: OnRampTranstionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnRampTranstionCountAggregateInputType | true
    _avg?: OnRampTranstionAvgAggregateInputType
    _sum?: OnRampTranstionSumAggregateInputType
    _min?: OnRampTranstionMinAggregateInputType
    _max?: OnRampTranstionMaxAggregateInputType
  }

  export type OnRampTranstionGroupByOutputType = {
    id: number
    userId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date
    token: string
    _count: OnRampTranstionCountAggregateOutputType | null
    _avg: OnRampTranstionAvgAggregateOutputType | null
    _sum: OnRampTranstionSumAggregateOutputType | null
    _min: OnRampTranstionMinAggregateOutputType | null
    _max: OnRampTranstionMaxAggregateOutputType | null
  }

  type GetOnRampTranstionGroupByPayload<T extends OnRampTranstionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnRampTranstionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnRampTranstionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnRampTranstionGroupByOutputType[P]>
            : GetScalarType<T[P], OnRampTranstionGroupByOutputType[P]>
        }
      >
    >


  export type OnRampTranstionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    startTime?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTranstion"]>

  export type OnRampTranstionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    startTime?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTranstion"]>

  export type OnRampTranstionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    startTime?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTranstion"]>

  export type OnRampTranstionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    startTime?: boolean
    token?: boolean
  }

  export type OnRampTranstionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "status" | "startTime" | "token", ExtArgs["result"]["onRampTranstion"]>
  export type OnRampTranstionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnRampTranstionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnRampTranstionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OnRampTranstionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OnRampTranstion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      status: $Enums.OnRampStatus
      startTime: Date
      token: string
    }, ExtArgs["result"]["onRampTranstion"]>
    composites: {}
  }

  type OnRampTranstionGetPayload<S extends boolean | null | undefined | OnRampTranstionDefaultArgs> = $Result.GetResult<Prisma.$OnRampTranstionPayload, S>

  type OnRampTranstionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OnRampTranstionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OnRampTranstionCountAggregateInputType | true
    }

  export interface OnRampTranstionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OnRampTranstion'], meta: { name: 'OnRampTranstion' } }
    /**
     * Find zero or one OnRampTranstion that matches the filter.
     * @param {OnRampTranstionFindUniqueArgs} args - Arguments to find a OnRampTranstion
     * @example
     * // Get one OnRampTranstion
     * const onRampTranstion = await prisma.onRampTranstion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnRampTranstionFindUniqueArgs>(args: SelectSubset<T, OnRampTranstionFindUniqueArgs<ExtArgs>>): Prisma__OnRampTranstionClient<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OnRampTranstion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OnRampTranstionFindUniqueOrThrowArgs} args - Arguments to find a OnRampTranstion
     * @example
     * // Get one OnRampTranstion
     * const onRampTranstion = await prisma.onRampTranstion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnRampTranstionFindUniqueOrThrowArgs>(args: SelectSubset<T, OnRampTranstionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnRampTranstionClient<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnRampTranstion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTranstionFindFirstArgs} args - Arguments to find a OnRampTranstion
     * @example
     * // Get one OnRampTranstion
     * const onRampTranstion = await prisma.onRampTranstion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnRampTranstionFindFirstArgs>(args?: SelectSubset<T, OnRampTranstionFindFirstArgs<ExtArgs>>): Prisma__OnRampTranstionClient<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnRampTranstion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTranstionFindFirstOrThrowArgs} args - Arguments to find a OnRampTranstion
     * @example
     * // Get one OnRampTranstion
     * const onRampTranstion = await prisma.onRampTranstion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnRampTranstionFindFirstOrThrowArgs>(args?: SelectSubset<T, OnRampTranstionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnRampTranstionClient<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OnRampTranstions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTranstionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OnRampTranstions
     * const onRampTranstions = await prisma.onRampTranstion.findMany()
     * 
     * // Get first 10 OnRampTranstions
     * const onRampTranstions = await prisma.onRampTranstion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onRampTranstionWithIdOnly = await prisma.onRampTranstion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnRampTranstionFindManyArgs>(args?: SelectSubset<T, OnRampTranstionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OnRampTranstion.
     * @param {OnRampTranstionCreateArgs} args - Arguments to create a OnRampTranstion.
     * @example
     * // Create one OnRampTranstion
     * const OnRampTranstion = await prisma.onRampTranstion.create({
     *   data: {
     *     // ... data to create a OnRampTranstion
     *   }
     * })
     * 
     */
    create<T extends OnRampTranstionCreateArgs>(args: SelectSubset<T, OnRampTranstionCreateArgs<ExtArgs>>): Prisma__OnRampTranstionClient<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OnRampTranstions.
     * @param {OnRampTranstionCreateManyArgs} args - Arguments to create many OnRampTranstions.
     * @example
     * // Create many OnRampTranstions
     * const onRampTranstion = await prisma.onRampTranstion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnRampTranstionCreateManyArgs>(args?: SelectSubset<T, OnRampTranstionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OnRampTranstions and returns the data saved in the database.
     * @param {OnRampTranstionCreateManyAndReturnArgs} args - Arguments to create many OnRampTranstions.
     * @example
     * // Create many OnRampTranstions
     * const onRampTranstion = await prisma.onRampTranstion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OnRampTranstions and only return the `id`
     * const onRampTranstionWithIdOnly = await prisma.onRampTranstion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnRampTranstionCreateManyAndReturnArgs>(args?: SelectSubset<T, OnRampTranstionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OnRampTranstion.
     * @param {OnRampTranstionDeleteArgs} args - Arguments to delete one OnRampTranstion.
     * @example
     * // Delete one OnRampTranstion
     * const OnRampTranstion = await prisma.onRampTranstion.delete({
     *   where: {
     *     // ... filter to delete one OnRampTranstion
     *   }
     * })
     * 
     */
    delete<T extends OnRampTranstionDeleteArgs>(args: SelectSubset<T, OnRampTranstionDeleteArgs<ExtArgs>>): Prisma__OnRampTranstionClient<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OnRampTranstion.
     * @param {OnRampTranstionUpdateArgs} args - Arguments to update one OnRampTranstion.
     * @example
     * // Update one OnRampTranstion
     * const onRampTranstion = await prisma.onRampTranstion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnRampTranstionUpdateArgs>(args: SelectSubset<T, OnRampTranstionUpdateArgs<ExtArgs>>): Prisma__OnRampTranstionClient<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OnRampTranstions.
     * @param {OnRampTranstionDeleteManyArgs} args - Arguments to filter OnRampTranstions to delete.
     * @example
     * // Delete a few OnRampTranstions
     * const { count } = await prisma.onRampTranstion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnRampTranstionDeleteManyArgs>(args?: SelectSubset<T, OnRampTranstionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTranstions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTranstionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OnRampTranstions
     * const onRampTranstion = await prisma.onRampTranstion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnRampTranstionUpdateManyArgs>(args: SelectSubset<T, OnRampTranstionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTranstions and returns the data updated in the database.
     * @param {OnRampTranstionUpdateManyAndReturnArgs} args - Arguments to update many OnRampTranstions.
     * @example
     * // Update many OnRampTranstions
     * const onRampTranstion = await prisma.onRampTranstion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OnRampTranstions and only return the `id`
     * const onRampTranstionWithIdOnly = await prisma.onRampTranstion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OnRampTranstionUpdateManyAndReturnArgs>(args: SelectSubset<T, OnRampTranstionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OnRampTranstion.
     * @param {OnRampTranstionUpsertArgs} args - Arguments to update or create a OnRampTranstion.
     * @example
     * // Update or create a OnRampTranstion
     * const onRampTranstion = await prisma.onRampTranstion.upsert({
     *   create: {
     *     // ... data to create a OnRampTranstion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OnRampTranstion we want to update
     *   }
     * })
     */
    upsert<T extends OnRampTranstionUpsertArgs>(args: SelectSubset<T, OnRampTranstionUpsertArgs<ExtArgs>>): Prisma__OnRampTranstionClient<$Result.GetResult<Prisma.$OnRampTranstionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OnRampTranstions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTranstionCountArgs} args - Arguments to filter OnRampTranstions to count.
     * @example
     * // Count the number of OnRampTranstions
     * const count = await prisma.onRampTranstion.count({
     *   where: {
     *     // ... the filter for the OnRampTranstions we want to count
     *   }
     * })
    **/
    count<T extends OnRampTranstionCountArgs>(
      args?: Subset<T, OnRampTranstionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnRampTranstionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OnRampTranstion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTranstionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OnRampTranstionAggregateArgs>(args: Subset<T, OnRampTranstionAggregateArgs>): Prisma.PrismaPromise<GetOnRampTranstionAggregateType<T>>

    /**
     * Group by OnRampTranstion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTranstionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OnRampTranstionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnRampTranstionGroupByArgs['orderBy'] }
        : { orderBy?: OnRampTranstionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OnRampTranstionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnRampTranstionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OnRampTranstion model
   */
  readonly fields: OnRampTranstionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OnRampTranstion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnRampTranstionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OnRampTranstion model
   */
  interface OnRampTranstionFieldRefs {
    readonly id: FieldRef<"OnRampTranstion", 'Int'>
    readonly userId: FieldRef<"OnRampTranstion", 'Int'>
    readonly amount: FieldRef<"OnRampTranstion", 'Float'>
    readonly status: FieldRef<"OnRampTranstion", 'OnRampStatus'>
    readonly startTime: FieldRef<"OnRampTranstion", 'DateTime'>
    readonly token: FieldRef<"OnRampTranstion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OnRampTranstion findUnique
   */
  export type OnRampTranstionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTranstion to fetch.
     */
    where: OnRampTranstionWhereUniqueInput
  }

  /**
   * OnRampTranstion findUniqueOrThrow
   */
  export type OnRampTranstionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTranstion to fetch.
     */
    where: OnRampTranstionWhereUniqueInput
  }

  /**
   * OnRampTranstion findFirst
   */
  export type OnRampTranstionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTranstion to fetch.
     */
    where?: OnRampTranstionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTranstions to fetch.
     */
    orderBy?: OnRampTranstionOrderByWithRelationInput | OnRampTranstionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnRampTranstions.
     */
    cursor?: OnRampTranstionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTranstions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTranstions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnRampTranstions.
     */
    distinct?: OnRampTranstionScalarFieldEnum | OnRampTranstionScalarFieldEnum[]
  }

  /**
   * OnRampTranstion findFirstOrThrow
   */
  export type OnRampTranstionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTranstion to fetch.
     */
    where?: OnRampTranstionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTranstions to fetch.
     */
    orderBy?: OnRampTranstionOrderByWithRelationInput | OnRampTranstionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnRampTranstions.
     */
    cursor?: OnRampTranstionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTranstions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTranstions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnRampTranstions.
     */
    distinct?: OnRampTranstionScalarFieldEnum | OnRampTranstionScalarFieldEnum[]
  }

  /**
   * OnRampTranstion findMany
   */
  export type OnRampTranstionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTranstions to fetch.
     */
    where?: OnRampTranstionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTranstions to fetch.
     */
    orderBy?: OnRampTranstionOrderByWithRelationInput | OnRampTranstionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OnRampTranstions.
     */
    cursor?: OnRampTranstionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTranstions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTranstions.
     */
    skip?: number
    distinct?: OnRampTranstionScalarFieldEnum | OnRampTranstionScalarFieldEnum[]
  }

  /**
   * OnRampTranstion create
   */
  export type OnRampTranstionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * The data needed to create a OnRampTranstion.
     */
    data: XOR<OnRampTranstionCreateInput, OnRampTranstionUncheckedCreateInput>
  }

  /**
   * OnRampTranstion createMany
   */
  export type OnRampTranstionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OnRampTranstions.
     */
    data: OnRampTranstionCreateManyInput | OnRampTranstionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OnRampTranstion createManyAndReturn
   */
  export type OnRampTranstionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * The data used to create many OnRampTranstions.
     */
    data: OnRampTranstionCreateManyInput | OnRampTranstionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnRampTranstion update
   */
  export type OnRampTranstionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * The data needed to update a OnRampTranstion.
     */
    data: XOR<OnRampTranstionUpdateInput, OnRampTranstionUncheckedUpdateInput>
    /**
     * Choose, which OnRampTranstion to update.
     */
    where: OnRampTranstionWhereUniqueInput
  }

  /**
   * OnRampTranstion updateMany
   */
  export type OnRampTranstionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OnRampTranstions.
     */
    data: XOR<OnRampTranstionUpdateManyMutationInput, OnRampTranstionUncheckedUpdateManyInput>
    /**
     * Filter which OnRampTranstions to update
     */
    where?: OnRampTranstionWhereInput
    /**
     * Limit how many OnRampTranstions to update.
     */
    limit?: number
  }

  /**
   * OnRampTranstion updateManyAndReturn
   */
  export type OnRampTranstionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * The data used to update OnRampTranstions.
     */
    data: XOR<OnRampTranstionUpdateManyMutationInput, OnRampTranstionUncheckedUpdateManyInput>
    /**
     * Filter which OnRampTranstions to update
     */
    where?: OnRampTranstionWhereInput
    /**
     * Limit how many OnRampTranstions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnRampTranstion upsert
   */
  export type OnRampTranstionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * The filter to search for the OnRampTranstion to update in case it exists.
     */
    where: OnRampTranstionWhereUniqueInput
    /**
     * In case the OnRampTranstion found by the `where` argument doesn't exist, create a new OnRampTranstion with this data.
     */
    create: XOR<OnRampTranstionCreateInput, OnRampTranstionUncheckedCreateInput>
    /**
     * In case the OnRampTranstion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnRampTranstionUpdateInput, OnRampTranstionUncheckedUpdateInput>
  }

  /**
   * OnRampTranstion delete
   */
  export type OnRampTranstionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
    /**
     * Filter which OnRampTranstion to delete.
     */
    where: OnRampTranstionWhereUniqueInput
  }

  /**
   * OnRampTranstion deleteMany
   */
  export type OnRampTranstionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnRampTranstions to delete
     */
    where?: OnRampTranstionWhereInput
    /**
     * Limit how many OnRampTranstions to delete.
     */
    limit?: number
  }

  /**
   * OnRampTranstion without action
   */
  export type OnRampTranstionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTranstion
     */
    select?: OnRampTranstionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnRampTranstion
     */
    omit?: OnRampTranstionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTranstionInclude<ExtArgs> | null
  }


  /**
   * Model p2pTransactions
   */

  export type AggregateP2pTransactions = {
    _count: P2pTransactionsCountAggregateOutputType | null
    _avg: P2pTransactionsAvgAggregateOutputType | null
    _sum: P2pTransactionsSumAggregateOutputType | null
    _min: P2pTransactionsMinAggregateOutputType | null
    _max: P2pTransactionsMaxAggregateOutputType | null
  }

  export type P2pTransactionsAvgAggregateOutputType = {
    id: number | null
    SenderUserId: number | null
    RecieverUserId: number | null
    amount: number | null
  }

  export type P2pTransactionsSumAggregateOutputType = {
    id: number | null
    SenderUserId: number | null
    RecieverUserId: number | null
    amount: number | null
  }

  export type P2pTransactionsMinAggregateOutputType = {
    id: number | null
    SenderUserId: number | null
    RecieverUserId: number | null
    amount: number | null
    status: $Enums.OnRampStatus | null
    startTime: Date | null
  }

  export type P2pTransactionsMaxAggregateOutputType = {
    id: number | null
    SenderUserId: number | null
    RecieverUserId: number | null
    amount: number | null
    status: $Enums.OnRampStatus | null
    startTime: Date | null
  }

  export type P2pTransactionsCountAggregateOutputType = {
    id: number
    SenderUserId: number
    RecieverUserId: number
    amount: number
    status: number
    startTime: number
    _all: number
  }


  export type P2pTransactionsAvgAggregateInputType = {
    id?: true
    SenderUserId?: true
    RecieverUserId?: true
    amount?: true
  }

  export type P2pTransactionsSumAggregateInputType = {
    id?: true
    SenderUserId?: true
    RecieverUserId?: true
    amount?: true
  }

  export type P2pTransactionsMinAggregateInputType = {
    id?: true
    SenderUserId?: true
    RecieverUserId?: true
    amount?: true
    status?: true
    startTime?: true
  }

  export type P2pTransactionsMaxAggregateInputType = {
    id?: true
    SenderUserId?: true
    RecieverUserId?: true
    amount?: true
    status?: true
    startTime?: true
  }

  export type P2pTransactionsCountAggregateInputType = {
    id?: true
    SenderUserId?: true
    RecieverUserId?: true
    amount?: true
    status?: true
    startTime?: true
    _all?: true
  }

  export type P2pTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which p2pTransactions to aggregate.
     */
    where?: p2pTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransactions to fetch.
     */
    orderBy?: p2pTransactionsOrderByWithRelationInput | p2pTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: p2pTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned p2pTransactions
    **/
    _count?: true | P2pTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: P2pTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: P2pTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: P2pTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: P2pTransactionsMaxAggregateInputType
  }

  export type GetP2pTransactionsAggregateType<T extends P2pTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateP2pTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateP2pTransactions[P]>
      : GetScalarType<T[P], AggregateP2pTransactions[P]>
  }




  export type p2pTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: p2pTransactionsWhereInput
    orderBy?: p2pTransactionsOrderByWithAggregationInput | p2pTransactionsOrderByWithAggregationInput[]
    by: P2pTransactionsScalarFieldEnum[] | P2pTransactionsScalarFieldEnum
    having?: p2pTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: P2pTransactionsCountAggregateInputType | true
    _avg?: P2pTransactionsAvgAggregateInputType
    _sum?: P2pTransactionsSumAggregateInputType
    _min?: P2pTransactionsMinAggregateInputType
    _max?: P2pTransactionsMaxAggregateInputType
  }

  export type P2pTransactionsGroupByOutputType = {
    id: number
    SenderUserId: number
    RecieverUserId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date
    _count: P2pTransactionsCountAggregateOutputType | null
    _avg: P2pTransactionsAvgAggregateOutputType | null
    _sum: P2pTransactionsSumAggregateOutputType | null
    _min: P2pTransactionsMinAggregateOutputType | null
    _max: P2pTransactionsMaxAggregateOutputType | null
  }

  type GetP2pTransactionsGroupByPayload<T extends p2pTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<P2pTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof P2pTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], P2pTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], P2pTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type p2pTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SenderUserId?: boolean
    RecieverUserId?: boolean
    amount?: boolean
    status?: boolean
    startTime?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransactions"]>

  export type p2pTransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SenderUserId?: boolean
    RecieverUserId?: boolean
    amount?: boolean
    status?: boolean
    startTime?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransactions"]>

  export type p2pTransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    SenderUserId?: boolean
    RecieverUserId?: boolean
    amount?: boolean
    status?: boolean
    startTime?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2pTransactions"]>

  export type p2pTransactionsSelectScalar = {
    id?: boolean
    SenderUserId?: boolean
    RecieverUserId?: boolean
    amount?: boolean
    status?: boolean
    startTime?: boolean
  }

  export type p2pTransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "SenderUserId" | "RecieverUserId" | "amount" | "status" | "startTime", ExtArgs["result"]["p2pTransactions"]>
  export type p2pTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type p2pTransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type p2pTransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $p2pTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "p2pTransactions"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      SenderUserId: number
      RecieverUserId: number
      amount: number
      status: $Enums.OnRampStatus
      startTime: Date
    }, ExtArgs["result"]["p2pTransactions"]>
    composites: {}
  }

  type p2pTransactionsGetPayload<S extends boolean | null | undefined | p2pTransactionsDefaultArgs> = $Result.GetResult<Prisma.$p2pTransactionsPayload, S>

  type p2pTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<p2pTransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: P2pTransactionsCountAggregateInputType | true
    }

  export interface p2pTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['p2pTransactions'], meta: { name: 'p2pTransactions' } }
    /**
     * Find zero or one P2pTransactions that matches the filter.
     * @param {p2pTransactionsFindUniqueArgs} args - Arguments to find a P2pTransactions
     * @example
     * // Get one P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends p2pTransactionsFindUniqueArgs>(args: SelectSubset<T, p2pTransactionsFindUniqueArgs<ExtArgs>>): Prisma__p2pTransactionsClient<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one P2pTransactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {p2pTransactionsFindUniqueOrThrowArgs} args - Arguments to find a P2pTransactions
     * @example
     * // Get one P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends p2pTransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, p2pTransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__p2pTransactionsClient<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2pTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransactionsFindFirstArgs} args - Arguments to find a P2pTransactions
     * @example
     * // Get one P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends p2pTransactionsFindFirstArgs>(args?: SelectSubset<T, p2pTransactionsFindFirstArgs<ExtArgs>>): Prisma__p2pTransactionsClient<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2pTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransactionsFindFirstOrThrowArgs} args - Arguments to find a P2pTransactions
     * @example
     * // Get one P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends p2pTransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, p2pTransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__p2pTransactionsClient<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more P2pTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.findMany()
     * 
     * // Get first 10 P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const p2pTransactionsWithIdOnly = await prisma.p2pTransactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends p2pTransactionsFindManyArgs>(args?: SelectSubset<T, p2pTransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a P2pTransactions.
     * @param {p2pTransactionsCreateArgs} args - Arguments to create a P2pTransactions.
     * @example
     * // Create one P2pTransactions
     * const P2pTransactions = await prisma.p2pTransactions.create({
     *   data: {
     *     // ... data to create a P2pTransactions
     *   }
     * })
     * 
     */
    create<T extends p2pTransactionsCreateArgs>(args: SelectSubset<T, p2pTransactionsCreateArgs<ExtArgs>>): Prisma__p2pTransactionsClient<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many P2pTransactions.
     * @param {p2pTransactionsCreateManyArgs} args - Arguments to create many P2pTransactions.
     * @example
     * // Create many P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends p2pTransactionsCreateManyArgs>(args?: SelectSubset<T, p2pTransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many P2pTransactions and returns the data saved in the database.
     * @param {p2pTransactionsCreateManyAndReturnArgs} args - Arguments to create many P2pTransactions.
     * @example
     * // Create many P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many P2pTransactions and only return the `id`
     * const p2pTransactionsWithIdOnly = await prisma.p2pTransactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends p2pTransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, p2pTransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a P2pTransactions.
     * @param {p2pTransactionsDeleteArgs} args - Arguments to delete one P2pTransactions.
     * @example
     * // Delete one P2pTransactions
     * const P2pTransactions = await prisma.p2pTransactions.delete({
     *   where: {
     *     // ... filter to delete one P2pTransactions
     *   }
     * })
     * 
     */
    delete<T extends p2pTransactionsDeleteArgs>(args: SelectSubset<T, p2pTransactionsDeleteArgs<ExtArgs>>): Prisma__p2pTransactionsClient<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one P2pTransactions.
     * @param {p2pTransactionsUpdateArgs} args - Arguments to update one P2pTransactions.
     * @example
     * // Update one P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends p2pTransactionsUpdateArgs>(args: SelectSubset<T, p2pTransactionsUpdateArgs<ExtArgs>>): Prisma__p2pTransactionsClient<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more P2pTransactions.
     * @param {p2pTransactionsDeleteManyArgs} args - Arguments to filter P2pTransactions to delete.
     * @example
     * // Delete a few P2pTransactions
     * const { count } = await prisma.p2pTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends p2pTransactionsDeleteManyArgs>(args?: SelectSubset<T, p2pTransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends p2pTransactionsUpdateManyArgs>(args: SelectSubset<T, p2pTransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2pTransactions and returns the data updated in the database.
     * @param {p2pTransactionsUpdateManyAndReturnArgs} args - Arguments to update many P2pTransactions.
     * @example
     * // Update many P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more P2pTransactions and only return the `id`
     * const p2pTransactionsWithIdOnly = await prisma.p2pTransactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends p2pTransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, p2pTransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one P2pTransactions.
     * @param {p2pTransactionsUpsertArgs} args - Arguments to update or create a P2pTransactions.
     * @example
     * // Update or create a P2pTransactions
     * const p2pTransactions = await prisma.p2pTransactions.upsert({
     *   create: {
     *     // ... data to create a P2pTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the P2pTransactions we want to update
     *   }
     * })
     */
    upsert<T extends p2pTransactionsUpsertArgs>(args: SelectSubset<T, p2pTransactionsUpsertArgs<ExtArgs>>): Prisma__p2pTransactionsClient<$Result.GetResult<Prisma.$p2pTransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of P2pTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransactionsCountArgs} args - Arguments to filter P2pTransactions to count.
     * @example
     * // Count the number of P2pTransactions
     * const count = await prisma.p2pTransactions.count({
     *   where: {
     *     // ... the filter for the P2pTransactions we want to count
     *   }
     * })
    **/
    count<T extends p2pTransactionsCountArgs>(
      args?: Subset<T, p2pTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], P2pTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a P2pTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2pTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends P2pTransactionsAggregateArgs>(args: Subset<T, P2pTransactionsAggregateArgs>): Prisma.PrismaPromise<GetP2pTransactionsAggregateType<T>>

    /**
     * Group by P2pTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {p2pTransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends p2pTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: p2pTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: p2pTransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, p2pTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetP2pTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the p2pTransactions model
   */
  readonly fields: p2pTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for p2pTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__p2pTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the p2pTransactions model
   */
  interface p2pTransactionsFieldRefs {
    readonly id: FieldRef<"p2pTransactions", 'Int'>
    readonly SenderUserId: FieldRef<"p2pTransactions", 'Int'>
    readonly RecieverUserId: FieldRef<"p2pTransactions", 'Int'>
    readonly amount: FieldRef<"p2pTransactions", 'Float'>
    readonly status: FieldRef<"p2pTransactions", 'OnRampStatus'>
    readonly startTime: FieldRef<"p2pTransactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * p2pTransactions findUnique
   */
  export type p2pTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransactions to fetch.
     */
    where: p2pTransactionsWhereUniqueInput
  }

  /**
   * p2pTransactions findUniqueOrThrow
   */
  export type p2pTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransactions to fetch.
     */
    where: p2pTransactionsWhereUniqueInput
  }

  /**
   * p2pTransactions findFirst
   */
  export type p2pTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransactions to fetch.
     */
    where?: p2pTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransactions to fetch.
     */
    orderBy?: p2pTransactionsOrderByWithRelationInput | p2pTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for p2pTransactions.
     */
    cursor?: p2pTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of p2pTransactions.
     */
    distinct?: P2pTransactionsScalarFieldEnum | P2pTransactionsScalarFieldEnum[]
  }

  /**
   * p2pTransactions findFirstOrThrow
   */
  export type p2pTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransactions to fetch.
     */
    where?: p2pTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransactions to fetch.
     */
    orderBy?: p2pTransactionsOrderByWithRelationInput | p2pTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for p2pTransactions.
     */
    cursor?: p2pTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of p2pTransactions.
     */
    distinct?: P2pTransactionsScalarFieldEnum | P2pTransactionsScalarFieldEnum[]
  }

  /**
   * p2pTransactions findMany
   */
  export type p2pTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which p2pTransactions to fetch.
     */
    where?: p2pTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of p2pTransactions to fetch.
     */
    orderBy?: p2pTransactionsOrderByWithRelationInput | p2pTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing p2pTransactions.
     */
    cursor?: p2pTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` p2pTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` p2pTransactions.
     */
    skip?: number
    distinct?: P2pTransactionsScalarFieldEnum | P2pTransactionsScalarFieldEnum[]
  }

  /**
   * p2pTransactions create
   */
  export type p2pTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a p2pTransactions.
     */
    data: XOR<p2pTransactionsCreateInput, p2pTransactionsUncheckedCreateInput>
  }

  /**
   * p2pTransactions createMany
   */
  export type p2pTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many p2pTransactions.
     */
    data: p2pTransactionsCreateManyInput | p2pTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * p2pTransactions createManyAndReturn
   */
  export type p2pTransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many p2pTransactions.
     */
    data: p2pTransactionsCreateManyInput | p2pTransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * p2pTransactions update
   */
  export type p2pTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a p2pTransactions.
     */
    data: XOR<p2pTransactionsUpdateInput, p2pTransactionsUncheckedUpdateInput>
    /**
     * Choose, which p2pTransactions to update.
     */
    where: p2pTransactionsWhereUniqueInput
  }

  /**
   * p2pTransactions updateMany
   */
  export type p2pTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update p2pTransactions.
     */
    data: XOR<p2pTransactionsUpdateManyMutationInput, p2pTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which p2pTransactions to update
     */
    where?: p2pTransactionsWhereInput
    /**
     * Limit how many p2pTransactions to update.
     */
    limit?: number
  }

  /**
   * p2pTransactions updateManyAndReturn
   */
  export type p2pTransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * The data used to update p2pTransactions.
     */
    data: XOR<p2pTransactionsUpdateManyMutationInput, p2pTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which p2pTransactions to update
     */
    where?: p2pTransactionsWhereInput
    /**
     * Limit how many p2pTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * p2pTransactions upsert
   */
  export type p2pTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the p2pTransactions to update in case it exists.
     */
    where: p2pTransactionsWhereUniqueInput
    /**
     * In case the p2pTransactions found by the `where` argument doesn't exist, create a new p2pTransactions with this data.
     */
    create: XOR<p2pTransactionsCreateInput, p2pTransactionsUncheckedCreateInput>
    /**
     * In case the p2pTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<p2pTransactionsUpdateInput, p2pTransactionsUncheckedUpdateInput>
  }

  /**
   * p2pTransactions delete
   */
  export type p2pTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
    /**
     * Filter which p2pTransactions to delete.
     */
    where: p2pTransactionsWhereUniqueInput
  }

  /**
   * p2pTransactions deleteMany
   */
  export type p2pTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which p2pTransactions to delete
     */
    where?: p2pTransactionsWhereInput
    /**
     * Limit how many p2pTransactions to delete.
     */
    limit?: number
  }

  /**
   * p2pTransactions without action
   */
  export type p2pTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the p2pTransactions
     */
    select?: p2pTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the p2pTransactions
     */
    omit?: p2pTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: p2pTransactionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    number: 'number',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MerchantScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    auth_type: 'auth_type'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    locked: 'locked'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const OnRampTranstionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    status: 'status',
    startTime: 'startTime',
    token: 'token'
  };

  export type OnRampTranstionScalarFieldEnum = (typeof OnRampTranstionScalarFieldEnum)[keyof typeof OnRampTranstionScalarFieldEnum]


  export const P2pTransactionsScalarFieldEnum: {
    id: 'id',
    SenderUserId: 'SenderUserId',
    RecieverUserId: 'RecieverUserId',
    amount: 'amount',
    status: 'status',
    startTime: 'startTime'
  };

  export type P2pTransactionsScalarFieldEnum = (typeof P2pTransactionsScalarFieldEnum)[keyof typeof P2pTransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AuthType'
   */
  export type EnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType'>
    


  /**
   * Reference to a field of type 'AuthType[]'
   */
  export type ListEnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OnRampStatus'
   */
  export type EnumOnRampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnRampStatus'>
    


  /**
   * Reference to a field of type 'OnRampStatus[]'
   */
  export type ListEnumOnRampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnRampStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    number?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    Balance?: BalanceListRelationFilter
    onRampTranstion?: OnRampTranstionListRelationFilter
    sentTransactions?: P2pTransactionsListRelationFilter
    receivedTransactions?: P2pTransactionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    password?: SortOrder
    Balance?: BalanceOrderByRelationAggregateInput
    onRampTranstion?: OnRampTranstionOrderByRelationAggregateInput
    sentTransactions?: p2pTransactionsOrderByRelationAggregateInput
    receivedTransactions?: p2pTransactionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Balance?: BalanceListRelationFilter
    onRampTranstion?: OnRampTranstionListRelationFilter
    sentTransactions?: P2pTransactionsListRelationFilter
    receivedTransactions?: P2pTransactionsListRelationFilter
  }, "id" | "email" | "number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    number?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: IntFilter<"Merchant"> | number
    email?: StringFilter<"Merchant"> | string
    name?: StringFilter<"Merchant"> | string
    auth_type?: EnumAuthTypeFilter<"Merchant"> | $Enums.AuthType
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    name?: StringFilter<"Merchant"> | string
    auth_type?: EnumAuthTypeFilter<"Merchant"> | $Enums.AuthType
  }, "id" | "email">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    auth_type?: SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _avg?: MerchantAvgOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
    _sum?: MerchantSumOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Merchant"> | number
    email?: StringWithAggregatesFilter<"Merchant"> | string
    name?: StringWithAggregatesFilter<"Merchant"> | string
    auth_type?: EnumAuthTypeWithAggregatesFilter<"Merchant"> | $Enums.AuthType
  }

  export type BalanceWhereInput = {
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    id?: IntFilter<"Balance"> | number
    userId?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    OR?: BalanceScalarWhereWithAggregatesInput[]
    NOT?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Balance"> | number
    userId?: IntWithAggregatesFilter<"Balance"> | number
    amount?: IntWithAggregatesFilter<"Balance"> | number
    locked?: IntWithAggregatesFilter<"Balance"> | number
  }

  export type OnRampTranstionWhereInput = {
    AND?: OnRampTranstionWhereInput | OnRampTranstionWhereInput[]
    OR?: OnRampTranstionWhereInput[]
    NOT?: OnRampTranstionWhereInput | OnRampTranstionWhereInput[]
    id?: IntFilter<"OnRampTranstion"> | number
    userId?: IntFilter<"OnRampTranstion"> | number
    amount?: FloatFilter<"OnRampTranstion"> | number
    status?: EnumOnRampStatusFilter<"OnRampTranstion"> | $Enums.OnRampStatus
    startTime?: DateTimeFilter<"OnRampTranstion"> | Date | string
    token?: StringFilter<"OnRampTranstion"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OnRampTranstionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    token?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OnRampTranstionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: OnRampTranstionWhereInput | OnRampTranstionWhereInput[]
    OR?: OnRampTranstionWhereInput[]
    NOT?: OnRampTranstionWhereInput | OnRampTranstionWhereInput[]
    userId?: IntFilter<"OnRampTranstion"> | number
    amount?: FloatFilter<"OnRampTranstion"> | number
    status?: EnumOnRampStatusFilter<"OnRampTranstion"> | $Enums.OnRampStatus
    startTime?: DateTimeFilter<"OnRampTranstion"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type OnRampTranstionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    token?: SortOrder
    _count?: OnRampTranstionCountOrderByAggregateInput
    _avg?: OnRampTranstionAvgOrderByAggregateInput
    _max?: OnRampTranstionMaxOrderByAggregateInput
    _min?: OnRampTranstionMinOrderByAggregateInput
    _sum?: OnRampTranstionSumOrderByAggregateInput
  }

  export type OnRampTranstionScalarWhereWithAggregatesInput = {
    AND?: OnRampTranstionScalarWhereWithAggregatesInput | OnRampTranstionScalarWhereWithAggregatesInput[]
    OR?: OnRampTranstionScalarWhereWithAggregatesInput[]
    NOT?: OnRampTranstionScalarWhereWithAggregatesInput | OnRampTranstionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OnRampTranstion"> | number
    userId?: IntWithAggregatesFilter<"OnRampTranstion"> | number
    amount?: FloatWithAggregatesFilter<"OnRampTranstion"> | number
    status?: EnumOnRampStatusWithAggregatesFilter<"OnRampTranstion"> | $Enums.OnRampStatus
    startTime?: DateTimeWithAggregatesFilter<"OnRampTranstion"> | Date | string
    token?: StringWithAggregatesFilter<"OnRampTranstion"> | string
  }

  export type p2pTransactionsWhereInput = {
    AND?: p2pTransactionsWhereInput | p2pTransactionsWhereInput[]
    OR?: p2pTransactionsWhereInput[]
    NOT?: p2pTransactionsWhereInput | p2pTransactionsWhereInput[]
    id?: IntFilter<"p2pTransactions"> | number
    SenderUserId?: IntFilter<"p2pTransactions"> | number
    RecieverUserId?: IntFilter<"p2pTransactions"> | number
    amount?: FloatFilter<"p2pTransactions"> | number
    status?: EnumOnRampStatusFilter<"p2pTransactions"> | $Enums.OnRampStatus
    startTime?: DateTimeFilter<"p2pTransactions"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type p2pTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    SenderUserId?: SortOrder
    RecieverUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type p2pTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: p2pTransactionsWhereInput | p2pTransactionsWhereInput[]
    OR?: p2pTransactionsWhereInput[]
    NOT?: p2pTransactionsWhereInput | p2pTransactionsWhereInput[]
    SenderUserId?: IntFilter<"p2pTransactions"> | number
    RecieverUserId?: IntFilter<"p2pTransactions"> | number
    amount?: FloatFilter<"p2pTransactions"> | number
    status?: EnumOnRampStatusFilter<"p2pTransactions"> | $Enums.OnRampStatus
    startTime?: DateTimeFilter<"p2pTransactions"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type p2pTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    SenderUserId?: SortOrder
    RecieverUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    _count?: p2pTransactionsCountOrderByAggregateInput
    _avg?: p2pTransactionsAvgOrderByAggregateInput
    _max?: p2pTransactionsMaxOrderByAggregateInput
    _min?: p2pTransactionsMinOrderByAggregateInput
    _sum?: p2pTransactionsSumOrderByAggregateInput
  }

  export type p2pTransactionsScalarWhereWithAggregatesInput = {
    AND?: p2pTransactionsScalarWhereWithAggregatesInput | p2pTransactionsScalarWhereWithAggregatesInput[]
    OR?: p2pTransactionsScalarWhereWithAggregatesInput[]
    NOT?: p2pTransactionsScalarWhereWithAggregatesInput | p2pTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"p2pTransactions"> | number
    SenderUserId?: IntWithAggregatesFilter<"p2pTransactions"> | number
    RecieverUserId?: IntWithAggregatesFilter<"p2pTransactions"> | number
    amount?: FloatWithAggregatesFilter<"p2pTransactions"> | number
    status?: EnumOnRampStatusWithAggregatesFilter<"p2pTransactions"> | $Enums.OnRampStatus
    startTime?: DateTimeWithAggregatesFilter<"p2pTransactions"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email?: string | null
    number?: string | null
    password: string
    Balance?: BalanceCreateNestedManyWithoutUserInput
    onRampTranstion?: OnRampTranstionCreateNestedManyWithoutUserInput
    sentTransactions?: p2pTransactionsCreateNestedManyWithoutSenderInput
    receivedTransactions?: p2pTransactionsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    number?: string | null
    password: string
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    onRampTranstion?: OnRampTranstionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: p2pTransactionsUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: p2pTransactionsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    onRampTranstion?: OnRampTranstionUpdateManyWithoutUserNestedInput
    sentTransactions?: p2pTransactionsUpdateManyWithoutSenderNestedInput
    receivedTransactions?: p2pTransactionsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    onRampTranstion?: OnRampTranstionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: p2pTransactionsUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: p2pTransactionsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    number?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MerchantCreateInput = {
    email: string
    name: string
    auth_type: $Enums.AuthType
  }

  export type MerchantUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    auth_type: $Enums.AuthType
  }

  export type MerchantUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type MerchantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type MerchantCreateManyInput = {
    id?: number
    email: string
    name: string
    auth_type: $Enums.AuthType
  }

  export type MerchantUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    auth_type?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
  }

  export type BalanceCreateInput = {
    amount: number
    locked: number
    user: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: number
    userId: number
    amount: number
    locked: number
  }

  export type BalanceUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCreateManyInput = {
    id?: number
    userId: number
    amount: number
    locked: number
  }

  export type BalanceUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type OnRampTranstionCreateInput = {
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    token: string
    user: UserCreateNestedOneWithoutOnRampTranstionInput
  }

  export type OnRampTranstionUncheckedCreateInput = {
    id?: number
    userId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    token: string
  }

  export type OnRampTranstionUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutOnRampTranstionNestedInput
  }

  export type OnRampTranstionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type OnRampTranstionCreateManyInput = {
    id?: number
    userId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    token: string
  }

  export type OnRampTranstionUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type OnRampTranstionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type p2pTransactionsCreateInput = {
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    sender: UserCreateNestedOneWithoutSentTransactionsInput
    receiver: UserCreateNestedOneWithoutReceivedTransactionsInput
  }

  export type p2pTransactionsUncheckedCreateInput = {
    id?: number
    SenderUserId: number
    RecieverUserId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
  }

  export type p2pTransactionsUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentTransactionsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput
  }

  export type p2pTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    SenderUserId?: IntFieldUpdateOperationsInput | number
    RecieverUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type p2pTransactionsCreateManyInput = {
    id?: number
    SenderUserId: number
    RecieverUserId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
  }

  export type p2pTransactionsUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type p2pTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    SenderUserId?: IntFieldUpdateOperationsInput | number
    RecieverUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BalanceListRelationFilter = {
    every?: BalanceWhereInput
    some?: BalanceWhereInput
    none?: BalanceWhereInput
  }

  export type OnRampTranstionListRelationFilter = {
    every?: OnRampTranstionWhereInput
    some?: OnRampTranstionWhereInput
    none?: OnRampTranstionWhereInput
  }

  export type P2pTransactionsListRelationFilter = {
    every?: p2pTransactionsWhereInput
    some?: p2pTransactionsWhereInput
    none?: p2pTransactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OnRampTranstionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type p2pTransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    number?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    auth_type?: SortOrder
  }

  export type MerchantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumOnRampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusFilter<$PrismaModel> | $Enums.OnRampStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OnRampTranstionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    token?: SortOrder
  }

  export type OnRampTranstionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type OnRampTranstionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    token?: SortOrder
  }

  export type OnRampTranstionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    token?: SortOrder
  }

  export type OnRampTranstionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumOnRampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel> | $Enums.OnRampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOnRampStatusFilter<$PrismaModel>
    _max?: NestedEnumOnRampStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type p2pTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    SenderUserId?: SortOrder
    RecieverUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
  }

  export type p2pTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    SenderUserId?: SortOrder
    RecieverUserId?: SortOrder
    amount?: SortOrder
  }

  export type p2pTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    SenderUserId?: SortOrder
    RecieverUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
  }

  export type p2pTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    SenderUserId?: SortOrder
    RecieverUserId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
  }

  export type p2pTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    SenderUserId?: SortOrder
    RecieverUserId?: SortOrder
    amount?: SortOrder
  }

  export type BalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
  }

  export type OnRampTranstionCreateNestedManyWithoutUserInput = {
    create?: XOR<OnRampTranstionCreateWithoutUserInput, OnRampTranstionUncheckedCreateWithoutUserInput> | OnRampTranstionCreateWithoutUserInput[] | OnRampTranstionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTranstionCreateOrConnectWithoutUserInput | OnRampTranstionCreateOrConnectWithoutUserInput[]
    createMany?: OnRampTranstionCreateManyUserInputEnvelope
    connect?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
  }

  export type p2pTransactionsCreateNestedManyWithoutSenderInput = {
    create?: XOR<p2pTransactionsCreateWithoutSenderInput, p2pTransactionsUncheckedCreateWithoutSenderInput> | p2pTransactionsCreateWithoutSenderInput[] | p2pTransactionsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: p2pTransactionsCreateOrConnectWithoutSenderInput | p2pTransactionsCreateOrConnectWithoutSenderInput[]
    createMany?: p2pTransactionsCreateManySenderInputEnvelope
    connect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
  }

  export type p2pTransactionsCreateNestedManyWithoutReceiverInput = {
    create?: XOR<p2pTransactionsCreateWithoutReceiverInput, p2pTransactionsUncheckedCreateWithoutReceiverInput> | p2pTransactionsCreateWithoutReceiverInput[] | p2pTransactionsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: p2pTransactionsCreateOrConnectWithoutReceiverInput | p2pTransactionsCreateOrConnectWithoutReceiverInput[]
    createMany?: p2pTransactionsCreateManyReceiverInputEnvelope
    connect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
  }

  export type BalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
  }

  export type OnRampTranstionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OnRampTranstionCreateWithoutUserInput, OnRampTranstionUncheckedCreateWithoutUserInput> | OnRampTranstionCreateWithoutUserInput[] | OnRampTranstionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTranstionCreateOrConnectWithoutUserInput | OnRampTranstionCreateOrConnectWithoutUserInput[]
    createMany?: OnRampTranstionCreateManyUserInputEnvelope
    connect?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
  }

  export type p2pTransactionsUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<p2pTransactionsCreateWithoutSenderInput, p2pTransactionsUncheckedCreateWithoutSenderInput> | p2pTransactionsCreateWithoutSenderInput[] | p2pTransactionsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: p2pTransactionsCreateOrConnectWithoutSenderInput | p2pTransactionsCreateOrConnectWithoutSenderInput[]
    createMany?: p2pTransactionsCreateManySenderInputEnvelope
    connect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
  }

  export type p2pTransactionsUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<p2pTransactionsCreateWithoutReceiverInput, p2pTransactionsUncheckedCreateWithoutReceiverInput> | p2pTransactionsCreateWithoutReceiverInput[] | p2pTransactionsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: p2pTransactionsCreateOrConnectWithoutReceiverInput | p2pTransactionsCreateOrConnectWithoutReceiverInput[]
    createMany?: p2pTransactionsCreateManyReceiverInputEnvelope
    connect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    upsert?: BalanceUpsertWithWhereUniqueWithoutUserInput | BalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    set?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    disconnect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    delete?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    update?: BalanceUpdateWithWhereUniqueWithoutUserInput | BalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceUpdateManyWithWhereWithoutUserInput | BalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
  }

  export type OnRampTranstionUpdateManyWithoutUserNestedInput = {
    create?: XOR<OnRampTranstionCreateWithoutUserInput, OnRampTranstionUncheckedCreateWithoutUserInput> | OnRampTranstionCreateWithoutUserInput[] | OnRampTranstionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTranstionCreateOrConnectWithoutUserInput | OnRampTranstionCreateOrConnectWithoutUserInput[]
    upsert?: OnRampTranstionUpsertWithWhereUniqueWithoutUserInput | OnRampTranstionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OnRampTranstionCreateManyUserInputEnvelope
    set?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
    disconnect?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
    delete?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
    connect?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
    update?: OnRampTranstionUpdateWithWhereUniqueWithoutUserInput | OnRampTranstionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OnRampTranstionUpdateManyWithWhereWithoutUserInput | OnRampTranstionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OnRampTranstionScalarWhereInput | OnRampTranstionScalarWhereInput[]
  }

  export type p2pTransactionsUpdateManyWithoutSenderNestedInput = {
    create?: XOR<p2pTransactionsCreateWithoutSenderInput, p2pTransactionsUncheckedCreateWithoutSenderInput> | p2pTransactionsCreateWithoutSenderInput[] | p2pTransactionsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: p2pTransactionsCreateOrConnectWithoutSenderInput | p2pTransactionsCreateOrConnectWithoutSenderInput[]
    upsert?: p2pTransactionsUpsertWithWhereUniqueWithoutSenderInput | p2pTransactionsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: p2pTransactionsCreateManySenderInputEnvelope
    set?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    disconnect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    delete?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    connect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    update?: p2pTransactionsUpdateWithWhereUniqueWithoutSenderInput | p2pTransactionsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: p2pTransactionsUpdateManyWithWhereWithoutSenderInput | p2pTransactionsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: p2pTransactionsScalarWhereInput | p2pTransactionsScalarWhereInput[]
  }

  export type p2pTransactionsUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<p2pTransactionsCreateWithoutReceiverInput, p2pTransactionsUncheckedCreateWithoutReceiverInput> | p2pTransactionsCreateWithoutReceiverInput[] | p2pTransactionsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: p2pTransactionsCreateOrConnectWithoutReceiverInput | p2pTransactionsCreateOrConnectWithoutReceiverInput[]
    upsert?: p2pTransactionsUpsertWithWhereUniqueWithoutReceiverInput | p2pTransactionsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: p2pTransactionsCreateManyReceiverInputEnvelope
    set?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    disconnect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    delete?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    connect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    update?: p2pTransactionsUpdateWithWhereUniqueWithoutReceiverInput | p2pTransactionsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: p2pTransactionsUpdateManyWithWhereWithoutReceiverInput | p2pTransactionsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: p2pTransactionsScalarWhereInput | p2pTransactionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    upsert?: BalanceUpsertWithWhereUniqueWithoutUserInput | BalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    set?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    disconnect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    delete?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    update?: BalanceUpdateWithWhereUniqueWithoutUserInput | BalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceUpdateManyWithWhereWithoutUserInput | BalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
  }

  export type OnRampTranstionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OnRampTranstionCreateWithoutUserInput, OnRampTranstionUncheckedCreateWithoutUserInput> | OnRampTranstionCreateWithoutUserInput[] | OnRampTranstionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTranstionCreateOrConnectWithoutUserInput | OnRampTranstionCreateOrConnectWithoutUserInput[]
    upsert?: OnRampTranstionUpsertWithWhereUniqueWithoutUserInput | OnRampTranstionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OnRampTranstionCreateManyUserInputEnvelope
    set?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
    disconnect?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
    delete?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
    connect?: OnRampTranstionWhereUniqueInput | OnRampTranstionWhereUniqueInput[]
    update?: OnRampTranstionUpdateWithWhereUniqueWithoutUserInput | OnRampTranstionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OnRampTranstionUpdateManyWithWhereWithoutUserInput | OnRampTranstionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OnRampTranstionScalarWhereInput | OnRampTranstionScalarWhereInput[]
  }

  export type p2pTransactionsUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<p2pTransactionsCreateWithoutSenderInput, p2pTransactionsUncheckedCreateWithoutSenderInput> | p2pTransactionsCreateWithoutSenderInput[] | p2pTransactionsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: p2pTransactionsCreateOrConnectWithoutSenderInput | p2pTransactionsCreateOrConnectWithoutSenderInput[]
    upsert?: p2pTransactionsUpsertWithWhereUniqueWithoutSenderInput | p2pTransactionsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: p2pTransactionsCreateManySenderInputEnvelope
    set?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    disconnect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    delete?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    connect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    update?: p2pTransactionsUpdateWithWhereUniqueWithoutSenderInput | p2pTransactionsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: p2pTransactionsUpdateManyWithWhereWithoutSenderInput | p2pTransactionsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: p2pTransactionsScalarWhereInput | p2pTransactionsScalarWhereInput[]
  }

  export type p2pTransactionsUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<p2pTransactionsCreateWithoutReceiverInput, p2pTransactionsUncheckedCreateWithoutReceiverInput> | p2pTransactionsCreateWithoutReceiverInput[] | p2pTransactionsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: p2pTransactionsCreateOrConnectWithoutReceiverInput | p2pTransactionsCreateOrConnectWithoutReceiverInput[]
    upsert?: p2pTransactionsUpsertWithWhereUniqueWithoutReceiverInput | p2pTransactionsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: p2pTransactionsCreateManyReceiverInputEnvelope
    set?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    disconnect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    delete?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    connect?: p2pTransactionsWhereUniqueInput | p2pTransactionsWhereUniqueInput[]
    update?: p2pTransactionsUpdateWithWhereUniqueWithoutReceiverInput | p2pTransactionsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: p2pTransactionsUpdateManyWithWhereWithoutReceiverInput | p2pTransactionsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: p2pTransactionsScalarWhereInput | p2pTransactionsScalarWhereInput[]
  }

  export type EnumAuthTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuthType
  }

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalanceInput, UserUpdateWithoutBalanceInput>, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserCreateNestedOneWithoutOnRampTranstionInput = {
    create?: XOR<UserCreateWithoutOnRampTranstionInput, UserUncheckedCreateWithoutOnRampTranstionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnRampTranstionInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOnRampStatusFieldUpdateOperationsInput = {
    set?: $Enums.OnRampStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOnRampTranstionNestedInput = {
    create?: XOR<UserCreateWithoutOnRampTranstionInput, UserUncheckedCreateWithoutOnRampTranstionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnRampTranstionInput
    upsert?: UserUpsertWithoutOnRampTranstionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnRampTranstionInput, UserUpdateWithoutOnRampTranstionInput>, UserUncheckedUpdateWithoutOnRampTranstionInput>
  }

  export type UserCreateNestedOneWithoutSentTransactionsInput = {
    create?: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedTransactionsInput = {
    create?: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransactionsInput
    upsert?: UserUpsertWithoutSentTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentTransactionsInput, UserUpdateWithoutSentTransactionsInput>, UserUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransactionsInput
    upsert?: UserUpsertWithoutReceivedTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedTransactionsInput, UserUpdateWithoutReceivedTransactionsInput>, UserUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
  }

  export type NestedEnumOnRampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusFilter<$PrismaModel> | $Enums.OnRampStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnRampStatus | EnumOnRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OnRampStatus[] | ListEnumOnRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOnRampStatusWithAggregatesFilter<$PrismaModel> | $Enums.OnRampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOnRampStatusFilter<$PrismaModel>
    _max?: NestedEnumOnRampStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BalanceCreateWithoutUserInput = {
    amount: number
    locked: number
  }

  export type BalanceUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    locked: number
  }

  export type BalanceCreateOrConnectWithoutUserInput = {
    where: BalanceWhereUniqueInput
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type BalanceCreateManyUserInputEnvelope = {
    data: BalanceCreateManyUserInput | BalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OnRampTranstionCreateWithoutUserInput = {
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    token: string
  }

  export type OnRampTranstionUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    token: string
  }

  export type OnRampTranstionCreateOrConnectWithoutUserInput = {
    where: OnRampTranstionWhereUniqueInput
    create: XOR<OnRampTranstionCreateWithoutUserInput, OnRampTranstionUncheckedCreateWithoutUserInput>
  }

  export type OnRampTranstionCreateManyUserInputEnvelope = {
    data: OnRampTranstionCreateManyUserInput | OnRampTranstionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type p2pTransactionsCreateWithoutSenderInput = {
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    receiver: UserCreateNestedOneWithoutReceivedTransactionsInput
  }

  export type p2pTransactionsUncheckedCreateWithoutSenderInput = {
    id?: number
    RecieverUserId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
  }

  export type p2pTransactionsCreateOrConnectWithoutSenderInput = {
    where: p2pTransactionsWhereUniqueInput
    create: XOR<p2pTransactionsCreateWithoutSenderInput, p2pTransactionsUncheckedCreateWithoutSenderInput>
  }

  export type p2pTransactionsCreateManySenderInputEnvelope = {
    data: p2pTransactionsCreateManySenderInput | p2pTransactionsCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type p2pTransactionsCreateWithoutReceiverInput = {
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    sender: UserCreateNestedOneWithoutSentTransactionsInput
  }

  export type p2pTransactionsUncheckedCreateWithoutReceiverInput = {
    id?: number
    SenderUserId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
  }

  export type p2pTransactionsCreateOrConnectWithoutReceiverInput = {
    where: p2pTransactionsWhereUniqueInput
    create: XOR<p2pTransactionsCreateWithoutReceiverInput, p2pTransactionsUncheckedCreateWithoutReceiverInput>
  }

  export type p2pTransactionsCreateManyReceiverInputEnvelope = {
    data: p2pTransactionsCreateManyReceiverInput | p2pTransactionsCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type BalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: BalanceWhereUniqueInput
    update: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type BalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: BalanceWhereUniqueInput
    data: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type BalanceUpdateManyWithWhereWithoutUserInput = {
    where: BalanceScalarWhereInput
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type BalanceScalarWhereInput = {
    AND?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
    OR?: BalanceScalarWhereInput[]
    NOT?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
    id?: IntFilter<"Balance"> | number
    userId?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
  }

  export type OnRampTranstionUpsertWithWhereUniqueWithoutUserInput = {
    where: OnRampTranstionWhereUniqueInput
    update: XOR<OnRampTranstionUpdateWithoutUserInput, OnRampTranstionUncheckedUpdateWithoutUserInput>
    create: XOR<OnRampTranstionCreateWithoutUserInput, OnRampTranstionUncheckedCreateWithoutUserInput>
  }

  export type OnRampTranstionUpdateWithWhereUniqueWithoutUserInput = {
    where: OnRampTranstionWhereUniqueInput
    data: XOR<OnRampTranstionUpdateWithoutUserInput, OnRampTranstionUncheckedUpdateWithoutUserInput>
  }

  export type OnRampTranstionUpdateManyWithWhereWithoutUserInput = {
    where: OnRampTranstionScalarWhereInput
    data: XOR<OnRampTranstionUpdateManyMutationInput, OnRampTranstionUncheckedUpdateManyWithoutUserInput>
  }

  export type OnRampTranstionScalarWhereInput = {
    AND?: OnRampTranstionScalarWhereInput | OnRampTranstionScalarWhereInput[]
    OR?: OnRampTranstionScalarWhereInput[]
    NOT?: OnRampTranstionScalarWhereInput | OnRampTranstionScalarWhereInput[]
    id?: IntFilter<"OnRampTranstion"> | number
    userId?: IntFilter<"OnRampTranstion"> | number
    amount?: FloatFilter<"OnRampTranstion"> | number
    status?: EnumOnRampStatusFilter<"OnRampTranstion"> | $Enums.OnRampStatus
    startTime?: DateTimeFilter<"OnRampTranstion"> | Date | string
    token?: StringFilter<"OnRampTranstion"> | string
  }

  export type p2pTransactionsUpsertWithWhereUniqueWithoutSenderInput = {
    where: p2pTransactionsWhereUniqueInput
    update: XOR<p2pTransactionsUpdateWithoutSenderInput, p2pTransactionsUncheckedUpdateWithoutSenderInput>
    create: XOR<p2pTransactionsCreateWithoutSenderInput, p2pTransactionsUncheckedCreateWithoutSenderInput>
  }

  export type p2pTransactionsUpdateWithWhereUniqueWithoutSenderInput = {
    where: p2pTransactionsWhereUniqueInput
    data: XOR<p2pTransactionsUpdateWithoutSenderInput, p2pTransactionsUncheckedUpdateWithoutSenderInput>
  }

  export type p2pTransactionsUpdateManyWithWhereWithoutSenderInput = {
    where: p2pTransactionsScalarWhereInput
    data: XOR<p2pTransactionsUpdateManyMutationInput, p2pTransactionsUncheckedUpdateManyWithoutSenderInput>
  }

  export type p2pTransactionsScalarWhereInput = {
    AND?: p2pTransactionsScalarWhereInput | p2pTransactionsScalarWhereInput[]
    OR?: p2pTransactionsScalarWhereInput[]
    NOT?: p2pTransactionsScalarWhereInput | p2pTransactionsScalarWhereInput[]
    id?: IntFilter<"p2pTransactions"> | number
    SenderUserId?: IntFilter<"p2pTransactions"> | number
    RecieverUserId?: IntFilter<"p2pTransactions"> | number
    amount?: FloatFilter<"p2pTransactions"> | number
    status?: EnumOnRampStatusFilter<"p2pTransactions"> | $Enums.OnRampStatus
    startTime?: DateTimeFilter<"p2pTransactions"> | Date | string
  }

  export type p2pTransactionsUpsertWithWhereUniqueWithoutReceiverInput = {
    where: p2pTransactionsWhereUniqueInput
    update: XOR<p2pTransactionsUpdateWithoutReceiverInput, p2pTransactionsUncheckedUpdateWithoutReceiverInput>
    create: XOR<p2pTransactionsCreateWithoutReceiverInput, p2pTransactionsUncheckedCreateWithoutReceiverInput>
  }

  export type p2pTransactionsUpdateWithWhereUniqueWithoutReceiverInput = {
    where: p2pTransactionsWhereUniqueInput
    data: XOR<p2pTransactionsUpdateWithoutReceiverInput, p2pTransactionsUncheckedUpdateWithoutReceiverInput>
  }

  export type p2pTransactionsUpdateManyWithWhereWithoutReceiverInput = {
    where: p2pTransactionsScalarWhereInput
    data: XOR<p2pTransactionsUpdateManyMutationInput, p2pTransactionsUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutBalanceInput = {
    name: string
    email?: string | null
    number?: string | null
    password: string
    onRampTranstion?: OnRampTranstionCreateNestedManyWithoutUserInput
    sentTransactions?: p2pTransactionsCreateNestedManyWithoutSenderInput
    receivedTransactions?: p2pTransactionsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: number
    name: string
    email?: string | null
    number?: string | null
    password: string
    onRampTranstion?: OnRampTranstionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: p2pTransactionsUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: p2pTransactionsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpsertWithoutBalanceInput = {
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserUpdateWithoutBalanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    onRampTranstion?: OnRampTranstionUpdateManyWithoutUserNestedInput
    sentTransactions?: p2pTransactionsUpdateManyWithoutSenderNestedInput
    receivedTransactions?: p2pTransactionsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    onRampTranstion?: OnRampTranstionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: p2pTransactionsUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: p2pTransactionsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutOnRampTranstionInput = {
    name: string
    email?: string | null
    number?: string | null
    password: string
    Balance?: BalanceCreateNestedManyWithoutUserInput
    sentTransactions?: p2pTransactionsCreateNestedManyWithoutSenderInput
    receivedTransactions?: p2pTransactionsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutOnRampTranstionInput = {
    id?: number
    name: string
    email?: string | null
    number?: string | null
    password: string
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: p2pTransactionsUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: p2pTransactionsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutOnRampTranstionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnRampTranstionInput, UserUncheckedCreateWithoutOnRampTranstionInput>
  }

  export type UserUpsertWithoutOnRampTranstionInput = {
    update: XOR<UserUpdateWithoutOnRampTranstionInput, UserUncheckedUpdateWithoutOnRampTranstionInput>
    create: XOR<UserCreateWithoutOnRampTranstionInput, UserUncheckedCreateWithoutOnRampTranstionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnRampTranstionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnRampTranstionInput, UserUncheckedUpdateWithoutOnRampTranstionInput>
  }

  export type UserUpdateWithoutOnRampTranstionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    sentTransactions?: p2pTransactionsUpdateManyWithoutSenderNestedInput
    receivedTransactions?: p2pTransactionsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutOnRampTranstionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: p2pTransactionsUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: p2pTransactionsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSentTransactionsInput = {
    name: string
    email?: string | null
    number?: string | null
    password: string
    Balance?: BalanceCreateNestedManyWithoutUserInput
    onRampTranstion?: OnRampTranstionCreateNestedManyWithoutUserInput
    receivedTransactions?: p2pTransactionsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentTransactionsInput = {
    id?: number
    name: string
    email?: string | null
    number?: string | null
    password: string
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    onRampTranstion?: OnRampTranstionUncheckedCreateNestedManyWithoutUserInput
    receivedTransactions?: p2pTransactionsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
  }

  export type UserCreateWithoutReceivedTransactionsInput = {
    name: string
    email?: string | null
    number?: string | null
    password: string
    Balance?: BalanceCreateNestedManyWithoutUserInput
    onRampTranstion?: OnRampTranstionCreateNestedManyWithoutUserInput
    sentTransactions?: p2pTransactionsCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedTransactionsInput = {
    id?: number
    name: string
    email?: string | null
    number?: string | null
    password: string
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    onRampTranstion?: OnRampTranstionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: p2pTransactionsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
  }

  export type UserUpsertWithoutSentTransactionsInput = {
    update: XOR<UserUpdateWithoutSentTransactionsInput, UserUncheckedUpdateWithoutSentTransactionsInput>
    create: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentTransactionsInput, UserUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type UserUpdateWithoutSentTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    onRampTranstion?: OnRampTranstionUpdateManyWithoutUserNestedInput
    receivedTransactions?: p2pTransactionsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    onRampTranstion?: OnRampTranstionUncheckedUpdateManyWithoutUserNestedInput
    receivedTransactions?: p2pTransactionsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedTransactionsInput = {
    update: XOR<UserUpdateWithoutReceivedTransactionsInput, UserUncheckedUpdateWithoutReceivedTransactionsInput>
    create: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedTransactionsInput, UserUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type UserUpdateWithoutReceivedTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    onRampTranstion?: OnRampTranstionUpdateManyWithoutUserNestedInput
    sentTransactions?: p2pTransactionsUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    onRampTranstion?: OnRampTranstionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: p2pTransactionsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type BalanceCreateManyUserInput = {
    id?: number
    amount: number
    locked: number
  }

  export type OnRampTranstionCreateManyUserInput = {
    id?: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
    token: string
  }

  export type p2pTransactionsCreateManySenderInput = {
    id?: number
    RecieverUserId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
  }

  export type p2pTransactionsCreateManyReceiverInput = {
    id?: number
    SenderUserId: number
    amount: number
    status: $Enums.OnRampStatus
    startTime: Date | string
  }

  export type BalanceUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type OnRampTranstionUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type OnRampTranstionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type OnRampTranstionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type p2pTransactionsUpdateWithoutSenderInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput
  }

  export type p2pTransactionsUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    RecieverUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type p2pTransactionsUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    RecieverUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type p2pTransactionsUpdateWithoutReceiverInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentTransactionsNestedInput
  }

  export type p2pTransactionsUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    SenderUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type p2pTransactionsUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    SenderUserId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumOnRampStatusFieldUpdateOperationsInput | $Enums.OnRampStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}