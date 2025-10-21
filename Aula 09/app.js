let count = 0;

const valor = document.querySelector("#valor");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("menos")) {
      count--;
    } else if (styles.contains("mais")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      valor.style.color = "white";
    } else if (count < 0) {
      valor.style.color = "purple";
    } else {
      valor.style.color = "blcak";
    }

    if (count >= 0 && count <= 50) {
      const cores = ["#069767ff", "#007a51ff", "#395d51ff", "#174e3cff", "#0a3325ff", "black"];
      const faixa = Math.floor(count / 10);
      document.body.style.backgroundColor = cores[faixa] || "white";
    }

    valor.textContent = count;
  });
});