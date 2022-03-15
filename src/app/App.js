import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { List } from '../list/index.js'
import { Play } from '../play/index.js'
import { Show } from '../show/index.js'
import { Redirect } from './Redirect.js'
import { useReduxStore } from './useReduxStore.js'

export function App() {
  const store = useReduxStore()

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/schedule/list" element={<List />} />
          <Route exact path="/schedule/show/:id" element={<Show />} />
          <Route exact path="/schedule/play/:id" element={<Play />} />
          <Route path="*" element={<Redirect to="/schedule/show/0" />} />
        </Routes>
      </Router>
    </Provider>
  )
}
