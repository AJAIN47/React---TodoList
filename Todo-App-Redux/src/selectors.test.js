import { getCompletedTodos } from "./selectors.js";

function testSelectors() {
    const fakeState = {
        todos: {
            value: [
                { id: 1, text: "Buy milk", isCompleted: false },
                { id: 2, text: "Buy eggs", isCompleted: true },
                { id: 3, text: "Buy bread", isCompleted: false }
            ]
        }
    };

const result = getCompletedTodos(fakeState);
if (result.length === 1 && result[0].id === 2) {
    console.log("getCompletedTodos returned the correct number of todos", result);
} else {
    throw new Error("getCompletedTodos did not return the correct number of todos");
}

}
testSelectors();