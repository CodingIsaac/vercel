const container = document.getElementById('container');
const park = document.querySelectorAll('row');
const count = document.getElementById('count');
const total = document.getElementById('total');
const spaceSelect = document.getElementById('vehicles');
const cars = document.getElementById('cars');
const trucks = document.getElementById('trucks')


let parkPrice = +spaceSelect.value;

function setParkData(parkIndex, parkPrice) {
    localStorage.setItem('selectedparkIndex', parkIndex);
    localStorage.setItem('selectedParkPrice', parkPrice);
  }

function updateSelectedCount() {
    const selectedSpace = document.querySelectorAll('cars', 'truck')
    const spaceIndex = [...selectedSpace].map(space =>[...space].indexOf(space));
    localStorage.setItem('selectedSpace', JSON.stringify(spaceIndex));

    const selectedCount = selectedSpace.length;
    count.innerText = selectedCount;
    total.innerText = selectedCount * parkPrice;
setParkData(spaceSelect.spaceIndex, spaceSelect.value);
}





spaceSelect.addEventListener('change', e => {
    parkPrice = +e.target.value;
    setParkData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  });


container.addEventListener('click', e => {
    if (
      e.target.classList.contains('cars') &&
      !e.target.classList.contains('booked')
    ) {
        e.target.classList.contains('cars')
    } {
      e.target.classList.toggle('truck' && e.target.classList.contains('booked'));
      {
        e.target.classList.contains('truck')
      }
  
      updateSelectedCount();
    }
  });
  updateSelectedCount();
  
 