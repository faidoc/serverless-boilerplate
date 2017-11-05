import { log } from './utils/helpers';
import { successResponse } from './utils/lambda-response';

class MyClass {
  constructor() {
    log('Inside constructor');
    return successResponse({
      message: 'Hi There.',
    });
  }
}

module.exports = MyClass;
