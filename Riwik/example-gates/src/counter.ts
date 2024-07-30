import Swal from "sweetalert2"
import { createAnim } from "./animate"

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    if (counter === 3) {
      showAlert('Que bien tienes 3 puntos, sigue así')
    }
    if (counter === 5) {
      createAnim()
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

async function showAlert(message: string): Promise<void> {
  await Swal.fire( {
    title: 'Hola!',
    text: message,
    icon: 'info',
    confirmButtonText: 'Entendido'
  });
}
