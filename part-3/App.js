const App = () => (
    <div>
        <h1>Part Three</h1>
        <Person name="Zach Frame" age="30" hobbies={["Gaming", "Reading", "Movies"]} />
        <Person name="Tim Snyder" age="24" hobbies={["Overwatch", "Reading", "Eggs"]} />
        <Person name="Alex Frame" age="37" hobbies={["Practicing Legal Nonsense", "The arcane", "Dogs"]} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
