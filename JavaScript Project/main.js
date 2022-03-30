
window.onload  = () => {
    let button  = document.querySelector("#btn")
    button.addEventListener("click", bmiCalculator);
}

function bmiCalculator(){
    let weight = parseInt(document.querySelector("#Weight").value);
    let height = parseInt(document.querySelector("#Height").value);
    let result = document.querySelector("#Result")

	if (height === "" || isNaN(height))
		result.innerHTML = "ใส่ความสูงด้วย!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "ใส่น้ำหนักด้วย!";

	else {

		let bmi = (weight / ((height * height)/ 10000)).toFixed(2);

		if (bmi < 18.6) result.innerHTML =
			alert(`ตำกว่ามาตรฐาน : ${bmi}`);

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				alert(`สมส่วน : ${bmi}`);

		else result.innerHTML =
			alert(`น้ำหนักเกิน! : ${bmi}`);
	}
}
