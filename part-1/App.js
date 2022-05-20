const App = () => (
    <div>
        <h1>Part One</h1>
        <FirstComponent />
        <NamedComponent name="Zachary Frame" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
