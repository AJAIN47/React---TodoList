import { loadingSliceDef } from "./loadingSlice.js";

function testLoadingSlice() {
  const fakeState = {
    value: { completed: true}
  };
loadingSliceDef.reducers.loadingStarted(fakeState);
if (fakeState.value.completed) {
  throw new Error('loadingStarted did not set completed to false');
} else {
  console.log('loadingStarted completed successfully');
}
}
testLoadingSlice();
