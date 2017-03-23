var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var Controls = require("../../components/Controls.jsx");

describe("Controls", () => {
	it("should exist", () => {
		expect(Controls).toExist();
	});

	describe("render", () => {
		it("should render pause when started", () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
			var el = ReactDOM.findDOMNode(controls);
			var pauseButton = [...el.getElementsByTagName("button")].filter( node => { return node.textContent === "Pause" });
			
			expect(pauseButton.length).toBe(1);
			
		});

		it("should render start when paused", () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
			var el = ReactDOM.findDOMNode(controls);
			var startButton = [...el.getElementsByTagName("button")].filter( node => { return node.textContent === "Start" });
			
			expect(startButton.length).toBe(1);
			
		});
	});

});