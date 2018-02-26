const Main = React.createClass ({
    render: function () {
        return (
            <div>
                <input type="text" id="input1"/>
                <button onClick={alert1}>Click</button>
            </div>
        )
    }
});
let value1 = document.getElementById("input1");
function alert1() {
    alert({value1});
};

ReactDOM.render(<Main />, document.getElementById('app'));