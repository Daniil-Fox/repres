class LoanSlider {
  constructor(config = {}) {
    this.sliderElement = document.getElementById(
      config.sliderId || "loanSlider"
    );
    this.amountDisplay = document.getElementById(
      config.amountDisplayId || "loanAmountDisplay"
    );
    this.buttonElement = document.getElementById(
      config.buttonId || "loanButton"
    );

    this.currency = config.currency || "MXN";
    this.currentValue = parseInt(this.sliderElement.value);

    this.init();
  }
  init() {
    this.updateSliderBackground();

    this.updateAmountDisplay();
    this.updateButton();

    this.sliderElement.addEventListener(
      "input",
      this.handleSliderInput.bind(this)
    );
    this.buttonElement.addEventListener(
      "click",
      this.handleButtonClick.bind(this)
    );
  }

  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  handleSliderInput(event) {
    this.currentValue = parseInt(event.target.value);
    this.updateSliderBackground();
    this.updateAmountDisplay();
    this.updateButton();
  }

  updateSliderBackground() {
    const min = parseInt(this.sliderElement.min);
    const max = parseInt(this.sliderElement.max);
    const percentage = ((this.currentValue - min) / (max - min)) * 100;

    this.sliderElement.style.background = `linear-gradient(to right, #7B68EE ${percentage}%, #E6E8F0 ${percentage}%)`;
  }

  updateAmountDisplay() {
    this.amountDisplay.textContent = `${this.formatNumber(this.currentValue)} ${
      this.currency
    }`;
  }

  updateButton() {
    this.buttonElement.textContent = `Получить ${this.formatNumber(
      this.currentValue
    )} ${this.currency}`;
  }

  handleButtonClick(event) {
    console.log(`Loan requested for ${this.currentValue} ${this.currency}`);

    const loanRequestEvent = new CustomEvent("loan:request", {
      bubbles: true,
      detail: {
        amount: this.currentValue,
        currency: this.currency,
      },
    });

    this.buttonElement.dispatchEvent(loanRequestEvent);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loanSlider = new LoanSlider();

  document.addEventListener("loan:request", (event) => {
    console.log("Loan requested:", event.detail);
  });
});
