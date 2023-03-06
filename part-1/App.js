const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name='Henry' />
    </div>
);



ReactDOM.render(<App />, document.getElementById('root'))