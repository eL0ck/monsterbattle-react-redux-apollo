import GameBoard from './components/GameBoard'

/* Use this to compare state providers
 * Also requires changes to src/index.js
 * */

//import withLocalStateLogic from './containers/withLocalStateLogic'
//import withReduxLogic from './containers/withReduxLogic'
import withApolloLogic from './containers/withApolloLogic'

// const App = withLocalStateLogic(GameBoard)
// const App = withReduxLogic(GameBoard)
const App = withApolloLogic(GameBoard)

export default App
