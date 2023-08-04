import 'reflect-metadata';

export function Field(type: any, options: any = {}) {
    return (target: Object, propertyKey: string | symbol) => {
      let metadata = Reflect.getMetadata('field', target);
      if (metadata) {
        metadata[propertyKey] = {type, options};
      } else {
        metadata = { [propertyKey]: { type, options } };
      }
      Reflect.defineMetadata('field', metadata, target);
    };
  }
  
 