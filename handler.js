import MyClass from './src/myclass';

export const myfunction = async (event, context, callback) => {
  const response = await new MyClass();

  callback(null, response);
};

export default myfunction;
