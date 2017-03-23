var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");

var CountdownForm = require("../../components/CountdownForm.jsx");

describe("CountdownForm", () => {
	it("should exist", () => {
		expect(CountdownForm).toExist();
	});

	it("should call onSetCountdown if valid seconds entered", () => {
		var spy = expect.createSpy();
		var countdownFrom = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var el = ReactDOM.findDOMNode(countdownFrom);

		countdownFrom.refs.seconds.value = "109";
		TestUtils.Simulate.submit(el.querySelector("form"));

		expect(spy).toHaveBeenCalledWith(109);

	});

	it("should not call onSetCountdown if invalid seconds entered", () => {
		var spy = expect.createSpy();
		var countdownFrom = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var el = ReactDOM.findDOMNode(countdownFrom);

		countdownFrom.refs.seconds.value = "abc";
		TestUtils.Simulate.submit(el.querySelector("form"));

		expect(spy).toNotHaveBeenCalled();

	});
});

