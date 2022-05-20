const App = () => (
    <div>
        <h1>Part Two</h1>
        <Tweet username="Zachattack" name="Zach Frame" tweet="You wouldn't believe it guys, we're finally in React land!" />
        <Tweet username="Teej" name="Tim Snyder" tweet="You better hurry, you're running out of time..." />
        <Tweet username="Zachattack" name="Zach Frame" tweet="I know dude, that's why I'm burning the midnight oil >.>" />

    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
