import { createTest, destroyVM } from '../util';
import HelloWorld from 'packages/hello-world';

describe('HelloWorld', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(HelloWorld, true);
    expect(vm.$el).to.exist;
  });
});

