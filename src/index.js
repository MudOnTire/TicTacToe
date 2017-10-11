import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Square
function Square(props) {
	return (
		<div className="square" onClick={props.onClick}>
			{props.value}
		</div>
	);
}

//Board
class Board extends React.Component {
	renderSquare(i) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
		);
	}

	render() {
		return (
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

//Game
class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			currentStep: null, //等于null表示没有在查看历史记录
			xIsNext: true
		};
	}

	handleClick(i) {
		const history = this.state.history;
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		const currentStep = this.state.currentStep;

		//点击时在查看历史记录
		if(currentStep !== null){
			this.setState({
				history: history.slice(),
				currentStep: null
			});	
		}else{
			//点击时不在查看历史记录
			if (calculateWinner(squares) || squares[i]) {
				console.log("return");
				return;
			}
			squares[i] = this.state.xIsNext ? "X" : "O";
			history.push({ squares: squares });
			this.setState({
				history: history.slice(),
				xIsNext: !this.state.xIsNext,
				currentStep: null
			});
		}
	}

	handleStepOffset(offset) {
		var that = this;
		const history = this.state.history;
		let currentStep = this.state.currentStep;
		if (currentStep === null) {
			currentStep = history.length - 1;
		}
		let offsetStep = currentStep + offset;
		if (offsetStep < 0 || offsetStep > history.length - 1) {
			return; //到达第一步或者最后一步，直接返回
		}
		this.setState({
			currentStep: offsetStep
		});
		setTimeout(function(){
			console.log(that.state);
		}, 100);
	}

	render() {
		const history = this.state.history;
		const currentStep = this.state.currentStep;
		const current = currentStep !== null
			? history[currentStep]
			: history[history.length - 1];
		const winner = calculateWinner(current.squares);

		let status;
		if (winner) {
			status = "Winner: " + winner;
		} else {
			status = "Next player: " + (this.state.xIsNext ? "X" : "O");
		}

		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares={current.squares}
						onClick={i => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div className="status">{status}</div>
					<div>
						<a
							className="navigator"
							onClick={() => this.handleStepOffset(-1)}
						>
							prev
						</a>
						<a
							className="navigator"
							onClick={() => this.handleStepOffset(1)}
						>
							next
						</a>
					</div>
				</div>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
