const coffeeMachineModel = {
  isOn: false,
  coffeeType: "",
};

const coffeeMachineController = {
  toggle() {
    coffeeMachineModel.isOn = !coffeeMachineModel.isOn;
  },

  selectCoffeeType(e) {
    const buttonName = e.target.name;
    const buttonCoffeeTypes = {
      espresso: "espresso",
      cappuccino: "cappuccino",
    };
    const preferredCoffeeType = buttonCoffeeTypes[buttonName];
    coffeeMachineModel.coffeeType = preferredCoffeeType;
  },
};

const coffeeMachineView = {
  redraw() {
    const { isOn, coffeeType } = coffeeMachineModel;
    const coffeeMachine = document.querySelector(".coffee-machine");
    const coffeeMachinePower = document.querySelector(`[name="power"]`);

    coffeeMachine.classList.remove(
      "coffeeType-",
      "coffeeType-espresso",
      "coffeeType-cappuccino"
    );
    coffeeMachine.classList.add(`coffeeType-${coffeeType}`);

    if (isOn) {
      coffeeMachine.classList.add("is-on");
      coffeeMachinePower.classList.add("on");
    } else {
      coffeeMachine.classList.remove("is-on");
      coffeeMachinePower.classList.remove("on");
      coffeeMachine.classList.remove(
        "coffeeType-espresso",
        "coffeeType-cappuccino"
      );
    }
  },

  initEvents() {
    const powerButton = document.querySelector(`[name="power"]`);
    powerButton.addEventListener("click", () => {
      coffeeMachineController.toggle();
      coffeeMachineView.redraw();
    });

    const espressoButton = document.querySelector(`[name="espresso"]`);
    espressoButton.addEventListener("click", (e) => {
      coffeeMachineController.selectCoffeeType(e);
      coffeeMachineView.redraw();
    });

    const cappuccinoButton = document.querySelector(`[name="cappuccino"]`);
    cappuccinoButton.addEventListener("click", (e) => {
      coffeeMachineController.selectCoffeeType(e);
      coffeeMachineView.redraw();
    });
  },
};

coffeeMachineView.initEvents();
