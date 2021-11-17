## With the basic understanding of react by your side, let’s dive deeper into the world of React. Let’s read below topics in detail:

1: JSX
Ans: JSX stands for Javascript extended, JSX is an extension in Javascript, It's also know as Synthetic Sugar, JSX help in writing markup language and syntex in form of
HTML. Javascript Does not intrepreat directly JSX code because browser will not understand code written in JSX. With the help of
Babel and webpack it's transpile into normal Javascript code than browser understand it.
State
Ans: In the world of React State is heart of any App, State is a plain object which store information of App and it's properties.State is a single source of truth, means it should not update directly. Instead we can use `setState` function to update the state.

Props
Ans: `props` is known as data of any component, a props holds some information about it's component so that we can render it.`Props` can hold user click event, anytype of ID, and component , function itself.

Class Components
Ans: A Class based component is knows as Stateful component. Every react app should have atleast one Class based component. Class components extends `React.extends` function from React library. we can create Class based component using `Class` reserve keyword in Javascript. It has it's own lifecycle method such as `componentShouldUpdate`, `ComponentDidMount`, `ComponentWillUpdate`.It's make task easy in react maintain resuable code and so.

Functional Components
Ans: Functional based components in React knows as \*Dumb, Stateless Component. Since functional based components does not have it's own lifecycle method.We use to create functional component when we have to render some information and only share props to the children component.We can create
functional component using following syntext:

`const App = function(){}` // Normal functional declaration
`const App = () => {}` // Using Arrow function

Virtual DOM
Ans: Virtual DOM usages Real presentation of DOM (Document Object Modal) in it's keep copy of RealDOM in memory,whenever a compoenent get update
it's does not load entire DOM insted it's refresh only part of DOM which get updated.It's fast and update browser content smooth than Real DOM.
