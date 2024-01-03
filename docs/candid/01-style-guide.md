---
title: Candid Style Guide
description: A style guide for writing Candid interfaces for Internet Computer canisters.
---

## Candid

Candid is a serialization format for the Internet Computer. It is used to define the interface of canisters, and to encode and decode messages that are sent to and from canisters.

## Motivation

Canisters and their client interactions are written in various languages. However, Candid, which is language-agnostic, describes these interfaces. Therefore, Candid interfaces should maintain a consistent pattern, unbiased by the language used in the canister interfaces they describe.

## Naming

### Types

Use `PascalCase` (upper camel case) for type definitions.

This has no additional benefit aside from consistency.

:::danger[**Don't**]

**Don't** use inconsisent or alternative casings for type definitions.

```protobuf
type USER = record {};

type post = record {};
```

:::

:::tip[**Do**]

**Do** use `PascalCase` casing for type definitions consistently.

```protobuf
type User = record {};

type Post = record {};
```

:::

### Record field names

Use `lower_snake_case` for field definitions.

This has no additional benefit aside from consistency.

:::danger[**Don't**]

**Don't** use inconsisent or alternative casings for field definitions.

```protobuf
type User = record {
  Id : nat64;
  displayName : text;
};

type Post = record {
  ID : nat64;
  USER_ID : nat64;
  Content : text;
};
```

:::

:::tip[**Do**]

**Do** use `lower_snake_case` casing for field definitions consistently.

```protobuf
type User = record {
  user_id : nat64;
  name : text;
};

type Post = record {
  id : nat64;
  user_id : nat64;
  content : text;
};
```

:::

### Variants

Use `lower_snake_case` for variant definitions.

This has no additional benefit aside from consistency.

:::danger[**Don't**]

**Don't** use inconsisent or alternative casings for variant definitions.

```protobuf
type UserRole = variant {
  Admin;
  MODERATOR;
  user;
};
```

:::

:::tip[**Do**]

**Do** use `lower_snake_case` casing for variant definitions consistently.

```protobuf
type UserRole = variant {
  admin;
  moderator;
  user;
  super_user;
};
```

:::

### Service methods

Use `lower_snake_case` for service method names.

This has no additional benefit aside from consistency.

:::danger[**Don't**]

**Don't** use inconsisent or alternative casings for service method definitions.

```protobuf
service : {
  CREATE_USER : (UserRequest) -> (UserResponse);
  UpdateUser : (UserRequest) -> (UserResponse);
};
```

:::

:::tip[**Do**]

**Do** use `lower_snake_case` casing for service method definitions consistently.

```protobuf
service : {
  create_user : (UserRequest) -> (UserResponse);
  update_user : (UserRequest) -> (UserResponse);
};
```

:::

### Tuple field types

Use `type` aliases for tuple field types.

This can help greatly with readability, by allowing the alias to act as a label for the field.

:::danger[**Don't**]

**Don't** use built-in Candid types for tuples.

```protobuf
type UserPost = record {
  nat64;
  nat64;
};
```

:::

:::tip[**Do**]

**Do** use type aliases in tuples.

```protobuf
type UserId = nat64;
type PostId = nat64;

type UserPost = record {
  UserId;
  PostId;
};
```

:::

### Type aliases

Use `type` aliases to define common types that are used in multiple places.

This can help with readability and make it easier to change the underlying type in the future.

:::danger[**Don't**]

**Don't** define common types using built-in Candid types.

```protobuf
type User = record {
  id : nat64;
  name : text;
};

type Post = record {
  id : nat64;
  user_id : nat64;
  content : text;
};
```

:::

:::tip[**Do**]

**Do** define common types with type aliases.

```protobuf
type UserId = nat64;
type PostId = nat64;

type User = record {
  id : UserId;
  name : text;
};

type Post = record {
  id : PostId;
  user_id : UserId;
  content : text;
};
```

:::

### Request and response types

Use separate request and response types for each service method. Name them `{MethodName}Request` and `{MethodName}Reponse` respectively.

This allows for changes to a single service method without affecting other methods. It may be tempting to reuse common request or response types for multiple methods, but over time this can lead to a lot of messy coupling between methods. Unique request and response types also allow readers to quickly understand the purpose of each type, without needing to explicitly check the service method that it is used for.

:::danger[**Don't**]

**Don't** share common request and response types between multiple service methods.

```protobuf
type UserRequest = record {
  name : text;
};

type UserResponse = record {
  id : nat64;
  name : text;
};

service : {
  create_user : (UserRequest) -> (UserResponse);
  update_user : (UserRequest) -> (UserResponse);
};
```

:::

:::tip[**Do**]

**Do** define unique request and response types for each service method.

```protobuf
type CreateUserRequest = record {
  name : text;
};

type CreateUserResponse = record {
  id : nat64;
  name : text;
};

type UpdateUserRequest = record {
  name : text;
};

type UpdateUserResponse = record {
  id : nat64;
  name : text;
};

service : {
  create_user : (CreateUserRequest) -> (CreateUserResponse);
  update_user : (UpdateUserRequest) -> (UpdateUserResponse);
};
```

:::

## References and inspiration

- [Candid Spec](https://github.com/dfinity/candid/blob/master/spec/Candid.md)
- [Candid Reference](https://internetcomputer.org/docs/current/references/candid-ref)
- [Protobuf Style Guide](https://protobuf.dev/programming-guides/style/)
- [Google gRPC API design guide](https://cloud.google.com/apis/design)
- [Kreya gRPC - Best Practices](https://kreya.app/blog/grpc-best-practices/)

## Changelog

- 2023-12-30: Added naming conventions for Candid primitives
