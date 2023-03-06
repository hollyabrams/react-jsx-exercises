const App = () => (
    <div>
        <Person 
            name='Peter'
            age={42}
            hobbies={['drinking beer', 'picking on Meg', 'singing']}
        />
        <Person 
            name='Stewie'
            age={2}
            hobbies={['sarcasm', 'science', 'Brian']}
        />
        <Person 
            name='Quagmire'
            age={40}
            hobbies={['drinking beer', 'dating', 'shananigans']}
        />
    </div>
);



ReactDOM.render(<App />, document.getElementById('root'))