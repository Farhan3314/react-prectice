import AppRedux from './redux/appRedux'
import AppForm from './components/ZobAndFormHandler/AppForm'
import AppMain from './StateApiIntegrationZod/AppMain'
import LocalStorageApp from './LocalStorage/LocalStorageApp'

const App = () => {
  return (
    <div>
      {/* <AppMain />
      <AppForm />
      <AppRedux /> */}
      <LocalStorageApp />
    </div>
  )
}

export default App
