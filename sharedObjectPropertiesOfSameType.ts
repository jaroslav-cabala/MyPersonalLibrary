type AllSharedProperties<T1 extends object, T2 extends object> = {
  [Property in keyof T1 & keyof T2]: T1[Property] extends T2[Property]
    ? T2[Property] extends T1[Property]
      ? T1[Property] | T2[Property]
      : never
    : never;
};

export type SharedPropertiesWithSameType<T1 extends object, T2 extends object> = {
  [Property in keyof AllSharedProperties<T1, T2> as AllSharedProperties<T1, T2>[Property] extends never
    ? never
    : Property]: AllSharedProperties<T1, T2>[Property];
};
