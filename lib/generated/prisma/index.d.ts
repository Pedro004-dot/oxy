
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
 * Model Clinica
 * 
 */
export type Clinica = $Result.DefaultSelection<Prisma.$ClinicaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Conversa
 * 
 */
export type Conversa = $Result.DefaultSelection<Prisma.$ConversaPayload>
/**
 * Model Mensagem
 * 
 */
export type Mensagem = $Result.DefaultSelection<Prisma.$MensagemPayload>
/**
 * Model MensagemSugestao
 * 
 */
export type MensagemSugestao = $Result.DefaultSelection<Prisma.$MensagemSugestaoPayload>
/**
 * Model LogAcao
 * 
 */
export type LogAcao = $Result.DefaultSelection<Prisma.$LogAcaoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clinicas
 * const clinicas = await prisma.clinica.findMany()
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
   * // Fetch zero or more Clinicas
   * const clinicas = await prisma.clinica.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.clinica`: Exposes CRUD operations for the **Clinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinicas
    * const clinicas = await prisma.clinica.findMany()
    * ```
    */
  get clinica(): Prisma.ClinicaDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs>;

  /**
   * `prisma.conversa`: Exposes CRUD operations for the **Conversa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversas
    * const conversas = await prisma.conversa.findMany()
    * ```
    */
  get conversa(): Prisma.ConversaDelegate<ExtArgs>;

  /**
   * `prisma.mensagem`: Exposes CRUD operations for the **Mensagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagems
    * const mensagems = await prisma.mensagem.findMany()
    * ```
    */
  get mensagem(): Prisma.MensagemDelegate<ExtArgs>;

  /**
   * `prisma.mensagemSugestao`: Exposes CRUD operations for the **MensagemSugestao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MensagemSugestaos
    * const mensagemSugestaos = await prisma.mensagemSugestao.findMany()
    * ```
    */
  get mensagemSugestao(): Prisma.MensagemSugestaoDelegate<ExtArgs>;

  /**
   * `prisma.logAcao`: Exposes CRUD operations for the **LogAcao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAcaos
    * const logAcaos = await prisma.logAcao.findMany()
    * ```
    */
  get logAcao(): Prisma.LogAcaoDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Clinica: 'Clinica',
    Usuario: 'Usuario',
    Paciente: 'Paciente',
    Conversa: 'Conversa',
    Mensagem: 'Mensagem',
    MensagemSugestao: 'MensagemSugestao',
    LogAcao: 'LogAcao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "clinica" | "usuario" | "paciente" | "conversa" | "mensagem" | "mensagemSugestao" | "logAcao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Clinica: {
        payload: Prisma.$ClinicaPayload<ExtArgs>
        fields: Prisma.ClinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          findFirst: {
            args: Prisma.ClinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          findMany: {
            args: Prisma.ClinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>[]
          }
          create: {
            args: Prisma.ClinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          createMany: {
            args: Prisma.ClinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClinicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>[]
          }
          delete: {
            args: Prisma.ClinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          update: {
            args: Prisma.ClinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          deleteMany: {
            args: Prisma.ClinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClinicaPayload>
          }
          aggregate: {
            args: Prisma.ClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinica>
          }
          groupBy: {
            args: Prisma.ClinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClinicaCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Conversa: {
        payload: Prisma.$ConversaPayload<ExtArgs>
        fields: Prisma.ConversaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          findFirst: {
            args: Prisma.ConversaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          findMany: {
            args: Prisma.ConversaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>[]
          }
          create: {
            args: Prisma.ConversaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          createMany: {
            args: Prisma.ConversaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>[]
          }
          delete: {
            args: Prisma.ConversaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          update: {
            args: Prisma.ConversaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          deleteMany: {
            args: Prisma.ConversaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversaPayload>
          }
          aggregate: {
            args: Prisma.ConversaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversa>
          }
          groupBy: {
            args: Prisma.ConversaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversaCountArgs<ExtArgs>
            result: $Utils.Optional<ConversaCountAggregateOutputType> | number
          }
        }
      }
      Mensagem: {
        payload: Prisma.$MensagemPayload<ExtArgs>
        fields: Prisma.MensagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findFirst: {
            args: Prisma.MensagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findMany: {
            args: Prisma.MensagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          create: {
            args: Prisma.MensagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          createMany: {
            args: Prisma.MensagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          delete: {
            args: Prisma.MensagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          update: {
            args: Prisma.MensagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          deleteMany: {
            args: Prisma.MensagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MensagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          aggregate: {
            args: Prisma.MensagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagem>
          }
          groupBy: {
            args: Prisma.MensagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemCountAggregateOutputType> | number
          }
        }
      }
      MensagemSugestao: {
        payload: Prisma.$MensagemSugestaoPayload<ExtArgs>
        fields: Prisma.MensagemSugestaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemSugestaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemSugestaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload>
          }
          findFirst: {
            args: Prisma.MensagemSugestaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemSugestaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload>
          }
          findMany: {
            args: Prisma.MensagemSugestaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload>[]
          }
          create: {
            args: Prisma.MensagemSugestaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload>
          }
          createMany: {
            args: Prisma.MensagemSugestaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemSugestaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload>[]
          }
          delete: {
            args: Prisma.MensagemSugestaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload>
          }
          update: {
            args: Prisma.MensagemSugestaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload>
          }
          deleteMany: {
            args: Prisma.MensagemSugestaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemSugestaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MensagemSugestaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemSugestaoPayload>
          }
          aggregate: {
            args: Prisma.MensagemSugestaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagemSugestao>
          }
          groupBy: {
            args: Prisma.MensagemSugestaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemSugestaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemSugestaoCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemSugestaoCountAggregateOutputType> | number
          }
        }
      }
      LogAcao: {
        payload: Prisma.$LogAcaoPayload<ExtArgs>
        fields: Prisma.LogAcaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAcaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAcaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload>
          }
          findFirst: {
            args: Prisma.LogAcaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAcaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload>
          }
          findMany: {
            args: Prisma.LogAcaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload>[]
          }
          create: {
            args: Prisma.LogAcaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload>
          }
          createMany: {
            args: Prisma.LogAcaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogAcaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload>[]
          }
          delete: {
            args: Prisma.LogAcaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload>
          }
          update: {
            args: Prisma.LogAcaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload>
          }
          deleteMany: {
            args: Prisma.LogAcaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogAcaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogAcaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAcaoPayload>
          }
          aggregate: {
            args: Prisma.LogAcaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogAcao>
          }
          groupBy: {
            args: Prisma.LogAcaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogAcaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAcaoCountArgs<ExtArgs>
            result: $Utils.Optional<LogAcaoCountAggregateOutputType> | number
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
   * Count Type ClinicaCountOutputType
   */

  export type ClinicaCountOutputType = {
    usuarios: number
    pacientes: number
    conversas: number
  }

  export type ClinicaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | ClinicaCountOutputTypeCountUsuariosArgs
    pacientes?: boolean | ClinicaCountOutputTypeCountPacientesArgs
    conversas?: boolean | ClinicaCountOutputTypeCountConversasArgs
  }

  // Custom InputTypes
  /**
   * ClinicaCountOutputType without action
   */
  export type ClinicaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicaCountOutputType
     */
    select?: ClinicaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClinicaCountOutputType without action
   */
  export type ClinicaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * ClinicaCountOutputType without action
   */
  export type ClinicaCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * ClinicaCountOutputType without action
   */
  export type ClinicaCountOutputTypeCountConversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversaWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    conversas: number
    mensagens: number
    logs: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversas?: boolean | UsuarioCountOutputTypeCountConversasArgs
    mensagens?: boolean | UsuarioCountOutputTypeCountMensagensArgs
    logs?: boolean | UsuarioCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountConversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAcaoWhereInput
  }


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    conversas: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversas?: boolean | PacienteCountOutputTypeCountConversasArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountConversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversaWhereInput
  }


  /**
   * Count Type ConversaCountOutputType
   */

  export type ConversaCountOutputType = {
    mensagens: number
    logs: number
  }

  export type ConversaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagens?: boolean | ConversaCountOutputTypeCountMensagensArgs
    logs?: boolean | ConversaCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ConversaCountOutputType without action
   */
  export type ConversaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversaCountOutputType
     */
    select?: ConversaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversaCountOutputType without action
   */
  export type ConversaCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }

  /**
   * ConversaCountOutputType without action
   */
  export type ConversaCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAcaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Clinica
   */

  export type AggregateClinica = {
    _count: ClinicaCountAggregateOutputType | null
    _min: ClinicaMinAggregateOutputType | null
    _max: ClinicaMaxAggregateOutputType | null
  }

  export type ClinicaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
    createdAt: Date | null
  }

  export type ClinicaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cnpj: string | null
    telefone: string | null
    createdAt: Date | null
  }

  export type ClinicaCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    telefone: number
    createdAt: number
    _all: number
  }


  export type ClinicaMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    createdAt?: true
  }

  export type ClinicaMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    createdAt?: true
  }

  export type ClinicaCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    telefone?: true
    createdAt?: true
    _all?: true
  }

  export type ClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinica to aggregate.
     */
    where?: ClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinicas to fetch.
     */
    orderBy?: ClinicaOrderByWithRelationInput | ClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clinicas
    **/
    _count?: true | ClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicaMaxAggregateInputType
  }

  export type GetClinicaAggregateType<T extends ClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinica[P]>
      : GetScalarType<T[P], AggregateClinica[P]>
  }




  export type ClinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClinicaWhereInput
    orderBy?: ClinicaOrderByWithAggregationInput | ClinicaOrderByWithAggregationInput[]
    by: ClinicaScalarFieldEnum[] | ClinicaScalarFieldEnum
    having?: ClinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicaCountAggregateInputType | true
    _min?: ClinicaMinAggregateInputType
    _max?: ClinicaMaxAggregateInputType
  }

  export type ClinicaGroupByOutputType = {
    id: string
    nome: string
    cnpj: string
    telefone: string
    createdAt: Date
    _count: ClinicaCountAggregateOutputType | null
    _min: ClinicaMinAggregateOutputType | null
    _max: ClinicaMaxAggregateOutputType | null
  }

  type GetClinicaGroupByPayload<T extends ClinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicaGroupByOutputType[P]>
        }
      >
    >


  export type ClinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    createdAt?: boolean
    usuarios?: boolean | Clinica$usuariosArgs<ExtArgs>
    pacientes?: boolean | Clinica$pacientesArgs<ExtArgs>
    conversas?: boolean | Clinica$conversasArgs<ExtArgs>
    _count?: boolean | ClinicaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clinica"]>

  export type ClinicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clinica"]>

  export type ClinicaSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    telefone?: boolean
    createdAt?: boolean
  }

  export type ClinicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Clinica$usuariosArgs<ExtArgs>
    pacientes?: boolean | Clinica$pacientesArgs<ExtArgs>
    conversas?: boolean | Clinica$conversasArgs<ExtArgs>
    _count?: boolean | ClinicaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClinicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clinica"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
      conversas: Prisma.$ConversaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cnpj: string
      telefone: string
      createdAt: Date
    }, ExtArgs["result"]["clinica"]>
    composites: {}
  }

  type ClinicaGetPayload<S extends boolean | null | undefined | ClinicaDefaultArgs> = $Result.GetResult<Prisma.$ClinicaPayload, S>

  type ClinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClinicaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClinicaCountAggregateInputType | true
    }

  export interface ClinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clinica'], meta: { name: 'Clinica' } }
    /**
     * Find zero or one Clinica that matches the filter.
     * @param {ClinicaFindUniqueArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClinicaFindUniqueArgs>(args: SelectSubset<T, ClinicaFindUniqueArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clinica that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClinicaFindUniqueOrThrowArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, ClinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaFindFirstArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClinicaFindFirstArgs>(args?: SelectSubset<T, ClinicaFindFirstArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaFindFirstOrThrowArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, ClinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinicas
     * const clinicas = await prisma.clinica.findMany()
     * 
     * // Get first 10 Clinicas
     * const clinicas = await prisma.clinica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicaWithIdOnly = await prisma.clinica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClinicaFindManyArgs>(args?: SelectSubset<T, ClinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clinica.
     * @param {ClinicaCreateArgs} args - Arguments to create a Clinica.
     * @example
     * // Create one Clinica
     * const Clinica = await prisma.clinica.create({
     *   data: {
     *     // ... data to create a Clinica
     *   }
     * })
     * 
     */
    create<T extends ClinicaCreateArgs>(args: SelectSubset<T, ClinicaCreateArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clinicas.
     * @param {ClinicaCreateManyArgs} args - Arguments to create many Clinicas.
     * @example
     * // Create many Clinicas
     * const clinica = await prisma.clinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClinicaCreateManyArgs>(args?: SelectSubset<T, ClinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clinicas and returns the data saved in the database.
     * @param {ClinicaCreateManyAndReturnArgs} args - Arguments to create many Clinicas.
     * @example
     * // Create many Clinicas
     * const clinica = await prisma.clinica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clinicas and only return the `id`
     * const clinicaWithIdOnly = await prisma.clinica.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClinicaCreateManyAndReturnArgs>(args?: SelectSubset<T, ClinicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clinica.
     * @param {ClinicaDeleteArgs} args - Arguments to delete one Clinica.
     * @example
     * // Delete one Clinica
     * const Clinica = await prisma.clinica.delete({
     *   where: {
     *     // ... filter to delete one Clinica
     *   }
     * })
     * 
     */
    delete<T extends ClinicaDeleteArgs>(args: SelectSubset<T, ClinicaDeleteArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clinica.
     * @param {ClinicaUpdateArgs} args - Arguments to update one Clinica.
     * @example
     * // Update one Clinica
     * const clinica = await prisma.clinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClinicaUpdateArgs>(args: SelectSubset<T, ClinicaUpdateArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clinicas.
     * @param {ClinicaDeleteManyArgs} args - Arguments to filter Clinicas to delete.
     * @example
     * // Delete a few Clinicas
     * const { count } = await prisma.clinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClinicaDeleteManyArgs>(args?: SelectSubset<T, ClinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinicas
     * const clinica = await prisma.clinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClinicaUpdateManyArgs>(args: SelectSubset<T, ClinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clinica.
     * @param {ClinicaUpsertArgs} args - Arguments to update or create a Clinica.
     * @example
     * // Update or create a Clinica
     * const clinica = await prisma.clinica.upsert({
     *   create: {
     *     // ... data to create a Clinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinica we want to update
     *   }
     * })
     */
    upsert<T extends ClinicaUpsertArgs>(args: SelectSubset<T, ClinicaUpsertArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaCountArgs} args - Arguments to filter Clinicas to count.
     * @example
     * // Count the number of Clinicas
     * const count = await prisma.clinica.count({
     *   where: {
     *     // ... the filter for the Clinicas we want to count
     *   }
     * })
    **/
    count<T extends ClinicaCountArgs>(
      args?: Subset<T, ClinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicaAggregateArgs>(args: Subset<T, ClinicaAggregateArgs>): Prisma.PrismaPromise<GetClinicaAggregateType<T>>

    /**
     * Group by Clinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaGroupByArgs} args - Group by arguments.
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
      T extends ClinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClinicaGroupByArgs['orderBy'] }
        : { orderBy?: ClinicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clinica model
   */
  readonly fields: ClinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Clinica$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Clinica$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    pacientes<T extends Clinica$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Clinica$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany"> | Null>
    conversas<T extends Clinica$conversasArgs<ExtArgs> = {}>(args?: Subset<T, Clinica$conversasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Clinica model
   */ 
  interface ClinicaFieldRefs {
    readonly id: FieldRef<"Clinica", 'String'>
    readonly nome: FieldRef<"Clinica", 'String'>
    readonly cnpj: FieldRef<"Clinica", 'String'>
    readonly telefone: FieldRef<"Clinica", 'String'>
    readonly createdAt: FieldRef<"Clinica", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clinica findUnique
   */
  export type ClinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinica to fetch.
     */
    where: ClinicaWhereUniqueInput
  }

  /**
   * Clinica findUniqueOrThrow
   */
  export type ClinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinica to fetch.
     */
    where: ClinicaWhereUniqueInput
  }

  /**
   * Clinica findFirst
   */
  export type ClinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinica to fetch.
     */
    where?: ClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinicas to fetch.
     */
    orderBy?: ClinicaOrderByWithRelationInput | ClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinicas.
     */
    cursor?: ClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinicas.
     */
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * Clinica findFirstOrThrow
   */
  export type ClinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinica to fetch.
     */
    where?: ClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinicas to fetch.
     */
    orderBy?: ClinicaOrderByWithRelationInput | ClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clinicas.
     */
    cursor?: ClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clinicas.
     */
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * Clinica findMany
   */
  export type ClinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Clinicas to fetch.
     */
    where?: ClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clinicas to fetch.
     */
    orderBy?: ClinicaOrderByWithRelationInput | ClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clinicas.
     */
    cursor?: ClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clinicas.
     */
    skip?: number
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * Clinica create
   */
  export type ClinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * The data needed to create a Clinica.
     */
    data: XOR<ClinicaCreateInput, ClinicaUncheckedCreateInput>
  }

  /**
   * Clinica createMany
   */
  export type ClinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clinicas.
     */
    data: ClinicaCreateManyInput | ClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinica createManyAndReturn
   */
  export type ClinicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clinicas.
     */
    data: ClinicaCreateManyInput | ClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clinica update
   */
  export type ClinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * The data needed to update a Clinica.
     */
    data: XOR<ClinicaUpdateInput, ClinicaUncheckedUpdateInput>
    /**
     * Choose, which Clinica to update.
     */
    where: ClinicaWhereUniqueInput
  }

  /**
   * Clinica updateMany
   */
  export type ClinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clinicas.
     */
    data: XOR<ClinicaUpdateManyMutationInput, ClinicaUncheckedUpdateManyInput>
    /**
     * Filter which Clinicas to update
     */
    where?: ClinicaWhereInput
  }

  /**
   * Clinica upsert
   */
  export type ClinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * The filter to search for the Clinica to update in case it exists.
     */
    where: ClinicaWhereUniqueInput
    /**
     * In case the Clinica found by the `where` argument doesn't exist, create a new Clinica with this data.
     */
    create: XOR<ClinicaCreateInput, ClinicaUncheckedCreateInput>
    /**
     * In case the Clinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClinicaUpdateInput, ClinicaUncheckedUpdateInput>
  }

  /**
   * Clinica delete
   */
  export type ClinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
    /**
     * Filter which Clinica to delete.
     */
    where: ClinicaWhereUniqueInput
  }

  /**
   * Clinica deleteMany
   */
  export type ClinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clinicas to delete
     */
    where?: ClinicaWhereInput
  }

  /**
   * Clinica.usuarios
   */
  export type Clinica$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Clinica.pacientes
   */
  export type Clinica$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Clinica.conversas
   */
  export type Clinica$conversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    where?: ConversaWhereInput
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    cursor?: ConversaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Clinica without action
   */
  export type ClinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clinica
     */
    select?: ClinicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClinicaInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    clinicaId: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    papel: string | null
    ultimoLogin: Date | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    clinicaId: string | null
    nome: string | null
    email: string | null
    senhaHash: string | null
    papel: string | null
    ultimoLogin: Date | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    clinicaId: number
    nome: number
    email: number
    senhaHash: number
    papel: number
    ultimoLogin: number
    createdAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    clinicaId?: true
    nome?: true
    email?: true
    senhaHash?: true
    papel?: true
    ultimoLogin?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    clinicaId?: true
    nome?: true
    email?: true
    senhaHash?: true
    papel?: true
    ultimoLogin?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    clinicaId?: true
    nome?: true
    email?: true
    senhaHash?: true
    papel?: true
    ultimoLogin?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    clinicaId: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin: Date | null
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicaId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    papel?: boolean
    ultimoLogin?: boolean
    createdAt?: boolean
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    conversas?: boolean | Usuario$conversasArgs<ExtArgs>
    mensagens?: boolean | Usuario$mensagensArgs<ExtArgs>
    logs?: boolean | Usuario$logsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicaId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    papel?: boolean
    ultimoLogin?: boolean
    createdAt?: boolean
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    clinicaId?: boolean
    nome?: boolean
    email?: boolean
    senhaHash?: boolean
    papel?: boolean
    ultimoLogin?: boolean
    createdAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    conversas?: boolean | Usuario$conversasArgs<ExtArgs>
    mensagens?: boolean | Usuario$mensagensArgs<ExtArgs>
    logs?: boolean | Usuario$logsArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      clinica: Prisma.$ClinicaPayload<ExtArgs>
      conversas: Prisma.$ConversaPayload<ExtArgs>[]
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
      logs: Prisma.$LogAcaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicaId: string
      nome: string
      email: string
      senhaHash: string
      papel: string
      ultimoLogin: Date | null
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinica<T extends ClinicaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicaDefaultArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    conversas<T extends Usuario$conversasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$conversasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findMany"> | Null>
    mensagens<T extends Usuario$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany"> | Null>
    logs<T extends Usuario$logsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly clinicaId: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senhaHash: FieldRef<"Usuario", 'String'>
    readonly papel: FieldRef<"Usuario", 'String'>
    readonly ultimoLogin: FieldRef<"Usuario", 'DateTime'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.conversas
   */
  export type Usuario$conversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    where?: ConversaWhereInput
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    cursor?: ConversaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Usuario.mensagens
   */
  export type Usuario$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Usuario.logs
   */
  export type Usuario$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    where?: LogAcaoWhereInput
    orderBy?: LogAcaoOrderByWithRelationInput | LogAcaoOrderByWithRelationInput[]
    cursor?: LogAcaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAcaoScalarFieldEnum | LogAcaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteMinAggregateOutputType = {
    id: string | null
    clinicaId: string | null
    nome: string | null
    telefone: string | null
    cpf: string | null
    dataNascimento: Date | null
    createdAt: Date | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: string | null
    clinicaId: string | null
    nome: string | null
    telefone: string | null
    cpf: string | null
    dataNascimento: Date | null
    createdAt: Date | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    clinicaId: number
    nome: number
    telefone: number
    cpf: number
    dataNascimento: number
    createdAt: number
    _all: number
  }


  export type PacienteMinAggregateInputType = {
    id?: true
    clinicaId?: true
    nome?: true
    telefone?: true
    cpf?: true
    dataNascimento?: true
    createdAt?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    clinicaId?: true
    nome?: true
    telefone?: true
    cpf?: true
    dataNascimento?: true
    createdAt?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    clinicaId?: true
    nome?: true
    telefone?: true
    cpf?: true
    dataNascimento?: true
    createdAt?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: string
    clinicaId: string
    nome: string
    telefone: string
    cpf: string | null
    dataNascimento: Date | null
    createdAt: Date
    _count: PacienteCountAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicaId?: boolean
    nome?: boolean
    telefone?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    conversas?: boolean | Paciente$conversasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clinicaId?: boolean
    nome?: boolean
    telefone?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    clinicaId?: boolean
    nome?: boolean
    telefone?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    createdAt?: boolean
  }

  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    conversas?: boolean | Paciente$conversasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      clinica: Prisma.$ClinicaPayload<ExtArgs>
      conversas: Prisma.$ConversaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clinicaId: string
      nome: string
      telefone: string
      cpf: string | null
      dataNascimento: Date | null
      createdAt: Date
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clinica<T extends ClinicaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicaDefaultArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    conversas<T extends Paciente$conversasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$conversasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Paciente model
   */ 
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'String'>
    readonly clinicaId: FieldRef<"Paciente", 'String'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly telefone: FieldRef<"Paciente", 'String'>
    readonly cpf: FieldRef<"Paciente", 'String'>
    readonly dataNascimento: FieldRef<"Paciente", 'DateTime'>
    readonly createdAt: FieldRef<"Paciente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
  }

  /**
   * Paciente.conversas
   */
  export type Paciente$conversasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    where?: ConversaWhereInput
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    cursor?: ConversaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Conversa
   */

  export type AggregateConversa = {
    _count: ConversaCountAggregateOutputType | null
    _min: ConversaMinAggregateOutputType | null
    _max: ConversaMaxAggregateOutputType | null
  }

  export type ConversaMinAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    clinicaId: string | null
    status: string | null
    ultimoContatoEm: Date | null
    responsavelAtendimentoId: string | null
  }

  export type ConversaMaxAggregateOutputType = {
    id: string | null
    pacienteId: string | null
    clinicaId: string | null
    status: string | null
    ultimoContatoEm: Date | null
    responsavelAtendimentoId: string | null
  }

  export type ConversaCountAggregateOutputType = {
    id: number
    pacienteId: number
    clinicaId: number
    status: number
    ultimoContatoEm: number
    responsavelAtendimentoId: number
    _all: number
  }


  export type ConversaMinAggregateInputType = {
    id?: true
    pacienteId?: true
    clinicaId?: true
    status?: true
    ultimoContatoEm?: true
    responsavelAtendimentoId?: true
  }

  export type ConversaMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    clinicaId?: true
    status?: true
    ultimoContatoEm?: true
    responsavelAtendimentoId?: true
  }

  export type ConversaCountAggregateInputType = {
    id?: true
    pacienteId?: true
    clinicaId?: true
    status?: true
    ultimoContatoEm?: true
    responsavelAtendimentoId?: true
    _all?: true
  }

  export type ConversaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversa to aggregate.
     */
    where?: ConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversas to fetch.
     */
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversas
    **/
    _count?: true | ConversaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversaMaxAggregateInputType
  }

  export type GetConversaAggregateType<T extends ConversaAggregateArgs> = {
        [P in keyof T & keyof AggregateConversa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversa[P]>
      : GetScalarType<T[P], AggregateConversa[P]>
  }




  export type ConversaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversaWhereInput
    orderBy?: ConversaOrderByWithAggregationInput | ConversaOrderByWithAggregationInput[]
    by: ConversaScalarFieldEnum[] | ConversaScalarFieldEnum
    having?: ConversaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversaCountAggregateInputType | true
    _min?: ConversaMinAggregateInputType
    _max?: ConversaMaxAggregateInputType
  }

  export type ConversaGroupByOutputType = {
    id: string
    pacienteId: string
    clinicaId: string
    status: string
    ultimoContatoEm: Date | null
    responsavelAtendimentoId: string | null
    _count: ConversaCountAggregateOutputType | null
    _min: ConversaMinAggregateOutputType | null
    _max: ConversaMaxAggregateOutputType | null
  }

  type GetConversaGroupByPayload<T extends ConversaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversaGroupByOutputType[P]>
            : GetScalarType<T[P], ConversaGroupByOutputType[P]>
        }
      >
    >


  export type ConversaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    clinicaId?: boolean
    status?: boolean
    ultimoContatoEm?: boolean
    responsavelAtendimentoId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    responsavelAtendimento?: boolean | Conversa$responsavelAtendimentoArgs<ExtArgs>
    mensagens?: boolean | Conversa$mensagensArgs<ExtArgs>
    logs?: boolean | Conversa$logsArgs<ExtArgs>
    _count?: boolean | ConversaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversa"]>

  export type ConversaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    clinicaId?: boolean
    status?: boolean
    ultimoContatoEm?: boolean
    responsavelAtendimentoId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    responsavelAtendimento?: boolean | Conversa$responsavelAtendimentoArgs<ExtArgs>
  }, ExtArgs["result"]["conversa"]>

  export type ConversaSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    clinicaId?: boolean
    status?: boolean
    ultimoContatoEm?: boolean
    responsavelAtendimentoId?: boolean
  }

  export type ConversaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    responsavelAtendimento?: boolean | Conversa$responsavelAtendimentoArgs<ExtArgs>
    mensagens?: boolean | Conversa$mensagensArgs<ExtArgs>
    logs?: boolean | Conversa$logsArgs<ExtArgs>
    _count?: boolean | ConversaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    clinica?: boolean | ClinicaDefaultArgs<ExtArgs>
    responsavelAtendimento?: boolean | Conversa$responsavelAtendimentoArgs<ExtArgs>
  }

  export type $ConversaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversa"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      clinica: Prisma.$ClinicaPayload<ExtArgs>
      responsavelAtendimento: Prisma.$UsuarioPayload<ExtArgs> | null
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
      logs: Prisma.$LogAcaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pacienteId: string
      clinicaId: string
      status: string
      ultimoContatoEm: Date | null
      responsavelAtendimentoId: string | null
    }, ExtArgs["result"]["conversa"]>
    composites: {}
  }

  type ConversaGetPayload<S extends boolean | null | undefined | ConversaDefaultArgs> = $Result.GetResult<Prisma.$ConversaPayload, S>

  type ConversaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversaCountAggregateInputType | true
    }

  export interface ConversaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversa'], meta: { name: 'Conversa' } }
    /**
     * Find zero or one Conversa that matches the filter.
     * @param {ConversaFindUniqueArgs} args - Arguments to find a Conversa
     * @example
     * // Get one Conversa
     * const conversa = await prisma.conversa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversaFindUniqueArgs>(args: SelectSubset<T, ConversaFindUniqueArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Conversa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConversaFindUniqueOrThrowArgs} args - Arguments to find a Conversa
     * @example
     * // Get one Conversa
     * const conversa = await prisma.conversa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Conversa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaFindFirstArgs} args - Arguments to find a Conversa
     * @example
     * // Get one Conversa
     * const conversa = await prisma.conversa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversaFindFirstArgs>(args?: SelectSubset<T, ConversaFindFirstArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Conversa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaFindFirstOrThrowArgs} args - Arguments to find a Conversa
     * @example
     * // Get one Conversa
     * const conversa = await prisma.conversa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Conversas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversas
     * const conversas = await prisma.conversa.findMany()
     * 
     * // Get first 10 Conversas
     * const conversas = await prisma.conversa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversaWithIdOnly = await prisma.conversa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversaFindManyArgs>(args?: SelectSubset<T, ConversaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Conversa.
     * @param {ConversaCreateArgs} args - Arguments to create a Conversa.
     * @example
     * // Create one Conversa
     * const Conversa = await prisma.conversa.create({
     *   data: {
     *     // ... data to create a Conversa
     *   }
     * })
     * 
     */
    create<T extends ConversaCreateArgs>(args: SelectSubset<T, ConversaCreateArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Conversas.
     * @param {ConversaCreateManyArgs} args - Arguments to create many Conversas.
     * @example
     * // Create many Conversas
     * const conversa = await prisma.conversa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversaCreateManyArgs>(args?: SelectSubset<T, ConversaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversas and returns the data saved in the database.
     * @param {ConversaCreateManyAndReturnArgs} args - Arguments to create many Conversas.
     * @example
     * // Create many Conversas
     * const conversa = await prisma.conversa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversas and only return the `id`
     * const conversaWithIdOnly = await prisma.conversa.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Conversa.
     * @param {ConversaDeleteArgs} args - Arguments to delete one Conversa.
     * @example
     * // Delete one Conversa
     * const Conversa = await prisma.conversa.delete({
     *   where: {
     *     // ... filter to delete one Conversa
     *   }
     * })
     * 
     */
    delete<T extends ConversaDeleteArgs>(args: SelectSubset<T, ConversaDeleteArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Conversa.
     * @param {ConversaUpdateArgs} args - Arguments to update one Conversa.
     * @example
     * // Update one Conversa
     * const conversa = await prisma.conversa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversaUpdateArgs>(args: SelectSubset<T, ConversaUpdateArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Conversas.
     * @param {ConversaDeleteManyArgs} args - Arguments to filter Conversas to delete.
     * @example
     * // Delete a few Conversas
     * const { count } = await prisma.conversa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversaDeleteManyArgs>(args?: SelectSubset<T, ConversaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversas
     * const conversa = await prisma.conversa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversaUpdateManyArgs>(args: SelectSubset<T, ConversaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversa.
     * @param {ConversaUpsertArgs} args - Arguments to update or create a Conversa.
     * @example
     * // Update or create a Conversa
     * const conversa = await prisma.conversa.upsert({
     *   create: {
     *     // ... data to create a Conversa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversa we want to update
     *   }
     * })
     */
    upsert<T extends ConversaUpsertArgs>(args: SelectSubset<T, ConversaUpsertArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Conversas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaCountArgs} args - Arguments to filter Conversas to count.
     * @example
     * // Count the number of Conversas
     * const count = await prisma.conversa.count({
     *   where: {
     *     // ... the filter for the Conversas we want to count
     *   }
     * })
    **/
    count<T extends ConversaCountArgs>(
      args?: Subset<T, ConversaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversaAggregateArgs>(args: Subset<T, ConversaAggregateArgs>): Prisma.PrismaPromise<GetConversaAggregateType<T>>

    /**
     * Group by Conversa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversaGroupByArgs} args - Group by arguments.
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
      T extends ConversaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversaGroupByArgs['orderBy'] }
        : { orderBy?: ConversaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversa model
   */
  readonly fields: ConversaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    clinica<T extends ClinicaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClinicaDefaultArgs<ExtArgs>>): Prisma__ClinicaClient<$Result.GetResult<Prisma.$ClinicaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    responsavelAtendimento<T extends Conversa$responsavelAtendimentoArgs<ExtArgs> = {}>(args?: Subset<T, Conversa$responsavelAtendimentoArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    mensagens<T extends Conversa$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Conversa$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany"> | Null>
    logs<T extends Conversa$logsArgs<ExtArgs> = {}>(args?: Subset<T, Conversa$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Conversa model
   */ 
  interface ConversaFieldRefs {
    readonly id: FieldRef<"Conversa", 'String'>
    readonly pacienteId: FieldRef<"Conversa", 'String'>
    readonly clinicaId: FieldRef<"Conversa", 'String'>
    readonly status: FieldRef<"Conversa", 'String'>
    readonly ultimoContatoEm: FieldRef<"Conversa", 'DateTime'>
    readonly responsavelAtendimentoId: FieldRef<"Conversa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conversa findUnique
   */
  export type ConversaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversa to fetch.
     */
    where: ConversaWhereUniqueInput
  }

  /**
   * Conversa findUniqueOrThrow
   */
  export type ConversaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversa to fetch.
     */
    where: ConversaWhereUniqueInput
  }

  /**
   * Conversa findFirst
   */
  export type ConversaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversa to fetch.
     */
    where?: ConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversas to fetch.
     */
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversas.
     */
    cursor?: ConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversas.
     */
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Conversa findFirstOrThrow
   */
  export type ConversaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversa to fetch.
     */
    where?: ConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversas to fetch.
     */
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversas.
     */
    cursor?: ConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversas.
     */
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Conversa findMany
   */
  export type ConversaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter, which Conversas to fetch.
     */
    where?: ConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversas to fetch.
     */
    orderBy?: ConversaOrderByWithRelationInput | ConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversas.
     */
    cursor?: ConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversas.
     */
    skip?: number
    distinct?: ConversaScalarFieldEnum | ConversaScalarFieldEnum[]
  }

  /**
   * Conversa create
   */
  export type ConversaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversa.
     */
    data: XOR<ConversaCreateInput, ConversaUncheckedCreateInput>
  }

  /**
   * Conversa createMany
   */
  export type ConversaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversas.
     */
    data: ConversaCreateManyInput | ConversaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversa createManyAndReturn
   */
  export type ConversaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Conversas.
     */
    data: ConversaCreateManyInput | ConversaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversa update
   */
  export type ConversaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversa.
     */
    data: XOR<ConversaUpdateInput, ConversaUncheckedUpdateInput>
    /**
     * Choose, which Conversa to update.
     */
    where: ConversaWhereUniqueInput
  }

  /**
   * Conversa updateMany
   */
  export type ConversaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversas.
     */
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyInput>
    /**
     * Filter which Conversas to update
     */
    where?: ConversaWhereInput
  }

  /**
   * Conversa upsert
   */
  export type ConversaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversa to update in case it exists.
     */
    where: ConversaWhereUniqueInput
    /**
     * In case the Conversa found by the `where` argument doesn't exist, create a new Conversa with this data.
     */
    create: XOR<ConversaCreateInput, ConversaUncheckedCreateInput>
    /**
     * In case the Conversa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversaUpdateInput, ConversaUncheckedUpdateInput>
  }

  /**
   * Conversa delete
   */
  export type ConversaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    /**
     * Filter which Conversa to delete.
     */
    where: ConversaWhereUniqueInput
  }

  /**
   * Conversa deleteMany
   */
  export type ConversaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversas to delete
     */
    where?: ConversaWhereInput
  }

  /**
   * Conversa.responsavelAtendimento
   */
  export type Conversa$responsavelAtendimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Conversa.mensagens
   */
  export type Conversa$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Conversa.logs
   */
  export type Conversa$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    where?: LogAcaoWhereInput
    orderBy?: LogAcaoOrderByWithRelationInput | LogAcaoOrderByWithRelationInput[]
    cursor?: LogAcaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAcaoScalarFieldEnum | LogAcaoScalarFieldEnum[]
  }

  /**
   * Conversa without action
   */
  export type ConversaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
  }


  /**
   * Model Mensagem
   */

  export type AggregateMensagem = {
    _count: MensagemCountAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  export type MensagemMinAggregateOutputType = {
    id: string | null
    conversaId: string | null
    autorTipo: string | null
    autorId: string | null
    conteudo: string | null
    tipo: string | null
    whatsappMsgId: string | null
    recebidaEm: Date | null
    criadaEm: Date | null
  }

  export type MensagemMaxAggregateOutputType = {
    id: string | null
    conversaId: string | null
    autorTipo: string | null
    autorId: string | null
    conteudo: string | null
    tipo: string | null
    whatsappMsgId: string | null
    recebidaEm: Date | null
    criadaEm: Date | null
  }

  export type MensagemCountAggregateOutputType = {
    id: number
    conversaId: number
    autorTipo: number
    autorId: number
    conteudo: number
    tipo: number
    whatsappMsgId: number
    recebidaEm: number
    criadaEm: number
    _all: number
  }


  export type MensagemMinAggregateInputType = {
    id?: true
    conversaId?: true
    autorTipo?: true
    autorId?: true
    conteudo?: true
    tipo?: true
    whatsappMsgId?: true
    recebidaEm?: true
    criadaEm?: true
  }

  export type MensagemMaxAggregateInputType = {
    id?: true
    conversaId?: true
    autorTipo?: true
    autorId?: true
    conteudo?: true
    tipo?: true
    whatsappMsgId?: true
    recebidaEm?: true
    criadaEm?: true
  }

  export type MensagemCountAggregateInputType = {
    id?: true
    conversaId?: true
    autorTipo?: true
    autorId?: true
    conteudo?: true
    tipo?: true
    whatsappMsgId?: true
    recebidaEm?: true
    criadaEm?: true
    _all?: true
  }

  export type MensagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagem to aggregate.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensagems
    **/
    _count?: true | MensagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemMaxAggregateInputType
  }

  export type GetMensagemAggregateType<T extends MensagemAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagem[P]>
      : GetScalarType<T[P], AggregateMensagem[P]>
  }




  export type MensagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithAggregationInput | MensagemOrderByWithAggregationInput[]
    by: MensagemScalarFieldEnum[] | MensagemScalarFieldEnum
    having?: MensagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemCountAggregateInputType | true
    _min?: MensagemMinAggregateInputType
    _max?: MensagemMaxAggregateInputType
  }

  export type MensagemGroupByOutputType = {
    id: string
    conversaId: string
    autorTipo: string
    autorId: string | null
    conteudo: string
    tipo: string
    whatsappMsgId: string | null
    recebidaEm: Date | null
    criadaEm: Date
    _count: MensagemCountAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  type GetMensagemGroupByPayload<T extends MensagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemGroupByOutputType[P]>
        }
      >
    >


  export type MensagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversaId?: boolean
    autorTipo?: boolean
    autorId?: boolean
    conteudo?: boolean
    tipo?: boolean
    whatsappMsgId?: boolean
    recebidaEm?: boolean
    criadaEm?: boolean
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    autor?: boolean | Mensagem$autorArgs<ExtArgs>
    sugestao?: boolean | Mensagem$sugestaoArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversaId?: boolean
    autorTipo?: boolean
    autorId?: boolean
    conteudo?: boolean
    tipo?: boolean
    whatsappMsgId?: boolean
    recebidaEm?: boolean
    criadaEm?: boolean
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    autor?: boolean | Mensagem$autorArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectScalar = {
    id?: boolean
    conversaId?: boolean
    autorTipo?: boolean
    autorId?: boolean
    conteudo?: boolean
    tipo?: boolean
    whatsappMsgId?: boolean
    recebidaEm?: boolean
    criadaEm?: boolean
  }

  export type MensagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    autor?: boolean | Mensagem$autorArgs<ExtArgs>
    sugestao?: boolean | Mensagem$sugestaoArgs<ExtArgs>
  }
  export type MensagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversa?: boolean | ConversaDefaultArgs<ExtArgs>
    autor?: boolean | Mensagem$autorArgs<ExtArgs>
  }

  export type $MensagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensagem"
    objects: {
      conversa: Prisma.$ConversaPayload<ExtArgs>
      autor: Prisma.$UsuarioPayload<ExtArgs> | null
      sugestao: Prisma.$MensagemSugestaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversaId: string
      autorTipo: string
      autorId: string | null
      conteudo: string
      tipo: string
      whatsappMsgId: string | null
      recebidaEm: Date | null
      criadaEm: Date
    }, ExtArgs["result"]["mensagem"]>
    composites: {}
  }

  type MensagemGetPayload<S extends boolean | null | undefined | MensagemDefaultArgs> = $Result.GetResult<Prisma.$MensagemPayload, S>

  type MensagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MensagemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MensagemCountAggregateInputType | true
    }

  export interface MensagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensagem'], meta: { name: 'Mensagem' } }
    /**
     * Find zero or one Mensagem that matches the filter.
     * @param {MensagemFindUniqueArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemFindUniqueArgs>(args: SelectSubset<T, MensagemFindUniqueArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mensagem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MensagemFindUniqueOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mensagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemFindFirstArgs>(args?: SelectSubset<T, MensagemFindFirstArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mensagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mensagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagems
     * const mensagems = await prisma.mensagem.findMany()
     * 
     * // Get first 10 Mensagems
     * const mensagems = await prisma.mensagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensagemFindManyArgs>(args?: SelectSubset<T, MensagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mensagem.
     * @param {MensagemCreateArgs} args - Arguments to create a Mensagem.
     * @example
     * // Create one Mensagem
     * const Mensagem = await prisma.mensagem.create({
     *   data: {
     *     // ... data to create a Mensagem
     *   }
     * })
     * 
     */
    create<T extends MensagemCreateArgs>(args: SelectSubset<T, MensagemCreateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mensagems.
     * @param {MensagemCreateManyArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemCreateManyArgs>(args?: SelectSubset<T, MensagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensagems and returns the data saved in the database.
     * @param {MensagemCreateManyAndReturnArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mensagem.
     * @param {MensagemDeleteArgs} args - Arguments to delete one Mensagem.
     * @example
     * // Delete one Mensagem
     * const Mensagem = await prisma.mensagem.delete({
     *   where: {
     *     // ... filter to delete one Mensagem
     *   }
     * })
     * 
     */
    delete<T extends MensagemDeleteArgs>(args: SelectSubset<T, MensagemDeleteArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mensagem.
     * @param {MensagemUpdateArgs} args - Arguments to update one Mensagem.
     * @example
     * // Update one Mensagem
     * const mensagem = await prisma.mensagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemUpdateArgs>(args: SelectSubset<T, MensagemUpdateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mensagems.
     * @param {MensagemDeleteManyArgs} args - Arguments to filter Mensagems to delete.
     * @example
     * // Delete a few Mensagems
     * const { count } = await prisma.mensagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemDeleteManyArgs>(args?: SelectSubset<T, MensagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemUpdateManyArgs>(args: SelectSubset<T, MensagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mensagem.
     * @param {MensagemUpsertArgs} args - Arguments to update or create a Mensagem.
     * @example
     * // Update or create a Mensagem
     * const mensagem = await prisma.mensagem.upsert({
     *   create: {
     *     // ... data to create a Mensagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagem we want to update
     *   }
     * })
     */
    upsert<T extends MensagemUpsertArgs>(args: SelectSubset<T, MensagemUpsertArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemCountArgs} args - Arguments to filter Mensagems to count.
     * @example
     * // Count the number of Mensagems
     * const count = await prisma.mensagem.count({
     *   where: {
     *     // ... the filter for the Mensagems we want to count
     *   }
     * })
    **/
    count<T extends MensagemCountArgs>(
      args?: Subset<T, MensagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensagemAggregateArgs>(args: Subset<T, MensagemAggregateArgs>): Prisma.PrismaPromise<GetMensagemAggregateType<T>>

    /**
     * Group by Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemGroupByArgs} args - Group by arguments.
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
      T extends MensagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemGroupByArgs['orderBy'] }
        : { orderBy?: MensagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensagem model
   */
  readonly fields: MensagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversa<T extends ConversaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversaDefaultArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    autor<T extends Mensagem$autorArgs<ExtArgs> = {}>(args?: Subset<T, Mensagem$autorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sugestao<T extends Mensagem$sugestaoArgs<ExtArgs> = {}>(args?: Subset<T, Mensagem$sugestaoArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Mensagem model
   */ 
  interface MensagemFieldRefs {
    readonly id: FieldRef<"Mensagem", 'String'>
    readonly conversaId: FieldRef<"Mensagem", 'String'>
    readonly autorTipo: FieldRef<"Mensagem", 'String'>
    readonly autorId: FieldRef<"Mensagem", 'String'>
    readonly conteudo: FieldRef<"Mensagem", 'String'>
    readonly tipo: FieldRef<"Mensagem", 'String'>
    readonly whatsappMsgId: FieldRef<"Mensagem", 'String'>
    readonly recebidaEm: FieldRef<"Mensagem", 'DateTime'>
    readonly criadaEm: FieldRef<"Mensagem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mensagem findUnique
   */
  export type MensagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findUniqueOrThrow
   */
  export type MensagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findFirst
   */
  export type MensagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findFirstOrThrow
   */
  export type MensagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findMany
   */
  export type MensagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagems to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem create
   */
  export type MensagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensagem.
     */
    data: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
  }

  /**
   * Mensagem createMany
   */
  export type MensagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensagem createManyAndReturn
   */
  export type MensagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem update
   */
  export type MensagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensagem.
     */
    data: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
    /**
     * Choose, which Mensagem to update.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem updateMany
   */
  export type MensagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
  }

  /**
   * Mensagem upsert
   */
  export type MensagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensagem to update in case it exists.
     */
    where: MensagemWhereUniqueInput
    /**
     * In case the Mensagem found by the `where` argument doesn't exist, create a new Mensagem with this data.
     */
    create: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
    /**
     * In case the Mensagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
  }

  /**
   * Mensagem delete
   */
  export type MensagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter which Mensagem to delete.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem deleteMany
   */
  export type MensagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagems to delete
     */
    where?: MensagemWhereInput
  }

  /**
   * Mensagem.autor
   */
  export type Mensagem$autorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Mensagem.sugestao
   */
  export type Mensagem$sugestaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    where?: MensagemSugestaoWhereInput
  }

  /**
   * Mensagem without action
   */
  export type MensagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
  }


  /**
   * Model MensagemSugestao
   */

  export type AggregateMensagemSugestao = {
    _count: MensagemSugestaoCountAggregateOutputType | null
    _min: MensagemSugestaoMinAggregateOutputType | null
    _max: MensagemSugestaoMaxAggregateOutputType | null
  }

  export type MensagemSugestaoMinAggregateOutputType = {
    id: string | null
    mensagemId: string | null
    conteudoSugerido: string | null
    modeloIa: string | null
    geradoEm: Date | null
  }

  export type MensagemSugestaoMaxAggregateOutputType = {
    id: string | null
    mensagemId: string | null
    conteudoSugerido: string | null
    modeloIa: string | null
    geradoEm: Date | null
  }

  export type MensagemSugestaoCountAggregateOutputType = {
    id: number
    mensagemId: number
    conteudoSugerido: number
    modeloIa: number
    geradoEm: number
    _all: number
  }


  export type MensagemSugestaoMinAggregateInputType = {
    id?: true
    mensagemId?: true
    conteudoSugerido?: true
    modeloIa?: true
    geradoEm?: true
  }

  export type MensagemSugestaoMaxAggregateInputType = {
    id?: true
    mensagemId?: true
    conteudoSugerido?: true
    modeloIa?: true
    geradoEm?: true
  }

  export type MensagemSugestaoCountAggregateInputType = {
    id?: true
    mensagemId?: true
    conteudoSugerido?: true
    modeloIa?: true
    geradoEm?: true
    _all?: true
  }

  export type MensagemSugestaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensagemSugestao to aggregate.
     */
    where?: MensagemSugestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemSugestaos to fetch.
     */
    orderBy?: MensagemSugestaoOrderByWithRelationInput | MensagemSugestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemSugestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemSugestaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemSugestaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MensagemSugestaos
    **/
    _count?: true | MensagemSugestaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemSugestaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemSugestaoMaxAggregateInputType
  }

  export type GetMensagemSugestaoAggregateType<T extends MensagemSugestaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagemSugestao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagemSugestao[P]>
      : GetScalarType<T[P], AggregateMensagemSugestao[P]>
  }




  export type MensagemSugestaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemSugestaoWhereInput
    orderBy?: MensagemSugestaoOrderByWithAggregationInput | MensagemSugestaoOrderByWithAggregationInput[]
    by: MensagemSugestaoScalarFieldEnum[] | MensagemSugestaoScalarFieldEnum
    having?: MensagemSugestaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemSugestaoCountAggregateInputType | true
    _min?: MensagemSugestaoMinAggregateInputType
    _max?: MensagemSugestaoMaxAggregateInputType
  }

  export type MensagemSugestaoGroupByOutputType = {
    id: string
    mensagemId: string
    conteudoSugerido: string
    modeloIa: string
    geradoEm: Date
    _count: MensagemSugestaoCountAggregateOutputType | null
    _min: MensagemSugestaoMinAggregateOutputType | null
    _max: MensagemSugestaoMaxAggregateOutputType | null
  }

  type GetMensagemSugestaoGroupByPayload<T extends MensagemSugestaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemSugestaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemSugestaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemSugestaoGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemSugestaoGroupByOutputType[P]>
        }
      >
    >


  export type MensagemSugestaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagemId?: boolean
    conteudoSugerido?: boolean
    modeloIa?: boolean
    geradoEm?: boolean
    mensagem?: boolean | MensagemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagemSugestao"]>

  export type MensagemSugestaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagemId?: boolean
    conteudoSugerido?: boolean
    modeloIa?: boolean
    geradoEm?: boolean
    mensagem?: boolean | MensagemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagemSugestao"]>

  export type MensagemSugestaoSelectScalar = {
    id?: boolean
    mensagemId?: boolean
    conteudoSugerido?: boolean
    modeloIa?: boolean
    geradoEm?: boolean
  }

  export type MensagemSugestaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagem?: boolean | MensagemDefaultArgs<ExtArgs>
  }
  export type MensagemSugestaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagem?: boolean | MensagemDefaultArgs<ExtArgs>
  }

  export type $MensagemSugestaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MensagemSugestao"
    objects: {
      mensagem: Prisma.$MensagemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mensagemId: string
      conteudoSugerido: string
      modeloIa: string
      geradoEm: Date
    }, ExtArgs["result"]["mensagemSugestao"]>
    composites: {}
  }

  type MensagemSugestaoGetPayload<S extends boolean | null | undefined | MensagemSugestaoDefaultArgs> = $Result.GetResult<Prisma.$MensagemSugestaoPayload, S>

  type MensagemSugestaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MensagemSugestaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MensagemSugestaoCountAggregateInputType | true
    }

  export interface MensagemSugestaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MensagemSugestao'], meta: { name: 'MensagemSugestao' } }
    /**
     * Find zero or one MensagemSugestao that matches the filter.
     * @param {MensagemSugestaoFindUniqueArgs} args - Arguments to find a MensagemSugestao
     * @example
     * // Get one MensagemSugestao
     * const mensagemSugestao = await prisma.mensagemSugestao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemSugestaoFindUniqueArgs>(args: SelectSubset<T, MensagemSugestaoFindUniqueArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MensagemSugestao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MensagemSugestaoFindUniqueOrThrowArgs} args - Arguments to find a MensagemSugestao
     * @example
     * // Get one MensagemSugestao
     * const mensagemSugestao = await prisma.mensagemSugestao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemSugestaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemSugestaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MensagemSugestao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemSugestaoFindFirstArgs} args - Arguments to find a MensagemSugestao
     * @example
     * // Get one MensagemSugestao
     * const mensagemSugestao = await prisma.mensagemSugestao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemSugestaoFindFirstArgs>(args?: SelectSubset<T, MensagemSugestaoFindFirstArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MensagemSugestao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemSugestaoFindFirstOrThrowArgs} args - Arguments to find a MensagemSugestao
     * @example
     * // Get one MensagemSugestao
     * const mensagemSugestao = await prisma.mensagemSugestao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemSugestaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemSugestaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MensagemSugestaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemSugestaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MensagemSugestaos
     * const mensagemSugestaos = await prisma.mensagemSugestao.findMany()
     * 
     * // Get first 10 MensagemSugestaos
     * const mensagemSugestaos = await prisma.mensagemSugestao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemSugestaoWithIdOnly = await prisma.mensagemSugestao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensagemSugestaoFindManyArgs>(args?: SelectSubset<T, MensagemSugestaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MensagemSugestao.
     * @param {MensagemSugestaoCreateArgs} args - Arguments to create a MensagemSugestao.
     * @example
     * // Create one MensagemSugestao
     * const MensagemSugestao = await prisma.mensagemSugestao.create({
     *   data: {
     *     // ... data to create a MensagemSugestao
     *   }
     * })
     * 
     */
    create<T extends MensagemSugestaoCreateArgs>(args: SelectSubset<T, MensagemSugestaoCreateArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MensagemSugestaos.
     * @param {MensagemSugestaoCreateManyArgs} args - Arguments to create many MensagemSugestaos.
     * @example
     * // Create many MensagemSugestaos
     * const mensagemSugestao = await prisma.mensagemSugestao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemSugestaoCreateManyArgs>(args?: SelectSubset<T, MensagemSugestaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MensagemSugestaos and returns the data saved in the database.
     * @param {MensagemSugestaoCreateManyAndReturnArgs} args - Arguments to create many MensagemSugestaos.
     * @example
     * // Create many MensagemSugestaos
     * const mensagemSugestao = await prisma.mensagemSugestao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MensagemSugestaos and only return the `id`
     * const mensagemSugestaoWithIdOnly = await prisma.mensagemSugestao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemSugestaoCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemSugestaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MensagemSugestao.
     * @param {MensagemSugestaoDeleteArgs} args - Arguments to delete one MensagemSugestao.
     * @example
     * // Delete one MensagemSugestao
     * const MensagemSugestao = await prisma.mensagemSugestao.delete({
     *   where: {
     *     // ... filter to delete one MensagemSugestao
     *   }
     * })
     * 
     */
    delete<T extends MensagemSugestaoDeleteArgs>(args: SelectSubset<T, MensagemSugestaoDeleteArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MensagemSugestao.
     * @param {MensagemSugestaoUpdateArgs} args - Arguments to update one MensagemSugestao.
     * @example
     * // Update one MensagemSugestao
     * const mensagemSugestao = await prisma.mensagemSugestao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemSugestaoUpdateArgs>(args: SelectSubset<T, MensagemSugestaoUpdateArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MensagemSugestaos.
     * @param {MensagemSugestaoDeleteManyArgs} args - Arguments to filter MensagemSugestaos to delete.
     * @example
     * // Delete a few MensagemSugestaos
     * const { count } = await prisma.mensagemSugestao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemSugestaoDeleteManyArgs>(args?: SelectSubset<T, MensagemSugestaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MensagemSugestaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemSugestaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MensagemSugestaos
     * const mensagemSugestao = await prisma.mensagemSugestao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemSugestaoUpdateManyArgs>(args: SelectSubset<T, MensagemSugestaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MensagemSugestao.
     * @param {MensagemSugestaoUpsertArgs} args - Arguments to update or create a MensagemSugestao.
     * @example
     * // Update or create a MensagemSugestao
     * const mensagemSugestao = await prisma.mensagemSugestao.upsert({
     *   create: {
     *     // ... data to create a MensagemSugestao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MensagemSugestao we want to update
     *   }
     * })
     */
    upsert<T extends MensagemSugestaoUpsertArgs>(args: SelectSubset<T, MensagemSugestaoUpsertArgs<ExtArgs>>): Prisma__MensagemSugestaoClient<$Result.GetResult<Prisma.$MensagemSugestaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MensagemSugestaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemSugestaoCountArgs} args - Arguments to filter MensagemSugestaos to count.
     * @example
     * // Count the number of MensagemSugestaos
     * const count = await prisma.mensagemSugestao.count({
     *   where: {
     *     // ... the filter for the MensagemSugestaos we want to count
     *   }
     * })
    **/
    count<T extends MensagemSugestaoCountArgs>(
      args?: Subset<T, MensagemSugestaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemSugestaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MensagemSugestao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemSugestaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensagemSugestaoAggregateArgs>(args: Subset<T, MensagemSugestaoAggregateArgs>): Prisma.PrismaPromise<GetMensagemSugestaoAggregateType<T>>

    /**
     * Group by MensagemSugestao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemSugestaoGroupByArgs} args - Group by arguments.
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
      T extends MensagemSugestaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemSugestaoGroupByArgs['orderBy'] }
        : { orderBy?: MensagemSugestaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensagemSugestaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemSugestaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MensagemSugestao model
   */
  readonly fields: MensagemSugestaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MensagemSugestao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemSugestaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mensagem<T extends MensagemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MensagemDefaultArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MensagemSugestao model
   */ 
  interface MensagemSugestaoFieldRefs {
    readonly id: FieldRef<"MensagemSugestao", 'String'>
    readonly mensagemId: FieldRef<"MensagemSugestao", 'String'>
    readonly conteudoSugerido: FieldRef<"MensagemSugestao", 'String'>
    readonly modeloIa: FieldRef<"MensagemSugestao", 'String'>
    readonly geradoEm: FieldRef<"MensagemSugestao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MensagemSugestao findUnique
   */
  export type MensagemSugestaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * Filter, which MensagemSugestao to fetch.
     */
    where: MensagemSugestaoWhereUniqueInput
  }

  /**
   * MensagemSugestao findUniqueOrThrow
   */
  export type MensagemSugestaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * Filter, which MensagemSugestao to fetch.
     */
    where: MensagemSugestaoWhereUniqueInput
  }

  /**
   * MensagemSugestao findFirst
   */
  export type MensagemSugestaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * Filter, which MensagemSugestao to fetch.
     */
    where?: MensagemSugestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemSugestaos to fetch.
     */
    orderBy?: MensagemSugestaoOrderByWithRelationInput | MensagemSugestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensagemSugestaos.
     */
    cursor?: MensagemSugestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemSugestaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemSugestaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensagemSugestaos.
     */
    distinct?: MensagemSugestaoScalarFieldEnum | MensagemSugestaoScalarFieldEnum[]
  }

  /**
   * MensagemSugestao findFirstOrThrow
   */
  export type MensagemSugestaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * Filter, which MensagemSugestao to fetch.
     */
    where?: MensagemSugestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemSugestaos to fetch.
     */
    orderBy?: MensagemSugestaoOrderByWithRelationInput | MensagemSugestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensagemSugestaos.
     */
    cursor?: MensagemSugestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemSugestaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemSugestaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensagemSugestaos.
     */
    distinct?: MensagemSugestaoScalarFieldEnum | MensagemSugestaoScalarFieldEnum[]
  }

  /**
   * MensagemSugestao findMany
   */
  export type MensagemSugestaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * Filter, which MensagemSugestaos to fetch.
     */
    where?: MensagemSugestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensagemSugestaos to fetch.
     */
    orderBy?: MensagemSugestaoOrderByWithRelationInput | MensagemSugestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MensagemSugestaos.
     */
    cursor?: MensagemSugestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensagemSugestaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensagemSugestaos.
     */
    skip?: number
    distinct?: MensagemSugestaoScalarFieldEnum | MensagemSugestaoScalarFieldEnum[]
  }

  /**
   * MensagemSugestao create
   */
  export type MensagemSugestaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * The data needed to create a MensagemSugestao.
     */
    data: XOR<MensagemSugestaoCreateInput, MensagemSugestaoUncheckedCreateInput>
  }

  /**
   * MensagemSugestao createMany
   */
  export type MensagemSugestaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MensagemSugestaos.
     */
    data: MensagemSugestaoCreateManyInput | MensagemSugestaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MensagemSugestao createManyAndReturn
   */
  export type MensagemSugestaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MensagemSugestaos.
     */
    data: MensagemSugestaoCreateManyInput | MensagemSugestaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MensagemSugestao update
   */
  export type MensagemSugestaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * The data needed to update a MensagemSugestao.
     */
    data: XOR<MensagemSugestaoUpdateInput, MensagemSugestaoUncheckedUpdateInput>
    /**
     * Choose, which MensagemSugestao to update.
     */
    where: MensagemSugestaoWhereUniqueInput
  }

  /**
   * MensagemSugestao updateMany
   */
  export type MensagemSugestaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MensagemSugestaos.
     */
    data: XOR<MensagemSugestaoUpdateManyMutationInput, MensagemSugestaoUncheckedUpdateManyInput>
    /**
     * Filter which MensagemSugestaos to update
     */
    where?: MensagemSugestaoWhereInput
  }

  /**
   * MensagemSugestao upsert
   */
  export type MensagemSugestaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * The filter to search for the MensagemSugestao to update in case it exists.
     */
    where: MensagemSugestaoWhereUniqueInput
    /**
     * In case the MensagemSugestao found by the `where` argument doesn't exist, create a new MensagemSugestao with this data.
     */
    create: XOR<MensagemSugestaoCreateInput, MensagemSugestaoUncheckedCreateInput>
    /**
     * In case the MensagemSugestao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemSugestaoUpdateInput, MensagemSugestaoUncheckedUpdateInput>
  }

  /**
   * MensagemSugestao delete
   */
  export type MensagemSugestaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
    /**
     * Filter which MensagemSugestao to delete.
     */
    where: MensagemSugestaoWhereUniqueInput
  }

  /**
   * MensagemSugestao deleteMany
   */
  export type MensagemSugestaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensagemSugestaos to delete
     */
    where?: MensagemSugestaoWhereInput
  }

  /**
   * MensagemSugestao without action
   */
  export type MensagemSugestaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensagemSugestao
     */
    select?: MensagemSugestaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemSugestaoInclude<ExtArgs> | null
  }


  /**
   * Model LogAcao
   */

  export type AggregateLogAcao = {
    _count: LogAcaoCountAggregateOutputType | null
    _min: LogAcaoMinAggregateOutputType | null
    _max: LogAcaoMaxAggregateOutputType | null
  }

  export type LogAcaoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    conversaId: string | null
    tipoAcao: string | null
    createdAt: Date | null
  }

  export type LogAcaoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    conversaId: string | null
    tipoAcao: string | null
    createdAt: Date | null
  }

  export type LogAcaoCountAggregateOutputType = {
    id: number
    usuarioId: number
    conversaId: number
    tipoAcao: number
    dados: number
    createdAt: number
    _all: number
  }


  export type LogAcaoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    conversaId?: true
    tipoAcao?: true
    createdAt?: true
  }

  export type LogAcaoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    conversaId?: true
    tipoAcao?: true
    createdAt?: true
  }

  export type LogAcaoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    conversaId?: true
    tipoAcao?: true
    dados?: true
    createdAt?: true
    _all?: true
  }

  export type LogAcaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAcao to aggregate.
     */
    where?: LogAcaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcaos to fetch.
     */
    orderBy?: LogAcaoOrderByWithRelationInput | LogAcaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAcaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAcaos
    **/
    _count?: true | LogAcaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAcaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAcaoMaxAggregateInputType
  }

  export type GetLogAcaoAggregateType<T extends LogAcaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAcao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAcao[P]>
      : GetScalarType<T[P], AggregateLogAcao[P]>
  }




  export type LogAcaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAcaoWhereInput
    orderBy?: LogAcaoOrderByWithAggregationInput | LogAcaoOrderByWithAggregationInput[]
    by: LogAcaoScalarFieldEnum[] | LogAcaoScalarFieldEnum
    having?: LogAcaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAcaoCountAggregateInputType | true
    _min?: LogAcaoMinAggregateInputType
    _max?: LogAcaoMaxAggregateInputType
  }

  export type LogAcaoGroupByOutputType = {
    id: string
    usuarioId: string
    conversaId: string | null
    tipoAcao: string
    dados: JsonValue
    createdAt: Date
    _count: LogAcaoCountAggregateOutputType | null
    _min: LogAcaoMinAggregateOutputType | null
    _max: LogAcaoMaxAggregateOutputType | null
  }

  type GetLogAcaoGroupByPayload<T extends LogAcaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAcaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAcaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAcaoGroupByOutputType[P]>
            : GetScalarType<T[P], LogAcaoGroupByOutputType[P]>
        }
      >
    >


  export type LogAcaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    conversaId?: boolean
    tipoAcao?: boolean
    dados?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conversa?: boolean | LogAcao$conversaArgs<ExtArgs>
  }, ExtArgs["result"]["logAcao"]>

  export type LogAcaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    conversaId?: boolean
    tipoAcao?: boolean
    dados?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conversa?: boolean | LogAcao$conversaArgs<ExtArgs>
  }, ExtArgs["result"]["logAcao"]>

  export type LogAcaoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    conversaId?: boolean
    tipoAcao?: boolean
    dados?: boolean
    createdAt?: boolean
  }

  export type LogAcaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conversa?: boolean | LogAcao$conversaArgs<ExtArgs>
  }
  export type LogAcaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    conversa?: boolean | LogAcao$conversaArgs<ExtArgs>
  }

  export type $LogAcaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAcao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      conversa: Prisma.$ConversaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      conversaId: string | null
      tipoAcao: string
      dados: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["logAcao"]>
    composites: {}
  }

  type LogAcaoGetPayload<S extends boolean | null | undefined | LogAcaoDefaultArgs> = $Result.GetResult<Prisma.$LogAcaoPayload, S>

  type LogAcaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogAcaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LogAcaoCountAggregateInputType | true
    }

  export interface LogAcaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAcao'], meta: { name: 'LogAcao' } }
    /**
     * Find zero or one LogAcao that matches the filter.
     * @param {LogAcaoFindUniqueArgs} args - Arguments to find a LogAcao
     * @example
     * // Get one LogAcao
     * const logAcao = await prisma.logAcao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAcaoFindUniqueArgs>(args: SelectSubset<T, LogAcaoFindUniqueArgs<ExtArgs>>): Prisma__LogAcaoClient<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LogAcao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LogAcaoFindUniqueOrThrowArgs} args - Arguments to find a LogAcao
     * @example
     * // Get one LogAcao
     * const logAcao = await prisma.logAcao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAcaoFindUniqueOrThrowArgs>(args: SelectSubset<T, LogAcaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogAcaoClient<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LogAcao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcaoFindFirstArgs} args - Arguments to find a LogAcao
     * @example
     * // Get one LogAcao
     * const logAcao = await prisma.logAcao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAcaoFindFirstArgs>(args?: SelectSubset<T, LogAcaoFindFirstArgs<ExtArgs>>): Prisma__LogAcaoClient<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LogAcao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcaoFindFirstOrThrowArgs} args - Arguments to find a LogAcao
     * @example
     * // Get one LogAcao
     * const logAcao = await prisma.logAcao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAcaoFindFirstOrThrowArgs>(args?: SelectSubset<T, LogAcaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogAcaoClient<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LogAcaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAcaos
     * const logAcaos = await prisma.logAcao.findMany()
     * 
     * // Get first 10 LogAcaos
     * const logAcaos = await prisma.logAcao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logAcaoWithIdOnly = await prisma.logAcao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogAcaoFindManyArgs>(args?: SelectSubset<T, LogAcaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LogAcao.
     * @param {LogAcaoCreateArgs} args - Arguments to create a LogAcao.
     * @example
     * // Create one LogAcao
     * const LogAcao = await prisma.logAcao.create({
     *   data: {
     *     // ... data to create a LogAcao
     *   }
     * })
     * 
     */
    create<T extends LogAcaoCreateArgs>(args: SelectSubset<T, LogAcaoCreateArgs<ExtArgs>>): Prisma__LogAcaoClient<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LogAcaos.
     * @param {LogAcaoCreateManyArgs} args - Arguments to create many LogAcaos.
     * @example
     * // Create many LogAcaos
     * const logAcao = await prisma.logAcao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogAcaoCreateManyArgs>(args?: SelectSubset<T, LogAcaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogAcaos and returns the data saved in the database.
     * @param {LogAcaoCreateManyAndReturnArgs} args - Arguments to create many LogAcaos.
     * @example
     * // Create many LogAcaos
     * const logAcao = await prisma.logAcao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogAcaos and only return the `id`
     * const logAcaoWithIdOnly = await prisma.logAcao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogAcaoCreateManyAndReturnArgs>(args?: SelectSubset<T, LogAcaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LogAcao.
     * @param {LogAcaoDeleteArgs} args - Arguments to delete one LogAcao.
     * @example
     * // Delete one LogAcao
     * const LogAcao = await prisma.logAcao.delete({
     *   where: {
     *     // ... filter to delete one LogAcao
     *   }
     * })
     * 
     */
    delete<T extends LogAcaoDeleteArgs>(args: SelectSubset<T, LogAcaoDeleteArgs<ExtArgs>>): Prisma__LogAcaoClient<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LogAcao.
     * @param {LogAcaoUpdateArgs} args - Arguments to update one LogAcao.
     * @example
     * // Update one LogAcao
     * const logAcao = await prisma.logAcao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogAcaoUpdateArgs>(args: SelectSubset<T, LogAcaoUpdateArgs<ExtArgs>>): Prisma__LogAcaoClient<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LogAcaos.
     * @param {LogAcaoDeleteManyArgs} args - Arguments to filter LogAcaos to delete.
     * @example
     * // Delete a few LogAcaos
     * const { count } = await prisma.logAcao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogAcaoDeleteManyArgs>(args?: SelectSubset<T, LogAcaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAcaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAcaos
     * const logAcao = await prisma.logAcao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogAcaoUpdateManyArgs>(args: SelectSubset<T, LogAcaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogAcao.
     * @param {LogAcaoUpsertArgs} args - Arguments to update or create a LogAcao.
     * @example
     * // Update or create a LogAcao
     * const logAcao = await prisma.logAcao.upsert({
     *   create: {
     *     // ... data to create a LogAcao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAcao we want to update
     *   }
     * })
     */
    upsert<T extends LogAcaoUpsertArgs>(args: SelectSubset<T, LogAcaoUpsertArgs<ExtArgs>>): Prisma__LogAcaoClient<$Result.GetResult<Prisma.$LogAcaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LogAcaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcaoCountArgs} args - Arguments to filter LogAcaos to count.
     * @example
     * // Count the number of LogAcaos
     * const count = await prisma.logAcao.count({
     *   where: {
     *     // ... the filter for the LogAcaos we want to count
     *   }
     * })
    **/
    count<T extends LogAcaoCountArgs>(
      args?: Subset<T, LogAcaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAcaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAcao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAcaoAggregateArgs>(args: Subset<T, LogAcaoAggregateArgs>): Prisma.PrismaPromise<GetLogAcaoAggregateType<T>>

    /**
     * Group by LogAcao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAcaoGroupByArgs} args - Group by arguments.
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
      T extends LogAcaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAcaoGroupByArgs['orderBy'] }
        : { orderBy?: LogAcaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogAcaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAcaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAcao model
   */
  readonly fields: LogAcaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAcao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAcaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    conversa<T extends LogAcao$conversaArgs<ExtArgs> = {}>(args?: Subset<T, LogAcao$conversaArgs<ExtArgs>>): Prisma__ConversaClient<$Result.GetResult<Prisma.$ConversaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the LogAcao model
   */ 
  interface LogAcaoFieldRefs {
    readonly id: FieldRef<"LogAcao", 'String'>
    readonly usuarioId: FieldRef<"LogAcao", 'String'>
    readonly conversaId: FieldRef<"LogAcao", 'String'>
    readonly tipoAcao: FieldRef<"LogAcao", 'String'>
    readonly dados: FieldRef<"LogAcao", 'Json'>
    readonly createdAt: FieldRef<"LogAcao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogAcao findUnique
   */
  export type LogAcaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcao to fetch.
     */
    where: LogAcaoWhereUniqueInput
  }

  /**
   * LogAcao findUniqueOrThrow
   */
  export type LogAcaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcao to fetch.
     */
    where: LogAcaoWhereUniqueInput
  }

  /**
   * LogAcao findFirst
   */
  export type LogAcaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcao to fetch.
     */
    where?: LogAcaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcaos to fetch.
     */
    orderBy?: LogAcaoOrderByWithRelationInput | LogAcaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAcaos.
     */
    cursor?: LogAcaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAcaos.
     */
    distinct?: LogAcaoScalarFieldEnum | LogAcaoScalarFieldEnum[]
  }

  /**
   * LogAcao findFirstOrThrow
   */
  export type LogAcaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcao to fetch.
     */
    where?: LogAcaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcaos to fetch.
     */
    orderBy?: LogAcaoOrderByWithRelationInput | LogAcaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAcaos.
     */
    cursor?: LogAcaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAcaos.
     */
    distinct?: LogAcaoScalarFieldEnum | LogAcaoScalarFieldEnum[]
  }

  /**
   * LogAcao findMany
   */
  export type LogAcaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * Filter, which LogAcaos to fetch.
     */
    where?: LogAcaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAcaos to fetch.
     */
    orderBy?: LogAcaoOrderByWithRelationInput | LogAcaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAcaos.
     */
    cursor?: LogAcaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAcaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAcaos.
     */
    skip?: number
    distinct?: LogAcaoScalarFieldEnum | LogAcaoScalarFieldEnum[]
  }

  /**
   * LogAcao create
   */
  export type LogAcaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * The data needed to create a LogAcao.
     */
    data: XOR<LogAcaoCreateInput, LogAcaoUncheckedCreateInput>
  }

  /**
   * LogAcao createMany
   */
  export type LogAcaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAcaos.
     */
    data: LogAcaoCreateManyInput | LogAcaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogAcao createManyAndReturn
   */
  export type LogAcaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LogAcaos.
     */
    data: LogAcaoCreateManyInput | LogAcaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAcao update
   */
  export type LogAcaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * The data needed to update a LogAcao.
     */
    data: XOR<LogAcaoUpdateInput, LogAcaoUncheckedUpdateInput>
    /**
     * Choose, which LogAcao to update.
     */
    where: LogAcaoWhereUniqueInput
  }

  /**
   * LogAcao updateMany
   */
  export type LogAcaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAcaos.
     */
    data: XOR<LogAcaoUpdateManyMutationInput, LogAcaoUncheckedUpdateManyInput>
    /**
     * Filter which LogAcaos to update
     */
    where?: LogAcaoWhereInput
  }

  /**
   * LogAcao upsert
   */
  export type LogAcaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * The filter to search for the LogAcao to update in case it exists.
     */
    where: LogAcaoWhereUniqueInput
    /**
     * In case the LogAcao found by the `where` argument doesn't exist, create a new LogAcao with this data.
     */
    create: XOR<LogAcaoCreateInput, LogAcaoUncheckedCreateInput>
    /**
     * In case the LogAcao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAcaoUpdateInput, LogAcaoUncheckedUpdateInput>
  }

  /**
   * LogAcao delete
   */
  export type LogAcaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
    /**
     * Filter which LogAcao to delete.
     */
    where: LogAcaoWhereUniqueInput
  }

  /**
   * LogAcao deleteMany
   */
  export type LogAcaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAcaos to delete
     */
    where?: LogAcaoWhereInput
  }

  /**
   * LogAcao.conversa
   */
  export type LogAcao$conversaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversa
     */
    select?: ConversaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversaInclude<ExtArgs> | null
    where?: ConversaWhereInput
  }

  /**
   * LogAcao without action
   */
  export type LogAcaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAcao
     */
    select?: LogAcaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAcaoInclude<ExtArgs> | null
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


  export const ClinicaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    telefone: 'telefone',
    createdAt: 'createdAt'
  };

  export type ClinicaScalarFieldEnum = (typeof ClinicaScalarFieldEnum)[keyof typeof ClinicaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    clinicaId: 'clinicaId',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash',
    papel: 'papel',
    ultimoLogin: 'ultimoLogin',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    clinicaId: 'clinicaId',
    nome: 'nome',
    telefone: 'telefone',
    cpf: 'cpf',
    dataNascimento: 'dataNascimento',
    createdAt: 'createdAt'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const ConversaScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    clinicaId: 'clinicaId',
    status: 'status',
    ultimoContatoEm: 'ultimoContatoEm',
    responsavelAtendimentoId: 'responsavelAtendimentoId'
  };

  export type ConversaScalarFieldEnum = (typeof ConversaScalarFieldEnum)[keyof typeof ConversaScalarFieldEnum]


  export const MensagemScalarFieldEnum: {
    id: 'id',
    conversaId: 'conversaId',
    autorTipo: 'autorTipo',
    autorId: 'autorId',
    conteudo: 'conteudo',
    tipo: 'tipo',
    whatsappMsgId: 'whatsappMsgId',
    recebidaEm: 'recebidaEm',
    criadaEm: 'criadaEm'
  };

  export type MensagemScalarFieldEnum = (typeof MensagemScalarFieldEnum)[keyof typeof MensagemScalarFieldEnum]


  export const MensagemSugestaoScalarFieldEnum: {
    id: 'id',
    mensagemId: 'mensagemId',
    conteudoSugerido: 'conteudoSugerido',
    modeloIa: 'modeloIa',
    geradoEm: 'geradoEm'
  };

  export type MensagemSugestaoScalarFieldEnum = (typeof MensagemSugestaoScalarFieldEnum)[keyof typeof MensagemSugestaoScalarFieldEnum]


  export const LogAcaoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    conversaId: 'conversaId',
    tipoAcao: 'tipoAcao',
    dados: 'dados',
    createdAt: 'createdAt'
  };

  export type LogAcaoScalarFieldEnum = (typeof LogAcaoScalarFieldEnum)[keyof typeof LogAcaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ClinicaWhereInput = {
    AND?: ClinicaWhereInput | ClinicaWhereInput[]
    OR?: ClinicaWhereInput[]
    NOT?: ClinicaWhereInput | ClinicaWhereInput[]
    id?: StringFilter<"Clinica"> | string
    nome?: StringFilter<"Clinica"> | string
    cnpj?: StringFilter<"Clinica"> | string
    telefone?: StringFilter<"Clinica"> | string
    createdAt?: DateTimeFilter<"Clinica"> | Date | string
    usuarios?: UsuarioListRelationFilter
    pacientes?: PacienteListRelationFilter
    conversas?: ConversaListRelationFilter
  }

  export type ClinicaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    pacientes?: PacienteOrderByRelationAggregateInput
    conversas?: ConversaOrderByRelationAggregateInput
  }

  export type ClinicaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    AND?: ClinicaWhereInput | ClinicaWhereInput[]
    OR?: ClinicaWhereInput[]
    NOT?: ClinicaWhereInput | ClinicaWhereInput[]
    nome?: StringFilter<"Clinica"> | string
    telefone?: StringFilter<"Clinica"> | string
    createdAt?: DateTimeFilter<"Clinica"> | Date | string
    usuarios?: UsuarioListRelationFilter
    pacientes?: PacienteListRelationFilter
    conversas?: ConversaListRelationFilter
  }, "id" | "cnpj">

  export type ClinicaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
    _count?: ClinicaCountOrderByAggregateInput
    _max?: ClinicaMaxOrderByAggregateInput
    _min?: ClinicaMinOrderByAggregateInput
  }

  export type ClinicaScalarWhereWithAggregatesInput = {
    AND?: ClinicaScalarWhereWithAggregatesInput | ClinicaScalarWhereWithAggregatesInput[]
    OR?: ClinicaScalarWhereWithAggregatesInput[]
    NOT?: ClinicaScalarWhereWithAggregatesInput | ClinicaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clinica"> | string
    nome?: StringWithAggregatesFilter<"Clinica"> | string
    cnpj?: StringWithAggregatesFilter<"Clinica"> | string
    telefone?: StringWithAggregatesFilter<"Clinica"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Clinica"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    clinicaId?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    papel?: StringFilter<"Usuario"> | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    clinica?: XOR<ClinicaRelationFilter, ClinicaWhereInput>
    conversas?: ConversaListRelationFilter
    mensagens?: MensagemListRelationFilter
    logs?: LogAcaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    ultimoLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clinica?: ClinicaOrderByWithRelationInput
    conversas?: ConversaOrderByRelationAggregateInput
    mensagens?: MensagemOrderByRelationAggregateInput
    logs?: LogAcaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    clinicaId?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    papel?: StringFilter<"Usuario"> | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    clinica?: XOR<ClinicaRelationFilter, ClinicaWhereInput>
    conversas?: ConversaListRelationFilter
    mensagens?: MensagemListRelationFilter
    logs?: LogAcaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    ultimoLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    clinicaId?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senhaHash?: StringWithAggregatesFilter<"Usuario"> | string
    papel?: StringWithAggregatesFilter<"Usuario"> | string
    ultimoLogin?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: StringFilter<"Paciente"> | string
    clinicaId?: StringFilter<"Paciente"> | string
    nome?: StringFilter<"Paciente"> | string
    telefone?: StringFilter<"Paciente"> | string
    cpf?: StringNullableFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Paciente"> | Date | string | null
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    clinica?: XOR<ClinicaRelationFilter, ClinicaWhereInput>
    conversas?: ConversaListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clinica?: ClinicaOrderByWithRelationInput
    conversas?: ConversaOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telefone?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    clinicaId?: StringFilter<"Paciente"> | string
    nome?: StringFilter<"Paciente"> | string
    cpf?: StringNullableFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Paciente"> | Date | string | null
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    clinica?: XOR<ClinicaRelationFilter, ClinicaWhereInput>
    conversas?: ConversaListRelationFilter
  }, "id" | "telefone">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paciente"> | string
    clinicaId?: StringWithAggregatesFilter<"Paciente"> | string
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    telefone?: StringWithAggregatesFilter<"Paciente"> | string
    cpf?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeNullableWithAggregatesFilter<"Paciente"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
  }

  export type ConversaWhereInput = {
    AND?: ConversaWhereInput | ConversaWhereInput[]
    OR?: ConversaWhereInput[]
    NOT?: ConversaWhereInput | ConversaWhereInput[]
    id?: StringFilter<"Conversa"> | string
    pacienteId?: StringFilter<"Conversa"> | string
    clinicaId?: StringFilter<"Conversa"> | string
    status?: StringFilter<"Conversa"> | string
    ultimoContatoEm?: DateTimeNullableFilter<"Conversa"> | Date | string | null
    responsavelAtendimentoId?: StringNullableFilter<"Conversa"> | string | null
    paciente?: XOR<PacienteRelationFilter, PacienteWhereInput>
    clinica?: XOR<ClinicaRelationFilter, ClinicaWhereInput>
    responsavelAtendimento?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    mensagens?: MensagemListRelationFilter
    logs?: LogAcaoListRelationFilter
  }

  export type ConversaOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    clinicaId?: SortOrder
    status?: SortOrder
    ultimoContatoEm?: SortOrderInput | SortOrder
    responsavelAtendimentoId?: SortOrderInput | SortOrder
    paciente?: PacienteOrderByWithRelationInput
    clinica?: ClinicaOrderByWithRelationInput
    responsavelAtendimento?: UsuarioOrderByWithRelationInput
    mensagens?: MensagemOrderByRelationAggregateInput
    logs?: LogAcaoOrderByRelationAggregateInput
  }

  export type ConversaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversaWhereInput | ConversaWhereInput[]
    OR?: ConversaWhereInput[]
    NOT?: ConversaWhereInput | ConversaWhereInput[]
    pacienteId?: StringFilter<"Conversa"> | string
    clinicaId?: StringFilter<"Conversa"> | string
    status?: StringFilter<"Conversa"> | string
    ultimoContatoEm?: DateTimeNullableFilter<"Conversa"> | Date | string | null
    responsavelAtendimentoId?: StringNullableFilter<"Conversa"> | string | null
    paciente?: XOR<PacienteRelationFilter, PacienteWhereInput>
    clinica?: XOR<ClinicaRelationFilter, ClinicaWhereInput>
    responsavelAtendimento?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    mensagens?: MensagemListRelationFilter
    logs?: LogAcaoListRelationFilter
  }, "id">

  export type ConversaOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    clinicaId?: SortOrder
    status?: SortOrder
    ultimoContatoEm?: SortOrderInput | SortOrder
    responsavelAtendimentoId?: SortOrderInput | SortOrder
    _count?: ConversaCountOrderByAggregateInput
    _max?: ConversaMaxOrderByAggregateInput
    _min?: ConversaMinOrderByAggregateInput
  }

  export type ConversaScalarWhereWithAggregatesInput = {
    AND?: ConversaScalarWhereWithAggregatesInput | ConversaScalarWhereWithAggregatesInput[]
    OR?: ConversaScalarWhereWithAggregatesInput[]
    NOT?: ConversaScalarWhereWithAggregatesInput | ConversaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversa"> | string
    pacienteId?: StringWithAggregatesFilter<"Conversa"> | string
    clinicaId?: StringWithAggregatesFilter<"Conversa"> | string
    status?: StringWithAggregatesFilter<"Conversa"> | string
    ultimoContatoEm?: DateTimeNullableWithAggregatesFilter<"Conversa"> | Date | string | null
    responsavelAtendimentoId?: StringNullableWithAggregatesFilter<"Conversa"> | string | null
  }

  export type MensagemWhereInput = {
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    id?: StringFilter<"Mensagem"> | string
    conversaId?: StringFilter<"Mensagem"> | string
    autorTipo?: StringFilter<"Mensagem"> | string
    autorId?: StringNullableFilter<"Mensagem"> | string | null
    conteudo?: StringFilter<"Mensagem"> | string
    tipo?: StringFilter<"Mensagem"> | string
    whatsappMsgId?: StringNullableFilter<"Mensagem"> | string | null
    recebidaEm?: DateTimeNullableFilter<"Mensagem"> | Date | string | null
    criadaEm?: DateTimeFilter<"Mensagem"> | Date | string
    conversa?: XOR<ConversaRelationFilter, ConversaWhereInput>
    autor?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    sugestao?: XOR<MensagemSugestaoNullableRelationFilter, MensagemSugestaoWhereInput> | null
  }

  export type MensagemOrderByWithRelationInput = {
    id?: SortOrder
    conversaId?: SortOrder
    autorTipo?: SortOrder
    autorId?: SortOrderInput | SortOrder
    conteudo?: SortOrder
    tipo?: SortOrder
    whatsappMsgId?: SortOrderInput | SortOrder
    recebidaEm?: SortOrderInput | SortOrder
    criadaEm?: SortOrder
    conversa?: ConversaOrderByWithRelationInput
    autor?: UsuarioOrderByWithRelationInput
    sugestao?: MensagemSugestaoOrderByWithRelationInput
  }

  export type MensagemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    conversaId?: StringFilter<"Mensagem"> | string
    autorTipo?: StringFilter<"Mensagem"> | string
    autorId?: StringNullableFilter<"Mensagem"> | string | null
    conteudo?: StringFilter<"Mensagem"> | string
    tipo?: StringFilter<"Mensagem"> | string
    whatsappMsgId?: StringNullableFilter<"Mensagem"> | string | null
    recebidaEm?: DateTimeNullableFilter<"Mensagem"> | Date | string | null
    criadaEm?: DateTimeFilter<"Mensagem"> | Date | string
    conversa?: XOR<ConversaRelationFilter, ConversaWhereInput>
    autor?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    sugestao?: XOR<MensagemSugestaoNullableRelationFilter, MensagemSugestaoWhereInput> | null
  }, "id">

  export type MensagemOrderByWithAggregationInput = {
    id?: SortOrder
    conversaId?: SortOrder
    autorTipo?: SortOrder
    autorId?: SortOrderInput | SortOrder
    conteudo?: SortOrder
    tipo?: SortOrder
    whatsappMsgId?: SortOrderInput | SortOrder
    recebidaEm?: SortOrderInput | SortOrder
    criadaEm?: SortOrder
    _count?: MensagemCountOrderByAggregateInput
    _max?: MensagemMaxOrderByAggregateInput
    _min?: MensagemMinOrderByAggregateInput
  }

  export type MensagemScalarWhereWithAggregatesInput = {
    AND?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    OR?: MensagemScalarWhereWithAggregatesInput[]
    NOT?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mensagem"> | string
    conversaId?: StringWithAggregatesFilter<"Mensagem"> | string
    autorTipo?: StringWithAggregatesFilter<"Mensagem"> | string
    autorId?: StringNullableWithAggregatesFilter<"Mensagem"> | string | null
    conteudo?: StringWithAggregatesFilter<"Mensagem"> | string
    tipo?: StringWithAggregatesFilter<"Mensagem"> | string
    whatsappMsgId?: StringNullableWithAggregatesFilter<"Mensagem"> | string | null
    recebidaEm?: DateTimeNullableWithAggregatesFilter<"Mensagem"> | Date | string | null
    criadaEm?: DateTimeWithAggregatesFilter<"Mensagem"> | Date | string
  }

  export type MensagemSugestaoWhereInput = {
    AND?: MensagemSugestaoWhereInput | MensagemSugestaoWhereInput[]
    OR?: MensagemSugestaoWhereInput[]
    NOT?: MensagemSugestaoWhereInput | MensagemSugestaoWhereInput[]
    id?: StringFilter<"MensagemSugestao"> | string
    mensagemId?: StringFilter<"MensagemSugestao"> | string
    conteudoSugerido?: StringFilter<"MensagemSugestao"> | string
    modeloIa?: StringFilter<"MensagemSugestao"> | string
    geradoEm?: DateTimeFilter<"MensagemSugestao"> | Date | string
    mensagem?: XOR<MensagemRelationFilter, MensagemWhereInput>
  }

  export type MensagemSugestaoOrderByWithRelationInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    conteudoSugerido?: SortOrder
    modeloIa?: SortOrder
    geradoEm?: SortOrder
    mensagem?: MensagemOrderByWithRelationInput
  }

  export type MensagemSugestaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mensagemId?: string
    AND?: MensagemSugestaoWhereInput | MensagemSugestaoWhereInput[]
    OR?: MensagemSugestaoWhereInput[]
    NOT?: MensagemSugestaoWhereInput | MensagemSugestaoWhereInput[]
    conteudoSugerido?: StringFilter<"MensagemSugestao"> | string
    modeloIa?: StringFilter<"MensagemSugestao"> | string
    geradoEm?: DateTimeFilter<"MensagemSugestao"> | Date | string
    mensagem?: XOR<MensagemRelationFilter, MensagemWhereInput>
  }, "id" | "mensagemId">

  export type MensagemSugestaoOrderByWithAggregationInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    conteudoSugerido?: SortOrder
    modeloIa?: SortOrder
    geradoEm?: SortOrder
    _count?: MensagemSugestaoCountOrderByAggregateInput
    _max?: MensagemSugestaoMaxOrderByAggregateInput
    _min?: MensagemSugestaoMinOrderByAggregateInput
  }

  export type MensagemSugestaoScalarWhereWithAggregatesInput = {
    AND?: MensagemSugestaoScalarWhereWithAggregatesInput | MensagemSugestaoScalarWhereWithAggregatesInput[]
    OR?: MensagemSugestaoScalarWhereWithAggregatesInput[]
    NOT?: MensagemSugestaoScalarWhereWithAggregatesInput | MensagemSugestaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MensagemSugestao"> | string
    mensagemId?: StringWithAggregatesFilter<"MensagemSugestao"> | string
    conteudoSugerido?: StringWithAggregatesFilter<"MensagemSugestao"> | string
    modeloIa?: StringWithAggregatesFilter<"MensagemSugestao"> | string
    geradoEm?: DateTimeWithAggregatesFilter<"MensagemSugestao"> | Date | string
  }

  export type LogAcaoWhereInput = {
    AND?: LogAcaoWhereInput | LogAcaoWhereInput[]
    OR?: LogAcaoWhereInput[]
    NOT?: LogAcaoWhereInput | LogAcaoWhereInput[]
    id?: StringFilter<"LogAcao"> | string
    usuarioId?: StringFilter<"LogAcao"> | string
    conversaId?: StringNullableFilter<"LogAcao"> | string | null
    tipoAcao?: StringFilter<"LogAcao"> | string
    dados?: JsonFilter<"LogAcao">
    createdAt?: DateTimeFilter<"LogAcao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    conversa?: XOR<ConversaNullableRelationFilter, ConversaWhereInput> | null
  }

  export type LogAcaoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    conversaId?: SortOrderInput | SortOrder
    tipoAcao?: SortOrder
    dados?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    conversa?: ConversaOrderByWithRelationInput
  }

  export type LogAcaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogAcaoWhereInput | LogAcaoWhereInput[]
    OR?: LogAcaoWhereInput[]
    NOT?: LogAcaoWhereInput | LogAcaoWhereInput[]
    usuarioId?: StringFilter<"LogAcao"> | string
    conversaId?: StringNullableFilter<"LogAcao"> | string | null
    tipoAcao?: StringFilter<"LogAcao"> | string
    dados?: JsonFilter<"LogAcao">
    createdAt?: DateTimeFilter<"LogAcao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    conversa?: XOR<ConversaNullableRelationFilter, ConversaWhereInput> | null
  }, "id">

  export type LogAcaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    conversaId?: SortOrderInput | SortOrder
    tipoAcao?: SortOrder
    dados?: SortOrder
    createdAt?: SortOrder
    _count?: LogAcaoCountOrderByAggregateInput
    _max?: LogAcaoMaxOrderByAggregateInput
    _min?: LogAcaoMinOrderByAggregateInput
  }

  export type LogAcaoScalarWhereWithAggregatesInput = {
    AND?: LogAcaoScalarWhereWithAggregatesInput | LogAcaoScalarWhereWithAggregatesInput[]
    OR?: LogAcaoScalarWhereWithAggregatesInput[]
    NOT?: LogAcaoScalarWhereWithAggregatesInput | LogAcaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogAcao"> | string
    usuarioId?: StringWithAggregatesFilter<"LogAcao"> | string
    conversaId?: StringNullableWithAggregatesFilter<"LogAcao"> | string | null
    tipoAcao?: StringWithAggregatesFilter<"LogAcao"> | string
    dados?: JsonWithAggregatesFilter<"LogAcao">
    createdAt?: DateTimeWithAggregatesFilter<"LogAcao"> | Date | string
  }

  export type ClinicaCreateInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutClinicaInput
    pacientes?: PacienteCreateNestedManyWithoutClinicaInput
    conversas?: ConversaCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaUncheckedCreateInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutClinicaInput
    pacientes?: PacienteUncheckedCreateNestedManyWithoutClinicaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutClinicaNestedInput
    pacientes?: PacienteUpdateManyWithoutClinicaNestedInput
    conversas?: ConversaUpdateManyWithoutClinicaNestedInput
  }

  export type ClinicaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutClinicaNestedInput
    pacientes?: PacienteUncheckedUpdateManyWithoutClinicaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutClinicaNestedInput
  }

  export type ClinicaCreateManyInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
  }

  export type ClinicaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    clinica: ClinicaCreateNestedOneWithoutUsuariosInput
    conversas?: ConversaCreateNestedManyWithoutResponsavelAtendimentoInput
    mensagens?: MensagemCreateNestedManyWithoutAutorInput
    logs?: LogAcaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    clinicaId: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    conversas?: ConversaUncheckedCreateNestedManyWithoutResponsavelAtendimentoInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutAutorInput
    logs?: LogAcaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinica?: ClinicaUpdateOneRequiredWithoutUsuariosNestedInput
    conversas?: ConversaUpdateManyWithoutResponsavelAtendimentoNestedInput
    mensagens?: MensagemUpdateManyWithoutAutorNestedInput
    logs?: LogAcaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversas?: ConversaUncheckedUpdateManyWithoutResponsavelAtendimentoNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutAutorNestedInput
    logs?: LogAcaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    clinicaId: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteCreateInput = {
    id?: string
    nome: string
    telefone: string
    cpf?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    clinica: ClinicaCreateNestedOneWithoutPacientesInput
    conversas?: ConversaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: string
    clinicaId: string
    nome: string
    telefone: string
    cpf?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    conversas?: ConversaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinica?: ClinicaUpdateOneRequiredWithoutPacientesNestedInput
    conversas?: ConversaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversas?: ConversaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: string
    clinicaId: string
    nome: string
    telefone: string
    cpf?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
  }

  export type PacienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversaCreateInput = {
    id?: string
    status: string
    ultimoContatoEm?: Date | string | null
    paciente: PacienteCreateNestedOneWithoutConversasInput
    clinica: ClinicaCreateNestedOneWithoutConversasInput
    responsavelAtendimento?: UsuarioCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
    logs?: LogAcaoCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateInput = {
    id?: string
    pacienteId: string
    clinicaId: string
    status: string
    ultimoContatoEm?: Date | string | null
    responsavelAtendimentoId?: string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
    logs?: LogAcaoUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paciente?: PacienteUpdateOneRequiredWithoutConversasNestedInput
    clinica?: ClinicaUpdateOneRequiredWithoutConversasNestedInput
    responsavelAtendimento?: UsuarioUpdateOneWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
    logs?: LogAcaoUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavelAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
    logs?: LogAcaoUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type ConversaCreateManyInput = {
    id?: string
    pacienteId: string
    clinicaId: string
    status: string
    ultimoContatoEm?: Date | string | null
    responsavelAtendimentoId?: string | null
  }

  export type ConversaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavelAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemCreateInput = {
    id?: string
    autorTipo: string
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
    conversa: ConversaCreateNestedOneWithoutMensagensInput
    autor?: UsuarioCreateNestedOneWithoutMensagensInput
    sugestao?: MensagemSugestaoCreateNestedOneWithoutMensagemInput
  }

  export type MensagemUncheckedCreateInput = {
    id?: string
    conversaId: string
    autorTipo: string
    autorId?: string | null
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
    sugestao?: MensagemSugestaoUncheckedCreateNestedOneWithoutMensagemInput
  }

  export type MensagemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    conversa?: ConversaUpdateOneRequiredWithoutMensagensNestedInput
    autor?: UsuarioUpdateOneWithoutMensagensNestedInput
    sugestao?: MensagemSugestaoUpdateOneWithoutMensagemNestedInput
  }

  export type MensagemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversaId?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    autorId?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sugestao?: MensagemSugestaoUncheckedUpdateOneWithoutMensagemNestedInput
  }

  export type MensagemCreateManyInput = {
    id?: string
    conversaId: string
    autorTipo: string
    autorId?: string | null
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
  }

  export type MensagemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversaId?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    autorId?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemSugestaoCreateInput = {
    id?: string
    conteudoSugerido: string
    modeloIa: string
    geradoEm?: Date | string
    mensagem: MensagemCreateNestedOneWithoutSugestaoInput
  }

  export type MensagemSugestaoUncheckedCreateInput = {
    id?: string
    mensagemId: string
    conteudoSugerido: string
    modeloIa: string
    geradoEm?: Date | string
  }

  export type MensagemSugestaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoSugerido?: StringFieldUpdateOperationsInput | string
    modeloIa?: StringFieldUpdateOperationsInput | string
    geradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagem?: MensagemUpdateOneRequiredWithoutSugestaoNestedInput
  }

  export type MensagemSugestaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagemId?: StringFieldUpdateOperationsInput | string
    conteudoSugerido?: StringFieldUpdateOperationsInput | string
    modeloIa?: StringFieldUpdateOperationsInput | string
    geradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemSugestaoCreateManyInput = {
    id?: string
    mensagemId: string
    conteudoSugerido: string
    modeloIa: string
    geradoEm?: Date | string
  }

  export type MensagemSugestaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoSugerido?: StringFieldUpdateOperationsInput | string
    modeloIa?: StringFieldUpdateOperationsInput | string
    geradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemSugestaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mensagemId?: StringFieldUpdateOperationsInput | string
    conteudoSugerido?: StringFieldUpdateOperationsInput | string
    modeloIa?: StringFieldUpdateOperationsInput | string
    geradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcaoCreateInput = {
    id?: string
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLogsInput
    conversa?: ConversaCreateNestedOneWithoutLogsInput
  }

  export type LogAcaoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    conversaId?: string | null
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogAcaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLogsNestedInput
    conversa?: ConversaUpdateOneWithoutLogsNestedInput
  }

  export type LogAcaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    conversaId?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcaoCreateManyInput = {
    id?: string
    usuarioId: string
    conversaId?: string | null
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogAcaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    conversaId?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type PacienteListRelationFilter = {
    every?: PacienteWhereInput
    some?: PacienteWhereInput
    none?: PacienteWhereInput
  }

  export type ConversaListRelationFilter = {
    every?: ConversaWhereInput
    some?: ConversaWhereInput
    none?: ConversaWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClinicaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
  }

  export type ClinicaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
  }

  export type ClinicaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    telefone?: SortOrder
    createdAt?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClinicaRelationFilter = {
    is?: ClinicaWhereInput
    isNot?: ClinicaWhereInput
  }

  export type MensagemListRelationFilter = {
    every?: MensagemWhereInput
    some?: MensagemWhereInput
    none?: MensagemWhereInput
  }

  export type LogAcaoListRelationFilter = {
    every?: LogAcaoWhereInput
    some?: LogAcaoWhereInput
    none?: LogAcaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MensagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogAcaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    ultimoLogin?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    ultimoLogin?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    papel?: SortOrder
    ultimoLogin?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    clinicaId?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    createdAt?: SortOrder
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

  export type PacienteRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type UsuarioNullableRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ConversaCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    clinicaId?: SortOrder
    status?: SortOrder
    ultimoContatoEm?: SortOrder
    responsavelAtendimentoId?: SortOrder
  }

  export type ConversaMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    clinicaId?: SortOrder
    status?: SortOrder
    ultimoContatoEm?: SortOrder
    responsavelAtendimentoId?: SortOrder
  }

  export type ConversaMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    clinicaId?: SortOrder
    status?: SortOrder
    ultimoContatoEm?: SortOrder
    responsavelAtendimentoId?: SortOrder
  }

  export type ConversaRelationFilter = {
    is?: ConversaWhereInput
    isNot?: ConversaWhereInput
  }

  export type MensagemSugestaoNullableRelationFilter = {
    is?: MensagemSugestaoWhereInput | null
    isNot?: MensagemSugestaoWhereInput | null
  }

  export type MensagemCountOrderByAggregateInput = {
    id?: SortOrder
    conversaId?: SortOrder
    autorTipo?: SortOrder
    autorId?: SortOrder
    conteudo?: SortOrder
    tipo?: SortOrder
    whatsappMsgId?: SortOrder
    recebidaEm?: SortOrder
    criadaEm?: SortOrder
  }

  export type MensagemMaxOrderByAggregateInput = {
    id?: SortOrder
    conversaId?: SortOrder
    autorTipo?: SortOrder
    autorId?: SortOrder
    conteudo?: SortOrder
    tipo?: SortOrder
    whatsappMsgId?: SortOrder
    recebidaEm?: SortOrder
    criadaEm?: SortOrder
  }

  export type MensagemMinOrderByAggregateInput = {
    id?: SortOrder
    conversaId?: SortOrder
    autorTipo?: SortOrder
    autorId?: SortOrder
    conteudo?: SortOrder
    tipo?: SortOrder
    whatsappMsgId?: SortOrder
    recebidaEm?: SortOrder
    criadaEm?: SortOrder
  }

  export type MensagemRelationFilter = {
    is?: MensagemWhereInput
    isNot?: MensagemWhereInput
  }

  export type MensagemSugestaoCountOrderByAggregateInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    conteudoSugerido?: SortOrder
    modeloIa?: SortOrder
    geradoEm?: SortOrder
  }

  export type MensagemSugestaoMaxOrderByAggregateInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    conteudoSugerido?: SortOrder
    modeloIa?: SortOrder
    geradoEm?: SortOrder
  }

  export type MensagemSugestaoMinOrderByAggregateInput = {
    id?: SortOrder
    mensagemId?: SortOrder
    conteudoSugerido?: SortOrder
    modeloIa?: SortOrder
    geradoEm?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ConversaNullableRelationFilter = {
    is?: ConversaWhereInput | null
    isNot?: ConversaWhereInput | null
  }

  export type LogAcaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    conversaId?: SortOrder
    tipoAcao?: SortOrder
    dados?: SortOrder
    createdAt?: SortOrder
  }

  export type LogAcaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    conversaId?: SortOrder
    tipoAcao?: SortOrder
    createdAt?: SortOrder
  }

  export type LogAcaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    conversaId?: SortOrder
    tipoAcao?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UsuarioCreateNestedManyWithoutClinicaInput = {
    create?: XOR<UsuarioCreateWithoutClinicaInput, UsuarioUncheckedCreateWithoutClinicaInput> | UsuarioCreateWithoutClinicaInput[] | UsuarioUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutClinicaInput | UsuarioCreateOrConnectWithoutClinicaInput[]
    createMany?: UsuarioCreateManyClinicaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PacienteCreateNestedManyWithoutClinicaInput = {
    create?: XOR<PacienteCreateWithoutClinicaInput, PacienteUncheckedCreateWithoutClinicaInput> | PacienteCreateWithoutClinicaInput[] | PacienteUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutClinicaInput | PacienteCreateOrConnectWithoutClinicaInput[]
    createMany?: PacienteCreateManyClinicaInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ConversaCreateNestedManyWithoutClinicaInput = {
    create?: XOR<ConversaCreateWithoutClinicaInput, ConversaUncheckedCreateWithoutClinicaInput> | ConversaCreateWithoutClinicaInput[] | ConversaUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutClinicaInput | ConversaCreateOrConnectWithoutClinicaInput[]
    createMany?: ConversaCreateManyClinicaInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutClinicaInput = {
    create?: XOR<UsuarioCreateWithoutClinicaInput, UsuarioUncheckedCreateWithoutClinicaInput> | UsuarioCreateWithoutClinicaInput[] | UsuarioUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutClinicaInput | UsuarioCreateOrConnectWithoutClinicaInput[]
    createMany?: UsuarioCreateManyClinicaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutClinicaInput = {
    create?: XOR<PacienteCreateWithoutClinicaInput, PacienteUncheckedCreateWithoutClinicaInput> | PacienteCreateWithoutClinicaInput[] | PacienteUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutClinicaInput | PacienteCreateOrConnectWithoutClinicaInput[]
    createMany?: PacienteCreateManyClinicaInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ConversaUncheckedCreateNestedManyWithoutClinicaInput = {
    create?: XOR<ConversaCreateWithoutClinicaInput, ConversaUncheckedCreateWithoutClinicaInput> | ConversaCreateWithoutClinicaInput[] | ConversaUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutClinicaInput | ConversaCreateOrConnectWithoutClinicaInput[]
    createMany?: ConversaCreateManyClinicaInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateManyWithoutClinicaNestedInput = {
    create?: XOR<UsuarioCreateWithoutClinicaInput, UsuarioUncheckedCreateWithoutClinicaInput> | UsuarioCreateWithoutClinicaInput[] | UsuarioUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutClinicaInput | UsuarioCreateOrConnectWithoutClinicaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutClinicaInput | UsuarioUpsertWithWhereUniqueWithoutClinicaInput[]
    createMany?: UsuarioCreateManyClinicaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutClinicaInput | UsuarioUpdateWithWhereUniqueWithoutClinicaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutClinicaInput | UsuarioUpdateManyWithWhereWithoutClinicaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PacienteUpdateManyWithoutClinicaNestedInput = {
    create?: XOR<PacienteCreateWithoutClinicaInput, PacienteUncheckedCreateWithoutClinicaInput> | PacienteCreateWithoutClinicaInput[] | PacienteUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutClinicaInput | PacienteCreateOrConnectWithoutClinicaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutClinicaInput | PacienteUpsertWithWhereUniqueWithoutClinicaInput[]
    createMany?: PacienteCreateManyClinicaInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutClinicaInput | PacienteUpdateWithWhereUniqueWithoutClinicaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutClinicaInput | PacienteUpdateManyWithWhereWithoutClinicaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ConversaUpdateManyWithoutClinicaNestedInput = {
    create?: XOR<ConversaCreateWithoutClinicaInput, ConversaUncheckedCreateWithoutClinicaInput> | ConversaCreateWithoutClinicaInput[] | ConversaUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutClinicaInput | ConversaCreateOrConnectWithoutClinicaInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutClinicaInput | ConversaUpsertWithWhereUniqueWithoutClinicaInput[]
    createMany?: ConversaCreateManyClinicaInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutClinicaInput | ConversaUpdateWithWhereUniqueWithoutClinicaInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutClinicaInput | ConversaUpdateManyWithWhereWithoutClinicaInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutClinicaNestedInput = {
    create?: XOR<UsuarioCreateWithoutClinicaInput, UsuarioUncheckedCreateWithoutClinicaInput> | UsuarioCreateWithoutClinicaInput[] | UsuarioUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutClinicaInput | UsuarioCreateOrConnectWithoutClinicaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutClinicaInput | UsuarioUpsertWithWhereUniqueWithoutClinicaInput[]
    createMany?: UsuarioCreateManyClinicaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutClinicaInput | UsuarioUpdateWithWhereUniqueWithoutClinicaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutClinicaInput | UsuarioUpdateManyWithWhereWithoutClinicaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutClinicaNestedInput = {
    create?: XOR<PacienteCreateWithoutClinicaInput, PacienteUncheckedCreateWithoutClinicaInput> | PacienteCreateWithoutClinicaInput[] | PacienteUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutClinicaInput | PacienteCreateOrConnectWithoutClinicaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutClinicaInput | PacienteUpsertWithWhereUniqueWithoutClinicaInput[]
    createMany?: PacienteCreateManyClinicaInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutClinicaInput | PacienteUpdateWithWhereUniqueWithoutClinicaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutClinicaInput | PacienteUpdateManyWithWhereWithoutClinicaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ConversaUncheckedUpdateManyWithoutClinicaNestedInput = {
    create?: XOR<ConversaCreateWithoutClinicaInput, ConversaUncheckedCreateWithoutClinicaInput> | ConversaCreateWithoutClinicaInput[] | ConversaUncheckedCreateWithoutClinicaInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutClinicaInput | ConversaCreateOrConnectWithoutClinicaInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutClinicaInput | ConversaUpsertWithWhereUniqueWithoutClinicaInput[]
    createMany?: ConversaCreateManyClinicaInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutClinicaInput | ConversaUpdateWithWhereUniqueWithoutClinicaInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutClinicaInput | ConversaUpdateManyWithWhereWithoutClinicaInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type ClinicaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<ClinicaCreateWithoutUsuariosInput, ClinicaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ClinicaCreateOrConnectWithoutUsuariosInput
    connect?: ClinicaWhereUniqueInput
  }

  export type ConversaCreateNestedManyWithoutResponsavelAtendimentoInput = {
    create?: XOR<ConversaCreateWithoutResponsavelAtendimentoInput, ConversaUncheckedCreateWithoutResponsavelAtendimentoInput> | ConversaCreateWithoutResponsavelAtendimentoInput[] | ConversaUncheckedCreateWithoutResponsavelAtendimentoInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutResponsavelAtendimentoInput | ConversaCreateOrConnectWithoutResponsavelAtendimentoInput[]
    createMany?: ConversaCreateManyResponsavelAtendimentoInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type MensagemCreateNestedManyWithoutAutorInput = {
    create?: XOR<MensagemCreateWithoutAutorInput, MensagemUncheckedCreateWithoutAutorInput> | MensagemCreateWithoutAutorInput[] | MensagemUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutAutorInput | MensagemCreateOrConnectWithoutAutorInput[]
    createMany?: MensagemCreateManyAutorInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type LogAcaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogAcaoCreateWithoutUsuarioInput, LogAcaoUncheckedCreateWithoutUsuarioInput> | LogAcaoCreateWithoutUsuarioInput[] | LogAcaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAcaoCreateOrConnectWithoutUsuarioInput | LogAcaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogAcaoCreateManyUsuarioInputEnvelope
    connect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
  }

  export type ConversaUncheckedCreateNestedManyWithoutResponsavelAtendimentoInput = {
    create?: XOR<ConversaCreateWithoutResponsavelAtendimentoInput, ConversaUncheckedCreateWithoutResponsavelAtendimentoInput> | ConversaCreateWithoutResponsavelAtendimentoInput[] | ConversaUncheckedCreateWithoutResponsavelAtendimentoInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutResponsavelAtendimentoInput | ConversaCreateOrConnectWithoutResponsavelAtendimentoInput[]
    createMany?: ConversaCreateManyResponsavelAtendimentoInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<MensagemCreateWithoutAutorInput, MensagemUncheckedCreateWithoutAutorInput> | MensagemCreateWithoutAutorInput[] | MensagemUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutAutorInput | MensagemCreateOrConnectWithoutAutorInput[]
    createMany?: MensagemCreateManyAutorInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type LogAcaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogAcaoCreateWithoutUsuarioInput, LogAcaoUncheckedCreateWithoutUsuarioInput> | LogAcaoCreateWithoutUsuarioInput[] | LogAcaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAcaoCreateOrConnectWithoutUsuarioInput | LogAcaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogAcaoCreateManyUsuarioInputEnvelope
    connect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClinicaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<ClinicaCreateWithoutUsuariosInput, ClinicaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: ClinicaCreateOrConnectWithoutUsuariosInput
    upsert?: ClinicaUpsertWithoutUsuariosInput
    connect?: ClinicaWhereUniqueInput
    update?: XOR<XOR<ClinicaUpdateToOneWithWhereWithoutUsuariosInput, ClinicaUpdateWithoutUsuariosInput>, ClinicaUncheckedUpdateWithoutUsuariosInput>
  }

  export type ConversaUpdateManyWithoutResponsavelAtendimentoNestedInput = {
    create?: XOR<ConversaCreateWithoutResponsavelAtendimentoInput, ConversaUncheckedCreateWithoutResponsavelAtendimentoInput> | ConversaCreateWithoutResponsavelAtendimentoInput[] | ConversaUncheckedCreateWithoutResponsavelAtendimentoInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutResponsavelAtendimentoInput | ConversaCreateOrConnectWithoutResponsavelAtendimentoInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutResponsavelAtendimentoInput | ConversaUpsertWithWhereUniqueWithoutResponsavelAtendimentoInput[]
    createMany?: ConversaCreateManyResponsavelAtendimentoInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutResponsavelAtendimentoInput | ConversaUpdateWithWhereUniqueWithoutResponsavelAtendimentoInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutResponsavelAtendimentoInput | ConversaUpdateManyWithWhereWithoutResponsavelAtendimentoInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type MensagemUpdateManyWithoutAutorNestedInput = {
    create?: XOR<MensagemCreateWithoutAutorInput, MensagemUncheckedCreateWithoutAutorInput> | MensagemCreateWithoutAutorInput[] | MensagemUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutAutorInput | MensagemCreateOrConnectWithoutAutorInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutAutorInput | MensagemUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: MensagemCreateManyAutorInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutAutorInput | MensagemUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutAutorInput | MensagemUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type LogAcaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogAcaoCreateWithoutUsuarioInput, LogAcaoUncheckedCreateWithoutUsuarioInput> | LogAcaoCreateWithoutUsuarioInput[] | LogAcaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAcaoCreateOrConnectWithoutUsuarioInput | LogAcaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogAcaoUpsertWithWhereUniqueWithoutUsuarioInput | LogAcaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogAcaoCreateManyUsuarioInputEnvelope
    set?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    disconnect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    delete?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    connect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    update?: LogAcaoUpdateWithWhereUniqueWithoutUsuarioInput | LogAcaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogAcaoUpdateManyWithWhereWithoutUsuarioInput | LogAcaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogAcaoScalarWhereInput | LogAcaoScalarWhereInput[]
  }

  export type ConversaUncheckedUpdateManyWithoutResponsavelAtendimentoNestedInput = {
    create?: XOR<ConversaCreateWithoutResponsavelAtendimentoInput, ConversaUncheckedCreateWithoutResponsavelAtendimentoInput> | ConversaCreateWithoutResponsavelAtendimentoInput[] | ConversaUncheckedCreateWithoutResponsavelAtendimentoInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutResponsavelAtendimentoInput | ConversaCreateOrConnectWithoutResponsavelAtendimentoInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutResponsavelAtendimentoInput | ConversaUpsertWithWhereUniqueWithoutResponsavelAtendimentoInput[]
    createMany?: ConversaCreateManyResponsavelAtendimentoInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutResponsavelAtendimentoInput | ConversaUpdateWithWhereUniqueWithoutResponsavelAtendimentoInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutResponsavelAtendimentoInput | ConversaUpdateManyWithWhereWithoutResponsavelAtendimentoInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<MensagemCreateWithoutAutorInput, MensagemUncheckedCreateWithoutAutorInput> | MensagemCreateWithoutAutorInput[] | MensagemUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutAutorInput | MensagemCreateOrConnectWithoutAutorInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutAutorInput | MensagemUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: MensagemCreateManyAutorInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutAutorInput | MensagemUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutAutorInput | MensagemUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type LogAcaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogAcaoCreateWithoutUsuarioInput, LogAcaoUncheckedCreateWithoutUsuarioInput> | LogAcaoCreateWithoutUsuarioInput[] | LogAcaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogAcaoCreateOrConnectWithoutUsuarioInput | LogAcaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogAcaoUpsertWithWhereUniqueWithoutUsuarioInput | LogAcaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogAcaoCreateManyUsuarioInputEnvelope
    set?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    disconnect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    delete?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    connect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    update?: LogAcaoUpdateWithWhereUniqueWithoutUsuarioInput | LogAcaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogAcaoUpdateManyWithWhereWithoutUsuarioInput | LogAcaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogAcaoScalarWhereInput | LogAcaoScalarWhereInput[]
  }

  export type ClinicaCreateNestedOneWithoutPacientesInput = {
    create?: XOR<ClinicaCreateWithoutPacientesInput, ClinicaUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: ClinicaCreateOrConnectWithoutPacientesInput
    connect?: ClinicaWhereUniqueInput
  }

  export type ConversaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConversaCreateWithoutPacienteInput, ConversaUncheckedCreateWithoutPacienteInput> | ConversaCreateWithoutPacienteInput[] | ConversaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutPacienteInput | ConversaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConversaCreateManyPacienteInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type ConversaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConversaCreateWithoutPacienteInput, ConversaUncheckedCreateWithoutPacienteInput> | ConversaCreateWithoutPacienteInput[] | ConversaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutPacienteInput | ConversaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConversaCreateManyPacienteInputEnvelope
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClinicaUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<ClinicaCreateWithoutPacientesInput, ClinicaUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: ClinicaCreateOrConnectWithoutPacientesInput
    upsert?: ClinicaUpsertWithoutPacientesInput
    connect?: ClinicaWhereUniqueInput
    update?: XOR<XOR<ClinicaUpdateToOneWithWhereWithoutPacientesInput, ClinicaUpdateWithoutPacientesInput>, ClinicaUncheckedUpdateWithoutPacientesInput>
  }

  export type ConversaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConversaCreateWithoutPacienteInput, ConversaUncheckedCreateWithoutPacienteInput> | ConversaCreateWithoutPacienteInput[] | ConversaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutPacienteInput | ConversaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutPacienteInput | ConversaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConversaCreateManyPacienteInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutPacienteInput | ConversaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutPacienteInput | ConversaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type ConversaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConversaCreateWithoutPacienteInput, ConversaUncheckedCreateWithoutPacienteInput> | ConversaCreateWithoutPacienteInput[] | ConversaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConversaCreateOrConnectWithoutPacienteInput | ConversaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConversaUpsertWithWhereUniqueWithoutPacienteInput | ConversaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConversaCreateManyPacienteInputEnvelope
    set?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    disconnect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    delete?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    connect?: ConversaWhereUniqueInput | ConversaWhereUniqueInput[]
    update?: ConversaUpdateWithWhereUniqueWithoutPacienteInput | ConversaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConversaUpdateManyWithWhereWithoutPacienteInput | ConversaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutConversasInput = {
    create?: XOR<PacienteCreateWithoutConversasInput, PacienteUncheckedCreateWithoutConversasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConversasInput
    connect?: PacienteWhereUniqueInput
  }

  export type ClinicaCreateNestedOneWithoutConversasInput = {
    create?: XOR<ClinicaCreateWithoutConversasInput, ClinicaUncheckedCreateWithoutConversasInput>
    connectOrCreate?: ClinicaCreateOrConnectWithoutConversasInput
    connect?: ClinicaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutConversasInput = {
    create?: XOR<UsuarioCreateWithoutConversasInput, UsuarioUncheckedCreateWithoutConversasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MensagemCreateNestedManyWithoutConversaInput = {
    create?: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput> | MensagemCreateWithoutConversaInput[] | MensagemUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutConversaInput | MensagemCreateOrConnectWithoutConversaInput[]
    createMany?: MensagemCreateManyConversaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type LogAcaoCreateNestedManyWithoutConversaInput = {
    create?: XOR<LogAcaoCreateWithoutConversaInput, LogAcaoUncheckedCreateWithoutConversaInput> | LogAcaoCreateWithoutConversaInput[] | LogAcaoUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: LogAcaoCreateOrConnectWithoutConversaInput | LogAcaoCreateOrConnectWithoutConversaInput[]
    createMany?: LogAcaoCreateManyConversaInputEnvelope
    connect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutConversaInput = {
    create?: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput> | MensagemCreateWithoutConversaInput[] | MensagemUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutConversaInput | MensagemCreateOrConnectWithoutConversaInput[]
    createMany?: MensagemCreateManyConversaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type LogAcaoUncheckedCreateNestedManyWithoutConversaInput = {
    create?: XOR<LogAcaoCreateWithoutConversaInput, LogAcaoUncheckedCreateWithoutConversaInput> | LogAcaoCreateWithoutConversaInput[] | LogAcaoUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: LogAcaoCreateOrConnectWithoutConversaInput | LogAcaoCreateOrConnectWithoutConversaInput[]
    createMany?: LogAcaoCreateManyConversaInputEnvelope
    connect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
  }

  export type PacienteUpdateOneRequiredWithoutConversasNestedInput = {
    create?: XOR<PacienteCreateWithoutConversasInput, PacienteUncheckedCreateWithoutConversasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConversasInput
    upsert?: PacienteUpsertWithoutConversasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutConversasInput, PacienteUpdateWithoutConversasInput>, PacienteUncheckedUpdateWithoutConversasInput>
  }

  export type ClinicaUpdateOneRequiredWithoutConversasNestedInput = {
    create?: XOR<ClinicaCreateWithoutConversasInput, ClinicaUncheckedCreateWithoutConversasInput>
    connectOrCreate?: ClinicaCreateOrConnectWithoutConversasInput
    upsert?: ClinicaUpsertWithoutConversasInput
    connect?: ClinicaWhereUniqueInput
    update?: XOR<XOR<ClinicaUpdateToOneWithWhereWithoutConversasInput, ClinicaUpdateWithoutConversasInput>, ClinicaUncheckedUpdateWithoutConversasInput>
  }

  export type UsuarioUpdateOneWithoutConversasNestedInput = {
    create?: XOR<UsuarioCreateWithoutConversasInput, UsuarioUncheckedCreateWithoutConversasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutConversasInput
    upsert?: UsuarioUpsertWithoutConversasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutConversasInput, UsuarioUpdateWithoutConversasInput>, UsuarioUncheckedUpdateWithoutConversasInput>
  }

  export type MensagemUpdateManyWithoutConversaNestedInput = {
    create?: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput> | MensagemCreateWithoutConversaInput[] | MensagemUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutConversaInput | MensagemCreateOrConnectWithoutConversaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutConversaInput | MensagemUpsertWithWhereUniqueWithoutConversaInput[]
    createMany?: MensagemCreateManyConversaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutConversaInput | MensagemUpdateWithWhereUniqueWithoutConversaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutConversaInput | MensagemUpdateManyWithWhereWithoutConversaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type LogAcaoUpdateManyWithoutConversaNestedInput = {
    create?: XOR<LogAcaoCreateWithoutConversaInput, LogAcaoUncheckedCreateWithoutConversaInput> | LogAcaoCreateWithoutConversaInput[] | LogAcaoUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: LogAcaoCreateOrConnectWithoutConversaInput | LogAcaoCreateOrConnectWithoutConversaInput[]
    upsert?: LogAcaoUpsertWithWhereUniqueWithoutConversaInput | LogAcaoUpsertWithWhereUniqueWithoutConversaInput[]
    createMany?: LogAcaoCreateManyConversaInputEnvelope
    set?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    disconnect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    delete?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    connect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    update?: LogAcaoUpdateWithWhereUniqueWithoutConversaInput | LogAcaoUpdateWithWhereUniqueWithoutConversaInput[]
    updateMany?: LogAcaoUpdateManyWithWhereWithoutConversaInput | LogAcaoUpdateManyWithWhereWithoutConversaInput[]
    deleteMany?: LogAcaoScalarWhereInput | LogAcaoScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutConversaNestedInput = {
    create?: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput> | MensagemCreateWithoutConversaInput[] | MensagemUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutConversaInput | MensagemCreateOrConnectWithoutConversaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutConversaInput | MensagemUpsertWithWhereUniqueWithoutConversaInput[]
    createMany?: MensagemCreateManyConversaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutConversaInput | MensagemUpdateWithWhereUniqueWithoutConversaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutConversaInput | MensagemUpdateManyWithWhereWithoutConversaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type LogAcaoUncheckedUpdateManyWithoutConversaNestedInput = {
    create?: XOR<LogAcaoCreateWithoutConversaInput, LogAcaoUncheckedCreateWithoutConversaInput> | LogAcaoCreateWithoutConversaInput[] | LogAcaoUncheckedCreateWithoutConversaInput[]
    connectOrCreate?: LogAcaoCreateOrConnectWithoutConversaInput | LogAcaoCreateOrConnectWithoutConversaInput[]
    upsert?: LogAcaoUpsertWithWhereUniqueWithoutConversaInput | LogAcaoUpsertWithWhereUniqueWithoutConversaInput[]
    createMany?: LogAcaoCreateManyConversaInputEnvelope
    set?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    disconnect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    delete?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    connect?: LogAcaoWhereUniqueInput | LogAcaoWhereUniqueInput[]
    update?: LogAcaoUpdateWithWhereUniqueWithoutConversaInput | LogAcaoUpdateWithWhereUniqueWithoutConversaInput[]
    updateMany?: LogAcaoUpdateManyWithWhereWithoutConversaInput | LogAcaoUpdateManyWithWhereWithoutConversaInput[]
    deleteMany?: LogAcaoScalarWhereInput | LogAcaoScalarWhereInput[]
  }

  export type ConversaCreateNestedOneWithoutMensagensInput = {
    create?: XOR<ConversaCreateWithoutMensagensInput, ConversaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: ConversaCreateOrConnectWithoutMensagensInput
    connect?: ConversaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMensagensInput = {
    create?: XOR<UsuarioCreateWithoutMensagensInput, UsuarioUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensagensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MensagemSugestaoCreateNestedOneWithoutMensagemInput = {
    create?: XOR<MensagemSugestaoCreateWithoutMensagemInput, MensagemSugestaoUncheckedCreateWithoutMensagemInput>
    connectOrCreate?: MensagemSugestaoCreateOrConnectWithoutMensagemInput
    connect?: MensagemSugestaoWhereUniqueInput
  }

  export type MensagemSugestaoUncheckedCreateNestedOneWithoutMensagemInput = {
    create?: XOR<MensagemSugestaoCreateWithoutMensagemInput, MensagemSugestaoUncheckedCreateWithoutMensagemInput>
    connectOrCreate?: MensagemSugestaoCreateOrConnectWithoutMensagemInput
    connect?: MensagemSugestaoWhereUniqueInput
  }

  export type ConversaUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<ConversaCreateWithoutMensagensInput, ConversaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: ConversaCreateOrConnectWithoutMensagensInput
    upsert?: ConversaUpsertWithoutMensagensInput
    connect?: ConversaWhereUniqueInput
    update?: XOR<XOR<ConversaUpdateToOneWithWhereWithoutMensagensInput, ConversaUpdateWithoutMensagensInput>, ConversaUncheckedUpdateWithoutMensagensInput>
  }

  export type UsuarioUpdateOneWithoutMensagensNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensagensInput, UsuarioUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensagensInput
    upsert?: UsuarioUpsertWithoutMensagensInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensagensInput, UsuarioUpdateWithoutMensagensInput>, UsuarioUncheckedUpdateWithoutMensagensInput>
  }

  export type MensagemSugestaoUpdateOneWithoutMensagemNestedInput = {
    create?: XOR<MensagemSugestaoCreateWithoutMensagemInput, MensagemSugestaoUncheckedCreateWithoutMensagemInput>
    connectOrCreate?: MensagemSugestaoCreateOrConnectWithoutMensagemInput
    upsert?: MensagemSugestaoUpsertWithoutMensagemInput
    disconnect?: MensagemSugestaoWhereInput | boolean
    delete?: MensagemSugestaoWhereInput | boolean
    connect?: MensagemSugestaoWhereUniqueInput
    update?: XOR<XOR<MensagemSugestaoUpdateToOneWithWhereWithoutMensagemInput, MensagemSugestaoUpdateWithoutMensagemInput>, MensagemSugestaoUncheckedUpdateWithoutMensagemInput>
  }

  export type MensagemSugestaoUncheckedUpdateOneWithoutMensagemNestedInput = {
    create?: XOR<MensagemSugestaoCreateWithoutMensagemInput, MensagemSugestaoUncheckedCreateWithoutMensagemInput>
    connectOrCreate?: MensagemSugestaoCreateOrConnectWithoutMensagemInput
    upsert?: MensagemSugestaoUpsertWithoutMensagemInput
    disconnect?: MensagemSugestaoWhereInput | boolean
    delete?: MensagemSugestaoWhereInput | boolean
    connect?: MensagemSugestaoWhereUniqueInput
    update?: XOR<XOR<MensagemSugestaoUpdateToOneWithWhereWithoutMensagemInput, MensagemSugestaoUpdateWithoutMensagemInput>, MensagemSugestaoUncheckedUpdateWithoutMensagemInput>
  }

  export type MensagemCreateNestedOneWithoutSugestaoInput = {
    create?: XOR<MensagemCreateWithoutSugestaoInput, MensagemUncheckedCreateWithoutSugestaoInput>
    connectOrCreate?: MensagemCreateOrConnectWithoutSugestaoInput
    connect?: MensagemWhereUniqueInput
  }

  export type MensagemUpdateOneRequiredWithoutSugestaoNestedInput = {
    create?: XOR<MensagemCreateWithoutSugestaoInput, MensagemUncheckedCreateWithoutSugestaoInput>
    connectOrCreate?: MensagemCreateOrConnectWithoutSugestaoInput
    upsert?: MensagemUpsertWithoutSugestaoInput
    connect?: MensagemWhereUniqueInput
    update?: XOR<XOR<MensagemUpdateToOneWithWhereWithoutSugestaoInput, MensagemUpdateWithoutSugestaoInput>, MensagemUncheckedUpdateWithoutSugestaoInput>
  }

  export type UsuarioCreateNestedOneWithoutLogsInput = {
    create?: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ConversaCreateNestedOneWithoutLogsInput = {
    create?: XOR<ConversaCreateWithoutLogsInput, ConversaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ConversaCreateOrConnectWithoutLogsInput
    connect?: ConversaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogsInput
    upsert?: UsuarioUpsertWithoutLogsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLogsInput, UsuarioUpdateWithoutLogsInput>, UsuarioUncheckedUpdateWithoutLogsInput>
  }

  export type ConversaUpdateOneWithoutLogsNestedInput = {
    create?: XOR<ConversaCreateWithoutLogsInput, ConversaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ConversaCreateOrConnectWithoutLogsInput
    upsert?: ConversaUpsertWithoutLogsInput
    disconnect?: ConversaWhereInput | boolean
    delete?: ConversaWhereInput | boolean
    connect?: ConversaWhereUniqueInput
    update?: XOR<XOR<ConversaUpdateToOneWithWhereWithoutLogsInput, ConversaUpdateWithoutLogsInput>, ConversaUncheckedUpdateWithoutLogsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsuarioCreateWithoutClinicaInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    conversas?: ConversaCreateNestedManyWithoutResponsavelAtendimentoInput
    mensagens?: MensagemCreateNestedManyWithoutAutorInput
    logs?: LogAcaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutClinicaInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    conversas?: ConversaUncheckedCreateNestedManyWithoutResponsavelAtendimentoInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutAutorInput
    logs?: LogAcaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutClinicaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutClinicaInput, UsuarioUncheckedCreateWithoutClinicaInput>
  }

  export type UsuarioCreateManyClinicaInputEnvelope = {
    data: UsuarioCreateManyClinicaInput | UsuarioCreateManyClinicaInput[]
    skipDuplicates?: boolean
  }

  export type PacienteCreateWithoutClinicaInput = {
    id?: string
    nome: string
    telefone: string
    cpf?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    conversas?: ConversaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutClinicaInput = {
    id?: string
    nome: string
    telefone: string
    cpf?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    conversas?: ConversaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutClinicaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutClinicaInput, PacienteUncheckedCreateWithoutClinicaInput>
  }

  export type PacienteCreateManyClinicaInputEnvelope = {
    data: PacienteCreateManyClinicaInput | PacienteCreateManyClinicaInput[]
    skipDuplicates?: boolean
  }

  export type ConversaCreateWithoutClinicaInput = {
    id?: string
    status: string
    ultimoContatoEm?: Date | string | null
    paciente: PacienteCreateNestedOneWithoutConversasInput
    responsavelAtendimento?: UsuarioCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
    logs?: LogAcaoCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateWithoutClinicaInput = {
    id?: string
    pacienteId: string
    status: string
    ultimoContatoEm?: Date | string | null
    responsavelAtendimentoId?: string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
    logs?: LogAcaoUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaCreateOrConnectWithoutClinicaInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutClinicaInput, ConversaUncheckedCreateWithoutClinicaInput>
  }

  export type ConversaCreateManyClinicaInputEnvelope = {
    data: ConversaCreateManyClinicaInput | ConversaCreateManyClinicaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutClinicaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutClinicaInput, UsuarioUncheckedUpdateWithoutClinicaInput>
    create: XOR<UsuarioCreateWithoutClinicaInput, UsuarioUncheckedCreateWithoutClinicaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutClinicaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutClinicaInput, UsuarioUncheckedUpdateWithoutClinicaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutClinicaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutClinicaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    clinicaId?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    papel?: StringFilter<"Usuario"> | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type PacienteUpsertWithWhereUniqueWithoutClinicaInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutClinicaInput, PacienteUncheckedUpdateWithoutClinicaInput>
    create: XOR<PacienteCreateWithoutClinicaInput, PacienteUncheckedCreateWithoutClinicaInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutClinicaInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutClinicaInput, PacienteUncheckedUpdateWithoutClinicaInput>
  }

  export type PacienteUpdateManyWithWhereWithoutClinicaInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutClinicaInput>
  }

  export type PacienteScalarWhereInput = {
    AND?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    OR?: PacienteScalarWhereInput[]
    NOT?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    id?: StringFilter<"Paciente"> | string
    clinicaId?: StringFilter<"Paciente"> | string
    nome?: StringFilter<"Paciente"> | string
    telefone?: StringFilter<"Paciente"> | string
    cpf?: StringNullableFilter<"Paciente"> | string | null
    dataNascimento?: DateTimeNullableFilter<"Paciente"> | Date | string | null
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
  }

  export type ConversaUpsertWithWhereUniqueWithoutClinicaInput = {
    where: ConversaWhereUniqueInput
    update: XOR<ConversaUpdateWithoutClinicaInput, ConversaUncheckedUpdateWithoutClinicaInput>
    create: XOR<ConversaCreateWithoutClinicaInput, ConversaUncheckedCreateWithoutClinicaInput>
  }

  export type ConversaUpdateWithWhereUniqueWithoutClinicaInput = {
    where: ConversaWhereUniqueInput
    data: XOR<ConversaUpdateWithoutClinicaInput, ConversaUncheckedUpdateWithoutClinicaInput>
  }

  export type ConversaUpdateManyWithWhereWithoutClinicaInput = {
    where: ConversaScalarWhereInput
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyWithoutClinicaInput>
  }

  export type ConversaScalarWhereInput = {
    AND?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
    OR?: ConversaScalarWhereInput[]
    NOT?: ConversaScalarWhereInput | ConversaScalarWhereInput[]
    id?: StringFilter<"Conversa"> | string
    pacienteId?: StringFilter<"Conversa"> | string
    clinicaId?: StringFilter<"Conversa"> | string
    status?: StringFilter<"Conversa"> | string
    ultimoContatoEm?: DateTimeNullableFilter<"Conversa"> | Date | string | null
    responsavelAtendimentoId?: StringNullableFilter<"Conversa"> | string | null
  }

  export type ClinicaCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
    pacientes?: PacienteCreateNestedManyWithoutClinicaInput
    conversas?: ConversaCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutClinicaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaCreateOrConnectWithoutUsuariosInput = {
    where: ClinicaWhereUniqueInput
    create: XOR<ClinicaCreateWithoutUsuariosInput, ClinicaUncheckedCreateWithoutUsuariosInput>
  }

  export type ConversaCreateWithoutResponsavelAtendimentoInput = {
    id?: string
    status: string
    ultimoContatoEm?: Date | string | null
    paciente: PacienteCreateNestedOneWithoutConversasInput
    clinica: ClinicaCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
    logs?: LogAcaoCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateWithoutResponsavelAtendimentoInput = {
    id?: string
    pacienteId: string
    clinicaId: string
    status: string
    ultimoContatoEm?: Date | string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
    logs?: LogAcaoUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaCreateOrConnectWithoutResponsavelAtendimentoInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutResponsavelAtendimentoInput, ConversaUncheckedCreateWithoutResponsavelAtendimentoInput>
  }

  export type ConversaCreateManyResponsavelAtendimentoInputEnvelope = {
    data: ConversaCreateManyResponsavelAtendimentoInput | ConversaCreateManyResponsavelAtendimentoInput[]
    skipDuplicates?: boolean
  }

  export type MensagemCreateWithoutAutorInput = {
    id?: string
    autorTipo: string
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
    conversa: ConversaCreateNestedOneWithoutMensagensInput
    sugestao?: MensagemSugestaoCreateNestedOneWithoutMensagemInput
  }

  export type MensagemUncheckedCreateWithoutAutorInput = {
    id?: string
    conversaId: string
    autorTipo: string
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
    sugestao?: MensagemSugestaoUncheckedCreateNestedOneWithoutMensagemInput
  }

  export type MensagemCreateOrConnectWithoutAutorInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutAutorInput, MensagemUncheckedCreateWithoutAutorInput>
  }

  export type MensagemCreateManyAutorInputEnvelope = {
    data: MensagemCreateManyAutorInput | MensagemCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type LogAcaoCreateWithoutUsuarioInput = {
    id?: string
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    conversa?: ConversaCreateNestedOneWithoutLogsInput
  }

  export type LogAcaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    conversaId?: string | null
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogAcaoCreateOrConnectWithoutUsuarioInput = {
    where: LogAcaoWhereUniqueInput
    create: XOR<LogAcaoCreateWithoutUsuarioInput, LogAcaoUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAcaoCreateManyUsuarioInputEnvelope = {
    data: LogAcaoCreateManyUsuarioInput | LogAcaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ClinicaUpsertWithoutUsuariosInput = {
    update: XOR<ClinicaUpdateWithoutUsuariosInput, ClinicaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ClinicaCreateWithoutUsuariosInput, ClinicaUncheckedCreateWithoutUsuariosInput>
    where?: ClinicaWhereInput
  }

  export type ClinicaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: ClinicaWhereInput
    data: XOR<ClinicaUpdateWithoutUsuariosInput, ClinicaUncheckedUpdateWithoutUsuariosInput>
  }

  export type ClinicaUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: PacienteUpdateManyWithoutClinicaNestedInput
    conversas?: ConversaUpdateManyWithoutClinicaNestedInput
  }

  export type ClinicaUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: PacienteUncheckedUpdateManyWithoutClinicaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutClinicaNestedInput
  }

  export type ConversaUpsertWithWhereUniqueWithoutResponsavelAtendimentoInput = {
    where: ConversaWhereUniqueInput
    update: XOR<ConversaUpdateWithoutResponsavelAtendimentoInput, ConversaUncheckedUpdateWithoutResponsavelAtendimentoInput>
    create: XOR<ConversaCreateWithoutResponsavelAtendimentoInput, ConversaUncheckedCreateWithoutResponsavelAtendimentoInput>
  }

  export type ConversaUpdateWithWhereUniqueWithoutResponsavelAtendimentoInput = {
    where: ConversaWhereUniqueInput
    data: XOR<ConversaUpdateWithoutResponsavelAtendimentoInput, ConversaUncheckedUpdateWithoutResponsavelAtendimentoInput>
  }

  export type ConversaUpdateManyWithWhereWithoutResponsavelAtendimentoInput = {
    where: ConversaScalarWhereInput
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyWithoutResponsavelAtendimentoInput>
  }

  export type MensagemUpsertWithWhereUniqueWithoutAutorInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutAutorInput, MensagemUncheckedUpdateWithoutAutorInput>
    create: XOR<MensagemCreateWithoutAutorInput, MensagemUncheckedCreateWithoutAutorInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutAutorInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutAutorInput, MensagemUncheckedUpdateWithoutAutorInput>
  }

  export type MensagemUpdateManyWithWhereWithoutAutorInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutAutorInput>
  }

  export type MensagemScalarWhereInput = {
    AND?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    OR?: MensagemScalarWhereInput[]
    NOT?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    id?: StringFilter<"Mensagem"> | string
    conversaId?: StringFilter<"Mensagem"> | string
    autorTipo?: StringFilter<"Mensagem"> | string
    autorId?: StringNullableFilter<"Mensagem"> | string | null
    conteudo?: StringFilter<"Mensagem"> | string
    tipo?: StringFilter<"Mensagem"> | string
    whatsappMsgId?: StringNullableFilter<"Mensagem"> | string | null
    recebidaEm?: DateTimeNullableFilter<"Mensagem"> | Date | string | null
    criadaEm?: DateTimeFilter<"Mensagem"> | Date | string
  }

  export type LogAcaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LogAcaoWhereUniqueInput
    update: XOR<LogAcaoUpdateWithoutUsuarioInput, LogAcaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LogAcaoCreateWithoutUsuarioInput, LogAcaoUncheckedCreateWithoutUsuarioInput>
  }

  export type LogAcaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LogAcaoWhereUniqueInput
    data: XOR<LogAcaoUpdateWithoutUsuarioInput, LogAcaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type LogAcaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: LogAcaoScalarWhereInput
    data: XOR<LogAcaoUpdateManyMutationInput, LogAcaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LogAcaoScalarWhereInput = {
    AND?: LogAcaoScalarWhereInput | LogAcaoScalarWhereInput[]
    OR?: LogAcaoScalarWhereInput[]
    NOT?: LogAcaoScalarWhereInput | LogAcaoScalarWhereInput[]
    id?: StringFilter<"LogAcao"> | string
    usuarioId?: StringFilter<"LogAcao"> | string
    conversaId?: StringNullableFilter<"LogAcao"> | string | null
    tipoAcao?: StringFilter<"LogAcao"> | string
    dados?: JsonFilter<"LogAcao">
    createdAt?: DateTimeFilter<"LogAcao"> | Date | string
  }

  export type ClinicaCreateWithoutPacientesInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutClinicaInput
    conversas?: ConversaCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaUncheckedCreateWithoutPacientesInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutClinicaInput
    conversas?: ConversaUncheckedCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaCreateOrConnectWithoutPacientesInput = {
    where: ClinicaWhereUniqueInput
    create: XOR<ClinicaCreateWithoutPacientesInput, ClinicaUncheckedCreateWithoutPacientesInput>
  }

  export type ConversaCreateWithoutPacienteInput = {
    id?: string
    status: string
    ultimoContatoEm?: Date | string | null
    clinica: ClinicaCreateNestedOneWithoutConversasInput
    responsavelAtendimento?: UsuarioCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
    logs?: LogAcaoCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateWithoutPacienteInput = {
    id?: string
    clinicaId: string
    status: string
    ultimoContatoEm?: Date | string | null
    responsavelAtendimentoId?: string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
    logs?: LogAcaoUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaCreateOrConnectWithoutPacienteInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutPacienteInput, ConversaUncheckedCreateWithoutPacienteInput>
  }

  export type ConversaCreateManyPacienteInputEnvelope = {
    data: ConversaCreateManyPacienteInput | ConversaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ClinicaUpsertWithoutPacientesInput = {
    update: XOR<ClinicaUpdateWithoutPacientesInput, ClinicaUncheckedUpdateWithoutPacientesInput>
    create: XOR<ClinicaCreateWithoutPacientesInput, ClinicaUncheckedCreateWithoutPacientesInput>
    where?: ClinicaWhereInput
  }

  export type ClinicaUpdateToOneWithWhereWithoutPacientesInput = {
    where?: ClinicaWhereInput
    data: XOR<ClinicaUpdateWithoutPacientesInput, ClinicaUncheckedUpdateWithoutPacientesInput>
  }

  export type ClinicaUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutClinicaNestedInput
    conversas?: ConversaUpdateManyWithoutClinicaNestedInput
  }

  export type ClinicaUncheckedUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutClinicaNestedInput
    conversas?: ConversaUncheckedUpdateManyWithoutClinicaNestedInput
  }

  export type ConversaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ConversaWhereUniqueInput
    update: XOR<ConversaUpdateWithoutPacienteInput, ConversaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConversaCreateWithoutPacienteInput, ConversaUncheckedCreateWithoutPacienteInput>
  }

  export type ConversaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ConversaWhereUniqueInput
    data: XOR<ConversaUpdateWithoutPacienteInput, ConversaUncheckedUpdateWithoutPacienteInput>
  }

  export type ConversaUpdateManyWithWhereWithoutPacienteInput = {
    where: ConversaScalarWhereInput
    data: XOR<ConversaUpdateManyMutationInput, ConversaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type PacienteCreateWithoutConversasInput = {
    id?: string
    nome: string
    telefone: string
    cpf?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
    clinica: ClinicaCreateNestedOneWithoutPacientesInput
  }

  export type PacienteUncheckedCreateWithoutConversasInput = {
    id?: string
    clinicaId: string
    nome: string
    telefone: string
    cpf?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
  }

  export type PacienteCreateOrConnectWithoutConversasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutConversasInput, PacienteUncheckedCreateWithoutConversasInput>
  }

  export type ClinicaCreateWithoutConversasInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutClinicaInput
    pacientes?: PacienteCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaUncheckedCreateWithoutConversasInput = {
    id?: string
    nome: string
    cnpj: string
    telefone: string
    createdAt?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutClinicaInput
    pacientes?: PacienteUncheckedCreateNestedManyWithoutClinicaInput
  }

  export type ClinicaCreateOrConnectWithoutConversasInput = {
    where: ClinicaWhereUniqueInput
    create: XOR<ClinicaCreateWithoutConversasInput, ClinicaUncheckedCreateWithoutConversasInput>
  }

  export type UsuarioCreateWithoutConversasInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    clinica: ClinicaCreateNestedOneWithoutUsuariosInput
    mensagens?: MensagemCreateNestedManyWithoutAutorInput
    logs?: LogAcaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutConversasInput = {
    id?: string
    clinicaId: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutAutorInput
    logs?: LogAcaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutConversasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConversasInput, UsuarioUncheckedCreateWithoutConversasInput>
  }

  export type MensagemCreateWithoutConversaInput = {
    id?: string
    autorTipo: string
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
    autor?: UsuarioCreateNestedOneWithoutMensagensInput
    sugestao?: MensagemSugestaoCreateNestedOneWithoutMensagemInput
  }

  export type MensagemUncheckedCreateWithoutConversaInput = {
    id?: string
    autorTipo: string
    autorId?: string | null
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
    sugestao?: MensagemSugestaoUncheckedCreateNestedOneWithoutMensagemInput
  }

  export type MensagemCreateOrConnectWithoutConversaInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput>
  }

  export type MensagemCreateManyConversaInputEnvelope = {
    data: MensagemCreateManyConversaInput | MensagemCreateManyConversaInput[]
    skipDuplicates?: boolean
  }

  export type LogAcaoCreateWithoutConversaInput = {
    id?: string
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutLogsInput
  }

  export type LogAcaoUncheckedCreateWithoutConversaInput = {
    id?: string
    usuarioId: string
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LogAcaoCreateOrConnectWithoutConversaInput = {
    where: LogAcaoWhereUniqueInput
    create: XOR<LogAcaoCreateWithoutConversaInput, LogAcaoUncheckedCreateWithoutConversaInput>
  }

  export type LogAcaoCreateManyConversaInputEnvelope = {
    data: LogAcaoCreateManyConversaInput | LogAcaoCreateManyConversaInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithoutConversasInput = {
    update: XOR<PacienteUpdateWithoutConversasInput, PacienteUncheckedUpdateWithoutConversasInput>
    create: XOR<PacienteCreateWithoutConversasInput, PacienteUncheckedCreateWithoutConversasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutConversasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutConversasInput, PacienteUncheckedUpdateWithoutConversasInput>
  }

  export type PacienteUpdateWithoutConversasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinica?: ClinicaUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type PacienteUncheckedUpdateWithoutConversasInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClinicaUpsertWithoutConversasInput = {
    update: XOR<ClinicaUpdateWithoutConversasInput, ClinicaUncheckedUpdateWithoutConversasInput>
    create: XOR<ClinicaCreateWithoutConversasInput, ClinicaUncheckedCreateWithoutConversasInput>
    where?: ClinicaWhereInput
  }

  export type ClinicaUpdateToOneWithWhereWithoutConversasInput = {
    where?: ClinicaWhereInput
    data: XOR<ClinicaUpdateWithoutConversasInput, ClinicaUncheckedUpdateWithoutConversasInput>
  }

  export type ClinicaUpdateWithoutConversasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutClinicaNestedInput
    pacientes?: PacienteUpdateManyWithoutClinicaNestedInput
  }

  export type ClinicaUncheckedUpdateWithoutConversasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutClinicaNestedInput
    pacientes?: PacienteUncheckedUpdateManyWithoutClinicaNestedInput
  }

  export type UsuarioUpsertWithoutConversasInput = {
    update: XOR<UsuarioUpdateWithoutConversasInput, UsuarioUncheckedUpdateWithoutConversasInput>
    create: XOR<UsuarioCreateWithoutConversasInput, UsuarioUncheckedCreateWithoutConversasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutConversasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutConversasInput, UsuarioUncheckedUpdateWithoutConversasInput>
  }

  export type UsuarioUpdateWithoutConversasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinica?: ClinicaUpdateOneRequiredWithoutUsuariosNestedInput
    mensagens?: MensagemUpdateManyWithoutAutorNestedInput
    logs?: LogAcaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutConversasInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagens?: MensagemUncheckedUpdateManyWithoutAutorNestedInput
    logs?: LogAcaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MensagemUpsertWithWhereUniqueWithoutConversaInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutConversaInput, MensagemUncheckedUpdateWithoutConversaInput>
    create: XOR<MensagemCreateWithoutConversaInput, MensagemUncheckedCreateWithoutConversaInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutConversaInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutConversaInput, MensagemUncheckedUpdateWithoutConversaInput>
  }

  export type MensagemUpdateManyWithWhereWithoutConversaInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutConversaInput>
  }

  export type LogAcaoUpsertWithWhereUniqueWithoutConversaInput = {
    where: LogAcaoWhereUniqueInput
    update: XOR<LogAcaoUpdateWithoutConversaInput, LogAcaoUncheckedUpdateWithoutConversaInput>
    create: XOR<LogAcaoCreateWithoutConversaInput, LogAcaoUncheckedCreateWithoutConversaInput>
  }

  export type LogAcaoUpdateWithWhereUniqueWithoutConversaInput = {
    where: LogAcaoWhereUniqueInput
    data: XOR<LogAcaoUpdateWithoutConversaInput, LogAcaoUncheckedUpdateWithoutConversaInput>
  }

  export type LogAcaoUpdateManyWithWhereWithoutConversaInput = {
    where: LogAcaoScalarWhereInput
    data: XOR<LogAcaoUpdateManyMutationInput, LogAcaoUncheckedUpdateManyWithoutConversaInput>
  }

  export type ConversaCreateWithoutMensagensInput = {
    id?: string
    status: string
    ultimoContatoEm?: Date | string | null
    paciente: PacienteCreateNestedOneWithoutConversasInput
    clinica: ClinicaCreateNestedOneWithoutConversasInput
    responsavelAtendimento?: UsuarioCreateNestedOneWithoutConversasInput
    logs?: LogAcaoCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateWithoutMensagensInput = {
    id?: string
    pacienteId: string
    clinicaId: string
    status: string
    ultimoContatoEm?: Date | string | null
    responsavelAtendimentoId?: string | null
    logs?: LogAcaoUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaCreateOrConnectWithoutMensagensInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutMensagensInput, ConversaUncheckedCreateWithoutMensagensInput>
  }

  export type UsuarioCreateWithoutMensagensInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    clinica: ClinicaCreateNestedOneWithoutUsuariosInput
    conversas?: ConversaCreateNestedManyWithoutResponsavelAtendimentoInput
    logs?: LogAcaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMensagensInput = {
    id?: string
    clinicaId: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    conversas?: ConversaUncheckedCreateNestedManyWithoutResponsavelAtendimentoInput
    logs?: LogAcaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMensagensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensagensInput, UsuarioUncheckedCreateWithoutMensagensInput>
  }

  export type MensagemSugestaoCreateWithoutMensagemInput = {
    id?: string
    conteudoSugerido: string
    modeloIa: string
    geradoEm?: Date | string
  }

  export type MensagemSugestaoUncheckedCreateWithoutMensagemInput = {
    id?: string
    conteudoSugerido: string
    modeloIa: string
    geradoEm?: Date | string
  }

  export type MensagemSugestaoCreateOrConnectWithoutMensagemInput = {
    where: MensagemSugestaoWhereUniqueInput
    create: XOR<MensagemSugestaoCreateWithoutMensagemInput, MensagemSugestaoUncheckedCreateWithoutMensagemInput>
  }

  export type ConversaUpsertWithoutMensagensInput = {
    update: XOR<ConversaUpdateWithoutMensagensInput, ConversaUncheckedUpdateWithoutMensagensInput>
    create: XOR<ConversaCreateWithoutMensagensInput, ConversaUncheckedCreateWithoutMensagensInput>
    where?: ConversaWhereInput
  }

  export type ConversaUpdateToOneWithWhereWithoutMensagensInput = {
    where?: ConversaWhereInput
    data: XOR<ConversaUpdateWithoutMensagensInput, ConversaUncheckedUpdateWithoutMensagensInput>
  }

  export type ConversaUpdateWithoutMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paciente?: PacienteUpdateOneRequiredWithoutConversasNestedInput
    clinica?: ClinicaUpdateOneRequiredWithoutConversasNestedInput
    responsavelAtendimento?: UsuarioUpdateOneWithoutConversasNestedInput
    logs?: LogAcaoUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateWithoutMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavelAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogAcaoUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type UsuarioUpsertWithoutMensagensInput = {
    update: XOR<UsuarioUpdateWithoutMensagensInput, UsuarioUncheckedUpdateWithoutMensagensInput>
    create: XOR<UsuarioCreateWithoutMensagensInput, UsuarioUncheckedCreateWithoutMensagensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensagensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensagensInput, UsuarioUncheckedUpdateWithoutMensagensInput>
  }

  export type UsuarioUpdateWithoutMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinica?: ClinicaUpdateOneRequiredWithoutUsuariosNestedInput
    conversas?: ConversaUpdateManyWithoutResponsavelAtendimentoNestedInput
    logs?: LogAcaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversas?: ConversaUncheckedUpdateManyWithoutResponsavelAtendimentoNestedInput
    logs?: LogAcaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MensagemSugestaoUpsertWithoutMensagemInput = {
    update: XOR<MensagemSugestaoUpdateWithoutMensagemInput, MensagemSugestaoUncheckedUpdateWithoutMensagemInput>
    create: XOR<MensagemSugestaoCreateWithoutMensagemInput, MensagemSugestaoUncheckedCreateWithoutMensagemInput>
    where?: MensagemSugestaoWhereInput
  }

  export type MensagemSugestaoUpdateToOneWithWhereWithoutMensagemInput = {
    where?: MensagemSugestaoWhereInput
    data: XOR<MensagemSugestaoUpdateWithoutMensagemInput, MensagemSugestaoUncheckedUpdateWithoutMensagemInput>
  }

  export type MensagemSugestaoUpdateWithoutMensagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoSugerido?: StringFieldUpdateOperationsInput | string
    modeloIa?: StringFieldUpdateOperationsInput | string
    geradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemSugestaoUncheckedUpdateWithoutMensagemInput = {
    id?: StringFieldUpdateOperationsInput | string
    conteudoSugerido?: StringFieldUpdateOperationsInput | string
    modeloIa?: StringFieldUpdateOperationsInput | string
    geradoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemCreateWithoutSugestaoInput = {
    id?: string
    autorTipo: string
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
    conversa: ConversaCreateNestedOneWithoutMensagensInput
    autor?: UsuarioCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateWithoutSugestaoInput = {
    id?: string
    conversaId: string
    autorTipo: string
    autorId?: string | null
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
  }

  export type MensagemCreateOrConnectWithoutSugestaoInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutSugestaoInput, MensagemUncheckedCreateWithoutSugestaoInput>
  }

  export type MensagemUpsertWithoutSugestaoInput = {
    update: XOR<MensagemUpdateWithoutSugestaoInput, MensagemUncheckedUpdateWithoutSugestaoInput>
    create: XOR<MensagemCreateWithoutSugestaoInput, MensagemUncheckedCreateWithoutSugestaoInput>
    where?: MensagemWhereInput
  }

  export type MensagemUpdateToOneWithWhereWithoutSugestaoInput = {
    where?: MensagemWhereInput
    data: XOR<MensagemUpdateWithoutSugestaoInput, MensagemUncheckedUpdateWithoutSugestaoInput>
  }

  export type MensagemUpdateWithoutSugestaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    conversa?: ConversaUpdateOneRequiredWithoutMensagensNestedInput
    autor?: UsuarioUpdateOneWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateWithoutSugestaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversaId?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    autorId?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutLogsInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    clinica: ClinicaCreateNestedOneWithoutUsuariosInput
    conversas?: ConversaCreateNestedManyWithoutResponsavelAtendimentoInput
    mensagens?: MensagemCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateWithoutLogsInput = {
    id?: string
    clinicaId: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    conversas?: ConversaUncheckedCreateNestedManyWithoutResponsavelAtendimentoInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutLogsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
  }

  export type ConversaCreateWithoutLogsInput = {
    id?: string
    status: string
    ultimoContatoEm?: Date | string | null
    paciente: PacienteCreateNestedOneWithoutConversasInput
    clinica: ClinicaCreateNestedOneWithoutConversasInput
    responsavelAtendimento?: UsuarioCreateNestedOneWithoutConversasInput
    mensagens?: MensagemCreateNestedManyWithoutConversaInput
  }

  export type ConversaUncheckedCreateWithoutLogsInput = {
    id?: string
    pacienteId: string
    clinicaId: string
    status: string
    ultimoContatoEm?: Date | string | null
    responsavelAtendimentoId?: string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutConversaInput
  }

  export type ConversaCreateOrConnectWithoutLogsInput = {
    where: ConversaWhereUniqueInput
    create: XOR<ConversaCreateWithoutLogsInput, ConversaUncheckedCreateWithoutLogsInput>
  }

  export type UsuarioUpsertWithoutLogsInput = {
    update: XOR<UsuarioUpdateWithoutLogsInput, UsuarioUncheckedUpdateWithoutLogsInput>
    create: XOR<UsuarioCreateWithoutLogsInput, UsuarioUncheckedCreateWithoutLogsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLogsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLogsInput, UsuarioUncheckedUpdateWithoutLogsInput>
  }

  export type UsuarioUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clinica?: ClinicaUpdateOneRequiredWithoutUsuariosNestedInput
    conversas?: ConversaUpdateManyWithoutResponsavelAtendimentoNestedInput
    mensagens?: MensagemUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversas?: ConversaUncheckedUpdateManyWithoutResponsavelAtendimentoNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type ConversaUpsertWithoutLogsInput = {
    update: XOR<ConversaUpdateWithoutLogsInput, ConversaUncheckedUpdateWithoutLogsInput>
    create: XOR<ConversaCreateWithoutLogsInput, ConversaUncheckedCreateWithoutLogsInput>
    where?: ConversaWhereInput
  }

  export type ConversaUpdateToOneWithWhereWithoutLogsInput = {
    where?: ConversaWhereInput
    data: XOR<ConversaUpdateWithoutLogsInput, ConversaUncheckedUpdateWithoutLogsInput>
  }

  export type ConversaUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paciente?: PacienteUpdateOneRequiredWithoutConversasNestedInput
    clinica?: ClinicaUpdateOneRequiredWithoutConversasNestedInput
    responsavelAtendimento?: UsuarioUpdateOneWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavelAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type UsuarioCreateManyClinicaInput = {
    id?: string
    nome: string
    email: string
    senhaHash: string
    papel: string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
  }

  export type PacienteCreateManyClinicaInput = {
    id?: string
    nome: string
    telefone: string
    cpf?: string | null
    dataNascimento?: Date | string | null
    createdAt?: Date | string
  }

  export type ConversaCreateManyClinicaInput = {
    id?: string
    pacienteId: string
    status: string
    ultimoContatoEm?: Date | string | null
    responsavelAtendimentoId?: string | null
  }

  export type UsuarioUpdateWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversas?: ConversaUpdateManyWithoutResponsavelAtendimentoNestedInput
    mensagens?: MensagemUpdateManyWithoutAutorNestedInput
    logs?: LogAcaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversas?: ConversaUncheckedUpdateManyWithoutResponsavelAtendimentoNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutAutorNestedInput
    logs?: LogAcaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    papel?: StringFieldUpdateOperationsInput | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUpdateWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversas?: ConversaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversas?: ConversaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversaUpdateWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paciente?: PacienteUpdateOneRequiredWithoutConversasNestedInput
    responsavelAtendimento?: UsuarioUpdateOneWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
    logs?: LogAcaoUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavelAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
    logs?: LogAcaoUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateManyWithoutClinicaInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavelAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConversaCreateManyResponsavelAtendimentoInput = {
    id?: string
    pacienteId: string
    clinicaId: string
    status: string
    ultimoContatoEm?: Date | string | null
  }

  export type MensagemCreateManyAutorInput = {
    id?: string
    conversaId: string
    autorTipo: string
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
  }

  export type LogAcaoCreateManyUsuarioInput = {
    id?: string
    conversaId?: string | null
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ConversaUpdateWithoutResponsavelAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paciente?: PacienteUpdateOneRequiredWithoutConversasNestedInput
    clinica?: ClinicaUpdateOneRequiredWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
    logs?: LogAcaoUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateWithoutResponsavelAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
    logs?: LogAcaoUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateManyWithoutResponsavelAtendimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MensagemUpdateWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    conversa?: ConversaUpdateOneRequiredWithoutMensagensNestedInput
    sugestao?: MensagemSugestaoUpdateOneWithoutMensagemNestedInput
  }

  export type MensagemUncheckedUpdateWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversaId?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sugestao?: MensagemSugestaoUncheckedUpdateOneWithoutMensagemNestedInput
  }

  export type MensagemUncheckedUpdateManyWithoutAutorInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversaId?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcaoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversa?: ConversaUpdateOneWithoutLogsNestedInput
  }

  export type LogAcaoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversaId?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversaId?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversaCreateManyPacienteInput = {
    id?: string
    clinicaId: string
    status: string
    ultimoContatoEm?: Date | string | null
    responsavelAtendimentoId?: string | null
  }

  export type ConversaUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clinica?: ClinicaUpdateOneRequiredWithoutConversasNestedInput
    responsavelAtendimento?: UsuarioUpdateOneWithoutConversasNestedInput
    mensagens?: MensagemUpdateManyWithoutConversaNestedInput
    logs?: LogAcaoUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavelAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutConversaNestedInput
    logs?: LogAcaoUncheckedUpdateManyWithoutConversaNestedInput
  }

  export type ConversaUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    clinicaId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ultimoContatoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavelAtendimentoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemCreateManyConversaInput = {
    id?: string
    autorTipo: string
    autorId?: string | null
    conteudo: string
    tipo: string
    whatsappMsgId?: string | null
    recebidaEm?: Date | string | null
    criadaEm?: Date | string
  }

  export type LogAcaoCreateManyConversaInput = {
    id?: string
    usuarioId: string
    tipoAcao: string
    dados: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MensagemUpdateWithoutConversaInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneWithoutMensagensNestedInput
    sugestao?: MensagemSugestaoUpdateOneWithoutMensagemNestedInput
  }

  export type MensagemUncheckedUpdateWithoutConversaInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    autorId?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sugestao?: MensagemSugestaoUncheckedUpdateOneWithoutMensagemNestedInput
  }

  export type MensagemUncheckedUpdateManyWithoutConversaInput = {
    id?: StringFieldUpdateOperationsInput | string
    autorTipo?: StringFieldUpdateOperationsInput | string
    autorId?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    whatsappMsgId?: NullableStringFieldUpdateOperationsInput | string | null
    recebidaEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadaEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcaoUpdateWithoutConversaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogAcaoUncheckedUpdateWithoutConversaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAcaoUncheckedUpdateManyWithoutConversaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tipoAcao?: StringFieldUpdateOperationsInput | string
    dados?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClinicaCountOutputTypeDefaultArgs instead
     */
    export type ClinicaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClinicaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PacienteCountOutputTypeDefaultArgs instead
     */
    export type PacienteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PacienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversaCountOutputTypeDefaultArgs instead
     */
    export type ConversaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClinicaDefaultArgs instead
     */
    export type ClinicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClinicaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PacienteDefaultArgs instead
     */
    export type PacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PacienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversaDefaultArgs instead
     */
    export type ConversaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MensagemDefaultArgs instead
     */
    export type MensagemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MensagemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MensagemSugestaoDefaultArgs instead
     */
    export type MensagemSugestaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MensagemSugestaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogAcaoDefaultArgs instead
     */
    export type LogAcaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogAcaoDefaultArgs<ExtArgs>

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