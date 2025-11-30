
// Conversion utilities
function toCelsius(value, fromUnit) {
	const v = Number(value)
	if (isNaN(v)) return NaN
	switch (fromUnit) {
		case 'C': return v
		case 'F': return (v - 32) * 5 / 9
		case 'K': return v - 273.15
		default: return NaN
	}
}

function fromCelsius(celsius, toUnit) {
	switch (toUnit) {
		case 'C': return celsius
		case 'F': return (celsius * 9 / 5) + 32
		case 'K': return celsius + 273.15
		default: return NaN
	}
}

function convert() {
	const valueEl = document.getElementById('value')
	const fromEl = document.getElementById('fromUnit')
	const toEl = document.getElementById('toUnit')
	const answer = document.getElementById('answer')

	const raw = valueEl.value
	const from = fromEl.value
	const to = toEl.value

	const c = toCelsius(raw, from)
	if (isNaN(c)) {
		answer.innerText = 'Please enter a valid number.'
		return
	}
	const out = fromCelsius(c, to)
	answer.innerText = `${out.toFixed(2)} ${unitLabel(to)}`
}

function unitLabel(u) {
	switch (u) {
		case 'C': return '°C'
		case 'F': return '°F'
		case 'K': return 'K'
		default: return ''
	}
}

function swapUnits() {
	const fromEl = document.getElementById('fromUnit')
	const toEl = document.getElementById('toUnit')
	const tmp = fromEl.value
	fromEl.value = toEl.value
	toEl.value = tmp
}

document.addEventListener('DOMContentLoaded', () => {
	const valueEl = document.getElementById('value')
	const convertBtn = document.getElementById('convertBtn')
	const swapBtn = document.getElementById('swapBtn')

	if (convertBtn) convertBtn.addEventListener('click', convert)
	if (swapBtn) swapBtn.addEventListener('click', () => {
		swapUnits()
		convert()
	})

	if (valueEl) {
		valueEl.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') convert()
		})
	}
})