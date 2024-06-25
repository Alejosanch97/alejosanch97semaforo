import React, { useState, useEffect } from "react";

const Semaforo = () => {
	const [red, setRed] = useState(true);
	const [ambar, setAmbar] = useState(false);
	const [green, setGreen] = useState(false);
	const [purple, setPurple] = useState(false);
	let count = 0;
	let time = 1000;

	function cambiarRed() {
		setRed(true);
		setAmbar(false);
		setGreen(false);
	}
	function cambiarAmbar() {
		setRed(false);
		setAmbar(true);
		setGreen(false);
	}
	function cambiarGreen() {
		setRed(false);
		setAmbar(false);
		setGreen(true);
	}

    // semaforo con 4 luces
    
	function cambiarPurple() {
		setRed(false);
		setAmbar(false);
		setGreen(false);
		setPurple(true);
	}

    function cambiarAutoPurple() {
		while (count < 1000) {
			setTimeout(() => {
				cambiarRed();
			}, time);
			time += 2000;
			setTimeout(() => {
				cambiarAmbar();
			}, time);
			time += 1000;
			setTimeout(() => {
				cambiarGreen();
			}, time);
			time += 1000;
			count++;
            setTimeout(() => {
				cambiarPurple();
			}, time);
			time += 500;
			count++;
		}
	}

	function cambiarAutomaticamente() {
		while (count < 1000) {
			setTimeout(() => {
				cambiarRed();
			}, time);
			time += 800;
			setTimeout(() => {
				cambiarAmbar();
			}, time);
			time += 1000;
			setTimeout(() => {
				cambiarGreen();
			}, time);
			time += 2000;
			count++;
		}
	}

	return (
		<div className="container-fluid p-0">
			<div
				className="btn-group position-absolute top-0 start-40 mt-5"
				role="group"
				aria-label="Basic example">
				<button
					type="button"
					className="btn btn-success"
					onClick={cambiarAutomaticamente}>
					Auto
				</button>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => setPurple(!purple)}>
					Añadir Luz
				</button>
			</div>
			<div className="soporteSemaforo bg-black"></div>
			<div
				className={`${
					purple ? "semaforoPurple" : "semaforo"
				} bg-black rounded d-flex flex-column`}>
				<div
					className={`${
						red ? "luzEncendida" : ""
					} luces bg-danger m-auto`}
					onClick={cambiarRed}></div>
				<div
					className={`${
						ambar ? "luzEncendida" : ""
					} luces bg-warning m-auto`}
					onClick={cambiarAmbar}></div>
				<div
					className={`${
						green ? "luzEncendida" : ""
					} luces bg-success m-auto`}
					onClick={cambiarGreen}></div>
				<div
					className={`${
						purple ? "luzEncendida luces m-auto luzPurple" : ""
					}`}
					onClick={cambiarPurple}></div>
			</div>
		</div>
	);
};
export default Semaforo;