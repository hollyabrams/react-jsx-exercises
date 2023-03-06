const App = () => (
    <div>
        <Tweet 
            name='Henry'
            username='HenryMonkey'
            date={new Date().toDateString()}
            message='Hello world! This is Henry!'
        />
        <Tweet 
            username='DapperZhi'
            name='Zhi'
            date={new Date().toDateString()}
            message='Hello everyone.'
        />
        <Tweet 
            username='ObberBear'
            name='Oliver'
            date={new Date().toDateString()}
            message='Hey there! Who wants to go walkies?!'
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
